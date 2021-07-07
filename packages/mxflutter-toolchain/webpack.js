//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');

const webpackCommonConfig = {
  mode: 'development',
  target: 'node',
  devtool: 'inline-source-map',
  output: {
    filename: '[name].js',
    chunkFilename: '[id].js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.png', '.jpg'],
    symlinks: true,
    modules: [path.resolve(process.cwd(), 'node_modules')],
  },
  resolveLoader: {
    modules: [path.resolve(__dirname, 'node_modules'), 'node_modules'],
  },
};

module.exports = (webpackConfig, enableWatch) => {
  const cfg = merge(webpackCommonConfig, webpackConfig);

  const compiler = webpack(cfg);

  const callback = (err, stats) => {
    if (err || stats.hasErrors()) {
      // 在这里处理错误
    }

    console.log(stats.toString({
      colors: true,
      maxModues: 1000,
    }));
  };

  if (enableWatch) {
    compiler.watch(
      {
        aggregateTimeout: 300,
        poll: undefined,
      },
      callback,
    );
  } else {
    compiler.run(callback);
  }
};
