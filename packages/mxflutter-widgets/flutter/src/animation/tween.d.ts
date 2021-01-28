import { Curve } from './curves';
import { Color, Size, Rect } from '../../../mx-dart-sdk';
import { Animation } from './animation';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare abstract class Animatable extends MXDartClass {
}
export { Animatable };
declare class _AnimatedEvaluation extends Animation {
    parent: Animation;
    evaluatable: Animatable;
    constructor(parent?: Animation, _evaluatable?: Animatable);
}
export { _AnimatedEvaluation };
declare class _ChainedEvaluation extends Animatable {
    parent: Animatable;
    evaluatable: Animatable;
    constructor(_parent?: Animatable, _evaluatable?: Animatable);
}
export { _ChainedEvaluation };
declare class Tween extends Animatable {
    begin: any;
    end: any;
    constructor(namedParameters?: {
        begin?: any;
        end?: any;
    });
}
export { Tween };
declare class ReverseTween extends Tween {
    parent: Tween;
    constructor(parent?: Tween);
}
export { ReverseTween };
declare class ColorTween extends Tween {
    constructor(namedParameters?: {
        begin?: Color;
        end?: Color;
    });
}
export { ColorTween };
declare class SizeTween extends Tween {
    constructor(namedParameters?: {
        begin?: Size;
        end?: Size;
    });
}
export { SizeTween };
declare class RectTween extends Tween {
    constructor(namedParameters?: {
        begin?: Rect;
        end?: Rect;
    });
}
export { RectTween };
declare class IntTween extends Tween {
    constructor(namedParameters?: {
        begin?: number;
        end?: number;
    });
}
export { IntTween };
declare class StepTween extends Tween {
    constructor(namedParameters?: {
        begin?: number;
        end?: number;
    });
}
export { StepTween };
declare class ConstantTween extends Tween {
    constructor(value?: any);
}
export { ConstantTween };
declare class CurveTween extends Animatable {
    curve: Curve;
    constructor(namedParameters?: {
        curve?: Curve;
    });
}
export { CurveTween };
