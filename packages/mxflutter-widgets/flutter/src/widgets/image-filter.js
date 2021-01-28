//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { RenderProxyBox } from '../rendering/proxy-box';
import { SingleChildRenderObjectWidget } from './framework';
class ImageFiltered extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.imageFilter = namedParameters.imageFilter;
        this.child = namedParameters.child;
        this.className = 'ImageFiltered';
    }
}
export { ImageFiltered };
class _ImageFilterRenderObject extends RenderProxyBox {
    constructor(_imageFilter) {
        super();
        this.imageFilter = _imageFilter;
        this.className = '_ImageFilterRenderObject';
    }
}
export { _ImageFilterRenderObject };
