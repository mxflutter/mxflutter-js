// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { RenderBox } from './box';
import { TextDirection } from '../../../mx-dart-sdk';
import { AlignmentGeometry } from '../painting/alignment';
import { Curve } from '../animation/curves';
import { Duration } from '../../../mx-dart-sdk';
import { TickerProvider } from '../scheduler/ticker';
import { SizeTween } from '../animation/tween';
import { CurvedAnimation } from '../animation/animations';
import { AnimationController } from '../animation/animation-controller';
import { RenderAligningShiftedBox } from './shifted-box';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum RenderAnimatedSizeState {
  start = '{ "_name": "RenderAnimatedSizeState.start", "index": 0 }',
  stable = '{ "_name": "RenderAnimatedSizeState.stable", "index": 1 }',
  changed = '{ "_name": "RenderAnimatedSizeState.changed", "index": 2 }',
  unstable = '{ "_name": "RenderAnimatedSizeState.unstable", "index": 3 }',
};

export { RenderAnimatedSizeState };
class RenderAnimatedSize extends RenderAligningShiftedBox {
  controller: AnimationController;
  animation: CurvedAnimation;
  sizeTween: SizeTween;
  hasVisualOverflow: boolean;
  lastValue: number;
  state: RenderAnimatedSizeState;
    // MX modified TickerProvider -> any
  vsync: any;
  public constructor(namedParameters: {vsync?: any, duration?: Duration, reverseDuration?: Duration, curve?: Curve, alignment?: AlignmentGeometry, textDirection?: TextDirection, child?: RenderBox} = {}) {
    super();
    this['duration'] = namedParameters.duration;
    this['reverseDuration'] = namedParameters.reverseDuration;
    this['curve'] = namedParameters.curve;
    this.alignment = namedParameters.alignment;
    this.textDirection = namedParameters.textDirection;
    this['child'] = namedParameters.child;
      // MX modified
    this.vsync = namedParameters.vsync;
    this.className = 'RenderAnimatedSize';
  }
}
export { RenderAnimatedSize };
