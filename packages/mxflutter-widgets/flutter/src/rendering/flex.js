//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { ContainerBoxParentData, RenderBox } from './box';
var FlexFit;
(function (FlexFit) {
    FlexFit["tight"] = "{ \"_name\": \"FlexFit.tight\", \"index\": 0 }";
    FlexFit["loose"] = "{ \"_name\": \"FlexFit.loose\", \"index\": 1 }";
})(FlexFit || (FlexFit = {}));
export { FlexFit };
class FlexParentData extends ContainerBoxParentData {
}
export { FlexParentData };
var MainAxisSize;
(function (MainAxisSize) {
    MainAxisSize["min"] = "{ \"_name\": \"MainAxisSize.min\", \"index\": 0 }";
    MainAxisSize["max"] = "{ \"_name\": \"MainAxisSize.max\", \"index\": 1 }";
})(MainAxisSize || (MainAxisSize = {}));
export { MainAxisSize };
var MainAxisAlignment;
(function (MainAxisAlignment) {
    MainAxisAlignment["start"] = "{ \"_name\": \"MainAxisAlignment.start\", \"index\": 0 }";
    MainAxisAlignment["end"] = "{ \"_name\": \"MainAxisAlignment.end\", \"index\": 1 }";
    MainAxisAlignment["center"] = "{ \"_name\": \"MainAxisAlignment.center\", \"index\": 2 }";
    MainAxisAlignment["spaceBetween"] = "{ \"_name\": \"MainAxisAlignment.spaceBetween\", \"index\": 3 }";
    MainAxisAlignment["spaceAround"] = "{ \"_name\": \"MainAxisAlignment.spaceAround\", \"index\": 4 }";
    MainAxisAlignment["spaceEvenly"] = "{ \"_name\": \"MainAxisAlignment.spaceEvenly\", \"index\": 5 }";
})(MainAxisAlignment || (MainAxisAlignment = {}));
export { MainAxisAlignment };
var CrossAxisAlignment;
(function (CrossAxisAlignment) {
    CrossAxisAlignment["start"] = "{ \"_name\": \"CrossAxisAlignment.start\", \"index\": 0 }";
    CrossAxisAlignment["end"] = "{ \"_name\": \"CrossAxisAlignment.end\", \"index\": 1 }";
    CrossAxisAlignment["center"] = "{ \"_name\": \"CrossAxisAlignment.center\", \"index\": 2 }";
    CrossAxisAlignment["stretch"] = "{ \"_name\": \"CrossAxisAlignment.stretch\", \"index\": 3 }";
    CrossAxisAlignment["baseline"] = "{ \"_name\": \"CrossAxisAlignment.baseline\", \"index\": 4 }";
})(CrossAxisAlignment || (CrossAxisAlignment = {}));
export { CrossAxisAlignment };
class RenderFlex extends RenderBox {
    constructor(namedParameters = {}) {
        super();
        this['children'] = namedParameters.children;
        this.direction = namedParameters.direction;
        this.mainAxisSize = namedParameters.mainAxisSize;
        this.mainAxisAlignment = namedParameters.mainAxisAlignment;
        this.crossAxisAlignment = namedParameters.crossAxisAlignment;
        this.textDirection = namedParameters.textDirection;
        this.verticalDirection = namedParameters.verticalDirection;
        this.textBaseline = namedParameters.textBaseline;
        this.clipBehavior = namedParameters.clipBehavior;
        this.className = 'RenderFlex';
    }
}
export { RenderFlex };
