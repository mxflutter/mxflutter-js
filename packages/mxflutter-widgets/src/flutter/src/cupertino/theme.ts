// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { CupertinoTextThemeData } from './text-theme';
import { Brightness, Color } from '../../../mx-dart-sdk';
import { Key } from '../foundation/key';
import { StatelessWidget, Widget, InheritedWidget } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class CupertinoTheme extends StatelessWidget {
  data: CupertinoThemeData;
  child: MXWidget;
  public constructor(namedParameters: {key?: Key, data?: CupertinoThemeData, child?: MXWidget} = {}) {
    super();
    this.key = namedParameters.key;
    this.data = namedParameters.data;
    this.child = namedParameters.child;
    this.className = 'CupertinoTheme';
  }
}
export { CupertinoTheme };
class _InheritedCupertinoTheme extends InheritedWidget {
  theme: CupertinoTheme;
  public constructor(namedParameters: {key?: Key, theme?: CupertinoTheme, child?: MXWidget} = {}) {
    super();
    this.key = namedParameters.key;
    this.theme = namedParameters.theme;
    this.child = namedParameters.child;
    this.className = '_InheritedCupertinoTheme';
  }
}
export { _InheritedCupertinoTheme };
class CupertinoThemeData extends MXDartClass {
  defaults: _CupertinoThemeDefaults;
  brightness: Brightness;
  primaryColor: Color;
  primaryContrastingColor: Color;
  textTheme: CupertinoTextThemeData;
  barBackgroundColor: Color;
  scaffoldBackgroundColor: Color;
  public constructor(namedParameters: {brightness?: Brightness, primaryColor?: Color, primaryContrastingColor?: Color, textTheme?: CupertinoTextThemeData, barBackgroundColor?: Color, scaffoldBackgroundColor?: Color} = {}) {
    super();
    this.brightness = namedParameters.brightness;
    this.primaryColor = namedParameters.primaryColor;
    this.primaryContrastingColor = namedParameters.primaryContrastingColor;
    this.textTheme = namedParameters.textTheme;
    this.barBackgroundColor = namedParameters.barBackgroundColor;
    this.scaffoldBackgroundColor = namedParameters.scaffoldBackgroundColor;
    this.className = 'CupertinoThemeData';
  }
  static raw(brightness?: Brightness, primaryColor?: Color, primaryContrastingColor?: Color, textTheme?: CupertinoTextThemeData, barBackgroundColor?: Color, scaffoldBackgroundColor?: Color) {
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
  primaryColor: Color;
  primaryContrastingColor: Color;
  textTheme: CupertinoTextThemeData;
  barBackgroundColor: Color;
  scaffoldBackgroundColor: Color;
  public constructor(brightness?: Brightness, primaryColor?: Color, primaryContrastingColor?: Color, textTheme?: CupertinoTextThemeData, barBackgroundColor?: Color, scaffoldBackgroundColor?: Color) {
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
  brightness: Brightness;
  primaryColor: Color;
  primaryContrastingColor: Color;
  barBackgroundColor: Color;
  scaffoldBackgroundColor: Color;
  textThemeDefaults: _CupertinoTextThemeDefaults;
  public constructor(brightness?: Brightness, primaryColor?: Color, primaryContrastingColor?: Color, barBackgroundColor?: Color, scaffoldBackgroundColor?: Color, textThemeDefaults?: _CupertinoTextThemeDefaults) {
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
  labelColor: Color;
  inactiveGray: Color;
  public constructor(labelColor?: Color, inactiveGray?: Color) {
    super();
    this.labelColor = labelColor;
    this.inactiveGray = inactiveGray;
    this.className = '_CupertinoTextThemeDefaults';
  }
}
export { _CupertinoTextThemeDefaults };
class _DefaultCupertinoTextThemeData extends CupertinoTextThemeData {
  labelColor: Color;
  inactiveGray: Color;
  public constructor(namedParameters: {labelColor?: Color, inactiveGray?: Color, primaryColor?: Color} = {}) {
    super();
    this.labelColor = namedParameters.labelColor;
    this.inactiveGray = namedParameters.inactiveGray;
    this.primaryColor = namedParameters.primaryColor;
    this.className = '_DefaultCupertinoTextThemeData';
  }
}
export { _DefaultCupertinoTextThemeData };
