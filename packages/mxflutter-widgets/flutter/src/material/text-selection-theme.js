"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextSelectionTheme = exports.TextSelectionThemeData = void 0;
const inherited_theme_1 = require("../widgets/inherited-theme");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class TextSelectionThemeData extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.cursorColor = namedParameters.cursorColor;
        this.selectionColor = namedParameters.selectionColor;
        this.selectionHandleColor = namedParameters.selectionHandleColor;
        this.className = 'TextSelectionThemeData';
    }
}
exports.TextSelectionThemeData = TextSelectionThemeData;
class TextSelectionTheme extends inherited_theme_1.InheritedTheme {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.data = namedParameters.data;
        this.child = namedParameters.child;
        this.className = 'TextSelectionTheme';
    }
}
exports.TextSelectionTheme = TextSelectionTheme;
