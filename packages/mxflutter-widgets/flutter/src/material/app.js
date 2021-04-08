"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._MaterialAppState = exports._MaterialScrollBehavior = exports.MaterialApp = exports.ThemeMode = void 0;
const scroll_configuration_1 = require("../widgets/scroll-configuration");
const framework_1 = require("../widgets/framework");
var ThemeMode;
(function (ThemeMode) {
    ThemeMode["system"] = "{ \"_name\": \"ThemeMode.system\", \"index\": 0 }";
    ThemeMode["light"] = "{ \"_name\": \"ThemeMode.light\", \"index\": 1 }";
    ThemeMode["dark"] = "{ \"_name\": \"ThemeMode.dark\", \"index\": 2 }";
})(ThemeMode || (ThemeMode = {}));
exports.ThemeMode = ThemeMode;
;
class MaterialApp extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
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
        this.highContrastTheme = namedParameters.highContrastTheme;
        this.highContrastDarkTheme = namedParameters.highContrastDarkTheme;
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
    static router(namedParameters = {}) {
        var jsObj = new MaterialApp();
        jsObj.key = namedParameters.key;
        jsObj.routeInformationProvider = namedParameters.routeInformationProvider;
        jsObj.routeInformationParser = namedParameters.routeInformationParser;
        jsObj.routerDelegate = namedParameters.routerDelegate;
        jsObj.backButtonDispatcher = namedParameters.backButtonDispatcher;
        jsObj.builder = namedParameters.builder;
        jsObj.title = namedParameters.title;
        jsObj.onGenerateTitle = namedParameters.onGenerateTitle;
        jsObj.color = namedParameters.color;
        jsObj.theme = namedParameters.theme;
        jsObj.darkTheme = namedParameters.darkTheme;
        jsObj.highContrastTheme = namedParameters.highContrastTheme;
        jsObj.highContrastDarkTheme = namedParameters.highContrastDarkTheme;
        jsObj.themeMode = namedParameters.themeMode;
        jsObj.locale = namedParameters.locale;
        jsObj.localizationsDelegates = namedParameters.localizationsDelegates;
        jsObj.localeListResolutionCallback = namedParameters.localeListResolutionCallback;
        jsObj.localeResolutionCallback = namedParameters.localeResolutionCallback;
        jsObj.supportedLocales = namedParameters.supportedLocales;
        jsObj.debugShowMaterialGrid = namedParameters.debugShowMaterialGrid;
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
exports.MaterialApp = MaterialApp;
class _MaterialScrollBehavior extends scroll_configuration_1.ScrollBehavior {
}
exports._MaterialScrollBehavior = _MaterialScrollBehavior;
class _MaterialAppState extends framework_1.State {
}
exports._MaterialAppState = _MaterialAppState;
