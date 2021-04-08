"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._PendingImage = exports._LiveImage = exports._CachedImage = exports.ImageCacheStatus = exports.ImageCache = void 0;
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class ImageCache extends mxflutter_base_1.MXDartClass {
}
exports.ImageCache = ImageCache;
class ImageCacheStatus extends mxflutter_base_1.MXDartClass {
}
exports.ImageCacheStatus = ImageCacheStatus;
class _CachedImage extends mxflutter_base_1.MXDartClass {
    constructor(completer, sizeBytes) {
        super();
        this.completer = completer;
        this.sizeBytes = sizeBytes;
        this.className = '_CachedImage';
    }
}
exports._CachedImage = _CachedImage;
class _LiveImage extends _CachedImage {
    constructor(completer, sizeBytes, handleRemove) {
        super();
        this.completer = completer;
        this.sizeBytes = sizeBytes;
        this.handleRemove = handleRemove;
        this.className = '_LiveImage';
    }
}
exports._LiveImage = _LiveImage;
class _PendingImage extends mxflutter_base_1.MXDartClass {
    constructor(completer, listener) {
        super();
        this.completer = completer;
        this.listener = listener;
        this.className = '_PendingImage';
    }
}
exports._PendingImage = _PendingImage;
