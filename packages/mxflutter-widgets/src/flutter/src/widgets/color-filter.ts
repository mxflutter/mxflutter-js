// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { RenderProxyBox } from '../rendering/proxy-box';
import { Key } from '../foundation/key';
import { ColorFilter } from '../../../mx-dart-sdk';
import { SingleChildRenderObjectWidget, Widget } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class ColorFiltered extends SingleChildRenderObjectWidget {
  colorFilter: ColorFilter;
  public constructor(namedParameters: {colorFilter?: ColorFilter, child?: MXWidget, key?: Key} = {}) {
    super();
    this.colorFilter = namedParameters.colorFilter;
    this.child = namedParameters.child;
    this.key = namedParameters.key;
    this.className = 'ColorFiltered';
  }
}
export { ColorFiltered };
class _ColorFilterRenderObject extends RenderProxyBox {
  colorFilter: ColorFilter;
  public constructor(_colorFilter?: ColorFilter) {
    super();
    this.colorFilter = _colorFilter;
    this.className = '_ColorFilterRenderObject';
  }
}
export { _ColorFilterRenderObject };
