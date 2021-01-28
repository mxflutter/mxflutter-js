//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { ShapeBorder } from '../painting/borders';
import { TextStyle } from '../painting/text-style';
import { Color } from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum SnackBarBehavior {
  fixed = '{ "_name": "SnackBarBehavior.fixed", "index": 0 }',
  floating = '{ "_name": "SnackBarBehavior.floating", "index": 1 }',
}

export { SnackBarBehavior };
class SnackBarThemeData extends MXDartClass {
  backgroundColor: Color;
  actionTextColor: Color;
  disabledActionTextColor: Color;
  contentTextStyle: TextStyle;
  elevation: number;
  shape: ShapeBorder;
  behavior: SnackBarBehavior;
  public constructor(
    namedParameters: {
      backgroundColor?: Color;
      actionTextColor?: Color;
      disabledActionTextColor?: Color;
      contentTextStyle?: TextStyle;
      elevation?: number;
      shape?: ShapeBorder;
      behavior?: SnackBarBehavior;
    } = {},
  ) {
    super();
    this.backgroundColor = namedParameters.backgroundColor;
    this.actionTextColor = namedParameters.actionTextColor;
    this.disabledActionTextColor = namedParameters.disabledActionTextColor;
    this.contentTextStyle = namedParameters.contentTextStyle;
    this.elevation = namedParameters.elevation;
    this.shape = namedParameters.shape;
    this.behavior = namedParameters.behavior;
    this.className = 'SnackBarThemeData';
  }
}
export { SnackBarThemeData };
