//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { BoxConstraints } from '../rendering/box';
import { Offset, Size } from '../../../mx-dart-sdk';
import { SingleChildLayoutDelegate } from '../rendering/shifted-box';
import { PointerEvent, PointerEnterEvent, PointerExitEvent } from '../gestures/events';
import { AnimationStatus, Animation } from '../animation/animation';
import { OverlayEntry } from '../widgets/overlay';
import { AnimationController } from '../animation/animation-controller';
import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { Key } from '../foundation/key';
import { Duration } from '../../../mx-dart-sdk';
import { TextStyle } from '../painting/text-style';
import { Decoration } from '../painting/decoration';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { StatefulWidget$, Widget, State$, BuildContext$, StatelessWidget$ } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class Tooltip extends StatefulWidget$ {
  message: string;
  height: number;
  padding: EdgeInsetsGeometry;
  margin: EdgeInsetsGeometry;
  verticalOffset: number;
  preferBelow: boolean;
  excludeFromSemantics: boolean;
  child: MXWidget;
  decoration: Decoration;
  textStyle: TextStyle;
  waitDuration: Duration;
  showDuration: Duration;
  public constructor(
    namedParameters: {
      key?: Key;
      message?: string;
      height?: number;
      padding?: EdgeInsetsGeometry;
      margin?: EdgeInsetsGeometry;
      verticalOffset?: number;
      preferBelow?: boolean;
      excludeFromSemantics?: boolean;
      decoration?: Decoration;
      textStyle?: TextStyle;
      waitDuration?: Duration;
      showDuration?: Duration;
      child?: MXWidget;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.message = namedParameters.message;
    this.height = namedParameters.height;
    this.padding = namedParameters.padding;
    this.margin = namedParameters.margin;
    this.verticalOffset = namedParameters.verticalOffset;
    this.preferBelow = namedParameters.preferBelow;
    this.excludeFromSemantics = namedParameters.excludeFromSemantics;
    this.decoration = namedParameters.decoration;
    this.textStyle = namedParameters.textStyle;
    this.waitDuration = namedParameters.waitDuration;
    this.showDuration = namedParameters.showDuration;
    this.child = namedParameters.child;
    this.className = 'Tooltip';
  }
}
export { Tooltip };
class _TooltipState extends State$ {
  height: number;
  padding: EdgeInsetsGeometry;
  margin: EdgeInsetsGeometry;
  decoration: Decoration;
  textStyle: TextStyle;
  verticalOffset: number;
  preferBelow: boolean;
  excludeFromSemantics: boolean;
  controller: AnimationController;
  entry: OverlayEntry;
  hideTimer: any;
  showTimer: any;
  showDuration: Duration;
  waitDuration: Duration;
  mouseIsConnected: boolean;
  longPressActivated: boolean;
}
export { _TooltipState };
class _TooltipPositionDelegate extends SingleChildLayoutDelegate {
  target: Offset;
  verticalOffset: number;
  preferBelow: boolean;
  public constructor(namedParameters: { target?: Offset; verticalOffset?: number; preferBelow?: boolean } = {}) {
    super();
    this.target = namedParameters.target;
    this.verticalOffset = namedParameters.verticalOffset;
    this.preferBelow = namedParameters.preferBelow;
    this.className = '_TooltipPositionDelegate';
  }
}
export { _TooltipPositionDelegate };
class _TooltipOverlay extends StatelessWidget$ {
  message: string;
  height: number;
  padding: EdgeInsetsGeometry;
  margin: EdgeInsetsGeometry;
  decoration: Decoration;
  textStyle: TextStyle;
  animation: Animation;
  target: Offset;
  verticalOffset: number;
  preferBelow: boolean;
  public constructor(
    namedParameters: {
      key?: Key;
      message?: string;
      height?: number;
      padding?: EdgeInsetsGeometry;
      margin?: EdgeInsetsGeometry;
      decoration?: Decoration;
      textStyle?: TextStyle;
      animation?: Animation;
      target?: Offset;
      verticalOffset?: number;
      preferBelow?: boolean;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.message = namedParameters.message;
    this.height = namedParameters.height;
    this.padding = namedParameters.padding;
    this.margin = namedParameters.margin;
    this.decoration = namedParameters.decoration;
    this.textStyle = namedParameters.textStyle;
    this.animation = namedParameters.animation;
    this.target = namedParameters.target;
    this.verticalOffset = namedParameters.verticalOffset;
    this.preferBelow = namedParameters.preferBelow;
    this.className = '_TooltipOverlay';
  }
}
export { _TooltipOverlay };
