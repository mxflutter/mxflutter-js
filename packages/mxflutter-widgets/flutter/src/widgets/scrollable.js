"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._RestorableScrollOffset = exports.ScrollAction = exports.ScrollIntent = exports.ScrollIncrementDetails = exports.ScrollIncrementType = exports._RenderScrollSemantics = exports._ScrollSemantics = exports.ScrollableState = exports._ScrollableScope = exports.Scrollable = void 0;
const restoration_properties_1 = require("./restoration-properties");
const actions_1 = require("./actions");
const proxy_box_1 = require("../rendering/proxy-box");
const framework_1 = require("./framework");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class Scrollable extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.axisDirection = namedParameters.axisDirection;
        this.controller = namedParameters.controller;
        this.physics = namedParameters.physics;
        this.viewportBuilder = namedParameters.viewportBuilder;
        this.incrementCalculator = namedParameters.incrementCalculator;
        this.excludeFromSemantics = namedParameters.excludeFromSemantics;
        this.semanticChildCount = namedParameters.semanticChildCount;
        this.dragStartBehavior = namedParameters.dragStartBehavior;
        this.restorationId = namedParameters.restorationId;
        this.className = 'Scrollable';
    }
}
exports.Scrollable = Scrollable;
class _ScrollableScope extends framework_1.InheritedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.scrollable = namedParameters.scrollable;
        this.position = namedParameters.position;
        this.child = namedParameters.child;
        this.className = '_ScrollableScope';
    }
}
exports._ScrollableScope = _ScrollableScope;
class ScrollableState extends framework_1.State {
}
exports.ScrollableState = ScrollableState;
class _ScrollSemantics extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.position = namedParameters.position;
        this.allowImplicitScrolling = namedParameters.allowImplicitScrolling;
        this.semanticChildCount = namedParameters.semanticChildCount;
        this.child = namedParameters.child;
        this.className = '_ScrollSemantics';
    }
}
exports._ScrollSemantics = _ScrollSemantics;
class _RenderScrollSemantics extends proxy_box_1.RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this.position = namedParameters.position;
        this.allowImplicitScrolling = namedParameters.allowImplicitScrolling;
        this.semanticChildCount = namedParameters.semanticChildCount;
        this['child'] = namedParameters.child;
        this.className = '_RenderScrollSemantics';
    }
}
exports._RenderScrollSemantics = _RenderScrollSemantics;
var ScrollIncrementType;
(function (ScrollIncrementType) {
    ScrollIncrementType["line"] = "{ \"_name\": \"ScrollIncrementType.line\", \"index\": 0 }";
    ScrollIncrementType["page"] = "{ \"_name\": \"ScrollIncrementType.page\", \"index\": 1 }";
})(ScrollIncrementType || (ScrollIncrementType = {}));
exports.ScrollIncrementType = ScrollIncrementType;
;
class ScrollIncrementDetails extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.type = namedParameters.type;
        this.metrics = namedParameters.metrics;
        this.className = 'ScrollIncrementDetails';
    }
}
exports.ScrollIncrementDetails = ScrollIncrementDetails;
class ScrollIntent extends actions_1.Intent {
    constructor(namedParameters = {}) {
        super();
        this.direction = namedParameters.direction;
        this.type = namedParameters.type;
        this.className = 'ScrollIntent';
    }
}
exports.ScrollIntent = ScrollIntent;
class ScrollAction extends actions_1.Action {
}
exports.ScrollAction = ScrollAction;
class _RestorableScrollOffset extends restoration_properties_1.RestorableValue {
}
exports._RestorableScrollOffset = _RestorableScrollOffset;
