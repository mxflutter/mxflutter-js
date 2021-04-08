// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class Comparable extends MXDartClass {}
export { Comparable };
class DateTime extends MXDartClass {
  value: number;
  isUtc: boolean;
  public constructor(year?: number, month?: number, day?: number, hour?: number, minute?: number, second?: number, millisecond?: number, microsecond?: number) {
    super();
    this['year'] = year;
    this['month'] = month;
    this['day'] = day;
    this['hour'] = hour;
    this['minute'] = minute;
    this['second'] = second;
    this['millisecond'] = millisecond;
    this['microsecond'] = microsecond;
    this.className = 'DateTime';
  }
  static get monday() {
    return 1;
  }
  static get tuesday() {
    return 2;
  }
  static get wednesday() {
    return 3;
  }
  static get thursday() {
    return 4;
  }
  static get friday() {
    return 5;
  }
  static get saturday() {
    return 6;
  }
  static get sunday() {
    return 7;
  }
  static get daysPerWeek() {
    return 7;
  }
  static get january() {
    return 1;
  }
  static get february() {
    return 2;
  }
  static get march() {
    return 3;
  }
  static get april() {
    return 4;
  }
  static get may() {
    return 5;
  }
  static get june() {
    return 6;
  }
  static get july() {
    return 7;
  }
  static get august() {
    return 8;
  }
  static get september() {
    return 9;
  }
  static get october() {
    return 10;
  }
  static get november() {
    return 11;
  }
  static get december() {
    return 12;
  }
  static get monthsPerYear() {
    return 12;
  }
  static utc(year?: number, month?: number, day?: number, hour?: number, minute?: number, second?: number, millisecond?: number, microsecond?: number) {
    var jsObj = new DateTime();
    jsObj['year'] = year;
    jsObj['month'] = month;
    jsObj['day'] = day;
    jsObj['hour'] = hour;
    jsObj['minute'] = minute;
    jsObj['second'] = second;
    jsObj['millisecond'] = millisecond;
    jsObj['microsecond'] = microsecond;
    jsObj['constructorName'] = 'utc';
    return jsObj;
  }
  static now() {
    var jsObj = new DateTime();
    jsObj['constructorName'] = 'now';
    return jsObj;
  }
  static fromMillisecondsSinceEpoch(millisecondsSinceEpoch?: number, namedParameters: {isUtc?: boolean} = {}) {
    var jsObj = new DateTime();
    jsObj['millisecondsSinceEpoch'] = millisecondsSinceEpoch;
    jsObj.isUtc = namedParameters.isUtc;
    jsObj['constructorName'] = 'fromMillisecondsSinceEpoch';
    return jsObj;
  }
  static fromMicrosecondsSinceEpoch(microsecondsSinceEpoch?: number, namedParameters: {isUtc?: boolean} = {}) {
    var jsObj = new DateTime();
    jsObj['microsecondsSinceEpoch'] = microsecondsSinceEpoch;
    jsObj.isUtc = namedParameters.isUtc;
    jsObj['constructorName'] = 'fromMicrosecondsSinceEpoch';
    return jsObj;
  }
}
export { DateTime };
class Duration extends MXDartClass {
  duration: number;
  public constructor(namedParameters: {days?: number, hours?: number, minutes?: number, seconds?: number, milliseconds?: number, microseconds?: number} = {}) {
    super();
    this['days'] = namedParameters.days;
    this['hours'] = namedParameters.hours;
    this['minutes'] = namedParameters.minutes;
    this['seconds'] = namedParameters.seconds;
    this['milliseconds'] = namedParameters.milliseconds;
    this['microseconds'] = namedParameters.microseconds;
    this.className = 'Duration';
  }
  static get microsecondsPerMillisecond() {
    return 1000;
  }
  static get millisecondsPerSecond() {
    return 1000;
  }
  static get secondsPerMinute() {
    return 60;
  }
  static get minutesPerHour() {
    return 60;
  }
  static get hoursPerDay() {
    return 24;
  }
  static get microsecondsPerSecond() {
    return 1000000;
  }
  static get microsecondsPerMinute() {
    return 60000000;
  }
  static get microsecondsPerHour() {
    return 3600000000;
  }
  static get microsecondsPerDay() {
    return 86400000000;
  }
  static get millisecondsPerMinute() {
    return 60000;
  }
  static get millisecondsPerHour() {
    return 3600000;
  }
  static get millisecondsPerDay() {
    return 86400000;
  }
  static get secondsPerHour() {
    return 3600;
  }
  static get secondsPerDay() {
    return 86400;
  }
  static get minutesPerDay() {
    return 1440;
  }
  static get zero() {
    var jsObj = new Duration();
    jsObj['className'] = 'Duration';
    jsObj['constructorName'] = 'zero';
    return jsObj;
  }
}
export { Duration };
class NativeFieldWrapperClass1 extends MXDartClass {}
export { NativeFieldWrapperClass1 };
class NativeFieldWrapperClass2 extends MXDartClass {}
export { NativeFieldWrapperClass2 };
class NativeFieldWrapperClass3 extends MXDartClass {}
export { NativeFieldWrapperClass3 };
class NativeFieldWrapperClass4 extends MXDartClass {}
export { NativeFieldWrapperClass4 };
class _KeepToString extends MXDartClass {}
export { _KeepToString };
class _StoredMessage extends MXDartClass {
  data: any;
  callback: any;
  public constructor(_data?: any, _callback?: any) {
    super();
    this.data = _data;
    this.callback = _callback;
    this.className = '_StoredMessage';
  }
}
export { _StoredMessage };
class _RingBuffer extends MXDartClass {
  queue: any;
  capacity: number;
  dropItemCallback: any;
  public constructor(_capacity?: number) {
    super();
    this.capacity = _capacity;
    this.className = '_RingBuffer';
  }
}
export { _RingBuffer };
class ChannelBuffers extends MXDartClass {
  messages: Map<any, any>;
  static get kDefaultBufferSize() {
    return 1;
  }
  static get kControlChannelName() {
    return 'dev.flutter/channel-buffers';
  }
}
export { ChannelBuffers };
class Scene extends NativeFieldWrapperClass2 {}
export { Scene };
abstract class _EngineLayerWrapper extends MXDartClass {
  nativeLayer: EngineLayer;
  debugChildren: Array<any>;
  debugWasUsedAsOldLayer: boolean;
}
export { _EngineLayerWrapper };
class TransformEngineLayer extends _EngineLayerWrapper {}
export { TransformEngineLayer };
class OffsetEngineLayer extends _EngineLayerWrapper {}
export { OffsetEngineLayer };
class ClipRectEngineLayer extends _EngineLayerWrapper {}
export { ClipRectEngineLayer };
class ClipRRectEngineLayer extends _EngineLayerWrapper {}
export { ClipRRectEngineLayer };
class ClipPathEngineLayer extends _EngineLayerWrapper {}
export { ClipPathEngineLayer };
class OpacityEngineLayer extends _EngineLayerWrapper {}
export { OpacityEngineLayer };
class ColorFilterEngineLayer extends _EngineLayerWrapper {}
export { ColorFilterEngineLayer };
class ImageFilterEngineLayer extends _EngineLayerWrapper {}
export { ImageFilterEngineLayer };
class BackdropFilterEngineLayer extends _EngineLayerWrapper {}
export { BackdropFilterEngineLayer };
class ShaderMaskEngineLayer extends _EngineLayerWrapper {}
export { ShaderMaskEngineLayer };
class PhysicalShapeEngineLayer extends _EngineLayerWrapper {}
export { PhysicalShapeEngineLayer };
class SceneBuilder extends NativeFieldWrapperClass2 {
  usedLayers: Map<any, any>;
  layerStack: Array<any>;
}
export { SceneBuilder };
class SceneHost extends NativeFieldWrapperClass2 {
  public constructor(viewHolderToken?: any, viewConnectedCallback?: any, viewDisconnectedCallback?: any, viewStateChangedCallback?: any) {
    super();
    this['viewHolderToken'] = viewHolderToken;
    this['viewConnectedCallback'] = viewConnectedCallback;
    this['viewDisconnectedCallback'] = viewDisconnectedCallback;
    this['viewStateChangedCallback'] = viewStateChangedCallback;
    this.className = 'SceneHost';
  }
}
export { SceneHost };
abstract class OffsetBase extends MXDartClass {
  dx: number;
  dy: number;
}
export { OffsetBase };
class Offset extends OffsetBase {
  public constructor(dx?: number, dy?: number) {
    super();
    this['dx'] = dx;
    this['dy'] = dy;
    this.className = 'Offset';
  }
  static get zero() {
    var jsObj = new Offset();
    jsObj['className'] = 'Offset';
    jsObj['constructorName'] = 'zero';
    return jsObj;
  }
  static get infinite() {
    var jsObj = new Offset();
    jsObj['className'] = 'Offset';
    jsObj['constructorName'] = 'infinite';
    return jsObj;
  }
  static fromDirection(direction?: number, distance?: number) {
    var jsObj = new Offset();
    jsObj['direction'] = direction;
    jsObj['distance'] = distance;
    jsObj['constructorName'] = 'fromDirection';
    return jsObj;
  }
}
export { Offset };
class Size extends OffsetBase {
  //MX modified 
  public width: number;
  public height: number;

  public constructor(width?: number, height?: number) {
    super();
    this.width = width;
    this.height = height;
    this.className = 'Size';
  }
  static get zero() {
    var jsObj = new Size();
    jsObj['className'] = 'Size';
    jsObj['constructorName'] = 'zero';
    return jsObj;
  }
  static get infinite() {
    var jsObj = new Size();
    jsObj['className'] = 'Size';
    jsObj['constructorName'] = 'infinite';
    return jsObj;
  }

  //MX modified 
  static copy(source?: Size) {
    var jsObj = new Size();
    jsObj['source'] = source;
    jsObj['constructorName'] = 'copy';

    jsObj.width = source.width;
    jsObj.height = source.height;

    return jsObj;
  }
  static square(dimension?: number) {
    var jsObj = new Size();
    jsObj['dimension'] = dimension;
    jsObj['constructorName'] = 'square';
    return jsObj;
  }
  static fromWidth(width?: number) {
    var jsObj = new Size();
    jsObj.width = width;
    jsObj['constructorName'] = 'fromWidth';
    return jsObj;
  }
  static fromHeight(height?: number) {
    var jsObj = new Size();
    jsObj.height = height;
    jsObj['constructorName'] = 'fromHeight';
    return jsObj;
  }
  static fromRadius(radius?: number) {
    var jsObj = new Size();
    jsObj['radius'] = radius;
    jsObj['constructorName'] = 'fromRadius';
    return jsObj;
  }
  // MX modified begin
  public static fromJson(mapObj: any) {
    if (mapObj === null || mapObj === undefined) {
      return null;
    }

    const obj = new Size();

    for (const p in mapObj) {
      if (mapObj.hasOwnProperty(p)) {
        const v = mapObj[p];
        obj[p] = v;
      }
    }
    return obj;
  }
  // MX modified end
}
export { Size };
class Rect extends MXDartClass {
  left: number;
  top: number;
  right: number;
  bottom: number;
  static get zero() {
    var jsObj = new Rect();
    jsObj['className'] = 'Rect';
    jsObj['constructorName'] = 'zero';
    return jsObj;
  }
  static get largest() {
    var jsObj = new Rect();
    jsObj['className'] = 'Rect';
    jsObj['constructorName'] = 'largest';
    return jsObj;
  }
  static fromLTRB(left?: number, top?: number, right?: number, bottom?: number) {
    var jsObj = new Rect();
    jsObj.left = left;
    jsObj.top = top;
    jsObj.right = right;
    jsObj.bottom = bottom;
    jsObj['constructorName'] = 'fromLTRB';
    return jsObj;
  }
  static fromLTWH(left?: number, top?: number, width?: number, height?: number) {
    var jsObj = new Rect();
    jsObj.left = left;
    jsObj.top = top;
    jsObj['width'] = width;
    jsObj['height'] = height;
    jsObj['constructorName'] = 'fromLTWH';
    return jsObj;
  }
  static fromCircle(namedParameters: {center?: Offset, radius?: number} = {}) {
    var jsObj = new Rect();
    jsObj['center'] = namedParameters.center;
    jsObj['radius'] = namedParameters.radius;
    jsObj['constructorName'] = 'fromCircle';
    return jsObj;
  }
  static fromCenter(namedParameters: {center?: Offset, width?: number, height?: number} = {}) {
    var jsObj = new Rect();
    jsObj['center'] = namedParameters.center;
    jsObj['width'] = namedParameters.width;
    jsObj['height'] = namedParameters.height;
    jsObj['constructorName'] = 'fromCenter';
    return jsObj;
  }
  static fromPoints(a?: Offset, b?: Offset) {
    var jsObj = new Rect();
    jsObj['a'] = a;
    jsObj['b'] = b;
    jsObj['constructorName'] = 'fromPoints';
    return jsObj;
  }
}
export { Rect };
class Radius extends MXDartClass {
  x: number;
  y: number;
  static get zero() {
    var jsObj = new Radius();
    jsObj['className'] = 'Radius';
    jsObj['constructorName'] = 'zero';
    return jsObj;
  }
  static circular(radius?: number) {
    var jsObj = new Radius();
    jsObj['radius'] = radius;
    jsObj['constructorName'] = 'circular';
    return jsObj;
  }
  static elliptical(x?: number, y?: number) {
    var jsObj = new Radius();
    jsObj.x = x;
    jsObj.y = y;
    jsObj['constructorName'] = 'elliptical';
    return jsObj;
  }
}
export { Radius };
class RRect extends MXDartClass {
  left: number;
  top: number;
  right: number;
  bottom: number;
  tlRadiusX: number;
  tlRadiusY: number;
  trRadiusX: number;
  trRadiusY: number;
  brRadiusX: number;
  brRadiusY: number;
  blRadiusX: number;
  blRadiusY: number;
  static get zero() {
    var jsObj = new RRect();
    jsObj['className'] = 'RRect';
    jsObj['constructorName'] = 'zero';
    return jsObj;
  }
  static fromLTRBXY(left?: number, top?: number, right?: number, bottom?: number, radiusX?: number, radiusY?: number) {
    var jsObj = new RRect();
    jsObj.left = left;
    jsObj.top = top;
    jsObj.right = right;
    jsObj.bottom = bottom;
    jsObj['radiusX'] = radiusX;
    jsObj['radiusY'] = radiusY;
    jsObj['constructorName'] = 'fromLTRBXY';
    return jsObj;
  }
  static fromLTRBR(left?: number, top?: number, right?: number, bottom?: number, radius?: Radius) {
    var jsObj = new RRect();
    jsObj.left = left;
    jsObj.top = top;
    jsObj.right = right;
    jsObj.bottom = bottom;
    jsObj['radius'] = radius;
    jsObj['constructorName'] = 'fromLTRBR';
    return jsObj;
  }
  static fromRectXY(rect?: Rect, radiusX?: number, radiusY?: number) {
    var jsObj = new RRect();
    jsObj['rect'] = rect;
    jsObj['radiusX'] = radiusX;
    jsObj['radiusY'] = radiusY;
    jsObj['constructorName'] = 'fromRectXY';
    return jsObj;
  }
  static fromRectAndRadius(rect?: Rect, radius?: Radius) {
    var jsObj = new RRect();
    jsObj['rect'] = rect;
    jsObj['radius'] = radius;
    jsObj['constructorName'] = 'fromRectAndRadius';
    return jsObj;
  }
  static fromLTRBAndCorners(left?: number, top?: number, right?: number, bottom?: number, namedParameters: {topLeft?: Radius, topRight?: Radius, bottomRight?: Radius, bottomLeft?: Radius} = {}) {
    var jsObj = new RRect();
    jsObj.left = left;
    jsObj.top = top;
    jsObj.right = right;
    jsObj.bottom = bottom;
    jsObj['topLeft'] = namedParameters.topLeft;
    jsObj['topRight'] = namedParameters.topRight;
    jsObj['bottomRight'] = namedParameters.bottomRight;
    jsObj['bottomLeft'] = namedParameters.bottomLeft;
    jsObj['constructorName'] = 'fromLTRBAndCorners';
    return jsObj;
  }
  static fromRectAndCorners(rect?: Rect, namedParameters: {topLeft?: Radius, topRight?: Radius, bottomRight?: Radius, bottomLeft?: Radius} = {}) {
    var jsObj = new RRect();
    jsObj['rect'] = rect;
    jsObj['topLeft'] = namedParameters.topLeft;
    jsObj['topRight'] = namedParameters.topRight;
    jsObj['bottomRight'] = namedParameters.bottomRight;
    jsObj['bottomLeft'] = namedParameters.bottomLeft;
    jsObj['constructorName'] = 'fromRectAndCorners';
    return jsObj;
  }
}
export { RRect };
class RSTransform extends MXDartClass {
  value: any;
  public constructor(scos?: number, ssin?: number, tx?: number, ty?: number) {
    super();
    this['scos'] = scos;
    this['ssin'] = ssin;
    this['tx'] = tx;
    this['ty'] = ty;
    this.className = 'RSTransform';
  }
  static fromComponents(namedParameters: {rotation?: number, scale?: number, anchorX?: number, anchorY?: number, translateX?: number, translateY?: number} = {}) {
    var jsObj = new RSTransform();
    jsObj['rotation'] = namedParameters.rotation;
    jsObj['scale'] = namedParameters.scale;
    jsObj['anchorX'] = namedParameters.anchorX;
    jsObj['anchorY'] = namedParameters.anchorY;
    jsObj['translateX'] = namedParameters.translateX;
    jsObj['translateY'] = namedParameters.translateY;
    jsObj['constructorName'] = 'fromComponents';
    return jsObj;
  }
}
export { RSTransform };
class _HashEnd extends MXDartClass {}
export { _HashEnd };
class _Jenkins extends MXDartClass {}
export { _Jenkins };
class IsolateNameServer extends MXDartClass {}
export { IsolateNameServer };
class _Logger extends MXDartClass {}
export { _Logger };
class Color extends MXDartClass {
  value: number;
  public constructor(value?: number) {
    super();
    this.value = value;
    this.className = 'Color';
  }
  static fromARGB(a?: number, r?: number, g?: number, b?: number) {
    var jsObj = new Color();
    jsObj['a'] = a;
    jsObj['r'] = r;
    jsObj['g'] = g;
    jsObj['b'] = b;
    jsObj['constructorName'] = 'fromARGB';
    return jsObj;
  }
  static fromRGBO(r?: number, g?: number, b?: number, opacity?: number) {
    var jsObj = new Color();
    jsObj['r'] = r;
    jsObj['g'] = g;
    jsObj['b'] = b;
    jsObj['opacity'] = opacity;
    jsObj['constructorName'] = 'fromRGBO';
    return jsObj;
  }
}
export { Color };
enum BlendMode {
  clear = '{ "_name": "BlendMode.clear", "index": 0 }',
  src = '{ "_name": "BlendMode.src", "index": 1 }',
  dst = '{ "_name": "BlendMode.dst", "index": 2 }',
  srcOver = '{ "_name": "BlendMode.srcOver", "index": 3 }',
  dstOver = '{ "_name": "BlendMode.dstOver", "index": 4 }',
  srcIn = '{ "_name": "BlendMode.srcIn", "index": 5 }',
  dstIn = '{ "_name": "BlendMode.dstIn", "index": 6 }',
  srcOut = '{ "_name": "BlendMode.srcOut", "index": 7 }',
  dstOut = '{ "_name": "BlendMode.dstOut", "index": 8 }',
  srcATop = '{ "_name": "BlendMode.srcATop", "index": 9 }',
  dstATop = '{ "_name": "BlendMode.dstATop", "index": 10 }',
  xor = '{ "_name": "BlendMode.xor", "index": 11 }',
  plus = '{ "_name": "BlendMode.plus", "index": 12 }',
  modulate = '{ "_name": "BlendMode.modulate", "index": 13 }',
  screen = '{ "_name": "BlendMode.screen", "index": 14 }',
  overlay = '{ "_name": "BlendMode.overlay", "index": 15 }',
  darken = '{ "_name": "BlendMode.darken", "index": 16 }',
  lighten = '{ "_name": "BlendMode.lighten", "index": 17 }',
  colorDodge = '{ "_name": "BlendMode.colorDodge", "index": 18 }',
  colorBurn = '{ "_name": "BlendMode.colorBurn", "index": 19 }',
  hardLight = '{ "_name": "BlendMode.hardLight", "index": 20 }',
  softLight = '{ "_name": "BlendMode.softLight", "index": 21 }',
  difference = '{ "_name": "BlendMode.difference", "index": 22 }',
  exclusion = '{ "_name": "BlendMode.exclusion", "index": 23 }',
  multiply = '{ "_name": "BlendMode.multiply", "index": 24 }',
  hue = '{ "_name": "BlendMode.hue", "index": 25 }',
  saturation = '{ "_name": "BlendMode.saturation", "index": 26 }',
  color = '{ "_name": "BlendMode.color", "index": 27 }',
  luminosity = '{ "_name": "BlendMode.luminosity", "index": 28 }',
};

export { BlendMode };
enum FilterQuality {
  none = '{ "_name": "FilterQuality.none", "index": 0 }',
  low = '{ "_name": "FilterQuality.low", "index": 1 }',
  medium = '{ "_name": "FilterQuality.medium", "index": 2 }',
  high = '{ "_name": "FilterQuality.high", "index": 3 }',
};

export { FilterQuality };
enum StrokeCap {
  butt = '{ "_name": "StrokeCap.butt", "index": 0 }',
  round = '{ "_name": "StrokeCap.round", "index": 1 }',
  square = '{ "_name": "StrokeCap.square", "index": 2 }',
};

export { StrokeCap };
enum StrokeJoin {
  miter = '{ "_name": "StrokeJoin.miter", "index": 0 }',
  round = '{ "_name": "StrokeJoin.round", "index": 1 }',
  bevel = '{ "_name": "StrokeJoin.bevel", "index": 2 }',
};

export { StrokeJoin };
enum PaintingStyle {
  fill = '{ "_name": "PaintingStyle.fill", "index": 0 }',
  stroke = '{ "_name": "PaintingStyle.stroke", "index": 1 }',
};

export { PaintingStyle };
enum Clip {
  none = '{ "_name": "Clip.none", "index": 0 }',
  hardEdge = '{ "_name": "Clip.hardEdge", "index": 1 }',
  antiAlias = '{ "_name": "Clip.antiAlias", "index": 2 }',
  antiAliasWithSaveLayer = '{ "_name": "Clip.antiAliasWithSaveLayer", "index": 3 }',
};

export { Clip };
class Paint extends MXDartClass {
  data: any;
  objects: Array<any>;
}
export { Paint };
enum ImageByteFormat {
  rawRgba = '{ "_name": "ImageByteFormat.rawRgba", "index": 0 }',
  rawUnmodified = '{ "_name": "ImageByteFormat.rawUnmodified", "index": 1 }',
  png = '{ "_name": "ImageByteFormat.png", "index": 2 }',
};

export { ImageByteFormat };
enum PixelFormat {
  rgba8888 = '{ "_name": "PixelFormat.rgba8888", "index": 0 }',
  bgra8888 = '{ "_name": "PixelFormat.bgra8888", "index": 1 }',
};

export { PixelFormat };
class Image extends NativeFieldWrapperClass2 {}
export { Image };
class FrameInfo extends NativeFieldWrapperClass2 {}
export { FrameInfo };
class Codec extends NativeFieldWrapperClass2 {}
export { Codec };
enum PathFillType {
  nonZero = '{ "_name": "PathFillType.nonZero", "index": 0 }',
  evenOdd = '{ "_name": "PathFillType.evenOdd", "index": 1 }',
};

export { PathFillType };
enum PathOperation {
  difference = '{ "_name": "PathOperation.difference", "index": 0 }',
  intersect = '{ "_name": "PathOperation.intersect", "index": 1 }',
  union = '{ "_name": "PathOperation.union", "index": 2 }',
  xor = '{ "_name": "PathOperation.xor", "index": 3 }',
  reverseDifference = '{ "_name": "PathOperation.reverseDifference", "index": 4 }',
};

export { PathOperation };
class EngineLayer extends NativeFieldWrapperClass2 {}
export { EngineLayer };
class Path extends NativeFieldWrapperClass2 {
  static from(source?: Path) {
    var jsObj = new Path();
    jsObj['source'] = source;
    jsObj['constructorName'] = 'from';
    return jsObj;
  }
}
export { Path };
class Tangent extends MXDartClass {
  position: Offset;
  vector: Offset;
  public constructor(position?: Offset, vector?: Offset) {
    super();
    this.position = position;
    this.vector = vector;
    this.className = 'Tangent';
  }
  static fromAngle(position?: Offset, angle?: number) {
    var jsObj = new Tangent();
    jsObj.position = position;
    jsObj['angle'] = angle;
    jsObj['constructorName'] = 'fromAngle';
    return jsObj;
  }
}
export { Tangent };
class PathMetricIterator extends MXDartClass {
  pathMetric: PathMetric;
  pathMeasure: _PathMeasure;
}
export { PathMetricIterator };
class PathMetric extends MXDartClass {
  length: number;
  isClosed: boolean;
  contourIndex: number;
  measure: _PathMeasure;
}
export { PathMetric };
class _PathMeasure extends NativeFieldWrapperClass2 {
  currentContourIndex: number;
  public constructor(path?: Path, forceClosed?: boolean) {
    super();
    this['path'] = path;
    this['forceClosed'] = forceClosed;
    this.className = '_PathMeasure';
  }
}
export { _PathMeasure };
enum BlurStyle {
  normal = '{ "_name": "BlurStyle.normal", "index": 0 }',
  solid = '{ "_name": "BlurStyle.solid", "index": 1 }',
  outer = '{ "_name": "BlurStyle.outer", "index": 2 }',
  inner = '{ "_name": "BlurStyle.inner", "index": 3 }',
};

export { BlurStyle };
class MaskFilter extends MXDartClass {
  style: BlurStyle;
  sigma: number;
  static blur(_style?: BlurStyle, _sigma?: number) {
    var jsObj = new MaskFilter();
    jsObj.style = _style;
    jsObj.sigma = _sigma;
    jsObj['constructorName'] = 'blur';
    return jsObj;
  }
}
export { MaskFilter };
class ColorFilter extends MXDartClass {
  color: Color;
  blendMode: BlendMode;
  matrix: Array<any>;
  type: number;
  static mode(color?: Color, blendMode?: BlendMode) {
    var jsObj = new ColorFilter();
    jsObj.color = color;
    jsObj.blendMode = blendMode;
    jsObj['constructorName'] = 'mode';
    return jsObj;
  }
  static matrix(matrix?: Array<any>) {
    var jsObj = new ColorFilter();
    jsObj.matrix = matrix;
    jsObj['constructorName'] = 'matrix';
    return jsObj;
  }
  static linearToSrgbGamma() {
    var jsObj = new ColorFilter();
    jsObj['constructorName'] = 'linearToSrgbGamma';
    return jsObj;
  }
  static srgbToLinearGamma() {
    var jsObj = new ColorFilter();
    jsObj['constructorName'] = 'srgbToLinearGamma';
    return jsObj;
  }
}
export { ColorFilter };
class _ColorFilter extends NativeFieldWrapperClass2 {
  creator: ColorFilter;
  static mode(creator?: ColorFilter) {
    var jsObj = new _ColorFilter();
    jsObj.creator = creator;
    jsObj['constructorName'] = 'mode';
    return jsObj;
  }
  static matrix(creator?: ColorFilter) {
    var jsObj = new _ColorFilter();
    jsObj.creator = creator;
    jsObj['constructorName'] = 'matrix';
    return jsObj;
  }
  static linearToSrgbGamma(creator?: ColorFilter) {
    var jsObj = new _ColorFilter();
    jsObj.creator = creator;
    jsObj['constructorName'] = 'linearToSrgbGamma';
    return jsObj;
  }
  static srgbToLinearGamma(creator?: ColorFilter) {
    var jsObj = new _ColorFilter();
    jsObj.creator = creator;
    jsObj['constructorName'] = 'srgbToLinearGamma';
    return jsObj;
  }
}
export { _ColorFilter };
class ImageFilter extends MXDartClass {
  data: any;
  filterQuality: FilterQuality;
  type: number;
  nativeFilter: _ImageFilter;
  static blur(namedParameters: {sigmaX?: number, sigmaY?: number} = {}) {
    var jsObj = new ImageFilter();
    jsObj['sigmaX'] = namedParameters.sigmaX;
    jsObj['sigmaY'] = namedParameters.sigmaY;
    jsObj['constructorName'] = 'blur';
    return jsObj;
  }
  static matrix(matrix4?: any, namedParameters: {filterQuality?: FilterQuality} = {}) {
    var jsObj = new ImageFilter();
    jsObj['matrix4'] = matrix4;
    jsObj.filterQuality = namedParameters.filterQuality;
    jsObj['constructorName'] = 'matrix';
    return jsObj;
  }
}
export { ImageFilter };
class _ImageFilter extends NativeFieldWrapperClass2 {
  creator: ImageFilter;
  static blur(creator?: ImageFilter) {
    var jsObj = new _ImageFilter();
    jsObj.creator = creator;
    jsObj['constructorName'] = 'blur';
    return jsObj;
  }
  static matrix(creator?: ImageFilter) {
    var jsObj = new _ImageFilter();
    jsObj.creator = creator;
    jsObj['constructorName'] = 'matrix';
    return jsObj;
  }
}
export { _ImageFilter };
class Shader extends NativeFieldWrapperClass2 {}
export { Shader };
enum TileMode {
  clamp = '{ "_name": "TileMode.clamp", "index": 0 }',
  repeated = '{ "_name": "TileMode.repeated", "index": 1 }',
  mirror = '{ "_name": "TileMode.mirror", "index": 2 }',
};

export { TileMode };
class Gradient extends Shader {
  static linear(from?: Offset, to?: Offset, colors?: Array<any>, colorStops?: Array<any>, tileMode?: TileMode, matrix4?: any) {
    var jsObj = new Gradient();
    jsObj['from'] = from;
    jsObj['to'] = to;
    jsObj['colors'] = colors;
    jsObj['colorStops'] = colorStops;
    jsObj['tileMode'] = tileMode;
    jsObj['matrix4'] = matrix4;
    jsObj['constructorName'] = 'linear';
    return jsObj;
  }
  static radial(center?: Offset, radius?: number, colors?: Array<any>, colorStops?: Array<any>, tileMode?: TileMode, matrix4?: any, focal?: Offset, focalRadius?: number) {
    var jsObj = new Gradient();
    jsObj['center'] = center;
    jsObj['radius'] = radius;
    jsObj['colors'] = colors;
    jsObj['colorStops'] = colorStops;
    jsObj['tileMode'] = tileMode;
    jsObj['matrix4'] = matrix4;
    jsObj['focal'] = focal;
    jsObj['focalRadius'] = focalRadius;
    jsObj['constructorName'] = 'radial';
    return jsObj;
  }
  static sweep(center?: Offset, colors?: Array<any>, colorStops?: Array<any>, tileMode?: TileMode, startAngle?: number, endAngle?: number, matrix4?: any) {
    var jsObj = new Gradient();
    jsObj['center'] = center;
    jsObj['colors'] = colors;
    jsObj['colorStops'] = colorStops;
    jsObj['tileMode'] = tileMode;
    jsObj['startAngle'] = startAngle;
    jsObj['endAngle'] = endAngle;
    jsObj['matrix4'] = matrix4;
    jsObj['constructorName'] = 'sweep';
    return jsObj;
  }
}
export { Gradient };
class ImageShader extends Shader {
  public constructor(image?: Image, tmx?: TileMode, tmy?: TileMode, matrix4?: any) {
    super();
    this['image'] = image;
    this['tmx'] = tmx;
    this['tmy'] = tmy;
    this['matrix4'] = matrix4;
    this.className = 'ImageShader';
  }
}
export { ImageShader };
enum VertexMode {
  triangles = '{ "_name": "VertexMode.triangles", "index": 0 }',
  triangleStrip = '{ "_name": "VertexMode.triangleStrip", "index": 1 }',
  triangleFan = '{ "_name": "VertexMode.triangleFan", "index": 2 }',
};

export { VertexMode };
class Vertices extends NativeFieldWrapperClass2 {
  public constructor(mode?: VertexMode, positions?: Array<any>, namedParameters: {textureCoordinates?: Array<any>, colors?: Array<any>, indices?: Array<any>} = {}) {
    super();
    this['mode'] = mode;
    this['positions'] = positions;
    this['textureCoordinates'] = namedParameters.textureCoordinates;
    this['colors'] = namedParameters.colors;
    this['indices'] = namedParameters.indices;
    this.className = 'Vertices';
  }
  static raw(mode?: VertexMode, positions?: any, namedParameters: {textureCoordinates?: any, colors?: any, indices?: any} = {}) {
    var jsObj = new Vertices();
    jsObj['mode'] = mode;
    jsObj['positions'] = positions;
    jsObj['textureCoordinates'] = namedParameters.textureCoordinates;
    jsObj['colors'] = namedParameters.colors;
    jsObj['indices'] = namedParameters.indices;
    jsObj['constructorName'] = 'raw';
    return jsObj;
  }
}
export { Vertices };
enum PointMode {
  points = '{ "_name": "PointMode.points", "index": 0 }',
  lines = '{ "_name": "PointMode.lines", "index": 1 }',
  polygon = '{ "_name": "PointMode.polygon", "index": 2 }',
};

export { PointMode };
enum ClipOp {
  difference = '{ "_name": "ClipOp.difference", "index": 0 }',
  intersect = '{ "_name": "ClipOp.intersect", "index": 1 }',
};

export { ClipOp };
class Canvas extends NativeFieldWrapperClass2 {
  recorder: PictureRecorder;
  public constructor(recorder?: PictureRecorder, cullRect?: Rect) {
    super();
    this.recorder = recorder;
    this['cullRect'] = cullRect;
    this.className = 'Canvas';
  }
}
export { Canvas };
class Picture extends NativeFieldWrapperClass2 {}
export { Picture };
class PictureRecorder extends NativeFieldWrapperClass2 {
  canvas: Canvas;
}
export { PictureRecorder };
class Shadow extends MXDartClass {
  color: Color;
  offset: Offset;
  blurRadius: number;
  public constructor(namedParameters: {color?: Color, offset?: Offset, blurRadius?: number} = {}) {
    super();
    this.color = namedParameters.color;
    this.offset = namedParameters.offset;
    this.blurRadius = namedParameters.blurRadius;
    this.className = 'Shadow';
  }
  // MX modified begin
  public static fromJson(mapObj: any) {
    if (mapObj === null || mapObj === undefined) {
      return null;
    }

    const obj = new Shadow();

    for (const p in mapObj) {
      if (mapObj.hasOwnProperty(p)) {
        const v = mapObj[p];
        if (v === null || v === undefined) {
          obj[p] = v;
          continue;
        }

        switch (p) {
          case 'color':
            obj[p] = new Color(v);
            break;

          default:
            obj[p] = v;
            break;
        }
      }
    }

    return obj;
  }
  // MX modified end
}
export { Shadow };
class ImmutableBuffer extends NativeFieldWrapperClass2 {
  length: number;
}
export { ImmutableBuffer };
class ImageDescriptor extends NativeFieldWrapperClass2 {
  width: number;
  height: number;
  bytesPerPixel: number;
  static raw(buffer?: ImmutableBuffer, namedParameters: {width?: number, height?: number, rowBytes?: number, pixelFormat?: PixelFormat} = {}) {
    var jsObj = new ImageDescriptor();
    jsObj['buffer'] = buffer;
    jsObj.width = namedParameters.width;
    jsObj.height = namedParameters.height;
    jsObj['rowBytes'] = namedParameters.rowBytes;
    jsObj['pixelFormat'] = namedParameters.pixelFormat;
    jsObj['constructorName'] = 'raw';
    return jsObj;
  }
}
export { ImageDescriptor };
class CallbackHandle extends MXDartClass {
  handle: number;
  static fromRawHandle(_handle?: number) {
    var jsObj = new CallbackHandle();
    jsObj.handle = _handle;
    jsObj['constructorName'] = 'fromRawHandle';
    return jsObj;
  }
}
export { CallbackHandle };
class PluginUtilities extends MXDartClass {}
export { PluginUtilities };
enum PointerChange {
  cancel = '{ "_name": "PointerChange.cancel", "index": 0 }',
  add = '{ "_name": "PointerChange.add", "index": 1 }',
  remove = '{ "_name": "PointerChange.remove", "index": 2 }',
  hover = '{ "_name": "PointerChange.hover", "index": 3 }',
  down = '{ "_name": "PointerChange.down", "index": 4 }',
  move = '{ "_name": "PointerChange.move", "index": 5 }',
  up = '{ "_name": "PointerChange.up", "index": 6 }',
};

export { PointerChange };
enum PointerDeviceKind {
  touch = '{ "_name": "PointerDeviceKind.touch", "index": 0 }',
  mouse = '{ "_name": "PointerDeviceKind.mouse", "index": 1 }',
  stylus = '{ "_name": "PointerDeviceKind.stylus", "index": 2 }',
  invertedStylus = '{ "_name": "PointerDeviceKind.invertedStylus", "index": 3 }',
  unknown = '{ "_name": "PointerDeviceKind.unknown", "index": 4 }',
};

export { PointerDeviceKind };
enum PointerSignalKind {
  none = '{ "_name": "PointerSignalKind.none", "index": 0 }',
  scroll = '{ "_name": "PointerSignalKind.scroll", "index": 1 }',
  unknown = '{ "_name": "PointerSignalKind.unknown", "index": 2 }',
};

export { PointerSignalKind };
class PointerData extends MXDartClass {
  embedderId: number;
  timeStamp: Duration;
  change: PointerChange;
  kind: PointerDeviceKind;
  signalKind: PointerSignalKind;
  device: number;
  pointerIdentifier: number;
  physicalX: number;
  physicalY: number;
  physicalDeltaX: number;
  physicalDeltaY: number;
  buttons: number;
  obscured: boolean;
  synthesized: boolean;
  pressure: number;
  pressureMin: number;
  pressureMax: number;
  distance: number;
  distanceMax: number;
  size: number;
  radiusMajor: number;
  radiusMinor: number;
  radiusMin: number;
  radiusMax: number;
  orientation: number;
  tilt: number;
  platformData: number;
  scrollDeltaX: number;
  scrollDeltaY: number;
  public constructor(namedParameters: {embedderId?: number, timeStamp?: Duration, change?: PointerChange, kind?: PointerDeviceKind, signalKind?: PointerSignalKind, device?: number, pointerIdentifier?: number, physicalX?: number, physicalY?: number, physicalDeltaX?: number, physicalDeltaY?: number, buttons?: number, obscured?: boolean, synthesized?: boolean, pressure?: number, pressureMin?: number, pressureMax?: number, distance?: number, distanceMax?: number, size?: number, radiusMajor?: number, radiusMinor?: number, radiusMin?: number, radiusMax?: number, orientation?: number, tilt?: number, platformData?: number, scrollDeltaX?: number, scrollDeltaY?: number} = {}) {
    super();
    this.embedderId = namedParameters.embedderId;
    this.timeStamp = namedParameters.timeStamp;
    this.change = namedParameters.change;
    this.kind = namedParameters.kind;
    this.signalKind = namedParameters.signalKind;
    this.device = namedParameters.device;
    this.pointerIdentifier = namedParameters.pointerIdentifier;
    this.physicalX = namedParameters.physicalX;
    this.physicalY = namedParameters.physicalY;
    this.physicalDeltaX = namedParameters.physicalDeltaX;
    this.physicalDeltaY = namedParameters.physicalDeltaY;
    this.buttons = namedParameters.buttons;
    this.obscured = namedParameters.obscured;
    this.synthesized = namedParameters.synthesized;
    this.pressure = namedParameters.pressure;
    this.pressureMin = namedParameters.pressureMin;
    this.pressureMax = namedParameters.pressureMax;
    this.distance = namedParameters.distance;
    this.distanceMax = namedParameters.distanceMax;
    this.size = namedParameters.size;
    this.radiusMajor = namedParameters.radiusMajor;
    this.radiusMinor = namedParameters.radiusMinor;
    this.radiusMin = namedParameters.radiusMin;
    this.radiusMax = namedParameters.radiusMax;
    this.orientation = namedParameters.orientation;
    this.tilt = namedParameters.tilt;
    this.platformData = namedParameters.platformData;
    this.scrollDeltaX = namedParameters.scrollDeltaX;
    this.scrollDeltaY = namedParameters.scrollDeltaY;
    this.className = 'PointerData';
  }
}
export { PointerData };
class PointerDataPacket extends MXDartClass {
  data: Array<any>;
  public constructor(namedParameters: {data?: Array<any>} = {}) {
    super();
    this.data = namedParameters.data;
    this.className = 'PointerDataPacket';
  }
}
export { PointerDataPacket };
class SemanticsAction extends MXDartClass {
  index: number;
  static get tap() {
    var jsObj = new SemanticsAction();
    jsObj['className'] = 'SemanticsAction';
    jsObj['constructorName'] = 'tap';
    return jsObj;
  }
  static get longPress() {
    var jsObj = new SemanticsAction();
    jsObj['className'] = 'SemanticsAction';
    jsObj['constructorName'] = 'longPress';
    return jsObj;
  }
  static get scrollLeft() {
    var jsObj = new SemanticsAction();
    jsObj['className'] = 'SemanticsAction';
    jsObj['constructorName'] = 'scrollLeft';
    return jsObj;
  }
  static get scrollRight() {
    var jsObj = new SemanticsAction();
    jsObj['className'] = 'SemanticsAction';
    jsObj['constructorName'] = 'scrollRight';
    return jsObj;
  }
  static get scrollUp() {
    var jsObj = new SemanticsAction();
    jsObj['className'] = 'SemanticsAction';
    jsObj['constructorName'] = 'scrollUp';
    return jsObj;
  }
  static get scrollDown() {
    var jsObj = new SemanticsAction();
    jsObj['className'] = 'SemanticsAction';
    jsObj['constructorName'] = 'scrollDown';
    return jsObj;
  }
  static get increase() {
    var jsObj = new SemanticsAction();
    jsObj['className'] = 'SemanticsAction';
    jsObj['constructorName'] = 'increase';
    return jsObj;
  }
  static get decrease() {
    var jsObj = new SemanticsAction();
    jsObj['className'] = 'SemanticsAction';
    jsObj['constructorName'] = 'decrease';
    return jsObj;
  }
  static get showOnScreen() {
    var jsObj = new SemanticsAction();
    jsObj['className'] = 'SemanticsAction';
    jsObj['constructorName'] = 'showOnScreen';
    return jsObj;
  }
  static get moveCursorForwardByCharacter() {
    var jsObj = new SemanticsAction();
    jsObj['className'] = 'SemanticsAction';
    jsObj['constructorName'] = 'moveCursorForwardByCharacter';
    return jsObj;
  }
  static get moveCursorBackwardByCharacter() {
    var jsObj = new SemanticsAction();
    jsObj['className'] = 'SemanticsAction';
    jsObj['constructorName'] = 'moveCursorBackwardByCharacter';
    return jsObj;
  }
  static get setSelection() {
    var jsObj = new SemanticsAction();
    jsObj['className'] = 'SemanticsAction';
    jsObj['constructorName'] = 'setSelection';
    return jsObj;
  }
  static get copy() {
    var jsObj = new SemanticsAction();
    jsObj['className'] = 'SemanticsAction';
    jsObj['constructorName'] = 'copy';
    return jsObj;
  }
  static get cut() {
    var jsObj = new SemanticsAction();
    jsObj['className'] = 'SemanticsAction';
    jsObj['constructorName'] = 'cut';
    return jsObj;
  }
  static get paste() {
    var jsObj = new SemanticsAction();
    jsObj['className'] = 'SemanticsAction';
    jsObj['constructorName'] = 'paste';
    return jsObj;
  }
  static get didGainAccessibilityFocus() {
    var jsObj = new SemanticsAction();
    jsObj['className'] = 'SemanticsAction';
    jsObj['constructorName'] = 'didGainAccessibilityFocus';
    return jsObj;
  }
  static get didLoseAccessibilityFocus() {
    var jsObj = new SemanticsAction();
    jsObj['className'] = 'SemanticsAction';
    jsObj['constructorName'] = 'didLoseAccessibilityFocus';
    return jsObj;
  }
  static get customAction() {
    var jsObj = new SemanticsAction();
    jsObj['className'] = 'SemanticsAction';
    jsObj['constructorName'] = 'customAction';
    return jsObj;
  }
  static get dismiss() {
    var jsObj = new SemanticsAction();
    jsObj['className'] = 'SemanticsAction';
    jsObj['constructorName'] = 'dismiss';
    return jsObj;
  }
  static get moveCursorForwardByWord() {
    var jsObj = new SemanticsAction();
    jsObj['className'] = 'SemanticsAction';
    jsObj['constructorName'] = 'moveCursorForwardByWord';
    return jsObj;
  }
  static get moveCursorBackwardByWord() {
    var jsObj = new SemanticsAction();
    jsObj['className'] = 'SemanticsAction';
    jsObj['constructorName'] = 'moveCursorBackwardByWord';
    return jsObj;
  }
  static get values() {
    return {1.0:SemanticsAction.tap, 2.0:SemanticsAction.longPress, 4.0:SemanticsAction.scrollLeft, 8.0:SemanticsAction.scrollRight, 16.0:SemanticsAction.scrollUp, 32.0:SemanticsAction.scrollDown, 64.0:SemanticsAction.increase, 128.0:SemanticsAction.decrease, 256.0:SemanticsAction.showOnScreen, 512.0:SemanticsAction.moveCursorForwardByCharacter, 1024.0:SemanticsAction.moveCursorBackwardByCharacter, 2048.0:SemanticsAction.setSelection, 4096.0:SemanticsAction.copy, 8192.0:SemanticsAction.cut, 16384.0:SemanticsAction.paste, 32768.0:SemanticsAction.didGainAccessibilityFocus, 65536.0:SemanticsAction.didLoseAccessibilityFocus, 131072.0:SemanticsAction.customAction, 262144.0:SemanticsAction.dismiss, 524288.0:SemanticsAction.moveCursorForwardByWord, 1048576.0:SemanticsAction.moveCursorBackwardByWord};
  }
}
export { SemanticsAction };
class SemanticsFlag extends MXDartClass {
  index: number;
  static get hasCheckedState() {
    var jsObj = new SemanticsFlag();
    jsObj['className'] = 'SemanticsFlag';
    jsObj['constructorName'] = 'hasCheckedState';
    return jsObj;
  }
  static get isChecked() {
    var jsObj = new SemanticsFlag();
    jsObj['className'] = 'SemanticsFlag';
    jsObj['constructorName'] = 'isChecked';
    return jsObj;
  }
  static get isSelected() {
    var jsObj = new SemanticsFlag();
    jsObj['className'] = 'SemanticsFlag';
    jsObj['constructorName'] = 'isSelected';
    return jsObj;
  }
  static get isButton() {
    var jsObj = new SemanticsFlag();
    jsObj['className'] = 'SemanticsFlag';
    jsObj['constructorName'] = 'isButton';
    return jsObj;
  }
  static get isTextField() {
    var jsObj = new SemanticsFlag();
    jsObj['className'] = 'SemanticsFlag';
    jsObj['constructorName'] = 'isTextField';
    return jsObj;
  }
  static get isReadOnly() {
    var jsObj = new SemanticsFlag();
    jsObj['className'] = 'SemanticsFlag';
    jsObj['constructorName'] = 'isReadOnly';
    return jsObj;
  }
  static get isLink() {
    var jsObj = new SemanticsFlag();
    jsObj['className'] = 'SemanticsFlag';
    jsObj['constructorName'] = 'isLink';
    return jsObj;
  }
  static get isFocusable() {
    var jsObj = new SemanticsFlag();
    jsObj['className'] = 'SemanticsFlag';
    jsObj['constructorName'] = 'isFocusable';
    return jsObj;
  }
  static get isFocused() {
    var jsObj = new SemanticsFlag();
    jsObj['className'] = 'SemanticsFlag';
    jsObj['constructorName'] = 'isFocused';
    return jsObj;
  }
  static get hasEnabledState() {
    var jsObj = new SemanticsFlag();
    jsObj['className'] = 'SemanticsFlag';
    jsObj['constructorName'] = 'hasEnabledState';
    return jsObj;
  }
  static get isEnabled() {
    var jsObj = new SemanticsFlag();
    jsObj['className'] = 'SemanticsFlag';
    jsObj['constructorName'] = 'isEnabled';
    return jsObj;
  }
  static get isInMutuallyExclusiveGroup() {
    var jsObj = new SemanticsFlag();
    jsObj['className'] = 'SemanticsFlag';
    jsObj['constructorName'] = 'isInMutuallyExclusiveGroup';
    return jsObj;
  }
  static get isHeader() {
    var jsObj = new SemanticsFlag();
    jsObj['className'] = 'SemanticsFlag';
    jsObj['constructorName'] = 'isHeader';
    return jsObj;
  }
  static get isObscured() {
    var jsObj = new SemanticsFlag();
    jsObj['className'] = 'SemanticsFlag';
    jsObj['constructorName'] = 'isObscured';
    return jsObj;
  }
  static get isMultiline() {
    var jsObj = new SemanticsFlag();
    jsObj['className'] = 'SemanticsFlag';
    jsObj['constructorName'] = 'isMultiline';
    return jsObj;
  }
  static get scopesRoute() {
    var jsObj = new SemanticsFlag();
    jsObj['className'] = 'SemanticsFlag';
    jsObj['constructorName'] = 'scopesRoute';
    return jsObj;
  }
  static get namesRoute() {
    var jsObj = new SemanticsFlag();
    jsObj['className'] = 'SemanticsFlag';
    jsObj['constructorName'] = 'namesRoute';
    return jsObj;
  }
  static get isHidden() {
    var jsObj = new SemanticsFlag();
    jsObj['className'] = 'SemanticsFlag';
    jsObj['constructorName'] = 'isHidden';
    return jsObj;
  }
  static get isImage() {
    var jsObj = new SemanticsFlag();
    jsObj['className'] = 'SemanticsFlag';
    jsObj['constructorName'] = 'isImage';
    return jsObj;
  }
  static get isLiveRegion() {
    var jsObj = new SemanticsFlag();
    jsObj['className'] = 'SemanticsFlag';
    jsObj['constructorName'] = 'isLiveRegion';
    return jsObj;
  }
  static get hasToggledState() {
    var jsObj = new SemanticsFlag();
    jsObj['className'] = 'SemanticsFlag';
    jsObj['constructorName'] = 'hasToggledState';
    return jsObj;
  }
  static get isToggled() {
    var jsObj = new SemanticsFlag();
    jsObj['className'] = 'SemanticsFlag';
    jsObj['constructorName'] = 'isToggled';
    return jsObj;
  }
  static get hasImplicitScrolling() {
    var jsObj = new SemanticsFlag();
    jsObj['className'] = 'SemanticsFlag';
    jsObj['constructorName'] = 'hasImplicitScrolling';
    return jsObj;
  }
  static get values() {
    return {1.0:SemanticsFlag.hasCheckedState, 2.0:SemanticsFlag.isChecked, 4.0:SemanticsFlag.isSelected, 8.0:SemanticsFlag.isButton, 16.0:SemanticsFlag.isTextField, 32.0:SemanticsFlag.isFocused, 64.0:SemanticsFlag.hasEnabledState, 128.0:SemanticsFlag.isEnabled, 256.0:SemanticsFlag.isInMutuallyExclusiveGroup, 512.0:SemanticsFlag.isHeader, 1024.0:SemanticsFlag.isObscured, 2048.0:SemanticsFlag.scopesRoute, 4096.0:SemanticsFlag.namesRoute, 8192.0:SemanticsFlag.isHidden, 16384.0:SemanticsFlag.isImage, 32768.0:SemanticsFlag.isLiveRegion, 65536.0:SemanticsFlag.hasToggledState, 131072.0:SemanticsFlag.isToggled, 262144.0:SemanticsFlag.hasImplicitScrolling, 524288.0:SemanticsFlag.isMultiline, 1048576.0:SemanticsFlag.isReadOnly, 2097152.0:SemanticsFlag.isFocusable, 4194304.0:SemanticsFlag.isLink};
  }
}
export { SemanticsFlag };
class SemanticsUpdateBuilder extends NativeFieldWrapperClass2 {}
export { SemanticsUpdateBuilder };
class SemanticsUpdate extends NativeFieldWrapperClass2 {}
export { SemanticsUpdate };
enum FontStyle {
  normal = '{ "_name": "FontStyle.normal", "index": 0 }',
  italic = '{ "_name": "FontStyle.italic", "index": 1 }',
};

export { FontStyle };
class FontWeight extends MXDartClass {
  index: number;
  static get w100() {
    var jsObj = new FontWeight();
    jsObj['className'] = 'FontWeight';
    jsObj['constructorName'] = 'w100';
    return jsObj;
  }
  static get w200() {
    var jsObj = new FontWeight();
    jsObj['className'] = 'FontWeight';
    jsObj['constructorName'] = 'w200';
    return jsObj;
  }
  static get w300() {
    var jsObj = new FontWeight();
    jsObj['className'] = 'FontWeight';
    jsObj['constructorName'] = 'w300';
    return jsObj;
  }
  static get w400() {
    var jsObj = new FontWeight();
    jsObj['className'] = 'FontWeight';
    jsObj['constructorName'] = 'w400';
    return jsObj;
  }
  static get w500() {
    var jsObj = new FontWeight();
    jsObj['className'] = 'FontWeight';
    jsObj['constructorName'] = 'w500';
    return jsObj;
  }
  static get w600() {
    var jsObj = new FontWeight();
    jsObj['className'] = 'FontWeight';
    jsObj['constructorName'] = 'w600';
    return jsObj;
  }
  static get w700() {
    var jsObj = new FontWeight();
    jsObj['className'] = 'FontWeight';
    jsObj['constructorName'] = 'w700';
    return jsObj;
  }
  static get w800() {
    var jsObj = new FontWeight();
    jsObj['className'] = 'FontWeight';
    jsObj['constructorName'] = 'w800';
    return jsObj;
  }
  static get w900() {
    var jsObj = new FontWeight();
    jsObj['className'] = 'FontWeight';
    jsObj['constructorName'] = 'w900';
    return jsObj;
  }
  static get normal() {
    var jsObj = new FontWeight();
    jsObj['className'] = 'FontWeight';
    jsObj['constructorName'] = 'normal';
    return jsObj;
  }
  static get bold() {
    var jsObj = new FontWeight();
    jsObj['className'] = 'FontWeight';
    jsObj['constructorName'] = 'bold';
    return jsObj;
  }
  static get values() {
    return [FontWeight.w100, FontWeight.w200, FontWeight.w300, FontWeight.w400, FontWeight.w500, FontWeight.w600, FontWeight.w700, FontWeight.w800, FontWeight.w900];
  }
}
export { FontWeight };
class FontFeature extends MXDartClass {
  feature: string;
  value: number;
  public constructor(feature?: string, value?: number) {
    super();
    this.feature = feature;
    this.value = value;
    this.className = 'FontFeature';
  }
  static stylisticSet(value?: number) {
    var jsObj = new FontFeature();
    jsObj.value = value;
    jsObj['constructorName'] = 'stylisticSet';
    return jsObj;
  }
  static enable(feature?: string) {
    var jsObj = new FontFeature();
    jsObj.feature = feature;
    jsObj['constructorName'] = 'enable';
    return jsObj;
  }
  static disable(feature?: string) {
    var jsObj = new FontFeature();
    jsObj.feature = feature;
    jsObj['constructorName'] = 'disable';
    return jsObj;
  }
  static randomize() {
    var jsObj = new FontFeature();
    jsObj['constructorName'] = 'randomize';
    return jsObj;
  }
  static slashedZero() {
    var jsObj = new FontFeature();
    jsObj['constructorName'] = 'slashedZero';
    return jsObj;
  }
  static oldstyleFigures() {
    var jsObj = new FontFeature();
    jsObj['constructorName'] = 'oldstyleFigures';
    return jsObj;
  }
  static proportionalFigures() {
    var jsObj = new FontFeature();
    jsObj['constructorName'] = 'proportionalFigures';
    return jsObj;
  }
  static tabularFigures() {
    var jsObj = new FontFeature();
    jsObj['constructorName'] = 'tabularFigures';
    return jsObj;
  }
}
export { FontFeature };
enum TextAlign {
  left = '{ "_name": "TextAlign.left", "index": 0 }',
  right = '{ "_name": "TextAlign.right", "index": 1 }',
  center = '{ "_name": "TextAlign.center", "index": 2 }',
  justify = '{ "_name": "TextAlign.justify", "index": 3 }',
  start = '{ "_name": "TextAlign.start", "index": 4 }',
  end = '{ "_name": "TextAlign.end", "index": 5 }',
};

export { TextAlign };
enum TextBaseline {
  alphabetic = '{ "_name": "TextBaseline.alphabetic", "index": 0 }',
  ideographic = '{ "_name": "TextBaseline.ideographic", "index": 1 }',
};

export { TextBaseline };
class TextDecoration extends MXDartClass {
  mask: number;
  static get none() {
    var jsObj = new TextDecoration();
    jsObj['className'] = 'TextDecoration';
    jsObj['constructorName'] = 'none';
    return jsObj;
  }
  static get underline() {
    var jsObj = new TextDecoration();
    jsObj['className'] = 'TextDecoration';
    jsObj['constructorName'] = 'underline';
    return jsObj;
  }
  static get overline() {
    var jsObj = new TextDecoration();
    jsObj['className'] = 'TextDecoration';
    jsObj['constructorName'] = 'overline';
    return jsObj;
  }
  static get lineThrough() {
    var jsObj = new TextDecoration();
    jsObj['className'] = 'TextDecoration';
    jsObj['constructorName'] = 'lineThrough';
    return jsObj;
  }
  static combine(decorations?: Array<any>) {
    var jsObj = new TextDecoration();
    jsObj['decorations'] = decorations;
    jsObj['constructorName'] = 'combine';
    return jsObj;
  }
}
export { TextDecoration };
enum TextDecorationStyle {
  solid = '{ "_name": "TextDecorationStyle.solid", "index": 0 }',
  double = '{ "_name": "TextDecorationStyle.double", "index": 1 }',
  dotted = '{ "_name": "TextDecorationStyle.dotted", "index": 2 }',
  dashed = '{ "_name": "TextDecorationStyle.dashed", "index": 3 }',
  wavy = '{ "_name": "TextDecorationStyle.wavy", "index": 4 }',
};

export { TextDecorationStyle };
class TextHeightBehavior extends MXDartClass {
  applyHeightToFirstAscent: boolean;
  applyHeightToLastDescent: boolean;
  public constructor(namedParameters: {applyHeightToFirstAscent?: boolean, applyHeightToLastDescent?: boolean} = {}) {
    super();
    this.applyHeightToFirstAscent = namedParameters.applyHeightToFirstAscent;
    this.applyHeightToLastDescent = namedParameters.applyHeightToLastDescent;
    this.className = 'TextHeightBehavior';
  }
  static fromEncoded(encoded?: number) {
    var jsObj = new TextHeightBehavior();
    jsObj['encoded'] = encoded;
    jsObj['constructorName'] = 'fromEncoded';
    return jsObj;
  }
}
export { TextHeightBehavior };
class TextStyle extends MXDartClass {
  encoded: any;
  fontFamily: string;
  fontFamilyFallback: Array<any>;
  fontSize: number;
  letterSpacing: number;
  wordSpacing: number;
  height: number;
  decorationThickness: number;
  locale: Locale;
  background: Paint;
  foreground: Paint;
  shadows: Array<any>;
  fontFeatures: Array<any>;
  public constructor(namedParameters: {color?: Color, decoration?: TextDecoration, decorationColor?: Color, decorationStyle?: TextDecorationStyle, decorationThickness?: number, fontWeight?: FontWeight, fontStyle?: FontStyle, textBaseline?: TextBaseline, fontFamily?: string, fontFamilyFallback?: Array<any>, fontSize?: number, letterSpacing?: number, wordSpacing?: number, height?: number, locale?: Locale, background?: Paint, foreground?: Paint, shadows?: Array<any>, fontFeatures?: Array<any>} = {}) {
    super();
    this['color'] = namedParameters.color;
    this['decoration'] = namedParameters.decoration;
    this['decorationColor'] = namedParameters.decorationColor;
    this['decorationStyle'] = namedParameters.decorationStyle;
    this.decorationThickness = namedParameters.decorationThickness;
    this['fontWeight'] = namedParameters.fontWeight;
    this['fontStyle'] = namedParameters.fontStyle;
    this['textBaseline'] = namedParameters.textBaseline;
    this.fontFamily = namedParameters.fontFamily;
    this.fontFamilyFallback = namedParameters.fontFamilyFallback;
    this.fontSize = namedParameters.fontSize;
    this.letterSpacing = namedParameters.letterSpacing;
    this.wordSpacing = namedParameters.wordSpacing;
    this.height = namedParameters.height;
    this.locale = namedParameters.locale;
    this.background = namedParameters.background;
    this.foreground = namedParameters.foreground;
    this.shadows = namedParameters.shadows;
    this.fontFeatures = namedParameters.fontFeatures;
    this.className = 'TextStyle';
  }
}
export { TextStyle };
class ParagraphStyle extends MXDartClass {
  encoded: any;
  fontFamily: string;
  fontSize: number;
  height: number;
  strutStyle: StrutStyle;
  ellipsis: string;
  locale: Locale;
  public constructor(namedParameters: {textAlign?: TextAlign, textDirection?: TextDirection, maxLines?: number, fontFamily?: string, fontSize?: number, height?: number, textHeightBehavior?: TextHeightBehavior, fontWeight?: FontWeight, fontStyle?: FontStyle, strutStyle?: StrutStyle, ellipsis?: string, locale?: Locale} = {}) {
    super();
    this['textAlign'] = namedParameters.textAlign;
    this['textDirection'] = namedParameters.textDirection;
    this['maxLines'] = namedParameters.maxLines;
    this.fontFamily = namedParameters.fontFamily;
    this.fontSize = namedParameters.fontSize;
    this.height = namedParameters.height;
    this['textHeightBehavior'] = namedParameters.textHeightBehavior;
    this['fontWeight'] = namedParameters.fontWeight;
    this['fontStyle'] = namedParameters.fontStyle;
    this.strutStyle = namedParameters.strutStyle;
    this.ellipsis = namedParameters.ellipsis;
    this.locale = namedParameters.locale;
    this.className = 'ParagraphStyle';
  }
}
export { ParagraphStyle };
class StrutStyle extends MXDartClass {
  encoded: any;
  fontFamily: string;
  fontFamilyFallback: Array<any>;
  public constructor(namedParameters: {fontFamily?: string, fontFamilyFallback?: Array<any>, fontSize?: number, height?: number, leading?: number, fontWeight?: FontWeight, fontStyle?: FontStyle, forceStrutHeight?: boolean} = {}) {
    super();
    this.fontFamily = namedParameters.fontFamily;
    this.fontFamilyFallback = namedParameters.fontFamilyFallback;
    this['fontSize'] = namedParameters.fontSize;
    this['height'] = namedParameters.height;
    this['leading'] = namedParameters.leading;
    this['fontWeight'] = namedParameters.fontWeight;
    this['fontStyle'] = namedParameters.fontStyle;
    this['forceStrutHeight'] = namedParameters.forceStrutHeight;
    this.className = 'StrutStyle';
  }
}
export { StrutStyle };
enum TextDirection {
  rtl = '{ "_name": "TextDirection.rtl", "index": 0 }',
  ltr = '{ "_name": "TextDirection.ltr", "index": 1 }',
};

export { TextDirection };
class TextBox extends MXDartClass {
  left: number;
  top: number;
  right: number;
  bottom: number;
  direction: TextDirection;
  static fromLTRBD(left?: number, top?: number, right?: number, bottom?: number, direction?: TextDirection) {
    var jsObj = new TextBox();
    jsObj.left = left;
    jsObj.top = top;
    jsObj.right = right;
    jsObj.bottom = bottom;
    jsObj.direction = direction;
    jsObj['constructorName'] = 'fromLTRBD';
    return jsObj;
  }
}
export { TextBox };
enum TextAffinity {
  upstream = '{ "_name": "TextAffinity.upstream", "index": 0 }',
  downstream = '{ "_name": "TextAffinity.downstream", "index": 1 }',
};

export { TextAffinity };
class TextPosition extends MXDartClass {
  offset: number;
  affinity: TextAffinity;
  public constructor(namedParameters: {offset?: number, affinity?: TextAffinity} = {}) {
    super();
    this.offset = namedParameters.offset;
    this.affinity = namedParameters.affinity;
    this.className = 'TextPosition';
  }
}
export { TextPosition };
class TextRange extends MXDartClass {
  start: number;
  end: number;
  public constructor(namedParameters: {start?: number, end?: number} = {}) {
    super();
    this.start = namedParameters.start;
    this.end = namedParameters.end;
    this.className = 'TextRange';
  }
  static get empty() {
    var jsObj = new TextRange();
    jsObj['className'] = 'TextRange';
    jsObj['constructorName'] = 'empty';
    return jsObj;
  }
  static collapsed(offset?: number) {
    var jsObj = new TextRange();
    jsObj['offset'] = offset;
    jsObj['constructorName'] = 'collapsed';
    return jsObj;
  }
}
export { TextRange };
class ParagraphConstraints extends MXDartClass {
  width: number;
  public constructor(namedParameters: {width?: number} = {}) {
    super();
    this.width = namedParameters.width;
    this.className = 'ParagraphConstraints';
  }
}
export { ParagraphConstraints };
enum BoxHeightStyle {
  tight = '{ "_name": "BoxHeightStyle.tight", "index": 0 }',
  max = '{ "_name": "BoxHeightStyle.max", "index": 1 }',
  includeLineSpacingMiddle = '{ "_name": "BoxHeightStyle.includeLineSpacingMiddle", "index": 2 }',
  includeLineSpacingTop = '{ "_name": "BoxHeightStyle.includeLineSpacingTop", "index": 3 }',
  includeLineSpacingBottom = '{ "_name": "BoxHeightStyle.includeLineSpacingBottom", "index": 4 }',
  strut = '{ "_name": "BoxHeightStyle.strut", "index": 5 }',
};

export { BoxHeightStyle };
enum BoxWidthStyle {
  tight = '{ "_name": "BoxWidthStyle.tight", "index": 0 }',
  max = '{ "_name": "BoxWidthStyle.max", "index": 1 }',
};

export { BoxWidthStyle };
enum PlaceholderAlignment {
  baseline = '{ "_name": "PlaceholderAlignment.baseline", "index": 0 }',
  aboveBaseline = '{ "_name": "PlaceholderAlignment.aboveBaseline", "index": 1 }',
  belowBaseline = '{ "_name": "PlaceholderAlignment.belowBaseline", "index": 2 }',
  top = '{ "_name": "PlaceholderAlignment.top", "index": 3 }',
  bottom = '{ "_name": "PlaceholderAlignment.bottom", "index": 4 }',
  middle = '{ "_name": "PlaceholderAlignment.middle", "index": 5 }',
};

export { PlaceholderAlignment };
class LineMetrics extends MXDartClass {
  hardBreak: boolean;
  ascent: number;
  descent: number;
  unscaledAscent: number;
  height: number;
  width: number;
  left: number;
  baseline: number;
  lineNumber: number;
  public constructor(namedParameters: {hardBreak?: boolean, ascent?: number, descent?: number, unscaledAscent?: number, height?: number, width?: number, left?: number, baseline?: number, lineNumber?: number} = {}) {
    super();
    this.hardBreak = namedParameters.hardBreak;
    this.ascent = namedParameters.ascent;
    this.descent = namedParameters.descent;
    this.unscaledAscent = namedParameters.unscaledAscent;
    this.height = namedParameters.height;
    this.width = namedParameters.width;
    this.left = namedParameters.left;
    this.baseline = namedParameters.baseline;
    this.lineNumber = namedParameters.lineNumber;
    this.className = 'LineMetrics';
  }
}
export { LineMetrics };
class Paragraph extends NativeFieldWrapperClass2 {}
export { Paragraph };
class ParagraphBuilder extends NativeFieldWrapperClass2 {
  placeholderCount: number;
  placeholderScales: Array<any>;
  public constructor(style?: ParagraphStyle) {
    super();
    this['style'] = style;
    this.className = 'ParagraphBuilder';
  }
}
export { ParagraphBuilder };
enum FramePhase {
  vsyncStart = '{ "_name": "FramePhase.vsyncStart", "index": 0 }',
  buildStart = '{ "_name": "FramePhase.buildStart", "index": 1 }',
  buildFinish = '{ "_name": "FramePhase.buildFinish", "index": 2 }',
  rasterStart = '{ "_name": "FramePhase.rasterStart", "index": 3 }',
  rasterFinish = '{ "_name": "FramePhase.rasterFinish", "index": 4 }',
};

export { FramePhase };
class FrameTiming extends MXDartClass {
  timestamps: Array<any>;
  public constructor(namedParameters: {vsyncStart?: number, buildStart?: number, buildFinish?: number, rasterStart?: number, rasterFinish?: number} = {}) {
    super();
    this['vsyncStart'] = namedParameters.vsyncStart;
    this['buildStart'] = namedParameters.buildStart;
    this['buildFinish'] = namedParameters.buildFinish;
    this['rasterStart'] = namedParameters.rasterStart;
    this['rasterFinish'] = namedParameters.rasterFinish;
    this.className = 'FrameTiming';
  }
}
export { FrameTiming };
enum AppLifecycleState {
  resumed = '{ "_name": "AppLifecycleState.resumed", "index": 0 }',
  inactive = '{ "_name": "AppLifecycleState.inactive", "index": 1 }',
  paused = '{ "_name": "AppLifecycleState.paused", "index": 2 }',
  detached = '{ "_name": "AppLifecycleState.detached", "index": 3 }',
};

export { AppLifecycleState };
class WindowPadding extends MXDartClass {
  left: number;
  top: number;
  right: number;
  bottom: number;
  static get zero() {
    var jsObj = new WindowPadding();
    jsObj['className'] = 'WindowPadding';
    jsObj['constructorName'] = 'zero';
    return jsObj;
  }
}
export { WindowPadding };
class Locale extends MXDartClass {
  languageCode: string;
  scriptCode: string;
  countryCode: string;
  public constructor(_languageCode?: string, _countryCode?: string) {
    super();
    this.languageCode = _languageCode;
    this.countryCode = _countryCode;
    this.className = 'Locale';
  }
  static fromSubtags(namedParameters: {languageCode?: string, scriptCode?: string, countryCode?: string} = {}) {
    var jsObj = new Locale();
    jsObj.languageCode = namedParameters.languageCode;
    jsObj.scriptCode = namedParameters.scriptCode;
    jsObj.countryCode = namedParameters.countryCode;
    jsObj['constructorName'] = 'fromSubtags';
    return jsObj;
  }
  // MX modified begin
  static fromJson(mapObj: any) {
    if (mapObj == null || mapObj == undefined) {
      return null;
    }

    let obj = new Locale( mapObj['languageCode'], mapObj['countryCode'] );

    return obj;
  }
  // MX modified end
}
export { Locale };
class Window extends MXDartClass {
  devicePixelRatio: number;
  physicalSize: Size;
  viewInsets: WindowPadding;
  viewPadding: WindowPadding;
  systemGestureInsets: WindowPadding;
  padding: WindowPadding;
  onMetricsChanged: any;
  onMetricsChangedZone: any;
  locales: Array<any>;
  onLocaleChanged: any;
  onLocaleChangedZone: any;
  initialLifecycleState: string;
  initialLifecycleStateAccessed: boolean;
  textScaleFactor: number;
  alwaysUse24HourFormat: boolean;
  onTextScaleFactorChanged: any;
  onTextScaleFactorChangedZone: any;
  platformBrightness: Brightness;
  onPlatformBrightnessChanged: any;
  onPlatformBrightnessChangedZone: any;
  onBeginFrame: any;
  onBeginFrameZone: any;
  onDrawFrame: any;
  onDrawFrameZone: any;
  onReportTimings: any;
  onReportTimingsZone: any;
  setNeedsReportTimings: any;
  onPointerDataPacket: any;
  onPointerDataPacketZone: any;
  semanticsEnabled: boolean;
  onSemanticsEnabledChanged: any;
  onSemanticsEnabledChangedZone: any;
  onSemanticsAction: any;
  onSemanticsActionZone: any;
  accessibilityFeatures: AccessibilityFeatures;
  onAccessibilityFeaturesChanged: any;
  onAccessibilityFeaturesChangedZone: any;
  onPlatformMessage: any;
  onPlatformMessageZone: any;
}
export { Window };
class AccessibilityFeatures extends MXDartClass {
  index: number;
}
export { AccessibilityFeatures };
enum Brightness {
  dark = '{ "_name": "Brightness.dark", "index": 0 }',
  light = '{ "_name": "Brightness.light", "index": 1 }',
};

export { Brightness };
