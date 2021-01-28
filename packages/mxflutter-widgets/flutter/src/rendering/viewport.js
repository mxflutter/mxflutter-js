//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { SemanticsTag } from '../semantics/semantics';
import { RenderBox } from './box';
import { RenderObject } from './object';
import { MXDartClass } from '@mxflutter/mxflutter-base';
var CacheExtentStyle;
(function (CacheExtentStyle) {
    CacheExtentStyle["pixel"] = "{ \"_name\": \"CacheExtentStyle.pixel\", \"index\": 0 }";
    CacheExtentStyle["viewport"] = "{ \"_name\": \"CacheExtentStyle.viewport\", \"index\": 1 }";
})(CacheExtentStyle || (CacheExtentStyle = {}));
export { CacheExtentStyle };
class RenderAbstractViewport extends RenderObject {
    static get defaultCacheExtent() {
        return 250.0;
    }
}
export { RenderAbstractViewport };
class RevealedOffset extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.offset = namedParameters.offset;
        this.rect = namedParameters.rect;
        this.className = 'RevealedOffset';
    }
}
export { RevealedOffset };
class RenderViewportBase extends RenderBox {
}
export { RenderViewportBase };
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
        var jsObj = new SemanticsTag();
        jsObj['className'] = 'RenderViewport';
        jsObj['constructorName'] = 'useTwoPaneSemantics';
        return jsObj;
    }
    static get excludeFromScrolling() {
        var jsObj = new SemanticsTag();
        jsObj['className'] = 'RenderViewport';
        jsObj['constructorName'] = 'excludeFromScrolling';
        return jsObj;
    }
}
export { RenderViewport };
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
export { RenderShrinkWrappingViewport };
