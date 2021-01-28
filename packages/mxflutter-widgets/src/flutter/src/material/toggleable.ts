//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { SemanticsConfiguration } from '../semantics/semantics';
import { BoxHitTestEntry } from '../rendering/box';
import { PointerEvent } from '../gestures/events';
import { PipelineOwner } from '../rendering/object';
import { TapGestureRecognizer, TapDownDetails, TapUpDetails } from '../gestures/tap';
import { Color, Offset, Canvas } from '../../../mx-dart-sdk';
import { TickerProvider } from '../scheduler/ticker';
import { Animation } from '../animation/animation';
import { CurvedAnimation } from '../animation/animations';
import { AnimationController } from '../animation/animation-controller';
import { RenderConstrainedBox } from '../rendering/proxy-box';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class RenderToggleable extends RenderConstrainedBox {
  positionController: AnimationController;
  position: CurvedAnimation;
  reactionController: AnimationController;
  reaction: Animation;
  reactionFocusFadeController: AnimationController;
  reactionFocusFade: Animation;
  reactionHoverFadeController: AnimationController;
  reactionHoverFade: Animation;
  hasFocus: boolean;
  hovering: boolean;
  vsync: TickerProvider;
  value: boolean;
  tristate: boolean;
  activeColor: Color;
  inactiveColor: Color;
  hoverColor: Color;
  focusColor: Color;
  reactionColor: Color;
  onChanged: any;
  tap: TapGestureRecognizer;
  downPosition: Offset;
}
export { RenderToggleable };
