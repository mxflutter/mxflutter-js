// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { PointerDeviceKind } from '../../../mx-dart-sdk';
import { Matrix4 } from '../../../vector-math-64';
import { Duration } from '../../../mx-dart-sdk';
import { OneSequenceGestureRecognizer, DragStartBehavior, OffsetPair } from './recognizer';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum _DragState {
  ready = '{ "_name": "_DragState.ready", "index": 0 }',
  possible = '{ "_name": "_DragState.possible", "index": 1 }',
  accepted = '{ "_name": "_DragState.accepted", "index": 2 }',
};

export { _DragState };
abstract class DragGestureRecognizer extends OneSequenceGestureRecognizer {
  dragStartBehavior: DragStartBehavior;
  onDown: any;
  onStart: any;
  onUpdate: any;
  onEnd: any;
  onCancel: any;
  minFlingDistance: number;
  minFlingVelocity: number;
  maxFlingVelocity: number;
  velocityTrackerBuilder: any;
  state: _DragState;
  initialPosition: OffsetPair;
  pendingDragOffset: OffsetPair;
  lastPendingEventTimestamp: Duration;
  initialButtons: number;
  lastTransform: Matrix4;
  globalDistanceMoved: number;
  velocityTrackers: Map<any, any>;
}
export { DragGestureRecognizer };
class VerticalDragGestureRecognizer extends DragGestureRecognizer {
  public constructor(namedParameters: {debugOwner?: any, kind?: PointerDeviceKind} = {}) {
    super();
    this['debugOwner'] = namedParameters.debugOwner;
    this['kind'] = namedParameters.kind;
    this.className = 'VerticalDragGestureRecognizer';
  }
}
export { VerticalDragGestureRecognizer };
class HorizontalDragGestureRecognizer extends DragGestureRecognizer {
  public constructor(namedParameters: {debugOwner?: any, kind?: PointerDeviceKind} = {}) {
    super();
    this['debugOwner'] = namedParameters.debugOwner;
    this['kind'] = namedParameters.kind;
    this.className = 'HorizontalDragGestureRecognizer';
  }
}
export { HorizontalDragGestureRecognizer };
class PanGestureRecognizer extends DragGestureRecognizer {
  public constructor(namedParameters: {debugOwner?: any} = {}) {
    super();
    this['debugOwner'] = namedParameters.debugOwner;
    this.className = 'PanGestureRecognizer';
  }
}
export { PanGestureRecognizer };
