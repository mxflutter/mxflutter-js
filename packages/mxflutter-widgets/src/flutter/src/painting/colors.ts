// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Color } from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class HSVColor extends MXDartClass {
  alpha: number;
  hue: number;
  saturation: number;
  value: number;
  static fromColor(color?: Color) {
    var jsObj = new HSVColor();
    jsObj['color'] = color;
    jsObj['constructorName'] = 'fromColor';
    return jsObj;
  }
  static fromAHSV(alpha?: number, hue?: number, saturation?: number, value?: number) {
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
  alpha: number;
  hue: number;
  saturation: number;
  lightness: number;
  static fromColor(color?: Color) {
    var jsObj = new HSLColor();
    jsObj['color'] = color;
    jsObj['constructorName'] = 'fromColor';
    return jsObj;
  }
  static fromAHSL(alpha?: number, hue?: number, saturation?: number, lightness?: number) {
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
  swatch: Map<any, any>;
  public constructor(primary?: number, _swatch?: Map<any, any>) {
    super();
    this['primary'] = primary;
    this.swatch = _swatch;
    this.className = 'ColorSwatch';
  }
}
export { ColorSwatch };
