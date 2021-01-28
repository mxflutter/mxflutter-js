//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { ProxyAnimation } from '../animation/animations';
import { Key } from '../foundation/key';
import { Animation, AnimationStatus } from '../animation/animation';
import { StatefulWidget$, Widget, State$, BuildContext$ } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class DualTransitionBuilder extends StatefulWidget$ {
  animation: Animation;
  forwardBuilder: any;
  reverseBuilder: any;
  child: MXWidget;
  public constructor(
    namedParameters: {
      key?: Key;
      animation?: Animation;
      forwardBuilder?: any;
      reverseBuilder?: any;
      child?: MXWidget;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.animation = namedParameters.animation;
    this.forwardBuilder = namedParameters.forwardBuilder;
    this.reverseBuilder = namedParameters.reverseBuilder;
    this.child = namedParameters.child;
    this.className = 'DualTransitionBuilder';
  }
}
export { DualTransitionBuilder };
class _DualTransitionBuilderState extends State$ {
  effectiveAnimationStatus: AnimationStatus;
  forwardAnimation: ProxyAnimation;
  reverseAnimation: ProxyAnimation;
}
export { _DualTransitionBuilderState };
