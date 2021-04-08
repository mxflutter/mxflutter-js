"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.TooltipTheme = exports.TooltipThemeData = void 0;
const inherited_theme_1 = require("../widgets/inherited-theme");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class TooltipThemeData extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.height = namedParameters.height;
        this.padding = namedParameters.padding;
        this.margin = namedParameters.margin;
        this.verticalOffset = namedParameters.verticalOffset;
        this.preferBelow = namedParameters.preferBelow;
        this.excludeFromSemantics = namedParameters.excludeFromSemantics;
        this.decoration = namedParameters.decoration;
        this.textStyle = namedParameters.textStyle;
        this.waitDuration = namedParameters.waitDuration;
        this.showDuration = namedParameters.showDuration;
        this.className = 'TooltipThemeData';
    }
}
exports.TooltipThemeData = TooltipThemeData;
class TooltipTheme extends inherited_theme_1.InheritedTheme {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.data = namedParameters.data;
        this.child = namedParameters.child;
        this.className = 'TooltipTheme';
    }
}
exports.TooltipTheme = TooltipTheme;
