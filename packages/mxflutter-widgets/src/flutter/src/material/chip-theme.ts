//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { TextStyle } from '../painting/text-style';
import { ShapeBorder } from '../painting/borders';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { Color, Brightness } from '../../../mx-dart-sdk';
import { Widget, BuildContext$ } from '../widgets/framework';
import { Key } from '../foundation/key';
import { InheritedTheme } from '../widgets/inherited-theme';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class ChipTheme extends InheritedTheme {
  data: ChipThemeData;
  public constructor(namedParameters: { key?: Key; data?: ChipThemeData; child?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.data = namedParameters.data;
    this.child = namedParameters.child;
    this.className = 'ChipTheme';
  }
}
export { ChipTheme };
class ChipThemeData extends MXDartClass {
  backgroundColor: Color;
  deleteIconColor: Color;
  disabledColor: Color;
  selectedColor: Color;
  secondarySelectedColor: Color;
  shadowColor: Color;
  selectedShadowColor: Color;
  showCheckmark: boolean;
  checkmarkColor: Color;
  labelPadding: EdgeInsetsGeometry;
  padding: EdgeInsetsGeometry;
  shape: ShapeBorder;
  labelStyle: TextStyle;
  secondaryLabelStyle: TextStyle;
  brightness: Brightness;
  elevation: number;
  pressElevation: number;
  public constructor(
    namedParameters: {
      backgroundColor?: Color;
      deleteIconColor?: Color;
      disabledColor?: Color;
      selectedColor?: Color;
      secondarySelectedColor?: Color;
      shadowColor?: Color;
      selectedShadowColor?: Color;
      showCheckmark?: boolean;
      checkmarkColor?: Color;
      labelPadding?: EdgeInsetsGeometry;
      padding?: EdgeInsetsGeometry;
      shape?: ShapeBorder;
      labelStyle?: TextStyle;
      secondaryLabelStyle?: TextStyle;
      brightness?: Brightness;
      elevation?: number;
      pressElevation?: number;
    } = {},
  ) {
    super();
    this.backgroundColor = namedParameters.backgroundColor;
    this.deleteIconColor = namedParameters.deleteIconColor;
    this.disabledColor = namedParameters.disabledColor;
    this.selectedColor = namedParameters.selectedColor;
    this.secondarySelectedColor = namedParameters.secondarySelectedColor;
    this.shadowColor = namedParameters.shadowColor;
    this.selectedShadowColor = namedParameters.selectedShadowColor;
    this.showCheckmark = namedParameters.showCheckmark;
    this.checkmarkColor = namedParameters.checkmarkColor;
    this.labelPadding = namedParameters.labelPadding;
    this.padding = namedParameters.padding;
    this.shape = namedParameters.shape;
    this.labelStyle = namedParameters.labelStyle;
    this.secondaryLabelStyle = namedParameters.secondaryLabelStyle;
    this.brightness = namedParameters.brightness;
    this.elevation = namedParameters.elevation;
    this.pressElevation = namedParameters.pressElevation;
    this.className = 'ChipThemeData';
  }
  static fromDefaults(
    namedParameters: {
      brightness?: Brightness;
      primaryColor?: Color;
      secondaryColor?: Color;
      labelStyle?: TextStyle;
    } = {},
  ) {
    var jsObj = new ChipThemeData();
    jsObj.brightness = namedParameters.brightness;
    jsObj['primaryColor'] = namedParameters.primaryColor;
    jsObj['secondaryColor'] = namedParameters.secondaryColor;
    jsObj.labelStyle = namedParameters.labelStyle;
    jsObj['constructorName'] = 'fromDefaults';
    return jsObj;
  }
}
export { ChipThemeData };
