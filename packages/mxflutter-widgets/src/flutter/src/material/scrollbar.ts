// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Animation } from '../animation/animation';
import { AnimationController } from '../animation/animation-controller';
import { ScrollbarPainter } from '../widgets/scrollbar';
import { Key } from '../foundation/key';
import { Radius, TextDirection, Color } from '../../../mx-dart-sdk';
import { ScrollController } from '../widgets/scroll-controller';
import { StatefulWidget, Widget, State } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class Scrollbar extends StatefulWidget {
  child: MXWidget;
  controller: ScrollController;
  isAlwaysShown: boolean;
  thickness: number;
  radius: Radius;
  public constructor(namedParameters: {key?: Key, child?: MXWidget, controller?: ScrollController, isAlwaysShown?: boolean, thickness?: number, radius?: Radius} = {}) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.controller = namedParameters.controller;
    this.isAlwaysShown = namedParameters.isAlwaysShown;
    this.thickness = namedParameters.thickness;
    this.radius = namedParameters.radius;
    this.className = 'Scrollbar';
  }
}
export { Scrollbar };
class _ScrollbarState extends State {
  materialPainter: ScrollbarPainter;
  textDirection: TextDirection;
  themeColor: Color;
  useCupertinoScrollbar: boolean;
  fadeoutAnimationController: AnimationController;
  fadeoutOpacityAnimation: Animation;
  fadeoutTimer: any;
}
export { _ScrollbarState };
