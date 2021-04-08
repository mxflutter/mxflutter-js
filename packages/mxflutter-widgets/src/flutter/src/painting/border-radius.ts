// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Radius } from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class BorderRadiusGeometry extends MXDartClass {}
export { BorderRadiusGeometry };
class BorderRadius extends BorderRadiusGeometry {
  topLeft: Radius;
  topRight: Radius;
  bottomLeft: Radius;
  bottomRight: Radius;
  static get zero() {
    var jsObj = new BorderRadius();
    jsObj['className'] = 'BorderRadius';
    jsObj['constructorName'] = 'zero';
    return jsObj;
  }
  static all(radius?: Radius) {
    var jsObj = new BorderRadius();
    jsObj['radius'] = radius;
    jsObj['constructorName'] = 'all';
    return jsObj;
  }
  static circular(radius?: number) {
    var jsObj = new BorderRadius();
    jsObj['radius'] = radius;
    jsObj['constructorName'] = 'circular';
    return jsObj;
  }
  static vertical(namedParameters: {top?: Radius, bottom?: Radius} = {}) {
    var jsObj = new BorderRadius();
    jsObj['top'] = namedParameters.top;
    jsObj['bottom'] = namedParameters.bottom;
    jsObj['constructorName'] = 'vertical';
    return jsObj;
  }
  static horizontal(namedParameters: {left?: Radius, right?: Radius} = {}) {
    var jsObj = new BorderRadius();
    jsObj['left'] = namedParameters.left;
    jsObj['right'] = namedParameters.right;
    jsObj['constructorName'] = 'horizontal';
    return jsObj;
  }
  static only(namedParameters: {topLeft?: Radius, topRight?: Radius, bottomLeft?: Radius, bottomRight?: Radius} = {}) {
    var jsObj = new BorderRadius();
    jsObj.topLeft = namedParameters.topLeft;
    jsObj.topRight = namedParameters.topRight;
    jsObj.bottomLeft = namedParameters.bottomLeft;
    jsObj.bottomRight = namedParameters.bottomRight;
    jsObj['constructorName'] = 'only';
    return jsObj;
  }
}
export { BorderRadius };
class BorderRadiusDirectional extends BorderRadiusGeometry {
  topStart: Radius;
  topEnd: Radius;
  bottomStart: Radius;
  bottomEnd: Radius;
  static get zero() {
    var jsObj = new BorderRadiusDirectional();
    jsObj['className'] = 'BorderRadiusDirectional';
    jsObj['constructorName'] = 'zero';
    return jsObj;
  }
  static all(radius?: Radius) {
    var jsObj = new BorderRadiusDirectional();
    jsObj['radius'] = radius;
    jsObj['constructorName'] = 'all';
    return jsObj;
  }
  static circular(radius?: number) {
    var jsObj = new BorderRadiusDirectional();
    jsObj['radius'] = radius;
    jsObj['constructorName'] = 'circular';
    return jsObj;
  }
  static vertical(namedParameters: {top?: Radius, bottom?: Radius} = {}) {
    var jsObj = new BorderRadiusDirectional();
    jsObj['top'] = namedParameters.top;
    jsObj['bottom'] = namedParameters.bottom;
    jsObj['constructorName'] = 'vertical';
    return jsObj;
  }
  static horizontal(namedParameters: {start?: Radius, end?: Radius} = {}) {
    var jsObj = new BorderRadiusDirectional();
    jsObj['start'] = namedParameters.start;
    jsObj['end'] = namedParameters.end;
    jsObj['constructorName'] = 'horizontal';
    return jsObj;
  }
  static only(namedParameters: {topStart?: Radius, topEnd?: Radius, bottomStart?: Radius, bottomEnd?: Radius} = {}) {
    var jsObj = new BorderRadiusDirectional();
    jsObj.topStart = namedParameters.topStart;
    jsObj.topEnd = namedParameters.topEnd;
    jsObj.bottomStart = namedParameters.bottomStart;
    jsObj.bottomEnd = namedParameters.bottomEnd;
    jsObj['constructorName'] = 'only';
    return jsObj;
  }
}
export { BorderRadiusDirectional };
class _MixedBorderRadius extends BorderRadiusGeometry {
  topLeft: Radius;
  topRight: Radius;
  bottomLeft: Radius;
  bottomRight: Radius;
  topStart: Radius;
  topEnd: Radius;
  bottomStart: Radius;
  bottomEnd: Radius;
  public constructor(_topLeft?: Radius, _topRight?: Radius, _bottomLeft?: Radius, _bottomRight?: Radius, _topStart?: Radius, _topEnd?: Radius, _bottomStart?: Radius, _bottomEnd?: Radius) {
    super();
    this.topLeft = _topLeft;
    this.topRight = _topRight;
    this.bottomLeft = _bottomLeft;
    this.bottomRight = _bottomRight;
    this.topStart = _topStart;
    this.topEnd = _topEnd;
    this.bottomStart = _bottomStart;
    this.bottomEnd = _bottomEnd;
    this.className = '_MixedBorderRadius';
  }
}
export { _MixedBorderRadius };
