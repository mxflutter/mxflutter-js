"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.DebugOverflowIndicatorMixin = exports._OverflowRegionData = exports._OverflowSide = void 0;
const object_1 = require("./object");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
var _OverflowSide;
(function (_OverflowSide) {
    _OverflowSide["left"] = "{ \"_name\": \"_OverflowSide.left\", \"index\": 0 }";
    _OverflowSide["top"] = "{ \"_name\": \"_OverflowSide.top\", \"index\": 1 }";
    _OverflowSide["bottom"] = "{ \"_name\": \"_OverflowSide.bottom\", \"index\": 2 }";
    _OverflowSide["right"] = "{ \"_name\": \"_OverflowSide.right\", \"index\": 3 }";
})(_OverflowSide || (_OverflowSide = {}));
exports._OverflowSide = _OverflowSide;
;
class _OverflowRegionData extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.rect = namedParameters.rect;
        this.label = namedParameters.label;
        this.labelOffset = namedParameters.labelOffset;
        this.rotation = namedParameters.rotation;
        this.side = namedParameters.side;
        this.className = '_OverflowRegionData';
    }
}
exports._OverflowRegionData = _OverflowRegionData;
class DebugOverflowIndicatorMixin extends object_1.RenderObject {
}
exports.DebugOverflowIndicatorMixin = DebugOverflowIndicatorMixin;
