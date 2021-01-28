//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { AssetBundleImageProvider } from './image-provider';
class AssetImage extends AssetBundleImageProvider {
    constructor(assetName, namedParameters = {}) {
        super();
        this.assetName = assetName;
        this.bundle = namedParameters.bundle;
        this.__mx_package = namedParameters.__mx_package;
        this.className = 'AssetImage';
    }
}
export { AssetImage };