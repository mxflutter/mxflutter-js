//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { Clip } from '../../../mx-dart-sdk';
import { CacheExtentStyle, RenderViewport, RenderShrinkWrappingViewport } from '../rendering/viewport';
import { Key } from '../foundation/key';
import { ViewportOffset } from '../rendering/viewport-offset';
import { AxisDirection } from '../painting/basic-types';
import { MultiChildRenderObjectWidget, BuildContext$, MultiChildRenderObjectElement, Element$ } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class Viewport extends MultiChildRenderObjectWidget {
  axisDirection: AxisDirection;
  crossAxisDirection: AxisDirection;
  anchor: number;
  offset: ViewportOffset;
  center: Key;
  cacheExtent: number;
  cacheExtentStyle: CacheExtentStyle;
  clipBehavior: Clip;
  public constructor(
    namedParameters: {
      key?: Key;
      axisDirection?: AxisDirection;
      crossAxisDirection?: AxisDirection;
      anchor?: number;
      offset?: ViewportOffset;
      center?: Key;
      cacheExtent?: number;
      cacheExtentStyle?: CacheExtentStyle;
      clipBehavior?: Clip;
      slivers?: Array<any>;
    } = {},
  ) {
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
  public constructor(widget?: Viewport) {
    super();
    this['widget'] = widget;
    this.className = '_ViewportElement';
  }
}
export { _ViewportElement };
class ShrinkWrappingViewport extends MultiChildRenderObjectWidget {
  axisDirection: AxisDirection;
  crossAxisDirection: AxisDirection;
  offset: ViewportOffset;
  clipBehavior: Clip;
  public constructor(
    namedParameters: {
      key?: Key;
      axisDirection?: AxisDirection;
      crossAxisDirection?: AxisDirection;
      offset?: ViewportOffset;
      clipBehavior?: Clip;
      slivers?: Array<any>;
    } = {},
  ) {
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
