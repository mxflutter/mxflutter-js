//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { RouteSettings } from '../widgets/navigator';
import { HeroController } from '../widgets/heroes';
import { AxisDirection } from '../painting/basic-types';
import { ScrollBehavior } from '../widgets/scroll-configuration';
import { Key } from '../foundation/key';
import { Color, Locale } from '../../../mx-dart-sdk';
import { CupertinoThemeData } from './theme';
import { StatefulWidget$, GlobalKey, Widget, BuildContext$, State$ } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class CupertinoApp extends StatefulWidget$ {
  navigatorKey: GlobalKey;
  home: MXWidget;
  theme: CupertinoThemeData;
  routes: Map<any, any>;
  initialRoute: string;
  onGenerateRoute: any;
  onGenerateInitialRoutes: any;
  onUnknownRoute: any;
  navigatorObservers: Array<any>;
  builder: any;
  title: string;
  onGenerateTitle: any;
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
  debugShowCheckedModeBanner: boolean;
  shortcuts: Map<any, any>;
  actions: Map<any, any>;
  public constructor(
    namedParameters: {
      key?: Key;
      navigatorKey?: GlobalKey;
      home?: MXWidget;
      theme?: CupertinoThemeData;
      routes?: Map<any, any>;
      initialRoute?: string;
      onGenerateRoute?: any;
      onGenerateInitialRoutes?: any;
      onUnknownRoute?: any;
      navigatorObservers?: Array<any>;
      builder?: any;
      title?: string;
      onGenerateTitle?: any;
      color?: Color;
      locale?: Locale;
      localizationsDelegates?: any;
      localeListResolutionCallback?: any;
      localeResolutionCallback?: any;
      supportedLocales?: any;
      showPerformanceOverlay?: boolean;
      checkerboardRasterCacheImages?: boolean;
      checkerboardOffscreenLayers?: boolean;
      showSemanticsDebugger?: boolean;
      debugShowCheckedModeBanner?: boolean;
      shortcuts?: Map<any, any>;
      actions?: Map<any, any>;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.navigatorKey = namedParameters.navigatorKey;
    this.home = namedParameters.home;
    this.theme = namedParameters.theme;
    this.routes = namedParameters.routes;
    this.initialRoute = namedParameters.initialRoute;
    this.onGenerateRoute = namedParameters.onGenerateRoute;
    this.onGenerateInitialRoutes = namedParameters.onGenerateInitialRoutes;
    this.onUnknownRoute = namedParameters.onUnknownRoute;
    this.navigatorObservers = namedParameters.navigatorObservers;
    this.builder = namedParameters.builder;
    this.title = namedParameters.title;
    this.onGenerateTitle = namedParameters.onGenerateTitle;
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
    this.debugShowCheckedModeBanner = namedParameters.debugShowCheckedModeBanner;
    this.shortcuts = namedParameters.shortcuts;
    this.actions = namedParameters.actions;
    this.className = 'CupertinoApp';
  }
}
export { CupertinoApp };
class _AlwaysCupertinoScrollBehavior extends ScrollBehavior {}
export { _AlwaysCupertinoScrollBehavior };
class _CupertinoAppState extends State$ {
  heroController: HeroController;
}
export { _CupertinoAppState };
