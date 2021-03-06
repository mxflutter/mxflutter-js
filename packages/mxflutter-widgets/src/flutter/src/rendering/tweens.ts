// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Alignment, AlignmentGeometry } from '../painting/alignment';
import { FractionalOffset } from '../painting/fractional-offset';
import { Tween } from '../animation/tween';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class FractionalOffsetTween extends Tween {
  public constructor(namedParameters: {begin?: FractionalOffset, end?: FractionalOffset} = {}) {
    super();
    this['begin'] = namedParameters.begin;
    this['end'] = namedParameters.end;
    this.className = 'FractionalOffsetTween';
  }
}
export { FractionalOffsetTween };
class AlignmentTween extends Tween {
  public constructor(namedParameters: {begin?: Alignment, end?: Alignment} = {}) {
    super();
    this['begin'] = namedParameters.begin;
    this['end'] = namedParameters.end;
    this.className = 'AlignmentTween';
  }
}
export { AlignmentTween };
class AlignmentGeometryTween extends Tween {
  public constructor(namedParameters: {begin?: AlignmentGeometry, end?: AlignmentGeometry} = {}) {
    super();
    this['begin'] = namedParameters.begin;
    this['end'] = namedParameters.end;
    this.className = 'AlignmentGeometryTween';
  }
}
export { AlignmentGeometryTween };
