import { ValueListenable, Listenable } from '../foundation/change-notifier';
import { Key } from '../foundation/key';
import { StatefulWidget, BuildContext, State, InheritedWidget } from './framework';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare class RouteInformation extends MXDartClass {
    location: string;
    state: any;
    constructor(namedParameters?: {
        location?: string;
        state?: any;
    });
}
export { RouteInformation };
declare class Router extends StatefulWidget {
    routeInformationProvider: RouteInformationProvider;
    routeInformationParser: RouteInformationParser;
    routerDelegate: RouterDelegate;
    backButtonDispatcher: BackButtonDispatcher;
    constructor(namedParameters?: {
        key?: Key;
        routeInformationProvider?: RouteInformationProvider;
        routeInformationParser?: RouteInformationParser;
        routerDelegate?: RouterDelegate;
        backButtonDispatcher?: BackButtonDispatcher;
    });
    static navigate(context?: BuildContext, callback?: any): MXDartClass;
    static neglect(context?: BuildContext, callback?: any): MXDartClass;
}
export { Router };
declare enum _IntentionToReportRouteInformation {
    none = "{ \"_name\": \"_IntentionToReportRouteInformation.none\", \"index\": 0 }",
    maybe = "{ \"_name\": \"_IntentionToReportRouteInformation.maybe\", \"index\": 1 }",
    must = "{ \"_name\": \"_IntentionToReportRouteInformation.must\", \"index\": 2 }",
    ignore = "{ \"_name\": \"_IntentionToReportRouteInformation.ignore\", \"index\": 3 }"
}
export { _IntentionToReportRouteInformation };
declare class _RouterState extends State {
    currentRouteInformationParserTransaction: any;
    currentRouterDelegateTransaction: any;
    currentIntentionToReport: _IntentionToReportRouteInformation;
    routeInformationReportingTaskScheduled: boolean;
    lastSeenLocation: string;
}
export { _RouterState };
declare class _RouterScope extends InheritedWidget {
    routeInformationProvider: ValueListenable;
    backButtonDispatcher: BackButtonDispatcher;
    routeInformationParser: RouteInformationParser;
    routerDelegate: RouterDelegate;
    routerState: _RouterState;
    constructor(namedParameters?: {
        key?: Key;
        routeInformationProvider?: ValueListenable;
        backButtonDispatcher?: BackButtonDispatcher;
        routeInformationParser?: RouteInformationParser;
        routerDelegate?: RouterDelegate;
        routerState?: _RouterState;
        child?: MXWidget;
    });
}
export { _RouterScope };
declare class _CallbackHookProvider extends MXDartClass {
    callbacks: any;
}
export { _CallbackHookProvider };
declare abstract class BackButtonDispatcher extends _CallbackHookProvider {
    children: any;
}
export { BackButtonDispatcher };
declare class RootBackButtonDispatcher extends BackButtonDispatcher {
}
export { RootBackButtonDispatcher };
declare class ChildBackButtonDispatcher extends BackButtonDispatcher {
    parent: BackButtonDispatcher;
    constructor(parent?: BackButtonDispatcher);
}
export { ChildBackButtonDispatcher };
declare abstract class RouteInformationParser extends MXDartClass {
}
export { RouteInformationParser };
declare abstract class RouterDelegate extends Listenable {
}
export { RouterDelegate };
declare abstract class RouteInformationProvider extends ValueListenable {
}
export { RouteInformationProvider };
declare class PlatformRouteInformationProvider extends RouteInformationProvider {
    value: RouteInformation;
    constructor(namedParameters?: {
        initialRouteInformation?: RouteInformation;
    });
}
export { PlatformRouteInformationProvider };
declare abstract class PopNavigatorRouterDelegateMixin extends RouterDelegate {
}
export { PopNavigatorRouterDelegateMixin };
