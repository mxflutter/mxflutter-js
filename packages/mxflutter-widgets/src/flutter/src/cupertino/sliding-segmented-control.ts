//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { DragDownDetails, DragUpdateDetails, DragEndDetails } from '../gestures/drag-details';
import { PointerEvent } from '../gestures/events';
import { PipelineOwner, PaintingContext } from '../rendering/object';
import { ContainerBoxParentData, RenderBox, BoxHitTestEntry, BoxHitTestResult } from '../rendering/box';
import { LongPressGestureRecognizer } from '../gestures/long-press';
import { HorizontalDragGestureRecognizer } from '../gestures/monodrag';
import { TapGestureRecognizer, TapUpDetails } from '../gestures/tap';
import { AnimationController } from '../animation/animation-controller';
import { Key } from '../foundation/key';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { StatefulWidget$, State$, BuildContext$, Widget, MultiChildRenderObjectWidget } from '../widgets/framework';
import { FontWeight, Color, Rect, Offset, TextBaseline } from '../../../mx-dart-sdk';
import { Tween } from '../animation/tween';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class _FontWeightTween extends Tween {
  public constructor(namedParameters: { begin?: FontWeight; end?: FontWeight } = {}) {
    super();
    this['begin'] = namedParameters.begin;
    this['end'] = namedParameters.end;
    this.className = '_FontWeightTween';
  }
}
export { _FontWeightTween };
class CupertinoSlidingSegmentedControl extends StatefulWidget$ {
  children: Map<any, any>;
  groupValue: any;
  onValueChanged: any;
  backgroundColor: Color;
  thumbColor: Color;
  padding: EdgeInsetsGeometry;
  public constructor(
    namedParameters: {
      key?: Key;
      children?: Map<any, any>;
      onValueChanged?: any;
      groupValue?: any;
      thumbColor?: Color;
      padding?: EdgeInsetsGeometry;
      backgroundColor?: Color;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.children = namedParameters.children;
    this.onValueChanged = namedParameters.onValueChanged;
    this.groupValue = namedParameters.groupValue;
    this.thumbColor = namedParameters.thumbColor;
    this.padding = namedParameters.padding;
    this.backgroundColor = namedParameters.backgroundColor;
    this.className = 'CupertinoSlidingSegmentedControl';
  }
}
export { CupertinoSlidingSegmentedControl };
class _SegmentedControlState extends State$ {
  highlightControllers: Map<any, any>;
  highlightTween: Tween;
  pressControllers: Map<any, any>;
  pressTween: Tween;
  keys: Array<any>;
  thumbController: AnimationController;
  separatorOpacityController: AnimationController;
  thumbScaleController: AnimationController;
  tap: TapGestureRecognizer;
  drag: HorizontalDragGestureRecognizer;
  longPress: LongPressGestureRecognizer;
  highlighted: any;
  pressed: any;
}
export { _SegmentedControlState };
class _SegmentedControlRenderWidget extends MultiChildRenderObjectWidget {
  selectedIndex: number;
  thumbColor: Color;
  state: _SegmentedControlState;
  public constructor(
    namedParameters: {
      key?: Key;
      children?: Array<any>;
      selectedIndex?: number;
      thumbColor?: Color;
      state?: _SegmentedControlState;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.children = namedParameters.children;
    this.selectedIndex = namedParameters.selectedIndex;
    this.thumbColor = namedParameters.thumbColor;
    this.state = namedParameters.state;
    this.className = '_SegmentedControlRenderWidget';
  }
}
export { _SegmentedControlRenderWidget };
class _ChildAnimationManifest extends MXDartClass {
  opacity: number;
  opacityTween: Tween;
  separatorOpacity: number;
  separatorTween: Tween;
  public constructor(namedParameters: { opacity?: number; separatorOpacity?: number } = {}) {
    super();
    this.opacity = namedParameters.opacity;
    this.separatorOpacity = namedParameters.separatorOpacity;
    this.className = '_ChildAnimationManifest';
  }
}
export { _ChildAnimationManifest };
class _SegmentedControlContainerBoxParentData extends ContainerBoxParentData {}
export { _SegmentedControlContainerBoxParentData };
class _RenderSegmentedControl extends RenderBox {
  state: _SegmentedControlState;
  childAnimations: Map<any, any>;
  currentThumbRect: Rect;
  currentThumbTween: Tween;
  thumbScaleTween: Tween;
  currentThumbScale: number;
  localDragOffset: Offset;
  startedOnSelectedSegment: boolean;
  needsThumbAnimationUpdate: boolean;
  highlightedIndex: number;
  pressedIndex: number;
  thumbColor: Color;
  public constructor(
    namedParameters: { selectedIndex?: number; thumbColor?: Color; state?: _SegmentedControlState } = {},
  ) {
    super();
    this['selectedIndex'] = namedParameters.selectedIndex;
    this.thumbColor = namedParameters.thumbColor;
    this.state = namedParameters.state;
    this.className = '_RenderSegmentedControl';
  }
}
export { _RenderSegmentedControl };
