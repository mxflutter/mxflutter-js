// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Curve } from '../animation/curves';
import { TickerProvider } from '../scheduler/ticker';
import { Simulation } from '../physics/simulation';
import { AnimationController } from '../animation/animation-controller';
import { DragStartDetails } from '../gestures/drag-details';
import { Duration } from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class ScrollActivityDelegate extends MXDartClass {}
export { ScrollActivityDelegate };
abstract class ScrollActivity extends MXDartClass {
  delegate: ScrollActivityDelegate;
}
export { ScrollActivity };
class IdleScrollActivity extends ScrollActivity {
  public constructor(delegate?: ScrollActivityDelegate) {
    super();
    this['delegate'] = delegate;
    this.className = 'IdleScrollActivity';
  }
}
export { IdleScrollActivity };
abstract class ScrollHoldController extends MXDartClass {}
export { ScrollHoldController };
class HoldScrollActivity extends ScrollActivity {
  onHoldCanceled: any;
  public constructor(namedParameters: {delegate?: ScrollActivityDelegate, onHoldCanceled?: any} = {}) {
    super();
    this.delegate = namedParameters.delegate;
    this.onHoldCanceled = namedParameters.onHoldCanceled;
    this.className = 'HoldScrollActivity';
  }
}
export { HoldScrollActivity };
class ScrollDragController extends MXDartClass {
  delegate: ScrollActivityDelegate;
  onDragCanceled: any;
  carriedVelocity: number;
  motionStartDistanceThreshold: number;
  lastNonStationaryTimestamp: Duration;
  retainMomentum: boolean;
  offsetSinceLastStop: number;
  lastDetails: any;
  public constructor(namedParameters: {delegate?: ScrollActivityDelegate, details?: DragStartDetails, onDragCanceled?: any, carriedVelocity?: number, motionStartDistanceThreshold?: number} = {}) {
    super();
    this.delegate = namedParameters.delegate;
    this['details'] = namedParameters.details;
    this.onDragCanceled = namedParameters.onDragCanceled;
    this.carriedVelocity = namedParameters.carriedVelocity;
    this.motionStartDistanceThreshold = namedParameters.motionStartDistanceThreshold;
    this.className = 'ScrollDragController';
  }
  static get momentumRetainStationaryDurationThreshold() {
    var jsObj = new Duration();
    jsObj['className'] = 'ScrollDragController';
    jsObj['constructorName'] = 'momentumRetainStationaryDurationThreshold';
    return jsObj;
  }
  static get motionStoppedDurationThreshold() {
    var jsObj = new Duration();
    jsObj['className'] = 'ScrollDragController';
    jsObj['constructorName'] = 'motionStoppedDurationThreshold';
    return jsObj;
  }
}
export { ScrollDragController };
class DragScrollActivity extends ScrollActivity {
  controller: ScrollDragController;
  public constructor(delegate?: ScrollActivityDelegate, controller?: ScrollDragController) {
    super();
    this.delegate = delegate;
    this.controller = controller;
    this.className = 'DragScrollActivity';
  }
}
export { DragScrollActivity };
class BallisticScrollActivity extends ScrollActivity {
  controller: AnimationController;
  public constructor(delegate?: ScrollActivityDelegate, simulation?: Simulation, vsync?: TickerProvider) {
    super();
    this.delegate = delegate;
    this['simulation'] = simulation;
    this.className = 'BallisticScrollActivity';
  }
}
export { BallisticScrollActivity };
class DrivenScrollActivity extends ScrollActivity {
  completer: any;
  controller: AnimationController;
  public constructor(delegate?: ScrollActivityDelegate, namedParameters: {from?: number, to?: number, duration?: Duration, curve?: Curve, vsync?: TickerProvider} = {}) {
    super();
    this.delegate = delegate;
    this['from'] = namedParameters.from;
    this['to'] = namedParameters.to;
    this['duration'] = namedParameters.duration;
    this['curve'] = namedParameters.curve;
    this.className = 'DrivenScrollActivity';
  }
}
export { DrivenScrollActivity };
