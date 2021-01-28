//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { RenderSliver } from '../rendering/sliver';
import { ConstrainedLayoutBuilder } from './layout-builder';
class SliverLayoutBuilder extends ConstrainedLayoutBuilder {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['builder'] = namedParameters.builder;
        this.className = 'SliverLayoutBuilder';
    }
}
export { SliverLayoutBuilder };
class _RenderSliverLayoutBuilder extends RenderSliver {
}
export { _RenderSliverLayoutBuilder };
