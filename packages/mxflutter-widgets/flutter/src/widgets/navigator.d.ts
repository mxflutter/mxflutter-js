import { HeroController } from './heroes';
import { BuildContext$, InheritedWidget, StatefulWidget$ } from './framework';
import { LocalKey, Key } from '../foundation/key';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
declare enum RoutePopDisposition {
    pop = "{ \"_name\": \"RoutePopDisposition.pop\", \"index\": 0 }",
    doNotPop = "{ \"_name\": \"RoutePopDisposition.doNotPop\", \"index\": 1 }",
    bubble = "{ \"_name\": \"RoutePopDisposition.bubble\", \"index\": 2 }"
}
export { RoutePopDisposition };
declare abstract class Route extends MXMirrorWidget {
    navigator: NavigatorState;
    settings: RouteSettings;
    popCompleter: any;
}
export { Route };
declare class RouteSettings extends MXDartClass {
    name: string;
    __mx_arguments: any;
    constructor(namedParameters?: {
        name?: string;
        __mx_arguments?: any;
    });
}
export { RouteSettings };
declare abstract class Page extends RouteSettings {
    key: LocalKey;
}
export { Page };
declare class CustomBuilderPage extends Page {
    routeBuilder: any;
    constructor(namedParameters?: {
        key?: LocalKey;
        routeBuilder?: any;
        name?: string;
        __mx_arguments?: any;
    });
}
export { CustomBuilderPage };
declare class NavigatorObserver extends MXDartClass {
    navigator: NavigatorState;
}
export { NavigatorObserver };
declare class HeroControllerScope extends InheritedWidget {
    controller: HeroController;
    constructor(namedParameters?: {
        key?: Key;
        controller?: HeroController;
        child?: MXWidget;
    });
}
export { HeroControllerScope };
declare abstract class RouteTransitionRecord extends MXDartClass {
}
export { RouteTransitionRecord };
declare abstract class TransitionDelegate extends MXDartClass {
}
export { TransitionDelegate };
declare class DefaultTransitionDelegate extends TransitionDelegate {
}
export { DefaultTransitionDelegate };
declare class Navigator extends StatefulWidget$ {
    pages: Array<any>;
    onPopPage: any;
    transitionDelegate: TransitionDelegate;
    initialRoute: string;
    onGenerateRoute: any;
    onUnknownRoute: any;
    observers: Array<any>;
    onGenerateInitialRoutes: any;
    constructor(namedParameters?: {
        key?: Key;
        pages?: Array<any>;
        onPopPage?: any;
        initialRoute?: string;
        onGenerateInitialRoutes?: any;
        onGenerateRoute?: any;
        onUnknownRoute?: any;
        transitionDelegate?: TransitionDelegate;
        observers?: Array<any>;
    });
    static get defaultRouteName(): string;
    static replace(context?: BuildContext$, namedParameters?: {
        oldRoute?: Route;
        newRoute?: Route;
    }): MXDartClass;
    static replaceRouteBelow(context?: BuildContext$, namedParameters?: {
        anchorRoute?: Route;
        newRoute?: Route;
    }): MXDartClass;
    static pop(context: any): void;
    static popUntil(context?: BuildContext$, predicate?: any): MXDartClass;
    static removeRoute(context?: BuildContext$, route?: Route): MXDartClass;
    static removeRouteBelow(context?: BuildContext$, anchorRoute?: Route): MXDartClass;
    static push(context: any, materialPageRoute: any): void;
    static of(context: any, opt: any): NavigatorState;
    static pushNamed(context: any, routeName: any, namedParameters?: {
        mxArguments?: any;
    }): void;
}
export { Navigator };
declare enum _RouteLifecycle {
    staging = "{ \"_name\": \"_RouteLifecycle.staging\", \"index\": 0 }",
    add = "{ \"_name\": \"_RouteLifecycle.add\", \"index\": 1 }",
    adding = "{ \"_name\": \"_RouteLifecycle.adding\", \"index\": 2 }",
    push = "{ \"_name\": \"_RouteLifecycle.push\", \"index\": 3 }",
    pushReplace = "{ \"_name\": \"_RouteLifecycle.pushReplace\", \"index\": 4 }",
    pushing = "{ \"_name\": \"_RouteLifecycle.pushing\", \"index\": 5 }",
    replace = "{ \"_name\": \"_RouteLifecycle.replace\", \"index\": 6 }",
    idle = "{ \"_name\": \"_RouteLifecycle.idle\", \"index\": 7 }",
    pop = "{ \"_name\": \"_RouteLifecycle.pop\", \"index\": 8 }",
    remove = "{ \"_name\": \"_RouteLifecycle.remove\", \"index\": 9 }",
    popping = "{ \"_name\": \"_RouteLifecycle.popping\", \"index\": 10 }",
    removing = "{ \"_name\": \"_RouteLifecycle.removing\", \"index\": 11 }",
    dispose = "{ \"_name\": \"_RouteLifecycle.dispose\", \"index\": 12 }",
    disposed = "{ \"_name\": \"_RouteLifecycle.disposed\", \"index\": 13 }"
}
export { _RouteLifecycle };
declare class _NotAnnounced extends Route {
}
export { _NotAnnounced };
declare class _RouteEntry extends RouteTransitionRecord {
    route: Route;
    currentState: _RouteLifecycle;
    lastAnnouncedPreviousRoute: Route;
    lastAnnouncedPoppedNextRoute: Route;
    lastAnnouncedNextRoute: Route;
    doingPop: boolean;
    reportRemovalToObserver: boolean;
    isWaitingForExitingDecision: boolean;
    constructor(route?: Route, namedParameters?: {
        initialState?: _RouteLifecycle;
    });
}
export { _RouteEntry };
declare abstract class _NavigatorObservation extends MXDartClass {
    primaryRoute: Route;
    secondaryRoute: Route;
}
export { _NavigatorObservation };
declare class _NavigatorPushObservation extends _NavigatorObservation {
    constructor(primaryRoute?: Route, secondaryRoute?: Route);
}
export { _NavigatorPushObservation };
declare class _NavigatorPopObservation extends _NavigatorObservation {
    constructor(primaryRoute?: Route, secondaryRoute?: Route);
}
export { _NavigatorPopObservation };
declare class _NavigatorRemoveObservation extends _NavigatorObservation {
    constructor(primaryRoute?: Route, secondaryRoute?: Route);
}
export { _NavigatorRemoveObservation };
declare class _NavigatorReplaceObservation extends _NavigatorObservation {
    constructor(primaryRoute?: Route, secondaryRoute?: Route);
}
export { _NavigatorReplaceObservation };
declare class NavigatorState extends MXDartClass {
    context: any;
    constructor(context: any);
    push(T: any, materialPageRoute: any): void;
    pop(T: any): void;
    pushNamed(T: any, routeName: any, namedParameters?: {
        mxArguments?: any;
    }): void;
}
export { NavigatorState };
