import { PointerDeviceKind } from '../../../mx-dart-sdk';
import { Matrix4 } from '../../../vector-math-64';
import { Duration } from '../../../mx-dart-sdk';
import { OneSequenceGestureRecognizer, DragStartBehavior, OffsetPair } from './recognizer';
declare enum _DragState {
    ready = "{ \"_name\": \"_DragState.ready\", \"index\": 0 }",
    possible = "{ \"_name\": \"_DragState.possible\", \"index\": 1 }",
    accepted = "{ \"_name\": \"_DragState.accepted\", \"index\": 2 }"
}
export { _DragState };
declare abstract class DragGestureRecognizer extends OneSequenceGestureRecognizer {
    dragStartBehavior: DragStartBehavior;
    onDown: any;
    onStart: any;
    onUpdate: any;
    onEnd: any;
    onCancel: any;
    minFlingDistance: number;
    minFlingVelocity: number;
    maxFlingVelocity: number;
    state: _DragState;
    initialPosition: OffsetPair;
    pendingDragOffset: OffsetPair;
    lastPendingEventTimestamp: Duration;
    initialButtons: number;
    lastTransform: Matrix4;
    globalDistanceMoved: number;
    velocityTrackers: Map<any, any>;
}
export { DragGestureRecognizer };
declare class VerticalDragGestureRecognizer extends DragGestureRecognizer {
    constructor(namedParameters?: {
        debugOwner?: any;
        kind?: PointerDeviceKind;
    });
}
export { VerticalDragGestureRecognizer };
declare class HorizontalDragGestureRecognizer extends DragGestureRecognizer {
    constructor(namedParameters?: {
        debugOwner?: any;
        kind?: PointerDeviceKind;
    });
}
export { HorizontalDragGestureRecognizer };
declare class PanGestureRecognizer extends DragGestureRecognizer {
    constructor(namedParameters?: {
        debugOwner?: any;
    });
}
export { PanGestureRecognizer };
