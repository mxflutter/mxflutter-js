//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { BuildContext$ } from '../widgets/framework';
import { ShapeBorder } from '../painting/borders';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { Clip, Color } from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class CardTheme extends MXDartClass {
  clipBehavior: Clip;
  color: Color;
  shadowColor: Color;
  elevation: number;
  margin: EdgeInsetsGeometry;
  shape: ShapeBorder;
  public constructor(
    namedParameters: {
      clipBehavior?: Clip;
      color?: Color;
      shadowColor?: Color;
      elevation?: number;
      margin?: EdgeInsetsGeometry;
      shape?: ShapeBorder;
    } = {},
  ) {
    super();
    this.clipBehavior = namedParameters.clipBehavior;
    this.color = namedParameters.color;
    this.shadowColor = namedParameters.shadowColor;
    this.elevation = namedParameters.elevation;
    this.margin = namedParameters.margin;
    this.shape = namedParameters.shape;
    this.className = 'CardTheme';
  }
}
export { CardTheme };
