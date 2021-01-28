//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { InheritedWidget } from '../widgets/framework';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class BottomNavigationBarThemeData extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.backgroundColor = namedParameters.backgroundColor;
        this.elevation = namedParameters.elevation;
        this.selectedIconTheme = namedParameters.selectedIconTheme;
        this.unselectedIconTheme = namedParameters.unselectedIconTheme;
        this.selectedItemColor = namedParameters.selectedItemColor;
        this.unselectedItemColor = namedParameters.unselectedItemColor;
        this.selectedLabelStyle = namedParameters.selectedLabelStyle;
        this.unselectedLabelStyle = namedParameters.unselectedLabelStyle;
        this.showSelectedLabels = namedParameters.showSelectedLabels;
        this.showUnselectedLabels = namedParameters.showUnselectedLabels;
        this.type = namedParameters.type;
        this.className = 'BottomNavigationBarThemeData';
    }
}
export { BottomNavigationBarThemeData };
class BottomNavigationBarTheme extends InheritedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.data = namedParameters.data;
        this.child = namedParameters.child;
        this.className = 'BottomNavigationBarTheme';
    }
}
export { BottomNavigationBarTheme };
