//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { RenderViewport } from '../rendering/viewport';
import { Viewport } from './viewport';
import { Matrix4 } from '../../../vector-math-64';
import { PipelineOwner, RenderObject, PaintingContext } from '../rendering/object';
import { RenderSliver, SliverHitTestResult } from '../rendering/sliver';
import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { ChangeNotifier } from '../foundation/change-notifier';
import { TickerProvider } from '../scheduler/ticker';
import { Simulation } from '../physics/simulation';
import { ScrollPosition } from './scroll-position';
import { ScrollContext } from './scroll-context';
import { DragStartDetails } from '../gestures/drag-details';
import { Curve } from '../animation/curves';
import { Duration } from '../../../mx-dart-sdk';
import { ScrollDragController, ScrollActivity, BallisticScrollActivity } from './scroll-activity';
import { FixedScrollMetrics } from './scroll-metrics';
import { ViewportOffset, ScrollDirection } from '../rendering/viewport-offset';
import { CustomScrollView } from './scroll-view';
import { Key } from '../foundation/key';
import { Clip, Offset } from '../../../mx-dart-sdk';
import { DragStartBehavior } from '../gestures/recognizer';
import { ScrollPhysics } from './scroll-physics';
import { Axis, AxisDirection } from '../painting/basic-types';
import { ScrollController } from './scroll-controller';
import {
  StatefulWidget$,
  Widget,
  BuildContext$,
  State$,
  InheritedWidget,
  SingleChildRenderObjectWidget,
} from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class NestedScrollView extends StatefulWidget$ {
  controller: ScrollController;
  scrollDirection: Axis;
  reverse: boolean;
  physics: ScrollPhysics;
  headerSliverBuilder: any;
  body: MXWidget;
  dragStartBehavior: DragStartBehavior;
  floatHeaderSlivers: boolean;
  clipBehavior: Clip;
  public constructor(
    namedParameters: {
      key?: Key;
      controller?: ScrollController;
      scrollDirection?: Axis;
      reverse?: boolean;
      physics?: ScrollPhysics;
      headerSliverBuilder?: any;
      body?: MXWidget;
      dragStartBehavior?: DragStartBehavior;
      floatHeaderSlivers?: boolean;
      clipBehavior?: Clip;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.controller = namedParameters.controller;
    this.scrollDirection = namedParameters.scrollDirection;
    this.reverse = namedParameters.reverse;
    this.physics = namedParameters.physics;
    this.headerSliverBuilder = namedParameters.headerSliverBuilder;
    this.body = namedParameters.body;
    this.dragStartBehavior = namedParameters.dragStartBehavior;
    this.floatHeaderSlivers = namedParameters.floatHeaderSlivers;
    this.clipBehavior = namedParameters.clipBehavior;
    this.className = 'NestedScrollView';
    // MX Modified begin
    this['children'] = [];
    // MX Modified end
  }
  // MX modified begin
  public preBuild(buildContext: any) {
    // TODO: innerBoxIsScrolled 暂时不支持，默认为false
    if (this.headerSliverBuilder) {
      this['children'] = this.headerSliverBuilder(buildContext);
      delete this.headerSliverBuilder;
    }
  }
  // MX modified end
}
export { NestedScrollView };
class NestedScrollViewState extends State$ {
  absorberHandle: SliverOverlapAbsorberHandle;
  coordinator: _NestedScrollCoordinator;
  lastHasScrolledBody: boolean;
}
export { NestedScrollViewState };
class _NestedScrollViewCustomScrollView extends CustomScrollView {
  handle: SliverOverlapAbsorberHandle;
  clipBehavior: Clip;
  public constructor(
    namedParameters: {
      scrollDirection?: Axis;
      reverse?: boolean;
      physics?: ScrollPhysics;
      controller?: ScrollController;
      slivers?: Array<any>;
      handle?: SliverOverlapAbsorberHandle;
      clipBehavior?: Clip;
      dragStartBehavior?: DragStartBehavior;
    } = {},
  ) {
    super();
    this.scrollDirection = namedParameters.scrollDirection;
    this.reverse = namedParameters.reverse;
    this.physics = namedParameters.physics;
    this.controller = namedParameters.controller;
    this.slivers = namedParameters.slivers;
    this.handle = namedParameters.handle;
    this.clipBehavior = namedParameters.clipBehavior;
    this.dragStartBehavior = namedParameters.dragStartBehavior;
    this.className = '_NestedScrollViewCustomScrollView';
  }
}
export { _NestedScrollViewCustomScrollView };
class _InheritedNestedScrollView extends InheritedWidget {
  state: NestedScrollViewState;
  public constructor(namedParameters: { key?: Key; state?: NestedScrollViewState; child?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.state = namedParameters.state;
    this.child = namedParameters.child;
    this.className = '_InheritedNestedScrollView';
  }
}
export { _InheritedNestedScrollView };
class _NestedScrollMetrics extends FixedScrollMetrics {
  minRange: number;
  maxRange: number;
  correctionOffset: number;
  public constructor(
    namedParameters: {
      minScrollExtent?: number;
      maxScrollExtent?: number;
      pixels?: number;
      viewportDimension?: number;
      axisDirection?: AxisDirection;
      minRange?: number;
      maxRange?: number;
      correctionOffset?: number;
    } = {},
  ) {
    super();
    this.minScrollExtent = namedParameters.minScrollExtent;
    this.maxScrollExtent = namedParameters.maxScrollExtent;
    this.pixels = namedParameters.pixels;
    this.viewportDimension = namedParameters.viewportDimension;
    this.axisDirection = namedParameters.axisDirection;
    this.minRange = namedParameters.minRange;
    this.maxRange = namedParameters.maxRange;
    this.correctionOffset = namedParameters.correctionOffset;
    this.className = '_NestedScrollMetrics';
  }
}
export { _NestedScrollMetrics };
class _NestedScrollCoordinator extends MXDartClass {
  state: NestedScrollViewState;
  parent: ScrollController;
  onHasScrolledBodyChanged: any;
  floatHeaderSlivers: boolean;
  outerController: _NestedScrollController;
  innerController: _NestedScrollController;
  userScrollDirection: ScrollDirection;
  currentDrag: ScrollDragController;
  public constructor(
    _state?: NestedScrollViewState,
    _parent?: ScrollController,
    _onHasScrolledBodyChanged?: any,
    _floatHeaderSlivers?: boolean,
  ) {
    super();
    this.state = _state;
    this.parent = _parent;
    this.onHasScrolledBodyChanged = _onHasScrolledBodyChanged;
    this.floatHeaderSlivers = _floatHeaderSlivers;
    this.className = '_NestedScrollCoordinator';
  }
}
export { _NestedScrollCoordinator };
class _NestedScrollController extends ScrollController {
  coordinator: _NestedScrollCoordinator;
  public constructor(
    coordinator?: _NestedScrollCoordinator,
    namedParameters: { initialScrollOffset?: number; debugLabel?: string } = {},
  ) {
    super();
    this.coordinator = coordinator;
    this.initialScrollOffset = namedParameters.initialScrollOffset;
    this.debugLabel = namedParameters.debugLabel;
    this.className = '_NestedScrollController';
  }
}
export { _NestedScrollController };
class _NestedScrollPosition extends ScrollPosition {
  coordinator: _NestedScrollCoordinator;
  parent: ScrollController;
  public constructor(
    namedParameters: {
      physics?: ScrollPhysics;
      context?: ScrollContext;
      initialPixels?: number;
      oldPosition?: ScrollPosition;
      debugLabel?: string;
      coordinator?: _NestedScrollCoordinator;
    } = {},
  ) {
    super();
    this.physics = namedParameters.physics;
    this.context = namedParameters.context;
    this['initialPixels'] = namedParameters.initialPixels;
    this['oldPosition'] = namedParameters.oldPosition;
    this.debugLabel = namedParameters.debugLabel;
    this.coordinator = namedParameters.coordinator;
    this.className = '_NestedScrollPosition';
  }
}
export { _NestedScrollPosition };
enum _NestedBallisticScrollActivityMode {
  outer = '{ "_name": "_NestedBallisticScrollActivityMode.outer", "index": 0 }',
  inner = '{ "_name": "_NestedBallisticScrollActivityMode.inner", "index": 1 }',
  independent = '{ "_name": "_NestedBallisticScrollActivityMode.independent", "index": 2 }',
}

export { _NestedBallisticScrollActivityMode };
class _NestedInnerBallisticScrollActivity extends BallisticScrollActivity {
  coordinator: _NestedScrollCoordinator;
  public constructor(
    coordinator?: _NestedScrollCoordinator,
    position?: _NestedScrollPosition,
    simulation?: Simulation,
    vsync?: TickerProvider,
  ) {
    super();
    this.coordinator = coordinator;
    this['position'] = position;
    this['simulation'] = simulation;
    this.className = '_NestedInnerBallisticScrollActivity';
  }
}
export { _NestedInnerBallisticScrollActivity };
class _NestedOuterBallisticScrollActivity extends BallisticScrollActivity {
  coordinator: _NestedScrollCoordinator;
  metrics: _NestedScrollMetrics;
  public constructor(
    coordinator?: _NestedScrollCoordinator,
    position?: _NestedScrollPosition,
    metrics?: _NestedScrollMetrics,
    simulation?: Simulation,
    vsync?: TickerProvider,
  ) {
    super();
    this.coordinator = coordinator;
    this['position'] = position;
    this.metrics = metrics;
    this['simulation'] = simulation;
    this.className = '_NestedOuterBallisticScrollActivity';
  }
}
export { _NestedOuterBallisticScrollActivity };
class SliverOverlapAbsorberHandle extends ChangeNotifier {
  writers: number;
  layoutExtent: number;
  scrollExtent: number;
}
export { SliverOverlapAbsorberHandle };
class SliverOverlapAbsorber extends SingleChildRenderObjectWidget {
  handle: SliverOverlapAbsorberHandle;
  public constructor(namedParameters: { key?: Key; handle?: SliverOverlapAbsorberHandle; sliver?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.handle = namedParameters.handle;
    this['sliver'] = namedParameters.sliver;
    this.className = 'SliverOverlapAbsorber';
  }
}
export { SliverOverlapAbsorber };
class RenderSliverOverlapAbsorber extends RenderSliver {
  handle: SliverOverlapAbsorberHandle;
  public constructor(namedParameters: { handle?: SliverOverlapAbsorberHandle; sliver?: RenderSliver } = {}) {
    super();
    this.handle = namedParameters.handle;
    this['sliver'] = namedParameters.sliver;
    this.className = 'RenderSliverOverlapAbsorber';
  }
}
export { RenderSliverOverlapAbsorber };
class SliverOverlapInjector extends SingleChildRenderObjectWidget {
  handle: SliverOverlapAbsorberHandle;
  public constructor(namedParameters: { key?: Key; handle?: SliverOverlapAbsorberHandle; sliver?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.handle = namedParameters.handle;
    this['sliver'] = namedParameters.sliver;
    this.className = 'SliverOverlapInjector';
  }
}
export { SliverOverlapInjector };
class RenderSliverOverlapInjector extends RenderSliver {
  currentLayoutExtent: number;
  currentMaxExtent: number;
  handle: SliverOverlapAbsorberHandle;
  public constructor(namedParameters: { handle?: SliverOverlapAbsorberHandle } = {}) {
    super();
    this.handle = namedParameters.handle;
    this.className = 'RenderSliverOverlapInjector';
  }
}
export { RenderSliverOverlapInjector };
class NestedScrollViewViewport extends Viewport {
  handle: SliverOverlapAbsorberHandle;
  public constructor(
    namedParameters: {
      key?: Key;
      axisDirection?: AxisDirection;
      crossAxisDirection?: AxisDirection;
      anchor?: number;
      offset?: ViewportOffset;
      center?: Key;
      slivers?: Array<any>;
      handle?: SliverOverlapAbsorberHandle;
      clipBehavior?: Clip;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.axisDirection = namedParameters.axisDirection;
    this.crossAxisDirection = namedParameters.crossAxisDirection;
    this.anchor = namedParameters.anchor;
    this.offset = namedParameters.offset;
    this.center = namedParameters.center;
    this['slivers'] = namedParameters.slivers;
    this.handle = namedParameters.handle;
    this.clipBehavior = namedParameters.clipBehavior;
    this.className = 'NestedScrollViewViewport';
  }
}
export { NestedScrollViewViewport };
class RenderNestedScrollViewViewport extends RenderViewport {
  handle: SliverOverlapAbsorberHandle;
  public constructor(
    namedParameters: {
      axisDirection?: AxisDirection;
      crossAxisDirection?: AxisDirection;
      offset?: ViewportOffset;
      anchor?: number;
      children?: Array<any>;
      center?: RenderSliver;
      handle?: SliverOverlapAbsorberHandle;
      clipBehavior?: Clip;
    } = {},
  ) {
    super();
    this.axisDirection = namedParameters.axisDirection;
    this.crossAxisDirection = namedParameters.crossAxisDirection;
    this.offset = namedParameters.offset;
    this.anchor = namedParameters.anchor;
    this['children'] = namedParameters.children;
    this.center = namedParameters.center;
    this.handle = namedParameters.handle;
    this.clipBehavior = namedParameters.clipBehavior;
    this.className = 'RenderNestedScrollViewViewport';
  }
}
export { RenderNestedScrollViewViewport };
