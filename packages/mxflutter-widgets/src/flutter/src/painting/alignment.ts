//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Offset, Size, Rect, TextDirection } from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class AlignmentGeometry extends MXDartClass {}
export { AlignmentGeometry };
class Alignment extends AlignmentGeometry {
  x: number;
  y: number;
  public constructor(x?: number, y?: number) {
    super();
    this.x = x;
    this.y = y;
    this.className = 'Alignment';
  }
  static get topLeft() {
    var jsObj = new Alignment();
    jsObj['className'] = 'Alignment';
    jsObj['constructorName'] = 'topLeft';
    return jsObj;
  }
  static get topCenter() {
    var jsObj = new Alignment();
    jsObj['className'] = 'Alignment';
    jsObj['constructorName'] = 'topCenter';
    return jsObj;
  }
  static get topRight() {
    var jsObj = new Alignment();
    jsObj['className'] = 'Alignment';
    jsObj['constructorName'] = 'topRight';
    return jsObj;
  }
  static get centerLeft() {
    var jsObj = new Alignment();
    jsObj['className'] = 'Alignment';
    jsObj['constructorName'] = 'centerLeft';
    return jsObj;
  }
  static get center() {
    var jsObj = new Alignment();
    jsObj['className'] = 'Alignment';
    jsObj['constructorName'] = 'center';
    return jsObj;
  }
  static get centerRight() {
    var jsObj = new Alignment();
    jsObj['className'] = 'Alignment';
    jsObj['constructorName'] = 'centerRight';
    return jsObj;
  }
  static get bottomLeft() {
    var jsObj = new Alignment();
    jsObj['className'] = 'Alignment';
    jsObj['constructorName'] = 'bottomLeft';
    return jsObj;
  }
  static get bottomCenter() {
    var jsObj = new Alignment();
    jsObj['className'] = 'Alignment';
    jsObj['constructorName'] = 'bottomCenter';
    return jsObj;
  }
  static get bottomRight() {
    var jsObj = new Alignment();
    jsObj['className'] = 'Alignment';
    jsObj['constructorName'] = 'bottomRight';
    return jsObj;
  }
}
export { Alignment };
class AlignmentDirectional extends AlignmentGeometry {
  start: number;
  y: number;
  public constructor(start?: number, y?: number) {
    super();
    this.start = start;
    this.y = y;
    this.className = 'AlignmentDirectional';
  }
  static get topStart() {
    var jsObj = new AlignmentDirectional();
    jsObj['className'] = 'AlignmentDirectional';
    jsObj['constructorName'] = 'topStart';
    return jsObj;
  }
  static get topCenter() {
    var jsObj = new AlignmentDirectional();
    jsObj['className'] = 'AlignmentDirectional';
    jsObj['constructorName'] = 'topCenter';
    return jsObj;
  }
  static get topEnd() {
    var jsObj = new AlignmentDirectional();
    jsObj['className'] = 'AlignmentDirectional';
    jsObj['constructorName'] = 'topEnd';
    return jsObj;
  }
  static get centerStart() {
    var jsObj = new AlignmentDirectional();
    jsObj['className'] = 'AlignmentDirectional';
    jsObj['constructorName'] = 'centerStart';
    return jsObj;
  }
  static get center() {
    var jsObj = new AlignmentDirectional();
    jsObj['className'] = 'AlignmentDirectional';
    jsObj['constructorName'] = 'center';
    return jsObj;
  }
  static get centerEnd() {
    var jsObj = new AlignmentDirectional();
    jsObj['className'] = 'AlignmentDirectional';
    jsObj['constructorName'] = 'centerEnd';
    return jsObj;
  }
  static get bottomStart() {
    var jsObj = new AlignmentDirectional();
    jsObj['className'] = 'AlignmentDirectional';
    jsObj['constructorName'] = 'bottomStart';
    return jsObj;
  }
  static get bottomCenter() {
    var jsObj = new AlignmentDirectional();
    jsObj['className'] = 'AlignmentDirectional';
    jsObj['constructorName'] = 'bottomCenter';
    return jsObj;
  }
  static get bottomEnd() {
    var jsObj = new AlignmentDirectional();
    jsObj['className'] = 'AlignmentDirectional';
    jsObj['constructorName'] = 'bottomEnd';
    return jsObj;
  }
}
export { AlignmentDirectional };
class _MixedAlignment extends AlignmentGeometry {
  x: number;
  start: number;
  y: number;
  public constructor(_x?: number, _start?: number, _y?: number) {
    super();
    this.x = _x;
    this.start = _start;
    this.y = _y;
    this.className = '_MixedAlignment';
  }
}
export { _MixedAlignment };
class TextAlignVertical extends MXDartClass {
  y: number;
  public constructor(namedParameters: { y?: number } = {}) {
    super();
    this.y = namedParameters.y;
    this.className = 'TextAlignVertical';
  }
  static get top() {
    var jsObj = new TextAlignVertical();
    jsObj['className'] = 'TextAlignVertical';
    jsObj['constructorName'] = 'top';
    return jsObj;
  }
  static get center() {
    var jsObj = new TextAlignVertical();
    jsObj['className'] = 'TextAlignVertical';
    jsObj['constructorName'] = 'center';
    return jsObj;
  }
  static get bottom() {
    var jsObj = new TextAlignVertical();
    jsObj['className'] = 'TextAlignVertical';
    jsObj['constructorName'] = 'bottom';
    return jsObj;
  }
}
export { TextAlignVertical };
