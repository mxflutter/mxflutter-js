import { PointerRouter } from '../gestures/pointer-router';
import { ChangeNotifier } from '../foundation/change-notifier';
import { PointerEvent } from '../gestures/events';
import { MouseCursor } from './mouse-cursor';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class MouseTrackerAnnotation extends MXDartClass {
    onEnter: any;
    onHover: any;
    onExit: any;
    cursor: MouseCursor;
    constructor(namedParameters?: {
        onEnter?: any;
        onHover?: any;
        onExit?: any;
        cursor?: MouseCursor;
    });
}
export { MouseTrackerAnnotation };
declare class _MouseState extends MXDartClass {
    annotations: any;
    latestEvent: PointerEvent;
    constructor(namedParameters?: {
        initialEvent?: PointerEvent;
    });
}
export { _MouseState };
declare class MouseTrackerUpdateDetails extends MXDartClass {
    lastAnnotations: any;
    nextAnnotations: any;
    previousEvent: PointerEvent;
    triggeringEvent: PointerEvent;
    static byNewFrame(namedParameters?: {
        lastAnnotations?: any;
        nextAnnotations?: any;
        previousEvent?: PointerEvent;
    }): MouseTrackerUpdateDetails;
    static byPointerEvent(namedParameters?: {
        lastAnnotations?: any;
        nextAnnotations?: any;
        previousEvent?: PointerEvent;
        triggeringEvent?: PointerEvent;
    }): MouseTrackerUpdateDetails;
}
export { MouseTrackerUpdateDetails };
declare class BaseMouseTracker extends ChangeNotifier {
    annotationFinder: any;
    router: PointerRouter;
    hasScheduledPostFrameCheck: boolean;
    mouseStates: Map<any, any>;
    debugDuringDeviceUpdate: boolean;
    constructor(_router?: PointerRouter, annotationFinder?: any);
}
export { BaseMouseTracker };
declare abstract class _MouseTrackerEventMixin extends BaseMouseTracker {
}
export { _MouseTrackerEventMixin };
declare class MouseTracker extends BaseMouseTracker {
    constructor(router?: PointerRouter, annotationFinder?: any);
}
export { MouseTracker };
