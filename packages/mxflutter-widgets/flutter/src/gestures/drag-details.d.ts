import { Velocity } from './velocity-tracker';
import { Duration } from '../../../mx-dart-sdk';
import { Offset } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class DragDownDetails extends MXDartClass {
    globalPosition: Offset;
    localPosition: Offset;
    constructor(namedParameters?: {
        globalPosition?: Offset;
        localPosition?: Offset;
    });
}
export { DragDownDetails };
declare class DragStartDetails extends MXDartClass {
    sourceTimeStamp: Duration;
    globalPosition: Offset;
    localPosition: Offset;
    constructor(namedParameters?: {
        sourceTimeStamp?: Duration;
        globalPosition?: Offset;
        localPosition?: Offset;
    });
}
export { DragStartDetails };
declare class DragUpdateDetails extends MXDartClass {
    sourceTimeStamp: Duration;
    delta: Offset;
    primaryDelta: number;
    globalPosition: Offset;
    localPosition: Offset;
    constructor(namedParameters?: {
        sourceTimeStamp?: Duration;
        delta?: Offset;
        primaryDelta?: number;
        globalPosition?: Offset;
        localPosition?: Offset;
    });
}
export { DragUpdateDetails };
declare class DragEndDetails extends MXDartClass {
    velocity: Velocity;
    primaryVelocity: number;
    constructor(namedParameters?: {
        velocity?: Velocity;
        primaryVelocity?: number;
    });
}
export { DragEndDetails };
