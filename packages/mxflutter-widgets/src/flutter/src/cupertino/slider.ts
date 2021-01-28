//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { SemanticsConfiguration } from '../semantics/semantics';
import { PaintingContext } from '../rendering/object';
import { BoxHitTestEntry } from '../rendering/box';
import { PointerEvent } from '../gestures/events';
import { DragStartDetails, DragUpdateDetails, DragEndDetails } from '../gestures/drag-details';
import { HorizontalDragGestureRecognizer } from '../gestures/monodrag';
import { AnimationController } from '../animation/animation-controller';
import { RenderConstrainedBox } from '../rendering/proxy-box';
import { TickerProvider } from '../scheduler/ticker';
import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { Key } from '../foundation/key';
import { Color, TextDirection, Offset } from '../../../mx-dart-sdk';
import { StatefulWidget$, State$, BuildContext$, LeafRenderObjectWidget } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class CupertinoSlider extends StatefulWidget$ {
  value: number;
  onChanged: any;
  onChangeStart: any;
  onChangeEnd: any;
  min: number;
  max: number;
  divisions: number;
  activeColor: Color;
  thumbColor: Color;
  public constructor(
    namedParameters: {
      key?: Key;
      value?: number;
      onChanged?: any;
      onChangeStart?: any;
      onChangeEnd?: any;
      min?: number;
      max?: number;
      divisions?: number;
      activeColor?: Color;
      thumbColor?: Color;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.value = namedParameters.value;
    this.onChanged = namedParameters.onChanged;
    this.onChangeStart = namedParameters.onChangeStart;
    this.onChangeEnd = namedParameters.onChangeEnd;
    this.min = namedParameters.min;
    this.max = namedParameters.max;
    this.divisions = namedParameters.divisions;
    this.activeColor = namedParameters.activeColor;
    this.thumbColor = namedParameters.thumbColor;
    this.className = 'CupertinoSlider';
  }
}
export { CupertinoSlider };
class _CupertinoSliderState extends State$ {}
export { _CupertinoSliderState };
class _CupertinoSliderRenderObjectWidget extends LeafRenderObjectWidget {
  value: number;
  divisions: number;
  activeColor: Color;
  thumbColor: Color;
  onChanged: any;
  onChangeStart: any;
  onChangeEnd: any;
  vsync: TickerProvider;
  public constructor(
    namedParameters: {
      key?: Key;
      value?: number;
      divisions?: number;
      activeColor?: Color;
      thumbColor?: Color;
      onChanged?: any;
      onChangeStart?: any;
      onChangeEnd?: any;
      vsync?: TickerProvider;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.value = namedParameters.value;
    this.divisions = namedParameters.divisions;
    this.activeColor = namedParameters.activeColor;
    this.thumbColor = namedParameters.thumbColor;
    this.onChanged = namedParameters.onChanged;
    this.onChangeStart = namedParameters.onChangeStart;
    this.onChangeEnd = namedParameters.onChangeEnd;
    this.className = '_CupertinoSliderRenderObjectWidget';
  }
}
export { _CupertinoSliderRenderObjectWidget };
class _RenderCupertinoSlider extends RenderConstrainedBox {
  value: number;
  divisions: number;
  activeColor: Color;
  thumbColor: Color;
  trackColor: Color;
  onChanged: any;
  onChangeStart: any;
  onChangeEnd: any;
  textDirection: TextDirection;
  position: AnimationController;
  drag: HorizontalDragGestureRecognizer;
  currentDragValue: number;
  public constructor(
    namedParameters: {
      value?: number;
      divisions?: number;
      activeColor?: Color;
      thumbColor?: Color;
      trackColor?: Color;
      onChanged?: any;
      onChangeStart?: any;
      onChangeEnd?: any;
      vsync?: TickerProvider;
      textDirection?: TextDirection;
    } = {},
  ) {
    super();
    this.value = namedParameters.value;
    this.divisions = namedParameters.divisions;
    this.activeColor = namedParameters.activeColor;
    this.thumbColor = namedParameters.thumbColor;
    this.trackColor = namedParameters.trackColor;
    this.onChanged = namedParameters.onChanged;
    this.onChangeStart = namedParameters.onChangeStart;
    this.onChangeEnd = namedParameters.onChangeEnd;
    this.textDirection = namedParameters.textDirection;
    this.className = '_RenderCupertinoSlider';
  }
}
export { _RenderCupertinoSlider };
