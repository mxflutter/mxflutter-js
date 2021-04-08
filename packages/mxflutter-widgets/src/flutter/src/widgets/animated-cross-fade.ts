// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Animation } from '../animation/animation';
import { AnimationController } from '../animation/animation-controller';
import { Key } from '../foundation/key';
import { AlignmentGeometry } from '../painting/alignment';
import { Curve } from '../animation/curves';
import { Duration } from '../../../mx-dart-sdk';
import { StatefulWidget, Widget, State } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum CrossFadeState {
  showFirst = '{ "_name": "CrossFadeState.showFirst", "index": 0 }',
  showSecond = '{ "_name": "CrossFadeState.showSecond", "index": 1 }',
};

export { CrossFadeState };
class AnimatedCrossFade extends StatefulWidget {
  firstChild: MXWidget;
  secondChild: MXWidget;
  crossFadeState: CrossFadeState;
  duration: Duration;
  reverseDuration: Duration;
  firstCurve: Curve;
  secondCurve: Curve;
  sizeCurve: Curve;
  alignment: AlignmentGeometry;
  layoutBuilder: any;
  public constructor(namedParameters: {key?: Key, firstChild?: MXWidget, secondChild?: MXWidget, firstCurve?: Curve, secondCurve?: Curve, sizeCurve?: Curve, alignment?: AlignmentGeometry, crossFadeState?: CrossFadeState, duration?: Duration, reverseDuration?: Duration, layoutBuilder?: any} = {}) {
    super();
    this.key = namedParameters.key;
    this.firstChild = namedParameters.firstChild;
    this.secondChild = namedParameters.secondChild;
    this.firstCurve = namedParameters.firstCurve;
    this.secondCurve = namedParameters.secondCurve;
    this.sizeCurve = namedParameters.sizeCurve;
    this.alignment = namedParameters.alignment;
    this.crossFadeState = namedParameters.crossFadeState;
    this.duration = namedParameters.duration;
    this.reverseDuration = namedParameters.reverseDuration;
    this.layoutBuilder = namedParameters.layoutBuilder;
    this.className = 'AnimatedCrossFade';
  }
}
export { AnimatedCrossFade };
class _AnimatedCrossFadeState extends State {
  controller: AnimationController;
  firstAnimation: Animation;
  secondAnimation: Animation;
}
export { _AnimatedCrossFadeState };
