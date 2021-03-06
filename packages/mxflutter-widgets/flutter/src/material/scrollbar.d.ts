import { Animation } from '../animation/animation';
import { AnimationController } from '../animation/animation-controller';
import { ScrollbarPainter } from '../widgets/scrollbar';
import { Key } from '../foundation/key';
import { Radius, TextDirection, Color } from '../../../mx-dart-sdk';
import { ScrollController } from '../widgets/scroll-controller';
import { StatefulWidget, State } from '../widgets/framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class Scrollbar extends StatefulWidget {
    child: MXWidget;
    controller: ScrollController;
    isAlwaysShown: boolean;
    thickness: number;
    radius: Radius;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        controller?: ScrollController;
        isAlwaysShown?: boolean;
        thickness?: number;
        radius?: Radius;
    });
}
export { Scrollbar };
declare class _ScrollbarState extends State {
    materialPainter: ScrollbarPainter;
    textDirection: TextDirection;
    themeColor: Color;
    useCupertinoScrollbar: boolean;
    fadeoutAnimationController: AnimationController;
    fadeoutOpacityAnimation: Animation;
    fadeoutTimer: any;
}
export { _ScrollbarState };
