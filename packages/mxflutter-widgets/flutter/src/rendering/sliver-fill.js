//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { RenderSliverSingleBoxAdapter } from './sliver';
import { RenderSliverFixedExtentBoxAdaptor } from './sliver-fixed-extent-list';
class RenderSliverFillViewport extends RenderSliverFixedExtentBoxAdaptor {
    constructor(namedParameters = {}) {
        super();
        this.childManager = namedParameters.childManager;
        this.viewportFraction = namedParameters.viewportFraction;
        this.className = 'RenderSliverFillViewport';
    }
}
export { RenderSliverFillViewport };
class RenderSliverFillRemainingWithScrollable extends RenderSliverSingleBoxAdapter {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.className = 'RenderSliverFillRemainingWithScrollable';
    }
}
export { RenderSliverFillRemainingWithScrollable };
class RenderSliverFillRemaining extends RenderSliverSingleBoxAdapter {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.className = 'RenderSliverFillRemaining';
    }
}
export { RenderSliverFillRemaining };
class RenderSliverFillRemainingAndOverscroll extends RenderSliverSingleBoxAdapter {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this.className = 'RenderSliverFillRemainingAndOverscroll';
    }
}
export { RenderSliverFillRemainingAndOverscroll };
