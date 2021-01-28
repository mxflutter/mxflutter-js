//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Widget, BuildContext$ } from '../widgets/framework';
import { Key } from '../foundation/key';
import { InheritedTheme } from '../widgets/inherited-theme';
import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { Duration } from '../../../mx-dart-sdk';
import { TextStyle } from '../painting/text-style';
import { Decoration } from '../painting/decoration';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class TooltipThemeData extends MXDartClass {
  height: number;
  padding: EdgeInsetsGeometry;
  margin: EdgeInsetsGeometry;
  verticalOffset: number;
  preferBelow: boolean;
  excludeFromSemantics: boolean;
  decoration: Decoration;
  textStyle: TextStyle;
  waitDuration: Duration;
  showDuration: Duration;
  public constructor(
    namedParameters: {
      height?: number;
      padding?: EdgeInsetsGeometry;
      margin?: EdgeInsetsGeometry;
      verticalOffset?: number;
      preferBelow?: boolean;
      excludeFromSemantics?: boolean;
      decoration?: Decoration;
      textStyle?: TextStyle;
      waitDuration?: Duration;
      showDuration?: Duration;
    } = {},
  ) {
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
  data: TooltipThemeData;
  public constructor(namedParameters: { key?: Key; data?: TooltipThemeData; child?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.data = namedParameters.data;
    this.child = namedParameters.child;
    this.className = 'TooltipTheme';
  }
}
export { TooltipTheme };
