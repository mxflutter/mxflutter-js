import { ImageStreamCompleter, ImageStreamListener } from './image-stream';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class ImageCache extends MXDartClass {
    pendingImages: Map<any, any>;
    cache: Map<any, any>;
    liveImages: Map<any, any>;
    maximumSize: number;
    maximumSizeBytes: number;
    currentSizeBytes: number;
}
export { ImageCache };
declare class ImageCacheStatus extends MXDartClass {
    pending: boolean;
    keepAlive: boolean;
    live: boolean;
}
export { ImageCacheStatus };
declare class _CachedImage extends MXDartClass {
    completer: ImageStreamCompleter;
    sizeBytes: number;
    constructor(completer?: ImageStreamCompleter, sizeBytes?: number);
}
export { _CachedImage };
declare class _LiveImage extends _CachedImage {
    handleRemove: any;
    constructor(completer?: ImageStreamCompleter, sizeBytes?: number, handleRemove?: any);
}
export { _LiveImage };
declare class _PendingImage extends MXDartClass {
    completer: ImageStreamCompleter;
    listener: ImageStreamListener;
    constructor(completer?: ImageStreamCompleter, listener?: ImageStreamListener);
}
export { _PendingImage };
