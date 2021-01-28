//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { InheritedTheme } from '../widgets/inherited-theme';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class TimePickerThemeData extends MXDartClass {
    constructor(namedParameters = {}) {
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
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.data = namedParameters.data;
        this.child = namedParameters.child;
        this.className = 'TimePickerTheme';
    }
}
export { TimePickerTheme };
