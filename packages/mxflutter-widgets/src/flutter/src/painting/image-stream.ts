// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Duration } from '../../../mx-dart-sdk';
import { Image, Codec, FrameInfo } from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class ImageInfo extends MXDartClass {
  image: Image;
  scale: number;
  debugLabel: string;
  public constructor(namedParameters: {image?: Image, scale?: number, debugLabel?: string} = {}) {
    super();
    this.image = namedParameters.image;
    this.scale = namedParameters.scale;
    this.debugLabel = namedParameters.debugLabel;
    this.className = 'ImageInfo';
  }
}
export { ImageInfo };
class ImageStreamListener extends MXDartClass {
  onImage: any;
  onChunk: any;
  onError: any;
  public constructor(onImage?: any, namedParameters: {onChunk?: any, onError?: any} = {}) {
    super();
    this.onImage = onImage;
    this.onChunk = namedParameters.onChunk;
    this.onError = namedParameters.onError;
    this.className = 'ImageStreamListener';
  }
}
export { ImageStreamListener };
class ImageChunkEvent extends MXDartClass {
  cumulativeBytesLoaded: number;
  expectedTotalBytes: number;
  public constructor(namedParameters: {cumulativeBytesLoaded?: number, expectedTotalBytes?: number} = {}) {
    super();
    this.cumulativeBytesLoaded = namedParameters.cumulativeBytesLoaded;
    this.expectedTotalBytes = namedParameters.expectedTotalBytes;
    this.className = 'ImageChunkEvent';
  }
}
export { ImageChunkEvent };
class ImageStream extends MXDartClass {
  completer: ImageStreamCompleter;
  listeners: Array<any>;
}
export { ImageStream };
abstract class ImageStreamCompleter extends MXDartClass {
  listeners: Array<any>;
  currentImage: ImageInfo;
  currentError: any;
  debugLabel: string;
  onLastListenerRemovedCallbacks: Array<any>;
}
export { ImageStreamCompleter };
class OneFrameImageStreamCompleter extends ImageStreamCompleter {
  public constructor(image?: any, namedParameters: {informationCollector?: any} = {}) {
    super();
    this['image'] = image;
    this['informationCollector'] = namedParameters.informationCollector;
    this.className = 'OneFrameImageStreamCompleter';
  }
}
export { OneFrameImageStreamCompleter };
class MultiFrameImageStreamCompleter extends ImageStreamCompleter {
  codec: Codec;
  scale: number;
  informationCollector: any;
  nextFrame: FrameInfo;
  shownTimestamp: Duration;
  frameDuration: Duration;
  framesEmitted: number;
  timer: any;
  frameCallbackScheduled: boolean;
  public constructor(namedParameters: {codec?: any, scale?: number, debugLabel?: string, chunkEvents?: any, informationCollector?: any} = {}) {
    super();
    this['mx_codec'] = namedParameters.codec;
    this.scale = namedParameters.scale;
    this.debugLabel = namedParameters.debugLabel;
    this['chunkEvents'] = namedParameters.chunkEvents;
    this.informationCollector = namedParameters.informationCollector;
    this.className = 'MultiFrameImageStreamCompleter';
  }
}
export { MultiFrameImageStreamCompleter };
