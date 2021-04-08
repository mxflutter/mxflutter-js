"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorScheme = void 0;
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class ColorScheme extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.primary = namedParameters.primary;
        this.primaryVariant = namedParameters.primaryVariant;
        this.secondary = namedParameters.secondary;
        this.secondaryVariant = namedParameters.secondaryVariant;
        this.surface = namedParameters.surface;
        this.background = namedParameters.background;
        this.error = namedParameters.error;
        this.onPrimary = namedParameters.onPrimary;
        this.onSecondary = namedParameters.onSecondary;
        this.onSurface = namedParameters.onSurface;
        this.onBackground = namedParameters.onBackground;
        this.onError = namedParameters.onError;
        this.brightness = namedParameters.brightness;
        this.className = 'ColorScheme';
    }
    static fromSwatch(namedParameters = {}) {
        var jsObj = new ColorScheme();
        jsObj['primarySwatch'] = namedParameters.primarySwatch;
        jsObj['primaryColorDark'] = namedParameters.primaryColorDark;
        jsObj['accentColor'] = namedParameters.accentColor;
        jsObj['cardColor'] = namedParameters.cardColor;
        jsObj['backgroundColor'] = namedParameters.backgroundColor;
        jsObj['errorColor'] = namedParameters.errorColor;
        jsObj.brightness = namedParameters.brightness;
        jsObj['constructorName'] = 'fromSwatch';
        return jsObj;
    }
    static light(namedParameters = {}) {
        var jsObj = new ColorScheme();
        jsObj.primary = namedParameters.primary;
        jsObj.primaryVariant = namedParameters.primaryVariant;
        jsObj.secondary = namedParameters.secondary;
        jsObj.secondaryVariant = namedParameters.secondaryVariant;
        jsObj.surface = namedParameters.surface;
        jsObj.background = namedParameters.background;
        jsObj.error = namedParameters.error;
        jsObj.onPrimary = namedParameters.onPrimary;
        jsObj.onSecondary = namedParameters.onSecondary;
        jsObj.onSurface = namedParameters.onSurface;
        jsObj.onBackground = namedParameters.onBackground;
        jsObj.onError = namedParameters.onError;
        jsObj.brightness = namedParameters.brightness;
        jsObj['constructorName'] = 'light';
        return jsObj;
    }
    static dark(namedParameters = {}) {
        var jsObj = new ColorScheme();
        jsObj.primary = namedParameters.primary;
        jsObj.primaryVariant = namedParameters.primaryVariant;
        jsObj.secondary = namedParameters.secondary;
        jsObj.secondaryVariant = namedParameters.secondaryVariant;
        jsObj.surface = namedParameters.surface;
        jsObj.background = namedParameters.background;
        jsObj.error = namedParameters.error;
        jsObj.onPrimary = namedParameters.onPrimary;
        jsObj.onSecondary = namedParameters.onSecondary;
        jsObj.onSurface = namedParameters.onSurface;
        jsObj.onBackground = namedParameters.onBackground;
        jsObj.onError = namedParameters.onError;
        jsObj.brightness = namedParameters.brightness;
        jsObj['constructorName'] = 'dark';
        return jsObj;
    }
    static highContrastLight(namedParameters = {}) {
        var jsObj = new ColorScheme();
        jsObj.primary = namedParameters.primary;
        jsObj.primaryVariant = namedParameters.primaryVariant;
        jsObj.secondary = namedParameters.secondary;
        jsObj.secondaryVariant = namedParameters.secondaryVariant;
        jsObj.surface = namedParameters.surface;
        jsObj.background = namedParameters.background;
        jsObj.error = namedParameters.error;
        jsObj.onPrimary = namedParameters.onPrimary;
        jsObj.onSecondary = namedParameters.onSecondary;
        jsObj.onSurface = namedParameters.onSurface;
        jsObj.onBackground = namedParameters.onBackground;
        jsObj.onError = namedParameters.onError;
        jsObj.brightness = namedParameters.brightness;
        jsObj['constructorName'] = 'highContrastLight';
        return jsObj;
    }
    static highContrastDark(namedParameters = {}) {
        var jsObj = new ColorScheme();
        jsObj.primary = namedParameters.primary;
        jsObj.primaryVariant = namedParameters.primaryVariant;
        jsObj.secondary = namedParameters.secondary;
        jsObj.secondaryVariant = namedParameters.secondaryVariant;
        jsObj.surface = namedParameters.surface;
        jsObj.background = namedParameters.background;
        jsObj.error = namedParameters.error;
        jsObj.onPrimary = namedParameters.onPrimary;
        jsObj.onSecondary = namedParameters.onSecondary;
        jsObj.onSurface = namedParameters.onSurface;
        jsObj.onBackground = namedParameters.onBackground;
        jsObj.onError = namedParameters.onError;
        jsObj.brightness = namedParameters.brightness;
        jsObj['constructorName'] = 'highContrastDark';
        return jsObj;
    }
}
exports.ColorScheme = ColorScheme;
