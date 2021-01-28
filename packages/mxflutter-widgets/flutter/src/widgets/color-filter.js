//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { RenderProxyBox } from '../rendering/proxy-box';
import { SingleChildRenderObjectWidget } from './framework';
class ColorFiltered extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.colorFilter = namedParameters.colorFilter;
        this.child = namedParameters.child;
        this.key = namedParameters.key;
        this.className = 'ColorFiltered';
    }
}
export { ColorFiltered };
class _ColorFilterRenderObject extends RenderProxyBox {
    constructor(_colorFilter) {
        super();
        this.colorFilter = _colorFilter;
        this.className = '_ColorFilterRenderObject';
    }
}
export { _ColorFilterRenderObject };
