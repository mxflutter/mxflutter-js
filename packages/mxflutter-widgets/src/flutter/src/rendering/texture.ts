//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { PaintingContext } from './object';
import { FilterQuality, Offset } from '../../../mx-dart-sdk';
import { RenderBox } from './box';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class TextureBox extends RenderBox {
  textureId: number;
  filterQuality: FilterQuality;
  public constructor(namedParameters: { textureId?: number; filterQuality?: FilterQuality } = {}) {
    super();
    this.textureId = namedParameters.textureId;
    this.filterQuality = namedParameters.filterQuality;
    this.className = 'TextureBox';
  }
}
export { TextureBox };
