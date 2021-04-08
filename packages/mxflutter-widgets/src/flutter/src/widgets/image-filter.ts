// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { RenderProxyBox } from '../rendering/proxy-box';
import { Key } from '../foundation/key';
import { ImageFilter } from '../../../mx-dart-sdk';
import { SingleChildRenderObjectWidget, Widget } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class ImageFiltered extends SingleChildRenderObjectWidget {
  imageFilter: ImageFilter;
  public constructor(namedParameters: {key?: Key, imageFilter?: ImageFilter, child?: MXWidget} = {}) {
    super();
    this.key = namedParameters.key;
    this.imageFilter = namedParameters.imageFilter;
    this.child = namedParameters.child;
    this.className = 'ImageFiltered';
  }
}
export { ImageFiltered };
class _ImageFilterRenderObject extends RenderProxyBox {
  imageFilter: ImageFilter;
  public constructor(_imageFilter?: ImageFilter) {
    super();
    this.imageFilter = _imageFilter;
    this.className = '_ImageFilterRenderObject';
  }
}
export { _ImageFilterRenderObject };
