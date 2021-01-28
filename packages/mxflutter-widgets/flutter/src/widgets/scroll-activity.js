//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { Duration } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class ScrollActivityDelegate extends MXDartClass {
}
export { ScrollActivityDelegate };
class ScrollActivity extends MXDartClass {
}
export { ScrollActivity };
class IdleScrollActivity extends ScrollActivity {
    constructor(delegate) {
        super();
        this['delegate'] = delegate;
        this.className = 'IdleScrollActivity';
    }
}
export { IdleScrollActivity };
class ScrollHoldController extends MXDartClass {
}
export { ScrollHoldController };
class HoldScrollActivity extends ScrollActivity {
    constructor(namedParameters = {}) {
        super();
        this.delegate = namedParameters.delegate;
        this.onHoldCanceled = namedParameters.onHoldCanceled;
        this.className = 'HoldScrollActivity';
    }
}
export { HoldScrollActivity };
class ScrollDragController extends MXDartClass {
    constructor(namedParameters = {}) {
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
    constructor(delegate, controller) {
        super();
        this.delegate = delegate;
        this.controller = controller;
        this.className = 'DragScrollActivity';
    }
}
export { DragScrollActivity };
class BallisticScrollActivity extends ScrollActivity {
    constructor(delegate, simulation, vsync) {
        super();
        this.delegate = delegate;
        this['simulation'] = simulation;
        this.className = 'BallisticScrollActivity';
    }
}
export { BallisticScrollActivity };
class DrivenScrollActivity extends ScrollActivity {
    constructor(delegate, namedParameters = {}) {
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
