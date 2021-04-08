"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._RenderSliverLayoutBuilder = exports.SliverLayoutBuilder = void 0;
const sliver_1 = require("../rendering/sliver");
const layout_builder_1 = require("./layout-builder");
class SliverLayoutBuilder extends layout_builder_1.ConstrainedLayoutBuilder {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['builder'] = namedParameters.builder;
        this.className = 'SliverLayoutBuilder';
    }
}
exports.SliverLayoutBuilder = SliverLayoutBuilder;
class _RenderSliverLayoutBuilder extends sliver_1.RenderSliver {
}
exports._RenderSliverLayoutBuilder = _RenderSliverLayoutBuilder;
