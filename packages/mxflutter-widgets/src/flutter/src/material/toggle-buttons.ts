// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { RenderShiftedBox } from '../rendering/shifted-box';
import { BorderSide } from '../painting/borders';
import { FocusNode } from '../widgets/focus-manager';
import { Key } from '../foundation/key';
import { BorderRadius } from '../painting/border-radius';
import { Color, TextDirection } from '../../../mx-dart-sdk';
import { BoxConstraints, RenderBox } from '../rendering/box';
import { TextStyle } from '../painting/text-style';
import { MouseCursor } from '../rendering/mouse-cursor';
import { StatelessWidget, Widget, SingleChildRenderObjectWidget } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class ToggleButtons extends StatelessWidget {
  children: Array<any>;
  isSelected: Array<any>;
  onPressed: any;
  mouseCursor: MouseCursor;
  textStyle: TextStyle;
  constraints: BoxConstraints;
  color: Color;
  selectedColor: Color;
  disabledColor: Color;
  fillColor: Color;
  focusColor: Color;
  highlightColor: Color;
  splashColor: Color;
  hoverColor: Color;
  focusNodes: Array<any>;
  renderBorder: boolean;
  borderColor: Color;
  selectedBorderColor: Color;
  disabledBorderColor: Color;
  borderWidth: number;
  borderRadius: BorderRadius;
  public constructor(namedParameters: {key?: Key, children?: Array<any>, isSelected?: Array<any>, onPressed?: any, mouseCursor?: MouseCursor, textStyle?: TextStyle, constraints?: BoxConstraints, color?: Color, selectedColor?: Color, disabledColor?: Color, fillColor?: Color, focusColor?: Color, highlightColor?: Color, hoverColor?: Color, splashColor?: Color, focusNodes?: Array<any>, renderBorder?: boolean, borderColor?: Color, selectedBorderColor?: Color, disabledBorderColor?: Color, borderRadius?: BorderRadius, borderWidth?: number} = {}) {
    super();
    this.key = namedParameters.key;
    this.children = namedParameters.children;
    this.isSelected = namedParameters.isSelected;
    this.onPressed = namedParameters.onPressed;
    this.mouseCursor = namedParameters.mouseCursor;
    this.textStyle = namedParameters.textStyle;
    this.constraints = namedParameters.constraints;
    this.color = namedParameters.color;
    this.selectedColor = namedParameters.selectedColor;
    this.disabledColor = namedParameters.disabledColor;
    this.fillColor = namedParameters.fillColor;
    this.focusColor = namedParameters.focusColor;
    this.highlightColor = namedParameters.highlightColor;
    this.hoverColor = namedParameters.hoverColor;
    this.splashColor = namedParameters.splashColor;
    this.focusNodes = namedParameters.focusNodes;
    this.renderBorder = namedParameters.renderBorder;
    this.borderColor = namedParameters.borderColor;
    this.selectedBorderColor = namedParameters.selectedBorderColor;
    this.disabledBorderColor = namedParameters.disabledBorderColor;
    this.borderRadius = namedParameters.borderRadius;
    this.borderWidth = namedParameters.borderWidth;
    this.className = 'ToggleButtons';
  }
}
export { ToggleButtons };
class _ToggleButton extends StatelessWidget {
  selected: boolean;
  textStyle: TextStyle;
  constraints: BoxConstraints;
  color: Color;
  selectedColor: Color;
  disabledColor: Color;
  fillColor: Color;
  focusColor: Color;
  hoverColor: Color;
  highlightColor: Color;
  splashColor: Color;
  focusNode: FocusNode;
  onPressed: any;
  mouseCursor: MouseCursor;
  leadingBorderSide: BorderSide;
  horizontalBorderSide: BorderSide;
  trailingBorderSide: BorderSide;
  borderRadius: BorderRadius;
  clipRadius: BorderRadius;
  isFirstButton: boolean;
  isLastButton: boolean;
  child: MXWidget;
  public constructor(namedParameters: {key?: Key, selected?: boolean, textStyle?: TextStyle, constraints?: BoxConstraints, color?: Color, selectedColor?: Color, disabledColor?: Color, fillColor?: Color, focusColor?: Color, highlightColor?: Color, hoverColor?: Color, splashColor?: Color, focusNode?: FocusNode, onPressed?: any, mouseCursor?: MouseCursor, leadingBorderSide?: BorderSide, horizontalBorderSide?: BorderSide, trailingBorderSide?: BorderSide, borderRadius?: BorderRadius, clipRadius?: BorderRadius, isFirstButton?: boolean, isLastButton?: boolean, child?: MXWidget} = {}) {
    super();
    this.key = namedParameters.key;
    this.selected = namedParameters.selected;
    this.textStyle = namedParameters.textStyle;
    this.constraints = namedParameters.constraints;
    this.color = namedParameters.color;
    this.selectedColor = namedParameters.selectedColor;
    this.disabledColor = namedParameters.disabledColor;
    this.fillColor = namedParameters.fillColor;
    this.focusColor = namedParameters.focusColor;
    this.highlightColor = namedParameters.highlightColor;
    this.hoverColor = namedParameters.hoverColor;
    this.splashColor = namedParameters.splashColor;
    this.focusNode = namedParameters.focusNode;
    this.onPressed = namedParameters.onPressed;
    this.mouseCursor = namedParameters.mouseCursor;
    this.leadingBorderSide = namedParameters.leadingBorderSide;
    this.horizontalBorderSide = namedParameters.horizontalBorderSide;
    this.trailingBorderSide = namedParameters.trailingBorderSide;
    this.borderRadius = namedParameters.borderRadius;
    this.clipRadius = namedParameters.clipRadius;
    this.isFirstButton = namedParameters.isFirstButton;
    this.isLastButton = namedParameters.isLastButton;
    this.child = namedParameters.child;
    this.className = '_ToggleButton';
  }
}
export { _ToggleButton };
class _SelectToggleButton extends SingleChildRenderObjectWidget {
  leadingBorderSide: BorderSide;
  horizontalBorderSide: BorderSide;
  trailingBorderSide: BorderSide;
  borderRadius: BorderRadius;
  isFirstButton: boolean;
  isLastButton: boolean;
  public constructor(namedParameters: {key?: Key, child?: MXWidget, leadingBorderSide?: BorderSide, horizontalBorderSide?: BorderSide, trailingBorderSide?: BorderSide, borderRadius?: BorderRadius, isFirstButton?: boolean, isLastButton?: boolean} = {}) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.leadingBorderSide = namedParameters.leadingBorderSide;
    this.horizontalBorderSide = namedParameters.horizontalBorderSide;
    this.trailingBorderSide = namedParameters.trailingBorderSide;
    this.borderRadius = namedParameters.borderRadius;
    this.isFirstButton = namedParameters.isFirstButton;
    this.isLastButton = namedParameters.isLastButton;
    this.className = '_SelectToggleButton';
  }
}
export { _SelectToggleButton };
class _SelectToggleButtonRenderObject extends RenderShiftedBox {
  leadingBorderSide: BorderSide;
  horizontalBorderSide: BorderSide;
  trailingBorderSide: BorderSide;
  borderRadius: BorderRadius;
  isFirstButton: boolean;
  isLastButton: boolean;
  textDirection: TextDirection;
  public constructor(_leadingBorderSide?: BorderSide, _horizontalBorderSide?: BorderSide, _trailingBorderSide?: BorderSide, _borderRadius?: BorderRadius, _isFirstButton?: boolean, _isLastButton?: boolean, _textDirection?: TextDirection, child?: RenderBox) {
    super();
    this.leadingBorderSide = _leadingBorderSide;
    this.horizontalBorderSide = _horizontalBorderSide;
    this.trailingBorderSide = _trailingBorderSide;
    this.borderRadius = _borderRadius;
    this.isFirstButton = _isFirstButton;
    this.isLastButton = _isLastButton;
    this.textDirection = _textDirection;
    this['child'] = child;
    this.className = '_SelectToggleButtonRenderObject';
  }
}
export { _SelectToggleButtonRenderObject };
