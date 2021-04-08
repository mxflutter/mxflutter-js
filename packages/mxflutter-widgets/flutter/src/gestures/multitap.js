"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiTapGestureRecognizer = exports._TapGesture = exports.DoubleTapGestureRecognizer = exports._TapTracker = exports._CountdownZoned = void 0;
const recognizer_1 = require("./recognizer");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class _CountdownZoned extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this['duration'] = namedParameters.duration;
        this.className = '_CountdownZoned';
    }
}
exports._CountdownZoned = _CountdownZoned;
class _TapTracker extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this['event'] = namedParameters.event;
        this.entry = namedParameters.entry;
        this['doubleTapMinTime'] = namedParameters.doubleTapMinTime;
        this.className = '_TapTracker';
    }
}
exports._TapTracker = _TapTracker;
class DoubleTapGestureRecognizer extends recognizer_1.GestureRecognizer {
    constructor(namedParameters = {}) {
        super();
        this.debugOwner = namedParameters.debugOwner;
        this['kind'] = namedParameters.kind;
        this.className = 'DoubleTapGestureRecognizer';
    }
}
exports.DoubleTapGestureRecognizer = DoubleTapGestureRecognizer;
class _TapGesture extends _TapTracker {
    constructor(namedParameters = {}) {
        super();
        this.gestureRecognizer = namedParameters.gestureRecognizer;
        this['event'] = namedParameters.event;
        this['longTapDelay'] = namedParameters.longTapDelay;
        this.className = '_TapGesture';
    }
}
exports._TapGesture = _TapGesture;
class MultiTapGestureRecognizer extends recognizer_1.GestureRecognizer {
    constructor(namedParameters = {}) {
        super();
        this.longTapDelay = namedParameters.longTapDelay;
        this.debugOwner = namedParameters.debugOwner;
        this['kind'] = namedParameters.kind;
        this.className = 'MultiTapGestureRecognizer';
    }
}
exports.MultiTapGestureRecognizer = MultiTapGestureRecognizer;
