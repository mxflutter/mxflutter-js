// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { TextStyle } from '../painting/text-style';
import { ShapeBorder } from '../painting/borders';
import { Color } from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class DialogTheme extends MXDartClass {
  backgroundColor: Color;
  elevation: number;
  shape: ShapeBorder;
  titleTextStyle: TextStyle;
  contentTextStyle: TextStyle;
  public constructor(namedParameters: {backgroundColor?: Color, elevation?: number, shape?: ShapeBorder, titleTextStyle?: TextStyle, contentTextStyle?: TextStyle} = {}) {
    super();
    this.backgroundColor = namedParameters.backgroundColor;
    this.elevation = namedParameters.elevation;
    this.shape = namedParameters.shape;
    this.titleTextStyle = namedParameters.titleTextStyle;
    this.contentTextStyle = namedParameters.contentTextStyle;
    this.className = 'DialogTheme';
  }
}
export { DialogTheme };
