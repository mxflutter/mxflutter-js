//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { ScrollDirection } from './viewport-offset';
import { Animation } from '../animation/animation';
import { AnimationController } from '../animation/animation-controller';
import { Duration } from '../../../mx-dart-sdk';
import { Curve } from '../animation/curves';
import { TickerProvider } from '../scheduler/ticker';
import { RenderBox } from './box';
import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { SemanticsConfiguration } from '../semantics/semantics';
import { Offset } from '../../../mx-dart-sdk';
import { Matrix4 } from '../../../vector-math-64';
import { RenderObject, PaintingContext } from './object';
import { RenderSliver, SliverConstraints, SliverHitTestResult } from './sliver';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class OverScrollHeaderStretchConfiguration extends MXDartClass {
  stretchTriggerOffset: number;
  onStretchTrigger: any;
  public constructor(namedParameters: { stretchTriggerOffset?: number; onStretchTrigger?: any } = {}) {
    super();
    this.stretchTriggerOffset = namedParameters.stretchTriggerOffset;
    this.onStretchTrigger = namedParameters.onStretchTrigger;
    this.className = 'OverScrollHeaderStretchConfiguration';
  }
}
export { OverScrollHeaderStretchConfiguration };
abstract class RenderSliverPersistentHeader extends RenderSliver {
  lastStretchOffset: number;
  needsUpdateChild: boolean;
  lastShrinkOffset: number;
  lastOverlapsContent: boolean;
  stretchConfiguration: OverScrollHeaderStretchConfiguration;
  excludeFromSemanticsScrolling: boolean;
}
export { RenderSliverPersistentHeader };
abstract class RenderSliverScrollingPersistentHeader extends RenderSliverPersistentHeader {
  childPosition: number;
}
export { RenderSliverScrollingPersistentHeader };
abstract class RenderSliverPinnedPersistentHeader extends RenderSliverPersistentHeader {}
export { RenderSliverPinnedPersistentHeader };
class FloatingHeaderSnapConfiguration extends MXDartClass {
  vsync: TickerProvider;
  curve: Curve;
  duration: Duration;
  public constructor(namedParameters: { vsync?: TickerProvider; curve?: Curve; duration?: Duration } = {}) {
    super();
    this.curve = namedParameters.curve;
    this.duration = namedParameters.duration;
    this.className = 'FloatingHeaderSnapConfiguration';
  }
}
export { FloatingHeaderSnapConfiguration };
abstract class RenderSliverFloatingPersistentHeader extends RenderSliverPersistentHeader {
  controller: AnimationController;
  animation: Animation;
  lastActualScrollOffset: number;
  effectiveScrollOffset: number;
  childPosition: number;
  snapConfiguration: FloatingHeaderSnapConfiguration;
}
export { RenderSliverFloatingPersistentHeader };
abstract class RenderSliverFloatingPinnedPersistentHeader extends RenderSliverFloatingPersistentHeader {}
export { RenderSliverFloatingPinnedPersistentHeader };
