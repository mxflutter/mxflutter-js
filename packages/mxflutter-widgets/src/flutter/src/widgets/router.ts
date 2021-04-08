// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { ValueListenable, Listenable } from '../foundation/change-notifier';
import { Key } from '../foundation/key';
import { StatefulWidget, BuildContext, State, InheritedWidget, Widget } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class RouteInformation extends MXDartClass {
  location: string;
  state: any;
  public constructor(namedParameters: {location?: string, state?: any} = {}) {
    super();
    this.location = namedParameters.location;
    this.state = namedParameters.state;
    this.className = 'RouteInformation';
  }
}
export { RouteInformation };
class Router extends StatefulWidget {
  routeInformationProvider: RouteInformationProvider;
  routeInformationParser: RouteInformationParser;
  routerDelegate: RouterDelegate;
  backButtonDispatcher: BackButtonDispatcher;
  public constructor(namedParameters: {key?: Key, routeInformationProvider?: RouteInformationProvider, routeInformationParser?: RouteInformationParser, routerDelegate?: RouterDelegate, backButtonDispatcher?: BackButtonDispatcher} = {}) {
    super();
    this.key = namedParameters.key;
    this.routeInformationProvider = namedParameters.routeInformationProvider;
    this.routeInformationParser = namedParameters.routeInformationParser;
    this.routerDelegate = namedParameters.routerDelegate;
    this.backButtonDispatcher = namedParameters.backButtonDispatcher;
    this.className = 'Router';
  }
  static navigate(context?: BuildContext, callback?: any) {
    var jsObj = new MXDartClass();
    jsObj['context'] = context;
    jsObj['callback'] = callback;
    jsObj.className = 'Router';
    jsObj['constructorName'] = 'navigate';
    return jsObj;
  }
  static neglect(context?: BuildContext, callback?: any) {
    var jsObj = new MXDartClass();
    jsObj['context'] = context;
    jsObj['callback'] = callback;
    jsObj.className = 'Router';
    jsObj['constructorName'] = 'neglect';
    return jsObj;
  }
}
export { Router };
enum _IntentionToReportRouteInformation {
  none = '{ "_name": "_IntentionToReportRouteInformation.none", "index": 0 }',
  maybe = '{ "_name": "_IntentionToReportRouteInformation.maybe", "index": 1 }',
  must = '{ "_name": "_IntentionToReportRouteInformation.must", "index": 2 }',
  ignore = '{ "_name": "_IntentionToReportRouteInformation.ignore", "index": 3 }',
};

export { _IntentionToReportRouteInformation };
class _RouterState extends State {
  currentRouteInformationParserTransaction: any;
  currentRouterDelegateTransaction: any;
  currentIntentionToReport: _IntentionToReportRouteInformation;
  routeInformationReportingTaskScheduled: boolean;
  lastSeenLocation: string;
}
export { _RouterState };
class _RouterScope extends InheritedWidget {
  routeInformationProvider: ValueListenable;
  backButtonDispatcher: BackButtonDispatcher;
  routeInformationParser: RouteInformationParser;
  routerDelegate: RouterDelegate;
  routerState: _RouterState;
  public constructor(namedParameters: {key?: Key, routeInformationProvider?: ValueListenable, backButtonDispatcher?: BackButtonDispatcher, routeInformationParser?: RouteInformationParser, routerDelegate?: RouterDelegate, routerState?: _RouterState, child?: MXWidget} = {}) {
    super();
    this.key = namedParameters.key;
    this.routeInformationProvider = namedParameters.routeInformationProvider;
    this.backButtonDispatcher = namedParameters.backButtonDispatcher;
    this.routeInformationParser = namedParameters.routeInformationParser;
    this.routerDelegate = namedParameters.routerDelegate;
    this.routerState = namedParameters.routerState;
    this.child = namedParameters.child;
    this.className = '_RouterScope';
  }
}
export { _RouterScope };
class _CallbackHookProvider extends MXDartClass {
  callbacks: any;
}
export { _CallbackHookProvider };
abstract class BackButtonDispatcher extends _CallbackHookProvider {
  children: any;
}
export { BackButtonDispatcher };
class RootBackButtonDispatcher extends BackButtonDispatcher {}
export { RootBackButtonDispatcher };
class ChildBackButtonDispatcher extends BackButtonDispatcher {
  parent: BackButtonDispatcher;
  public constructor(parent?: BackButtonDispatcher) {
    super();
    this.parent = parent;
    this.className = 'ChildBackButtonDispatcher';
  }
}
export { ChildBackButtonDispatcher };
abstract class RouteInformationParser extends MXDartClass {}
export { RouteInformationParser };
abstract class RouterDelegate extends Listenable {}
export { RouterDelegate };
abstract class RouteInformationProvider extends ValueListenable {}
export { RouteInformationProvider };
class PlatformRouteInformationProvider extends RouteInformationProvider {
  value: RouteInformation;
  public constructor(namedParameters: {initialRouteInformation?: RouteInformation} = {}) {
    super();
    this['initialRouteInformation'] = namedParameters.initialRouteInformation;
    this.className = 'PlatformRouteInformationProvider';
  }
}
export { PlatformRouteInformationProvider };
abstract class PopNavigatorRouterDelegateMixin extends RouterDelegate {}
export { PopNavigatorRouterDelegateMixin };
