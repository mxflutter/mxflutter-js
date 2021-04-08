"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.DelayedMultiDragGestureRecognizer = exports._DelayedPointerState = exports.VerticalMultiDragGestureRecognizer = exports._VerticalPointerState = exports.HorizontalMultiDragGestureRecognizer = exports._HorizontalPointerState = exports.ImmediateMultiDragGestureRecognizer = exports._ImmediatePointerState = exports.MultiDragGestureRecognizer = exports.MultiDragPointerState = void 0;
const recognizer_1 = require("./recognizer");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class MultiDragPointerState extends mxflutter_base_1.MXDartClass {
}
exports.MultiDragPointerState = MultiDragPointerState;
class MultiDragGestureRecognizer extends recognizer_1.GestureRecognizer {
}
exports.MultiDragGestureRecognizer = MultiDragGestureRecognizer;
class _ImmediatePointerState extends MultiDragPointerState {
    constructor(initialPosition, kind) {
        super();
        this['initialPosition'] = initialPosition;
        this['kind'] = kind;
        this.className = '_ImmediatePointerState';
    }
}
exports._ImmediatePointerState = _ImmediatePointerState;
class ImmediateMultiDragGestureRecognizer extends MultiDragGestureRecognizer {
    constructor(namedParameters = {}) {
        super();
        this['debugOwner'] = namedParameters.debugOwner;
        this['kind'] = namedParameters.kind;
        this.className = 'ImmediateMultiDragGestureRecognizer';
    }
}
exports.ImmediateMultiDragGestureRecognizer = ImmediateMultiDragGestureRecognizer;
class _HorizontalPointerState extends MultiDragPointerState {
    constructor(initialPosition, kind) {
        super();
        this['initialPosition'] = initialPosition;
        this['kind'] = kind;
        this.className = '_HorizontalPointerState';
    }
}
exports._HorizontalPointerState = _HorizontalPointerState;
class HorizontalMultiDragGestureRecognizer extends MultiDragGestureRecognizer {
    constructor(namedParameters = {}) {
        super();
        this['debugOwner'] = namedParameters.debugOwner;
        this['kind'] = namedParameters.kind;
        this.className = 'HorizontalMultiDragGestureRecognizer';
    }
}
exports.HorizontalMultiDragGestureRecognizer = HorizontalMultiDragGestureRecognizer;
class _VerticalPointerState extends MultiDragPointerState {
    constructor(initialPosition, kind) {
        super();
        this['initialPosition'] = initialPosition;
        this['kind'] = kind;
        this.className = '_VerticalPointerState';
    }
}
exports._VerticalPointerState = _VerticalPointerState;
class VerticalMultiDragGestureRecognizer extends MultiDragGestureRecognizer {
    constructor(namedParameters = {}) {
        super();
        this['debugOwner'] = namedParameters.debugOwner;
        this['kind'] = namedParameters.kind;
        this.className = 'VerticalMultiDragGestureRecognizer';
    }
}
exports.VerticalMultiDragGestureRecognizer = VerticalMultiDragGestureRecognizer;
class _DelayedPointerState extends MultiDragPointerState {
    constructor(initialPosition, delay, kind) {
        super();
        this.initialPosition = initialPosition;
        this['delay'] = delay;
        this.kind = kind;
        this.className = '_DelayedPointerState';
    }
}
exports._DelayedPointerState = _DelayedPointerState;
class DelayedMultiDragGestureRecognizer extends MultiDragGestureRecognizer {
    constructor(namedParameters = {}) {
        super();
        this.delay = namedParameters.delay;
        this.debugOwner = namedParameters.debugOwner;
        this['kind'] = namedParameters.kind;
        this.className = 'DelayedMultiDragGestureRecognizer';
    }
}
exports.DelayedMultiDragGestureRecognizer = DelayedMultiDragGestureRecognizer;
