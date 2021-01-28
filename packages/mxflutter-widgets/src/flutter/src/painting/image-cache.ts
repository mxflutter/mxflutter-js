//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { ImageInfo, ImageStreamCompleter, ImageStreamListener } from './image-stream';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class ImageCache extends MXDartClass {
  pendingImages: Map<any, any>;
  cache: Map<any, any>;
  liveImages: Map<any, any>;
  maximumSize: number;
  maximumSizeBytes: number;
  currentSizeBytes: number;
}
export { ImageCache };
class ImageCacheStatus extends MXDartClass {
  pending: boolean;
  keepAlive: boolean;
  live: boolean;
}
export { ImageCacheStatus };
class _CachedImage extends MXDartClass {
  completer: ImageStreamCompleter;
  sizeBytes: number;
  public constructor(completer?: ImageStreamCompleter, sizeBytes?: number) {
    super();
    this.completer = completer;
    this.sizeBytes = sizeBytes;
    this.className = '_CachedImage';
  }
}
export { _CachedImage };
class _LiveImage extends _CachedImage {
  handleRemove: any;
  public constructor(completer?: ImageStreamCompleter, sizeBytes?: number, handleRemove?: any) {
    super();
    this.completer = completer;
    this.sizeBytes = sizeBytes;
    this.handleRemove = handleRemove;
    this.className = '_LiveImage';
  }
}
export { _LiveImage };
class _PendingImage extends MXDartClass {
  completer: ImageStreamCompleter;
  listener: ImageStreamListener;
  public constructor(completer?: ImageStreamCompleter, listener?: ImageStreamListener) {
    super();
    this.completer = completer;
    this.listener = listener;
    this.className = '_PendingImage';
  }
}
export { _PendingImage };
