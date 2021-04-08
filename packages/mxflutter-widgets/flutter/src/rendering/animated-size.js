"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderAnimatedSize = exports.RenderAnimatedSizeState = void 0;
const shifted_box_1 = require("./shifted-box");
var RenderAnimatedSizeState;
(function (RenderAnimatedSizeState) {
    RenderAnimatedSizeState["start"] = "{ \"_name\": \"RenderAnimatedSizeState.start\", \"index\": 0 }";
    RenderAnimatedSizeState["stable"] = "{ \"_name\": \"RenderAnimatedSizeState.stable\", \"index\": 1 }";
    RenderAnimatedSizeState["changed"] = "{ \"_name\": \"RenderAnimatedSizeState.changed\", \"index\": 2 }";
    RenderAnimatedSizeState["unstable"] = "{ \"_name\": \"RenderAnimatedSizeState.unstable\", \"index\": 3 }";
})(RenderAnimatedSizeState || (RenderAnimatedSizeState = {}));
exports.RenderAnimatedSizeState = RenderAnimatedSizeState;
;
class RenderAnimatedSize extends shifted_box_1.RenderAligningShiftedBox {
    constructor(namedParameters = {}) {
        super();
        this['duration'] = namedParameters.duration;
        this['reverseDuration'] = namedParameters.reverseDuration;
        this['curve'] = namedParameters.curve;
        this.alignment = namedParameters.alignment;
        this.textDirection = namedParameters.textDirection;
        this['child'] = namedParameters.child;
        // MX modified
        this.vsync = namedParameters.vsync;
        this.className = 'RenderAnimatedSize';
    }
}
exports.RenderAnimatedSize = RenderAnimatedSize;
