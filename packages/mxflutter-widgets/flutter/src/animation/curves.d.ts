import { Offset } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare abstract class ParametricCurve extends MXDartClass {
}
export { ParametricCurve };
declare abstract class Curve extends ParametricCurve {
}
export { Curve };
declare class _Linear extends Curve {
}
export { _Linear };
declare class SawTooth extends Curve {
    count: number;
    constructor(count?: number);
}
export { SawTooth };
declare class Interval extends Curve {
    begin: number;
    end: number;
    curve: Curve;
    constructor(begin?: number, end?: number, namedParameters?: {
        curve?: Curve;
    });
}
export { Interval };
declare class Threshold extends Curve {
    threshold: number;
    constructor(threshold?: number);
}
export { Threshold };
declare class Cubic extends Curve {
    a: number;
    b: number;
    c: number;
    d: number;
    constructor(a?: number, b?: number, c?: number, d?: number);
    transformInternal(t: number): number;
    protected evaluateCubic(a: number, b: number, m: number): number;
}
export { Cubic };
declare abstract class Curve2D extends ParametricCurve {
}
export { Curve2D };
declare class Curve2DSample extends MXDartClass {
    t: number;
    value: Offset;
    constructor(t?: number, value?: Offset);
}
export { Curve2DSample };
declare class CatmullRomSpline extends Curve2D {
    cubicSegments: Array<any>;
    controlPoints: Array<any>;
    startHandle: Offset;
    endHandle: Offset;
    tension: number;
    constructor(controlPoints?: Array<any>, namedParameters?: {
        tension?: number;
        startHandle?: Offset;
        endHandle?: Offset;
    });
    static precompute(controlPoints?: Array<any>, namedParameters?: {
        tension?: number;
        startHandle?: Offset;
        endHandle?: Offset;
    }): CatmullRomSpline;
}
export { CatmullRomSpline };
declare class CatmullRomCurve extends Curve {
    precomputedSamples: Array<any>;
    controlPoints: Array<any>;
    tension: number;
    constructor(controlPoints?: Array<any>, namedParameters?: {
        tension?: number;
    });
    static precompute(controlPoints?: Array<any>, namedParameters?: {
        tension?: number;
    }): CatmullRomCurve;
}
export { CatmullRomCurve };
declare class FlippedCurve extends Curve {
    curve: Curve;
    constructor(curve?: Curve);
}
export { FlippedCurve };
declare class _DecelerateCurve extends Curve {
}
export { _DecelerateCurve };
declare class _BounceInCurve extends Curve {
}
export { _BounceInCurve };
declare class _BounceOutCurve extends Curve {
}
export { _BounceOutCurve };
declare class _BounceInOutCurve extends Curve {
}
export { _BounceInOutCurve };
declare class ElasticInCurve extends Curve {
    period: number;
    constructor(period?: number);
}
export { ElasticInCurve };
declare class ElasticOutCurve extends Curve {
    period: number;
    constructor(period?: number);
}
export { ElasticOutCurve };
declare class ElasticInOutCurve extends Curve {
    period: number;
    constructor(period?: number);
}
export { ElasticInOutCurve };
declare class Curves extends MXDartClass {
    static get linear(): {
        className: string;
        mirrorID: string;
    };
    static get decelerate(): {
        className: string;
        mirrorID: string;
    };
    static get fastLinearToSlowEaseIn(): Cubic;
    static get ease(): Cubic;
    static get easeIn(): Cubic;
    static get easeInToLinear(): Cubic;
    static get easeInSine(): Cubic;
    static get easeInQuad(): Cubic;
    static get easeInCubic(): Cubic;
    static get easeInQuart(): Cubic;
    static get easeInQuint(): Cubic;
    static get easeInExpo(): Cubic;
    static get easeInCirc(): Cubic;
    static get easeInBack(): Cubic;
    static get easeOut(): Cubic;
    static get linearToEaseOut(): Cubic;
    static get easeOutSine(): Cubic;
    static get easeOutQuad(): Cubic;
    static get easeOutCubic(): Cubic;
    static get easeOutQuart(): Cubic;
    static get easeOutQuint(): Cubic;
    static get easeOutExpo(): Cubic;
    static get easeOutCirc(): Cubic;
    static get easeOutBack(): Cubic;
    static get easeInOut(): Cubic;
    static get easeInOutSine(): Cubic;
    static get easeInOutQuad(): Cubic;
    static get easeInOutCubic(): Cubic;
    static get easeInOutQuart(): Cubic;
    static get easeInOutQuint(): Cubic;
    static get easeInOutExpo(): Cubic;
    static get easeInOutCirc(): Cubic;
    static get easeInOutBack(): Cubic;
    static get fastOutSlowIn(): Cubic;
    static get slowMiddle(): Cubic;
    static get bounceIn(): {
        className: string;
        mirrorID: string;
    };
    static get bounceOut(): {
        className: string;
        mirrorID: string;
    };
    static get bounceInOut(): {
        className: string;
        mirrorID: string;
    };
    static get elasticIn(): ElasticInCurve;
    static get elasticOut(): ElasticOutCurve;
    static get elasticInOut(): ElasticInOutCurve;
}
export { Curves };
