import { Tween } from '../animation/tween';
import { Color, ImageFilter } from '../../../mx-dart-sdk';
import { PopupRoute } from '../widgets/routes';
import { LinearGradient } from '../painting/gradient';
import { Decoration, BoxPainter } from '../painting/decoration';
import { AnimationController } from '../animation/animation-controller';
import { HorizontalDragGestureRecognizer } from '../gestures/monodrag';
import { Animation } from '../animation/animation';
import { LocalKey, Key } from '../foundation/key';
import { StatelessWidget, StatefulWidget, State } from '../widgets/framework';
import { RouteSettings, Page, NavigatorState } from '../widgets/navigator';
import { ValueNotifier } from '../foundation/change-notifier';
import { PageRoute } from '../widgets/pages';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare abstract class CupertinoRouteTransitionMixin extends PageRoute {
    previousTitle: ValueNotifier;
}
export { CupertinoRouteTransitionMixin };
declare class CupertinoPageRoute extends PageRoute {
    builder: any;
    title: string;
    maintainState: boolean;
    constructor(namedParameters?: {
        builder?: any;
        title?: string;
        settings?: RouteSettings;
        maintainState?: boolean;
        fullscreenDialog?: boolean;
    });
}
export { CupertinoPageRoute };
declare class _PageBasedCupertinoPageRoute extends PageRoute {
    constructor(namedParameters?: {
        page?: CupertinoPage;
    });
}
export { _PageBasedCupertinoPageRoute };
declare class CupertinoPage extends Page {
    child: MXWidget;
    title: string;
    maintainState: boolean;
    fullscreenDialog: boolean;
    constructor(namedParameters?: {
        child?: MXWidget;
        maintainState?: boolean;
        title?: string;
        fullscreenDialog?: boolean;
        key?: LocalKey;
        name?: string;
        mx_arguments?: any;
    });
}
export { CupertinoPage };
declare class CupertinoPageTransition extends StatelessWidget {
    primaryPositionAnimation: Animation;
    secondaryPositionAnimation: Animation;
    primaryShadowAnimation: Animation;
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        primaryRouteAnimation?: Animation;
        secondaryRouteAnimation?: Animation;
        child?: MXWidget;
        linearTransition?: boolean;
    });
}
export { CupertinoPageTransition };
declare class CupertinoFullscreenDialogTransition extends StatelessWidget {
    positionAnimation: Animation;
    secondaryPositionAnimation: Animation;
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        primaryRouteAnimation?: Animation;
        secondaryRouteAnimation?: Animation;
        child?: MXWidget;
        linearTransition?: boolean;
    });
}
export { CupertinoFullscreenDialogTransition };
declare class _CupertinoBackGestureDetector extends StatefulWidget {
    child: MXWidget;
    enabledCallback: any;
    onStartPopGesture: any;
    constructor(namedParameters?: {
        key?: Key;
        enabledCallback?: any;
        onStartPopGesture?: any;
        child?: MXWidget;
    });
}
export { _CupertinoBackGestureDetector };
declare class _CupertinoBackGestureDetectorState extends State {
    backGestureController: _CupertinoBackGestureController;
    recognizer: HorizontalDragGestureRecognizer;
}
export { _CupertinoBackGestureDetectorState };
declare class _CupertinoBackGestureController extends MXDartClass {
    controller: AnimationController;
    navigator: NavigatorState;
    constructor(namedParameters?: {
        navigator?: NavigatorState;
        controller?: AnimationController;
    });
}
export { _CupertinoBackGestureController };
declare class _CupertinoEdgeShadowDecoration extends Decoration {
    edgeGradient: LinearGradient;
    constructor(namedParameters?: {
        edgeGradient?: LinearGradient;
    });
    static get none(): _CupertinoEdgeShadowDecoration;
}
export { _CupertinoEdgeShadowDecoration };
declare class _CupertinoEdgeShadowPainter extends BoxPainter {
    decoration: _CupertinoEdgeShadowDecoration;
    constructor(_decoration?: _CupertinoEdgeShadowDecoration, onChange?: any);
}
export { _CupertinoEdgeShadowPainter };
declare class _CupertinoModalPopupRoute extends PopupRoute {
    builder: any;
    semanticsDismissible: boolean;
    barrierLabel: string;
    barrierColor: Color;
    animation: Animation;
    offsetTween: Tween;
    constructor(namedParameters?: {
        barrierColor?: Color;
        barrierLabel?: string;
        builder?: any;
        semanticsDismissible?: boolean;
        filter?: ImageFilter;
        settings?: RouteSettings;
    });
}
export { _CupertinoModalPopupRoute };
