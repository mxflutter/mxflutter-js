//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { StatefulWidget$, State$ } from './framework';
class WidgetsApp extends StatefulWidget$ {
    constructor(namedParameters = {}) {
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
}
export { WidgetsApp };
class _WidgetsAppState extends State$ {
}
export { _WidgetsAppState };
class _MediaQueryFromWindow extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.className = '_MediaQueryFromWindow';
    }
}
export { _MediaQueryFromWindow };
class _MediaQueryFromWindowsState extends State$ {
}
export { _MediaQueryFromWindowsState };
