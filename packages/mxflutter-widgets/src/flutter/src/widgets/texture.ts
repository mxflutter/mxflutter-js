//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { TextureBox } from '../rendering/texture';
import { Key } from '../foundation/key';
import { FilterQuality } from '../../../mx-dart-sdk';
import { LeafRenderObjectWidget, BuildContext$ } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class Texture extends LeafRenderObjectWidget {
  textureId: number;
  filterQuality: FilterQuality;
  public constructor(namedParameters: { key?: Key; textureId?: number; filterQuality?: FilterQuality } = {}) {
    super();
    this.key = namedParameters.key;
    this.textureId = namedParameters.textureId;
    this.filterQuality = namedParameters.filterQuality;
    this.className = 'Texture';
  }
}
export { Texture };
