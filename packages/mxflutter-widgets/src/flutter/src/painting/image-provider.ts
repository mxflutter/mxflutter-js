//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { ImageCache } from './image-cache';
import { ImageStream, ImageStreamCompleter } from './image-stream';
import { TargetPlatform } from '../foundation/platform';
import { Locale, TextDirection, Size } from '../../../mx-dart-sdk';
import { AssetBundle } from '../services/asset-bundle';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class ImageConfiguration extends MXDartClass {
  bundle: AssetBundle;
  devicePixelRatio: number;
  locale: Locale;
  textDirection: TextDirection;
  size: Size;
  platform: TargetPlatform;
  public constructor(
    namedParameters: {
      bundle?: AssetBundle;
      devicePixelRatio?: number;
      locale?: Locale;
      textDirection?: TextDirection;
      size?: Size;
      platform?: TargetPlatform;
    } = {},
  ) {
    super();
    this.bundle = namedParameters.bundle;
    this.devicePixelRatio = namedParameters.devicePixelRatio;
    this.locale = namedParameters.locale;
    this.textDirection = namedParameters.textDirection;
    this.size = namedParameters.size;
    this.platform = namedParameters.platform;
    this.className = 'ImageConfiguration';
  }
  static get empty() {
    var jsObj = new ImageConfiguration();
    jsObj['className'] = 'ImageConfiguration';
    jsObj['constructorName'] = 'empty';
    return jsObj;
  }
}
export { ImageConfiguration };
abstract class ImageProvider extends MXDartClass {}
export { ImageProvider };
class AssetBundleImageKey extends MXDartClass {
  bundle: AssetBundle;
  name: string;
  scale: number;
  public constructor(namedParameters: { bundle?: AssetBundle; name?: string; scale?: number } = {}) {
    super();
    this.bundle = namedParameters.bundle;
    this.name = namedParameters.name;
    this.scale = namedParameters.scale;
    this.className = 'AssetBundleImageKey';
  }
}
export { AssetBundleImageKey };
abstract class AssetBundleImageProvider extends ImageProvider {}
export { AssetBundleImageProvider };
class _SizeAwareCacheKey extends MXDartClass {
  providerCacheKey: any;
  width: number;
  height: number;
  public constructor(providerCacheKey?: any, width?: number, height?: number) {
    super();
    this.providerCacheKey = providerCacheKey;
    this.width = width;
    this.height = height;
    this.className = '_SizeAwareCacheKey';
  }
}
export { _SizeAwareCacheKey };
class ResizeImage extends ImageProvider {
  imageProvider: ImageProvider;
  width: number;
  height: number;
  allowUpscaling: boolean;
  public constructor(
    imageProvider?: ImageProvider,
    namedParameters: { width?: number; height?: number; allowUpscaling?: boolean } = {},
  ) {
    super();
    this.imageProvider = imageProvider;
    this.width = namedParameters.width;
    this.height = namedParameters.height;
    this.allowUpscaling = namedParameters.allowUpscaling;
    this.className = 'ResizeImage';
  }
}
export { ResizeImage };
// MX Modified begin
class NetworkImage extends ImageProvider {
  // MX Modified end
  public constructor(url?: string, namedParameters: { scale?: number; headers?: Map<any, any> } = {}) {
    super();
    this['url'] = url;
    this['scale'] = namedParameters.scale;
    this['headers'] = namedParameters.headers;
    this.className = 'NetworkImage';
  }
}
export { NetworkImage };
class FileImage extends ImageProvider {
  file: any;
  scale: number;
  public constructor(file?: any, namedParameters: { scale?: number } = {}) {
    super();
    this.file = file;
    this.scale = namedParameters.scale;
    this.className = 'FileImage';
  }
}
export { FileImage };
class MemoryImage extends ImageProvider {
  bytes: any;
  scale: number;
  public constructor(bytes?: any, namedParameters: { scale?: number } = {}) {
    super();
    this.bytes = bytes;
    this.scale = namedParameters.scale;
    this.className = 'MemoryImage';
  }
}
export { MemoryImage };
class ExactAssetImage extends AssetBundleImageProvider {
  assetName: string;
  scale: number;
  bundle: AssetBundle;
  __mx_package: string;
  public constructor(
    assetName?: string,
    namedParameters: { scale?: number; bundle?: AssetBundle; __mx_package?: string } = {},
  ) {
    super();
    this.assetName = assetName;
    this.scale = namedParameters.scale;
    this.bundle = namedParameters.bundle;
    this.__mx_package = namedParameters.__mx_package;
    this.className = 'ExactAssetImage';
  }
}
export { ExactAssetImage };
class _ErrorImageCompleter extends ImageStreamCompleter {}
export { _ErrorImageCompleter };
class NetworkImageLoadException extends MXDartClass {
  statusCode: number;
  message: string;
  uri: any;
  public constructor(namedParameters: { statusCode?: number; uri?: any } = {}) {
    super();
    this.statusCode = namedParameters.statusCode;
    this.uri = namedParameters.uri;
    this.className = 'NetworkImageLoadException';
  }
}
export { NetworkImageLoadException };
