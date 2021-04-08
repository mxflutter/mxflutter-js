"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonBarTheme = exports.ButtonBarThemeData = void 0;
const framework_1 = require("../widgets/framework");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class ButtonBarThemeData extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.alignment = namedParameters.alignment;
        this.mainAxisSize = namedParameters.mainAxisSize;
        this.buttonTextTheme = namedParameters.buttonTextTheme;
        this.buttonMinWidth = namedParameters.buttonMinWidth;
        this.buttonHeight = namedParameters.buttonHeight;
        this.buttonPadding = namedParameters.buttonPadding;
        this.buttonAlignedDropdown = namedParameters.buttonAlignedDropdown;
        this.layoutBehavior = namedParameters.layoutBehavior;
        this.overflowDirection = namedParameters.overflowDirection;
        this.className = 'ButtonBarThemeData';
    }
}
exports.ButtonBarThemeData = ButtonBarThemeData;
class ButtonBarTheme extends framework_1.InheritedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.data = namedParameters.data;
        this.child = namedParameters.child;
        this.className = 'ButtonBarTheme';
    }
}
exports.ButtonBarTheme = ButtonBarTheme;
