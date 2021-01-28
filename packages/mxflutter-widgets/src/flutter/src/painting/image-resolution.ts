//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { AssetBundle } from '../services/asset-bundle';
import { AssetBundleImageProvider, ImageConfiguration } from './image-provider';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class AssetImage extends AssetBundleImageProvider {
  assetName: string;
  bundle: AssetBundle;
  __mx_package: string;
  public constructor(assetName?: string, namedParameters: { bundle?: AssetBundle; __mx_package?: string } = {}) {
    super();
    this.assetName = assetName;
    this.bundle = namedParameters.bundle;
    this.__mx_package = namedParameters.__mx_package;
    this.className = 'AssetImage';
  }
}
export { AssetImage };
