// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class AssetBundle extends MXDartClass {}
export { AssetBundle };
class NetworkAssetBundle extends AssetBundle {
  baseUrl: any;
  httpClient: any;
  public constructor(baseUrl?: any) {
    super();
    this.baseUrl = baseUrl;
    this.className = 'NetworkAssetBundle';
  }
}
export { NetworkAssetBundle };
abstract class CachingAssetBundle extends AssetBundle {
  stringCache: Map<any, any>;
  structuredDataCache: Map<any, any>;
}
export { CachingAssetBundle };
class PlatformAssetBundle extends CachingAssetBundle {}
export { PlatformAssetBundle };
