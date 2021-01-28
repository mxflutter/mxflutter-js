//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { RenderSliver } from './sliver';
class RenderSliverEdgeInsetsPadding extends RenderSliver {
}
export { RenderSliverEdgeInsetsPadding };
class RenderSliverPadding extends RenderSliverEdgeInsetsPadding {
    constructor(namedParameters = {}) {
        super();
        this.padding = namedParameters.padding;
        this.textDirection = namedParameters.textDirection;
        this['child'] = namedParameters.child;
        this.className = 'RenderSliverPadding';
    }
}
export { RenderSliverPadding };
