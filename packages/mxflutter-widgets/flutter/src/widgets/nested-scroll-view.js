"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderNestedScrollViewViewport = exports.NestedScrollViewViewport = exports.RenderSliverOverlapInjector = exports.SliverOverlapInjector = exports.RenderSliverOverlapAbsorber = exports.SliverOverlapAbsorber = exports.SliverOverlapAbsorberHandle = exports._NestedOuterBallisticScrollActivity = exports._NestedInnerBallisticScrollActivity = exports._NestedBallisticScrollActivityMode = exports._NestedScrollPosition = exports._NestedScrollController = exports._NestedScrollCoordinator = exports._NestedScrollMetrics = exports._InheritedNestedScrollView = exports._NestedScrollViewCustomScrollView = exports.NestedScrollViewState = exports.NestedScrollView = void 0;
const viewport_1 = require("../rendering/viewport");
const viewport_2 = require("./viewport");
const sliver_1 = require("../rendering/sliver");
const change_notifier_1 = require("../foundation/change-notifier");
const scroll_position_1 = require("./scroll-position");
const scroll_activity_1 = require("./scroll-activity");
const scroll_metrics_1 = require("./scroll-metrics");
const scroll_view_1 = require("./scroll-view");
const scroll_controller_1 = require("./scroll-controller");
const framework_1 = require("./framework");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class NestedScrollView extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.controller = namedParameters.controller;
        this.scrollDirection = namedParameters.scrollDirection;
        this.reverse = namedParameters.reverse;
        this.physics = namedParameters.physics;
        this.headerSliverBuilder = namedParameters.headerSliverBuilder;
        this.body = namedParameters.body;
        this.dragStartBehavior = namedParameters.dragStartBehavior;
        this.floatHeaderSlivers = namedParameters.floatHeaderSlivers;
        this.clipBehavior = namedParameters.clipBehavior;
        this.restorationId = namedParameters.restorationId;
        this.className = 'NestedScrollView';
        // MX Modified begin
        this['children'] = [];
        // MX Modified end
    }
    // MX modified begin
    preBuild(buildContext) {
        // TODO: innerBoxIsScrolled 暂时不支持，默认为false
        if (this.headerSliverBuilder) {
            this['children'] = this.headerSliverBuilder(buildContext);
            delete this.headerSliverBuilder;
        }
    }
}
exports.NestedScrollView = NestedScrollView;
class NestedScrollViewState extends framework_1.State {
}
exports.NestedScrollViewState = NestedScrollViewState;
class _NestedScrollViewCustomScrollView extends scroll_view_1.CustomScrollView {
    constructor(namedParameters = {}) {
        super();
        this.scrollDirection = namedParameters.scrollDirection;
        this.reverse = namedParameters.reverse;
        this.physics = namedParameters.physics;
        this.controller = namedParameters.controller;
        this.slivers = namedParameters.slivers;
        this.handle = namedParameters.handle;
        this.clipBehavior = namedParameters.clipBehavior;
        this.dragStartBehavior = namedParameters.dragStartBehavior;
        this.restorationId = namedParameters.restorationId;
        this.className = '_NestedScrollViewCustomScrollView';
    }
}
exports._NestedScrollViewCustomScrollView = _NestedScrollViewCustomScrollView;
class _InheritedNestedScrollView extends framework_1.InheritedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.state = namedParameters.state;
        this.child = namedParameters.child;
        this.className = '_InheritedNestedScrollView';
    }
}
exports._InheritedNestedScrollView = _InheritedNestedScrollView;
class _NestedScrollMetrics extends scroll_metrics_1.FixedScrollMetrics {
    constructor(namedParameters = {}) {
        super();
        this.minScrollExtent = namedParameters.minScrollExtent;
        this.maxScrollExtent = namedParameters.maxScrollExtent;
        this.pixels = namedParameters.pixels;
        this.viewportDimension = namedParameters.viewportDimension;
        this.axisDirection = namedParameters.axisDirection;
        this.minRange = namedParameters.minRange;
        this.maxRange = namedParameters.maxRange;
        this.correctionOffset = namedParameters.correctionOffset;
        this.className = '_NestedScrollMetrics';
    }
}
exports._NestedScrollMetrics = _NestedScrollMetrics;
class _NestedScrollCoordinator extends mxflutter_base_1.MXDartClass {
    constructor(_state, _parent, _onHasScrolledBodyChanged, _floatHeaderSlivers) {
        super();
        this.state = _state;
        this.parent = _parent;
        this.onHasScrolledBodyChanged = _onHasScrolledBodyChanged;
        this.floatHeaderSlivers = _floatHeaderSlivers;
        this.className = '_NestedScrollCoordinator';
    }
}
exports._NestedScrollCoordinator = _NestedScrollCoordinator;
class _NestedScrollController extends scroll_controller_1.ScrollController {
    constructor(coordinator, namedParameters = {}) {
        super();
        this.coordinator = coordinator;
        this.initialScrollOffset = namedParameters.initialScrollOffset;
        this.debugLabel = namedParameters.debugLabel;
        this.className = '_NestedScrollController';
    }
}
exports._NestedScrollController = _NestedScrollController;
class _NestedScrollPosition extends scroll_position_1.ScrollPosition {
    constructor(namedParameters = {}) {
        super();
        this.physics = namedParameters.physics;
        this.context = namedParameters.context;
        this['initialPixels'] = namedParameters.initialPixels;
        this['oldPosition'] = namedParameters.oldPosition;
        this.debugLabel = namedParameters.debugLabel;
        this.coordinator = namedParameters.coordinator;
        this.className = '_NestedScrollPosition';
    }
}
exports._NestedScrollPosition = _NestedScrollPosition;
var _NestedBallisticScrollActivityMode;
(function (_NestedBallisticScrollActivityMode) {
    _NestedBallisticScrollActivityMode["outer"] = "{ \"_name\": \"_NestedBallisticScrollActivityMode.outer\", \"index\": 0 }";
    _NestedBallisticScrollActivityMode["inner"] = "{ \"_name\": \"_NestedBallisticScrollActivityMode.inner\", \"index\": 1 }";
    _NestedBallisticScrollActivityMode["independent"] = "{ \"_name\": \"_NestedBallisticScrollActivityMode.independent\", \"index\": 2 }";
})(_NestedBallisticScrollActivityMode || (_NestedBallisticScrollActivityMode = {}));
exports._NestedBallisticScrollActivityMode = _NestedBallisticScrollActivityMode;
;
class _NestedInnerBallisticScrollActivity extends scroll_activity_1.BallisticScrollActivity {
    constructor(coordinator, position, simulation, vsync) {
        super();
        this.coordinator = coordinator;
        this['position'] = position;
        this['simulation'] = simulation;
        this.className = '_NestedInnerBallisticScrollActivity';
    }
}
exports._NestedInnerBallisticScrollActivity = _NestedInnerBallisticScrollActivity;
class _NestedOuterBallisticScrollActivity extends scroll_activity_1.BallisticScrollActivity {
    constructor(coordinator, position, metrics, simulation, vsync) {
        super();
        this.coordinator = coordinator;
        this['position'] = position;
        this.metrics = metrics;
        this['simulation'] = simulation;
        this.className = '_NestedOuterBallisticScrollActivity';
    }
}
exports._NestedOuterBallisticScrollActivity = _NestedOuterBallisticScrollActivity;
class SliverOverlapAbsorberHandle extends change_notifier_1.ChangeNotifier {
}
exports.SliverOverlapAbsorberHandle = SliverOverlapAbsorberHandle;
class SliverOverlapAbsorber extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.handle = namedParameters.handle;
        this['sliver'] = namedParameters.sliver;
        this.className = 'SliverOverlapAbsorber';
    }
}
exports.SliverOverlapAbsorber = SliverOverlapAbsorber;
class RenderSliverOverlapAbsorber extends sliver_1.RenderSliver {
    constructor(namedParameters = {}) {
        super();
        this.handle = namedParameters.handle;
        this['sliver'] = namedParameters.sliver;
        this.className = 'RenderSliverOverlapAbsorber';
    }
}
exports.RenderSliverOverlapAbsorber = RenderSliverOverlapAbsorber;
class SliverOverlapInjector extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.handle = namedParameters.handle;
        this['sliver'] = namedParameters.sliver;
        this.className = 'SliverOverlapInjector';
    }
}
exports.SliverOverlapInjector = SliverOverlapInjector;
class RenderSliverOverlapInjector extends sliver_1.RenderSliver {
    constructor(namedParameters = {}) {
        super();
        this.handle = namedParameters.handle;
        this.className = 'RenderSliverOverlapInjector';
    }
}
exports.RenderSliverOverlapInjector = RenderSliverOverlapInjector;
class NestedScrollViewViewport extends viewport_2.Viewport {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.axisDirection = namedParameters.axisDirection;
        this.crossAxisDirection = namedParameters.crossAxisDirection;
        this.anchor = namedParameters.anchor;
        this.offset = namedParameters.offset;
        this.center = namedParameters.center;
        this['slivers'] = namedParameters.slivers;
        this.handle = namedParameters.handle;
        this.clipBehavior = namedParameters.clipBehavior;
        this.className = 'NestedScrollViewViewport';
    }
}
exports.NestedScrollViewViewport = NestedScrollViewViewport;
class RenderNestedScrollViewViewport extends viewport_1.RenderViewport {
    constructor(namedParameters = {}) {
        super();
        this.axisDirection = namedParameters.axisDirection;
        this.crossAxisDirection = namedParameters.crossAxisDirection;
        this.offset = namedParameters.offset;
        this.anchor = namedParameters.anchor;
        this['children'] = namedParameters.children;
        this.center = namedParameters.center;
        this.handle = namedParameters.handle;
        this.clipBehavior = namedParameters.clipBehavior;
        this.className = 'RenderNestedScrollViewViewport';
    }
}
exports.RenderNestedScrollViewViewport = RenderNestedScrollViewViewport;
