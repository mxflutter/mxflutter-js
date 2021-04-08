"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._TextThemeDefaultsBuilder = exports.CupertinoTextThemeData = void 0;
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class CupertinoTextThemeData extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
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
exports.CupertinoTextThemeData = CupertinoTextThemeData;
class _TextThemeDefaultsBuilder extends mxflutter_base_1.MXDartClass {
    constructor(labelColor, inactiveGrayColor) {
        super();
        this.labelColor = labelColor;
        this.inactiveGrayColor = inactiveGrayColor;
        this.className = '_TextThemeDefaultsBuilder';
    }
}
exports._TextThemeDefaultsBuilder = _TextThemeDefaultsBuilder;
