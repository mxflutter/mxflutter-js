"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._CupertinoModalPopupRoute = exports._CupertinoEdgeShadowPainter = exports._CupertinoEdgeShadowDecoration = exports._CupertinoBackGestureController = exports._CupertinoBackGestureDetectorState = exports._CupertinoBackGestureDetector = exports.CupertinoFullscreenDialogTransition = exports.CupertinoPageTransition = exports.CupertinoPage = exports._PageBasedCupertinoPageRoute = exports.CupertinoPageRoute = exports.CupertinoRouteTransitionMixin = void 0;
const routes_1 = require("../widgets/routes");
const decoration_1 = require("../painting/decoration");
const framework_1 = require("../widgets/framework");
const navigator_1 = require("../widgets/navigator");
const pages_1 = require("../widgets/pages");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class CupertinoRouteTransitionMixin extends pages_1.PageRoute {
}
exports.CupertinoRouteTransitionMixin = CupertinoRouteTransitionMixin;
class CupertinoPageRoute extends pages_1.PageRoute {
    constructor(namedParameters = {}) {
        super();
        this.builder = namedParameters.builder;
        this.title = namedParameters.title;
        this.settings = namedParameters.settings;
        this.maintainState = namedParameters.maintainState;
        this.fullscreenDialog = namedParameters.fullscreenDialog;
        this.className = 'CupertinoPageRoute';
    }
}
exports.CupertinoPageRoute = CupertinoPageRoute;
class _PageBasedCupertinoPageRoute extends pages_1.PageRoute {
    constructor(namedParameters = {}) {
        super();
        this['page'] = namedParameters.page;
        this.className = '_PageBasedCupertinoPageRoute';
    }
}
exports._PageBasedCupertinoPageRoute = _PageBasedCupertinoPageRoute;
class CupertinoPage extends navigator_1.Page {
    constructor(namedParameters = {}) {
        super();
        this.child = namedParameters.child;
        this.maintainState = namedParameters.maintainState;
        this.title = namedParameters.title;
        this.fullscreenDialog = namedParameters.fullscreenDialog;
        this.key = namedParameters.key;
        this.name = namedParameters.name;
        this.mx_arguments = namedParameters.mx_arguments;
        this.className = 'CupertinoPage';
    }
}
exports.CupertinoPage = CupertinoPage;
class CupertinoPageTransition extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this['primaryRouteAnimation'] = namedParameters.primaryRouteAnimation;
        this['secondaryRouteAnimation'] = namedParameters.secondaryRouteAnimation;
        this.child = namedParameters.child;
        this['linearTransition'] = namedParameters.linearTransition;
        this.className = 'CupertinoPageTransition';
    }
}
exports.CupertinoPageTransition = CupertinoPageTransition;
class CupertinoFullscreenDialogTransition extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this['primaryRouteAnimation'] = namedParameters.primaryRouteAnimation;
        this['secondaryRouteAnimation'] = namedParameters.secondaryRouteAnimation;
        this.child = namedParameters.child;
        this['linearTransition'] = namedParameters.linearTransition;
        this.className = 'CupertinoFullscreenDialogTransition';
    }
}
exports.CupertinoFullscreenDialogTransition = CupertinoFullscreenDialogTransition;
class _CupertinoBackGestureDetector extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.enabledCallback = namedParameters.enabledCallback;
        this.onStartPopGesture = namedParameters.onStartPopGesture;
        this.child = namedParameters.child;
        this.className = '_CupertinoBackGestureDetector';
    }
}
exports._CupertinoBackGestureDetector = _CupertinoBackGestureDetector;
class _CupertinoBackGestureDetectorState extends framework_1.State {
}
exports._CupertinoBackGestureDetectorState = _CupertinoBackGestureDetectorState;
class _CupertinoBackGestureController extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.navigator = namedParameters.navigator;
        this.controller = namedParameters.controller;
        this.className = '_CupertinoBackGestureController';
    }
}
exports._CupertinoBackGestureController = _CupertinoBackGestureController;
class _CupertinoEdgeShadowDecoration extends decoration_1.Decoration {
    constructor(namedParameters = {}) {
        super();
        this.edgeGradient = namedParameters.edgeGradient;
        this.className = '_CupertinoEdgeShadowDecoration';
    }
    static get none() {
        var jsObj = new _CupertinoEdgeShadowDecoration();
        jsObj['className'] = '_CupertinoEdgeShadowDecoration';
        jsObj['constructorName'] = 'none';
        return jsObj;
    }
}
exports._CupertinoEdgeShadowDecoration = _CupertinoEdgeShadowDecoration;
class _CupertinoEdgeShadowPainter extends decoration_1.BoxPainter {
    constructor(_decoration, onChange) {
        super();
        this.decoration = _decoration;
        this['onChange'] = onChange;
        this.className = '_CupertinoEdgeShadowPainter';
    }
}
exports._CupertinoEdgeShadowPainter = _CupertinoEdgeShadowPainter;
class _CupertinoModalPopupRoute extends routes_1.PopupRoute {
    constructor(namedParameters = {}) {
        super();
        this.barrierColor = namedParameters.barrierColor;
        this.barrierLabel = namedParameters.barrierLabel;
        this.builder = namedParameters.builder;
        this.semanticsDismissible = namedParameters.semanticsDismissible;
        this.filter = namedParameters.filter;
        this.settings = namedParameters.settings;
        this.className = '_CupertinoModalPopupRoute';
    }
}
exports._CupertinoModalPopupRoute = _CupertinoModalPopupRoute;
