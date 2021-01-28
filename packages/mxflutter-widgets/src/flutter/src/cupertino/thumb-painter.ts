//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Color, Canvas, Rect } from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class CupertinoThumbPainter extends MXDartClass {
  color: Color;
  shadows: Array<any>;
  public constructor(namedParameters: { color?: Color; shadows?: Array<any> } = {}) {
    super();
    this.color = namedParameters.color;
    this.shadows = namedParameters.shadows;
    this.className = 'CupertinoThumbPainter';
  }
  static get radius() {
    return 14.0;
  }
  static get extension() {
    return 7.0;
  }
  static switchThumb(namedParameters: { color?: Color; shadows?: Array<any> } = {}) {
    var jsObj = new CupertinoThumbPainter();
    jsObj.color = namedParameters.color;
    jsObj.shadows = namedParameters.shadows;
    jsObj['constructorName'] = 'switchThumb';
    return jsObj;
  }
}
export { CupertinoThumbPainter };
