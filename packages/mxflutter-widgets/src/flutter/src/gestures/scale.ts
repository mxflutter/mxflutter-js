// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Matrix4 } from '../../../vector-math-64';
import { OneSequenceGestureRecognizer } from './recognizer';
import { Velocity } from './velocity-tracker';
import { Offset, PointerDeviceKind } from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum _ScaleState {
  ready = '{ "_name": "_ScaleState.ready", "index": 0 }',
  possible = '{ "_name": "_ScaleState.possible", "index": 1 }',
  accepted = '{ "_name": "_ScaleState.accepted", "index": 2 }',
  started = '{ "_name": "_ScaleState.started", "index": 3 }',
};

export { _ScaleState };
class ScaleStartDetails extends MXDartClass {
  focalPoint: Offset;
  localFocalPoint: Offset;
  public constructor(namedParameters: {focalPoint?: Offset, localFocalPoint?: Offset} = {}) {
    super();
    this.focalPoint = namedParameters.focalPoint;
    this.localFocalPoint = namedParameters.localFocalPoint;
    this.className = 'ScaleStartDetails';
  }
}
export { ScaleStartDetails };
class ScaleUpdateDetails extends MXDartClass {
  focalPoint: Offset;
  localFocalPoint: Offset;
  scale: number;
  horizontalScale: number;
  verticalScale: number;
  rotation: number;
  public constructor(namedParameters: {focalPoint?: Offset, localFocalPoint?: Offset, scale?: number, horizontalScale?: number, verticalScale?: number, rotation?: number} = {}) {
    super();
    this.focalPoint = namedParameters.focalPoint;
    this.localFocalPoint = namedParameters.localFocalPoint;
    this.scale = namedParameters.scale;
    this.horizontalScale = namedParameters.horizontalScale;
    this.verticalScale = namedParameters.verticalScale;
    this.rotation = namedParameters.rotation;
    this.className = 'ScaleUpdateDetails';
  }
}
export { ScaleUpdateDetails };
class ScaleEndDetails extends MXDartClass {
  velocity: Velocity;
  public constructor(namedParameters: {velocity?: Velocity} = {}) {
    super();
    this.velocity = namedParameters.velocity;
    this.className = 'ScaleEndDetails';
  }
}
export { ScaleEndDetails };
class _LineBetweenPointers extends MXDartClass {
  pointerStartLocation: Offset;
  pointerStartId: number;
  pointerEndLocation: Offset;
  pointerEndId: number;
  public constructor(namedParameters: {pointerStartLocation?: Offset, pointerStartId?: number, pointerEndLocation?: Offset, pointerEndId?: number} = {}) {
    super();
    this.pointerStartLocation = namedParameters.pointerStartLocation;
    this.pointerStartId = namedParameters.pointerStartId;
    this.pointerEndLocation = namedParameters.pointerEndLocation;
    this.pointerEndId = namedParameters.pointerEndId;
    this.className = '_LineBetweenPointers';
  }
}
export { _LineBetweenPointers };
class ScaleGestureRecognizer extends OneSequenceGestureRecognizer {
  onStart: any;
  onUpdate: any;
  onEnd: any;
  state: _ScaleState;
  lastTransform: Matrix4;
  initialFocalPoint: Offset;
  currentFocalPoint: Offset;
  initialSpan: number;
  currentSpan: number;
  initialHorizontalSpan: number;
  currentHorizontalSpan: number;
  initialVerticalSpan: number;
  currentVerticalSpan: number;
  initialLine: _LineBetweenPointers;
  currentLine: _LineBetweenPointers;
  pointerLocations: Map<any, any>;
  pointerQueue: Array<any>;
  velocityTrackers: Map<any, any>;
  public constructor(namedParameters: {debugOwner?: any, kind?: PointerDeviceKind} = {}) {
    super();
    this.debugOwner = namedParameters.debugOwner;
    this['kind'] = namedParameters.kind;
    this.className = 'ScaleGestureRecognizer';
  }
}
export { ScaleGestureRecognizer };
