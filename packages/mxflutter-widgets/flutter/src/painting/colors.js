//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { Color } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class HSVColor extends MXDartClass {
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
export { HSVColor };
class HSLColor extends MXDartClass {
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
export { HSLColor };
class ColorSwatch extends Color {
    constructor(primary, _swatch) {
        super();
        this['primary'] = primary;
        this.swatch = _swatch;
        this.className = 'ColorSwatch';
    }
}
export { ColorSwatch };
