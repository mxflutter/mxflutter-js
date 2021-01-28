//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Size, Rect, TextDirection, WindowPadding } from '../../../mx-dart-sdk';
import { Axis } from './basic-types';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class EdgeInsetsGeometry extends MXDartClass {
  static get infinity() {
    var jsObj = new (class MXEdgeInsetsGeometry extends EdgeInsetsGeometry {})();
    jsObj['className'] = 'EdgeInsetsGeometry';
    jsObj['constructorName'] = 'infinity';
    return jsObj;
  }
}
export { EdgeInsetsGeometry };
class EdgeInsets extends EdgeInsetsGeometry {
  left: number;
  top: number;
  right: number;
  bottom: number;
  static get zero() {
    var jsObj = new EdgeInsets();
    jsObj['className'] = 'EdgeInsets';
    jsObj['constructorName'] = 'zero';
    return jsObj;
  }
  static fromLTRB(left?: number, top?: number, right?: number, bottom?: number) {
    var jsObj = new EdgeInsets();
    jsObj.left = left;
    jsObj.top = top;
    jsObj.right = right;
    jsObj.bottom = bottom;
    jsObj['constructorName'] = 'fromLTRB';
    return jsObj;
  }
  static all(value?: number) {
    var jsObj = new EdgeInsets();
    jsObj['value'] = value;
    jsObj['constructorName'] = 'all';
    return jsObj;
  }
  static only(namedParameters: { left?: number; top?: number; right?: number; bottom?: number } = {}) {
    var jsObj = new EdgeInsets();
    jsObj.left = namedParameters.left;
    jsObj.top = namedParameters.top;
    jsObj.right = namedParameters.right;
    jsObj.bottom = namedParameters.bottom;
    jsObj['constructorName'] = 'only';
    return jsObj;
  }
  static symmetric(namedParameters: { vertical?: number; horizontal?: number } = {}) {
    var jsObj = new EdgeInsets();
    jsObj['vertical'] = namedParameters.vertical;
    jsObj['horizontal'] = namedParameters.horizontal;
    jsObj['constructorName'] = 'symmetric';
    return jsObj;
  }
  static fromWindowPadding(padding?: WindowPadding, devicePixelRatio?: number) {
    var jsObj = new EdgeInsets();
    jsObj['padding'] = padding;
    jsObj['devicePixelRatio'] = devicePixelRatio;
    jsObj['constructorName'] = 'fromWindowPadding';
    return jsObj;
  }
  // MX modified begin
  public static fromJson(mapObj: any) {
    if (mapObj === null || mapObj === undefined) {
      return null;
    }

    const obj = new EdgeInsets();

    for (const p in mapObj) {
      if (mapObj.hasOwnProperty(p)) {
        let v = mapObj[p];
        obj[p] = v;
      }
    }

    return obj;
  }
  // MX modified end
}
export { EdgeInsets };
class EdgeInsetsDirectional extends EdgeInsetsGeometry {
  start: number;
  top: number;
  end: number;
  bottom: number;
  static get zero() {
    var jsObj = new EdgeInsetsDirectional();
    jsObj['className'] = 'EdgeInsetsDirectional';
    jsObj['constructorName'] = 'zero';
    return jsObj;
  }
  static fromSTEB(start?: number, top?: number, end?: number, bottom?: number) {
    var jsObj = new EdgeInsetsDirectional();
    jsObj.start = start;
    jsObj.top = top;
    jsObj.end = end;
    jsObj.bottom = bottom;
    jsObj['constructorName'] = 'fromSTEB';
    return jsObj;
  }
  static only(namedParameters: { start?: number; top?: number; end?: number; bottom?: number } = {}) {
    var jsObj = new EdgeInsetsDirectional();
    jsObj.start = namedParameters.start;
    jsObj.top = namedParameters.top;
    jsObj.end = namedParameters.end;
    jsObj.bottom = namedParameters.bottom;
    jsObj['constructorName'] = 'only';
    return jsObj;
  }
}
export { EdgeInsetsDirectional };
class _MixedEdgeInsets extends EdgeInsetsGeometry {
  left: number;
  right: number;
  start: number;
  end: number;
  top: number;
  bottom: number;
  static fromLRSETB(_left?: number, _right?: number, _start?: number, _end?: number, _top?: number, _bottom?: number) {
    var jsObj = new _MixedEdgeInsets();
    jsObj.left = _left;
    jsObj.right = _right;
    jsObj.start = _start;
    jsObj.end = _end;
    jsObj.top = _top;
    jsObj.bottom = _bottom;
    jsObj['constructorName'] = 'fromLRSETB';
    return jsObj;
  }
}
export { _MixedEdgeInsets };
