//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

const path = require('path');
const webpack = require('./webpack');
const TerserPlugin = require('terser-webpack-plugin');

// mode: 'production',
module.exports = {
  build(entry, option) {
    const entryFile = path.resolve(process.cwd(), entry);
    const outDir = path.resolve(process.cwd(), option.out); // 默认当前工程dist目录

    const targetES5 = option.target && option.target.toLowerCase() === 'es5';

    const entryName = targetES5 ? `bundle-${option.app || 'index'}-es5` : `bundle-${option.app || 'index'}`;

    const appConfig = {
      entry: {
        [entryName]: entryFile,
      },
      output: {
        path: outDir,
      },
      externals: [
        {
          // eslint-disable-next-line quote-props
          'dart_sdk': 'globalThis.require("dart_sdk")',
          '@mxflutter/mxflutter-base': 'globalThis.MXFlutterSDK.MXFlutterBase',
          '@mxflutter/mxflutter': 'globalThis.MXFlutterSDK.MXFlutter',
          '@mxflutter/mxflutter-widgets': 'globalThis.MXFlutterSDK.MXFlutterWidgets',
        },
        function (context, request, callback) {
          // widget 包路径加载方式兼容
          // eslint-disable-next-line no-useless-escape
          if (/^@mxflutter\/mxflutter-widgets\/[\w\-]+$/.test(request)) {
            let widgetsMod = request.replace('@mxflutter/mxflutter-widgets/', '');
            if (widgetsMod === 'mx-dart-sdk') {
              widgetsMod = 'mxDartSdk';
            } else if (widgetsMod === 'vector-math-64') {
              widgetsMod = 'vectorMath64';
            }
            return callback(null, `globalThis.MXFlutterSDK.MXFlutterWidgets.${widgetsMod}`);
          }
          callback();
        },
      ],
      module: {
        rules: [{
          test: /\.ts?$/,
          loader: 'ts-loader',
          options: {
            configFile: path.resolve(process.cwd(), targetES5 ? 'tsconfig.es5.json' : 'tsconfig.json'),
          },
        }],
      },
    };

    if (targetES5) {
      appConfig.output.environment = {
        arrowFunction: false,
        bigIntLiteral: false,
        const: false,
        destructuring: false,
        dynamicImport: false,
        forOf: false,
        module: false,
      };
    }

    if (option.env === 'production') {
      appConfig.mode = 'production';
      appConfig.devtool = false;
      appConfig.optimization = {
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              ecma: undefined,
              sourceMap: false,
              keep_fnames: true,
              keep_classnames: true,
              safari10: true,
            },
          }),
        ],
      };
    }

    webpack(appConfig, !!option.watch);
  },
};
