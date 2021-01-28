//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { MXDartClass } from '@mxflutter/mxflutter-base';
class ImageCache extends MXDartClass {
}
export { ImageCache };
class ImageCacheStatus extends MXDartClass {
}
export { ImageCacheStatus };
class _CachedImage extends MXDartClass {
    constructor(completer, sizeBytes) {
        super();
        this.completer = completer;
        this.sizeBytes = sizeBytes;
        this.className = '_CachedImage';
    }
}
export { _CachedImage };
class _LiveImage extends _CachedImage {
    constructor(completer, sizeBytes, handleRemove) {
        super();
        this.completer = completer;
        this.sizeBytes = sizeBytes;
        this.handleRemove = handleRemove;
        this.className = '_LiveImage';
    }
}
export { _LiveImage };
class _PendingImage extends MXDartClass {
    constructor(completer, listener) {
        super();
        this.completer = completer;
        this.listener = listener;
        this.className = '_PendingImage';
    }
}
export { _PendingImage };
