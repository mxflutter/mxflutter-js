// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Widget } from '../widgets/framework';
import { Key } from '../foundation/key';
import { InheritedTheme } from '../widgets/inherited-theme';
import { InputDecorationTheme } from './input-decorator';
import { ShapeBorder, OutlinedBorder, BorderSide } from '../painting/borders';
import { TextStyle } from '../painting/text-style';
import { Color } from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class TimePickerThemeData extends MXDartClass {
  backgroundColor: Color;
  hourMinuteTextColor: Color;
  hourMinuteColor: Color;
  dayPeriodTextColor: Color;
  dayPeriodColor: Color;
  dialHandColor: Color;
  dialBackgroundColor: Color;
  dialTextColor: Color;
  entryModeIconColor: Color;
  hourMinuteTextStyle: TextStyle;
  dayPeriodTextStyle: TextStyle;
  helpTextStyle: TextStyle;
  shape: ShapeBorder;
  hourMinuteShape: ShapeBorder;
  dayPeriodShape: OutlinedBorder;
  dayPeriodBorderSide: BorderSide;
  inputDecorationTheme: InputDecorationTheme;
  public constructor(namedParameters: {backgroundColor?: Color, hourMinuteTextColor?: Color, hourMinuteColor?: Color, dayPeriodTextColor?: Color, dayPeriodColor?: Color, dialHandColor?: Color, dialBackgroundColor?: Color, dialTextColor?: Color, entryModeIconColor?: Color, hourMinuteTextStyle?: TextStyle, dayPeriodTextStyle?: TextStyle, helpTextStyle?: TextStyle, shape?: ShapeBorder, hourMinuteShape?: ShapeBorder, dayPeriodShape?: OutlinedBorder, dayPeriodBorderSide?: BorderSide, inputDecorationTheme?: InputDecorationTheme} = {}) {
    super();
    this.backgroundColor = namedParameters.backgroundColor;
    this.hourMinuteTextColor = namedParameters.hourMinuteTextColor;
    this.hourMinuteColor = namedParameters.hourMinuteColor;
    this.dayPeriodTextColor = namedParameters.dayPeriodTextColor;
    this.dayPeriodColor = namedParameters.dayPeriodColor;
    this.dialHandColor = namedParameters.dialHandColor;
    this.dialBackgroundColor = namedParameters.dialBackgroundColor;
    this.dialTextColor = namedParameters.dialTextColor;
    this.entryModeIconColor = namedParameters.entryModeIconColor;
    this.hourMinuteTextStyle = namedParameters.hourMinuteTextStyle;
    this.dayPeriodTextStyle = namedParameters.dayPeriodTextStyle;
    this.helpTextStyle = namedParameters.helpTextStyle;
    this.shape = namedParameters.shape;
    this.hourMinuteShape = namedParameters.hourMinuteShape;
    this.dayPeriodShape = namedParameters.dayPeriodShape;
    this.dayPeriodBorderSide = namedParameters.dayPeriodBorderSide;
    this.inputDecorationTheme = namedParameters.inputDecorationTheme;
    this.className = 'TimePickerThemeData';
  }
}
export { TimePickerThemeData };
class TimePickerTheme extends InheritedTheme {
  data: TimePickerThemeData;
  public constructor(namedParameters: {key?: Key, data?: TimePickerThemeData, child?: MXWidget} = {}) {
    super();
    this.key = namedParameters.key;
    this.data = namedParameters.data;
    this.child = namedParameters.child;
    this.className = 'TimePickerTheme';
  }
}
export { TimePickerTheme };
