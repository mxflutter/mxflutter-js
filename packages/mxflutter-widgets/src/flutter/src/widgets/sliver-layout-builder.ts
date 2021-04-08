// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { RenderSliver } from '../rendering/sliver';
import { Key } from '../foundation/key';
import { ConstrainedLayoutBuilder } from './layout-builder';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class SliverLayoutBuilder extends ConstrainedLayoutBuilder {
  public constructor(namedParameters: {key?: Key, builder?: any} = {}) {
    super();
    this['key'] = namedParameters.key;
    this['builder'] = namedParameters.builder;
    this.className = 'SliverLayoutBuilder';
  }
}
export { SliverLayoutBuilder };
class _RenderSliverLayoutBuilder extends RenderSliver {}
export { _RenderSliverLayoutBuilder };
