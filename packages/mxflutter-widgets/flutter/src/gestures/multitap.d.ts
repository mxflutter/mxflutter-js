import { GestureRecognizer, OffsetPair } from './recognizer';
import { PointerDownEvent, PointerEvent } from './events';
import { Offset, PointerDeviceKind } from '../../../mx-dart-sdk';
import { GestureArenaEntry } from './arena';
import { Duration } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class _CountdownZoned extends MXDartClass {
    timeout: boolean;
    constructor(namedParameters?: {
        duration?: Duration;
    });
}
export { _CountdownZoned };
declare class _TapTracker extends MXDartClass {
    pointer: number;
    entry: GestureArenaEntry;
    initialGlobalPosition: Offset;
    initialButtons: number;
    doubleTapMinTimeCountdown: _CountdownZoned;
    isTrackingPointer: boolean;
    constructor(namedParameters?: {
        event?: PointerDownEvent;
        entry?: GestureArenaEntry;
        doubleTapMinTime?: Duration;
    });
}
export { _TapTracker };
declare class DoubleTapGestureRecognizer extends GestureRecognizer {
    onDoubleTap: any;
    doubleTapTimer: any;
    firstTap: _TapTracker;
    trackers: Map<any, any>;
    constructor(namedParameters?: {
        debugOwner?: any;
        kind?: PointerDeviceKind;
    });
}
export { DoubleTapGestureRecognizer };
declare class _TapGesture extends _TapTracker {
    gestureRecognizer: MultiTapGestureRecognizer;
    wonArena: boolean;
    timer: any;
    lastPosition: OffsetPair;
    finalPosition: OffsetPair;
    constructor(namedParameters?: {
        gestureRecognizer?: MultiTapGestureRecognizer;
        event?: PointerEvent;
        longTapDelay?: Duration;
    });
}
export { _TapGesture };
declare class MultiTapGestureRecognizer extends GestureRecognizer {
    onTapDown: any;
    onTapUp: any;
    onTap: any;
    onTapCancel: any;
    longTapDelay: Duration;
    onLongTapDown: any;
    gestureMap: Map<any, any>;
    constructor(namedParameters?: {
        longTapDelay?: Duration;
        debugOwner?: any;
        kind?: PointerDeviceKind;
    });
}
export { MultiTapGestureRecognizer };
