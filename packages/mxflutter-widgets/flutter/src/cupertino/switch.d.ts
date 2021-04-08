import { RenderConstrainedBox } from '../rendering/proxy-box';
import { Animation } from '../animation/animation';
import { CurvedAnimation } from '../animation/animations';
import { AnimationController } from '../animation/animation-controller';
import { HorizontalDragGestureRecognizer } from '../gestures/monodrag';
import { TapGestureRecognizer } from '../gestures/tap';
import { Key } from '../foundation/key';
import { DragStartBehavior } from '../gestures/recognizer';
import { Color, TextDirection } from '../../../mx-dart-sdk';
import { StatefulWidget, State, LeafRenderObjectWidget } from '../widgets/framework';
declare class CupertinoSwitch extends StatefulWidget {
    value: boolean;
    onChanged: any;
    activeColor: Color;
    trackColor: Color;
    dragStartBehavior: DragStartBehavior;
    constructor(namedParameters?: {
        key?: Key;
        value?: boolean;
        onChanged?: any;
        activeColor?: Color;
        trackColor?: Color;
        dragStartBehavior?: DragStartBehavior;
    });
}
export { CupertinoSwitch };
declare class _CupertinoSwitchState extends State {
    tap: TapGestureRecognizer;
    drag: HorizontalDragGestureRecognizer;
    positionController: AnimationController;
    position: CurvedAnimation;
    reactionController: AnimationController;
    reaction: Animation;
    needsPositionAnimation: boolean;
}
export { _CupertinoSwitchState };
declare class _CupertinoSwitchRenderObjectWidget extends LeafRenderObjectWidget {
    value: boolean;
    activeColor: Color;
    trackColor: Color;
    onChanged: any;
    state: _CupertinoSwitchState;
    textDirection: TextDirection;
    constructor(namedParameters?: {
        key?: Key;
        value?: boolean;
        activeColor?: Color;
        trackColor?: Color;
        onChanged?: any;
        textDirection?: TextDirection;
        state?: _CupertinoSwitchState;
    });
}
export { _CupertinoSwitchRenderObjectWidget };
declare class _RenderCupertinoSwitch extends RenderConstrainedBox {
    state: _CupertinoSwitchState;
    value: boolean;
    activeColor: Color;
    trackColor: Color;
    onChanged: any;
    textDirection: TextDirection;
    constructor(namedParameters?: {
        value?: boolean;
        activeColor?: Color;
        trackColor?: Color;
        onChanged?: any;
        textDirection?: TextDirection;
        state?: _CupertinoSwitchState;
    });
}
export { _RenderCupertinoSwitch };
