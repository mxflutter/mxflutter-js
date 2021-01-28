//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { PaintingContext } from '../rendering/object';
import { ContainerBoxParentData, RenderBox, BoxHitTestResult } from '../rendering/box';
import { TapDownDetails } from '../gestures/tap';
import { ColorTween } from '../animation/tween';
import { Key } from '../foundation/key';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { Color, RRect, TextDirection, TextBaseline, Offset } from '../../../mx-dart-sdk';
import { StatefulWidget$, State$, BuildContext$, MultiChildRenderObjectWidget } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class CupertinoSegmentedControl extends StatefulWidget$ {
  children: Map<any, any>;
  groupValue: any;
  onValueChanged: any;
  unselectedColor: Color;
  selectedColor: Color;
  borderColor: Color;
  pressedColor: Color;
  padding: EdgeInsetsGeometry;
  public constructor(
    namedParameters: {
      key?: Key;
      children?: Map<any, any>;
      onValueChanged?: any;
      groupValue?: any;
      unselectedColor?: Color;
      selectedColor?: Color;
      borderColor?: Color;
      pressedColor?: Color;
      padding?: EdgeInsetsGeometry;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.children = namedParameters.children;
    this.onValueChanged = namedParameters.onValueChanged;
    this.groupValue = namedParameters.groupValue;
    this.unselectedColor = namedParameters.unselectedColor;
    this.selectedColor = namedParameters.selectedColor;
    this.borderColor = namedParameters.borderColor;
    this.pressedColor = namedParameters.pressedColor;
    this.padding = namedParameters.padding;
    this.className = 'CupertinoSegmentedControl';
  }
}
export { CupertinoSegmentedControl };
class _SegmentedControlState extends State$ {
  pressedKey: any;
  selectionControllers: Array<any>;
  childTweens: Array<any>;
  forwardBackgroundColorTween: ColorTween;
  reverseBackgroundColorTween: ColorTween;
  textColorTween: ColorTween;
  selectedColor: Color;
  unselectedColor: Color;
  borderColor: Color;
  pressedColor: Color;
}
export { _SegmentedControlState };
class _SegmentedControlRenderWidget extends MultiChildRenderObjectWidget {
  selectedIndex: number;
  pressedIndex: number;
  backgroundColors: Array<any>;
  borderColor: Color;
  public constructor(
    namedParameters: {
      key?: Key;
      children?: Array<any>;
      selectedIndex?: number;
      pressedIndex?: number;
      backgroundColors?: Array<any>;
      borderColor?: Color;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.children = namedParameters.children;
    this.selectedIndex = namedParameters.selectedIndex;
    this.pressedIndex = namedParameters.pressedIndex;
    this.backgroundColors = namedParameters.backgroundColors;
    this.borderColor = namedParameters.borderColor;
    this.className = '_SegmentedControlRenderWidget';
  }
}
export { _SegmentedControlRenderWidget };
class _SegmentedControlContainerBoxParentData extends ContainerBoxParentData {
  surroundingRect: RRect;
}
export { _SegmentedControlContainerBoxParentData };
class _RenderSegmentedControl extends RenderBox {
  selectedIndex: number;
  pressedIndex: number;
  textDirection: TextDirection;
  backgroundColors: Array<any>;
  borderColor: Color;
  public constructor(
    namedParameters: {
      selectedIndex?: number;
      pressedIndex?: number;
      textDirection?: TextDirection;
      backgroundColors?: Array<any>;
      borderColor?: Color;
    } = {},
  ) {
    super();
    this.selectedIndex = namedParameters.selectedIndex;
    this.pressedIndex = namedParameters.pressedIndex;
    this.textDirection = namedParameters.textDirection;
    this.backgroundColors = namedParameters.backgroundColors;
    this.borderColor = namedParameters.borderColor;
    this.className = '_RenderSegmentedControl';
  }
}
export { _RenderSegmentedControl };
