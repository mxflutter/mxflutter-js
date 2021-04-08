// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Key } from '../foundation/key';
import { Color, Locale } from '../../../mx-dart-sdk';
import { TextStyle } from '../painting/text-style';
import { RouteInformationParser, RouterDelegate, BackButtonDispatcher, RouteInformationProvider, PlatformRouteInformationProvider } from './router';
import { StatefulWidget, GlobalKey, Widget, State } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class WidgetsApp extends StatefulWidget {
  navigatorKey: GlobalKey;
  onGenerateRoute: any;
  onGenerateInitialRoutes: any;
  pageRouteBuilder: any;
  routeInformationParser: RouteInformationParser;
  routerDelegate: RouterDelegate;
  backButtonDispatcher: BackButtonDispatcher;
  routeInformationProvider: RouteInformationProvider;
  home: MXWidget;
  routes: Map<any, any>;
  onUnknownRoute: any;
  initialRoute: string;
  navigatorObservers: Array<any>;
  builder: any;
  title: string;
  onGenerateTitle: any;
  textStyle: TextStyle;
  color: Color;
  locale: Locale;
  localizationsDelegates: any;
  localeListResolutionCallback: any;
  localeResolutionCallback: any;
  supportedLocales: any;
  showPerformanceOverlay: boolean;
  checkerboardRasterCacheImages: boolean;
  checkerboardOffscreenLayers: boolean;
  showSemanticsDebugger: boolean;
  debugShowWidgetInspector: boolean;
  inspectorSelectButtonBuilder: any;
  debugShowCheckedModeBanner: boolean;
  shortcuts: Map<any, any>;
  actions: Map<any, any>;
  public constructor(namedParameters: {key?: Key, navigatorKey?: GlobalKey, onGenerateRoute?: any, onGenerateInitialRoutes?: any, onUnknownRoute?: any, navigatorObservers?: Array<any>, initialRoute?: string, pageRouteBuilder?: any, home?: MXWidget, routes?: Map<any, any>, builder?: any, title?: string, onGenerateTitle?: any, textStyle?: TextStyle, color?: Color, locale?: Locale, localizationsDelegates?: any, localeListResolutionCallback?: any, localeResolutionCallback?: any, supportedLocales?: any, showPerformanceOverlay?: boolean, checkerboardRasterCacheImages?: boolean, checkerboardOffscreenLayers?: boolean, showSemanticsDebugger?: boolean, debugShowWidgetInspector?: boolean, debugShowCheckedModeBanner?: boolean, inspectorSelectButtonBuilder?: any, shortcuts?: Map<any, any>, actions?: Map<any, any>} = {}) {
    super();
    this.key = namedParameters.key;
    this.navigatorKey = namedParameters.navigatorKey;
    this.onGenerateRoute = namedParameters.onGenerateRoute;
    this.onGenerateInitialRoutes = namedParameters.onGenerateInitialRoutes;
    this.onUnknownRoute = namedParameters.onUnknownRoute;
    this.navigatorObservers = namedParameters.navigatorObservers;
    this.initialRoute = namedParameters.initialRoute;
    this.pageRouteBuilder = namedParameters.pageRouteBuilder;
    this.home = namedParameters.home;
    this.routes = namedParameters.routes;
    this.builder = namedParameters.builder;
    this.title = namedParameters.title;
    this.onGenerateTitle = namedParameters.onGenerateTitle;
    this.textStyle = namedParameters.textStyle;
    this.color = namedParameters.color;
    this.locale = namedParameters.locale;
    this.localizationsDelegates = namedParameters.localizationsDelegates;
    this.localeListResolutionCallback = namedParameters.localeListResolutionCallback;
    this.localeResolutionCallback = namedParameters.localeResolutionCallback;
    this.supportedLocales = namedParameters.supportedLocales;
    this.showPerformanceOverlay = namedParameters.showPerformanceOverlay;
    this.checkerboardRasterCacheImages = namedParameters.checkerboardRasterCacheImages;
    this.checkerboardOffscreenLayers = namedParameters.checkerboardOffscreenLayers;
    this.showSemanticsDebugger = namedParameters.showSemanticsDebugger;
    this.debugShowWidgetInspector = namedParameters.debugShowWidgetInspector;
    this.debugShowCheckedModeBanner = namedParameters.debugShowCheckedModeBanner;
    this.inspectorSelectButtonBuilder = namedParameters.inspectorSelectButtonBuilder;
    this.shortcuts = namedParameters.shortcuts;
    this.actions = namedParameters.actions;
    this.className = 'WidgetsApp';
  }
  static router(namedParameters: {key?: Key, routeInformationProvider?: RouteInformationProvider, routeInformationParser?: RouteInformationParser, routerDelegate?: RouterDelegate, backButtonDispatcher?: BackButtonDispatcher, builder?: any, title?: string, onGenerateTitle?: any, textStyle?: TextStyle, color?: Color, locale?: Locale, localizationsDelegates?: any, localeListResolutionCallback?: any, localeResolutionCallback?: any, supportedLocales?: any, showPerformanceOverlay?: boolean, checkerboardRasterCacheImages?: boolean, checkerboardOffscreenLayers?: boolean, showSemanticsDebugger?: boolean, debugShowWidgetInspector?: boolean, debugShowCheckedModeBanner?: boolean, inspectorSelectButtonBuilder?: any, shortcuts?: Map<any, any>, actions?: Map<any, any>} = {}) {
    var jsObj = new WidgetsApp();
    jsObj.key = namedParameters.key;
    jsObj.routeInformationProvider = namedParameters.routeInformationProvider;
    jsObj.routeInformationParser = namedParameters.routeInformationParser;
    jsObj.routerDelegate = namedParameters.routerDelegate;
    jsObj.backButtonDispatcher = namedParameters.backButtonDispatcher;
    jsObj.builder = namedParameters.builder;
    jsObj.title = namedParameters.title;
    jsObj.onGenerateTitle = namedParameters.onGenerateTitle;
    jsObj.textStyle = namedParameters.textStyle;
    jsObj.color = namedParameters.color;
    jsObj.locale = namedParameters.locale;
    jsObj.localizationsDelegates = namedParameters.localizationsDelegates;
    jsObj.localeListResolutionCallback = namedParameters.localeListResolutionCallback;
    jsObj.localeResolutionCallback = namedParameters.localeResolutionCallback;
    jsObj.supportedLocales = namedParameters.supportedLocales;
    jsObj.showPerformanceOverlay = namedParameters.showPerformanceOverlay;
    jsObj.checkerboardRasterCacheImages = namedParameters.checkerboardRasterCacheImages;
    jsObj.checkerboardOffscreenLayers = namedParameters.checkerboardOffscreenLayers;
    jsObj.showSemanticsDebugger = namedParameters.showSemanticsDebugger;
    jsObj.debugShowWidgetInspector = namedParameters.debugShowWidgetInspector;
    jsObj.debugShowCheckedModeBanner = namedParameters.debugShowCheckedModeBanner;
    jsObj.inspectorSelectButtonBuilder = namedParameters.inspectorSelectButtonBuilder;
    jsObj.shortcuts = namedParameters.shortcuts;
    jsObj.actions = namedParameters.actions;
    jsObj['constructorName'] = 'router';
    return jsObj;
  }
}
export { WidgetsApp };
class _WidgetsAppState extends State {
  defaultRouteInformationProvider: PlatformRouteInformationProvider;
  navigator: GlobalKey;
  locale: Locale;
}
export { _WidgetsAppState };
class _MediaQueryFromWindow extends StatefulWidget {
  child: MXWidget;
  public constructor(namedParameters: {key?: Key, child?: MXWidget} = {}) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.className = '_MediaQueryFromWindow';
  }
}
export { _MediaQueryFromWindow };
class _MediaQueryFromWindowsState extends State {}
export { _MediaQueryFromWindowsState };
