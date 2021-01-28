//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Widget, BuildContext$ } from '../widgets/framework';
import { Key } from '../foundation/key';
import { InheritedTheme } from '../widgets/inherited-theme';
import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { TextStyle } from '../painting/text-style';
import { ShapeBorder } from '../painting/borders';
import { Color } from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class PopupMenuThemeData extends MXDartClass {
  color: Color;
  shape: ShapeBorder;
  elevation: number;
  textStyle: TextStyle;
  public constructor(
    namedParameters: { color?: Color; shape?: ShapeBorder; elevation?: number; textStyle?: TextStyle } = {},
  ) {
    super();
    this.color = namedParameters.color;
    this.shape = namedParameters.shape;
    this.elevation = namedParameters.elevation;
    this.textStyle = namedParameters.textStyle;
    this.className = 'PopupMenuThemeData';
  }
}
export { PopupMenuThemeData };
class PopupMenuTheme extends InheritedTheme {
  data: PopupMenuThemeData;
  public constructor(namedParameters: { key?: Key; data?: PopupMenuThemeData; child?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.data = namedParameters.data;
    this.child = namedParameters.child;
    this.className = 'PopupMenuTheme';
  }
}
export { PopupMenuTheme };
