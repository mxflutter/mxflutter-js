//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { InheritedWidget } from '../widgets/framework';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class ButtonBarThemeData extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.alignment = namedParameters.alignment;
        this.mainAxisSize = namedParameters.mainAxisSize;
        this.buttonTextTheme = namedParameters.buttonTextTheme;
        this.buttonMinWidth = namedParameters.buttonMinWidth;
        this.buttonHeight = namedParameters.buttonHeight;
        this.buttonPadding = namedParameters.buttonPadding;
        this.buttonAlignedDropdown = namedParameters.buttonAlignedDropdown;
        this.layoutBehavior = namedParameters.layoutBehavior;
        this.overflowDirection = namedParameters.overflowDirection;
        this.className = 'ButtonBarThemeData';
    }
}
export { ButtonBarThemeData };
class ButtonBarTheme extends InheritedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.data = namedParameters.data;
        this.child = namedParameters.child;
        this.className = 'ButtonBarTheme';
    }
}
export { ButtonBarTheme };
