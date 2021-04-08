import { ProxyAnimation } from '../animation/animations';
import { Key } from '../foundation/key';
import { Animation, AnimationStatus } from '../animation/animation';
import { StatefulWidget, State } from './framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class DualTransitionBuilder extends StatefulWidget {
    animation: Animation;
    forwardBuilder: any;
    reverseBuilder: any;
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        animation?: Animation;
        forwardBuilder?: any;
        reverseBuilder?: any;
        child?: MXWidget;
    });
}
export { DualTransitionBuilder };
declare class _DualTransitionBuilderState extends State {
    effectiveAnimationStatus: AnimationStatus;
    forwardAnimation: ProxyAnimation;
    reverseAnimation: ProxyAnimation;
}
export { _DualTransitionBuilderState };
