//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { ContainerBoxParentData, RenderBox } from './box';
import { MXDartClass } from '@mxflutter/mxflutter-base';
var WrapAlignment;
(function (WrapAlignment) {
    WrapAlignment["start"] = "{ \"_name\": \"WrapAlignment.start\", \"index\": 0 }";
    WrapAlignment["end"] = "{ \"_name\": \"WrapAlignment.end\", \"index\": 1 }";
    WrapAlignment["center"] = "{ \"_name\": \"WrapAlignment.center\", \"index\": 2 }";
    WrapAlignment["spaceBetween"] = "{ \"_name\": \"WrapAlignment.spaceBetween\", \"index\": 3 }";
    WrapAlignment["spaceAround"] = "{ \"_name\": \"WrapAlignment.spaceAround\", \"index\": 4 }";
    WrapAlignment["spaceEvenly"] = "{ \"_name\": \"WrapAlignment.spaceEvenly\", \"index\": 5 }";
})(WrapAlignment || (WrapAlignment = {}));
export { WrapAlignment };
var WrapCrossAlignment;
(function (WrapCrossAlignment) {
    WrapCrossAlignment["start"] = "{ \"_name\": \"WrapCrossAlignment.start\", \"index\": 0 }";
    WrapCrossAlignment["end"] = "{ \"_name\": \"WrapCrossAlignment.end\", \"index\": 1 }";
    WrapCrossAlignment["center"] = "{ \"_name\": \"WrapCrossAlignment.center\", \"index\": 2 }";
})(WrapCrossAlignment || (WrapCrossAlignment = {}));
export { WrapCrossAlignment };
class _RunMetrics extends MXDartClass {
    constructor(mainAxisExtent, crossAxisExtent, childCount) {
        super();
        this.mainAxisExtent = mainAxisExtent;
        this.crossAxisExtent = crossAxisExtent;
        this.childCount = childCount;
        this.className = '_RunMetrics';
    }
}
export { _RunMetrics };
class WrapParentData extends ContainerBoxParentData {
}
export { WrapParentData };
class RenderWrap extends RenderBox {
    constructor(namedParameters = {}) {
        super();
        this['children'] = namedParameters.children;
        this.direction = namedParameters.direction;
        this.alignment = namedParameters.alignment;
        this.spacing = namedParameters.spacing;
        this.runAlignment = namedParameters.runAlignment;
        this.runSpacing = namedParameters.runSpacing;
        this.crossAxisAlignment = namedParameters.crossAxisAlignment;
        this.textDirection = namedParameters.textDirection;
        this.verticalDirection = namedParameters.verticalDirection;
        this.clipBehavior = namedParameters.clipBehavior;
        this.className = 'RenderWrap';
    }
}
export { RenderWrap };
