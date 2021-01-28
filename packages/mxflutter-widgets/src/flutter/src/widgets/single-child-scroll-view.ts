//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Curve } from '../animation/curves';
import { Duration } from '../../../mx-dart-sdk';
import { Matrix4 } from '../../../vector-math-64';
import { RenderObject, PipelineOwner, PaintingContext } from '../rendering/object';
import { RenderBox, BoxConstraints, BoxHitTestResult } from '../rendering/box';
import { ViewportOffset } from '../rendering/viewport-offset';
import { Key } from '../foundation/key';
import { Clip, Offset, Rect } from '../../../mx-dart-sdk';
import { DragStartBehavior } from '../gestures/recognizer';
import { ScrollPhysics } from './scroll-physics';
import { ScrollController } from './scroll-controller';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { Axis, AxisDirection } from '../painting/basic-types';
import { StatelessWidget$, Widget, BuildContext$, SingleChildRenderObjectWidget } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class SingleChildScrollView extends StatelessWidget$ {
  scrollDirection: Axis;
  reverse: boolean;
  padding: EdgeInsetsGeometry;
  controller: ScrollController;
  primary: boolean;
  physics: ScrollPhysics;
  child: MXWidget;
  dragStartBehavior: DragStartBehavior;
  clipBehavior: Clip;
  public constructor(
    namedParameters: {
      key?: Key;
      scrollDirection?: Axis;
      reverse?: boolean;
      padding?: EdgeInsetsGeometry;
      primary?: boolean;
      physics?: ScrollPhysics;
      controller?: ScrollController;
      child?: MXWidget;
      dragStartBehavior?: DragStartBehavior;
      clipBehavior?: Clip;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.scrollDirection = namedParameters.scrollDirection;
    this.reverse = namedParameters.reverse;
    this.padding = namedParameters.padding;
    this.primary = namedParameters.primary;
    this.physics = namedParameters.physics;
    this.controller = namedParameters.controller;
    this.child = namedParameters.child;
    this.dragStartBehavior = namedParameters.dragStartBehavior;
    this.clipBehavior = namedParameters.clipBehavior;
    this.className = 'SingleChildScrollView';
  }
}
export { SingleChildScrollView };
class _SingleChildViewport extends SingleChildRenderObjectWidget {
  axisDirection: AxisDirection;
  offset: ViewportOffset;
  clipBehavior: Clip;
  public constructor(
    namedParameters: {
      key?: Key;
      axisDirection?: AxisDirection;
      offset?: ViewportOffset;
      child?: MXWidget;
      clipBehavior?: Clip;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.axisDirection = namedParameters.axisDirection;
    this.offset = namedParameters.offset;
    this.child = namedParameters.child;
    this.clipBehavior = namedParameters.clipBehavior;
    this.className = '_SingleChildViewport';
  }
}
export { _SingleChildViewport };
class _RenderSingleChildViewport extends RenderBox {
  axisDirection: AxisDirection;
  offset: ViewportOffset;
  cacheExtent: number;
  clipBehavior: Clip;
  public constructor(
    namedParameters: {
      axisDirection?: AxisDirection;
      offset?: ViewportOffset;
      cacheExtent?: number;
      child?: RenderBox;
      clipBehavior?: Clip;
    } = {},
  ) {
    super();
    this.axisDirection = namedParameters.axisDirection;
    this.offset = namedParameters.offset;
    this.cacheExtent = namedParameters.cacheExtent;
    this['child'] = namedParameters.child;
    this.clipBehavior = namedParameters.clipBehavior;
    this.className = '_RenderSingleChildViewport';
  }
}
export { _RenderSingleChildViewport };
