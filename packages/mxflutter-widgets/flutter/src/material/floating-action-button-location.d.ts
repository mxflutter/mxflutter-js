import { Animation } from '../animation/animation';
import { CompoundAnimation } from '../animation/animations';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare abstract class FloatingActionButtonLocation extends MXDartClass {
    static get startTop(): {
        className: string;
        mirrorID: string;
    };
    static get miniStartTop(): {
        className: string;
        mirrorID: string;
    };
    static get centerTop(): {
        className: string;
        mirrorID: string;
    };
    static get miniCenterTop(): {
        className: string;
        mirrorID: string;
    };
    static get endTop(): {
        className: string;
        mirrorID: string;
    };
    static get miniEndTop(): {
        className: string;
        mirrorID: string;
    };
    static get startFloat(): {
        className: string;
        mirrorID: string;
    };
    static get miniStartFloat(): {
        className: string;
        mirrorID: string;
    };
    static get centerFloat(): {
        className: string;
        mirrorID: string;
    };
    static get miniCenterFloat(): {
        className: string;
        mirrorID: string;
    };
    static get endFloat(): {
        className: string;
        mirrorID: string;
    };
    static get miniEndFloat(): {
        className: string;
        mirrorID: string;
    };
    static get startDocked(): {
        className: string;
        mirrorID: string;
    };
    static get miniStartDocked(): {
        className: string;
        mirrorID: string;
    };
    static get centerDocked(): {
        className: string;
        mirrorID: string;
    };
    static get miniCenterDocked(): {
        className: string;
        mirrorID: string;
    };
    static get endDocked(): {
        className: string;
        mirrorID: string;
    };
    static get miniEndDocked(): {
        className: string;
        mirrorID: string;
    };
}
export { FloatingActionButtonLocation };
declare abstract class StandardFabLocation extends FloatingActionButtonLocation {
}
export { StandardFabLocation };
declare abstract class FabTopOffsetY extends StandardFabLocation {
}
export { FabTopOffsetY };
declare abstract class FabFloatOffsetY extends StandardFabLocation {
}
export { FabFloatOffsetY };
declare abstract class FabDockedOffsetY extends StandardFabLocation {
}
export { FabDockedOffsetY };
declare abstract class FabStartOffsetX extends StandardFabLocation {
}
export { FabStartOffsetX };
declare abstract class FabCenterOffsetX extends StandardFabLocation {
}
export { FabCenterOffsetX };
declare abstract class FabEndOffsetX extends StandardFabLocation {
}
export { FabEndOffsetX };
declare abstract class FabMiniOffsetAdjustment extends StandardFabLocation {
}
export { FabMiniOffsetAdjustment };
declare class _StartTopFabLocation extends StandardFabLocation {
}
export { _StartTopFabLocation };
declare class _MiniStartTopFabLocation extends StandardFabLocation {
}
export { _MiniStartTopFabLocation };
declare class _CenterTopFabLocation extends StandardFabLocation {
}
export { _CenterTopFabLocation };
declare class _MiniCenterTopFabLocation extends StandardFabLocation {
}
export { _MiniCenterTopFabLocation };
declare class _EndTopFabLocation extends StandardFabLocation {
}
export { _EndTopFabLocation };
declare class _MiniEndTopFabLocation extends StandardFabLocation {
}
export { _MiniEndTopFabLocation };
declare class _StartFloatFabLocation extends StandardFabLocation {
}
export { _StartFloatFabLocation };
declare class _MiniStartFloatFabLocation extends StandardFabLocation {
}
export { _MiniStartFloatFabLocation };
declare class _CenterFloatFabLocation extends StandardFabLocation {
}
export { _CenterFloatFabLocation };
declare class _MiniCenterFloatFabLocation extends StandardFabLocation {
}
export { _MiniCenterFloatFabLocation };
declare class _EndFloatFabLocation extends StandardFabLocation {
}
export { _EndFloatFabLocation };
declare class _MiniEndFloatFabLocation extends StandardFabLocation {
}
export { _MiniEndFloatFabLocation };
declare class _StartDockedFabLocation extends StandardFabLocation {
}
export { _StartDockedFabLocation };
declare class _MiniStartDockedFabLocation extends StandardFabLocation {
}
export { _MiniStartDockedFabLocation };
declare class _CenterDockedFabLocation extends StandardFabLocation {
}
export { _CenterDockedFabLocation };
declare class _MiniCenterDockedFabLocation extends StandardFabLocation {
}
export { _MiniCenterDockedFabLocation };
declare class _EndDockedFabLocation extends StandardFabLocation {
}
export { _EndDockedFabLocation };
declare class _MiniEndDockedFabLocation extends StandardFabLocation {
}
export { _MiniEndDockedFabLocation };
declare abstract class FloatingActionButtonAnimator extends MXDartClass {
    static get scaling(): {
        className: string;
        mirrorID: string;
    };
}
export { FloatingActionButtonAnimator };
declare class _ScalingFabMotionAnimator extends FloatingActionButtonAnimator {
}
export { _ScalingFabMotionAnimator };
declare class _AnimationSwap extends CompoundAnimation {
    parent: Animation;
    swapThreshold: number;
    constructor(first?: Animation, next?: Animation, parent?: Animation, swapThreshold?: number);
}
export { _AnimationSwap };
