"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderCustomMultiChildLayoutBox = exports.MultiChildLayoutDelegate = exports.MultiChildLayoutParentData = void 0;
const box_1 = require("./box");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class MultiChildLayoutParentData extends box_1.ContainerBoxParentData {
}
exports.MultiChildLayoutParentData = MultiChildLayoutParentData;
class MultiChildLayoutDelegate extends mxflutter_base_1.MXDartClass {
}
exports.MultiChildLayoutDelegate = MultiChildLayoutDelegate;
class RenderCustomMultiChildLayoutBox extends box_1.RenderBox {
    constructor(namedParameters = {}) {
        super();
        this['children'] = namedParameters.children;
        this.delegate = namedParameters.delegate;
        this.className = 'RenderCustomMultiChildLayoutBox';
    }
}
exports.RenderCustomMultiChildLayoutBox = RenderCustomMultiChildLayoutBox;
