// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { LongPressGestureRecognizer } from '../gestures/long-press';
import { Drag } from '../gestures/drag';
import { Animation } from '../animation/animation';
import { AnimationController } from '../animation/animation-controller';
import { ScrollbarPainter } from '../widgets/scrollbar';
import { Key } from '../foundation/key';
import { Radius, PointerDeviceKind } from '../../../mx-dart-sdk';
import { ScrollController } from '../widgets/scroll-controller';
import { StatefulWidget, Widget, State, GlobalKey } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class CupertinoScrollbar extends StatefulWidget {
  child: MXWidget;
  controller: ScrollController;
  isAlwaysShown: boolean;
  thickness: number;
  thicknessWhileDragging: number;
  radius: Radius;
  radiusWhileDragging: Radius;
  public constructor(namedParameters: {key?: Key, controller?: ScrollController, isAlwaysShown?: boolean, thickness?: number, thicknessWhileDragging?: number, radius?: Radius, radiusWhileDragging?: Radius, child?: MXWidget} = {}) {
    super();
    this.key = namedParameters.key;
    this.controller = namedParameters.controller;
    this.isAlwaysShown = namedParameters.isAlwaysShown;
    this.thickness = namedParameters.thickness;
    this.thicknessWhileDragging = namedParameters.thicknessWhileDragging;
    this.radius = namedParameters.radius;
    this.radiusWhileDragging = namedParameters.radiusWhileDragging;
    this.child = namedParameters.child;
    this.className = 'CupertinoScrollbar';
  }
  static get defaultThickness() {
    return 3.0;
  }
  static get defaultThicknessWhileDragging() {
    return 8.0;
  }
  static get defaultRadius() {
    var jsObj = new Radius();
    jsObj['className'] = 'CupertinoScrollbar';
    jsObj['constructorName'] = 'defaultRadius';
    return jsObj;
  }
  static get defaultRadiusWhileDragging() {
    var jsObj = new Radius();
    jsObj['className'] = 'CupertinoScrollbar';
    jsObj['constructorName'] = 'defaultRadiusWhileDragging';
    return jsObj;
  }
}
export { CupertinoScrollbar };
class _CupertinoScrollbarState extends State {
  customPaintKey: GlobalKey;
  painter: ScrollbarPainter;
  fadeoutAnimationController: AnimationController;
  fadeoutOpacityAnimation: Animation;
  thicknessAnimationController: AnimationController;
  fadeoutTimer: any;
  dragScrollbarPositionY: number;
  drag: Drag;
  currentController: ScrollController;
  pressStartY: number;
}
export { _CupertinoScrollbarState };
class _ThumbPressGestureRecognizer extends LongPressGestureRecognizer {
  customPaintKey: GlobalKey;
  public constructor(namedParameters: {postAcceptSlopTolerance?: number, kind?: PointerDeviceKind, debugOwner?: any, customPaintKey?: GlobalKey} = {}) {
    super();
    this.postAcceptSlopTolerance = namedParameters.postAcceptSlopTolerance;
    this['kind'] = namedParameters.kind;
    this.debugOwner = namedParameters.debugOwner;
    this.customPaintKey = namedParameters.customPaintKey;
    this.className = '_ThumbPressGestureRecognizer';
  }
}
export { _ThumbPressGestureRecognizer };
