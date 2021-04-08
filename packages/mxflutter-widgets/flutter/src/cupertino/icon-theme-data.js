"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.CupertinoIconThemeData = void 0;
const icon_theme_data_1 = require("../widgets/icon-theme-data");
class CupertinoIconThemeData extends icon_theme_data_1.IconThemeData {
    constructor(namedParameters = {}) {
        super();
        this['color'] = namedParameters.color;
        this['opacity'] = namedParameters.opacity;
        this['size'] = namedParameters.size;
        this.className = 'CupertinoIconThemeData';
    }
}
exports.CupertinoIconThemeData = CupertinoIconThemeData;
