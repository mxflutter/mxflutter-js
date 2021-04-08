// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Color } from '../../../mx-dart-sdk';
import { ShapeBorder, BorderSide, BorderStyle } from './borders';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum BoxShape {
  rectangle = '{ "_name": "BoxShape.rectangle", "index": 0 }',
  circle = '{ "_name": "BoxShape.circle", "index": 1 }',
};

export { BoxShape };
abstract class BoxBorder extends ShapeBorder {}
export { BoxBorder };
class Border extends BoxBorder {
  top: BorderSide;
  right: BorderSide;
  bottom: BorderSide;
  left: BorderSide;
  public constructor(namedParameters: {top?: BorderSide, right?: BorderSide, bottom?: BorderSide, left?: BorderSide} = {}) {
    super();
    this.top = namedParameters.top;
    this.right = namedParameters.right;
    this.bottom = namedParameters.bottom;
    this.left = namedParameters.left;
    this.className = 'Border';
  }
  static all(namedParameters: {color?: Color, width?: number, style?: BorderStyle} = {}) {
    var jsObj = new Border();
    jsObj['color'] = namedParameters.color;
    jsObj['width'] = namedParameters.width;
    jsObj['style'] = namedParameters.style;
    jsObj['constructorName'] = 'all';
    return jsObj;
  }
  static fromBorderSide(side?: BorderSide) {
    var jsObj = new Border();
    jsObj['side'] = side;
    jsObj['constructorName'] = 'fromBorderSide';
    return jsObj;
  }
  static symmetric(namedParameters: {vertical?: BorderSide, horizontal?: BorderSide} = {}) {
    var jsObj = new Border();
    jsObj['vertical'] = namedParameters.vertical;
    jsObj['horizontal'] = namedParameters.horizontal;
    jsObj['constructorName'] = 'symmetric';
    return jsObj;
  }
}
export { Border };
class BorderDirectional extends BoxBorder {
  top: BorderSide;
  start: BorderSide;
  end: BorderSide;
  bottom: BorderSide;
  public constructor(namedParameters: {top?: BorderSide, start?: BorderSide, end?: BorderSide, bottom?: BorderSide} = {}) {
    super();
    this.top = namedParameters.top;
    this.start = namedParameters.start;
    this.end = namedParameters.end;
    this.bottom = namedParameters.bottom;
    this.className = 'BorderDirectional';
  }
}
export { BorderDirectional };
