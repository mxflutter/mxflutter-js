//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { PointerEvent } from '../gestures/events';
import { Matrix4 } from '../../../vector-math-64';
import { HitTestResult, HitTestEntry } from '../gestures/hit-test';
import { EdgeInsets } from '../painting/edge-insets';
import { Constraints, ParentData, RenderObject, PaintingContext } from './object';
import { Size, Offset, TextBaseline } from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class _DebugSize extends Size {
  owner: RenderBox;
  canBeUsedByParent: boolean;
  public constructor(source?: Size, _owner?: RenderBox, _canBeUsedByParent?: boolean) {
    super();
    this['source'] = source;
    this.owner = _owner;
    this.canBeUsedByParent = _canBeUsedByParent;
    this.className = '_DebugSize';
  }
}
export { _DebugSize };
class BoxConstraints extends Constraints {
  minWidth: number;
  maxWidth: number;
  minHeight: number;
  maxHeight: number;
  public constructor(
    namedParameters: { minWidth?: number; maxWidth?: number; minHeight?: number; maxHeight?: number } = {},
  ) {
    super();
    this.minWidth = namedParameters.minWidth;
    this.maxWidth = namedParameters.maxWidth;
    this.minHeight = namedParameters.minHeight;
    this.maxHeight = namedParameters.maxHeight;
    this.className = 'BoxConstraints';
  }
  static tight(size?: Size) {
    var jsObj = new BoxConstraints();
    jsObj['size'] = size;
    jsObj['constructorName'] = 'tight';
    return jsObj;
  }
  static tightFor(namedParameters: { width?: number; height?: number } = {}) {
    var jsObj = new BoxConstraints();
    jsObj['width'] = namedParameters.width;
    jsObj['height'] = namedParameters.height;
    jsObj['constructorName'] = 'tightFor';
    return jsObj;
  }
  static tightForFinite(namedParameters: { width?: number; height?: number } = {}) {
    var jsObj = new BoxConstraints();
    jsObj['width'] = namedParameters.width;
    jsObj['height'] = namedParameters.height;
    jsObj['constructorName'] = 'tightForFinite';
    return jsObj;
  }
  static loose(size?: Size) {
    var jsObj = new BoxConstraints();
    jsObj['size'] = size;
    jsObj['constructorName'] = 'loose';
    return jsObj;
  }
  static expand(namedParameters: { width?: number; height?: number } = {}) {
    var jsObj = new BoxConstraints();
    jsObj['width'] = namedParameters.width;
    jsObj['height'] = namedParameters.height;
    jsObj['constructorName'] = 'expand';
    return jsObj;
  }
}
export { BoxConstraints };
class BoxHitTestResult extends HitTestResult {
  static wrap(result?: HitTestResult) {
    var jsObj = new BoxHitTestResult();
    jsObj['result'] = result;
    jsObj['constructorName'] = 'wrap';
    return jsObj;
  }
}
export { BoxHitTestResult };
class BoxHitTestEntry extends HitTestEntry {
  localPosition: Offset;
  public constructor(target?: RenderBox, localPosition?: Offset) {
    super();
    this['__mx_target'] = target;
    this.localPosition = localPosition;
    this.className = 'BoxHitTestEntry';
  }
}
export { BoxHitTestEntry };
class BoxParentData extends ParentData {
  offset: Offset;
}
export { BoxParentData };
abstract class ContainerBoxParentData extends BoxParentData {}
export { ContainerBoxParentData };
enum _IntrinsicDimension {
  minWidth = '{ "_name": "_IntrinsicDimension.minWidth", "index": 0 }',
  maxWidth = '{ "_name": "_IntrinsicDimension.maxWidth", "index": 1 }',
  minHeight = '{ "_name": "_IntrinsicDimension.minHeight", "index": 2 }',
  maxHeight = '{ "_name": "_IntrinsicDimension.maxHeight", "index": 3 }',
}

export { _IntrinsicDimension };
class _IntrinsicDimensionsCacheEntry extends MXDartClass {
  dimension: _IntrinsicDimension;
  argument: number;
  public constructor(dimension?: _IntrinsicDimension, argument?: number) {
    super();
    this.dimension = dimension;
    this.argument = argument;
    this.className = '_IntrinsicDimensionsCacheEntry';
  }
}
export { _IntrinsicDimensionsCacheEntry };
abstract class RenderBox extends RenderObject {
  cachedIntrinsicDimensions: Map<any, any>;
  size: Size;
  cachedBaselines: Map<any, any>;
  debugActivePointers: number;
}
export { RenderBox };
abstract class RenderBoxContainerDefaultsMixin extends MXDartClass {}
export { RenderBoxContainerDefaultsMixin };
