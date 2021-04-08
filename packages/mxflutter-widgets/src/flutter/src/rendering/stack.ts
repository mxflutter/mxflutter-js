// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Alignment, AlignmentGeometry } from '../painting/alignment';
import { ContainerBoxParentData, RenderBox } from './box';
import { Rect, Size, TextDirection, Clip } from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class RelativeRect extends MXDartClass {
  left: number;
  top: number;
  right: number;
  bottom: number;
  static get fill() {
    var jsObj = new RelativeRect();
    jsObj['className'] = 'RelativeRect';
    jsObj['constructorName'] = 'fill';
    return jsObj;
  }
  static fromSize(rect?: Rect, container?: Size) {
    var jsObj = new RelativeRect();
    jsObj['rect'] = rect;
    jsObj['container'] = container;
    jsObj['constructorName'] = 'fromSize';
    return jsObj;
  }
  static fromRect(rect?: Rect, container?: Rect) {
    var jsObj = new RelativeRect();
    jsObj['rect'] = rect;
    jsObj['container'] = container;
    jsObj['constructorName'] = 'fromRect';
    return jsObj;
  }
  static fromLTRB(left?: number, top?: number, right?: number, bottom?: number) {
    var jsObj = new RelativeRect();
    jsObj.left = left;
    jsObj.top = top;
    jsObj.right = right;
    jsObj.bottom = bottom;
    jsObj['constructorName'] = 'fromLTRB';
    return jsObj;
  }
}
export { RelativeRect };
class StackParentData extends ContainerBoxParentData {
  top: number;
  right: number;
  bottom: number;
  left: number;
  width: number;
  height: number;
}
export { StackParentData };
enum StackFit {
  loose = '{ "_name": "StackFit.loose", "index": 0 }',
  expand = '{ "_name": "StackFit.expand", "index": 1 }',
  passthrough = '{ "_name": "StackFit.passthrough", "index": 2 }',
};

export { StackFit };
enum Overflow {
  visible = '{ "_name": "Overflow.visible", "index": 0 }',
  clip = '{ "_name": "Overflow.clip", "index": 1 }',
};

export { Overflow };
class RenderStack extends RenderBox {
  hasVisualOverflow: boolean;
  resolvedAlignment: Alignment;
  alignment: AlignmentGeometry;
  textDirection: TextDirection;
  fit: StackFit;
  clipBehavior: Clip;
  public constructor(namedParameters: {children?: Array<any>, alignment?: AlignmentGeometry, textDirection?: TextDirection, fit?: StackFit, clipBehavior?: Clip} = {}) {
    super();
    this['children'] = namedParameters.children;
    this.alignment = namedParameters.alignment;
    this.textDirection = namedParameters.textDirection;
    this.fit = namedParameters.fit;
    this.clipBehavior = namedParameters.clipBehavior;
    this.className = 'RenderStack';
  }
}
export { RenderStack };
class RenderIndexedStack extends RenderStack {
  index: number;
  public constructor(namedParameters: {children?: Array<any>, alignment?: AlignmentGeometry, textDirection?: TextDirection, index?: number} = {}) {
    super();
    this['children'] = namedParameters.children;
    this.alignment = namedParameters.alignment;
    this.textDirection = namedParameters.textDirection;
    this.index = namedParameters.index;
    this.className = 'RenderIndexedStack';
  }
}
export { RenderIndexedStack };
