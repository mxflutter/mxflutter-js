//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { ImageConfiguration } from './image-provider';
import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { BoxDecoration } from './box-decoration';
import { ShapeBorder } from './borders';
import { DecorationImage, DecorationImagePainter } from './decoration-image';
import { Gradient } from './gradient';
import { Color, Rect, TextDirection, Size, Offset, Path, Paint, Canvas } from '../../../mx-dart-sdk';
import { Decoration, BoxPainter } from './decoration';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class ShapeDecoration extends Decoration {
  color: Color;
  gradient: Gradient;
  image: DecorationImage;
  shadows: Array<any>;
  shape: ShapeBorder;
  public constructor(
    namedParameters: {
      color?: Color;
      image?: DecorationImage;
      gradient?: Gradient;
      shadows?: Array<any>;
      shape?: ShapeBorder;
    } = {},
  ) {
    super();
    this.color = namedParameters.color;
    this.image = namedParameters.image;
    this.gradient = namedParameters.gradient;
    this.shadows = namedParameters.shadows;
    this.shape = namedParameters.shape;
    this.className = 'ShapeDecoration';
  }
  static fromBoxDecoration(source?: BoxDecoration) {
    var jsObj = new ShapeDecoration();
    jsObj['source'] = source;
    jsObj['constructorName'] = 'fromBoxDecoration';
    return jsObj;
  }
}
export { ShapeDecoration };
class _ShapeDecorationPainter extends BoxPainter {
  decoration: ShapeDecoration;
  lastRect: Rect;
  lastTextDirection: TextDirection;
  outerPath: Path;
  innerPath: Path;
  interiorPaint: Paint;
  shadowCount: number;
  shadowPaths: Array<any>;
  shadowPaints: Array<any>;
  imagePainter: DecorationImagePainter;
  public constructor(_decoration?: ShapeDecoration, onChanged?: any) {
    super();
    this.decoration = _decoration;
    this.onChanged = onChanged;
    this.className = '_ShapeDecorationPainter';
  }
}
export { _ShapeDecorationPainter };
