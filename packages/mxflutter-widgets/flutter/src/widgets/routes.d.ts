import { OverlayEntry } from './overlay';
import { PageStorageBucket } from './page-storage';
import { ImageFilter, Color } from '../../../mx-dart-sdk';
import { FocusScopeNode } from './focus-manager';
import { Listenable } from '../foundation/change-notifier';
import { Key } from '../foundation/key';
import { InheritedWidget, StatefulWidget$, State$, GlobalKey } from './framework';
import { DismissAction } from './actions';
import { Duration } from '../../../mx-dart-sdk';
import { ProxyAnimation } from '../animation/animations';
import { AnimationController } from '../animation/animation-controller';
import { Animation } from '../animation/animation';
import { Route, NavigatorObserver, RouteSettings } from './navigator';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare abstract class OverlayRoute extends Route {
    overlayEntries: Array<any>;
}
export { OverlayRoute };
declare abstract class TransitionRoute extends OverlayRoute {
    transitionCompleter: any;
    animation: Animation;
    controller: AnimationController;
    secondaryAnimation: ProxyAnimation;
    result: any;
    trainHoppingListenerRemover: any;
}
export { TransitionRoute };
declare class LocalHistoryEntry extends MXDartClass {
    onRemove: any;
    owner: LocalHistoryRoute;
    constructor(namedParameters?: {
        onRemove?: any;
    });
}
export { LocalHistoryEntry };
declare abstract class LocalHistoryRoute extends Route {
    localHistory: Array<any>;
}
export { LocalHistoryRoute };
declare class _DismissModalAction extends DismissAction {
}
export { _DismissModalAction };
declare class _ModalScopeStatus extends InheritedWidget {
    isCurrent: boolean;
    canPop: boolean;
    route: Route;
    constructor(namedParameters?: {
        key?: Key;
        isCurrent?: boolean;
        canPop?: boolean;
        route?: Route;
        child?: MXWidget;
    });
}
export { _ModalScopeStatus };
declare class _ModalScope extends StatefulWidget$ {
    route: ModalRoute;
    constructor(namedParameters?: {
        key?: Key;
        route?: ModalRoute;
    });
}
export { _ModalScope };
declare class _ModalScopeState extends State$ {
    page: MXWidget;
    listenable: Listenable;
    focusScopeNode: FocusScopeNode;
}
export { _ModalScopeState };
declare abstract class ModalRoute extends TransitionRoute {
    filter: ImageFilter;
    offstage: boolean;
    animationProxy: ProxyAnimation;
    secondaryAnimationProxy: ProxyAnimation;
    willPopCallbacks: Array<any>;
    scopeKey: GlobalKey;
    subtreeKey: GlobalKey;
    storageBucket: PageStorageBucket;
    modalBarrier: OverlayEntry;
    modalScopeCache: MXWidget;
    modalScope: OverlayEntry;
    static of(context: any): Promise<unknown>;
}
export { ModalRoute };
declare abstract class PopupRoute extends ModalRoute {
}
export { PopupRoute };
declare class RouteObserver extends NavigatorObserver {
    listeners: Map<any, any>;
}
export { RouteObserver };
declare abstract class RouteAware extends MXDartClass {
}
export { RouteAware };
declare class _DialogRoute extends PopupRoute {
    pageBuilder: any;
    barrierDismissible: boolean;
    barrierLabel: string;
    barrierColor: Color;
    transitionDuration: Duration;
    transitionBuilder: any;
    constructor(namedParameters?: {
        pageBuilder?: any;
        barrierDismissible?: boolean;
        barrierLabel?: string;
        barrierColor?: Color;
        transitionDuration?: Duration;
        transitionBuilder?: any;
        settings?: RouteSettings;
    });
}
export { _DialogRoute };
