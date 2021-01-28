//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { ScrollBehavior } from '../widgets/scroll-configuration';
import { StatefulWidget$, State$ } from '../widgets/framework';
class CupertinoApp extends StatefulWidget$ {
    constructor(namedParameters = {}) {
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
class _AlwaysCupertinoScrollBehavior extends ScrollBehavior {
}
export { _AlwaysCupertinoScrollBehavior };
class _CupertinoAppState extends State$ {
}
export { _CupertinoAppState };
