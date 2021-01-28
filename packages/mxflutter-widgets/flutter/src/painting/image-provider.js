//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { ImageStreamCompleter } from './image-stream';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class ImageConfiguration extends MXDartClass {
    constructor(namedParameters = {}) {
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
class ImageProvider extends MXDartClass {
}
export { ImageProvider };
class AssetBundleImageKey extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.bundle = namedParameters.bundle;
        this.name = namedParameters.name;
        this.scale = namedParameters.scale;
        this.className = 'AssetBundleImageKey';
    }
}
export { AssetBundleImageKey };
class AssetBundleImageProvider extends ImageProvider {
}
export { AssetBundleImageProvider };
class _SizeAwareCacheKey extends MXDartClass {
    constructor(providerCacheKey, width, height) {
        super();
        this.providerCacheKey = providerCacheKey;
        this.width = width;
        this.height = height;
        this.className = '_SizeAwareCacheKey';
    }
}
export { _SizeAwareCacheKey };
class ResizeImage extends ImageProvider {
    constructor(imageProvider, namedParameters = {}) {
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
    constructor(url, namedParameters = {}) {
        super();
        this['url'] = url;
        this['scale'] = namedParameters.scale;
        this['headers'] = namedParameters.headers;
        this.className = 'NetworkImage';
    }
}
export { NetworkImage };
class FileImage extends ImageProvider {
    constructor(file, namedParameters = {}) {
        super();
        this.file = file;
        this.scale = namedParameters.scale;
        this.className = 'FileImage';
    }
}
export { FileImage };
class MemoryImage extends ImageProvider {
    constructor(bytes, namedParameters = {}) {
        super();
        this.bytes = bytes;
        this.scale = namedParameters.scale;
        this.className = 'MemoryImage';
    }
}
export { MemoryImage };
class ExactAssetImage extends AssetBundleImageProvider {
    constructor(assetName, namedParameters = {}) {
        super();
        this.assetName = assetName;
        this.scale = namedParameters.scale;
        this.bundle = namedParameters.bundle;
        this.__mx_package = namedParameters.__mx_package;
        this.className = 'ExactAssetImage';
    }
}
export { ExactAssetImage };
class _ErrorImageCompleter extends ImageStreamCompleter {
}
export { _ErrorImageCompleter };
class NetworkImageLoadException extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.statusCode = namedParameters.statusCode;
        this.uri = namedParameters.uri;
        this.className = 'NetworkImageLoadException';
    }
}
export { NetworkImageLoadException };
