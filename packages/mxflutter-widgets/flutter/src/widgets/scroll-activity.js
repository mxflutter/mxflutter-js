"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrivenScrollActivity = exports.BallisticScrollActivity = exports.DragScrollActivity = exports.ScrollDragController = exports.HoldScrollActivity = exports.ScrollHoldController = exports.IdleScrollActivity = exports.ScrollActivity = exports.ScrollActivityDelegate = void 0;
const mx_dart_sdk_1 = require("../../../mx-dart-sdk");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class ScrollActivityDelegate extends mxflutter_base_1.MXDartClass {
}
exports.ScrollActivityDelegate = ScrollActivityDelegate;
class ScrollActivity extends mxflutter_base_1.MXDartClass {
}
exports.ScrollActivity = ScrollActivity;
class IdleScrollActivity extends ScrollActivity {
    constructor(delegate) {
        super();
        this['delegate'] = delegate;
        this.className = 'IdleScrollActivity';
    }
}
exports.IdleScrollActivity = IdleScrollActivity;
class ScrollHoldController extends mxflutter_base_1.MXDartClass {
}
exports.ScrollHoldController = ScrollHoldController;
class HoldScrollActivity extends ScrollActivity {
    constructor(namedParameters = {}) {
        super();
        this.delegate = namedParameters.delegate;
        this.onHoldCanceled = namedParameters.onHoldCanceled;
        this.className = 'HoldScrollActivity';
    }
}
exports.HoldScrollActivity = HoldScrollActivity;
class ScrollDragController extends mxflutter_base_1.MXDartClass {
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
        var jsObj = new mx_dart_sdk_1.Duration();
        jsObj['className'] = 'ScrollDragController';
        jsObj['constructorName'] = 'momentumRetainStationaryDurationThreshold';
        return jsObj;
    }
    static get motionStoppedDurationThreshold() {
        var jsObj = new mx_dart_sdk_1.Duration();
        jsObj['className'] = 'ScrollDragController';
        jsObj['constructorName'] = 'motionStoppedDurationThreshold';
        return jsObj;
    }
}
exports.ScrollDragController = ScrollDragController;
class DragScrollActivity extends ScrollActivity {
    constructor(delegate, controller) {
        super();
        this.delegate = delegate;
        this.controller = controller;
        this.className = 'DragScrollActivity';
    }
}
exports.DragScrollActivity = DragScrollActivity;
class BallisticScrollActivity extends ScrollActivity {
    constructor(delegate, simulation, vsync) {
        super();
        this.delegate = delegate;
        this['simulation'] = simulation;
        this.className = 'BallisticScrollActivity';
    }
}
exports.BallisticScrollActivity = BallisticScrollActivity;
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
exports.DrivenScrollActivity = DrivenScrollActivity;
