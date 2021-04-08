"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._PageViewState = exports.PageView = exports.PageScrollPhysics = exports._ForceImplicitScrollPhysics = exports._PagePosition = exports.PageMetrics = exports.PageController = void 0;
// MX Modified begin
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
const framework_1 = require("./framework");
const scroll_physics_1 = require("./scroll-physics");
const scroll_position_with_single_context_1 = require("./scroll-position-with-single-context");
const scroll_metrics_1 = require("./scroll-metrics");
const scroll_controller_1 = require("./scroll-controller");
class PageController extends scroll_controller_1.ScrollController {
    constructor(namedParameters = {}) {
        super();
        this.initialPage = namedParameters.initialPage;
        this.keepPage = namedParameters.keepPage;
        this.viewportFraction = namedParameters.viewportFraction;
        this.className = 'PageController';
    }
    // MX Modified begin
    jumpToPage(page) {
        const argument = new mxflutter_base_1.MXMirrorObjMethodCall({
            mirrorID: this.mirrorID,
            className: 'PageController',
            funcName: 'jumpToPage',
            args: {
                page,
            },
        });
        this.invokeMirrorObjMethod(argument);
    }
}
exports.PageController = PageController;
class PageMetrics extends scroll_metrics_1.FixedScrollMetrics {
    constructor(namedParameters = {}) {
        super();
        this.minScrollExtent = namedParameters.minScrollExtent;
        this.maxScrollExtent = namedParameters.maxScrollExtent;
        this.pixels = namedParameters.pixels;
        this.viewportDimension = namedParameters.viewportDimension;
        this.axisDirection = namedParameters.axisDirection;
        this.viewportFraction = namedParameters.viewportFraction;
        this.className = 'PageMetrics';
    }
}
exports.PageMetrics = PageMetrics;
class _PagePosition extends scroll_position_with_single_context_1.ScrollPositionWithSingleContext {
    constructor(namedParameters = {}) {
        super();
        this.physics = namedParameters.physics;
        this.context = namedParameters.context;
        this.initialPage = namedParameters.initialPage;
        this['keepPage'] = namedParameters.keepPage;
        this.viewportFraction = namedParameters.viewportFraction;
        this['oldPosition'] = namedParameters.oldPosition;
        this.className = '_PagePosition';
    }
}
exports._PagePosition = _PagePosition;
class _ForceImplicitScrollPhysics extends scroll_physics_1.ScrollPhysics {
    constructor(namedParameters = {}) {
        super();
        this.allowImplicitScrolling = namedParameters.allowImplicitScrolling;
        this.parent = namedParameters.parent;
        this.className = '_ForceImplicitScrollPhysics';
    }
}
exports._ForceImplicitScrollPhysics = _ForceImplicitScrollPhysics;
class PageScrollPhysics extends scroll_physics_1.ScrollPhysics {
    constructor(namedParameters = {}) {
        super();
        this['parent'] = namedParameters.parent;
        this.className = 'PageScrollPhysics';
    }
}
exports.PageScrollPhysics = PageScrollPhysics;
class PageView extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.scrollDirection = namedParameters.scrollDirection;
        this.reverse = namedParameters.reverse;
        this.controller = namedParameters.controller;
        this.physics = namedParameters.physics;
        this.pageSnapping = namedParameters.pageSnapping;
        this.onPageChanged = namedParameters.onPageChanged;
        this['children'] = namedParameters.children;
        this.dragStartBehavior = namedParameters.dragStartBehavior;
        this.allowImplicitScrolling = namedParameters.allowImplicitScrolling;
        this.restorationId = namedParameters.restorationId;
        this.clipBehavior = namedParameters.clipBehavior;
        this.className = 'PageView';
    }
    static builder(namedParameters = {}) {
        var jsObj = new PageView();
        jsObj.key = namedParameters.key;
        jsObj.scrollDirection = namedParameters.scrollDirection;
        jsObj.reverse = namedParameters.reverse;
        jsObj.controller = namedParameters.controller;
        jsObj.physics = namedParameters.physics;
        jsObj.pageSnapping = namedParameters.pageSnapping;
        jsObj.onPageChanged = namedParameters.onPageChanged;
        jsObj['itemBuilder'] = namedParameters.itemBuilder;
        jsObj['itemCount'] = namedParameters.itemCount;
        jsObj.dragStartBehavior = namedParameters.dragStartBehavior;
        jsObj.allowImplicitScrolling = namedParameters.allowImplicitScrolling;
        jsObj.restorationId = namedParameters.restorationId;
        jsObj.clipBehavior = namedParameters.clipBehavior;
        jsObj['constructorName'] = 'builder';
        return jsObj;
    }
    static custom(namedParameters = {}) {
        var jsObj = new PageView();
        jsObj.key = namedParameters.key;
        jsObj.scrollDirection = namedParameters.scrollDirection;
        jsObj.reverse = namedParameters.reverse;
        jsObj.controller = namedParameters.controller;
        jsObj.physics = namedParameters.physics;
        jsObj.pageSnapping = namedParameters.pageSnapping;
        jsObj.onPageChanged = namedParameters.onPageChanged;
        jsObj.childrenDelegate = namedParameters.childrenDelegate;
        jsObj.dragStartBehavior = namedParameters.dragStartBehavior;
        jsObj.allowImplicitScrolling = namedParameters.allowImplicitScrolling;
        jsObj.restorationId = namedParameters.restorationId;
        jsObj.clipBehavior = namedParameters.clipBehavior;
        jsObj['constructorName'] = 'custom';
        return jsObj;
    }
    // MX modified begin
    preBuild(buildContext) {
        if (this['itemBuilder']) {
            this['children'] = [];
            for (let i = 0; i < this['itemCount']; ++i) {
                const w = this['itemBuilder'](buildContext, i);
                this['children'].push(w);
            }
            delete this['itemBuilder'];
        }
    }
}
exports.PageView = PageView;
class _PageViewState extends framework_1.State {
}
exports._PageViewState = _PageViewState;
