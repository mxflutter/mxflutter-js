//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { MXDartClass } from '@mxflutter/mxflutter-base';
class AssetBundle extends MXDartClass {
}
export { AssetBundle };
class NetworkAssetBundle extends AssetBundle {
    constructor(baseUrl) {
        super();
        this.baseUrl = baseUrl;
        this.className = 'NetworkAssetBundle';
    }
}
export { NetworkAssetBundle };
class CachingAssetBundle extends AssetBundle {
}
export { CachingAssetBundle };
class PlatformAssetBundle extends CachingAssetBundle {
}
export { PlatformAssetBundle };
