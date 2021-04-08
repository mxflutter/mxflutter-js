"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._CupertinoAppState = exports._AlwaysCupertinoScrollBehavior = exports.CupertinoApp = void 0;
const scroll_configuration_1 = require("../widgets/scroll-configuration");
const framework_1 = require("../widgets/framework");
class CupertinoApp extends framework_1.StatefulWidget {
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
    static router(namedParameters = {}) {
        var jsObj = new CupertinoApp();
        jsObj.key = namedParameters.key;
        jsObj.routeInformationProvider = namedParameters.routeInformationProvider;
        jsObj.routeInformationParser = namedParameters.routeInformationParser;
        jsObj.routerDelegate = namedParameters.routerDelegate;
        jsObj.backButtonDispatcher = namedParameters.backButtonDispatcher;
        jsObj.theme = namedParameters.theme;
        jsObj.builder = namedParameters.builder;
        jsObj.title = namedParameters.title;
        jsObj.onGenerateTitle = namedParameters.onGenerateTitle;
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
        jsObj.debugShowCheckedModeBanner = namedParameters.debugShowCheckedModeBanner;
        jsObj.shortcuts = namedParameters.shortcuts;
        jsObj.actions = namedParameters.actions;
        jsObj['constructorName'] = 'router';
        return jsObj;
    }
}
exports.CupertinoApp = CupertinoApp;
class _AlwaysCupertinoScrollBehavior extends scroll_configuration_1.ScrollBehavior {
}
exports._AlwaysCupertinoScrollBehavior = _AlwaysCupertinoScrollBehavior;
class _CupertinoAppState extends framework_1.State {
}
exports._CupertinoAppState = _CupertinoAppState;
