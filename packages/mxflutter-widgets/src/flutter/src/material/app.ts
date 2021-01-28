//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { RouteSettings } from '../widgets/navigator';
import { HeroController } from '../widgets/heroes';
import { AxisDirection } from '../painting/basic-types';
import { ScrollBehavior } from '../widgets/scroll-configuration';
import { Key } from '../foundation/key';
import { Color, Locale, Rect } from '../../../mx-dart-sdk';
import { ThemeData } from './theme-data';
import { StatefulWidget$, GlobalKey, Widget, BuildContext$, State$ } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum ThemeMode {
  system = '{ "_name": "ThemeMode.system", "index": 0 }',
  light = '{ "_name": "ThemeMode.light", "index": 1 }',
  dark = '{ "_name": "ThemeMode.dark", "index": 2 }',
}

export { ThemeMode };
class MaterialApp extends StatefulWidget$ {
  navigatorKey: GlobalKey;
  home: MXWidget;
  routes: Map<any, any>;
  initialRoute: string;
  onGenerateRoute: any;
  onGenerateInitialRoutes: any;
  onUnknownRoute: any;
  navigatorObservers: Array<any>;
  builder: any;
  title: string;
  onGenerateTitle: any;
  theme: ThemeData;
  darkTheme: ThemeData;
  themeMode: ThemeMode;
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
  debugShowMaterialGrid: boolean;
  public constructor(
    namedParameters: {
      key?: Key;
      navigatorKey?: GlobalKey;
      home?: MXWidget;
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
      theme?: ThemeData;
      darkTheme?: ThemeData;
      themeMode?: ThemeMode;
      locale?: Locale;
      localizationsDelegates?: any;
      localeListResolutionCallback?: any;
      localeResolutionCallback?: any;
      supportedLocales?: any;
      debugShowMaterialGrid?: boolean;
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
    this.theme = namedParameters.theme;
    this.darkTheme = namedParameters.darkTheme;
    this.themeMode = namedParameters.themeMode;
    this.locale = namedParameters.locale;
    this.localizationsDelegates = namedParameters.localizationsDelegates;
    this.localeListResolutionCallback = namedParameters.localeListResolutionCallback;
    this.localeResolutionCallback = namedParameters.localeResolutionCallback;
    this.supportedLocales = namedParameters.supportedLocales;
    this.debugShowMaterialGrid = namedParameters.debugShowMaterialGrid;
    this.showPerformanceOverlay = namedParameters.showPerformanceOverlay;
    this.checkerboardRasterCacheImages = namedParameters.checkerboardRasterCacheImages;
    this.checkerboardOffscreenLayers = namedParameters.checkerboardOffscreenLayers;
    this.showSemanticsDebugger = namedParameters.showSemanticsDebugger;
    this.debugShowCheckedModeBanner = namedParameters.debugShowCheckedModeBanner;
    this.shortcuts = namedParameters.shortcuts;
    this.actions = namedParameters.actions;
    this.className = 'MaterialApp';
  }
}
export { MaterialApp };
class _MaterialScrollBehavior extends ScrollBehavior {}
export { _MaterialScrollBehavior };
class _MaterialAppState extends State$ {
  heroController: HeroController;
}
export { _MaterialAppState };
