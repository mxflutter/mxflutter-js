// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Key } from '../foundation/key';
import { Curve } from '../animation/curves';
import { Duration } from '../../../mx-dart-sdk';
import { Widget, StatefulWidget, State } from './framework';
import { Animation } from '../animation/animation';
import { AnimationController } from '../animation/animation-controller';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class _ChildEntry extends MXDartClass {
  controller: AnimationController;
  animation: Animation;
  transition: MXWidget;
  widgetChild: MXWidget;
  public constructor(namedParameters: {controller?: AnimationController, animation?: Animation, transition?: MXWidget, widgetChild?: MXWidget} = {}) {
    super();
    this.controller = namedParameters.controller;
    this.animation = namedParameters.animation;
    this.transition = namedParameters.transition;
    this.widgetChild = namedParameters.widgetChild;
    this.className = '_ChildEntry';
  }
}
export { _ChildEntry };
class AnimatedSwitcher extends StatefulWidget {
  child: MXWidget;
  duration: Duration;
  reverseDuration: Duration;
  switchInCurve: Curve;
  switchOutCurve: Curve;
  transitionBuilder: any;
  layoutBuilder: any;
  public constructor(namedParameters: {key?: Key, child?: MXWidget, duration?: Duration, reverseDuration?: Duration, switchInCurve?: Curve, switchOutCurve?: Curve, transitionBuilder?: any, layoutBuilder?: any} = {}) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.duration = namedParameters.duration;
    this.reverseDuration = namedParameters.reverseDuration;
    this.switchInCurve = namedParameters.switchInCurve;
    this.switchOutCurve = namedParameters.switchOutCurve;
    this.transitionBuilder = namedParameters.transitionBuilder;
    this.layoutBuilder = namedParameters.layoutBuilder;
    this.className = 'AnimatedSwitcher';
  }
}
export { AnimatedSwitcher };
class _AnimatedSwitcherState extends State {
  currentEntry: _ChildEntry;
  outgoingEntries: Set<any>;
  outgoingWidgets: Array<any>;
  childNumber: number;
}
export { _AnimatedSwitcherState };
