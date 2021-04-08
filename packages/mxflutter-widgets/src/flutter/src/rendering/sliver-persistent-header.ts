// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Animation } from '../animation/animation';
import { AnimationController } from '../animation/animation-controller';
import { Duration } from '../../../mx-dart-sdk';
import { Curve } from '../animation/curves';
import { TickerProvider } from '../scheduler/ticker';
import { RenderSliver } from './sliver';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class OverScrollHeaderStretchConfiguration extends MXDartClass {
  stretchTriggerOffset: number;
  onStretchTrigger: any;
  public constructor(namedParameters: {stretchTriggerOffset?: number, onStretchTrigger?: any} = {}) {
    super();
    this.stretchTriggerOffset = namedParameters.stretchTriggerOffset;
    this.onStretchTrigger = namedParameters.onStretchTrigger;
    this.className = 'OverScrollHeaderStretchConfiguration';
  }
}
export { OverScrollHeaderStretchConfiguration };
class PersistentHeaderShowOnScreenConfiguration extends MXDartClass {
  minShowOnScreenExtent: number;
  maxShowOnScreenExtent: number;
  public constructor(namedParameters: {minShowOnScreenExtent?: number, maxShowOnScreenExtent?: number} = {}) {
    super();
    this.minShowOnScreenExtent = namedParameters.minShowOnScreenExtent;
    this.maxShowOnScreenExtent = namedParameters.maxShowOnScreenExtent;
    this.className = 'PersistentHeaderShowOnScreenConfiguration';
  }
}
export { PersistentHeaderShowOnScreenConfiguration };
abstract class RenderSliverPersistentHeader extends RenderSliver {
  lastStretchOffset: number;
  needsUpdateChild: boolean;
  lastShrinkOffset: number;
  lastOverlapsContent: boolean;
  stretchConfiguration: OverScrollHeaderStretchConfiguration;
}
export { RenderSliverPersistentHeader };
abstract class RenderSliverScrollingPersistentHeader extends RenderSliverPersistentHeader {
  childPosition: number;
}
export { RenderSliverScrollingPersistentHeader };
abstract class RenderSliverPinnedPersistentHeader extends RenderSliverPersistentHeader {
  showOnScreenConfiguration: PersistentHeaderShowOnScreenConfiguration;
}
export { RenderSliverPinnedPersistentHeader };
class FloatingHeaderSnapConfiguration extends MXDartClass {
  vsync: TickerProvider;
  curve: Curve;
  duration: Duration;
  public constructor(namedParameters: {vsync?: TickerProvider, curve?: Curve, duration?: Duration} = {}) {
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
  vsync: TickerProvider;
  snapConfiguration: FloatingHeaderSnapConfiguration;
  showOnScreenConfiguration: PersistentHeaderShowOnScreenConfiguration;
}
export { RenderSliverFloatingPersistentHeader };
abstract class RenderSliverFloatingPinnedPersistentHeader extends RenderSliverFloatingPersistentHeader {}
export { RenderSliverFloatingPinnedPersistentHeader };
