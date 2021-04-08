import { Curve } from '../animation/curves';
import { Duration } from '../../../mx-dart-sdk';
import { Key } from '../foundation/key';
import { Tween } from '../animation/tween';
import { ImplicitlyAnimatedWidget, AnimatedWidgetBaseState } from './implicit-animations';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class TweenAnimationBuilder extends ImplicitlyAnimatedWidget {
    tween: Tween;
    builder: any;
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        tween?: Tween;
        duration?: Duration;
        curve?: Curve;
        builder?: any;
        onEnd?: any;
        child?: MXWidget;
    });
}
export { TweenAnimationBuilder };
declare class _TweenAnimationBuilderState extends AnimatedWidgetBaseState {
    currentTween: Tween;
}
export { _TweenAnimationBuilderState };
