// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { ShapeBorder } from '../painting/borders';
import { Color } from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class FloatingActionButtonThemeData extends MXDartClass {
  foregroundColor: Color;
  backgroundColor: Color;
  focusColor: Color;
  hoverColor: Color;
  splashColor: Color;
  elevation: number;
  focusElevation: number;
  hoverElevation: number;
  disabledElevation: number;
  highlightElevation: number;
  shape: ShapeBorder;
  public constructor(namedParameters: {foregroundColor?: Color, backgroundColor?: Color, focusColor?: Color, hoverColor?: Color, splashColor?: Color, elevation?: number, focusElevation?: number, hoverElevation?: number, disabledElevation?: number, highlightElevation?: number, shape?: ShapeBorder} = {}) {
    super();
    this.foregroundColor = namedParameters.foregroundColor;
    this.backgroundColor = namedParameters.backgroundColor;
    this.focusColor = namedParameters.focusColor;
    this.hoverColor = namedParameters.hoverColor;
    this.splashColor = namedParameters.splashColor;
    this.elevation = namedParameters.elevation;
    this.focusElevation = namedParameters.focusElevation;
    this.hoverElevation = namedParameters.hoverElevation;
    this.disabledElevation = namedParameters.disabledElevation;
    this.highlightElevation = namedParameters.highlightElevation;
    this.shape = namedParameters.shape;
    this.className = 'FloatingActionButtonThemeData';
  }
}
export { FloatingActionButtonThemeData };
