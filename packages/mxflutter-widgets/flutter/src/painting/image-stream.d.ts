import { Duration } from '../../../mx-dart-sdk';
import { Image, Codec, FrameInfo } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class ImageInfo extends MXDartClass {
    image: Image;
    scale: number;
    debugLabel: string;
    constructor(namedParameters?: {
        image?: Image;
        scale?: number;
        debugLabel?: string;
    });
}
export { ImageInfo };
declare class ImageStreamListener extends MXDartClass {
    onImage: any;
    onChunk: any;
    onError: any;
    constructor(onImage?: any, namedParameters?: {
        onChunk?: any;
        onError?: any;
    });
}
export { ImageStreamListener };
declare class ImageChunkEvent extends MXDartClass {
    cumulativeBytesLoaded: number;
    expectedTotalBytes: number;
    constructor(namedParameters?: {
        cumulativeBytesLoaded?: number;
        expectedTotalBytes?: number;
    });
}
export { ImageChunkEvent };
declare class ImageStream extends MXDartClass {
    completer: ImageStreamCompleter;
    listeners: Array<any>;
}
export { ImageStream };
declare abstract class ImageStreamCompleter extends MXDartClass {
    listeners: Array<any>;
    currentImage: ImageInfo;
    currentError: any;
    debugLabel: string;
    onLastListenerRemovedCallbacks: Array<any>;
}
export { ImageStreamCompleter };
declare class OneFrameImageStreamCompleter extends ImageStreamCompleter {
    constructor(image?: any, namedParameters?: {
        informationCollector?: any;
    });
}
export { OneFrameImageStreamCompleter };
declare class MultiFrameImageStreamCompleter extends ImageStreamCompleter {
    codec: Codec;
    scale: number;
    informationCollector: any;
    nextFrame: FrameInfo;
    shownTimestamp: Duration;
    frameDuration: Duration;
    framesEmitted: number;
    timer: any;
    frameCallbackScheduled: boolean;
    constructor(namedParameters?: {
        codec?: any;
        scale?: number;
        debugLabel?: string;
        chunkEvents?: any;
        informationCollector?: any;
    });
}
export { MultiFrameImageStreamCompleter };
