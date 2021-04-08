"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderSliverGrid = exports.SliverGridParentData = exports.SliverGridDelegateWithMaxCrossAxisExtent = exports.SliverGridDelegateWithFixedCrossAxisCount = exports.SliverGridDelegate = exports.SliverGridRegularTileLayout = exports.SliverGridLayout = exports.SliverGridGeometry = void 0;
const sliver_multi_box_adaptor_1 = require("./sliver-multi-box-adaptor");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class SliverGridGeometry extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.scrollOffset = namedParameters.scrollOffset;
        this.crossAxisOffset = namedParameters.crossAxisOffset;
        this.mainAxisExtent = namedParameters.mainAxisExtent;
        this.crossAxisExtent = namedParameters.crossAxisExtent;
        this.className = 'SliverGridGeometry';
    }
}
exports.SliverGridGeometry = SliverGridGeometry;
class SliverGridLayout extends mxflutter_base_1.MXDartClass {
}
exports.SliverGridLayout = SliverGridLayout;
class SliverGridRegularTileLayout extends SliverGridLayout {
    constructor(namedParameters = {}) {
        super();
        this.crossAxisCount = namedParameters.crossAxisCount;
        this.mainAxisStride = namedParameters.mainAxisStride;
        this.crossAxisStride = namedParameters.crossAxisStride;
        this.childMainAxisExtent = namedParameters.childMainAxisExtent;
        this.childCrossAxisExtent = namedParameters.childCrossAxisExtent;
        this.reverseCrossAxis = namedParameters.reverseCrossAxis;
        this.className = 'SliverGridRegularTileLayout';
    }
}
exports.SliverGridRegularTileLayout = SliverGridRegularTileLayout;
class SliverGridDelegate extends mxflutter_base_1.MXDartClass {
}
exports.SliverGridDelegate = SliverGridDelegate;
class SliverGridDelegateWithFixedCrossAxisCount extends SliverGridDelegate {
    constructor(namedParameters = {}) {
        super();
        this.crossAxisCount = namedParameters.crossAxisCount;
        this.mainAxisSpacing = namedParameters.mainAxisSpacing;
        this.crossAxisSpacing = namedParameters.crossAxisSpacing;
        this.childAspectRatio = namedParameters.childAspectRatio;
        this.className = 'SliverGridDelegateWithFixedCrossAxisCount';
    }
}
exports.SliverGridDelegateWithFixedCrossAxisCount = SliverGridDelegateWithFixedCrossAxisCount;
class SliverGridDelegateWithMaxCrossAxisExtent extends SliverGridDelegate {
    constructor(namedParameters = {}) {
        super();
        this.maxCrossAxisExtent = namedParameters.maxCrossAxisExtent;
        this.mainAxisSpacing = namedParameters.mainAxisSpacing;
        this.crossAxisSpacing = namedParameters.crossAxisSpacing;
        this.childAspectRatio = namedParameters.childAspectRatio;
        this.className = 'SliverGridDelegateWithMaxCrossAxisExtent';
    }
}
exports.SliverGridDelegateWithMaxCrossAxisExtent = SliverGridDelegateWithMaxCrossAxisExtent;
class SliverGridParentData extends sliver_multi_box_adaptor_1.SliverMultiBoxAdaptorParentData {
}
exports.SliverGridParentData = SliverGridParentData;
class RenderSliverGrid extends sliver_multi_box_adaptor_1.RenderSliverMultiBoxAdaptor {
    constructor(namedParameters = {}) {
        super();
        this.childManager = namedParameters.childManager;
        this.gridDelegate = namedParameters.gridDelegate;
        this.className = 'RenderSliverGrid';
    }
}
exports.RenderSliverGrid = RenderSliverGrid;
