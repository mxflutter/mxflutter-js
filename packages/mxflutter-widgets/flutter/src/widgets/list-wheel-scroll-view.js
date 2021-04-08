"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListWheelViewport = exports.ListWheelElement = exports._ListWheelScrollViewState = exports.ListWheelScrollView = exports.FixedExtentScrollPhysics = exports._FixedExtentScrollableState = exports._FixedExtentScrollable = exports._FixedExtentScrollPosition = exports.FixedExtentMetrics = exports.FixedExtentScrollController = exports.ListWheelChildBuilderDelegate = exports.ListWheelChildLoopingListDelegate = exports.ListWheelChildListDelegate = exports.ListWheelChildDelegate = void 0;
const framework_1 = require("./framework");
const scrollable_1 = require("./scrollable");
const scroll_physics_1 = require("./scroll-physics");
const scroll_position_with_single_context_1 = require("./scroll-position-with-single-context");
const scroll_metrics_1 = require("./scroll-metrics");
const scroll_controller_1 = require("./scroll-controller");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class ListWheelChildDelegate extends mxflutter_base_1.MXDartClass {
}
exports.ListWheelChildDelegate = ListWheelChildDelegate;
class ListWheelChildListDelegate extends ListWheelChildDelegate {
    constructor(namedParameters = {}) {
        super();
        this.children = namedParameters.children;
        this.className = 'ListWheelChildListDelegate';
    }
}
exports.ListWheelChildListDelegate = ListWheelChildListDelegate;
class ListWheelChildLoopingListDelegate extends ListWheelChildDelegate {
    constructor(namedParameters = {}) {
        super();
        this.children = namedParameters.children;
        this.className = 'ListWheelChildLoopingListDelegate';
    }
}
exports.ListWheelChildLoopingListDelegate = ListWheelChildLoopingListDelegate;
class ListWheelChildBuilderDelegate extends ListWheelChildDelegate {
    constructor(namedParameters = {}) {
        super();
        this.builder = namedParameters.builder;
        this.childCount = namedParameters.childCount;
        this.className = 'ListWheelChildBuilderDelegate';
    }
}
exports.ListWheelChildBuilderDelegate = ListWheelChildBuilderDelegate;
class FixedExtentScrollController extends scroll_controller_1.ScrollController {
    constructor(namedParameters = {}) {
        super();
        this.initialItem = namedParameters.initialItem;
        this.className = 'FixedExtentScrollController';
    }
}
exports.FixedExtentScrollController = FixedExtentScrollController;
class FixedExtentMetrics extends scroll_metrics_1.FixedScrollMetrics {
    constructor(namedParameters = {}) {
        super();
        this.minScrollExtent = namedParameters.minScrollExtent;
        this.maxScrollExtent = namedParameters.maxScrollExtent;
        this.pixels = namedParameters.pixels;
        this.viewportDimension = namedParameters.viewportDimension;
        this.axisDirection = namedParameters.axisDirection;
        this.itemIndex = namedParameters.itemIndex;
        this.className = 'FixedExtentMetrics';
    }
}
exports.FixedExtentMetrics = FixedExtentMetrics;
class _FixedExtentScrollPosition extends scroll_position_with_single_context_1.ScrollPositionWithSingleContext {
    constructor(namedParameters = {}) {
        super();
        this['physics'] = namedParameters.physics;
        this['context'] = namedParameters.context;
        this['initialItem'] = namedParameters.initialItem;
        this['keepScrollOffset'] = namedParameters.keepScrollOffset;
        this['oldPosition'] = namedParameters.oldPosition;
        this['debugLabel'] = namedParameters.debugLabel;
        this.className = '_FixedExtentScrollPosition';
    }
}
exports._FixedExtentScrollPosition = _FixedExtentScrollPosition;
class _FixedExtentScrollable extends scrollable_1.Scrollable {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.axisDirection = namedParameters.axisDirection;
        this.controller = namedParameters.controller;
        this.physics = namedParameters.physics;
        this.itemExtent = namedParameters.itemExtent;
        this.viewportBuilder = namedParameters.viewportBuilder;
        this.restorationId = namedParameters.restorationId;
        this.className = '_FixedExtentScrollable';
    }
}
exports._FixedExtentScrollable = _FixedExtentScrollable;
class _FixedExtentScrollableState extends scrollable_1.ScrollableState {
}
exports._FixedExtentScrollableState = _FixedExtentScrollableState;
class FixedExtentScrollPhysics extends scroll_physics_1.ScrollPhysics {
    constructor(namedParameters = {}) {
        super();
        this['parent'] = namedParameters.parent;
        this.className = 'FixedExtentScrollPhysics';
    }
}
exports.FixedExtentScrollPhysics = FixedExtentScrollPhysics;
class ListWheelScrollView extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.controller = namedParameters.controller;
        this.physics = namedParameters.physics;
        this.diameterRatio = namedParameters.diameterRatio;
        this.perspective = namedParameters.perspective;
        this.offAxisFraction = namedParameters.offAxisFraction;
        this.useMagnifier = namedParameters.useMagnifier;
        this.magnification = namedParameters.magnification;
        this.overAndUnderCenterOpacity = namedParameters.overAndUnderCenterOpacity;
        this.itemExtent = namedParameters.itemExtent;
        this.squeeze = namedParameters.squeeze;
        this.onSelectedItemChanged = namedParameters.onSelectedItemChanged;
        this.renderChildrenOutsideViewport = namedParameters.renderChildrenOutsideViewport;
        this.clipBehavior = namedParameters.clipBehavior;
        this.restorationId = namedParameters.restorationId;
        this['children'] = namedParameters.children;
        this.className = 'ListWheelScrollView';
    }
    static useDelegate(namedParameters = {}) {
        var jsObj = new ListWheelScrollView();
        jsObj.key = namedParameters.key;
        jsObj.controller = namedParameters.controller;
        jsObj.physics = namedParameters.physics;
        jsObj.diameterRatio = namedParameters.diameterRatio;
        jsObj.perspective = namedParameters.perspective;
        jsObj.offAxisFraction = namedParameters.offAxisFraction;
        jsObj.useMagnifier = namedParameters.useMagnifier;
        jsObj.magnification = namedParameters.magnification;
        jsObj.overAndUnderCenterOpacity = namedParameters.overAndUnderCenterOpacity;
        jsObj.itemExtent = namedParameters.itemExtent;
        jsObj.squeeze = namedParameters.squeeze;
        jsObj.onSelectedItemChanged = namedParameters.onSelectedItemChanged;
        jsObj.renderChildrenOutsideViewport = namedParameters.renderChildrenOutsideViewport;
        jsObj.clipBehavior = namedParameters.clipBehavior;
        jsObj.restorationId = namedParameters.restorationId;
        jsObj.childDelegate = namedParameters.childDelegate;
        jsObj['constructorName'] = 'useDelegate';
        return jsObj;
    }
}
exports.ListWheelScrollView = ListWheelScrollView;
class _ListWheelScrollViewState extends framework_1.State {
}
exports._ListWheelScrollViewState = _ListWheelScrollViewState;
class ListWheelElement extends framework_1.RenderObjectElement {
    constructor(widget) {
        super();
        this['mx_widget'] = widget;
        this.className = 'ListWheelElement';
    }
}
exports.ListWheelElement = ListWheelElement;
class ListWheelViewport extends framework_1.RenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.diameterRatio = namedParameters.diameterRatio;
        this.perspective = namedParameters.perspective;
        this.offAxisFraction = namedParameters.offAxisFraction;
        this.useMagnifier = namedParameters.useMagnifier;
        this.magnification = namedParameters.magnification;
        this.overAndUnderCenterOpacity = namedParameters.overAndUnderCenterOpacity;
        this.itemExtent = namedParameters.itemExtent;
        this.squeeze = namedParameters.squeeze;
        this.renderChildrenOutsideViewport = namedParameters.renderChildrenOutsideViewport;
        this.offset = namedParameters.offset;
        this.childDelegate = namedParameters.childDelegate;
        this.clipBehavior = namedParameters.clipBehavior;
        this.className = 'ListWheelViewport';
    }
}
exports.ListWheelViewport = ListWheelViewport;
