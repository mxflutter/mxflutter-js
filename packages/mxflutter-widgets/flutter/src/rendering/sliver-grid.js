//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { SliverMultiBoxAdaptorParentData, RenderSliverMultiBoxAdaptor, } from './sliver-multi-box-adaptor';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class SliverGridGeometry extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.scrollOffset = namedParameters.scrollOffset;
        this.crossAxisOffset = namedParameters.crossAxisOffset;
        this.mainAxisExtent = namedParameters.mainAxisExtent;
        this.crossAxisExtent = namedParameters.crossAxisExtent;
        this.className = 'SliverGridGeometry';
    }
}
export { SliverGridGeometry };
class SliverGridLayout extends MXDartClass {
}
export { SliverGridLayout };
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
export { SliverGridRegularTileLayout };
class SliverGridDelegate extends MXDartClass {
}
export { SliverGridDelegate };
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
export { SliverGridDelegateWithFixedCrossAxisCount };
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
export { SliverGridDelegateWithMaxCrossAxisExtent };
class SliverGridParentData extends SliverMultiBoxAdaptorParentData {
}
export { SliverGridParentData };
class RenderSliverGrid extends RenderSliverMultiBoxAdaptor {
    constructor(namedParameters = {}) {
        super();
        this.childManager = namedParameters.childManager;
        this.gridDelegate = namedParameters.gridDelegate;
        this.className = 'RenderSliverGrid';
    }
}
export { RenderSliverGrid };
