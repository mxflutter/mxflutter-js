import { ProxyAnimation } from '../animation/animations';
import { Animation } from '../animation/animation';
import { Tween } from '../animation/tween';
import { PageRoute } from './pages';
import { OverlayState, OverlayEntry } from './overlay';
import { Size, Rect } from '../../../mx-dart-sdk';
import { NavigatorObserver } from './navigator';
import { Key } from '../foundation/key';
import { StatefulWidget$, State$, GlobalKey } from './framework';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare enum HeroFlightDirection {
    push = "{ \"_name\": \"HeroFlightDirection.push\", \"index\": 0 }",
    pop = "{ \"_name\": \"HeroFlightDirection.pop\", \"index\": 1 }"
}
export { HeroFlightDirection };
declare class Hero extends StatefulWidget$ {
    tag: any;
    createRectTween: any;
    child: MXWidget;
    flightShuttleBuilder: any;
    placeholderBuilder: any;
    transitionOnUserGestures: boolean;
    constructor(namedParameters?: {
        key?: Key;
        tag?: any;
        createRectTween?: any;
        flightShuttleBuilder?: any;
        placeholderBuilder?: any;
        transitionOnUserGestures?: boolean;
        child?: MXWidget;
    });
}
export { Hero };
declare class _HeroState extends State$ {
    key: GlobalKey;
    placeholderSize: Size;
    shouldIncludeChild: boolean;
}
export { _HeroState };
declare class _HeroFlightManifest extends MXDartClass {
    type: HeroFlightDirection;
    overlay: OverlayState;
    navigatorRect: Rect;
    fromRoute: PageRoute;
    toRoute: PageRoute;
    fromHero: _HeroState;
    toHero: _HeroState;
    createRectTween: any;
    shuttleBuilder: any;
    isUserGestureTransition: boolean;
    isDiverted: boolean;
    constructor(namedParameters?: {
        type?: HeroFlightDirection;
        overlay?: OverlayState;
        navigatorRect?: Rect;
        fromRoute?: PageRoute;
        toRoute?: PageRoute;
        fromHero?: _HeroState;
        toHero?: _HeroState;
        createRectTween?: any;
        shuttleBuilder?: any;
        isUserGestureTransition?: boolean;
        isDiverted?: boolean;
    });
}
export { _HeroFlightManifest };
declare class _HeroFlight extends MXDartClass {
    onFlightEnded: any;
    heroRectTween: Tween;
    shuttle: MXWidget;
    heroOpacity: Animation;
    proxyAnimation: ProxyAnimation;
    manifest: _HeroFlightManifest;
    overlayEntry: OverlayEntry;
    aborted: boolean;
    constructor(onFlightEnded?: any);
}
export { _HeroFlight };
declare class HeroController extends NavigatorObserver {
    createRectTween: any;
    flights: Map<any, any>;
    constructor(namedParameters?: {
        createRectTween?: any;
    });
}
export { HeroController };
