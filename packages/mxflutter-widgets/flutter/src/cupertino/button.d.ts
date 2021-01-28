import { Duration } from '../../../mx-dart-sdk';
import { Animation } from '../animation/animation';
import { AnimationController } from '../animation/animation-controller';
import { Tween } from '../animation/tween';
import { Key } from '../foundation/key';
import { BorderRadius } from '../painting/border-radius';
import { Color } from '../../../mx-dart-sdk';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { StatefulWidget$, State$ } from '../widgets/framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class CupertinoButton extends StatefulWidget$ {
    child: MXWidget;
    padding: EdgeInsetsGeometry;
    color: Color;
    disabledColor: Color;
    onPressed: any;
    minSize: number;
    pressedOpacity: number;
    borderRadius: BorderRadius;
    filled: boolean;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        padding?: EdgeInsetsGeometry;
        color?: Color;
        disabledColor?: Color;
        minSize?: number;
        pressedOpacity?: number;
        borderRadius?: BorderRadius;
        onPressed?: any;
    });
    static filled(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        padding?: EdgeInsetsGeometry;
        disabledColor?: Color;
        minSize?: number;
        pressedOpacity?: number;
        borderRadius?: BorderRadius;
        onPressed?: any;
    }): CupertinoButton;
}
export { CupertinoButton };
declare class _CupertinoButtonState extends State$ {
    opacityTween: Tween;
    animationController: AnimationController;
    opacityAnimation: Animation;
    buttonHeldDown: boolean;
    static get kFadeOutDuration(): Duration;
    static get kFadeInDuration(): Duration;
}
export { _CupertinoButtonState };
