// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Color } from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum BorderStyle {
  none = '{ "_name": "BorderStyle.none", "index": 0 }',
  solid = '{ "_name": "BorderStyle.solid", "index": 1 }',
};

export { BorderStyle };
class BorderSide extends MXDartClass {
  color: Color;
  width: number;
  style: BorderStyle;
  public constructor(namedParameters: {color?: Color, width?: number, style?: BorderStyle} = {}) {
    super();
    this.color = namedParameters.color;
    this.width = namedParameters.width;
    this.style = namedParameters.style;
    this.className = 'BorderSide';
  }
  static get none() {
    var jsObj = new BorderSide();
    jsObj['className'] = 'BorderSide';
    jsObj['constructorName'] = 'none';
    return jsObj;
  }
}
export { BorderSide };
abstract class ShapeBorder extends MXDartClass {}
export { ShapeBorder };
abstract class OutlinedBorder extends ShapeBorder {
  side: BorderSide;
}
export { OutlinedBorder };
class _CompoundBorder extends ShapeBorder {
  borders: Array<any>;
  public constructor(borders?: Array<any>) {
    super();
    this.borders = borders;
    this.className = '_CompoundBorder';
  }
}
export { _CompoundBorder };
