// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { SemanticsTag } from '../semantics/semantics';
import { RenderSliver } from './sliver';
import { ViewportOffset } from './viewport-offset';
import { AxisDirection } from '../painting/basic-types';
import { RenderBox } from './box';
import { Rect, Clip } from '../../../mx-dart-sdk';
import { RenderObject } from './object';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum CacheExtentStyle {
  pixel = '{ "_name": "CacheExtentStyle.pixel", "index": 0 }',
  viewport = '{ "_name": "CacheExtentStyle.viewport", "index": 1 }',
};

export { CacheExtentStyle };
abstract class RenderAbstractViewport extends RenderObject {
  static get defaultCacheExtent() {
    return 250.0;
  }
}
export { RenderAbstractViewport };
class RevealedOffset extends MXDartClass {
  offset: number;
  rect: Rect;
  public constructor(namedParameters: {offset?: number, rect?: Rect} = {}) {
    super();
    this.offset = namedParameters.offset;
    this.rect = namedParameters.rect;
    this.className = 'RevealedOffset';
  }
}
export { RevealedOffset };
abstract class RenderViewportBase extends RenderBox {
  axisDirection: AxisDirection;
  crossAxisDirection: AxisDirection;
  offset: ViewportOffset;
  cacheExtent: number;
  calculatedCacheExtent: number;
  cacheExtentStyle: CacheExtentStyle;
  clipBehavior: Clip;
}
export { RenderViewportBase };
class RenderViewport extends RenderViewportBase {
  anchor: number;
  center: RenderSliver;
  minScrollExtent: number;
  maxScrollExtent: number;
  hasVisualOverflow: boolean;
  public constructor(namedParameters: {axisDirection?: AxisDirection, crossAxisDirection?: AxisDirection, offset?: ViewportOffset, anchor?: number, children?: Array<any>, center?: RenderSliver, cacheExtent?: number, cacheExtentStyle?: CacheExtentStyle, clipBehavior?: Clip} = {}) {
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
  maxScrollExtent: number;
  shrinkWrapExtent: number;
  hasVisualOverflow: boolean;
  public constructor(namedParameters: {axisDirection?: AxisDirection, crossAxisDirection?: AxisDirection, offset?: ViewportOffset, clipBehavior?: Clip, children?: Array<any>} = {}) {
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
