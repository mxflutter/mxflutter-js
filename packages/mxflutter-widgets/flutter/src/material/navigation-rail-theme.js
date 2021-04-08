"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationRailTheme = exports.NavigationRailThemeData = void 0;
const inherited_theme_1 = require("../widgets/inherited-theme");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class NavigationRailThemeData extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.backgroundColor = namedParameters.backgroundColor;
        this.elevation = namedParameters.elevation;
        this.unselectedLabelTextStyle = namedParameters.unselectedLabelTextStyle;
        this.selectedLabelTextStyle = namedParameters.selectedLabelTextStyle;
        this.unselectedIconTheme = namedParameters.unselectedIconTheme;
        this.selectedIconTheme = namedParameters.selectedIconTheme;
        this.groupAlignment = namedParameters.groupAlignment;
        this.labelType = namedParameters.labelType;
        this.className = 'NavigationRailThemeData';
    }
}
exports.NavigationRailThemeData = NavigationRailThemeData;
class NavigationRailTheme extends inherited_theme_1.InheritedTheme {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.data = namedParameters.data;
        this.child = namedParameters.child;
        this.className = 'NavigationRailTheme';
    }
}
exports.NavigationRailTheme = NavigationRailTheme;
