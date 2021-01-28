//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { ShapeBorder } from '../painting/borders';
import { Color, Clip } from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class BottomSheetThemeData extends MXDartClass {
  backgroundColor: Color;
  elevation: number;
  modalBackgroundColor: Color;
  modalElevation: number;
  shape: ShapeBorder;
  clipBehavior: Clip;
  public constructor(
    namedParameters: {
      backgroundColor?: Color;
      elevation?: number;
      modalBackgroundColor?: Color;
      modalElevation?: number;
      shape?: ShapeBorder;
      clipBehavior?: Clip;
    } = {},
  ) {
    super();
    this.backgroundColor = namedParameters.backgroundColor;
    this.elevation = namedParameters.elevation;
    this.modalBackgroundColor = namedParameters.modalBackgroundColor;
    this.modalElevation = namedParameters.modalElevation;
    this.shape = namedParameters.shape;
    this.clipBehavior = namedParameters.clipBehavior;
    this.className = 'BottomSheetThemeData';
  }
}
export { BottomSheetThemeData };
