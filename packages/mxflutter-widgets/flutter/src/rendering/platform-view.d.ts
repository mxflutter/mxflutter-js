import { OneSequenceGestureRecognizer } from '../gestures/recognizer';
import { PointerEvent } from '../gestures/events';
import { Size, PointerDeviceKind } from '../../../mx-dart-sdk';
import { AndroidViewController, UiKitViewController, PlatformViewController } from '../services/platform-views';
import { RenderBox } from './box';
declare enum PlatformViewHitTestBehavior {
    opaque = "{ \"_name\": \"PlatformViewHitTestBehavior.opaque\", \"index\": 0 }",
    translucent = "{ \"_name\": \"PlatformViewHitTestBehavior.translucent\", \"index\": 1 }",
    transparent = "{ \"_name\": \"PlatformViewHitTestBehavior.transparent\", \"index\": 2 }"
}
export { PlatformViewHitTestBehavior };
declare enum _PlatformViewState {
    uninitialized = "{ \"_name\": \"_PlatformViewState.uninitialized\", \"index\": 0 }",
    resizing = "{ \"_name\": \"_PlatformViewState.resizing\", \"index\": 1 }",
    ready = "{ \"_name\": \"_PlatformViewState.ready\", \"index\": 2 }"
}
export { _PlatformViewState };
declare class RenderAndroidView extends RenderBox {
    state: _PlatformViewState;
    viewController: AndroidViewController;
    currentAndroidViewSize: Size;
    constructor(namedParameters?: {
        viewController?: AndroidViewController;
        hitTestBehavior?: PlatformViewHitTestBehavior;
        gestureRecognizers?: Set<any>;
    });
}
export { RenderAndroidView };
declare class RenderUiKitView extends RenderBox {
    viewController: UiKitViewController;
    hitTestBehavior: PlatformViewHitTestBehavior;
    gestureRecognizer: _UiKitViewGestureRecognizer;
    lastPointerDownEvent: PointerEvent;
    constructor(namedParameters?: {
        viewController?: UiKitViewController;
        hitTestBehavior?: PlatformViewHitTestBehavior;
        gestureRecognizers?: Set<any>;
    });
}
export { RenderUiKitView };
declare class _UiKitViewGestureRecognizer extends OneSequenceGestureRecognizer {
    gestureRecognizerFactories: Set<any>;
    gestureRecognizers: Set<any>;
    controller: UiKitViewController;
    constructor(controller?: UiKitViewController, gestureRecognizerFactories?: Set<any>, namedParameters?: {
        kind?: PointerDeviceKind;
    });
}
export { _UiKitViewGestureRecognizer };
declare class _PlatformViewGestureRecognizer extends OneSequenceGestureRecognizer {
    handlePointerEvent: any;
    cachedEvents: Map<any, any>;
    forwardedPointers: Set<any>;
    gestureRecognizerFactories: Set<any>;
    gestureRecognizers: Set<any>;
    constructor(handlePointerEvent?: any, gestureRecognizerFactories?: Set<any>, namedParameters?: {
        kind?: PointerDeviceKind;
    });
}
export { _PlatformViewGestureRecognizer };
declare class PlatformViewRenderBox extends RenderBox {
    controller: PlatformViewController;
    constructor(namedParameters?: {
        controller?: PlatformViewController;
        hitTestBehavior?: PlatformViewHitTestBehavior;
        gestureRecognizers?: Set<any>;
    });
}
export { PlatformViewRenderBox };
declare abstract class _PlatformViewGestureMixin extends RenderBox {
    hitTestBehavior: PlatformViewHitTestBehavior;
    handlePointerEvent: any;
    gestureRecognizer: _PlatformViewGestureRecognizer;
}
export { _PlatformViewGestureMixin };
