"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderFlex = exports.CrossAxisAlignment = exports.MainAxisAlignment = exports.MainAxisSize = exports.FlexParentData = exports.FlexFit = void 0;
const box_1 = require("./box");
var FlexFit;
(function (FlexFit) {
    FlexFit["tight"] = "{ \"_name\": \"FlexFit.tight\", \"index\": 0 }";
    FlexFit["loose"] = "{ \"_name\": \"FlexFit.loose\", \"index\": 1 }";
})(FlexFit || (FlexFit = {}));
exports.FlexFit = FlexFit;
;
class FlexParentData extends box_1.ContainerBoxParentData {
}
exports.FlexParentData = FlexParentData;
var MainAxisSize;
(function (MainAxisSize) {
    MainAxisSize["min"] = "{ \"_name\": \"MainAxisSize.min\", \"index\": 0 }";
    MainAxisSize["max"] = "{ \"_name\": \"MainAxisSize.max\", \"index\": 1 }";
})(MainAxisSize || (MainAxisSize = {}));
exports.MainAxisSize = MainAxisSize;
;
var MainAxisAlignment;
(function (MainAxisAlignment) {
    MainAxisAlignment["start"] = "{ \"_name\": \"MainAxisAlignment.start\", \"index\": 0 }";
    MainAxisAlignment["end"] = "{ \"_name\": \"MainAxisAlignment.end\", \"index\": 1 }";
    MainAxisAlignment["center"] = "{ \"_name\": \"MainAxisAlignment.center\", \"index\": 2 }";
    MainAxisAlignment["spaceBetween"] = "{ \"_name\": \"MainAxisAlignment.spaceBetween\", \"index\": 3 }";
    MainAxisAlignment["spaceAround"] = "{ \"_name\": \"MainAxisAlignment.spaceAround\", \"index\": 4 }";
    MainAxisAlignment["spaceEvenly"] = "{ \"_name\": \"MainAxisAlignment.spaceEvenly\", \"index\": 5 }";
})(MainAxisAlignment || (MainAxisAlignment = {}));
exports.MainAxisAlignment = MainAxisAlignment;
;
var CrossAxisAlignment;
(function (CrossAxisAlignment) {
    CrossAxisAlignment["start"] = "{ \"_name\": \"CrossAxisAlignment.start\", \"index\": 0 }";
    CrossAxisAlignment["end"] = "{ \"_name\": \"CrossAxisAlignment.end\", \"index\": 1 }";
    CrossAxisAlignment["center"] = "{ \"_name\": \"CrossAxisAlignment.center\", \"index\": 2 }";
    CrossAxisAlignment["stretch"] = "{ \"_name\": \"CrossAxisAlignment.stretch\", \"index\": 3 }";
    CrossAxisAlignment["baseline"] = "{ \"_name\": \"CrossAxisAlignment.baseline\", \"index\": 4 }";
})(CrossAxisAlignment || (CrossAxisAlignment = {}));
exports.CrossAxisAlignment = CrossAxisAlignment;
;
class RenderFlex extends box_1.RenderBox {
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
exports.RenderFlex = RenderFlex;
