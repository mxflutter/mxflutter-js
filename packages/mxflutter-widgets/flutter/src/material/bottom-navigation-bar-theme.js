"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.BottomNavigationBarTheme = exports.BottomNavigationBarThemeData = void 0;
const framework_1 = require("../widgets/framework");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class BottomNavigationBarThemeData extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.backgroundColor = namedParameters.backgroundColor;
        this.elevation = namedParameters.elevation;
        this.selectedIconTheme = namedParameters.selectedIconTheme;
        this.unselectedIconTheme = namedParameters.unselectedIconTheme;
        this.selectedItemColor = namedParameters.selectedItemColor;
        this.unselectedItemColor = namedParameters.unselectedItemColor;
        this.selectedLabelStyle = namedParameters.selectedLabelStyle;
        this.unselectedLabelStyle = namedParameters.unselectedLabelStyle;
        this.showSelectedLabels = namedParameters.showSelectedLabels;
        this.showUnselectedLabels = namedParameters.showUnselectedLabels;
        this.type = namedParameters.type;
        this.className = 'BottomNavigationBarThemeData';
    }
}
exports.BottomNavigationBarThemeData = BottomNavigationBarThemeData;
class BottomNavigationBarTheme extends framework_1.InheritedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.data = namedParameters.data;
        this.child = namedParameters.child;
        this.className = 'BottomNavigationBarTheme';
    }
}
exports.BottomNavigationBarTheme = BottomNavigationBarTheme;
