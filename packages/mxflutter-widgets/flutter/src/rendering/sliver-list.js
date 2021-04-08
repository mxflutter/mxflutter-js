"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderSliverList = void 0;
const sliver_multi_box_adaptor_1 = require("./sliver-multi-box-adaptor");
class RenderSliverList extends sliver_multi_box_adaptor_1.RenderSliverMultiBoxAdaptor {
    constructor(namedParameters = {}) {
        super();
        this['childManager'] = namedParameters.childManager;
        this.className = 'RenderSliverList';
    }
}
exports.RenderSliverList = RenderSliverList;
