//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Key } from '../foundation/key';
import { InheritedWidget, Widget, BuildContext$ } from '../widgets/framework';
import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { BottomNavigationBarType } from './bottom-navigation-bar';
import { TextStyle } from '../painting/text-style';
import { IconThemeData } from '../widgets/icon-theme-data';
import { Color } from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class BottomNavigationBarThemeData extends MXDartClass {
  backgroundColor: Color;
  elevation: number;
  selectedIconTheme: IconThemeData;
  unselectedIconTheme: IconThemeData;
  selectedItemColor: Color;
  unselectedItemColor: Color;
  selectedLabelStyle: TextStyle;
  unselectedLabelStyle: TextStyle;
  showSelectedLabels: boolean;
  showUnselectedLabels: boolean;
  type: BottomNavigationBarType;
  public constructor(
    namedParameters: {
      backgroundColor?: Color;
      elevation?: number;
      selectedIconTheme?: IconThemeData;
      unselectedIconTheme?: IconThemeData;
      selectedItemColor?: Color;
      unselectedItemColor?: Color;
      selectedLabelStyle?: TextStyle;
      unselectedLabelStyle?: TextStyle;
      showSelectedLabels?: boolean;
      showUnselectedLabels?: boolean;
      type?: BottomNavigationBarType;
    } = {},
  ) {
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
  data: BottomNavigationBarThemeData;
  public constructor(namedParameters: { key?: Key; data?: BottomNavigationBarThemeData; child?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.data = namedParameters.data;
    this.child = namedParameters.child;
    this.className = 'BottomNavigationBarTheme';
  }
}
export { BottomNavigationBarTheme };
