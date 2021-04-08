import { Key } from '../foundation/key';
import { Curve } from '../animation/curves';
import { Duration } from '../../../mx-dart-sdk';
import { StatefulWidget, State } from './framework';
import { Animation } from '../animation/animation';
import { AnimationController } from '../animation/animation-controller';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare class _ChildEntry extends MXDartClass {
    controller: AnimationController;
    animation: Animation;
    transition: MXWidget;
    widgetChild: MXWidget;
    constructor(namedParameters?: {
        controller?: AnimationController;
        animation?: Animation;
        transition?: MXWidget;
        widgetChild?: MXWidget;
    });
}
export { _ChildEntry };
declare class AnimatedSwitcher extends StatefulWidget {
    child: MXWidget;
    duration: Duration;
    reverseDuration: Duration;
    switchInCurve: Curve;
    switchOutCurve: Curve;
    transitionBuilder: any;
    layoutBuilder: any;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        duration?: Duration;
        reverseDuration?: Duration;
        switchInCurve?: Curve;
        switchOutCurve?: Curve;
        transitionBuilder?: any;
        layoutBuilder?: any;
    });
}
export { AnimatedSwitcher };
declare class _AnimatedSwitcherState extends State {
    currentEntry: _ChildEntry;
    outgoingEntries: Set<any>;
    outgoingWidgets: Array<any>;
    childNumber: number;
}
export { _AnimatedSwitcherState };
