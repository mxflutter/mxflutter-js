//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

const path = require('path');
const webpack = require('./webpack');
const webpackPackage = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  build(option) {
    const entryFile = path.resolve(__dirname, 'bootstrap.js');
    const outDir = path.resolve(process.cwd(), option.out || 'dist');
    const targetES5 = option.target && option.target.toLowerCase() === 'es5';

    const fileName = targetES5 ? 'main-es5.js' : 'main.js';

    const webpackConfig = {
      entry: {
        main: entryFile,
      },
      output: {
        path: outDir,
        library: 'MXFlutterSDK',
        libraryTarget: 'this',
        filename: fileName,
      },
      module: {
        rules: [{
          test: /\.ts?$/,
          loader: 'ts-loader',
        }],
      },
      plugins: [
        // 针对 ios jsc 进行 globalThis 兼容
        new webpackPackage.BannerPlugin({
          banner: `function getGlobalThis() {
            if (typeof globalThis !== 'undefined') return globalThis;
            if (typeof self !== 'undefined') return self;
            if (typeof window !== 'undefined') return window;
            if (typeof global !== 'undefined') return global;
            if (typeof this !== 'undefined') return this;
            throw new Error('Unable to locate global this object');
          }
          var globalThis = getGlobalThis();`, // 其值为字符串，将作为注释存在
          raw: true, // 如果值为 true，将直出，不会被作为注释
          entryOnly: true, // 如果值为 true，将只在入口 chunks 文件中添加
        }),
      ],
    };

    if (targetES5) {
      webpackConfig.output.environment = {
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
      webpackConfig.mode = 'production';
      webpackConfig.devtool = false;
      webpackConfig.optimization = {
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

    webpack(webpackConfig);
  },
};
