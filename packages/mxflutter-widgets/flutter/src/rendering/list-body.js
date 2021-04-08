"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderListBody = exports.ListBodyParentData = void 0;
const box_1 = require("./box");
class ListBodyParentData extends box_1.ContainerBoxParentData {
}
exports.ListBodyParentData = ListBodyParentData;
class RenderListBody extends box_1.RenderBox {
    constructor(namedParameters = {}) {
        super();
        this['children'] = namedParameters.children;
        this.axisDirection = namedParameters.axisDirection;
        this.className = 'RenderListBody';
    }
}
exports.RenderListBody = RenderListBody;
