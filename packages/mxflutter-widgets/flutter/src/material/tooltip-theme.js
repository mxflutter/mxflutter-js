//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { InheritedTheme } from '../widgets/inherited-theme';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class TooltipThemeData extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.height = namedParameters.height;
        this.padding = namedParameters.padding;
        this.margin = namedParameters.margin;
        this.verticalOffset = namedParameters.verticalOffset;
        this.preferBelow = namedParameters.preferBelow;
        this.excludeFromSemantics = namedParameters.excludeFromSemantics;
        this.decoration = namedParameters.decoration;
        this.textStyle = namedParameters.textStyle;
        this.waitDuration = namedParameters.waitDuration;
        this.showDuration = namedParameters.showDuration;
        this.className = 'TooltipThemeData';
    }
}
export { TooltipThemeData };
class TooltipTheme extends InheritedTheme {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.data = namedParameters.data;
        this.child = namedParameters.child;
        this.className = 'TooltipTheme';
    }
}
export { TooltipTheme };
