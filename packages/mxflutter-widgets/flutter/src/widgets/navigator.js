"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigatorState = exports._NavigatorReplaceObservation = exports._NavigatorRemoveObservation = exports._NavigatorPopObservation = exports._NavigatorPushObservation = exports._NavigatorObservation = exports._RouteEntry = exports._NotAnnounced = exports._RouteLifecycle = exports.Navigator = exports.DefaultTransitionDelegate = exports.TransitionDelegate = exports.RouteTransitionRecord = exports.HeroControllerScope = exports.NavigatorObserver = exports.Page = exports.RouteSettings = exports.Route = exports.RoutePopDisposition = void 0;
const framework_1 = require("./framework");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
var RoutePopDisposition;
(function (RoutePopDisposition) {
    RoutePopDisposition["pop"] = "{ \"_name\": \"RoutePopDisposition.pop\", \"index\": 0 }";
    RoutePopDisposition["doNotPop"] = "{ \"_name\": \"RoutePopDisposition.doNotPop\", \"index\": 1 }";
    RoutePopDisposition["bubble"] = "{ \"_name\": \"RoutePopDisposition.bubble\", \"index\": 2 }";
})(RoutePopDisposition || (RoutePopDisposition = {}));
exports.RoutePopDisposition = RoutePopDisposition;
;
class Route extends mxflutter_base_1.MXMirrorWidget {
}
exports.Route = Route;
class RouteSettings extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.name = namedParameters.name;
        this.mx_arguments = namedParameters.mx_arguments;
        this.className = 'RouteSettings';
    }
}
exports.RouteSettings = RouteSettings;
class Page extends RouteSettings {
}
exports.Page = Page;
class NavigatorObserver extends mxflutter_base_1.MXDartClass {
}
exports.NavigatorObserver = NavigatorObserver;
class HeroControllerScope extends framework_1.InheritedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.controller = namedParameters.controller;
        this.child = namedParameters.child;
        this.className = 'HeroControllerScope';
    }
    static none(namedParameters = {}) {
        var jsObj = new HeroControllerScope();
        jsObj.key = namedParameters.key;
        jsObj.child = namedParameters.child;
        jsObj['constructorName'] = 'none';
        return jsObj;
    }
}
exports.HeroControllerScope = HeroControllerScope;
class RouteTransitionRecord extends mxflutter_base_1.MXDartClass {
}
exports.RouteTransitionRecord = RouteTransitionRecord;
class TransitionDelegate extends mxflutter_base_1.MXDartClass {
}
exports.TransitionDelegate = TransitionDelegate;
class DefaultTransitionDelegate extends TransitionDelegate {
}
exports.DefaultTransitionDelegate = DefaultTransitionDelegate;
class Navigator extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.pages = namedParameters.pages;
        this.onPopPage = namedParameters.onPopPage;
        this.initialRoute = namedParameters.initialRoute;
        this.onGenerateInitialRoutes = namedParameters.onGenerateInitialRoutes;
        this.onGenerateRoute = namedParameters.onGenerateRoute;
        this.onUnknownRoute = namedParameters.onUnknownRoute;
        this.transitionDelegate = namedParameters.transitionDelegate;
        this.reportsRouteUpdateToEngine = namedParameters.reportsRouteUpdateToEngine;
        this.observers = namedParameters.observers;
        this.className = 'Navigator';
    }
    static get defaultRouteName() {
        return '/';
    }
    static replace(context, namedParameters = {}) {
        var jsObj = new mxflutter_base_1.MXDartClass();
        jsObj['context'] = context;
        jsObj['oldRoute'] = namedParameters.oldRoute;
        jsObj['newRoute'] = namedParameters.newRoute;
        jsObj.className = 'Navigator';
        jsObj['constructorName'] = 'replace';
        return jsObj;
    }
    static replaceRouteBelow(context, namedParameters = {}) {
        var jsObj = new mxflutter_base_1.MXDartClass();
        jsObj['context'] = context;
        jsObj['anchorRoute'] = namedParameters.anchorRoute;
        jsObj['newRoute'] = namedParameters.newRoute;
        jsObj.className = 'Navigator';
        jsObj['constructorName'] = 'replaceRouteBelow';
        return jsObj;
    }
    // MX modified begin
    static pop(context) {
        let T = null;
        if (arguments.length === 2) {
            T = arguments[0];
            context = arguments[1];
        }
        const navigatorState = new NavigatorState(context);
        navigatorState.pop(T);
    }
    // MX modified end
    static popUntil(context, predicate) {
        var jsObj = new mxflutter_base_1.MXDartClass();
        jsObj['context'] = context;
        jsObj['predicate'] = predicate;
        jsObj.className = 'Navigator';
        jsObj['constructorName'] = 'popUntil';
        return jsObj;
    }
    static removeRoute(context, route) {
        var jsObj = new mxflutter_base_1.MXDartClass();
        jsObj['context'] = context;
        jsObj['route'] = route;
        jsObj.className = 'Navigator';
        jsObj['constructorName'] = 'removeRoute';
        return jsObj;
    }
    static removeRouteBelow(context, anchorRoute) {
        var jsObj = new mxflutter_base_1.MXDartClass();
        jsObj['context'] = context;
        jsObj['anchorRoute'] = anchorRoute;
        jsObj.className = 'Navigator';
        jsObj['constructorName'] = 'removeRouteBelow';
        return jsObj;
    }
    // MX modified begin
    static push(context, materialPageRoute) {
        let T = null;
        if (arguments.length === 3) {
            T = arguments[0];
            context = arguments[1];
            materialPageRoute = arguments[2];
        }
        const navigatorState = new NavigatorState(context);
        navigatorState.push(T, materialPageRoute);
    }
    static of(context, opt) {
        const navigatorState = new NavigatorState(context);
        return navigatorState;
    }
    static pushNamed(context, routeName, namedParameters = {}) {
        let T = null;
        if (arguments.length === 4) {
            T = arguments[0];
            context = arguments[1];
            routeName = arguments[2];
            namedParameters.mxArguments = arguments[3];
        }
        const navigatorState = new NavigatorState(context);
        navigatorState.pushNamed(T, routeName, namedParameters);
    }
}
exports.Navigator = Navigator;
var _RouteLifecycle;
(function (_RouteLifecycle) {
    _RouteLifecycle["staging"] = "{ \"_name\": \"_RouteLifecycle.staging\", \"index\": 0 }";
    _RouteLifecycle["add"] = "{ \"_name\": \"_RouteLifecycle.add\", \"index\": 1 }";
    _RouteLifecycle["adding"] = "{ \"_name\": \"_RouteLifecycle.adding\", \"index\": 2 }";
    _RouteLifecycle["push"] = "{ \"_name\": \"_RouteLifecycle.push\", \"index\": 3 }";
    _RouteLifecycle["pushReplace"] = "{ \"_name\": \"_RouteLifecycle.pushReplace\", \"index\": 4 }";
    _RouteLifecycle["pushing"] = "{ \"_name\": \"_RouteLifecycle.pushing\", \"index\": 5 }";
    _RouteLifecycle["replace"] = "{ \"_name\": \"_RouteLifecycle.replace\", \"index\": 6 }";
    _RouteLifecycle["idle"] = "{ \"_name\": \"_RouteLifecycle.idle\", \"index\": 7 }";
    _RouteLifecycle["pop"] = "{ \"_name\": \"_RouteLifecycle.pop\", \"index\": 8 }";
    _RouteLifecycle["remove"] = "{ \"_name\": \"_RouteLifecycle.remove\", \"index\": 9 }";
    _RouteLifecycle["popping"] = "{ \"_name\": \"_RouteLifecycle.popping\", \"index\": 10 }";
    _RouteLifecycle["removing"] = "{ \"_name\": \"_RouteLifecycle.removing\", \"index\": 11 }";
    _RouteLifecycle["dispose"] = "{ \"_name\": \"_RouteLifecycle.dispose\", \"index\": 12 }";
    _RouteLifecycle["disposed"] = "{ \"_name\": \"_RouteLifecycle.disposed\", \"index\": 13 }";
})(_RouteLifecycle || (_RouteLifecycle = {}));
exports._RouteLifecycle = _RouteLifecycle;
;
class _NotAnnounced extends Route {
}
exports._NotAnnounced = _NotAnnounced;
class _RouteEntry extends RouteTransitionRecord {
    constructor(route, namedParameters = {}) {
        super();
        this.route = route;
        this['initialState'] = namedParameters.initialState;
        this.className = '_RouteEntry';
    }
}
exports._RouteEntry = _RouteEntry;
class _NavigatorObservation extends mxflutter_base_1.MXDartClass {
}
exports._NavigatorObservation = _NavigatorObservation;
class _NavigatorPushObservation extends _NavigatorObservation {
    constructor(primaryRoute, secondaryRoute) {
        super();
        this['primaryRoute'] = primaryRoute;
        this['secondaryRoute'] = secondaryRoute;
        this.className = '_NavigatorPushObservation';
    }
}
exports._NavigatorPushObservation = _NavigatorPushObservation;
class _NavigatorPopObservation extends _NavigatorObservation {
    constructor(primaryRoute, secondaryRoute) {
        super();
        this['primaryRoute'] = primaryRoute;
        this['secondaryRoute'] = secondaryRoute;
        this.className = '_NavigatorPopObservation';
    }
}
exports._NavigatorPopObservation = _NavigatorPopObservation;
class _NavigatorRemoveObservation extends _NavigatorObservation {
    constructor(primaryRoute, secondaryRoute) {
        super();
        this['primaryRoute'] = primaryRoute;
        this['secondaryRoute'] = secondaryRoute;
        this.className = '_NavigatorRemoveObservation';
    }
}
exports._NavigatorRemoveObservation = _NavigatorRemoveObservation;
class _NavigatorReplaceObservation extends _NavigatorObservation {
    constructor(primaryRoute, secondaryRoute) {
        super();
        this['primaryRoute'] = primaryRoute;
        this['secondaryRoute'] = secondaryRoute;
        this.className = '_NavigatorReplaceObservation';
    }
}
exports._NavigatorReplaceObservation = _NavigatorReplaceObservation;
// MX modified begin
class NavigatorState extends mxflutter_base_1.MXDartClass {
    constructor(context) {
        super();
        this.context = context;
        this.className = 'NavigatorState';
    }
    push(T, materialPageRoute) {
        this.context.navigatorPush(materialPageRoute.builder(this.context));
    }
    pop(T) {
        this.context.navigatorPop();
    }
    pushNamed(T, routeName, namedParameters = {}) {
        this.context.navigatorPushNamed(routeName, namedParameters.mxArguments);
    }
}
exports.NavigatorState = NavigatorState;
