// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { ImageStream, ImageInfo } from './image-stream';
import { AlignmentGeometry } from './alignment';
import { BoxFit } from './box-fit';
import { ColorFilter, Rect } from '../../../mx-dart-sdk';
import { ImageProvider } from './image-provider';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum ImageRepeat {
  repeat = '{ "_name": "ImageRepeat.repeat", "index": 0 }',
  repeatX = '{ "_name": "ImageRepeat.repeatX", "index": 1 }',
  repeatY = '{ "_name": "ImageRepeat.repeatY", "index": 2 }',
  noRepeat = '{ "_name": "ImageRepeat.noRepeat", "index": 3 }',
};

export { ImageRepeat };
class DecorationImage extends MXDartClass {
  image: ImageProvider;
  onError: any;
  colorFilter: ColorFilter;
  fit: BoxFit;
  alignment: AlignmentGeometry;
  centerSlice: Rect;
  repeat: ImageRepeat;
  matchTextDirection: boolean;
  scale: number;
  public constructor(namedParameters: {image?: ImageProvider, onError?: any, colorFilter?: ColorFilter, fit?: BoxFit, alignment?: AlignmentGeometry, centerSlice?: Rect, repeat?: ImageRepeat, matchTextDirection?: boolean, scale?: number} = {}) {
    super();
    this.image = namedParameters.image;
    this.onError = namedParameters.onError;
    this.colorFilter = namedParameters.colorFilter;
    this.fit = namedParameters.fit;
    this.alignment = namedParameters.alignment;
    this.centerSlice = namedParameters.centerSlice;
    this.repeat = namedParameters.repeat;
    this.matchTextDirection = namedParameters.matchTextDirection;
    this.scale = namedParameters.scale;
    this.className = 'DecorationImage';
  }
}
export { DecorationImage };
class DecorationImagePainter extends MXDartClass {
  details: DecorationImage;
  onChanged: any;
  imageStream: ImageStream;
  image: ImageInfo;
}
export { DecorationImagePainter };
