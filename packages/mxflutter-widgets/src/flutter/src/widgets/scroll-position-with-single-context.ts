//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { DragStartDetails } from '../gestures/drag-details';
import { Curve } from '../animation/curves';
import { Duration } from '../../../mx-dart-sdk';
import { ScrollContext } from './scroll-context';
import { ScrollPhysics } from './scroll-physics';
import { ScrollDragController, ScrollActivity } from './scroll-activity';
import { ScrollDirection } from '../rendering/viewport-offset';
import { ScrollPosition } from './scroll-position';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class ScrollPositionWithSingleContext extends ScrollPosition {
  heldPreviousVelocity: number;
  userScrollDirection: ScrollDirection;
  currentDrag: ScrollDragController;
  public constructor(
    namedParameters: {
      physics?: ScrollPhysics;
      context?: ScrollContext;
      initialPixels?: number;
      keepScrollOffset?: boolean;
      oldPosition?: ScrollPosition;
      debugLabel?: string;
    } = {},
  ) {
    super();
    this.physics = namedParameters.physics;
    this.context = namedParameters.context;
    this['initialPixels'] = namedParameters.initialPixels;
    this.keepScrollOffset = namedParameters.keepScrollOffset;
    this['oldPosition'] = namedParameters.oldPosition;
    this.debugLabel = namedParameters.debugLabel;
    this.className = 'ScrollPositionWithSingleContext';
  }
}
export { ScrollPositionWithSingleContext };
