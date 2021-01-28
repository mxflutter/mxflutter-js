//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { OneSequenceGestureRecognizer } from '../gestures/recognizer';
import { RenderBox } from './box';
var PlatformViewHitTestBehavior;
(function (PlatformViewHitTestBehavior) {
    PlatformViewHitTestBehavior["opaque"] = "{ \"_name\": \"PlatformViewHitTestBehavior.opaque\", \"index\": 0 }";
    PlatformViewHitTestBehavior["translucent"] = "{ \"_name\": \"PlatformViewHitTestBehavior.translucent\", \"index\": 1 }";
    PlatformViewHitTestBehavior["transparent"] = "{ \"_name\": \"PlatformViewHitTestBehavior.transparent\", \"index\": 2 }";
})(PlatformViewHitTestBehavior || (PlatformViewHitTestBehavior = {}));
export { PlatformViewHitTestBehavior };
var _PlatformViewState;
(function (_PlatformViewState) {
    _PlatformViewState["uninitialized"] = "{ \"_name\": \"_PlatformViewState.uninitialized\", \"index\": 0 }";
    _PlatformViewState["resizing"] = "{ \"_name\": \"_PlatformViewState.resizing\", \"index\": 1 }";
    _PlatformViewState["ready"] = "{ \"_name\": \"_PlatformViewState.ready\", \"index\": 2 }";
})(_PlatformViewState || (_PlatformViewState = {}));
export { _PlatformViewState };
class RenderAndroidView extends RenderBox {
    constructor(namedParameters = {}) {
        super();
        this.viewController = namedParameters.viewController;
        this['hitTestBehavior'] = namedParameters.hitTestBehavior;
        this['gestureRecognizers'] = namedParameters.gestureRecognizers;
        this.className = 'RenderAndroidView';
    }
}
export { RenderAndroidView };
class RenderUiKitView extends RenderBox {
    constructor(namedParameters = {}) {
        super();
        this.viewController = namedParameters.viewController;
        this.hitTestBehavior = namedParameters.hitTestBehavior;
        this['gestureRecognizers'] = namedParameters.gestureRecognizers;
        this.className = 'RenderUiKitView';
    }
}
export { RenderUiKitView };
class _UiKitViewGestureRecognizer extends OneSequenceGestureRecognizer {
    constructor(controller, gestureRecognizerFactories, namedParameters = {}) {
        super();
        this.controller = controller;
        this.gestureRecognizerFactories = gestureRecognizerFactories;
        this['kind'] = namedParameters.kind;
        this.className = '_UiKitViewGestureRecognizer';
    }
}
export { _UiKitViewGestureRecognizer };
class _PlatformViewGestureRecognizer extends OneSequenceGestureRecognizer {
    constructor(handlePointerEvent, gestureRecognizerFactories, namedParameters = {}) {
        super();
        this.handlePointerEvent = handlePointerEvent;
        this.gestureRecognizerFactories = gestureRecognizerFactories;
        this['kind'] = namedParameters.kind;
        this.className = '_PlatformViewGestureRecognizer';
    }
}
export { _PlatformViewGestureRecognizer };
class PlatformViewRenderBox extends RenderBox {
    constructor(namedParameters = {}) {
        super();
        this.controller = namedParameters.controller;
        this['hitTestBehavior'] = namedParameters.hitTestBehavior;
        this['gestureRecognizers'] = namedParameters.gestureRecognizers;
        this.className = 'PlatformViewRenderBox';
    }
}
export { PlatformViewRenderBox };
class _PlatformViewGestureMixin extends RenderBox {
}
export { _PlatformViewGestureMixin };
