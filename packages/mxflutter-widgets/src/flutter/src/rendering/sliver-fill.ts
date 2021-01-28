//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { RenderBox } from './box';
import { RenderSliverSingleBoxAdapter } from './sliver';
import { RenderSliverBoxChildManager } from './sliver-multi-box-adaptor';
import { RenderSliverFixedExtentBoxAdaptor } from './sliver-fixed-extent-list';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class RenderSliverFillViewport extends RenderSliverFixedExtentBoxAdaptor {
  viewportFraction: number;
  public constructor(namedParameters: { childManager?: RenderSliverBoxChildManager; viewportFraction?: number } = {}) {
    super();
    this.childManager = namedParameters.childManager;
    this.viewportFraction = namedParameters.viewportFraction;
    this.className = 'RenderSliverFillViewport';
  }
}
export { RenderSliverFillViewport };
class RenderSliverFillRemainingWithScrollable extends RenderSliverSingleBoxAdapter {
  public constructor(namedParameters: { child?: RenderBox } = {}) {
    super();
    this['child'] = namedParameters.child;
    this.className = 'RenderSliverFillRemainingWithScrollable';
  }
}
export { RenderSliverFillRemainingWithScrollable };
class RenderSliverFillRemaining extends RenderSliverSingleBoxAdapter {
  public constructor(namedParameters: { child?: RenderBox } = {}) {
    super();
    this['child'] = namedParameters.child;
    this.className = 'RenderSliverFillRemaining';
  }
}
export { RenderSliverFillRemaining };
class RenderSliverFillRemainingAndOverscroll extends RenderSliverSingleBoxAdapter {
  public constructor(namedParameters: { child?: RenderBox } = {}) {
    super();
    this['child'] = namedParameters.child;
    this.className = 'RenderSliverFillRemainingAndOverscroll';
  }
}
export { RenderSliverFillRemainingAndOverscroll };
