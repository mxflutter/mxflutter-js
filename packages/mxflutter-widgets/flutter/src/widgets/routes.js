"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._DialogRoute = exports.RouteAware = exports.RouteObserver = exports.PopupRoute = exports.ModalRoute = exports._ModalScopeState = exports._ModalScope = exports._ModalScopeStatus = exports._DismissModalAction = exports.LocalHistoryRoute = exports.LocalHistoryEntry = exports.TransitionRoute = exports.OverlayRoute = void 0;
// MX Modified begin
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
const framework_1 = require("./framework");
const actions_1 = require("./actions");
const navigator_1 = require("./navigator");
const mxflutter_base_2 = require("@mxflutter/mxflutter-base");
class OverlayRoute extends navigator_1.Route {
}
exports.OverlayRoute = OverlayRoute;
class TransitionRoute extends OverlayRoute {
}
exports.TransitionRoute = TransitionRoute;
class LocalHistoryEntry extends mxflutter_base_2.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.onRemove = namedParameters.onRemove;
        this.className = 'LocalHistoryEntry';
    }
}
exports.LocalHistoryEntry = LocalHistoryEntry;
class LocalHistoryRoute extends navigator_1.Route {
}
exports.LocalHistoryRoute = LocalHistoryRoute;
class _DismissModalAction extends actions_1.DismissAction {
}
exports._DismissModalAction = _DismissModalAction;
class _ModalScopeStatus extends framework_1.InheritedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.isCurrent = namedParameters.isCurrent;
        this.canPop = namedParameters.canPop;
        this.route = namedParameters.route;
        this.child = namedParameters.child;
        this.className = '_ModalScopeStatus';
    }
}
exports._ModalScopeStatus = _ModalScopeStatus;
class _ModalScope extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.route = namedParameters.route;
        this.className = '_ModalScope';
    }
}
exports._ModalScope = _ModalScope;
class _ModalScopeState extends framework_1.State {
}
exports._ModalScopeState = _ModalScopeState;
class ModalRoute extends TransitionRoute {
    // MX Modified begin
    // TODO: 先用异步实现
    static of(context) {
        return __awaiter(this, void 0, void 0, function* () {
            const argument = new mxflutter_base_1.MXMirrorObjMethodCall({
                funcName: 'ModalRoute.of',
                args: {
                    widgetElementID: context.widgetElementID,
                },
            });
            const promiseResult = new Promise(function (resolve, reject) {
                mxflutter_base_1.invokeMirrorObjMethod(argument, function (value) {
                    if (value !== null) {
                        const jsonObj = JSON.parse(value);
                        resolve(jsonObj);
                    }
                    else {
                        reject(null);
                    }
                });
            });
            return promiseResult;
        });
    }
}
exports.ModalRoute = ModalRoute;
class PopupRoute extends ModalRoute {
}
exports.PopupRoute = PopupRoute;
class RouteObserver extends navigator_1.NavigatorObserver {
}
exports.RouteObserver = RouteObserver;
class RouteAware extends mxflutter_base_2.MXDartClass {
}
exports.RouteAware = RouteAware;
class _DialogRoute extends PopupRoute {
    constructor(namedParameters = {}) {
        super();
        this.pageBuilder = namedParameters.pageBuilder;
        this.barrierDismissible = namedParameters.barrierDismissible;
        this.barrierLabel = namedParameters.barrierLabel;
        this.barrierColor = namedParameters.barrierColor;
        this.transitionDuration = namedParameters.transitionDuration;
        this.transitionBuilder = namedParameters.transitionBuilder;
        this.settings = namedParameters.settings;
        this.className = '_DialogRoute';
    }
}
exports._DialogRoute = _DialogRoute;
