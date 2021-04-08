// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { RenderShiftedBox } from '../rendering/shifted-box';
import { Key } from '../foundation/key';
import { FocusNode } from '../widgets/focus-manager';
import { Duration } from '../../../mx-dart-sdk';
import { ShapeBorder } from '../painting/borders';
import { BoxConstraints, RenderBox } from '../rendering/box';
import { VisualDensity, MaterialTapTargetSize } from './theme-data';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { Color, Clip, Size } from '../../../mx-dart-sdk';
import { TextStyle } from '../painting/text-style';
import { MouseCursor } from '../rendering/mouse-cursor';
import { StatefulWidget, Widget, State, SingleChildRenderObjectWidget } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class RawMaterialButton extends StatefulWidget {
  onPressed: any;
  onLongPress: any;
  onHighlightChanged: any;
  mouseCursor: MouseCursor;
  textStyle: TextStyle;
  fillColor: Color;
  focusColor: Color;
  hoverColor: Color;
  highlightColor: Color;
  splashColor: Color;
  elevation: number;
  hoverElevation: number;
  focusElevation: number;
  highlightElevation: number;
  disabledElevation: number;
  padding: EdgeInsetsGeometry;
  visualDensity: VisualDensity;
  constraints: BoxConstraints;
  shape: ShapeBorder;
  animationDuration: Duration;
  child: MXWidget;
  materialTapTargetSize: MaterialTapTargetSize;
  focusNode: FocusNode;
  autofocus: boolean;
  clipBehavior: Clip;
  enableFeedback: boolean;
  public constructor(namedParameters: {key?: Key, onPressed?: any, onLongPress?: any, onHighlightChanged?: any, mouseCursor?: MouseCursor, textStyle?: TextStyle, fillColor?: Color, focusColor?: Color, hoverColor?: Color, highlightColor?: Color, splashColor?: Color, elevation?: number, focusElevation?: number, hoverElevation?: number, highlightElevation?: number, disabledElevation?: number, padding?: EdgeInsetsGeometry, visualDensity?: VisualDensity, constraints?: BoxConstraints, shape?: ShapeBorder, animationDuration?: Duration, clipBehavior?: Clip, focusNode?: FocusNode, autofocus?: boolean, materialTapTargetSize?: MaterialTapTargetSize, child?: MXWidget, enableFeedback?: boolean} = {}) {
    super();
    this.key = namedParameters.key;
    this.onPressed = namedParameters.onPressed;
    this.onLongPress = namedParameters.onLongPress;
    this.onHighlightChanged = namedParameters.onHighlightChanged;
    this.mouseCursor = namedParameters.mouseCursor;
    this.textStyle = namedParameters.textStyle;
    this.fillColor = namedParameters.fillColor;
    this.focusColor = namedParameters.focusColor;
    this.hoverColor = namedParameters.hoverColor;
    this.highlightColor = namedParameters.highlightColor;
    this.splashColor = namedParameters.splashColor;
    this.elevation = namedParameters.elevation;
    this.focusElevation = namedParameters.focusElevation;
    this.hoverElevation = namedParameters.hoverElevation;
    this.highlightElevation = namedParameters.highlightElevation;
    this.disabledElevation = namedParameters.disabledElevation;
    this.padding = namedParameters.padding;
    this.visualDensity = namedParameters.visualDensity;
    this.constraints = namedParameters.constraints;
    this.shape = namedParameters.shape;
    this.animationDuration = namedParameters.animationDuration;
    this.clipBehavior = namedParameters.clipBehavior;
    this.focusNode = namedParameters.focusNode;
    this.autofocus = namedParameters.autofocus;
    this.materialTapTargetSize = namedParameters.materialTapTargetSize;
    this.child = namedParameters.child;
    this.enableFeedback = namedParameters.enableFeedback;
    this.className = 'RawMaterialButton';
  }
}
export { RawMaterialButton };
class _RawMaterialButtonState extends State {
  states: Set<any>;
}
export { _RawMaterialButtonState };
class _InputPadding extends SingleChildRenderObjectWidget {
  minSize: Size;
  public constructor(namedParameters: {key?: Key, child?: MXWidget, minSize?: Size} = {}) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.minSize = namedParameters.minSize;
    this.className = '_InputPadding';
  }
}
export { _InputPadding };
class _RenderInputPadding extends RenderShiftedBox {
  minSize: Size;
  public constructor(_minSize?: Size, child?: RenderBox) {
    super();
    this.minSize = _minSize;
    this['child'] = child;
    this.className = '_RenderInputPadding';
  }
}
export { _RenderInputPadding };
