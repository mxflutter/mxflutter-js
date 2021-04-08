// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { RenderConstrainedBox } from '../rendering/proxy-box';
import { Animation } from '../animation/animation';
import { CurvedAnimation } from '../animation/animations';
import { AnimationController } from '../animation/animation-controller';
import { HorizontalDragGestureRecognizer } from '../gestures/monodrag';
import { TapGestureRecognizer } from '../gestures/tap';
import { Key } from '../foundation/key';
import { DragStartBehavior } from '../gestures/recognizer';
import { Color, TextDirection } from '../../../mx-dart-sdk';
import { StatefulWidget, State, LeafRenderObjectWidget } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class CupertinoSwitch extends StatefulWidget {
  value: boolean;
  onChanged: any;
  activeColor: Color;
  trackColor: Color;
  dragStartBehavior: DragStartBehavior;
  public constructor(namedParameters: {key?: Key, value?: boolean, onChanged?: any, activeColor?: Color, trackColor?: Color, dragStartBehavior?: DragStartBehavior} = {}) {
    super();
    this.key = namedParameters.key;
    this.value = namedParameters.value;
    this.onChanged = namedParameters.onChanged;
    this.activeColor = namedParameters.activeColor;
    this.trackColor = namedParameters.trackColor;
    this.dragStartBehavior = namedParameters.dragStartBehavior;
    this.className = 'CupertinoSwitch';
  }
}
export { CupertinoSwitch };
class _CupertinoSwitchState extends State {
  tap: TapGestureRecognizer;
  drag: HorizontalDragGestureRecognizer;
  positionController: AnimationController;
  position: CurvedAnimation;
  reactionController: AnimationController;
  reaction: Animation;
  needsPositionAnimation: boolean;
}
export { _CupertinoSwitchState };
class _CupertinoSwitchRenderObjectWidget extends LeafRenderObjectWidget {
  value: boolean;
  activeColor: Color;
  trackColor: Color;
  onChanged: any;
  state: _CupertinoSwitchState;
  textDirection: TextDirection;
  public constructor(namedParameters: {key?: Key, value?: boolean, activeColor?: Color, trackColor?: Color, onChanged?: any, textDirection?: TextDirection, state?: _CupertinoSwitchState} = {}) {
    super();
    this.key = namedParameters.key;
    this.value = namedParameters.value;
    this.activeColor = namedParameters.activeColor;
    this.trackColor = namedParameters.trackColor;
    this.onChanged = namedParameters.onChanged;
    this.textDirection = namedParameters.textDirection;
    this.state = namedParameters.state;
    this.className = '_CupertinoSwitchRenderObjectWidget';
  }
}
export { _CupertinoSwitchRenderObjectWidget };
class _RenderCupertinoSwitch extends RenderConstrainedBox {
  state: _CupertinoSwitchState;
  value: boolean;
  activeColor: Color;
  trackColor: Color;
  onChanged: any;
  textDirection: TextDirection;
  public constructor(namedParameters: {value?: boolean, activeColor?: Color, trackColor?: Color, onChanged?: any, textDirection?: TextDirection, state?: _CupertinoSwitchState} = {}) {
    super();
    this.value = namedParameters.value;
    this.activeColor = namedParameters.activeColor;
    this.trackColor = namedParameters.trackColor;
    this.onChanged = namedParameters.onChanged;
    this.textDirection = namedParameters.textDirection;
    this.state = namedParameters.state;
    this.className = '_RenderCupertinoSwitch';
  }
}
export { _RenderCupertinoSwitch };
