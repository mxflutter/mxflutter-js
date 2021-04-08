"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._PlatformViewGestureMixin = exports.PlatformViewRenderBox = exports._PlatformViewGestureRecognizer = exports._UiKitViewGestureRecognizer = exports.RenderUiKitView = exports.RenderAndroidView = exports._PlatformViewState = exports.PlatformViewHitTestBehavior = void 0;
const recognizer_1 = require("../gestures/recognizer");
const box_1 = require("./box");
var PlatformViewHitTestBehavior;
(function (PlatformViewHitTestBehavior) {
    PlatformViewHitTestBehavior["opaque"] = "{ \"_name\": \"PlatformViewHitTestBehavior.opaque\", \"index\": 0 }";
    PlatformViewHitTestBehavior["translucent"] = "{ \"_name\": \"PlatformViewHitTestBehavior.translucent\", \"index\": 1 }";
    PlatformViewHitTestBehavior["transparent"] = "{ \"_name\": \"PlatformViewHitTestBehavior.transparent\", \"index\": 2 }";
})(PlatformViewHitTestBehavior || (PlatformViewHitTestBehavior = {}));
exports.PlatformViewHitTestBehavior = PlatformViewHitTestBehavior;
;
var _PlatformViewState;
(function (_PlatformViewState) {
    _PlatformViewState["uninitialized"] = "{ \"_name\": \"_PlatformViewState.uninitialized\", \"index\": 0 }";
    _PlatformViewState["resizing"] = "{ \"_name\": \"_PlatformViewState.resizing\", \"index\": 1 }";
    _PlatformViewState["ready"] = "{ \"_name\": \"_PlatformViewState.ready\", \"index\": 2 }";
})(_PlatformViewState || (_PlatformViewState = {}));
exports._PlatformViewState = _PlatformViewState;
;
class RenderAndroidView extends box_1.RenderBox {
    constructor(namedParameters = {}) {
        super();
        this.viewController = namedParameters.viewController;
        this['hitTestBehavior'] = namedParameters.hitTestBehavior;
        this['gestureRecognizers'] = namedParameters.gestureRecognizers;
        this.className = 'RenderAndroidView';
    }
}
exports.RenderAndroidView = RenderAndroidView;
class RenderUiKitView extends box_1.RenderBox {
    constructor(namedParameters = {}) {
        super();
        this.viewController = namedParameters.viewController;
        this.hitTestBehavior = namedParameters.hitTestBehavior;
        this['gestureRecognizers'] = namedParameters.gestureRecognizers;
        this.className = 'RenderUiKitView';
    }
}
exports.RenderUiKitView = RenderUiKitView;
class _UiKitViewGestureRecognizer extends recognizer_1.OneSequenceGestureRecognizer {
    constructor(controller, gestureRecognizerFactories, namedParameters = {}) {
        super();
        this.controller = controller;
        this.gestureRecognizerFactories = gestureRecognizerFactories;
        this['kind'] = namedParameters.kind;
        this.className = '_UiKitViewGestureRecognizer';
    }
}
exports._UiKitViewGestureRecognizer = _UiKitViewGestureRecognizer;
class _PlatformViewGestureRecognizer extends recognizer_1.OneSequenceGestureRecognizer {
    constructor(handlePointerEvent, gestureRecognizerFactories, namedParameters = {}) {
        super();
        this.handlePointerEvent = handlePointerEvent;
        this.gestureRecognizerFactories = gestureRecognizerFactories;
        this['kind'] = namedParameters.kind;
        this.className = '_PlatformViewGestureRecognizer';
    }
}
exports._PlatformViewGestureRecognizer = _PlatformViewGestureRecognizer;
class PlatformViewRenderBox extends box_1.RenderBox {
    constructor(namedParameters = {}) {
        super();
        this.controller = namedParameters.controller;
        this['hitTestBehavior'] = namedParameters.hitTestBehavior;
        this['gestureRecognizers'] = namedParameters.gestureRecognizers;
        this.className = 'PlatformViewRenderBox';
    }
}
exports.PlatformViewRenderBox = PlatformViewRenderBox;
class _PlatformViewGestureMixin extends box_1.RenderBox {
}
exports._PlatformViewGestureMixin = _PlatformViewGestureMixin;
