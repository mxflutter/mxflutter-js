//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

const yeoman = require('yeoman-environment');

const env = yeoman.createEnv();

module.exports = {
  // eslint-disable-next-line no-unused-vars
  create(option, callback) {
    env.lookup(() => {
      env.run('@mxflutter/mxflutter');
    });
  },
};
