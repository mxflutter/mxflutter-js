//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { RenderBox } from './box';
import { RenderObject } from './object';
import {
  SliverMultiBoxAdaptorParentData,
  RenderSliverMultiBoxAdaptor,
  RenderSliverBoxChildManager,
} from './sliver-multi-box-adaptor';
import { SliverConstraints } from './sliver';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class SliverGridGeometry extends MXDartClass {
  scrollOffset: number;
  crossAxisOffset: number;
  mainAxisExtent: number;
  crossAxisExtent: number;
  public constructor(
    namedParameters: {
      scrollOffset?: number;
      crossAxisOffset?: number;
      mainAxisExtent?: number;
      crossAxisExtent?: number;
    } = {},
  ) {
    super();
    this.scrollOffset = namedParameters.scrollOffset;
    this.crossAxisOffset = namedParameters.crossAxisOffset;
    this.mainAxisExtent = namedParameters.mainAxisExtent;
    this.crossAxisExtent = namedParameters.crossAxisExtent;
    this.className = 'SliverGridGeometry';
  }
}
export { SliverGridGeometry };
abstract class SliverGridLayout extends MXDartClass {}
export { SliverGridLayout };
class SliverGridRegularTileLayout extends SliverGridLayout {
  crossAxisCount: number;
  mainAxisStride: number;
  crossAxisStride: number;
  childMainAxisExtent: number;
  childCrossAxisExtent: number;
  reverseCrossAxis: boolean;
  public constructor(
    namedParameters: {
      crossAxisCount?: number;
      mainAxisStride?: number;
      crossAxisStride?: number;
      childMainAxisExtent?: number;
      childCrossAxisExtent?: number;
      reverseCrossAxis?: boolean;
    } = {},
  ) {
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
abstract class SliverGridDelegate extends MXDartClass {}
export { SliverGridDelegate };
class SliverGridDelegateWithFixedCrossAxisCount extends SliverGridDelegate {
  crossAxisCount: number;
  mainAxisSpacing: number;
  crossAxisSpacing: number;
  childAspectRatio: number;
  public constructor(
    namedParameters: {
      crossAxisCount?: number;
      mainAxisSpacing?: number;
      crossAxisSpacing?: number;
      childAspectRatio?: number;
    } = {},
  ) {
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
  maxCrossAxisExtent: number;
  mainAxisSpacing: number;
  crossAxisSpacing: number;
  childAspectRatio: number;
  public constructor(
    namedParameters: {
      maxCrossAxisExtent?: number;
      mainAxisSpacing?: number;
      crossAxisSpacing?: number;
      childAspectRatio?: number;
    } = {},
  ) {
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
  crossAxisOffset: number;
}
export { SliverGridParentData };
class RenderSliverGrid extends RenderSliverMultiBoxAdaptor {
  gridDelegate: SliverGridDelegate;
  public constructor(
    namedParameters: { childManager?: RenderSliverBoxChildManager; gridDelegate?: SliverGridDelegate } = {},
  ) {
    super();
    this.childManager = namedParameters.childManager;
    this.gridDelegate = namedParameters.gridDelegate;
    this.className = 'RenderSliverGrid';
  }
}
export { RenderSliverGrid };
