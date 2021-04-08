"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._DefaultCupertinoTextThemeData = exports._CupertinoTextThemeDefaults = exports._CupertinoThemeDefaults = exports._NoDefaultCupertinoThemeData = exports.CupertinoThemeData = exports._InheritedCupertinoTheme = exports.CupertinoTheme = void 0;
const text_theme_1 = require("./text-theme");
const framework_1 = require("../widgets/framework");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class CupertinoTheme extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.data = namedParameters.data;
        this.child = namedParameters.child;
        this.className = 'CupertinoTheme';
    }
}
exports.CupertinoTheme = CupertinoTheme;
class _InheritedCupertinoTheme extends framework_1.InheritedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.theme = namedParameters.theme;
        this.child = namedParameters.child;
        this.className = '_InheritedCupertinoTheme';
    }
}
exports._InheritedCupertinoTheme = _InheritedCupertinoTheme;
class CupertinoThemeData extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.brightness = namedParameters.brightness;
        this.primaryColor = namedParameters.primaryColor;
        this.primaryContrastingColor = namedParameters.primaryContrastingColor;
        this.textTheme = namedParameters.textTheme;
        this.barBackgroundColor = namedParameters.barBackgroundColor;
        this.scaffoldBackgroundColor = namedParameters.scaffoldBackgroundColor;
        this.className = 'CupertinoThemeData';
    }
    static raw(brightness, primaryColor, primaryContrastingColor, textTheme, barBackgroundColor, scaffoldBackgroundColor) {
        var jsObj = new CupertinoThemeData();
        jsObj.brightness = brightness;
        jsObj.primaryColor = primaryColor;
        jsObj.primaryContrastingColor = primaryContrastingColor;
        jsObj.textTheme = textTheme;
        jsObj.barBackgroundColor = barBackgroundColor;
        jsObj.scaffoldBackgroundColor = scaffoldBackgroundColor;
        jsObj['constructorName'] = 'raw';
        return jsObj;
    }
}
exports.CupertinoThemeData = CupertinoThemeData;
class _NoDefaultCupertinoThemeData extends CupertinoThemeData {
    constructor(brightness, primaryColor, primaryContrastingColor, textTheme, barBackgroundColor, scaffoldBackgroundColor) {
        super();
        this.brightness = brightness;
        this.primaryColor = primaryColor;
        this.primaryContrastingColor = primaryContrastingColor;
        this.textTheme = textTheme;
        this.barBackgroundColor = barBackgroundColor;
        this.scaffoldBackgroundColor = scaffoldBackgroundColor;
        this.className = '_NoDefaultCupertinoThemeData';
    }
}
exports._NoDefaultCupertinoThemeData = _NoDefaultCupertinoThemeData;
class _CupertinoThemeDefaults extends mxflutter_base_1.MXDartClass {
    constructor(brightness, primaryColor, primaryContrastingColor, barBackgroundColor, scaffoldBackgroundColor, textThemeDefaults) {
        super();
        this.brightness = brightness;
        this.primaryColor = primaryColor;
        this.primaryContrastingColor = primaryContrastingColor;
        this.barBackgroundColor = barBackgroundColor;
        this.scaffoldBackgroundColor = scaffoldBackgroundColor;
        this.textThemeDefaults = textThemeDefaults;
        this.className = '_CupertinoThemeDefaults';
    }
}
exports._CupertinoThemeDefaults = _CupertinoThemeDefaults;
class _CupertinoTextThemeDefaults extends mxflutter_base_1.MXDartClass {
    constructor(labelColor, inactiveGray) {
        super();
        this.labelColor = labelColor;
        this.inactiveGray = inactiveGray;
        this.className = '_CupertinoTextThemeDefaults';
    }
}
exports._CupertinoTextThemeDefaults = _CupertinoTextThemeDefaults;
class _DefaultCupertinoTextThemeData extends text_theme_1.CupertinoTextThemeData {
    constructor(namedParameters = {}) {
        super();
        this.labelColor = namedParameters.labelColor;
        this.inactiveGray = namedParameters.inactiveGray;
        this.primaryColor = namedParameters.primaryColor;
        this.className = '_DefaultCupertinoTextThemeData';
    }
}
exports._DefaultCupertinoTextThemeData = _DefaultCupertinoTextThemeData;
