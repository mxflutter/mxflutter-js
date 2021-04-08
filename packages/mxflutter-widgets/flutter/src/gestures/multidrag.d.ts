import { GestureRecognizer } from './recognizer';
import { GestureArenaEntry } from './arena';
import { Duration } from '../../../mx-dart-sdk';
import { Drag } from './drag';
import { VelocityTracker } from './velocity-tracker';
import { Offset, PointerDeviceKind } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare abstract class MultiDragPointerState extends MXDartClass {
    initialPosition: Offset;
    velocityTracker: VelocityTracker;
    kind: PointerDeviceKind;
    client: Drag;
    pendingDelta: Offset;
    lastPendingEventTimestamp: Duration;
    arenaEntry: GestureArenaEntry;
}
export { MultiDragPointerState };
declare abstract class MultiDragGestureRecognizer extends GestureRecognizer {
    onStart: any;
    pointers: Map<any, any>;
}
export { MultiDragGestureRecognizer };
declare class _ImmediatePointerState extends MultiDragPointerState {
    constructor(initialPosition?: Offset, kind?: PointerDeviceKind);
}
export { _ImmediatePointerState };
declare class ImmediateMultiDragGestureRecognizer extends MultiDragGestureRecognizer {
    constructor(namedParameters?: {
        debugOwner?: any;
        kind?: PointerDeviceKind;
    });
}
export { ImmediateMultiDragGestureRecognizer };
declare class _HorizontalPointerState extends MultiDragPointerState {
    constructor(initialPosition?: Offset, kind?: PointerDeviceKind);
}
export { _HorizontalPointerState };
declare class HorizontalMultiDragGestureRecognizer extends MultiDragGestureRecognizer {
    constructor(namedParameters?: {
        debugOwner?: any;
        kind?: PointerDeviceKind;
    });
}
export { HorizontalMultiDragGestureRecognizer };
declare class _VerticalPointerState extends MultiDragPointerState {
    constructor(initialPosition?: Offset, kind?: PointerDeviceKind);
}
export { _VerticalPointerState };
declare class VerticalMultiDragGestureRecognizer extends MultiDragGestureRecognizer {
    constructor(namedParameters?: {
        debugOwner?: any;
        kind?: PointerDeviceKind;
    });
}
export { VerticalMultiDragGestureRecognizer };
declare class _DelayedPointerState extends MultiDragPointerState {
    timer: any;
    starter: any;
    constructor(initialPosition?: Offset, delay?: Duration, kind?: PointerDeviceKind);
}
export { _DelayedPointerState };
declare class DelayedMultiDragGestureRecognizer extends MultiDragGestureRecognizer {
    delay: Duration;
    constructor(namedParameters?: {
        delay?: Duration;
        debugOwner?: any;
        kind?: PointerDeviceKind;
    });
}
export { DelayedMultiDragGestureRecognizer };
