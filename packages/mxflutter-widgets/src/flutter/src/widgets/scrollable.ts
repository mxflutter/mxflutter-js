//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Intent, Action } from './actions';
import { ScrollMetrics } from './scroll-metrics';
import { RenderBox } from '../rendering/box';
import { SemanticsNode, SemanticsConfiguration } from '../semantics/semantics';
import { RenderProxyBox } from '../rendering/proxy-box';
import { PointerScrollEvent, PointerSignalEvent, PointerEvent } from '../gestures/events';
import { DragDownDetails, DragStartDetails, DragUpdateDetails, DragEndDetails } from '../gestures/drag-details';
import { VerticalDragGestureRecognizer, HorizontalDragGestureRecognizer } from '../gestures/monodrag';
import { ScrollHoldController } from './scroll-activity';
import { Drag } from '../gestures/drag';
import { ScrollBehavior } from './scroll-configuration';
import { ScrollPositionAlignmentPolicy, ScrollPosition } from './scroll-position';
import { Curve } from '../animation/curves';
import { Duration } from '../../../mx-dart-sdk';
import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { Key } from '../foundation/key';
import { DragStartBehavior } from '../gestures/recognizer';
import { ScrollPhysics } from './scroll-physics';
import { ScrollController } from './scroll-controller';
import { AxisDirection, Axis } from '../painting/basic-types';
import {
  StatefulWidget$,
  BuildContext$,
  InheritedWidget,
  Widget,
  State$,
  GlobalKey,
  SingleChildRenderObjectWidget,
} from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class Scrollable extends StatefulWidget$ {
  axisDirection: AxisDirection;
  controller: ScrollController;
  physics: ScrollPhysics;
  viewportBuilder: any;
  incrementCalculator: any;
  excludeFromSemantics: boolean;
  semanticChildCount: number;
  dragStartBehavior: DragStartBehavior;
  public constructor(
    namedParameters: {
      key?: Key;
      axisDirection?: AxisDirection;
      controller?: ScrollController;
      physics?: ScrollPhysics;
      viewportBuilder?: any;
      incrementCalculator?: any;
      excludeFromSemantics?: boolean;
      semanticChildCount?: number;
      dragStartBehavior?: DragStartBehavior;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.axisDirection = namedParameters.axisDirection;
    this.controller = namedParameters.controller;
    this.physics = namedParameters.physics;
    this.viewportBuilder = namedParameters.viewportBuilder;
    this.incrementCalculator = namedParameters.incrementCalculator;
    this.excludeFromSemantics = namedParameters.excludeFromSemantics;
    this.semanticChildCount = namedParameters.semanticChildCount;
    this.dragStartBehavior = namedParameters.dragStartBehavior;
    this.className = 'Scrollable';
  }
}
export { Scrollable };
class _ScrollableScope extends InheritedWidget {
  scrollable: ScrollableState;
  position: ScrollPosition;
  public constructor(
    namedParameters: { key?: Key; scrollable?: ScrollableState; position?: ScrollPosition; child?: MXWidget } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.scrollable = namedParameters.scrollable;
    this.position = namedParameters.position;
    this.child = namedParameters.child;
    this.className = '_ScrollableScope';
  }
}
export { _ScrollableScope };
class ScrollableState extends State$ {
  position: ScrollPosition;
  configuration: ScrollBehavior;
  physics: ScrollPhysics;
  scrollSemanticsKey: GlobalKey;
  gestureDetectorKey: GlobalKey;
  ignorePointerKey: GlobalKey;
  gestureRecognizers: Map<any, any>;
  shouldIgnorePointer: boolean;
  lastCanDrag: boolean;
  lastAxisDirection: Axis;
  drag: Drag;
  hold: ScrollHoldController;
}
export { ScrollableState };
class _ScrollSemantics extends SingleChildRenderObjectWidget {
  position: ScrollPosition;
  allowImplicitScrolling: boolean;
  semanticChildCount: number;
  public constructor(
    namedParameters: {
      key?: Key;
      position?: ScrollPosition;
      allowImplicitScrolling?: boolean;
      semanticChildCount?: number;
      child?: MXWidget;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.position = namedParameters.position;
    this.allowImplicitScrolling = namedParameters.allowImplicitScrolling;
    this.semanticChildCount = namedParameters.semanticChildCount;
    this.child = namedParameters.child;
    this.className = '_ScrollSemantics';
  }
}
export { _ScrollSemantics };
class _RenderScrollSemantics extends RenderProxyBox {
  position: ScrollPosition;
  allowImplicitScrolling: boolean;
  semanticChildCount: number;
  innerNode: SemanticsNode;
  public constructor(
    namedParameters: {
      position?: ScrollPosition;
      allowImplicitScrolling?: boolean;
      semanticChildCount?: number;
      child?: RenderBox;
    } = {},
  ) {
    super();
    this.position = namedParameters.position;
    this.allowImplicitScrolling = namedParameters.allowImplicitScrolling;
    this.semanticChildCount = namedParameters.semanticChildCount;
    this['child'] = namedParameters.child;
    this.className = '_RenderScrollSemantics';
  }
}
export { _RenderScrollSemantics };
enum ScrollIncrementType {
  line = '{ "_name": "ScrollIncrementType.line", "index": 0 }',
  page = '{ "_name": "ScrollIncrementType.page", "index": 1 }',
}

export { ScrollIncrementType };
class ScrollIncrementDetails extends MXDartClass {
  type: ScrollIncrementType;
  metrics: ScrollMetrics;
  public constructor(namedParameters: { type?: ScrollIncrementType; metrics?: ScrollMetrics } = {}) {
    super();
    this.type = namedParameters.type;
    this.metrics = namedParameters.metrics;
    this.className = 'ScrollIncrementDetails';
  }
}
export { ScrollIncrementDetails };
class ScrollIntent extends Intent {
  direction: AxisDirection;
  type: ScrollIncrementType;
  public constructor(namedParameters: { direction?: AxisDirection; type?: ScrollIncrementType } = {}) {
    super();
    this.direction = namedParameters.direction;
    this.type = namedParameters.type;
    this.className = 'ScrollIntent';
  }
}
export { ScrollIntent };
class ScrollAction extends Action {}
export { ScrollAction };
