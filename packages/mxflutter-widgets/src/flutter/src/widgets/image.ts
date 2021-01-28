//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { DisposableBuildContext } from './disposable-build-context';
import { ImageStream, ImageInfo, ImageChunkEvent, ImageStreamListener } from '../painting/image-stream';
import { AssetBundle } from '../services/asset-bundle';
import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { Key } from '../foundation/key';
import { ImageRepeat } from '../painting/decoration-image';
import { AlignmentGeometry } from '../painting/alignment';
import { BoxFit } from '../painting/box-fit';
import { Color, FilterQuality, BlendMode, Rect } from '../../../mx-dart-sdk';
import { ImageProvider } from '../painting/image-provider';
import { StatefulWidget$, State$, BuildContext$ } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class Image extends StatefulWidget$ {
  image: ImageProvider;
  frameBuilder: any;
  loadingBuilder: any;
  errorBuilder: any;
  width: number;
  height: number;
  color: Color;
  filterQuality: FilterQuality;
  colorBlendMode: BlendMode;
  fit: BoxFit;
  alignment: AlignmentGeometry;
  repeat: ImageRepeat;
  centerSlice: Rect;
  matchTextDirection: boolean;
  gaplessPlayback: boolean;
  semanticLabel: string;
  excludeFromSemantics: boolean;
  isAntiAlias: boolean;
  public constructor(
    namedParameters: {
      key?: Key;
      image?: ImageProvider;
      frameBuilder?: any;
      loadingBuilder?: any;
      errorBuilder?: any;
      semanticLabel?: string;
      excludeFromSemantics?: boolean;
      width?: number;
      height?: number;
      color?: Color;
      colorBlendMode?: BlendMode;
      fit?: BoxFit;
      alignment?: AlignmentGeometry;
      repeat?: ImageRepeat;
      centerSlice?: Rect;
      matchTextDirection?: boolean;
      gaplessPlayback?: boolean;
      isAntiAlias?: boolean;
      filterQuality?: FilterQuality;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.image = namedParameters.image;
    this.frameBuilder = namedParameters.frameBuilder;
    this.loadingBuilder = namedParameters.loadingBuilder;
    this.errorBuilder = namedParameters.errorBuilder;
    this.semanticLabel = namedParameters.semanticLabel;
    this.excludeFromSemantics = namedParameters.excludeFromSemantics;
    this.width = namedParameters.width;
    this.height = namedParameters.height;
    this.color = namedParameters.color;
    this.colorBlendMode = namedParameters.colorBlendMode;
    this.fit = namedParameters.fit;
    this.alignment = namedParameters.alignment;
    this.repeat = namedParameters.repeat;
    this.centerSlice = namedParameters.centerSlice;
    this.matchTextDirection = namedParameters.matchTextDirection;
    this.gaplessPlayback = namedParameters.gaplessPlayback;
    this.isAntiAlias = namedParameters.isAntiAlias;
    this.filterQuality = namedParameters.filterQuality;
    this.className = 'Image';
  }
  static network(
    src?: string,
    namedParameters: {
      key?: Key;
      scale?: number;
      frameBuilder?: any;
      loadingBuilder?: any;
      errorBuilder?: any;
      semanticLabel?: string;
      excludeFromSemantics?: boolean;
      width?: number;
      height?: number;
      color?: Color;
      colorBlendMode?: BlendMode;
      fit?: BoxFit;
      alignment?: AlignmentGeometry;
      repeat?: ImageRepeat;
      centerSlice?: Rect;
      matchTextDirection?: boolean;
      gaplessPlayback?: boolean;
      filterQuality?: FilterQuality;
      isAntiAlias?: boolean;
      headers?: Map<any, any>;
      cacheWidth?: number;
      cacheHeight?: number;
    } = {},
  ) {
    var jsObj = new Image();
    jsObj['src'] = src;
    jsObj.key = namedParameters.key;
    jsObj['scale'] = namedParameters.scale;
    jsObj.frameBuilder = namedParameters.frameBuilder;
    jsObj.loadingBuilder = namedParameters.loadingBuilder;
    jsObj.errorBuilder = namedParameters.errorBuilder;
    jsObj.semanticLabel = namedParameters.semanticLabel;
    jsObj.excludeFromSemantics = namedParameters.excludeFromSemantics;
    jsObj.width = namedParameters.width;
    jsObj.height = namedParameters.height;
    jsObj.color = namedParameters.color;
    jsObj.colorBlendMode = namedParameters.colorBlendMode;
    jsObj.fit = namedParameters.fit;
    jsObj.alignment = namedParameters.alignment;
    jsObj.repeat = namedParameters.repeat;
    jsObj.centerSlice = namedParameters.centerSlice;
    jsObj.matchTextDirection = namedParameters.matchTextDirection;
    jsObj.gaplessPlayback = namedParameters.gaplessPlayback;
    jsObj.filterQuality = namedParameters.filterQuality;
    jsObj.isAntiAlias = namedParameters.isAntiAlias;
    jsObj['headers'] = namedParameters.headers;
    jsObj['cacheWidth'] = namedParameters.cacheWidth;
    jsObj['cacheHeight'] = namedParameters.cacheHeight;
    jsObj['constructorName'] = 'network';
    return jsObj;
  }
  static file(
    file?: any,
    namedParameters: {
      key?: Key;
      scale?: number;
      frameBuilder?: any;
      errorBuilder?: any;
      semanticLabel?: string;
      excludeFromSemantics?: boolean;
      width?: number;
      height?: number;
      color?: Color;
      colorBlendMode?: BlendMode;
      fit?: BoxFit;
      alignment?: AlignmentGeometry;
      repeat?: ImageRepeat;
      centerSlice?: Rect;
      matchTextDirection?: boolean;
      gaplessPlayback?: boolean;
      isAntiAlias?: boolean;
      filterQuality?: FilterQuality;
      cacheWidth?: number;
      cacheHeight?: number;
    } = {},
  ) {
    var jsObj = new Image();
    jsObj['file'] = file;
    jsObj.key = namedParameters.key;
    jsObj['scale'] = namedParameters.scale;
    jsObj.frameBuilder = namedParameters.frameBuilder;
    jsObj.errorBuilder = namedParameters.errorBuilder;
    jsObj.semanticLabel = namedParameters.semanticLabel;
    jsObj.excludeFromSemantics = namedParameters.excludeFromSemantics;
    jsObj.width = namedParameters.width;
    jsObj.height = namedParameters.height;
    jsObj.color = namedParameters.color;
    jsObj.colorBlendMode = namedParameters.colorBlendMode;
    jsObj.fit = namedParameters.fit;
    jsObj.alignment = namedParameters.alignment;
    jsObj.repeat = namedParameters.repeat;
    jsObj.centerSlice = namedParameters.centerSlice;
    jsObj.matchTextDirection = namedParameters.matchTextDirection;
    jsObj.gaplessPlayback = namedParameters.gaplessPlayback;
    jsObj.isAntiAlias = namedParameters.isAntiAlias;
    jsObj.filterQuality = namedParameters.filterQuality;
    jsObj['cacheWidth'] = namedParameters.cacheWidth;
    jsObj['cacheHeight'] = namedParameters.cacheHeight;
    jsObj['constructorName'] = 'file';
    return jsObj;
  }
  static asset(
    name?: string,
    namedParameters: {
      key?: Key;
      bundle?: AssetBundle;
      frameBuilder?: any;
      errorBuilder?: any;
      semanticLabel?: string;
      excludeFromSemantics?: boolean;
      scale?: number;
      width?: number;
      height?: number;
      color?: Color;
      colorBlendMode?: BlendMode;
      fit?: BoxFit;
      alignment?: AlignmentGeometry;
      repeat?: ImageRepeat;
      centerSlice?: Rect;
      matchTextDirection?: boolean;
      gaplessPlayback?: boolean;
      isAntiAlias?: boolean;
      __mx_package?: string;
      filterQuality?: FilterQuality;
      cacheWidth?: number;
      cacheHeight?: number;
    } = {},
  ) {
    var jsObj = new Image();
    jsObj['name'] = name;
    jsObj.key = namedParameters.key;
    jsObj['bundle'] = namedParameters.bundle;
    jsObj.frameBuilder = namedParameters.frameBuilder;
    jsObj.errorBuilder = namedParameters.errorBuilder;
    jsObj.semanticLabel = namedParameters.semanticLabel;
    jsObj.excludeFromSemantics = namedParameters.excludeFromSemantics;
    jsObj['scale'] = namedParameters.scale;
    jsObj.width = namedParameters.width;
    jsObj.height = namedParameters.height;
    jsObj.color = namedParameters.color;
    jsObj.colorBlendMode = namedParameters.colorBlendMode;
    jsObj.fit = namedParameters.fit;
    jsObj.alignment = namedParameters.alignment;
    jsObj.repeat = namedParameters.repeat;
    jsObj.centerSlice = namedParameters.centerSlice;
    jsObj.matchTextDirection = namedParameters.matchTextDirection;
    jsObj.gaplessPlayback = namedParameters.gaplessPlayback;
    jsObj.isAntiAlias = namedParameters.isAntiAlias;
    jsObj['__mx_package'] = namedParameters.__mx_package;
    jsObj.filterQuality = namedParameters.filterQuality;
    jsObj['cacheWidth'] = namedParameters.cacheWidth;
    jsObj['cacheHeight'] = namedParameters.cacheHeight;
    jsObj['constructorName'] = 'asset';
    return jsObj;
  }
  static memory(
    bytes?: any,
    namedParameters: {
      key?: Key;
      scale?: number;
      frameBuilder?: any;
      errorBuilder?: any;
      semanticLabel?: string;
      excludeFromSemantics?: boolean;
      width?: number;
      height?: number;
      color?: Color;
      colorBlendMode?: BlendMode;
      fit?: BoxFit;
      alignment?: AlignmentGeometry;
      repeat?: ImageRepeat;
      centerSlice?: Rect;
      matchTextDirection?: boolean;
      gaplessPlayback?: boolean;
      isAntiAlias?: boolean;
      filterQuality?: FilterQuality;
      cacheWidth?: number;
      cacheHeight?: number;
    } = {},
  ) {
    var jsObj = new Image();
    jsObj['bytes'] = bytes;
    jsObj.key = namedParameters.key;
    jsObj['scale'] = namedParameters.scale;
    jsObj.frameBuilder = namedParameters.frameBuilder;
    jsObj.errorBuilder = namedParameters.errorBuilder;
    jsObj.semanticLabel = namedParameters.semanticLabel;
    jsObj.excludeFromSemantics = namedParameters.excludeFromSemantics;
    jsObj.width = namedParameters.width;
    jsObj.height = namedParameters.height;
    jsObj.color = namedParameters.color;
    jsObj.colorBlendMode = namedParameters.colorBlendMode;
    jsObj.fit = namedParameters.fit;
    jsObj.alignment = namedParameters.alignment;
    jsObj.repeat = namedParameters.repeat;
    jsObj.centerSlice = namedParameters.centerSlice;
    jsObj.matchTextDirection = namedParameters.matchTextDirection;
    jsObj.gaplessPlayback = namedParameters.gaplessPlayback;
    jsObj.isAntiAlias = namedParameters.isAntiAlias;
    jsObj.filterQuality = namedParameters.filterQuality;
    jsObj['cacheWidth'] = namedParameters.cacheWidth;
    jsObj['cacheHeight'] = namedParameters.cacheHeight;
    jsObj['constructorName'] = 'memory';
    return jsObj;
  }
}
export { Image };
class _ImageState extends State$ {
  imageStream: ImageStream;
  imageInfo: ImageInfo;
  loadingProgress: ImageChunkEvent;
  isListeningToStream: boolean;
  invertColors: boolean;
  frameNumber: number;
  wasSynchronouslyLoaded: boolean;
  scrollAwareContext: DisposableBuildContext;
  lastException: any;
  lastStack: any;
  imageStreamListener: ImageStreamListener;
}
export { _ImageState };
