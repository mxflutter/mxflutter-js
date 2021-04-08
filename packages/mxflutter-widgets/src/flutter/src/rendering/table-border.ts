// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Color } from '../../../mx-dart-sdk';
import { BorderSide, BorderStyle } from '../painting/borders';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class TableBorder extends MXDartClass {
  top: BorderSide;
  right: BorderSide;
  bottom: BorderSide;
  left: BorderSide;
  horizontalInside: BorderSide;
  verticalInside: BorderSide;
  public constructor(namedParameters: {top?: BorderSide, right?: BorderSide, bottom?: BorderSide, left?: BorderSide, horizontalInside?: BorderSide, verticalInside?: BorderSide} = {}) {
    super();
    this.top = namedParameters.top;
    this.right = namedParameters.right;
    this.bottom = namedParameters.bottom;
    this.left = namedParameters.left;
    this.horizontalInside = namedParameters.horizontalInside;
    this.verticalInside = namedParameters.verticalInside;
    this.className = 'TableBorder';
  }
  static all(namedParameters: {color?: Color, width?: number, style?: BorderStyle} = {}) {
    var jsObj = new TableBorder();
    jsObj['color'] = namedParameters.color;
    jsObj['width'] = namedParameters.width;
    jsObj['style'] = namedParameters.style;
    jsObj['constructorName'] = 'all';
    return jsObj;
  }
  static symmetric(namedParameters: {inside?: BorderSide, outside?: BorderSide} = {}) {
    var jsObj = new TableBorder();
    jsObj['inside'] = namedParameters.inside;
    jsObj['outside'] = namedParameters.outside;
    jsObj['constructorName'] = 'symmetric';
    return jsObj;
  }
}
export { TableBorder };
