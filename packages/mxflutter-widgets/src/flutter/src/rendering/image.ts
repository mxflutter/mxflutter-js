// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { ImageRepeat } from '../painting/decoration-image';
import { BoxFit } from '../painting/box-fit';
import { Image, ColorFilter, Color, FilterQuality, BlendMode, Rect, TextDirection } from '../../../mx-dart-sdk';
import { Alignment, AlignmentGeometry } from '../painting/alignment';
import { RenderBox } from './box';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class RenderImage extends RenderBox {
  resolvedAlignment: Alignment;
  flipHorizontally: boolean;
  image: Image;
  debugImageLabel: string;
  width: number;
  height: number;
  scale: number;
  colorFilter: ColorFilter;
  color: Color;
  filterQuality: FilterQuality;
  colorBlendMode: BlendMode;
  fit: BoxFit;
  alignment: AlignmentGeometry;
  repeat: ImageRepeat;
  centerSlice: Rect;
  invertColors: boolean;
  matchTextDirection: boolean;
  textDirection: TextDirection;
  isAntiAlias: boolean;
  public constructor(namedParameters: {image?: Image, debugImageLabel?: string, width?: number, height?: number, scale?: number, color?: Color, colorBlendMode?: BlendMode, fit?: BoxFit, alignment?: AlignmentGeometry, repeat?: ImageRepeat, centerSlice?: Rect, matchTextDirection?: boolean, textDirection?: TextDirection, invertColors?: boolean, isAntiAlias?: boolean, filterQuality?: FilterQuality} = {}) {
    super();
    this.image = namedParameters.image;
    this.debugImageLabel = namedParameters.debugImageLabel;
    this.width = namedParameters.width;
    this.height = namedParameters.height;
    this.scale = namedParameters.scale;
    this.color = namedParameters.color;
    this.colorBlendMode = namedParameters.colorBlendMode;
    this.fit = namedParameters.fit;
    this.alignment = namedParameters.alignment;
    this.repeat = namedParameters.repeat;
    this.centerSlice = namedParameters.centerSlice;
    this.matchTextDirection = namedParameters.matchTextDirection;
    this.textDirection = namedParameters.textDirection;
    this.invertColors = namedParameters.invertColors;
    this.isAntiAlias = namedParameters.isAntiAlias;
    this.filterQuality = namedParameters.filterQuality;
    this.className = 'RenderImage';
  }
}
export { RenderImage };
