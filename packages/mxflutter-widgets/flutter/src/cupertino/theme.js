//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { CupertinoTextThemeData } from './text-theme';
import { StatelessWidget$, InheritedWidget } from '../widgets/framework';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class CupertinoTheme extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.data = namedParameters.data;
        this.child = namedParameters.child;
        this.className = 'CupertinoTheme';
    }
}
export { CupertinoTheme };
class _InheritedCupertinoTheme extends InheritedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.theme = namedParameters.theme;
        this.child = namedParameters.child;
        this.className = '_InheritedCupertinoTheme';
    }
}
export { _InheritedCupertinoTheme };
class CupertinoThemeData extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.brightness = namedParameters.brightness;
        this.primaryColor = namedParameters.primaryColor;
        this.primaryContrastingColor = namedParameters.primaryContrastingColor;
        this.textTheme = namedParameters.textTheme;
        this.barBackgroundColor = namedParameters.barBackgroundColor;
        this.scaffoldBackgroundColor = namedParameters.scaffoldBackgroundColor;
        this.className = 'CupertinoThemeData';
    }
    static raw(brightness, primaryColor, primaryContrastingColor, textTheme, barBackgroundColor, scaffoldBackgroundColor) {
        var jsObj = new CupertinoThemeData();
        jsObj.brightness = brightness;
        jsObj.primaryColor = primaryColor;
        jsObj.primaryContrastingColor = primaryContrastingColor;
        jsObj.textTheme = textTheme;
        jsObj.barBackgroundColor = barBackgroundColor;
        jsObj.scaffoldBackgroundColor = scaffoldBackgroundColor;
        jsObj['constructorName'] = 'raw';
        return jsObj;
    }
}
export { CupertinoThemeData };
class _NoDefaultCupertinoThemeData extends CupertinoThemeData {
    constructor(brightness, primaryColor, primaryContrastingColor, textTheme, barBackgroundColor, scaffoldBackgroundColor) {
        super();
        this.brightness = brightness;
        this.primaryColor = primaryColor;
        this.primaryContrastingColor = primaryContrastingColor;
        this.textTheme = textTheme;
        this.barBackgroundColor = barBackgroundColor;
        this.scaffoldBackgroundColor = scaffoldBackgroundColor;
        this.className = '_NoDefaultCupertinoThemeData';
    }
}
export { _NoDefaultCupertinoThemeData };
class _CupertinoThemeDefaults extends MXDartClass {
    constructor(brightness, primaryColor, primaryContrastingColor, barBackgroundColor, scaffoldBackgroundColor, textThemeDefaults) {
        super();
        this.brightness = brightness;
        this.primaryColor = primaryColor;
        this.primaryContrastingColor = primaryContrastingColor;
        this.barBackgroundColor = barBackgroundColor;
        this.scaffoldBackgroundColor = scaffoldBackgroundColor;
        this.textThemeDefaults = textThemeDefaults;
        this.className = '_CupertinoThemeDefaults';
    }
}
export { _CupertinoThemeDefaults };
class _CupertinoTextThemeDefaults extends MXDartClass {
    constructor(labelColor, inactiveGray) {
        super();
        this.labelColor = labelColor;
        this.inactiveGray = inactiveGray;
        this.className = '_CupertinoTextThemeDefaults';
    }
}
export { _CupertinoTextThemeDefaults };
class _DefaultCupertinoTextThemeData extends CupertinoTextThemeData {
    constructor(namedParameters = {}) {
        super();
        this.labelColor = namedParameters.labelColor;
        this.inactiveGray = namedParameters.inactiveGray;
        this.primaryColor = namedParameters.primaryColor;
        this.className = '_DefaultCupertinoTextThemeData';
    }
}
export { _DefaultCupertinoTextThemeData };
