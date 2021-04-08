"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderShrinkWrappingViewport = exports.RenderViewport = exports.RenderViewportBase = exports.RevealedOffset = exports.RenderAbstractViewport = exports.CacheExtentStyle = void 0;
const semantics_1 = require("../semantics/semantics");
const box_1 = require("./box");
const object_1 = require("./object");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
var CacheExtentStyle;
(function (CacheExtentStyle) {
    CacheExtentStyle["pixel"] = "{ \"_name\": \"CacheExtentStyle.pixel\", \"index\": 0 }";
    CacheExtentStyle["viewport"] = "{ \"_name\": \"CacheExtentStyle.viewport\", \"index\": 1 }";
})(CacheExtentStyle || (CacheExtentStyle = {}));
exports.CacheExtentStyle = CacheExtentStyle;
;
class RenderAbstractViewport extends object_1.RenderObject {
    static get defaultCacheExtent() {
        return 250.0;
    }
}
exports.RenderAbstractViewport = RenderAbstractViewport;
class RevealedOffset extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.offset = namedParameters.offset;
        this.rect = namedParameters.rect;
        this.className = 'RevealedOffset';
    }
}
exports.RevealedOffset = RevealedOffset;
class RenderViewportBase extends box_1.RenderBox {
}
exports.RenderViewportBase = RenderViewportBase;
class RenderViewport extends RenderViewportBase {
    constructor(namedParameters = {}) {
        super();
        this.axisDirection = namedParameters.axisDirection;
        this.crossAxisDirection = namedParameters.crossAxisDirection;
        this.offset = namedParameters.offset;
        this.anchor = namedParameters.anchor;
        this['children'] = namedParameters.children;
        this.center = namedParameters.center;
        this.cacheExtent = namedParameters.cacheExtent;
        this.cacheExtentStyle = namedParameters.cacheExtentStyle;
        this.clipBehavior = namedParameters.clipBehavior;
        this.className = 'RenderViewport';
    }
    static get useTwoPaneSemantics() {
        var jsObj = new semantics_1.SemanticsTag();
        jsObj['className'] = 'RenderViewport';
        jsObj['constructorName'] = 'useTwoPaneSemantics';
        return jsObj;
    }
    static get excludeFromScrolling() {
        var jsObj = new semantics_1.SemanticsTag();
        jsObj['className'] = 'RenderViewport';
        jsObj['constructorName'] = 'excludeFromScrolling';
        return jsObj;
    }
}
exports.RenderViewport = RenderViewport;
class RenderShrinkWrappingViewport extends RenderViewportBase {
    constructor(namedParameters = {}) {
        super();
        this.axisDirection = namedParameters.axisDirection;
        this.crossAxisDirection = namedParameters.crossAxisDirection;
        this.offset = namedParameters.offset;
        this.clipBehavior = namedParameters.clipBehavior;
        this['children'] = namedParameters.children;
        this.className = 'RenderShrinkWrappingViewport';
    }
}
exports.RenderShrinkWrappingViewport = RenderShrinkWrappingViewport;
