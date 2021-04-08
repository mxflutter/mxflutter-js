"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutlinedButtonTheme = exports.OutlinedButtonThemeData = void 0;
const inherited_theme_1 = require("../widgets/inherited-theme");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class OutlinedButtonThemeData extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.style = namedParameters.style;
        this.className = 'OutlinedButtonThemeData';
    }
}
exports.OutlinedButtonThemeData = OutlinedButtonThemeData;
class OutlinedButtonTheme extends inherited_theme_1.InheritedTheme {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.data = namedParameters.data;
        this.child = namedParameters.child;
        this.className = 'OutlinedButtonTheme';
    }
}
exports.OutlinedButtonTheme = OutlinedButtonTheme;
