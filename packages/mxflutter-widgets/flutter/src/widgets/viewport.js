//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { MultiChildRenderObjectWidget, MultiChildRenderObjectElement } from './framework';
class Viewport extends MultiChildRenderObjectWidget {
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
export { Viewport };
class _ViewportElement extends MultiChildRenderObjectElement {
    constructor(widget) {
        super();
        this['widget'] = widget;
        this.className = '_ViewportElement';
    }
}
export { _ViewportElement };
class ShrinkWrappingViewport extends MultiChildRenderObjectWidget {
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
export { ShrinkWrappingViewport };
