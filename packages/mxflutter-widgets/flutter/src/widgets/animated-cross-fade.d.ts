import { Animation } from '../animation/animation';
import { AnimationController } from '../animation/animation-controller';
import { Key } from '../foundation/key';
import { AlignmentGeometry } from '../painting/alignment';
import { Curve } from '../animation/curves';
import { Duration } from '../../../mx-dart-sdk';
import { StatefulWidget, State } from './framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare enum CrossFadeState {
    showFirst = "{ \"_name\": \"CrossFadeState.showFirst\", \"index\": 0 }",
    showSecond = "{ \"_name\": \"CrossFadeState.showSecond\", \"index\": 1 }"
}
export { CrossFadeState };
declare class AnimatedCrossFade extends StatefulWidget {
    firstChild: MXWidget;
    secondChild: MXWidget;
    crossFadeState: CrossFadeState;
    duration: Duration;
    reverseDuration: Duration;
    firstCurve: Curve;
    secondCurve: Curve;
    sizeCurve: Curve;
    alignment: AlignmentGeometry;
    layoutBuilder: any;
    constructor(namedParameters?: {
        key?: Key;
        firstChild?: MXWidget;
        secondChild?: MXWidget;
        firstCurve?: Curve;
        secondCurve?: Curve;
        sizeCurve?: Curve;
        alignment?: AlignmentGeometry;
        crossFadeState?: CrossFadeState;
        duration?: Duration;
        reverseDuration?: Duration;
        layoutBuilder?: any;
    });
}
export { AnimatedCrossFade };
declare class _AnimatedCrossFadeState extends State {
    controller: AnimationController;
    firstAnimation: Animation;
    secondAnimation: Animation;
}
export { _AnimatedCrossFadeState };
