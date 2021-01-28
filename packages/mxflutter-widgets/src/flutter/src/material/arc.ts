//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Offset, Rect } from '../../../mx-dart-sdk';
import { Tween, RectTween } from '../animation/tween';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class MaterialPointArcTween extends Tween {
  dirty: boolean;
  center: Offset;
  radius: number;
  beginAngle: number;
  endAngle: number;
  public constructor(namedParameters: { begin?: Offset; end?: Offset } = {}) {
    super();
    this['__mx_begin'] = namedParameters.begin;
    this['__mx_end'] = namedParameters.end;
    this.className = 'MaterialPointArcTween';
  }
}
export { MaterialPointArcTween };
enum _CornerId {
  topLeft = '{ "_name": "_CornerId.topLeft", "index": 0 }',
  topRight = '{ "_name": "_CornerId.topRight", "index": 1 }',
  bottomLeft = '{ "_name": "_CornerId.bottomLeft", "index": 2 }',
  bottomRight = '{ "_name": "_CornerId.bottomRight", "index": 3 }',
}

export { _CornerId };
class _Diagonal extends MXDartClass {
  beginId: _CornerId;
  endId: _CornerId;
  public constructor(beginId?: _CornerId, endId?: _CornerId) {
    super();
    this.beginId = beginId;
    this.endId = endId;
    this.className = '_Diagonal';
  }
}
export { _Diagonal };
class MaterialRectArcTween extends RectTween {
  dirty: boolean;
  beginArc: MaterialPointArcTween;
  endArc: MaterialPointArcTween;
  public constructor(namedParameters: { begin?: Rect; end?: Rect } = {}) {
    super();
    this['__mx_begin'] = namedParameters.begin;
    this['__mx_end'] = namedParameters.end;
    this.className = 'MaterialRectArcTween';
  }
}
export { MaterialRectArcTween };
class MaterialRectCenterArcTween extends RectTween {
  dirty: boolean;
  centerArc: MaterialPointArcTween;
  public constructor(namedParameters: { begin?: Rect; end?: Rect } = {}) {
    super();
    this['__mx_begin'] = namedParameters.begin;
    this['__mx_end'] = namedParameters.end;
    this.className = 'MaterialRectCenterArcTween';
  }
}
export { MaterialRectCenterArcTween };
