//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Widget, BuildContext$ } from '../widgets/framework';
import { Key } from '../foundation/key';
import { InheritedTheme } from '../widgets/inherited-theme';
import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { Color } from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class DividerThemeData extends MXDartClass {
  color: Color;
  space: number;
  thickness: number;
  indent: number;
  endIndent: number;
  public constructor(
    namedParameters: { color?: Color; space?: number; thickness?: number; indent?: number; endIndent?: number } = {},
  ) {
    super();
    this.color = namedParameters.color;
    this.space = namedParameters.space;
    this.thickness = namedParameters.thickness;
    this.indent = namedParameters.indent;
    this.endIndent = namedParameters.endIndent;
    this.className = 'DividerThemeData';
  }
}
export { DividerThemeData };
class DividerTheme extends InheritedTheme {
  data: DividerThemeData;
  public constructor(namedParameters: { key?: Key; data?: DividerThemeData; child?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.data = namedParameters.data;
    this.child = namedParameters.child;
    this.className = 'DividerTheme';
  }
}
export { DividerTheme };
