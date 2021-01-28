//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { PointerDownEvent, PointerEvent } from '../gestures/events';
import { ValueNotifier } from '../foundation/change-notifier';
import { FocusScopeNode } from './focus-manager';
import { HeroController } from './heroes';
import { BuildContext$, InheritedWidget, Widget, StatefulWidget$, State$, GlobalKey } from './framework';
import { LocalKey, Key } from '../foundation/key';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum RoutePopDisposition {
  pop = '{ "_name": "RoutePopDisposition.pop", "index": 0 }',
  doNotPop = '{ "_name": "RoutePopDisposition.doNotPop", "index": 1 }',
  bubble = '{ "_name": "RoutePopDisposition.bubble", "index": 2 }',
}

export { RoutePopDisposition };
abstract class Route extends MXMirrorWidget {
  navigator: NavigatorState;
  settings: RouteSettings;
  popCompleter: any;
}
export { Route };
class RouteSettings extends MXDartClass {
  name: string;
  __mx_arguments: any;
  public constructor(namedParameters: { name?: string; __mx_arguments?: any } = {}) {
    super();
    this.name = namedParameters.name;
    this.__mx_arguments = namedParameters.__mx_arguments;
    this.className = 'RouteSettings';
  }
}
export { RouteSettings };
abstract class Page extends RouteSettings {
  key: LocalKey;
}
export { Page };
class CustomBuilderPage extends Page {
  routeBuilder: any;
  public constructor(
    namedParameters: { key?: LocalKey; routeBuilder?: any; name?: string; __mx_arguments?: any } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.routeBuilder = namedParameters.routeBuilder;
    this.name = namedParameters.name;
    this.__mx_arguments = namedParameters.__mx_arguments;
    this.className = 'CustomBuilderPage';
  }
}
export { CustomBuilderPage };
class NavigatorObserver extends MXDartClass {
  navigator: NavigatorState;
}
export { NavigatorObserver };
class HeroControllerScope extends InheritedWidget {
  controller: HeroController;
  public constructor(namedParameters: { key?: Key; controller?: HeroController; child?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.controller = namedParameters.controller;
    this.child = namedParameters.child;
    this.className = 'HeroControllerScope';
  }
}
export { HeroControllerScope };
abstract class RouteTransitionRecord extends MXDartClass {}
export { RouteTransitionRecord };
abstract class TransitionDelegate extends MXDartClass {}
export { TransitionDelegate };
class DefaultTransitionDelegate extends TransitionDelegate {}
export { DefaultTransitionDelegate };
class Navigator extends StatefulWidget$ {
  pages: Array<any>;
  onPopPage: any;
  transitionDelegate: TransitionDelegate;
  initialRoute: string;
  onGenerateRoute: any;
  onUnknownRoute: any;
  observers: Array<any>;
  onGenerateInitialRoutes: any;
  public constructor(
    namedParameters: {
      key?: Key;
      pages?: Array<any>;
      onPopPage?: any;
      initialRoute?: string;
      onGenerateInitialRoutes?: any;
      onGenerateRoute?: any;
      onUnknownRoute?: any;
      transitionDelegate?: TransitionDelegate;
      observers?: Array<any>;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.pages = namedParameters.pages;
    this.onPopPage = namedParameters.onPopPage;
    this.initialRoute = namedParameters.initialRoute;
    this.onGenerateInitialRoutes = namedParameters.onGenerateInitialRoutes;
    this.onGenerateRoute = namedParameters.onGenerateRoute;
    this.onUnknownRoute = namedParameters.onUnknownRoute;
    this.transitionDelegate = namedParameters.transitionDelegate;
    this.observers = namedParameters.observers;
    this.className = 'Navigator';
  }
  static get defaultRouteName() {
    return '/';
  }
  static replace(context?: BuildContext$, namedParameters: { oldRoute?: Route; newRoute?: Route } = {}) {
    var jsObj = new MXDartClass();
    jsObj['context'] = context;
    jsObj['oldRoute'] = namedParameters.oldRoute;
    jsObj['newRoute'] = namedParameters.newRoute;
    jsObj.className = 'Navigator';
    jsObj['constructorName'] = 'replace';
    return jsObj;
  }
  static replaceRouteBelow(context?: BuildContext$, namedParameters: { anchorRoute?: Route; newRoute?: Route } = {}) {
    var jsObj = new MXDartClass();
    jsObj['context'] = context;
    jsObj['anchorRoute'] = namedParameters.anchorRoute;
    jsObj['newRoute'] = namedParameters.newRoute;
    jsObj.className = 'Navigator';
    jsObj['constructorName'] = 'replaceRouteBelow';
    return jsObj;
  }
  // MX modified begin
  public static pop(context: any) {
    let T = null;
    if (arguments.length === 2) {
      T = arguments[0];
      context = arguments[1];
    }
    const navigatorState = new NavigatorState(context);
    navigatorState.pop(T);
  }
  // MX modified end

  static popUntil(context?: BuildContext$, predicate?: any) {
    var jsObj = new MXDartClass();
    jsObj['context'] = context;
    jsObj['predicate'] = predicate;
    jsObj.className = 'Navigator';
    jsObj['constructorName'] = 'popUntil';
    return jsObj;
  }
  static removeRoute(context?: BuildContext$, route?: Route) {
    var jsObj = new MXDartClass();
    jsObj['context'] = context;
    jsObj['route'] = route;
    jsObj.className = 'Navigator';
    jsObj['constructorName'] = 'removeRoute';
    return jsObj;
  }
  static removeRouteBelow(context?: BuildContext$, anchorRoute?: Route) {
    var jsObj = new MXDartClass();
    jsObj['context'] = context;
    jsObj['anchorRoute'] = anchorRoute;
    jsObj.className = 'Navigator';
    jsObj['constructorName'] = 'removeRouteBelow';
    return jsObj;
  }
  // MX modified begin
  public static push(context: any, materialPageRoute: any) {
    let T = null;
    if (arguments.length === 3) {
      T = arguments[0];
      context = arguments[1];
      materialPageRoute = arguments[2];
    }

    const navigatorState = new NavigatorState(context);
    navigatorState.push(T, materialPageRoute);
  }

  public static of(context: any, opt: any) {
    const navigatorState = new NavigatorState(context);
    return navigatorState;
  }

  public static pushNamed(context: any, routeName: any, namedParameters: { mxArguments?: any } = {}) {
    let T = null;
    if (arguments.length === 4) {
      T = arguments[0];
      context = arguments[1];
      routeName = arguments[2];
      namedParameters.mxArguments = arguments[3];
    }
    const navigatorState = new NavigatorState(context);
    navigatorState.pushNamed(T, routeName, namedParameters);
  }
  // MX modified end
}
export { Navigator };
enum _RouteLifecycle {
  staging = '{ "_name": "_RouteLifecycle.staging", "index": 0 }',
  add = '{ "_name": "_RouteLifecycle.add", "index": 1 }',
  adding = '{ "_name": "_RouteLifecycle.adding", "index": 2 }',
  push = '{ "_name": "_RouteLifecycle.push", "index": 3 }',
  pushReplace = '{ "_name": "_RouteLifecycle.pushReplace", "index": 4 }',
  pushing = '{ "_name": "_RouteLifecycle.pushing", "index": 5 }',
  replace = '{ "_name": "_RouteLifecycle.replace", "index": 6 }',
  idle = '{ "_name": "_RouteLifecycle.idle", "index": 7 }',
  pop = '{ "_name": "_RouteLifecycle.pop", "index": 8 }',
  remove = '{ "_name": "_RouteLifecycle.remove", "index": 9 }',
  popping = '{ "_name": "_RouteLifecycle.popping", "index": 10 }',
  removing = '{ "_name": "_RouteLifecycle.removing", "index": 11 }',
  dispose = '{ "_name": "_RouteLifecycle.dispose", "index": 12 }',
  disposed = '{ "_name": "_RouteLifecycle.disposed", "index": 13 }',
}

export { _RouteLifecycle };
class _NotAnnounced extends Route {}
export { _NotAnnounced };
class _RouteEntry extends RouteTransitionRecord {
  route: Route;
  currentState: _RouteLifecycle;
  lastAnnouncedPreviousRoute: Route;
  lastAnnouncedPoppedNextRoute: Route;
  lastAnnouncedNextRoute: Route;
  doingPop: boolean;
  reportRemovalToObserver: boolean;
  isWaitingForExitingDecision: boolean;
  public constructor(route?: Route, namedParameters: { initialState?: _RouteLifecycle } = {}) {
    super();
    this.route = route;
    this['initialState'] = namedParameters.initialState;
    this.className = '_RouteEntry';
  }
}
export { _RouteEntry };
abstract class _NavigatorObservation extends MXDartClass {
  primaryRoute: Route;
  secondaryRoute: Route;
}
export { _NavigatorObservation };
class _NavigatorPushObservation extends _NavigatorObservation {
  public constructor(primaryRoute?: Route, secondaryRoute?: Route) {
    super();
    this['primaryRoute'] = primaryRoute;
    this['secondaryRoute'] = secondaryRoute;
    this.className = '_NavigatorPushObservation';
  }
}
export { _NavigatorPushObservation };
class _NavigatorPopObservation extends _NavigatorObservation {
  public constructor(primaryRoute?: Route, secondaryRoute?: Route) {
    super();
    this['primaryRoute'] = primaryRoute;
    this['secondaryRoute'] = secondaryRoute;
    this.className = '_NavigatorPopObservation';
  }
}
export { _NavigatorPopObservation };
class _NavigatorRemoveObservation extends _NavigatorObservation {
  public constructor(primaryRoute?: Route, secondaryRoute?: Route) {
    super();
    this['primaryRoute'] = primaryRoute;
    this['secondaryRoute'] = secondaryRoute;
    this.className = '_NavigatorRemoveObservation';
  }
}
export { _NavigatorRemoveObservation };
class _NavigatorReplaceObservation extends _NavigatorObservation {
  public constructor(primaryRoute?: Route, secondaryRoute?: Route) {
    super();
    this['primaryRoute'] = primaryRoute;
    this['secondaryRoute'] = secondaryRoute;
    this.className = '_NavigatorReplaceObservation';
  }
}
export { _NavigatorReplaceObservation };
// MX modified begin
class NavigatorState extends MXDartClass {
  public context: any;
  public constructor(context: any) {
    super();
    this.context = context;
    this.className = 'NavigatorState';
  }

  public push(T: any, materialPageRoute: any) {
    this.context.navigatorPush(materialPageRoute.builder(this.context));
  }
  public pop(T: any) {
    this.context.navigatorPop();
  }
  public pushNamed(T: any, routeName: any, namedParameters: { mxArguments?: any } = {}) {
    this.context.navigatorPushNamed(routeName, namedParameters.mxArguments);
  }
}
// MX modified end

export { NavigatorState };
