// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { TextTheme } from './text-theme';
import { IconThemeData } from '../widgets/icon-theme-data';
import { Brightness, Color } from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class AppBarTheme extends MXDartClass {
  brightness: Brightness;
  color: Color;
  elevation: number;
  shadowColor: Color;
  iconTheme: IconThemeData;
  actionsIconTheme: IconThemeData;
  textTheme: TextTheme;
  centerTitle: boolean;
  public constructor(namedParameters: {brightness?: Brightness, color?: Color, elevation?: number, shadowColor?: Color, iconTheme?: IconThemeData, actionsIconTheme?: IconThemeData, textTheme?: TextTheme, centerTitle?: boolean} = {}) {
    super();
    this.brightness = namedParameters.brightness;
    this.color = namedParameters.color;
    this.elevation = namedParameters.elevation;
    this.shadowColor = namedParameters.shadowColor;
    this.iconTheme = namedParameters.iconTheme;
    this.actionsIconTheme = namedParameters.actionsIconTheme;
    this.textTheme = namedParameters.textTheme;
    this.centerTitle = namedParameters.centerTitle;
    this.className = 'AppBarTheme';
  }
}
export { AppBarTheme };
