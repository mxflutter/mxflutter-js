import { Curve } from './curves';
import { Animation, AnimationStatus } from './animation';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class _AlwaysCompleteAnimation extends Animation {
}
export { _AlwaysCompleteAnimation };
declare class _AlwaysDismissedAnimation extends Animation {
}
export { _AlwaysDismissedAnimation };
declare class AlwaysStoppedAnimation extends Animation {
    value: any;
    constructor(value?: any);
}
export { AlwaysStoppedAnimation };
declare abstract class AnimationWithParentMixin extends MXDartClass {
}
export { AnimationWithParentMixin };
declare class ProxyAnimation extends Animation {
    status: AnimationStatus;
    value: number;
    parent: Animation;
    constructor(animation?: Animation);
}
export { ProxyAnimation };
declare class ReverseAnimation extends Animation {
    parent: Animation;
    constructor(parent?: Animation);
}
export { ReverseAnimation };
declare class CurvedAnimation extends Animation {
    parent: Animation;
    curve: Curve;
    reverseCurve: Curve;
    curveDirection: AnimationStatus;
    constructor(namedParameters?: {
        parent?: Animation;
        curve?: Curve;
        reverseCurve?: Curve;
    });
}
export { CurvedAnimation };
declare enum _TrainHoppingMode {
    minimize = "{ \"_name\": \"_TrainHoppingMode.minimize\", \"index\": 0 }",
    maximize = "{ \"_name\": \"_TrainHoppingMode.maximize\", \"index\": 1 }"
}
export { _TrainHoppingMode };
declare class TrainHoppingAnimation extends Animation {
    currentTrain: Animation;
    nextTrain: Animation;
    mode: _TrainHoppingMode;
    onSwitchedTrain: any;
    lastStatus: AnimationStatus;
    lastValue: number;
    constructor(_currentTrain?: Animation, _nextTrain?: Animation, namedParameters?: {
        onSwitchedTrain?: any;
    });
}
export { TrainHoppingAnimation };
declare abstract class CompoundAnimation extends Animation {
    first: Animation;
    next: Animation;
    lastStatus: AnimationStatus;
    lastValue: any;
}
export { CompoundAnimation };
declare class AnimationMean extends CompoundAnimation {
    constructor(namedParameters?: {
        left?: Animation;
        right?: Animation;
    });
}
export { AnimationMean };
declare class AnimationMax extends CompoundAnimation {
    constructor(first?: Animation, next?: Animation);
}
export { AnimationMax };
declare class AnimationMin extends CompoundAnimation {
    constructor(first?: Animation, next?: Animation);
}
export { AnimationMin };
