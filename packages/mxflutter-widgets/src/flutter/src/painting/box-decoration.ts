// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Gradient } from './gradient';
import { BorderRadiusGeometry } from './border-radius';
import { BoxBorder, BoxShape } from './box-border';
import { DecorationImage, DecorationImagePainter } from './decoration-image';
import { Color, BlendMode, Paint, Rect } from '../../../mx-dart-sdk';
import { Decoration, BoxPainter } from './decoration';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class BoxDecoration extends Decoration {
  color: Color;
  image: DecorationImage;
  border: BoxBorder;
  borderRadius: BorderRadiusGeometry;
  boxShadow: Array<any>;
  gradient: Gradient;
  backgroundBlendMode: BlendMode;
  shape: BoxShape;
  public constructor(namedParameters: {color?: Color, image?: DecorationImage, border?: BoxBorder, borderRadius?: BorderRadiusGeometry, boxShadow?: Array<any>, gradient?: Gradient, backgroundBlendMode?: BlendMode, shape?: BoxShape} = {}) {
    super();
    this.color = namedParameters.color;
    this.image = namedParameters.image;
    this.border = namedParameters.border;
    this.borderRadius = namedParameters.borderRadius;
    this.boxShadow = namedParameters.boxShadow;
    this.gradient = namedParameters.gradient;
    this.backgroundBlendMode = namedParameters.backgroundBlendMode;
    this.shape = namedParameters.shape;
    this.className = 'BoxDecoration';
  }
}
export { BoxDecoration };
class _BoxDecorationPainter extends BoxPainter {
  decoration: BoxDecoration;
  cachedBackgroundPaint: Paint;
  rectForCachedBackgroundPaint: Rect;
  imagePainter: DecorationImagePainter;
  public constructor(_decoration?: BoxDecoration, onChanged?: any) {
    super();
    this.decoration = _decoration;
    this.onChanged = onChanged;
    this.className = '_BoxDecorationPainter';
  }
}
export { _BoxDecorationPainter };
