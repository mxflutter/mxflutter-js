"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkImageLoadException = exports._ErrorImageCompleter = exports.ExactAssetImage = exports.MemoryImage = exports.FileImage = exports.NetworkImage = exports.ResizeImage = exports._SizeAwareCacheKey = exports.AssetBundleImageProvider = exports.AssetBundleImageKey = exports.ImageProvider = exports.ImageConfiguration = void 0;
const image_stream_1 = require("./image-stream");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class ImageConfiguration extends mxflutter_base_1.MXDartClass {
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
exports.ImageConfiguration = ImageConfiguration;
class ImageProvider extends mxflutter_base_1.MXDartClass {
}
exports.ImageProvider = ImageProvider;
class AssetBundleImageKey extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.bundle = namedParameters.bundle;
        this.name = namedParameters.name;
        this.scale = namedParameters.scale;
        this.className = 'AssetBundleImageKey';
    }
}
exports.AssetBundleImageKey = AssetBundleImageKey;
class AssetBundleImageProvider extends ImageProvider {
}
exports.AssetBundleImageProvider = AssetBundleImageProvider;
class _SizeAwareCacheKey extends mxflutter_base_1.MXDartClass {
    constructor(providerCacheKey, width, height) {
        super();
        this.providerCacheKey = providerCacheKey;
        this.width = width;
        this.height = height;
        this.className = '_SizeAwareCacheKey';
    }
}
exports._SizeAwareCacheKey = _SizeAwareCacheKey;
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
exports.ResizeImage = ResizeImage;
//MX Modify 
class NetworkImage extends ImageProvider {
    constructor(url, namedParameters = {}) {
        super();
        this['url'] = url;
        this['scale'] = namedParameters.scale;
        this['headers'] = namedParameters.headers;
        this.className = 'NetworkImage';
    }
}
exports.NetworkImage = NetworkImage;
class FileImage extends ImageProvider {
    constructor(file, namedParameters = {}) {
        super();
        this.file = file;
        this.scale = namedParameters.scale;
        this.className = 'FileImage';
    }
}
exports.FileImage = FileImage;
class MemoryImage extends ImageProvider {
    constructor(bytes, namedParameters = {}) {
        super();
        this.bytes = bytes;
        this.scale = namedParameters.scale;
        this.className = 'MemoryImage';
    }
}
exports.MemoryImage = MemoryImage;
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
exports.ExactAssetImage = ExactAssetImage;
class _ErrorImageCompleter extends image_stream_1.ImageStreamCompleter {
}
exports._ErrorImageCompleter = _ErrorImageCompleter;
class NetworkImageLoadException extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.statusCode = namedParameters.statusCode;
        this.uri = namedParameters.uri;
        this.className = 'NetworkImageLoadException';
    }
}
exports.NetworkImageLoadException = NetworkImageLoadException;
