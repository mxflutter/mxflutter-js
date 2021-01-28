import { PointerDeviceKind } from '../../../mx-dart-sdk';
import { LongPressGestureRecognizer } from '../gestures/long-press';
import { Drag } from '../gestures/drag';
import { Animation } from '../animation/animation';
import { AnimationController } from '../animation/animation-controller';
import { ScrollbarPainter } from '../widgets/scrollbar';
import { Key } from '../foundation/key';
import { ScrollController } from '../widgets/scroll-controller';
import { StatefulWidget$, State$, GlobalKey } from '../widgets/framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class CupertinoScrollbar extends StatefulWidget$ {
    child: MXWidget;
    controller: ScrollController;
    isAlwaysShown: boolean;
    constructor(namedParameters?: {
        key?: Key;
        controller?: ScrollController;
        isAlwaysShown?: boolean;
        child?: MXWidget;
    });
}
export { CupertinoScrollbar };
declare class _CupertinoScrollbarState extends State$ {
    customPaintKey: GlobalKey;
    painter: ScrollbarPainter;
    fadeoutAnimationController: AnimationController;
    fadeoutOpacityAnimation: Animation;
    thicknessAnimationController: AnimationController;
    fadeoutTimer: any;
    dragScrollbarPositionY: number;
    drag: Drag;
    currentController: ScrollController;
    pressStartY: number;
}
export { _CupertinoScrollbarState };
declare class _ThumbPressGestureRecognizer extends LongPressGestureRecognizer {
    customPaintKey: GlobalKey;
    constructor(namedParameters?: {
        postAcceptSlopTolerance?: number;
        kind?: PointerDeviceKind;
        debugOwner?: any;
        customPaintKey?: GlobalKey;
    });
}
export { _ThumbPressGestureRecognizer };
