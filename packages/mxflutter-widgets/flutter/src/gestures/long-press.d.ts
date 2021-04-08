import { Duration } from '../../../mx-dart-sdk';
import { PrimaryPointerGestureRecognizer, OffsetPair } from './recognizer';
import { Velocity, VelocityTracker } from './velocity-tracker';
import { Offset, PointerDeviceKind } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class LongPressStartDetails extends MXDartClass {
    globalPosition: Offset;
    localPosition: Offset;
    constructor(namedParameters?: {
        globalPosition?: Offset;
        localPosition?: Offset;
    });
}
export { LongPressStartDetails };
declare class LongPressMoveUpdateDetails extends MXDartClass {
    globalPosition: Offset;
    localPosition: Offset;
    offsetFromOrigin: Offset;
    localOffsetFromOrigin: Offset;
    constructor(namedParameters?: {
        globalPosition?: Offset;
        localPosition?: Offset;
        offsetFromOrigin?: Offset;
        localOffsetFromOrigin?: Offset;
    });
}
export { LongPressMoveUpdateDetails };
declare class LongPressEndDetails extends MXDartClass {
    globalPosition: Offset;
    localPosition: Offset;
    velocity: Velocity;
    constructor(namedParameters?: {
        globalPosition?: Offset;
        localPosition?: Offset;
        velocity?: Velocity;
    });
}
export { LongPressEndDetails };
declare class LongPressGestureRecognizer extends PrimaryPointerGestureRecognizer {
    longPressAccepted: boolean;
    longPressOrigin: OffsetPair;
    initialButtons: number;
    onLongPress: any;
    onLongPressStart: any;
    onLongPressMoveUpdate: any;
    onLongPressUp: any;
    onLongPressEnd: any;
    onSecondaryLongPress: any;
    onSecondaryLongPressStart: any;
    onSecondaryLongPressMoveUpdate: any;
    onSecondaryLongPressUp: any;
    onSecondaryLongPressEnd: any;
    onTertiaryLongPress: any;
    onTertiaryLongPressStart: any;
    onTertiaryLongPressMoveUpdate: any;
    onTertiaryLongPressUp: any;
    onTertiaryLongPressEnd: any;
    velocityTracker: VelocityTracker;
    constructor(namedParameters?: {
        duration?: Duration;
        postAcceptSlopTolerance?: number;
        kind?: PointerDeviceKind;
        debugOwner?: any;
    });
}
export { LongPressGestureRecognizer };
