"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._ColorFilterRenderObject = exports.ColorFiltered = void 0;
const proxy_box_1 = require("../rendering/proxy-box");
const framework_1 = require("./framework");
class ColorFiltered extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.colorFilter = namedParameters.colorFilter;
        this.child = namedParameters.child;
        this.key = namedParameters.key;
        this.className = 'ColorFiltered';
    }
}
exports.ColorFiltered = ColorFiltered;
class _ColorFilterRenderObject extends proxy_box_1.RenderProxyBox {
    constructor(_colorFilter) {
        super();
        this.colorFilter = _colorFilter;
        this.className = '_ColorFilterRenderObject';
    }
}
exports._ColorFilterRenderObject = _ColorFilterRenderObject;
