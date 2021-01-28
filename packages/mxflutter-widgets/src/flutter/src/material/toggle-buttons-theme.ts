//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Widget, BuildContext$ } from '../widgets/framework';
import { Key } from '../foundation/key';
import { InheritedTheme } from '../widgets/inherited-theme';
import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { BorderRadius } from '../painting/border-radius';
import { Color } from '../../../mx-dart-sdk';
import { BoxConstraints } from '../rendering/box';
import { TextStyle } from '../painting/text-style';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class ToggleButtonsThemeData extends MXDartClass {
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
  borderColor: Color;
  selectedBorderColor: Color;
  disabledBorderColor: Color;
  borderWidth: number;
  borderRadius: BorderRadius;
  public constructor(
    namedParameters: {
      textStyle?: TextStyle;
      constraints?: BoxConstraints;
      color?: Color;
      selectedColor?: Color;
      disabledColor?: Color;
      fillColor?: Color;
      focusColor?: Color;
      highlightColor?: Color;
      hoverColor?: Color;
      splashColor?: Color;
      borderColor?: Color;
      selectedBorderColor?: Color;
      disabledBorderColor?: Color;
      borderRadius?: BorderRadius;
      borderWidth?: number;
    } = {},
  ) {
    super();
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
    this.borderColor = namedParameters.borderColor;
    this.selectedBorderColor = namedParameters.selectedBorderColor;
    this.disabledBorderColor = namedParameters.disabledBorderColor;
    this.borderRadius = namedParameters.borderRadius;
    this.borderWidth = namedParameters.borderWidth;
    this.className = 'ToggleButtonsThemeData';
  }
}
export { ToggleButtonsThemeData };
class ToggleButtonsTheme extends InheritedTheme {
  data: ToggleButtonsThemeData;
  public constructor(namedParameters: { key?: Key; data?: ToggleButtonsThemeData; child?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.data = namedParameters.data;
    this.child = namedParameters.child;
    this.className = 'ToggleButtonsTheme';
  }
}
export { ToggleButtonsTheme };
