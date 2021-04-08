"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopNavigatorRouterDelegateMixin = exports.PlatformRouteInformationProvider = exports.RouteInformationProvider = exports.RouterDelegate = exports.RouteInformationParser = exports.ChildBackButtonDispatcher = exports.RootBackButtonDispatcher = exports.BackButtonDispatcher = exports._CallbackHookProvider = exports._RouterScope = exports._RouterState = exports._IntentionToReportRouteInformation = exports.Router = exports.RouteInformation = void 0;
const change_notifier_1 = require("../foundation/change-notifier");
const framework_1 = require("./framework");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class RouteInformation extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.location = namedParameters.location;
        this.state = namedParameters.state;
        this.className = 'RouteInformation';
    }
}
exports.RouteInformation = RouteInformation;
class Router extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.routeInformationProvider = namedParameters.routeInformationProvider;
        this.routeInformationParser = namedParameters.routeInformationParser;
        this.routerDelegate = namedParameters.routerDelegate;
        this.backButtonDispatcher = namedParameters.backButtonDispatcher;
        this.className = 'Router';
    }
    static navigate(context, callback) {
        var jsObj = new mxflutter_base_1.MXDartClass();
        jsObj['context'] = context;
        jsObj['callback'] = callback;
        jsObj.className = 'Router';
        jsObj['constructorName'] = 'navigate';
        return jsObj;
    }
    static neglect(context, callback) {
        var jsObj = new mxflutter_base_1.MXDartClass();
        jsObj['context'] = context;
        jsObj['callback'] = callback;
        jsObj.className = 'Router';
        jsObj['constructorName'] = 'neglect';
        return jsObj;
    }
}
exports.Router = Router;
var _IntentionToReportRouteInformation;
(function (_IntentionToReportRouteInformation) {
    _IntentionToReportRouteInformation["none"] = "{ \"_name\": \"_IntentionToReportRouteInformation.none\", \"index\": 0 }";
    _IntentionToReportRouteInformation["maybe"] = "{ \"_name\": \"_IntentionToReportRouteInformation.maybe\", \"index\": 1 }";
    _IntentionToReportRouteInformation["must"] = "{ \"_name\": \"_IntentionToReportRouteInformation.must\", \"index\": 2 }";
    _IntentionToReportRouteInformation["ignore"] = "{ \"_name\": \"_IntentionToReportRouteInformation.ignore\", \"index\": 3 }";
})(_IntentionToReportRouteInformation || (_IntentionToReportRouteInformation = {}));
exports._IntentionToReportRouteInformation = _IntentionToReportRouteInformation;
;
class _RouterState extends framework_1.State {
}
exports._RouterState = _RouterState;
class _RouterScope extends framework_1.InheritedWidget {
    constructor(namedParameters = {}) {
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
exports._RouterScope = _RouterScope;
class _CallbackHookProvider extends mxflutter_base_1.MXDartClass {
}
exports._CallbackHookProvider = _CallbackHookProvider;
class BackButtonDispatcher extends _CallbackHookProvider {
}
exports.BackButtonDispatcher = BackButtonDispatcher;
class RootBackButtonDispatcher extends BackButtonDispatcher {
}
exports.RootBackButtonDispatcher = RootBackButtonDispatcher;
class ChildBackButtonDispatcher extends BackButtonDispatcher {
    constructor(parent) {
        super();
        this.parent = parent;
        this.className = 'ChildBackButtonDispatcher';
    }
}
exports.ChildBackButtonDispatcher = ChildBackButtonDispatcher;
class RouteInformationParser extends mxflutter_base_1.MXDartClass {
}
exports.RouteInformationParser = RouteInformationParser;
class RouterDelegate extends change_notifier_1.Listenable {
}
exports.RouterDelegate = RouterDelegate;
class RouteInformationProvider extends change_notifier_1.ValueListenable {
}
exports.RouteInformationProvider = RouteInformationProvider;
class PlatformRouteInformationProvider extends RouteInformationProvider {
    constructor(namedParameters = {}) {
        super();
        this['initialRouteInformation'] = namedParameters.initialRouteInformation;
        this.className = 'PlatformRouteInformationProvider';
    }
}
exports.PlatformRouteInformationProvider = PlatformRouteInformationProvider;
class PopNavigatorRouterDelegateMixin extends RouterDelegate {
}
exports.PopNavigatorRouterDelegateMixin = PopNavigatorRouterDelegateMixin;
