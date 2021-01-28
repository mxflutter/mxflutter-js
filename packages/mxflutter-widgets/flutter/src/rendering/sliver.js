//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { HitTestResult, HitTestEntry } from '../gestures/hit-test';
import { Constraints, ParentData, RenderObject } from './object';
import { MXDartClass } from '@mxflutter/mxflutter-base';
var GrowthDirection;
(function (GrowthDirection) {
    GrowthDirection["forward"] = "{ \"_name\": \"GrowthDirection.forward\", \"index\": 0 }";
    GrowthDirection["reverse"] = "{ \"_name\": \"GrowthDirection.reverse\", \"index\": 1 }";
})(GrowthDirection || (GrowthDirection = {}));
export { GrowthDirection };
class SliverConstraints extends Constraints {
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
export { SliverConstraints };
class SliverGeometry extends MXDartClass {
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
export { SliverGeometry };
class SliverHitTestResult extends HitTestResult {
    static wrap(result) {
        var jsObj = new SliverHitTestResult();
        jsObj['result'] = result;
        jsObj['constructorName'] = 'wrap';
        return jsObj;
    }
}
export { SliverHitTestResult };
class SliverHitTestEntry extends HitTestEntry {
    constructor(target, namedParameters = {}) {
        super();
        this['__mx_target'] = target;
        this.mainAxisPosition = namedParameters.mainAxisPosition;
        this.crossAxisPosition = namedParameters.crossAxisPosition;
        this.className = 'SliverHitTestEntry';
    }
}
export { SliverHitTestEntry };
class SliverLogicalParentData extends ParentData {
}
export { SliverLogicalParentData };
class SliverLogicalContainerParentData extends SliverLogicalParentData {
}
export { SliverLogicalContainerParentData };
class SliverPhysicalParentData extends ParentData {
}
export { SliverPhysicalParentData };
class SliverPhysicalContainerParentData extends SliverPhysicalParentData {
}
export { SliverPhysicalContainerParentData };
class RenderSliver extends RenderObject {
}
export { RenderSliver };
class RenderSliverHelpers extends MXDartClass {
}
export { RenderSliverHelpers };
class RenderSliverSingleBoxAdapter extends RenderSliver {
}
export { RenderSliverSingleBoxAdapter };
class RenderSliverToBoxAdapter extends RenderSliverSingleBoxAdapter {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.className = 'RenderSliverToBoxAdapter';
    }
}
export { RenderSliverToBoxAdapter };
