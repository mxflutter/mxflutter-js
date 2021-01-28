//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { GestureRecognizer, OffsetPair } from './recognizer';
import { Matrix4 } from '../../../vector-math-64';
import { PointerDownEvent, PointerEvent } from './events';
import { Offset, PointerDeviceKind } from '../../../mx-dart-sdk';
import { GestureArenaEntry } from './arena';
import { Duration } from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class _CountdownZoned extends MXDartClass {
  timeout: boolean;
  public constructor(namedParameters: { duration?: Duration } = {}) {
    super();
    this['duration'] = namedParameters.duration;
    this.className = '_CountdownZoned';
  }
}
export { _CountdownZoned };
class _TapTracker extends MXDartClass {
  pointer: number;
  entry: GestureArenaEntry;
  initialGlobalPosition: Offset;
  initialButtons: number;
  doubleTapMinTimeCountdown: _CountdownZoned;
  isTrackingPointer: boolean;
  public constructor(
    namedParameters: { event?: PointerDownEvent; entry?: GestureArenaEntry; doubleTapMinTime?: Duration } = {},
  ) {
    super();
    this['event'] = namedParameters.event;
    this.entry = namedParameters.entry;
    this['doubleTapMinTime'] = namedParameters.doubleTapMinTime;
    this.className = '_TapTracker';
  }
}
export { _TapTracker };
class DoubleTapGestureRecognizer extends GestureRecognizer {
  onDoubleTap: any;
  doubleTapTimer: any;
  firstTap: _TapTracker;
  trackers: Map<any, any>;
  public constructor(namedParameters: { debugOwner?: any; kind?: PointerDeviceKind } = {}) {
    super();
    this.debugOwner = namedParameters.debugOwner;
    this['kind'] = namedParameters.kind;
    this.className = 'DoubleTapGestureRecognizer';
  }
}
export { DoubleTapGestureRecognizer };
class _TapGesture extends _TapTracker {
  gestureRecognizer: MultiTapGestureRecognizer;
  wonArena: boolean;
  timer: any;
  lastPosition: OffsetPair;
  finalPosition: OffsetPair;
  public constructor(
    namedParameters: {
      gestureRecognizer?: MultiTapGestureRecognizer;
      event?: PointerEvent;
      longTapDelay?: Duration;
    } = {},
  ) {
    super();
    this.gestureRecognizer = namedParameters.gestureRecognizer;
    this['event'] = namedParameters.event;
    this['longTapDelay'] = namedParameters.longTapDelay;
    this.className = '_TapGesture';
  }
}
export { _TapGesture };
class MultiTapGestureRecognizer extends GestureRecognizer {
  onTapDown: any;
  onTapUp: any;
  onTap: any;
  onTapCancel: any;
  longTapDelay: Duration;
  onLongTapDown: any;
  gestureMap: Map<any, any>;
  public constructor(namedParameters: { longTapDelay?: Duration; debugOwner?: any; kind?: PointerDeviceKind } = {}) {
    super();
    this.longTapDelay = namedParameters.longTapDelay;
    this.debugOwner = namedParameters.debugOwner;
    this['kind'] = namedParameters.kind;
    this.className = 'MultiTapGestureRecognizer';
  }
}
export { MultiTapGestureRecognizer };
