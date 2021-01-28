//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { PointerDownEvent } from '../gestures/events';
import { PointerDeviceKind } from '../../../mx-dart-sdk';
import { ScrollNotification } from '../widgets/scroll-notification';
import {
  LongPressStartDetails,
  LongPressMoveUpdateDetails,
  LongPressEndDetails,
  LongPressGestureRecognizer,
} from '../gestures/long-press';
import { Duration } from '../../../mx-dart-sdk';
import { Drag } from '../gestures/drag';
import { Animation } from '../animation/animation';
import { AnimationController } from '../animation/animation-controller';
import { ScrollbarPainter } from '../widgets/scrollbar';
import { Key } from '../foundation/key';
import { ScrollController } from '../widgets/scroll-controller';
import { StatefulWidget$, Widget, State$, GlobalKey, BuildContext$ } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class CupertinoScrollbar extends StatefulWidget$ {
  child: MXWidget;
  controller: ScrollController;
  isAlwaysShown: boolean;
  public constructor(
    namedParameters: { key?: Key; controller?: ScrollController; isAlwaysShown?: boolean; child?: MXWidget } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.controller = namedParameters.controller;
    this.isAlwaysShown = namedParameters.isAlwaysShown;
    this.child = namedParameters.child;
    this.className = 'CupertinoScrollbar';
  }
}
export { CupertinoScrollbar };
class _CupertinoScrollbarState extends State$ {
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
  public constructor(
    namedParameters: {
      postAcceptSlopTolerance?: number;
      kind?: PointerDeviceKind;
      debugOwner?: any;
      customPaintKey?: GlobalKey;
    } = {},
  ) {
    super();
    this.postAcceptSlopTolerance = namedParameters.postAcceptSlopTolerance;
    this['kind'] = namedParameters.kind;
    this.debugOwner = namedParameters.debugOwner;
    this.customPaintKey = namedParameters.customPaintKey;
    this.className = '_ThumbPressGestureRecognizer';
  }
}
export { _ThumbPressGestureRecognizer };
