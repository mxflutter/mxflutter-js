"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetImage = void 0;
const image_provider_1 = require("./image-provider");
class AssetImage extends image_provider_1.AssetBundleImageProvider {
    constructor(assetName, namedParameters = {}) {
        super();
        this.assetName = assetName;
        this.bundle = namedParameters.bundle;
        this.__mx_package = namedParameters.__mx_package;
        this.className = 'AssetImage';
    }
}
exports.AssetImage = AssetImage;
