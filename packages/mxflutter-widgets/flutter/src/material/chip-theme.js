"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChipThemeData = exports.ChipTheme = void 0;
const inherited_theme_1 = require("../widgets/inherited-theme");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class ChipTheme extends inherited_theme_1.InheritedTheme {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.data = namedParameters.data;
        this.child = namedParameters.child;
        this.className = 'ChipTheme';
    }
}
exports.ChipTheme = ChipTheme;
class ChipThemeData extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.backgroundColor = namedParameters.backgroundColor;
        this.deleteIconColor = namedParameters.deleteIconColor;
        this.disabledColor = namedParameters.disabledColor;
        this.selectedColor = namedParameters.selectedColor;
        this.secondarySelectedColor = namedParameters.secondarySelectedColor;
        this.shadowColor = namedParameters.shadowColor;
        this.selectedShadowColor = namedParameters.selectedShadowColor;
        this.showCheckmark = namedParameters.showCheckmark;
        this.checkmarkColor = namedParameters.checkmarkColor;
        this.labelPadding = namedParameters.labelPadding;
        this.padding = namedParameters.padding;
        this.shape = namedParameters.shape;
        this.labelStyle = namedParameters.labelStyle;
        this.secondaryLabelStyle = namedParameters.secondaryLabelStyle;
        this.brightness = namedParameters.brightness;
        this.elevation = namedParameters.elevation;
        this.pressElevation = namedParameters.pressElevation;
        this.className = 'ChipThemeData';
    }
    static fromDefaults(namedParameters = {}) {
        var jsObj = new ChipThemeData();
        jsObj.brightness = namedParameters.brightness;
        jsObj['primaryColor'] = namedParameters.primaryColor;
        jsObj['secondaryColor'] = namedParameters.secondaryColor;
        jsObj.labelStyle = namedParameters.labelStyle;
        jsObj['constructorName'] = 'fromDefaults';
        return jsObj;
    }
}
exports.ChipThemeData = ChipThemeData;
