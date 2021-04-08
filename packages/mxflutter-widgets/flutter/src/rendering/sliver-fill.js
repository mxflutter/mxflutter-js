"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderSliverFillRemainingAndOverscroll = exports.RenderSliverFillRemaining = exports.RenderSliverFillRemainingWithScrollable = exports.RenderSliverFillViewport = void 0;
const sliver_1 = require("./sliver");
const sliver_fixed_extent_list_1 = require("./sliver-fixed-extent-list");
class RenderSliverFillViewport extends sliver_fixed_extent_list_1.RenderSliverFixedExtentBoxAdaptor {
    constructor(namedParameters = {}) {
        super();
        this.childManager = namedParameters.childManager;
        this.viewportFraction = namedParameters.viewportFraction;
        this.className = 'RenderSliverFillViewport';
    }
}
exports.RenderSliverFillViewport = RenderSliverFillViewport;
class RenderSliverFillRemainingWithScrollable extends sliver_1.RenderSliverSingleBoxAdapter {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.className = 'RenderSliverFillRemainingWithScrollable';
    }
}
exports.RenderSliverFillRemainingWithScrollable = RenderSliverFillRemainingWithScrollable;
class RenderSliverFillRemaining extends sliver_1.RenderSliverSingleBoxAdapter {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.className = 'RenderSliverFillRemaining';
    }
}
exports.RenderSliverFillRemaining = RenderSliverFillRemaining;
class RenderSliverFillRemainingAndOverscroll extends sliver_1.RenderSliverSingleBoxAdapter {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.className = 'RenderSliverFillRemainingAndOverscroll';
    }
}
exports.RenderSliverFillRemainingAndOverscroll = RenderSliverFillRemainingAndOverscroll;
