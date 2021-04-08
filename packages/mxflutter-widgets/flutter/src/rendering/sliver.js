"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderSliverToBoxAdapter = exports.RenderSliverSingleBoxAdapter = exports.RenderSliverHelpers = exports.RenderSliver = exports.SliverPhysicalContainerParentData = exports.SliverPhysicalParentData = exports.SliverLogicalContainerParentData = exports.SliverLogicalParentData = exports.SliverHitTestEntry = exports.SliverHitTestResult = exports.SliverGeometry = exports.SliverConstraints = exports.GrowthDirection = void 0;
const hit_test_1 = require("../gestures/hit-test");
const object_1 = require("./object");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
var GrowthDirection;
(function (GrowthDirection) {
    GrowthDirection["forward"] = "{ \"_name\": \"GrowthDirection.forward\", \"index\": 0 }";
    GrowthDirection["reverse"] = "{ \"_name\": \"GrowthDirection.reverse\", \"index\": 1 }";
})(GrowthDirection || (GrowthDirection = {}));
exports.GrowthDirection = GrowthDirection;
;
class SliverConstraints extends object_1.Constraints {
    constructor(namedParameters = {}) {
        super();
        this.axisDirection = namedParameters.axisDirection;
        this.growthDirection = namedParameters.growthDirection;
        this.userScrollDirection = namedParameters.userScrollDirection;
        this.scrollOffset = namedParameters.scrollOffset;
        this.precedingScrollExtent = namedParameters.precedingScrollExtent;
        this.overlap = namedParameters.overlap;
        this.remainingPaintExtent = namedParameters.remainingPaintExtent;
        this.crossAxisExtent = namedParameters.crossAxisExtent;
        this.crossAxisDirection = namedParameters.crossAxisDirection;
        this.viewportMainAxisExtent = namedParameters.viewportMainAxisExtent;
        this.remainingCacheExtent = namedParameters.remainingCacheExtent;
        this.cacheOrigin = namedParameters.cacheOrigin;
        this.className = 'SliverConstraints';
    }
}
exports.SliverConstraints = SliverConstraints;
class SliverGeometry extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.scrollExtent = namedParameters.scrollExtent;
        this.paintExtent = namedParameters.paintExtent;
        this.paintOrigin = namedParameters.paintOrigin;
        this.layoutExtent = namedParameters.layoutExtent;
        this.maxPaintExtent = namedParameters.maxPaintExtent;
        this.maxScrollObstructionExtent = namedParameters.maxScrollObstructionExtent;
        this.hitTestExtent = namedParameters.hitTestExtent;
        this.visible = namedParameters.visible;
        this.hasVisualOverflow = namedParameters.hasVisualOverflow;
        this.scrollOffsetCorrection = namedParameters.scrollOffsetCorrection;
        this.cacheExtent = namedParameters.cacheExtent;
        this.className = 'SliverGeometry';
    }
    static get zero() {
        var jsObj = new SliverGeometry();
        jsObj['className'] = 'SliverGeometry';
        jsObj['constructorName'] = 'zero';
        return jsObj;
    }
}
exports.SliverGeometry = SliverGeometry;
class SliverHitTestResult extends hit_test_1.HitTestResult {
    static wrap(result) {
        var jsObj = new SliverHitTestResult();
        jsObj['result'] = result;
        jsObj['constructorName'] = 'wrap';
        return jsObj;
    }
}
exports.SliverHitTestResult = SliverHitTestResult;
class SliverHitTestEntry extends hit_test_1.HitTestEntry {
    constructor(target, namedParameters = {}) {
        super();
        this['mx_target'] = target;
        this.mainAxisPosition = namedParameters.mainAxisPosition;
        this.crossAxisPosition = namedParameters.crossAxisPosition;
        this.className = 'SliverHitTestEntry';
    }
}
exports.SliverHitTestEntry = SliverHitTestEntry;
class SliverLogicalParentData extends object_1.ParentData {
}
exports.SliverLogicalParentData = SliverLogicalParentData;
class SliverLogicalContainerParentData extends SliverLogicalParentData {
}
exports.SliverLogicalContainerParentData = SliverLogicalContainerParentData;
class SliverPhysicalParentData extends object_1.ParentData {
}
exports.SliverPhysicalParentData = SliverPhysicalParentData;
class SliverPhysicalContainerParentData extends SliverPhysicalParentData {
}
exports.SliverPhysicalContainerParentData = SliverPhysicalContainerParentData;
class RenderSliver extends object_1.RenderObject {
}
exports.RenderSliver = RenderSliver;
class RenderSliverHelpers extends mxflutter_base_1.MXDartClass {
}
exports.RenderSliverHelpers = RenderSliverHelpers;
class RenderSliverSingleBoxAdapter extends RenderSliver {
}
exports.RenderSliverSingleBoxAdapter = RenderSliverSingleBoxAdapter;
class RenderSliverToBoxAdapter extends RenderSliverSingleBoxAdapter {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.className = 'RenderSliverToBoxAdapter';
    }
}
exports.RenderSliverToBoxAdapter = RenderSliverToBoxAdapter;
