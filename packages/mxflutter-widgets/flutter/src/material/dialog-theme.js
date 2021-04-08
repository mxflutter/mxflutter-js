"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.DialogTheme = void 0;
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class DialogTheme extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.backgroundColor = namedParameters.backgroundColor;
        this.elevation = namedParameters.elevation;
        this.shape = namedParameters.shape;
        this.titleTextStyle = namedParameters.titleTextStyle;
        this.contentTextStyle = namedParameters.contentTextStyle;
        this.className = 'DialogTheme';
    }
}
exports.DialogTheme = DialogTheme;
