import { Offset } from '../../../mx-dart-sdk';
import { SingleChildLayoutDelegate } from '../rendering/shifted-box';
import { Animation } from '../animation/animation';
import { OverlayEntry } from '../widgets/overlay';
import { AnimationController } from '../animation/animation-controller';
import { Key } from '../foundation/key';
import { Duration } from '../../../mx-dart-sdk';
import { TextStyle } from '../painting/text-style';
import { Decoration } from '../painting/decoration';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { StatefulWidget$, State$, StatelessWidget$ } from '../widgets/framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class Tooltip extends StatefulWidget$ {
    message: string;
    height: number;
    padding: EdgeInsetsGeometry;
    margin: EdgeInsetsGeometry;
    verticalOffset: number;
    preferBelow: boolean;
    excludeFromSemantics: boolean;
    child: MXWidget;
    decoration: Decoration;
    textStyle: TextStyle;
    waitDuration: Duration;
    showDuration: Duration;
    constructor(namedParameters?: {
        key?: Key;
        message?: string;
        height?: number;
        padding?: EdgeInsetsGeometry;
        margin?: EdgeInsetsGeometry;
        verticalOffset?: number;
        preferBelow?: boolean;
        excludeFromSemantics?: boolean;
        decoration?: Decoration;
        textStyle?: TextStyle;
        waitDuration?: Duration;
        showDuration?: Duration;
        child?: MXWidget;
    });
}
export { Tooltip };
declare class _TooltipState extends State$ {
    height: number;
    padding: EdgeInsetsGeometry;
    margin: EdgeInsetsGeometry;
    decoration: Decoration;
    textStyle: TextStyle;
    verticalOffset: number;
    preferBelow: boolean;
    excludeFromSemantics: boolean;
    controller: AnimationController;
    entry: OverlayEntry;
    hideTimer: any;
    showTimer: any;
    showDuration: Duration;
    waitDuration: Duration;
    mouseIsConnected: boolean;
    longPressActivated: boolean;
}
export { _TooltipState };
declare class _TooltipPositionDelegate extends SingleChildLayoutDelegate {
    target: Offset;
    verticalOffset: number;
    preferBelow: boolean;
    constructor(namedParameters?: {
        target?: Offset;
        verticalOffset?: number;
        preferBelow?: boolean;
    });
}
export { _TooltipPositionDelegate };
declare class _TooltipOverlay extends StatelessWidget$ {
    message: string;
    height: number;
    padding: EdgeInsetsGeometry;
    margin: EdgeInsetsGeometry;
    decoration: Decoration;
    textStyle: TextStyle;
    animation: Animation;
    target: Offset;
    verticalOffset: number;
    preferBelow: boolean;
    constructor(namedParameters?: {
        key?: Key;
        message?: string;
        height?: number;
        padding?: EdgeInsetsGeometry;
        margin?: EdgeInsetsGeometry;
        decoration?: Decoration;
        textStyle?: TextStyle;
        animation?: Animation;
        target?: Offset;
        verticalOffset?: number;
        preferBelow?: boolean;
    });
}
export { _TooltipOverlay };
