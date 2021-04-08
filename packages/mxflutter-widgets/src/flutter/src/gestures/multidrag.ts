// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { GestureRecognizer } from './recognizer';
import { GestureArenaEntry } from './arena';
import { Duration } from '../../../mx-dart-sdk';
import { Drag } from './drag';
import { VelocityTracker } from './velocity-tracker';
import { Offset, PointerDeviceKind } from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class MultiDragPointerState extends MXDartClass {
  initialPosition: Offset;
  velocityTracker: VelocityTracker;
  kind: PointerDeviceKind;
  client: Drag;
  pendingDelta: Offset;
  lastPendingEventTimestamp: Duration;
  arenaEntry: GestureArenaEntry;
}
export { MultiDragPointerState };
abstract class MultiDragGestureRecognizer extends GestureRecognizer {
  onStart: any;
  pointers: Map<any, any>;
}
export { MultiDragGestureRecognizer };
class _ImmediatePointerState extends MultiDragPointerState {
  public constructor(initialPosition?: Offset, kind?: PointerDeviceKind) {
    super();
    this['initialPosition'] = initialPosition;
    this['kind'] = kind;
    this.className = '_ImmediatePointerState';
  }
}
export { _ImmediatePointerState };
class ImmediateMultiDragGestureRecognizer extends MultiDragGestureRecognizer {
  public constructor(namedParameters: {debugOwner?: any, kind?: PointerDeviceKind} = {}) {
    super();
    this['debugOwner'] = namedParameters.debugOwner;
    this['kind'] = namedParameters.kind;
    this.className = 'ImmediateMultiDragGestureRecognizer';
  }
}
export { ImmediateMultiDragGestureRecognizer };
class _HorizontalPointerState extends MultiDragPointerState {
  public constructor(initialPosition?: Offset, kind?: PointerDeviceKind) {
    super();
    this['initialPosition'] = initialPosition;
    this['kind'] = kind;
    this.className = '_HorizontalPointerState';
  }
}
export { _HorizontalPointerState };
class HorizontalMultiDragGestureRecognizer extends MultiDragGestureRecognizer {
  public constructor(namedParameters: {debugOwner?: any, kind?: PointerDeviceKind} = {}) {
    super();
    this['debugOwner'] = namedParameters.debugOwner;
    this['kind'] = namedParameters.kind;
    this.className = 'HorizontalMultiDragGestureRecognizer';
  }
}
export { HorizontalMultiDragGestureRecognizer };
class _VerticalPointerState extends MultiDragPointerState {
  public constructor(initialPosition?: Offset, kind?: PointerDeviceKind) {
    super();
    this['initialPosition'] = initialPosition;
    this['kind'] = kind;
    this.className = '_VerticalPointerState';
  }
}
export { _VerticalPointerState };
class VerticalMultiDragGestureRecognizer extends MultiDragGestureRecognizer {
  public constructor(namedParameters: {debugOwner?: any, kind?: PointerDeviceKind} = {}) {
    super();
    this['debugOwner'] = namedParameters.debugOwner;
    this['kind'] = namedParameters.kind;
    this.className = 'VerticalMultiDragGestureRecognizer';
  }
}
export { VerticalMultiDragGestureRecognizer };
class _DelayedPointerState extends MultiDragPointerState {
  timer: any;
  starter: any;
  public constructor(initialPosition?: Offset, delay?: Duration, kind?: PointerDeviceKind) {
    super();
    this.initialPosition = initialPosition;
    this['delay'] = delay;
    this.kind = kind;
    this.className = '_DelayedPointerState';
  }
}
export { _DelayedPointerState };
class DelayedMultiDragGestureRecognizer extends MultiDragGestureRecognizer {
  delay: Duration;
  public constructor(namedParameters: {delay?: Duration, debugOwner?: any, kind?: PointerDeviceKind} = {}) {
    super();
    this.delay = namedParameters.delay;
    this.debugOwner = namedParameters.debugOwner;
    this['kind'] = namedParameters.kind;
    this.className = 'DelayedMultiDragGestureRecognizer';
  }
}
export { DelayedMultiDragGestureRecognizer };
