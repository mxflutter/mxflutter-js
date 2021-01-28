//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { BuildContext$ } from '../widgets/framework';
import { TextStyle } from '../painting/text-style';
import { Color, Brightness } from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class CupertinoTextThemeData extends MXDartClass {
  defaults: _TextThemeDefaultsBuilder;
  primaryColor: Color;
  textStyle: TextStyle;
  actionTextStyle: TextStyle;
  tabLabelTextStyle: TextStyle;
  navTitleTextStyle: TextStyle;
  navLargeTitleTextStyle: TextStyle;
  navActionTextStyle: TextStyle;
  pickerTextStyle: TextStyle;
  dateTimePickerTextStyle: TextStyle;
  public constructor(
    namedParameters: {
      primaryColor?: Color;
      brightness?: Brightness;
      textStyle?: TextStyle;
      actionTextStyle?: TextStyle;
      tabLabelTextStyle?: TextStyle;
      navTitleTextStyle?: TextStyle;
      navLargeTitleTextStyle?: TextStyle;
      navActionTextStyle?: TextStyle;
      pickerTextStyle?: TextStyle;
      dateTimePickerTextStyle?: TextStyle;
    } = {},
  ) {
    super();
    this.primaryColor = namedParameters.primaryColor;
    this['brightness'] = namedParameters.brightness;
    this.textStyle = namedParameters.textStyle;
    this.actionTextStyle = namedParameters.actionTextStyle;
    this.tabLabelTextStyle = namedParameters.tabLabelTextStyle;
    this.navTitleTextStyle = namedParameters.navTitleTextStyle;
    this.navLargeTitleTextStyle = namedParameters.navLargeTitleTextStyle;
    this.navActionTextStyle = namedParameters.navActionTextStyle;
    this.pickerTextStyle = namedParameters.pickerTextStyle;
    this.dateTimePickerTextStyle = namedParameters.dateTimePickerTextStyle;
    this.className = 'CupertinoTextThemeData';
  }
}
export { CupertinoTextThemeData };
class _TextThemeDefaultsBuilder extends MXDartClass {
  labelColor: Color;
  inactiveGrayColor: Color;
  public constructor(labelColor?: Color, inactiveGrayColor?: Color) {
    super();
    this.labelColor = labelColor;
    this.inactiveGrayColor = inactiveGrayColor;
    this.className = '_TextThemeDefaultsBuilder';
  }
}
export { _TextThemeDefaultsBuilder };
