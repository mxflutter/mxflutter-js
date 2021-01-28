//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { RelativeRect } from './stack';
import { RenderObject, PaintingContext } from './object';
import { Rect, Offset } from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum _OverflowSide {
  left = '{ "_name": "_OverflowSide.left", "index": 0 }',
  top = '{ "_name": "_OverflowSide.top", "index": 1 }',
  bottom = '{ "_name": "_OverflowSide.bottom", "index": 2 }',
  right = '{ "_name": "_OverflowSide.right", "index": 3 }',
}

export { _OverflowSide };
class _OverflowRegionData extends MXDartClass {
  rect: Rect;
  label: string;
  labelOffset: Offset;
  rotation: number;
  side: _OverflowSide;
  public constructor(
    namedParameters: {
      rect?: Rect;
      label?: string;
      labelOffset?: Offset;
      rotation?: number;
      side?: _OverflowSide;
    } = {},
  ) {
    super();
    this.rect = namedParameters.rect;
    this.label = namedParameters.label;
    this.labelOffset = namedParameters.labelOffset;
    this.rotation = namedParameters.rotation;
    this.side = namedParameters.side;
    this.className = '_OverflowRegionData';
  }
}
export { _OverflowRegionData };
abstract class DebugOverflowIndicatorMixin extends RenderObject {
  indicatorLabel: Array<any>;
  overflowReportNeeded: boolean;
}
export { DebugOverflowIndicatorMixin };
