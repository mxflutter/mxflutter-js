"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShrinkWrappingViewport = exports._ViewportElement = exports.Viewport = void 0;
const framework_1 = require("./framework");
class Viewport extends framework_1.MultiChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.axisDirection = namedParameters.axisDirection;
        this.crossAxisDirection = namedParameters.crossAxisDirection;
        this.anchor = namedParameters.anchor;
        this.offset = namedParameters.offset;
        this.center = namedParameters.center;
        this.cacheExtent = namedParameters.cacheExtent;
        this.cacheExtentStyle = namedParameters.cacheExtentStyle;
        this.clipBehavior = namedParameters.clipBehavior;
        this['slivers'] = namedParameters.slivers;
        this.className = 'Viewport';
    }
}
exports.Viewport = Viewport;
class _ViewportElement extends framework_1.MultiChildRenderObjectElement {
    constructor(widget) {
        super();
        this['widget'] = widget;
        this.className = '_ViewportElement';
    }
}
exports._ViewportElement = _ViewportElement;
class ShrinkWrappingViewport extends framework_1.MultiChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.axisDirection = namedParameters.axisDirection;
        this.crossAxisDirection = namedParameters.crossAxisDirection;
        this.offset = namedParameters.offset;
        this.clipBehavior = namedParameters.clipBehavior;
        this['slivers'] = namedParameters.slivers;
        this.className = 'ShrinkWrappingViewport';
    }
}
exports.ShrinkWrappingViewport = ShrinkWrappingViewport;
