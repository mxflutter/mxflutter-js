import { Notification } from './notification-listener';
import { CustomPainter } from '../rendering/custom-paint';
import { Duration } from '../../../mx-dart-sdk';
import { Ticker, TickerProvider } from '../scheduler/ticker';
import { Animation } from '../animation/animation';
import { Tween } from '../animation/tween';
import { AnimationController } from '../animation/animation-controller';
import { Listenable, ChangeNotifier } from '../foundation/change-notifier';
import { Key } from '../foundation/key';
import { Color } from '../../../mx-dart-sdk';
import { AxisDirection, Axis } from '../painting/basic-types';
import { StatefulWidget$, State$ } from './framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class GlowingOverscrollIndicator extends StatefulWidget$ {
    showLeading: boolean;
    showTrailing: boolean;
    axisDirection: AxisDirection;
    color: Color;
    notificationPredicate: any;
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        showLeading?: boolean;
        showTrailing?: boolean;
        axisDirection?: AxisDirection;
        color?: Color;
        notificationPredicate?: any;
        child?: MXWidget;
    });
}
export { GlowingOverscrollIndicator };
declare class _GlowingOverscrollIndicatorState extends State$ {
    leadingController: _GlowController;
    trailingController: _GlowController;
    leadingAndTrailingListener: Listenable;
    lastNotificationType: any;
    accepted: Map<any, any>;
}
export { _GlowingOverscrollIndicatorState };
declare enum _GlowState {
    idle = "{ \"_name\": \"_GlowState.idle\", \"index\": 0 }",
    absorb = "{ \"_name\": \"_GlowState.absorb\", \"index\": 1 }",
    pull = "{ \"_name\": \"_GlowState.pull\", \"index\": 2 }",
    recede = "{ \"_name\": \"_GlowState.recede\", \"index\": 3 }"
}
export { _GlowState };
declare class _GlowController extends ChangeNotifier {
    state: _GlowState;
    glowController: AnimationController;
    pullRecedeTimer: any;
    paintOffset: number;
    paintOffsetScrollPixels: number;
    glowOpacityTween: Tween;
    glowOpacity: Animation;
    glowSizeTween: Tween;
    glowSize: Animation;
    displacementTicker: Ticker;
    displacementTickerLastElapsed: Duration;
    displacementTarget: number;
    displacement: number;
    pullDistance: number;
    color: Color;
    axis: Axis;
    constructor(namedParameters?: {
        vsync?: TickerProvider;
        color?: Color;
        axis?: Axis;
    });
}
export { _GlowController };
declare class _GlowingOverscrollIndicatorPainter extends CustomPainter {
    leadingController: _GlowController;
    trailingController: _GlowController;
    axisDirection: AxisDirection;
    constructor(namedParameters?: {
        leadingController?: _GlowController;
        trailingController?: _GlowController;
        axisDirection?: AxisDirection;
        repaint?: Listenable;
    });
    static get piOver2(): number;
}
export { _GlowingOverscrollIndicatorPainter };
declare class OverscrollIndicatorNotification extends Notification {
    leading: boolean;
    paintOffset: number;
    accepted: boolean;
    constructor(namedParameters?: {
        leading?: boolean;
    });
}
export { OverscrollIndicatorNotification };
