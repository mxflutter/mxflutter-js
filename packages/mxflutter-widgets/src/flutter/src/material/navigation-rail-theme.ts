// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Widget } from '../widgets/framework';
import { Key } from '../foundation/key';
import { InheritedTheme } from '../widgets/inherited-theme';
import { NavigationRailLabelType } from './navigation-rail';
import { IconThemeData } from '../widgets/icon-theme-data';
import { TextStyle } from '../painting/text-style';
import { Color } from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class NavigationRailThemeData extends MXDartClass {
  backgroundColor: Color;
  elevation: number;
  unselectedLabelTextStyle: TextStyle;
  selectedLabelTextStyle: TextStyle;
  unselectedIconTheme: IconThemeData;
  selectedIconTheme: IconThemeData;
  groupAlignment: number;
  labelType: NavigationRailLabelType;
  public constructor(namedParameters: {backgroundColor?: Color, elevation?: number, unselectedLabelTextStyle?: TextStyle, selectedLabelTextStyle?: TextStyle, unselectedIconTheme?: IconThemeData, selectedIconTheme?: IconThemeData, groupAlignment?: number, labelType?: NavigationRailLabelType} = {}) {
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
  data: NavigationRailThemeData;
  public constructor(namedParameters: {key?: Key, data?: NavigationRailThemeData, child?: MXWidget} = {}) {
    super();
    this.key = namedParameters.key;
    this.data = namedParameters.data;
    this.child = namedParameters.child;
    this.className = 'NavigationRailTheme';
  }
}
export { NavigationRailTheme };
