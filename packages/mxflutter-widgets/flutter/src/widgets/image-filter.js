"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._ImageFilterRenderObject = exports.ImageFiltered = void 0;
const proxy_box_1 = require("../rendering/proxy-box");
const framework_1 = require("./framework");
class ImageFiltered extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.imageFilter = namedParameters.imageFilter;
        this.child = namedParameters.child;
        this.className = 'ImageFiltered';
    }
}
exports.ImageFiltered = ImageFiltered;
class _ImageFilterRenderObject extends proxy_box_1.RenderProxyBox {
    constructor(_imageFilter) {
        super();
        this.imageFilter = _imageFilter;
        this.className = '_ImageFilterRenderObject';
    }
}
exports._ImageFilterRenderObject = _ImageFilterRenderObject;
