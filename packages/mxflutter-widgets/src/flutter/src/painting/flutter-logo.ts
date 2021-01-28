//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { ImageConfiguration } from './image-provider';
import { TextPainter } from './text-painter';
import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { EdgeInsets } from './edge-insets';
import { Color, Size, Offset, TextDirection, Rect, Canvas } from '../../../mx-dart-sdk';
import { Decoration, BoxPainter } from './decoration';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum FlutterLogoStyle {
  markOnly = '{ "_name": "FlutterLogoStyle.markOnly", "index": 0 }',
  horizontal = '{ "_name": "FlutterLogoStyle.horizontal", "index": 1 }',
  stacked = '{ "_name": "FlutterLogoStyle.stacked", "index": 2 }',
}

export { FlutterLogoStyle };
class FlutterLogoDecoration extends Decoration {
  lightColor: Color;
  darkColor: Color;
  textColor: Color;
  style: FlutterLogoStyle;
  margin: EdgeInsets;
  position: number;
  opacity: number;
  public constructor(
    namedParameters: {
      lightColor?: Color;
      darkColor?: Color;
      textColor?: Color;
      style?: FlutterLogoStyle;
      margin?: EdgeInsets;
    } = {},
  ) {
    super();
    this.lightColor = namedParameters.lightColor;
    this.darkColor = namedParameters.darkColor;
    this.textColor = namedParameters.textColor;
    this.style = namedParameters.style;
    this.margin = namedParameters.margin;
    this.className = 'FlutterLogoDecoration';
  }
}
export { FlutterLogoDecoration };
class _FlutterLogoPainter extends BoxPainter {
  config: FlutterLogoDecoration;
  textPainter: TextPainter;
  textBoundingRect: Rect;
  public constructor(_config?: FlutterLogoDecoration) {
    super();
    this.config = _config;
    this.className = '_FlutterLogoPainter';
  }
}
export { _FlutterLogoPainter };
