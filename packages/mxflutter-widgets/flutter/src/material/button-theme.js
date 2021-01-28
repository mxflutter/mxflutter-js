//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { InheritedTheme } from '../widgets/inherited-theme';
import { MXDartClass } from '@mxflutter/mxflutter-base';
var ButtonTextTheme;
(function (ButtonTextTheme) {
    ButtonTextTheme["normal"] = "{ \"_name\": \"ButtonTextTheme.normal\", \"index\": 0 }";
    ButtonTextTheme["accent"] = "{ \"_name\": \"ButtonTextTheme.accent\", \"index\": 1 }";
    ButtonTextTheme["primary"] = "{ \"_name\": \"ButtonTextTheme.primary\", \"index\": 2 }";
})(ButtonTextTheme || (ButtonTextTheme = {}));
export { ButtonTextTheme };
var ButtonBarLayoutBehavior;
(function (ButtonBarLayoutBehavior) {
    ButtonBarLayoutBehavior["constrained"] = "{ \"_name\": \"ButtonBarLayoutBehavior.constrained\", \"index\": 0 }";
    ButtonBarLayoutBehavior["padded"] = "{ \"_name\": \"ButtonBarLayoutBehavior.padded\", \"index\": 1 }";
})(ButtonBarLayoutBehavior || (ButtonBarLayoutBehavior = {}));
export { ButtonBarLayoutBehavior };
class ButtonTheme extends InheritedTheme {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this['textTheme'] = namedParameters.textTheme;
        this['layoutBehavior'] = namedParameters.layoutBehavior;
        this['minWidth'] = namedParameters.minWidth;
        this['height'] = namedParameters.height;
        this['padding'] = namedParameters.padding;
        this['shape'] = namedParameters.shape;
        this['alignedDropdown'] = namedParameters.alignedDropdown;
        this['buttonColor'] = namedParameters.buttonColor;
        this['disabledColor'] = namedParameters.disabledColor;
        this['focusColor'] = namedParameters.focusColor;
        this['hoverColor'] = namedParameters.hoverColor;
        this['highlightColor'] = namedParameters.highlightColor;
        this['splashColor'] = namedParameters.splashColor;
        this['colorScheme'] = namedParameters.colorScheme;
        this['materialTapTargetSize'] = namedParameters.materialTapTargetSize;
        this.child = namedParameters.child;
        this.className = 'ButtonTheme';
    }
    static fromButtonThemeData(namedParameters = {}) {
        var jsObj = new ButtonTheme();
        jsObj.key = namedParameters.key;
        jsObj.data = namedParameters.data;
        jsObj.child = namedParameters.child;
        jsObj['constructorName'] = 'fromButtonThemeData';
        return jsObj;
    }
    static bar(namedParameters = {}) {
        var jsObj = new ButtonTheme();
        jsObj.key = namedParameters.key;
        jsObj['textTheme'] = namedParameters.textTheme;
        jsObj['minWidth'] = namedParameters.minWidth;
        jsObj['height'] = namedParameters.height;
        jsObj['padding'] = namedParameters.padding;
        jsObj['shape'] = namedParameters.shape;
        jsObj['alignedDropdown'] = namedParameters.alignedDropdown;
        jsObj['buttonColor'] = namedParameters.buttonColor;
        jsObj['disabledColor'] = namedParameters.disabledColor;
        jsObj['focusColor'] = namedParameters.focusColor;
        jsObj['hoverColor'] = namedParameters.hoverColor;
        jsObj['highlightColor'] = namedParameters.highlightColor;
        jsObj['splashColor'] = namedParameters.splashColor;
        jsObj['colorScheme'] = namedParameters.colorScheme;
        jsObj.child = namedParameters.child;
        jsObj['layoutBehavior'] = namedParameters.layoutBehavior;
        jsObj['constructorName'] = 'bar';
        return jsObj;
    }
}
export { ButtonTheme };
class ButtonThemeData extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.textTheme = namedParameters.textTheme;
        this.minWidth = namedParameters.minWidth;
        this.height = namedParameters.height;
        this.padding = namedParameters.padding;
        this.shape = namedParameters.shape;
        this.layoutBehavior = namedParameters.layoutBehavior;
        this.alignedDropdown = namedParameters.alignedDropdown;
        this.buttonColor = namedParameters.buttonColor;
        this.disabledColor = namedParameters.disabledColor;
        this.focusColor = namedParameters.focusColor;
        this.hoverColor = namedParameters.hoverColor;
        this.highlightColor = namedParameters.highlightColor;
        this.splashColor = namedParameters.splashColor;
        this.colorScheme = namedParameters.colorScheme;
        this.materialTapTargetSize = namedParameters.materialTapTargetSize;
        this.className = 'ButtonThemeData';
    }
}
export { ButtonThemeData };
