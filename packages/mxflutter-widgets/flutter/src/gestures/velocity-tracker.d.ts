import { Duration } from '../../../mx-dart-sdk';
import { Offset, PointerDeviceKind } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class Velocity extends MXDartClass {
    pixelsPerSecond: Offset;
    constructor(namedParameters?: {
        pixelsPerSecond?: Offset;
    });
    static get zero(): Velocity;
}
export { Velocity };
declare class VelocityEstimate extends MXDartClass {
    pixelsPerSecond: Offset;
    confidence: number;
    duration: Duration;
    offset: Offset;
    constructor(namedParameters?: {
        pixelsPerSecond?: Offset;
        confidence?: number;
        duration?: Duration;
        offset?: Offset;
    });
}
export { VelocityEstimate };
declare class _PointAtTime extends MXDartClass {
    time: Duration;
    point: Offset;
    constructor(point?: Offset, time?: Duration);
}
export { _PointAtTime };
declare class VelocityTracker extends MXDartClass {
    kind: PointerDeviceKind;
    samples: Array<any>;
    index: number;
    constructor(kind?: PointerDeviceKind);
    static withKind(kind?: PointerDeviceKind): VelocityTracker;
}
export { VelocityTracker };
declare class IOSScrollViewFlingVelocityTracker extends VelocityTracker {
    touchSamples: Array<any>;
    constructor(kind?: PointerDeviceKind);
}
export { IOSScrollViewFlingVelocityTracker };
