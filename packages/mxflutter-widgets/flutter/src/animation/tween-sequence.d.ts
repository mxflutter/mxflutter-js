import { Animatable } from './tween';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class TweenSequence extends Animatable {
    items: Array<any>;
    intervals: Array<any>;
    constructor(items?: Array<any>);
}
export { TweenSequence };
declare class FlippedTweenSequence extends TweenSequence {
    constructor(items?: Array<any>);
}
export { FlippedTweenSequence };
declare class TweenSequenceItem extends MXDartClass {
    tween: Animatable;
    weight: number;
    constructor(namedParameters?: {
        tween?: Animatable;
        weight?: number;
    });
}
export { TweenSequenceItem };
declare class _Interval extends MXDartClass {
    start: number;
    end: number;
    constructor(start?: number, end?: number);
}
export { _Interval };
