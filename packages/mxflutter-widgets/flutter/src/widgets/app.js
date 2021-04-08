"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._MediaQueryFromWindowsState = exports._MediaQueryFromWindow = exports._WidgetsAppState = exports.WidgetsApp = void 0;
const framework_1 = require("./framework");
class WidgetsApp extends framework_1.StatefulWidget {
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
    static router(namedParameters = {}) {
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
exports.WidgetsApp = WidgetsApp;
class _WidgetsAppState extends framework_1.State {
}
exports._WidgetsAppState = _WidgetsAppState;
class _MediaQueryFromWindow extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.className = '_MediaQueryFromWindow';
    }
}
exports._MediaQueryFromWindow = _MediaQueryFromWindow;
class _MediaQueryFromWindowsState extends framework_1.State {
}
exports._MediaQueryFromWindowsState = _MediaQueryFromWindowsState;
