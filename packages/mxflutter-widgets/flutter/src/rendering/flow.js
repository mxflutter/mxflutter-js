"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderFlow = exports.FlowParentData = exports.FlowDelegate = exports.FlowPaintingContext = void 0;
const box_1 = require("./box");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class FlowPaintingContext extends mxflutter_base_1.MXDartClass {
}
exports.FlowPaintingContext = FlowPaintingContext;
class FlowDelegate extends mxflutter_base_1.MXDartClass {
}
exports.FlowDelegate = FlowDelegate;
class FlowParentData extends box_1.ContainerBoxParentData {
}
exports.FlowParentData = FlowParentData;
class RenderFlow extends box_1.RenderBox {
    constructor(namedParameters = {}) {
        super();
        this['children'] = namedParameters.children;
        this.delegate = namedParameters.delegate;
        this.className = 'RenderFlow';
    }
}
exports.RenderFlow = RenderFlow;
