"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToggleButtonsTheme = exports.ToggleButtonsThemeData = void 0;
const inherited_theme_1 = require("../widgets/inherited-theme");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class ToggleButtonsThemeData extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.textStyle = namedParameters.textStyle;
        this.constraints = namedParameters.constraints;
        this.color = namedParameters.color;
        this.selectedColor = namedParameters.selectedColor;
        this.disabledColor = namedParameters.disabledColor;
        this.fillColor = namedParameters.fillColor;
        this.focusColor = namedParameters.focusColor;
        this.highlightColor = namedParameters.highlightColor;
        this.hoverColor = namedParameters.hoverColor;
        this.splashColor = namedParameters.splashColor;
        this.borderColor = namedParameters.borderColor;
        this.selectedBorderColor = namedParameters.selectedBorderColor;
        this.disabledBorderColor = namedParameters.disabledBorderColor;
        this.borderRadius = namedParameters.borderRadius;
        this.borderWidth = namedParameters.borderWidth;
        this.className = 'ToggleButtonsThemeData';
    }
}
exports.ToggleButtonsThemeData = ToggleButtonsThemeData;
class ToggleButtonsTheme extends inherited_theme_1.InheritedTheme {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.data = namedParameters.data;
        this.child = namedParameters.child;
        this.className = 'ToggleButtonsTheme';
    }
}
exports.ToggleButtonsTheme = ToggleButtonsTheme;
