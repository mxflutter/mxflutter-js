// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Duration } from '../../../mx-dart-sdk';
import { PrimaryPointerGestureRecognizer, OffsetPair } from './recognizer';
import { Velocity, VelocityTracker } from './velocity-tracker';
import { Offset, PointerDeviceKind } from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class LongPressStartDetails extends MXDartClass {
  globalPosition: Offset;
  localPosition: Offset;
  public constructor(namedParameters: {globalPosition?: Offset, localPosition?: Offset} = {}) {
    super();
    this.globalPosition = namedParameters.globalPosition;
    this.localPosition = namedParameters.localPosition;
    this.className = 'LongPressStartDetails';
  }
}
export { LongPressStartDetails };
class LongPressMoveUpdateDetails extends MXDartClass {
  globalPosition: Offset;
  localPosition: Offset;
  offsetFromOrigin: Offset;
  localOffsetFromOrigin: Offset;
  public constructor(namedParameters: {globalPosition?: Offset, localPosition?: Offset, offsetFromOrigin?: Offset, localOffsetFromOrigin?: Offset} = {}) {
    super();
    this.globalPosition = namedParameters.globalPosition;
    this.localPosition = namedParameters.localPosition;
    this.offsetFromOrigin = namedParameters.offsetFromOrigin;
    this.localOffsetFromOrigin = namedParameters.localOffsetFromOrigin;
    this.className = 'LongPressMoveUpdateDetails';
  }
}
export { LongPressMoveUpdateDetails };
class LongPressEndDetails extends MXDartClass {
  globalPosition: Offset;
  localPosition: Offset;
  velocity: Velocity;
  public constructor(namedParameters: {globalPosition?: Offset, localPosition?: Offset, velocity?: Velocity} = {}) {
    super();
    this.globalPosition = namedParameters.globalPosition;
    this.localPosition = namedParameters.localPosition;
    this.velocity = namedParameters.velocity;
    this.className = 'LongPressEndDetails';
  }
}
export { LongPressEndDetails };
class LongPressGestureRecognizer extends PrimaryPointerGestureRecognizer {
  longPressAccepted: boolean;
  longPressOrigin: OffsetPair;
  initialButtons: number;
  onLongPress: any;
  onLongPressStart: any;
  onLongPressMoveUpdate: any;
  onLongPressUp: any;
  onLongPressEnd: any;
  onSecondaryLongPress: any;
  onSecondaryLongPressStart: any;
  onSecondaryLongPressMoveUpdate: any;
  onSecondaryLongPressUp: any;
  onSecondaryLongPressEnd: any;
  onTertiaryLongPress: any;
  onTertiaryLongPressStart: any;
  onTertiaryLongPressMoveUpdate: any;
  onTertiaryLongPressUp: any;
  onTertiaryLongPressEnd: any;
  velocityTracker: VelocityTracker;
  public constructor(namedParameters: {duration?: Duration, postAcceptSlopTolerance?: number, kind?: PointerDeviceKind, debugOwner?: any} = {}) {
    super();
    this['duration'] = namedParameters.duration;
    this.postAcceptSlopTolerance = namedParameters.postAcceptSlopTolerance;
    this['kind'] = namedParameters.kind;
    this.debugOwner = namedParameters.debugOwner;
    this.className = 'LongPressGestureRecognizer';
  }
}
export { LongPressGestureRecognizer };
