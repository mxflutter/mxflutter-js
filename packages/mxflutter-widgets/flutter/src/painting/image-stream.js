"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiFrameImageStreamCompleter = exports.OneFrameImageStreamCompleter = exports.ImageStreamCompleter = exports.ImageStream = exports.ImageChunkEvent = exports.ImageStreamListener = exports.ImageInfo = void 0;
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class ImageInfo extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.image = namedParameters.image;
        this.scale = namedParameters.scale;
        this.debugLabel = namedParameters.debugLabel;
        this.className = 'ImageInfo';
    }
}
exports.ImageInfo = ImageInfo;
class ImageStreamListener extends mxflutter_base_1.MXDartClass {
    constructor(onImage, namedParameters = {}) {
        super();
        this.onImage = onImage;
        this.onChunk = namedParameters.onChunk;
        this.onError = namedParameters.onError;
        this.className = 'ImageStreamListener';
    }
}
exports.ImageStreamListener = ImageStreamListener;
class ImageChunkEvent extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.cumulativeBytesLoaded = namedParameters.cumulativeBytesLoaded;
        this.expectedTotalBytes = namedParameters.expectedTotalBytes;
        this.className = 'ImageChunkEvent';
    }
}
exports.ImageChunkEvent = ImageChunkEvent;
class ImageStream extends mxflutter_base_1.MXDartClass {
}
exports.ImageStream = ImageStream;
class ImageStreamCompleter extends mxflutter_base_1.MXDartClass {
}
exports.ImageStreamCompleter = ImageStreamCompleter;
class OneFrameImageStreamCompleter extends ImageStreamCompleter {
    constructor(image, namedParameters = {}) {
        super();
        this['image'] = image;
        this['informationCollector'] = namedParameters.informationCollector;
        this.className = 'OneFrameImageStreamCompleter';
    }
}
exports.OneFrameImageStreamCompleter = OneFrameImageStreamCompleter;
class MultiFrameImageStreamCompleter extends ImageStreamCompleter {
    constructor(namedParameters = {}) {
        super();
        this['mx_codec'] = namedParameters.codec;
        this.scale = namedParameters.scale;
        this.debugLabel = namedParameters.debugLabel;
        this['chunkEvents'] = namedParameters.chunkEvents;
        this.informationCollector = namedParameters.informationCollector;
        this.className = 'MultiFrameImageStreamCompleter';
    }
}
exports.MultiFrameImageStreamCompleter = MultiFrameImageStreamCompleter;
