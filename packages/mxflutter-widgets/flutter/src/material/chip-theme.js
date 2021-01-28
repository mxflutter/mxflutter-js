//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { InheritedTheme } from '../widgets/inherited-theme';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class ChipTheme extends InheritedTheme {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.data = namedParameters.data;
        this.child = namedParameters.child;
        this.className = 'ChipTheme';
    }
}
export { ChipTheme };
class ChipThemeData extends MXDartClass {
    constructor(namedParameters = {}) {
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
    static fromDefaults(namedParameters = {}) {
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
