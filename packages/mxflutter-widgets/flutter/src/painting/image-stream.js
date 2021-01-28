//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { MXDartClass } from '@mxflutter/mxflutter-base';
class ImageInfo extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.image = namedParameters.image;
        this.scale = namedParameters.scale;
        this.debugLabel = namedParameters.debugLabel;
        this.className = 'ImageInfo';
    }
}
export { ImageInfo };
class ImageStreamListener extends MXDartClass {
    constructor(onImage, namedParameters = {}) {
        super();
        this.onImage = onImage;
        this.onChunk = namedParameters.onChunk;
        this.onError = namedParameters.onError;
        this.className = 'ImageStreamListener';
    }
}
export { ImageStreamListener };
class ImageChunkEvent extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.cumulativeBytesLoaded = namedParameters.cumulativeBytesLoaded;
        this.expectedTotalBytes = namedParameters.expectedTotalBytes;
        this.className = 'ImageChunkEvent';
    }
}
export { ImageChunkEvent };
class ImageStream extends MXDartClass {
}
export { ImageStream };
class ImageStreamCompleter extends MXDartClass {
}
export { ImageStreamCompleter };
class OneFrameImageStreamCompleter extends ImageStreamCompleter {
    constructor(image, namedParameters = {}) {
        super();
        this['image'] = image;
        this['informationCollector'] = namedParameters.informationCollector;
        this.className = 'OneFrameImageStreamCompleter';
    }
}
export { OneFrameImageStreamCompleter };
class MultiFrameImageStreamCompleter extends ImageStreamCompleter {
    constructor(namedParameters = {}) {
        super();
        this['__mx_codec'] = namedParameters.codec;
        this.scale = namedParameters.scale;
        this.debugLabel = namedParameters.debugLabel;
        this['chunkEvents'] = namedParameters.chunkEvents;
        this.informationCollector = namedParameters.informationCollector;
        this.className = 'MultiFrameImageStreamCompleter';
    }
}
export { MultiFrameImageStreamCompleter };
