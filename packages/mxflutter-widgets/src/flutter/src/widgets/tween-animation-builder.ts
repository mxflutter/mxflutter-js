//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Curve } from '../animation/curves';
import { Duration } from '../../../mx-dart-sdk';
import { Key } from '../foundation/key';
import { Widget, BuildContext$ } from './framework';
import { Tween } from '../animation/tween';
import { ImplicitlyAnimatedWidget, AnimatedWidgetBaseState } from './implicit-animations';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class TweenAnimationBuilder extends ImplicitlyAnimatedWidget {
  tween: Tween;
  builder: any;
  child: MXWidget;
  public constructor(
    namedParameters: {
      key?: Key;
      tween?: Tween;
      duration?: Duration;
      curve?: Curve;
      builder?: any;
      onEnd?: any;
      child?: MXWidget;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.tween = namedParameters.tween;
    this.duration = namedParameters.duration;
    this.curve = namedParameters.curve;
    this.builder = namedParameters.builder;
    this.onEnd = namedParameters.onEnd;
    this.child = namedParameters.child;
    this.className = 'TweenAnimationBuilder';
  }
}
export { TweenAnimationBuilder };
class _TweenAnimationBuilderState extends AnimatedWidgetBaseState {
  currentTween: Tween;
}
export { _TweenAnimationBuilderState };
