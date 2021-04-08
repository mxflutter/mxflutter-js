"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorSwatch = exports.HSLColor = exports.HSVColor = void 0;
const mx_dart_sdk_1 = require("../../../mx-dart-sdk");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class HSVColor extends mxflutter_base_1.MXDartClass {
    static fromColor(color) {
        var jsObj = new HSVColor();
        jsObj['color'] = color;
        jsObj['constructorName'] = 'fromColor';
        return jsObj;
    }
    static fromAHSV(alpha, hue, saturation, value) {
        var jsObj = new HSVColor();
        jsObj.alpha = alpha;
        jsObj.hue = hue;
        jsObj.saturation = saturation;
        jsObj.value = value;
        jsObj['constructorName'] = 'fromAHSV';
        return jsObj;
    }
}
exports.HSVColor = HSVColor;
class HSLColor extends mxflutter_base_1.MXDartClass {
    static fromColor(color) {
        var jsObj = new HSLColor();
        jsObj['color'] = color;
        jsObj['constructorName'] = 'fromColor';
        return jsObj;
    }
    static fromAHSL(alpha, hue, saturation, lightness) {
        var jsObj = new HSLColor();
        jsObj.alpha = alpha;
        jsObj.hue = hue;
        jsObj.saturation = saturation;
        jsObj.lightness = lightness;
        jsObj['constructorName'] = 'fromAHSL';
        return jsObj;
    }
}
exports.HSLColor = HSLColor;
class ColorSwatch extends mx_dart_sdk_1.Color {
    constructor(primary, _swatch) {
        super();
        this['primary'] = primary;
        this.swatch = _swatch;
        this.className = 'ColorSwatch';
    }
}
exports.ColorSwatch = ColorSwatch;
