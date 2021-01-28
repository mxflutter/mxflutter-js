//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { BoxHitTestResult, RenderBox } from './box';
import { PointerEvent } from '../gestures/events';
import { Matrix4 } from '../../../vector-math-64';
import { Offset, Canvas, Paint } from '../../../mx-dart-sdk';
import { HitTestResult, HitTestEntry } from '../gestures/hit-test';
import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { ScrollDirection } from './viewport-offset';
import { AxisDirection } from '../painting/basic-types';
import { Constraints, ParentData, RenderObject, PaintingContext } from './object';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum GrowthDirection {
  forward = '{ "_name": "GrowthDirection.forward", "index": 0 }',
  reverse = '{ "_name": "GrowthDirection.reverse", "index": 1 }',
}

export { GrowthDirection };
class SliverConstraints extends Constraints {
  axisDirection: AxisDirection;
  growthDirection: GrowthDirection;
  userScrollDirection: ScrollDirection;
  scrollOffset: number;
  precedingScrollExtent: number;
  overlap: number;
  remainingPaintExtent: number;
  crossAxisExtent: number;
  crossAxisDirection: AxisDirection;
  viewportMainAxisExtent: number;
  cacheOrigin: number;
  remainingCacheExtent: number;
  public constructor(
    namedParameters: {
      axisDirection?: AxisDirection;
      growthDirection?: GrowthDirection;
      userScrollDirection?: ScrollDirection;
      scrollOffset?: number;
      precedingScrollExtent?: number;
      overlap?: number;
      remainingPaintExtent?: number;
      crossAxisExtent?: number;
      crossAxisDirection?: AxisDirection;
      viewportMainAxisExtent?: number;
      remainingCacheExtent?: number;
      cacheOrigin?: number;
    } = {},
  ) {
    super();
    this.axisDirection = namedParameters.axisDirection;
    this.growthDirection = namedParameters.growthDirection;
    this.userScrollDirection = namedParameters.userScrollDirection;
    this.scrollOffset = namedParameters.scrollOffset;
    this.precedingScrollExtent = namedParameters.precedingScrollExtent;
    this.overlap = namedParameters.overlap;
    this.remainingPaintExtent = namedParameters.remainingPaintExtent;
    this.crossAxisExtent = namedParameters.crossAxisExtent;
    this.crossAxisDirection = namedParameters.crossAxisDirection;
    this.viewportMainAxisExtent = namedParameters.viewportMainAxisExtent;
    this.remainingCacheExtent = namedParameters.remainingCacheExtent;
    this.cacheOrigin = namedParameters.cacheOrigin;
    this.className = 'SliverConstraints';
  }
}
export { SliverConstraints };
class SliverGeometry extends MXDartClass {
  scrollExtent: number;
  paintOrigin: number;
  paintExtent: number;
  layoutExtent: number;
  maxPaintExtent: number;
  maxScrollObstructionExtent: number;
  hitTestExtent: number;
  visible: boolean;
  hasVisualOverflow: boolean;
  scrollOffsetCorrection: number;
  cacheExtent: number;
  public constructor(
    namedParameters: {
      scrollExtent?: number;
      paintExtent?: number;
      paintOrigin?: number;
      layoutExtent?: number;
      maxPaintExtent?: number;
      maxScrollObstructionExtent?: number;
      hitTestExtent?: number;
      visible?: boolean;
      hasVisualOverflow?: boolean;
      scrollOffsetCorrection?: number;
      cacheExtent?: number;
    } = {},
  ) {
    super();
    this.scrollExtent = namedParameters.scrollExtent;
    this.paintExtent = namedParameters.paintExtent;
    this.paintOrigin = namedParameters.paintOrigin;
    this.layoutExtent = namedParameters.layoutExtent;
    this.maxPaintExtent = namedParameters.maxPaintExtent;
    this.maxScrollObstructionExtent = namedParameters.maxScrollObstructionExtent;
    this.hitTestExtent = namedParameters.hitTestExtent;
    this.visible = namedParameters.visible;
    this.hasVisualOverflow = namedParameters.hasVisualOverflow;
    this.scrollOffsetCorrection = namedParameters.scrollOffsetCorrection;
    this.cacheExtent = namedParameters.cacheExtent;
    this.className = 'SliverGeometry';
  }
  static get zero() {
    var jsObj = new SliverGeometry();
    jsObj['className'] = 'SliverGeometry';
    jsObj['constructorName'] = 'zero';
    return jsObj;
  }
}
export { SliverGeometry };
class SliverHitTestResult extends HitTestResult {
  static wrap(result?: HitTestResult) {
    var jsObj = new SliverHitTestResult();
    jsObj['result'] = result;
    jsObj['constructorName'] = 'wrap';
    return jsObj;
  }
}
export { SliverHitTestResult };
class SliverHitTestEntry extends HitTestEntry {
  mainAxisPosition: number;
  crossAxisPosition: number;
  public constructor(
    target?: RenderSliver,
    namedParameters: { mainAxisPosition?: number; crossAxisPosition?: number } = {},
  ) {
    super();
    this['__mx_target'] = target;
    this.mainAxisPosition = namedParameters.mainAxisPosition;
    this.crossAxisPosition = namedParameters.crossAxisPosition;
    this.className = 'SliverHitTestEntry';
  }
}
export { SliverHitTestEntry };
class SliverLogicalParentData extends ParentData {
  layoutOffset: number;
}
export { SliverLogicalParentData };
class SliverLogicalContainerParentData extends SliverLogicalParentData {}
export { SliverLogicalContainerParentData };
class SliverPhysicalParentData extends ParentData {
  paintOffset: Offset;
}
export { SliverPhysicalParentData };
class SliverPhysicalContainerParentData extends SliverPhysicalParentData {}
export { SliverPhysicalContainerParentData };
abstract class RenderSliver extends RenderObject {
  geometry: SliverGeometry;
}
export { RenderSliver };
abstract class RenderSliverHelpers extends MXDartClass {}
export { RenderSliverHelpers };
abstract class RenderSliverSingleBoxAdapter extends RenderSliver {}
export { RenderSliverSingleBoxAdapter };
class RenderSliverToBoxAdapter extends RenderSliverSingleBoxAdapter {
  public constructor(namedParameters: { child?: RenderBox } = {}) {
    super();
    this['child'] = namedParameters.child;
    this.className = 'RenderSliverToBoxAdapter';
  }
}
export { RenderSliverToBoxAdapter };
