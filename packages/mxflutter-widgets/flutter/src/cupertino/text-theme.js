//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { MXDartClass } from '@mxflutter/mxflutter-base';
class CupertinoTextThemeData extends MXDartClass {
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
export { CupertinoTextThemeData };
class _TextThemeDefaultsBuilder extends MXDartClass {
    constructor(labelColor, inactiveGrayColor) {
        super();
        this.labelColor = labelColor;
        this.inactiveGrayColor = inactiveGrayColor;
        this.className = '_TextThemeDefaultsBuilder';
    }
}
export { _TextThemeDefaultsBuilder };
