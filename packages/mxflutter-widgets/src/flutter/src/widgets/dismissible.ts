//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Velocity } from '../gestures/velocity-tracker';
import { DragStartDetails, DragUpdateDetails, DragEndDetails } from '../gestures/drag-details';
import { AnimationController } from '../animation/animation-controller';
import { Size } from '../../../mx-dart-sdk';
import { Animation, AnimationStatus } from '../animation/animation';
import { Axis } from '../painting/basic-types';
import { CustomClipper } from '../rendering/proxy-box';
import { Key } from '../foundation/key';
import { DragStartBehavior } from '../gestures/recognizer';
import { Duration } from '../../../mx-dart-sdk';
import { StatefulWidget$, Widget, State$, BuildContext$ } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum DismissDirection {
  vertical = '{ "_name": "DismissDirection.vertical", "index": 0 }',
  horizontal = '{ "_name": "DismissDirection.horizontal", "index": 1 }',
  endToStart = '{ "_name": "DismissDirection.endToStart", "index": 2 }',
  startToEnd = '{ "_name": "DismissDirection.startToEnd", "index": 3 }',
  up = '{ "_name": "DismissDirection.up", "index": 4 }',
  down = '{ "_name": "DismissDirection.down", "index": 5 }',
}

export { DismissDirection };
class Dismissible extends StatefulWidget$ {
  child: MXWidget;
  background: MXWidget;
  secondaryBackground: MXWidget;
  confirmDismiss: any;
  onResize: any;
  onDismissed: any;
  direction: DismissDirection;
  resizeDuration: Duration;
  dismissThresholds: Map<any, any>;
  movementDuration: Duration;
  crossAxisEndOffset: number;
  dragStartBehavior: DragStartBehavior;
  public constructor(
    namedParameters: {
      key?: Key;
      child?: MXWidget;
      background?: MXWidget;
      secondaryBackground?: MXWidget;
      confirmDismiss?: any;
      onResize?: any;
      onDismissed?: any;
      direction?: DismissDirection;
      resizeDuration?: Duration;
      dismissThresholds?: Map<any, any>;
      movementDuration?: Duration;
      crossAxisEndOffset?: number;
      dragStartBehavior?: DragStartBehavior;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.background = namedParameters.background;
    this.secondaryBackground = namedParameters.secondaryBackground;
    this.confirmDismiss = namedParameters.confirmDismiss;
    this.onResize = namedParameters.onResize;
    this.onDismissed = namedParameters.onDismissed;
    this.direction = namedParameters.direction;
    this.resizeDuration = namedParameters.resizeDuration;
    this.dismissThresholds = namedParameters.dismissThresholds;
    this.movementDuration = namedParameters.movementDuration;
    this.crossAxisEndOffset = namedParameters.crossAxisEndOffset;
    this.dragStartBehavior = namedParameters.dragStartBehavior;
    this.className = 'Dismissible';
  }
}
export { Dismissible };
class _DismissibleClipper extends CustomClipper {
  axis: Axis;
  moveAnimation: Animation;
  public constructor(namedParameters: { axis?: Axis; moveAnimation?: Animation } = {}) {
    super();
    this.axis = namedParameters.axis;
    this.moveAnimation = namedParameters.moveAnimation;
    this.className = '_DismissibleClipper';
  }
}
export { _DismissibleClipper };
enum _FlingGestureKind {
  none = '{ "_name": "_FlingGestureKind.none", "index": 0 }',
  forward = '{ "_name": "_FlingGestureKind.forward", "index": 1 }',
  reverse = '{ "_name": "_FlingGestureKind.reverse", "index": 2 }',
}

export { _FlingGestureKind };
class _DismissibleState extends State$ {
  moveController: AnimationController;
  moveAnimation: Animation;
  resizeController: AnimationController;
  resizeAnimation: Animation;
  dragExtent: number;
  dragUnderway: boolean;
  sizePriorToCollapse: Size;
}
export { _DismissibleState };
