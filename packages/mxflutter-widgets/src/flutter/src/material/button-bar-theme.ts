// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Key } from '../foundation/key';
import { InheritedWidget, Widget } from '../widgets/framework';
import { VerticalDirection } from '../painting/basic-types';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { ButtonTextTheme, ButtonBarLayoutBehavior } from './button-theme';
import { MainAxisAlignment, MainAxisSize } from '../rendering/flex';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class ButtonBarThemeData extends MXDartClass {
  alignment: MainAxisAlignment;
  mainAxisSize: MainAxisSize;
  buttonTextTheme: ButtonTextTheme;
  buttonMinWidth: number;
  buttonHeight: number;
  buttonPadding: EdgeInsetsGeometry;
  buttonAlignedDropdown: boolean;
  layoutBehavior: ButtonBarLayoutBehavior;
  overflowDirection: VerticalDirection;
  public constructor(namedParameters: {alignment?: MainAxisAlignment, mainAxisSize?: MainAxisSize, buttonTextTheme?: ButtonTextTheme, buttonMinWidth?: number, buttonHeight?: number, buttonPadding?: EdgeInsetsGeometry, buttonAlignedDropdown?: boolean, layoutBehavior?: ButtonBarLayoutBehavior, overflowDirection?: VerticalDirection} = {}) {
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
  data: ButtonBarThemeData;
  public constructor(namedParameters: {key?: Key, data?: ButtonBarThemeData, child?: MXWidget} = {}) {
    super();
    this.key = namedParameters.key;
    this.data = namedParameters.data;
    this.child = namedParameters.child;
    this.className = 'ButtonBarTheme';
  }
}
export { ButtonBarTheme };
