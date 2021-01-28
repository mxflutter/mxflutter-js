//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { InheritedTheme } from '../widgets/inherited-theme';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class NavigationRailThemeData extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.backgroundColor = namedParameters.backgroundColor;
        this.elevation = namedParameters.elevation;
        this.unselectedLabelTextStyle = namedParameters.unselectedLabelTextStyle;
        this.selectedLabelTextStyle = namedParameters.selectedLabelTextStyle;
        this.unselectedIconTheme = namedParameters.unselectedIconTheme;
        this.selectedIconTheme = namedParameters.selectedIconTheme;
        this.groupAlignment = namedParameters.groupAlignment;
        this.labelType = namedParameters.labelType;
        this.className = 'NavigationRailThemeData';
    }
}
export { NavigationRailThemeData };
class NavigationRailTheme extends InheritedTheme {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.data = namedParameters.data;
        this.child = namedParameters.child;
        this.className = 'NavigationRailTheme';
    }
}
export { NavigationRailTheme };
