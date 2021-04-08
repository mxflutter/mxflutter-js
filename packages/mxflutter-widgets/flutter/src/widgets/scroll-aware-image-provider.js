"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrollAwareImageProvider = void 0;
const image_provider_1 = require("../painting/image-provider");
class ScrollAwareImageProvider extends image_provider_1.ImageProvider {
    constructor(namedParameters = {}) {
        super();
        this.context = namedParameters.context;
        this.imageProvider = namedParameters.imageProvider;
        this.className = 'ScrollAwareImageProvider';
    }
}
exports.ScrollAwareImageProvider = ScrollAwareImageProvider;
