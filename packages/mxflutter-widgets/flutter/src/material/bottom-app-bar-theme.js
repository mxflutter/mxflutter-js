"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.BottomAppBarTheme = void 0;
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class BottomAppBarTheme extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.color = namedParameters.color;
        this.elevation = namedParameters.elevation;
        this.shape = namedParameters.shape;
        this.className = 'BottomAppBarTheme';
    }
}
exports.BottomAppBarTheme = BottomAppBarTheme;
