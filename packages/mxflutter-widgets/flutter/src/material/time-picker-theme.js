"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimePickerTheme = exports.TimePickerThemeData = void 0;
const inherited_theme_1 = require("../widgets/inherited-theme");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class TimePickerThemeData extends mxflutter_base_1.MXDartClass {
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
exports.TimePickerThemeData = TimePickerThemeData;
class TimePickerTheme extends inherited_theme_1.InheritedTheme {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.data = namedParameters.data;
        this.child = namedParameters.child;
        this.className = 'TimePickerTheme';
    }
}
exports.TimePickerTheme = TimePickerTheme;
