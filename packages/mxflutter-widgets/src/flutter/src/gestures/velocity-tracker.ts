// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Duration } from '../../../mx-dart-sdk';
import { Offset, PointerDeviceKind } from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class Velocity extends MXDartClass {
  pixelsPerSecond: Offset;
  public constructor(namedParameters: {pixelsPerSecond?: Offset} = {}) {
    super();
    this.pixelsPerSecond = namedParameters.pixelsPerSecond;
    this.className = 'Velocity';
  }
  static get zero() {
    var jsObj = new Velocity();
    jsObj['className'] = 'Velocity';
    jsObj['constructorName'] = 'zero';
    return jsObj;
  }
}
export { Velocity };
class VelocityEstimate extends MXDartClass {
  pixelsPerSecond: Offset;
  confidence: number;
  duration: Duration;
  offset: Offset;
  public constructor(namedParameters: {pixelsPerSecond?: Offset, confidence?: number, duration?: Duration, offset?: Offset} = {}) {
    super();
    this.pixelsPerSecond = namedParameters.pixelsPerSecond;
    this.confidence = namedParameters.confidence;
    this.duration = namedParameters.duration;
    this.offset = namedParameters.offset;
    this.className = 'VelocityEstimate';
  }
}
export { VelocityEstimate };
class _PointAtTime extends MXDartClass {
  time: Duration;
  point: Offset;
  public constructor(point?: Offset, time?: Duration) {
    super();
    this.point = point;
    this.time = time;
    this.className = '_PointAtTime';
  }
}
export { _PointAtTime };
class VelocityTracker extends MXDartClass {
  kind: PointerDeviceKind;
  samples: Array<any>;
  index: number;
  public constructor(kind?: PointerDeviceKind) {
    super();
    this.kind = kind;
    this.className = 'VelocityTracker';
  }
  static withKind(kind?: PointerDeviceKind) {
    var jsObj = new VelocityTracker();
    jsObj.kind = kind;
    jsObj['constructorName'] = 'withKind';
    return jsObj;
  }
}
export { VelocityTracker };
class IOSScrollViewFlingVelocityTracker extends VelocityTracker {
  touchSamples: Array<any>;
  public constructor(kind?: PointerDeviceKind) {
    super();
    this.kind = kind;
    this.className = 'IOSScrollViewFlingVelocityTracker';
  }
}
export { IOSScrollViewFlingVelocityTracker };
