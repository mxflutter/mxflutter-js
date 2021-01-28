//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
// MX Modified begin
import { MXDartClass } from '@mxflutter/mxflutter-base';
// MX Modified end
class PlatformViewRegistry extends MXDartClass {
}
export { PlatformViewRegistry };
class _KeepToString extends MXDartClass {
}
export { _KeepToString };
var PointMode;
(function (PointMode) {
    PointMode["points"] = "{ \"_name\": \"PointMode.points\", \"index\": 0 }";
    PointMode["lines"] = "{ \"_name\": \"PointMode.lines\", \"index\": 1 }";
    PointMode["polygon"] = "{ \"_name\": \"PointMode.polygon\", \"index\": 2 }";
})(PointMode || (PointMode = {}));
export { PointMode };
var ClipOp;
(function (ClipOp) {
    ClipOp["difference"] = "{ \"_name\": \"ClipOp.difference\", \"index\": 0 }";
    ClipOp["intersect"] = "{ \"_name\": \"ClipOp.intersect\", \"index\": 1 }";
})(ClipOp || (ClipOp = {}));
export { ClipOp };
var VertexMode;
(function (VertexMode) {
    VertexMode["triangles"] = "{ \"_name\": \"VertexMode.triangles\", \"index\": 0 }";
    VertexMode["triangleStrip"] = "{ \"_name\": \"VertexMode.triangleStrip\", \"index\": 1 }";
    VertexMode["triangleFan"] = "{ \"_name\": \"VertexMode.triangleFan\", \"index\": 2 }";
})(VertexMode || (VertexMode = {}));
export { VertexMode };
class Vertices extends MXDartClass {
    constructor(mode, positions, namedParameters = {}) {
        super();
        this['mode'] = mode;
        this['positions'] = positions;
        this['textureCoordinates'] = namedParameters.textureCoordinates;
        this['colors'] = namedParameters.colors;
        this['indices'] = namedParameters.indices;
        this.className = 'Vertices';
    }
    static raw(mode, positions, namedParameters = {}) {
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
class PictureRecorder extends MXDartClass {
    constructor() {
        super();
        this.className = 'PictureRecorder';
    }
}
export { PictureRecorder };
class Canvas extends MXDartClass {
    constructor(recorder, cullRect) {
        super();
        this['recorder'] = recorder;
        this['cullRect'] = cullRect;
        this.className = 'Canvas';
    }
}
export { Canvas };
class Picture extends MXDartClass {
}
export { Picture };
var PathFillType;
(function (PathFillType) {
    PathFillType["nonZero"] = "{ \"_name\": \"PathFillType.nonZero\", \"index\": 0 }";
    PathFillType["evenOdd"] = "{ \"_name\": \"PathFillType.evenOdd\", \"index\": 1 }";
})(PathFillType || (PathFillType = {}));
export { PathFillType };
var PathOperation;
(function (PathOperation) {
    PathOperation["difference"] = "{ \"_name\": \"PathOperation.difference\", \"index\": 0 }";
    PathOperation["intersect"] = "{ \"_name\": \"PathOperation.intersect\", \"index\": 1 }";
    PathOperation["union"] = "{ \"_name\": \"PathOperation.union\", \"index\": 2 }";
    PathOperation["xor"] = "{ \"_name\": \"PathOperation.xor\", \"index\": 3 }";
    PathOperation["reverseDifference"] = "{ \"_name\": \"PathOperation.reverseDifference\", \"index\": 4 }";
})(PathOperation || (PathOperation = {}));
export { PathOperation };
class _StoredMessage extends MXDartClass {
    constructor(_data, _callback) {
        super();
        this.data = _data;
        this.callback = _callback;
        this.className = '_StoredMessage';
    }
}
export { _StoredMessage };
class _RingBuffer extends MXDartClass {
    constructor(_capacity) {
        super();
        this.capacity = _capacity;
        this.className = '_RingBuffer';
    }
}
export { _RingBuffer };
class ChannelBuffers extends MXDartClass {
    static get kDefaultBufferSize() {
        return 1;
    }
    static get kControlChannelName() {
        return 'dev.flutter/channel-buffers';
    }
}
export { ChannelBuffers };
class Scene extends MXDartClass {
}
export { Scene };
class TransformEngineLayer extends MXDartClass {
}
export { TransformEngineLayer };
class OffsetEngineLayer extends MXDartClass {
}
export { OffsetEngineLayer };
class ClipRectEngineLayer extends MXDartClass {
}
export { ClipRectEngineLayer };
class ClipRRectEngineLayer extends MXDartClass {
}
export { ClipRRectEngineLayer };
class ClipPathEngineLayer extends MXDartClass {
}
export { ClipPathEngineLayer };
class OpacityEngineLayer extends MXDartClass {
}
export { OpacityEngineLayer };
class ColorFilterEngineLayer extends MXDartClass {
}
export { ColorFilterEngineLayer };
class ImageFilterEngineLayer extends MXDartClass {
}
export { ImageFilterEngineLayer };
class BackdropFilterEngineLayer extends MXDartClass {
}
export { BackdropFilterEngineLayer };
class ShaderMaskEngineLayer extends MXDartClass {
}
export { ShaderMaskEngineLayer };
class PhysicalShapeEngineLayer extends MXDartClass {
}
export { PhysicalShapeEngineLayer };
class SceneBuilder extends MXDartClass {
    constructor() {
        super();
        this.className = 'SceneBuilder';
    }
}
export { SceneBuilder };
class EngineLayer extends MXDartClass {
}
export { EngineLayer };
class SceneHost extends MXDartClass {
    constructor(viewHolderToken, viewConnectedCallback, viewDisconnectedCallback, viewStateChangedCallback) {
        super();
        this['viewHolderToken'] = viewHolderToken;
        this['viewConnectedCallback'] = viewConnectedCallback;
        this['viewDisconnectedCallback'] = viewDisconnectedCallback;
        this['viewStateChangedCallback'] = viewStateChangedCallback;
        this.className = 'SceneHost';
    }
}
export { SceneHost };
class OffsetBase extends MXDartClass {
}
export { OffsetBase };
class Offset extends OffsetBase {
    constructor(dx, dy) {
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
    static fromDirection(direction, distance) {
        var jsObj = new Offset();
        jsObj['direction'] = direction;
        jsObj['distance'] = distance;
        jsObj['constructorName'] = 'fromDirection';
        return jsObj;
    }
}
export { Offset };
class Size extends OffsetBase {
    // MX modified end
    constructor(width, height) {
        super();
        // MX modified begin
        this.width = width;
        this.height = height;
        // MX modified end
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
    static copy(source) {
        var jsObj = new Size();
        jsObj['source'] = source;
        jsObj['constructorName'] = 'copy';
        return jsObj;
    }
    static square(dimension) {
        var jsObj = new Size();
        jsObj['dimension'] = dimension;
        jsObj['constructorName'] = 'square';
        return jsObj;
    }
    static fromWidth(width) {
        var jsObj = new Size();
        jsObj['width'] = width;
        jsObj['constructorName'] = 'fromWidth';
        return jsObj;
    }
    static fromHeight(height) {
        var jsObj = new Size();
        jsObj['height'] = height;
        jsObj['constructorName'] = 'fromHeight';
        return jsObj;
    }
    static fromRadius(radius) {
        var jsObj = new Size();
        jsObj['radius'] = radius;
        jsObj['constructorName'] = 'fromRadius';
        return jsObj;
    }
    // MX modified begin
    static fromJson(mapObj) {
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
}
export { Size };
class Rect extends MXDartClass {
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
    static fromLTRB(left, top, right, bottom) {
        var jsObj = new Rect();
        jsObj.left = left;
        jsObj.top = top;
        jsObj.right = right;
        jsObj.bottom = bottom;
        jsObj['constructorName'] = 'fromLTRB';
        return jsObj;
    }
    static fromLTWH(left, top, width, height) {
        var jsObj = new Rect();
        jsObj.left = left;
        jsObj.top = top;
        jsObj['width'] = width;
        jsObj['height'] = height;
        jsObj['constructorName'] = 'fromLTWH';
        return jsObj;
    }
    static fromCircle(namedParameters = {}) {
        var jsObj = new Rect();
        jsObj['center'] = namedParameters.center;
        jsObj['radius'] = namedParameters.radius;
        jsObj['constructorName'] = 'fromCircle';
        return jsObj;
    }
    static fromCenter(namedParameters = {}) {
        var jsObj = new Rect();
        jsObj['center'] = namedParameters.center;
        jsObj['width'] = namedParameters.width;
        jsObj['height'] = namedParameters.height;
        jsObj['constructorName'] = 'fromCenter';
        return jsObj;
    }
    static fromPoints(a, b) {
        var jsObj = new Rect();
        jsObj['a'] = a;
        jsObj['b'] = b;
        jsObj['constructorName'] = 'fromPoints';
        return jsObj;
    }
}
export { Rect };
class Radius extends MXDartClass {
    static get zero() {
        var jsObj = new Radius();
        jsObj['className'] = 'Radius';
        jsObj['constructorName'] = 'zero';
        return jsObj;
    }
    static circular(radius) {
        var jsObj = new Radius();
        jsObj['radius'] = radius;
        jsObj['constructorName'] = 'circular';
        return jsObj;
    }
    static elliptical(x, y) {
        var jsObj = new Radius();
        jsObj.x = x;
        jsObj.y = y;
        jsObj['constructorName'] = 'elliptical';
        return jsObj;
    }
}
export { Radius };
class RRect extends MXDartClass {
    static get zero() {
        var jsObj = new RRect();
        jsObj['className'] = 'RRect';
        jsObj['constructorName'] = 'zero';
        return jsObj;
    }
    static fromLTRBXY(left, top, right, bottom, radiusX, radiusY) {
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
    static fromLTRBR(left, top, right, bottom, radius) {
        var jsObj = new RRect();
        jsObj.left = left;
        jsObj.top = top;
        jsObj.right = right;
        jsObj.bottom = bottom;
        jsObj['radius'] = radius;
        jsObj['constructorName'] = 'fromLTRBR';
        return jsObj;
    }
    static fromRectXY(rect, radiusX, radiusY) {
        var jsObj = new RRect();
        jsObj['rect'] = rect;
        jsObj['radiusX'] = radiusX;
        jsObj['radiusY'] = radiusY;
        jsObj['constructorName'] = 'fromRectXY';
        return jsObj;
    }
    static fromRectAndRadius(rect, radius) {
        var jsObj = new RRect();
        jsObj['rect'] = rect;
        jsObj['radius'] = radius;
        jsObj['constructorName'] = 'fromRectAndRadius';
        return jsObj;
    }
    static fromLTRBAndCorners(left, top, right, bottom, namedParameters = {}) {
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
    static fromRectAndCorners(rect, namedParameters = {}) {
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
    constructor(scos, ssin, tx, ty) {
        super();
        this['scos'] = scos;
        this['ssin'] = ssin;
        this['tx'] = tx;
        this['ty'] = ty;
        this.className = 'RSTransform';
    }
    static fromComponents(namedParameters = {}) {
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
class _HashEnd extends MXDartClass {
}
export { _HashEnd };
class _Jenkins extends MXDartClass {
}
export { _Jenkins };
class _Logger extends MXDartClass {
}
export { _Logger };
class Color extends MXDartClass {
    constructor(value) {
        super();
        this.value = value;
        this.className = 'Color';
    }
    static fromARGB(a, r, g, b) {
        var jsObj = new Color();
        jsObj['a'] = a;
        jsObj['r'] = r;
        jsObj['g'] = g;
        jsObj['b'] = b;
        jsObj['constructorName'] = 'fromARGB';
        return jsObj;
    }
    static fromRGBO(r, g, b, opacity) {
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
var StrokeCap;
(function (StrokeCap) {
    StrokeCap["butt"] = "{ \"_name\": \"StrokeCap.butt\", \"index\": 0 }";
    StrokeCap["round"] = "{ \"_name\": \"StrokeCap.round\", \"index\": 1 }";
    StrokeCap["square"] = "{ \"_name\": \"StrokeCap.square\", \"index\": 2 }";
})(StrokeCap || (StrokeCap = {}));
export { StrokeCap };
var StrokeJoin;
(function (StrokeJoin) {
    StrokeJoin["miter"] = "{ \"_name\": \"StrokeJoin.miter\", \"index\": 0 }";
    StrokeJoin["round"] = "{ \"_name\": \"StrokeJoin.round\", \"index\": 1 }";
    StrokeJoin["bevel"] = "{ \"_name\": \"StrokeJoin.bevel\", \"index\": 2 }";
})(StrokeJoin || (StrokeJoin = {}));
export { StrokeJoin };
var PaintingStyle;
(function (PaintingStyle) {
    PaintingStyle["fill"] = "{ \"_name\": \"PaintingStyle.fill\", \"index\": 0 }";
    PaintingStyle["stroke"] = "{ \"_name\": \"PaintingStyle.stroke\", \"index\": 1 }";
})(PaintingStyle || (PaintingStyle = {}));
export { PaintingStyle };
var BlendMode;
(function (BlendMode) {
    BlendMode["clear"] = "{ \"_name\": \"BlendMode.clear\", \"index\": 0 }";
    BlendMode["src"] = "{ \"_name\": \"BlendMode.src\", \"index\": 1 }";
    BlendMode["dst"] = "{ \"_name\": \"BlendMode.dst\", \"index\": 2 }";
    BlendMode["srcOver"] = "{ \"_name\": \"BlendMode.srcOver\", \"index\": 3 }";
    BlendMode["dstOver"] = "{ \"_name\": \"BlendMode.dstOver\", \"index\": 4 }";
    BlendMode["srcIn"] = "{ \"_name\": \"BlendMode.srcIn\", \"index\": 5 }";
    BlendMode["dstIn"] = "{ \"_name\": \"BlendMode.dstIn\", \"index\": 6 }";
    BlendMode["srcOut"] = "{ \"_name\": \"BlendMode.srcOut\", \"index\": 7 }";
    BlendMode["dstOut"] = "{ \"_name\": \"BlendMode.dstOut\", \"index\": 8 }";
    BlendMode["srcATop"] = "{ \"_name\": \"BlendMode.srcATop\", \"index\": 9 }";
    BlendMode["dstATop"] = "{ \"_name\": \"BlendMode.dstATop\", \"index\": 10 }";
    BlendMode["xor"] = "{ \"_name\": \"BlendMode.xor\", \"index\": 11 }";
    BlendMode["plus"] = "{ \"_name\": \"BlendMode.plus\", \"index\": 12 }";
    BlendMode["modulate"] = "{ \"_name\": \"BlendMode.modulate\", \"index\": 13 }";
    BlendMode["screen"] = "{ \"_name\": \"BlendMode.screen\", \"index\": 14 }";
    BlendMode["overlay"] = "{ \"_name\": \"BlendMode.overlay\", \"index\": 15 }";
    BlendMode["darken"] = "{ \"_name\": \"BlendMode.darken\", \"index\": 16 }";
    BlendMode["lighten"] = "{ \"_name\": \"BlendMode.lighten\", \"index\": 17 }";
    BlendMode["colorDodge"] = "{ \"_name\": \"BlendMode.colorDodge\", \"index\": 18 }";
    BlendMode["colorBurn"] = "{ \"_name\": \"BlendMode.colorBurn\", \"index\": 19 }";
    BlendMode["hardLight"] = "{ \"_name\": \"BlendMode.hardLight\", \"index\": 20 }";
    BlendMode["softLight"] = "{ \"_name\": \"BlendMode.softLight\", \"index\": 21 }";
    BlendMode["difference"] = "{ \"_name\": \"BlendMode.difference\", \"index\": 22 }";
    BlendMode["exclusion"] = "{ \"_name\": \"BlendMode.exclusion\", \"index\": 23 }";
    BlendMode["multiply"] = "{ \"_name\": \"BlendMode.multiply\", \"index\": 24 }";
    BlendMode["hue"] = "{ \"_name\": \"BlendMode.hue\", \"index\": 25 }";
    BlendMode["saturation"] = "{ \"_name\": \"BlendMode.saturation\", \"index\": 26 }";
    BlendMode["color"] = "{ \"_name\": \"BlendMode.color\", \"index\": 27 }";
    BlendMode["luminosity"] = "{ \"_name\": \"BlendMode.luminosity\", \"index\": 28 }";
})(BlendMode || (BlendMode = {}));
export { BlendMode };
var Clip;
(function (Clip) {
    Clip["none"] = "{ \"_name\": \"Clip.none\", \"index\": 0 }";
    Clip["hardEdge"] = "{ \"_name\": \"Clip.hardEdge\", \"index\": 1 }";
    Clip["antiAlias"] = "{ \"_name\": \"Clip.antiAlias\", \"index\": 2 }";
    Clip["antiAliasWithSaveLayer"] = "{ \"_name\": \"Clip.antiAliasWithSaveLayer\", \"index\": 3 }";
})(Clip || (Clip = {}));
export { Clip };
class Paint extends MXDartClass {
    constructor() {
        super();
        this.className = 'Paint';
    }
}
export { Paint };
class Shader extends MXDartClass {
}
export { Shader };
class Gradient extends Shader {
    static linear(from, to, colors, colorStops, tileMode, matrix4) {
        var jsObj = new (class MXGradient extends Gradient {
        })();
        jsObj['from'] = from;
        jsObj['to'] = to;
        jsObj['colors'] = colors;
        jsObj['colorStops'] = colorStops;
        jsObj['tileMode'] = tileMode;
        jsObj['matrix4'] = matrix4;
        jsObj['constructorName'] = 'linear';
        return jsObj;
    }
    static radial(center, radius, colors, colorStops, tileMode, matrix4, focal, focalRadius) {
        var jsObj = new (class MXGradient extends Gradient {
        })();
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
    static sweep(center, colors, colorStops, tileMode, startAngle, endAngle, matrix4) {
        var jsObj = new (class MXGradient extends Gradient {
        })();
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
class Image extends MXDartClass {
}
export { Image };
class ColorFilter extends MXDartClass {
    static mode(color, blendMode) {
        var jsObj = new (class MXColorFilter extends ColorFilter {
        })();
        jsObj['color'] = color;
        jsObj['blendMode'] = blendMode;
        jsObj['constructorName'] = 'mode';
        return jsObj;
    }
    static matrix(matrix) {
        var jsObj = new (class MXColorFilter extends ColorFilter {
        })();
        jsObj['matrix'] = matrix;
        jsObj['constructorName'] = 'matrix';
        return jsObj;
    }
    static linearToSrgbGamma() {
        var jsObj = new (class MXColorFilter extends ColorFilter {
        })();
        jsObj['constructorName'] = 'linearToSrgbGamma';
        return jsObj;
    }
    static srgbToLinearGamma() {
        var jsObj = new (class MXColorFilter extends ColorFilter {
        })();
        jsObj['constructorName'] = 'srgbToLinearGamma';
        return jsObj;
    }
}
export { ColorFilter };
var BlurStyle;
(function (BlurStyle) {
    BlurStyle["normal"] = "{ \"_name\": \"BlurStyle.normal\", \"index\": 0 }";
    BlurStyle["solid"] = "{ \"_name\": \"BlurStyle.solid\", \"index\": 1 }";
    BlurStyle["outer"] = "{ \"_name\": \"BlurStyle.outer\", \"index\": 2 }";
    BlurStyle["inner"] = "{ \"_name\": \"BlurStyle.inner\", \"index\": 3 }";
})(BlurStyle || (BlurStyle = {}));
export { BlurStyle };
class MaskFilter extends MXDartClass {
    static blur(_style, _sigma) {
        var jsObj = new MaskFilter();
        jsObj.style = _style;
        jsObj.sigma = _sigma;
        jsObj['constructorName'] = 'blur';
        return jsObj;
    }
}
export { MaskFilter };
var FilterQuality;
(function (FilterQuality) {
    FilterQuality["none"] = "{ \"_name\": \"FilterQuality.none\", \"index\": 0 }";
    FilterQuality["low"] = "{ \"_name\": \"FilterQuality.low\", \"index\": 1 }";
    FilterQuality["medium"] = "{ \"_name\": \"FilterQuality.medium\", \"index\": 2 }";
    FilterQuality["high"] = "{ \"_name\": \"FilterQuality.high\", \"index\": 3 }";
})(FilterQuality || (FilterQuality = {}));
export { FilterQuality };
class ImageFilter extends MXDartClass {
    static blur(namedParameters = {}) {
        var jsObj = new ImageFilter();
        jsObj['sigmaX'] = namedParameters.sigmaX;
        jsObj['sigmaY'] = namedParameters.sigmaY;
        jsObj['constructorName'] = 'blur';
        return jsObj;
    }
    static matrix(matrix4, namedParameters = {}) {
        var jsObj = new ImageFilter();
        jsObj['matrix4'] = matrix4;
        jsObj['filterQuality'] = namedParameters.filterQuality;
        jsObj['constructorName'] = 'matrix';
        return jsObj;
    }
}
export { ImageFilter };
var ImageByteFormat;
(function (ImageByteFormat) {
    ImageByteFormat["rawRgba"] = "{ \"_name\": \"ImageByteFormat.rawRgba\", \"index\": 0 }";
    ImageByteFormat["rawUnmodified"] = "{ \"_name\": \"ImageByteFormat.rawUnmodified\", \"index\": 1 }";
    ImageByteFormat["png"] = "{ \"_name\": \"ImageByteFormat.png\", \"index\": 2 }";
})(ImageByteFormat || (ImageByteFormat = {}));
export { ImageByteFormat };
var PixelFormat;
(function (PixelFormat) {
    PixelFormat["rgba8888"] = "{ \"_name\": \"PixelFormat.rgba8888\", \"index\": 0 }";
    PixelFormat["bgra8888"] = "{ \"_name\": \"PixelFormat.bgra8888\", \"index\": 1 }";
})(PixelFormat || (PixelFormat = {}));
export { PixelFormat };
class _ImageInfo extends MXDartClass {
    constructor(width, height, format, rowBytes) {
        super();
        this.width = width;
        this.height = height;
        this.format = format;
        this.rowBytes = rowBytes;
        this.className = '_ImageInfo';
    }
}
export { _ImageInfo };
class FrameInfo extends MXDartClass {
}
export { FrameInfo };
class Codec extends MXDartClass {
}
export { Codec };
class Shadow extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.color = namedParameters.color;
        this.offset = namedParameters.offset;
        this.blurRadius = namedParameters.blurRadius;
        this.className = 'Shadow';
    }
    // MX modified begin
    static fromJson(mapObj) {
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
}
export { Shadow };
class ImageShader extends Shader {
    constructor(image, tmx, tmy, matrix4) {
        super();
        this['image'] = image;
        this['tmx'] = tmx;
        this['tmy'] = tmy;
        this['matrix4'] = matrix4;
        this.className = 'ImageShader';
    }
}
export { ImageShader };
class Path extends MXDartClass {
    constructor() {
        super();
        this.className = 'Path';
    }
    static from(source) {
        var jsObj = new (class MXPath extends Path {
        })();
        jsObj['source'] = source;
        jsObj['constructorName'] = 'from';
        return jsObj;
    }
}
export { Path };
class PathMetricIterator extends MXDartClass {
}
export { PathMetricIterator };
class PathMetric extends MXDartClass {
}
export { PathMetric };
class Tangent extends MXDartClass {
    constructor(position, vector) {
        super();
        this.position = position;
        this.vector = vector;
        this.className = 'Tangent';
    }
    static fromAngle(position, angle) {
        var jsObj = new Tangent();
        jsObj.position = position;
        jsObj['angle'] = angle;
        jsObj['constructorName'] = 'fromAngle';
        return jsObj;
    }
}
export { Tangent };
var PointerChange;
(function (PointerChange) {
    PointerChange["cancel"] = "{ \"_name\": \"PointerChange.cancel\", \"index\": 0 }";
    PointerChange["add"] = "{ \"_name\": \"PointerChange.add\", \"index\": 1 }";
    PointerChange["remove"] = "{ \"_name\": \"PointerChange.remove\", \"index\": 2 }";
    PointerChange["hover"] = "{ \"_name\": \"PointerChange.hover\", \"index\": 3 }";
    PointerChange["down"] = "{ \"_name\": \"PointerChange.down\", \"index\": 4 }";
    PointerChange["move"] = "{ \"_name\": \"PointerChange.move\", \"index\": 5 }";
    PointerChange["up"] = "{ \"_name\": \"PointerChange.up\", \"index\": 6 }";
})(PointerChange || (PointerChange = {}));
export { PointerChange };
var PointerDeviceKind;
(function (PointerDeviceKind) {
    PointerDeviceKind["touch"] = "{ \"_name\": \"PointerDeviceKind.touch\", \"index\": 0 }";
    PointerDeviceKind["mouse"] = "{ \"_name\": \"PointerDeviceKind.mouse\", \"index\": 1 }";
    PointerDeviceKind["stylus"] = "{ \"_name\": \"PointerDeviceKind.stylus\", \"index\": 2 }";
    PointerDeviceKind["invertedStylus"] = "{ \"_name\": \"PointerDeviceKind.invertedStylus\", \"index\": 3 }";
    PointerDeviceKind["unknown"] = "{ \"_name\": \"PointerDeviceKind.unknown\", \"index\": 4 }";
})(PointerDeviceKind || (PointerDeviceKind = {}));
export { PointerDeviceKind };
var PointerSignalKind;
(function (PointerSignalKind) {
    PointerSignalKind["none"] = "{ \"_name\": \"PointerSignalKind.none\", \"index\": 0 }";
    PointerSignalKind["scroll"] = "{ \"_name\": \"PointerSignalKind.scroll\", \"index\": 1 }";
    PointerSignalKind["unknown"] = "{ \"_name\": \"PointerSignalKind.unknown\", \"index\": 2 }";
})(PointerSignalKind || (PointerSignalKind = {}));
export { PointerSignalKind };
class PointerData extends MXDartClass {
    constructor(namedParameters = {}) {
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
    constructor(namedParameters = {}) {
        super();
        this.data = namedParameters.data;
        this.className = 'PointerDataPacket';
    }
}
export { PointerDataPacket };
class SemanticsAction extends MXDartClass {
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
        return {
            1.0: SemanticsAction.tap,
            2.0: SemanticsAction.longPress,
            4.0: SemanticsAction.scrollLeft,
            8.0: SemanticsAction.scrollRight,
            16.0: SemanticsAction.scrollUp,
            32.0: SemanticsAction.scrollDown,
            64.0: SemanticsAction.increase,
            128.0: SemanticsAction.decrease,
            256.0: SemanticsAction.showOnScreen,
            512.0: SemanticsAction.moveCursorForwardByCharacter,
            1024.0: SemanticsAction.moveCursorBackwardByCharacter,
            2048.0: SemanticsAction.setSelection,
            4096.0: SemanticsAction.copy,
            8192.0: SemanticsAction.cut,
            16384.0: SemanticsAction.paste,
            32768.0: SemanticsAction.didGainAccessibilityFocus,
            65536.0: SemanticsAction.didLoseAccessibilityFocus,
            131072.0: SemanticsAction.customAction,
            262144.0: SemanticsAction.dismiss,
            524288.0: SemanticsAction.moveCursorForwardByWord,
            1048576.0: SemanticsAction.moveCursorBackwardByWord,
        };
    }
}
export { SemanticsAction };
class SemanticsFlag extends MXDartClass {
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
    static get isLink() {
        var jsObj = new SemanticsFlag();
        jsObj['className'] = 'SemanticsFlag';
        jsObj['constructorName'] = 'isLink';
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
    static get isMultiline() {
        var jsObj = new SemanticsFlag();
        jsObj['className'] = 'SemanticsFlag';
        jsObj['constructorName'] = 'isMultiline';
        return jsObj;
    }
    static get values() {
        return {
            1.0: SemanticsFlag.hasCheckedState,
            2.0: SemanticsFlag.isChecked,
            4.0: SemanticsFlag.isSelected,
            8.0: SemanticsFlag.isButton,
            4194304.0: SemanticsFlag.isLink,
            16.0: SemanticsFlag.isTextField,
            2097152.0: SemanticsFlag.isFocusable,
            32.0: SemanticsFlag.isFocused,
            64.0: SemanticsFlag.hasEnabledState,
            128.0: SemanticsFlag.isEnabled,
            256.0: SemanticsFlag.isInMutuallyExclusiveGroup,
            512.0: SemanticsFlag.isHeader,
            1024.0: SemanticsFlag.isObscured,
            2048.0: SemanticsFlag.scopesRoute,
            4096.0: SemanticsFlag.namesRoute,
            8192.0: SemanticsFlag.isHidden,
            16384.0: SemanticsFlag.isImage,
            32768.0: SemanticsFlag.isLiveRegion,
            65536.0: SemanticsFlag.hasToggledState,
            131072.0: SemanticsFlag.isToggled,
            262144.0: SemanticsFlag.hasImplicitScrolling,
            524288.0: SemanticsFlag.isMultiline,
            1048576.0: SemanticsFlag.isReadOnly,
        };
    }
}
export { SemanticsFlag };
class SemanticsUpdateBuilder extends MXDartClass {
}
export { SemanticsUpdateBuilder };
class SemanticsUpdate extends MXDartClass {
}
export { SemanticsUpdate };
var FontStyle;
(function (FontStyle) {
    FontStyle["normal"] = "{ \"_name\": \"FontStyle.normal\", \"index\": 0 }";
    FontStyle["italic"] = "{ \"_name\": \"FontStyle.italic\", \"index\": 1 }";
})(FontStyle || (FontStyle = {}));
export { FontStyle };
var PlaceholderAlignment;
(function (PlaceholderAlignment) {
    PlaceholderAlignment["baseline"] = "{ \"_name\": \"PlaceholderAlignment.baseline\", \"index\": 0 }";
    PlaceholderAlignment["aboveBaseline"] = "{ \"_name\": \"PlaceholderAlignment.aboveBaseline\", \"index\": 1 }";
    PlaceholderAlignment["belowBaseline"] = "{ \"_name\": \"PlaceholderAlignment.belowBaseline\", \"index\": 2 }";
    PlaceholderAlignment["top"] = "{ \"_name\": \"PlaceholderAlignment.top\", \"index\": 3 }";
    PlaceholderAlignment["bottom"] = "{ \"_name\": \"PlaceholderAlignment.bottom\", \"index\": 4 }";
    PlaceholderAlignment["middle"] = "{ \"_name\": \"PlaceholderAlignment.middle\", \"index\": 5 }";
})(PlaceholderAlignment || (PlaceholderAlignment = {}));
export { PlaceholderAlignment };
class FontWeight extends MXDartClass {
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
        return [
            FontWeight.w100,
            FontWeight.w200,
            FontWeight.w300,
            FontWeight.w400,
            FontWeight.w500,
            FontWeight.w600,
            FontWeight.w700,
            FontWeight.w800,
            FontWeight.w900,
        ];
    }
}
export { FontWeight };
class FontFeature extends MXDartClass {
    constructor(feature, value) {
        super();
        this.feature = feature;
        this.value = value;
        this.className = 'FontFeature';
    }
    static stylisticSet(value) {
        var jsObj = new FontFeature();
        jsObj.value = value;
        jsObj['constructorName'] = 'stylisticSet';
        return jsObj;
    }
    static enable(feature) {
        var jsObj = new FontFeature();
        jsObj.feature = feature;
        jsObj['constructorName'] = 'enable';
        return jsObj;
    }
    static disable(feature) {
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
var TextAlign;
(function (TextAlign) {
    TextAlign["left"] = "{ \"_name\": \"TextAlign.left\", \"index\": 0 }";
    TextAlign["right"] = "{ \"_name\": \"TextAlign.right\", \"index\": 1 }";
    TextAlign["center"] = "{ \"_name\": \"TextAlign.center\", \"index\": 2 }";
    TextAlign["justify"] = "{ \"_name\": \"TextAlign.justify\", \"index\": 3 }";
    TextAlign["start"] = "{ \"_name\": \"TextAlign.start\", \"index\": 4 }";
    TextAlign["end"] = "{ \"_name\": \"TextAlign.end\", \"index\": 5 }";
})(TextAlign || (TextAlign = {}));
export { TextAlign };
var TextBaseline;
(function (TextBaseline) {
    TextBaseline["alphabetic"] = "{ \"_name\": \"TextBaseline.alphabetic\", \"index\": 0 }";
    TextBaseline["ideographic"] = "{ \"_name\": \"TextBaseline.ideographic\", \"index\": 1 }";
})(TextBaseline || (TextBaseline = {}));
export { TextBaseline };
class TextDecoration extends MXDartClass {
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
    static combine(decorations) {
        var jsObj = new TextDecoration();
        jsObj['decorations'] = decorations;
        jsObj['constructorName'] = 'combine';
        return jsObj;
    }
}
export { TextDecoration };
var TextDecorationStyle;
(function (TextDecorationStyle) {
    TextDecorationStyle["solid"] = "{ \"_name\": \"TextDecorationStyle.solid\", \"index\": 0 }";
    TextDecorationStyle["double"] = "{ \"_name\": \"TextDecorationStyle.double\", \"index\": 1 }";
    TextDecorationStyle["dotted"] = "{ \"_name\": \"TextDecorationStyle.dotted\", \"index\": 2 }";
    TextDecorationStyle["dashed"] = "{ \"_name\": \"TextDecorationStyle.dashed\", \"index\": 3 }";
    TextDecorationStyle["wavy"] = "{ \"_name\": \"TextDecorationStyle.wavy\", \"index\": 4 }";
})(TextDecorationStyle || (TextDecorationStyle = {}));
export { TextDecorationStyle };
class TextHeightBehavior extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.applyHeightToFirstAscent = namedParameters.applyHeightToFirstAscent;
        this.applyHeightToLastDescent = namedParameters.applyHeightToLastDescent;
        this.className = 'TextHeightBehavior';
    }
    static fromEncoded(encoded) {
        var jsObj = new TextHeightBehavior();
        jsObj['encoded'] = encoded;
        jsObj['constructorName'] = 'fromEncoded';
        return jsObj;
    }
}
export { TextHeightBehavior };
class TextStyle extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this['color'] = namedParameters.color;
        this['decoration'] = namedParameters.decoration;
        this['decorationColor'] = namedParameters.decorationColor;
        this['decorationStyle'] = namedParameters.decorationStyle;
        this['decorationThickness'] = namedParameters.decorationThickness;
        this['fontWeight'] = namedParameters.fontWeight;
        this['fontStyle'] = namedParameters.fontStyle;
        this['textBaseline'] = namedParameters.textBaseline;
        this['fontFamily'] = namedParameters.fontFamily;
        this['fontFamilyFallback'] = namedParameters.fontFamilyFallback;
        this['fontSize'] = namedParameters.fontSize;
        this['letterSpacing'] = namedParameters.letterSpacing;
        this['wordSpacing'] = namedParameters.wordSpacing;
        this['height'] = namedParameters.height;
        this['locale'] = namedParameters.locale;
        this['background'] = namedParameters.background;
        this['foreground'] = namedParameters.foreground;
        this['shadows'] = namedParameters.shadows;
        this['fontFeatures'] = namedParameters.fontFeatures;
        this.className = 'TextStyle';
    }
}
export { TextStyle };
class ParagraphStyle extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this['textAlign'] = namedParameters.textAlign;
        this['textDirection'] = namedParameters.textDirection;
        this['maxLines'] = namedParameters.maxLines;
        this['fontFamily'] = namedParameters.fontFamily;
        this['fontSize'] = namedParameters.fontSize;
        this['height'] = namedParameters.height;
        this['textHeightBehavior'] = namedParameters.textHeightBehavior;
        this['fontWeight'] = namedParameters.fontWeight;
        this['fontStyle'] = namedParameters.fontStyle;
        this['strutStyle'] = namedParameters.strutStyle;
        this['ellipsis'] = namedParameters.ellipsis;
        this['locale'] = namedParameters.locale;
        this.className = 'ParagraphStyle';
    }
}
export { ParagraphStyle };
class StrutStyle extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this['fontFamily'] = namedParameters.fontFamily;
        this['fontFamilyFallback'] = namedParameters.fontFamilyFallback;
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
var TextDirection;
(function (TextDirection) {
    TextDirection["rtl"] = "{ \"_name\": \"TextDirection.rtl\", \"index\": 0 }";
    TextDirection["ltr"] = "{ \"_name\": \"TextDirection.ltr\", \"index\": 1 }";
})(TextDirection || (TextDirection = {}));
export { TextDirection };
class TextBox extends MXDartClass {
    static fromLTRBD(left, top, right, bottom, direction) {
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
var TextAffinity;
(function (TextAffinity) {
    TextAffinity["upstream"] = "{ \"_name\": \"TextAffinity.upstream\", \"index\": 0 }";
    TextAffinity["downstream"] = "{ \"_name\": \"TextAffinity.downstream\", \"index\": 1 }";
})(TextAffinity || (TextAffinity = {}));
export { TextAffinity };
class TextPosition extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.offset = namedParameters.offset;
        this.affinity = namedParameters.affinity;
        this.className = 'TextPosition';
    }
}
export { TextPosition };
class TextRange extends MXDartClass {
    constructor(namedParameters = {}) {
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
    static collapsed(offset) {
        var jsObj = new TextRange();
        jsObj['offset'] = offset;
        jsObj['constructorName'] = 'collapsed';
        return jsObj;
    }
}
export { TextRange };
class ParagraphConstraints extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.width = namedParameters.width;
        this.className = 'ParagraphConstraints';
    }
}
export { ParagraphConstraints };
var BoxHeightStyle;
(function (BoxHeightStyle) {
    BoxHeightStyle["tight"] = "{ \"_name\": \"BoxHeightStyle.tight\", \"index\": 0 }";
    BoxHeightStyle["max"] = "{ \"_name\": \"BoxHeightStyle.max\", \"index\": 1 }";
    BoxHeightStyle["includeLineSpacingMiddle"] = "{ \"_name\": \"BoxHeightStyle.includeLineSpacingMiddle\", \"index\": 2 }";
    BoxHeightStyle["includeLineSpacingTop"] = "{ \"_name\": \"BoxHeightStyle.includeLineSpacingTop\", \"index\": 3 }";
    BoxHeightStyle["includeLineSpacingBottom"] = "{ \"_name\": \"BoxHeightStyle.includeLineSpacingBottom\", \"index\": 4 }";
    BoxHeightStyle["strut"] = "{ \"_name\": \"BoxHeightStyle.strut\", \"index\": 5 }";
})(BoxHeightStyle || (BoxHeightStyle = {}));
export { BoxHeightStyle };
var BoxWidthStyle;
(function (BoxWidthStyle) {
    BoxWidthStyle["tight"] = "{ \"_name\": \"BoxWidthStyle.tight\", \"index\": 0 }";
    BoxWidthStyle["max"] = "{ \"_name\": \"BoxWidthStyle.max\", \"index\": 1 }";
})(BoxWidthStyle || (BoxWidthStyle = {}));
export { BoxWidthStyle };
class LineMetrics extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this['hardBreak'] = namedParameters.hardBreak;
        this['ascent'] = namedParameters.ascent;
        this['descent'] = namedParameters.descent;
        this['unscaledAscent'] = namedParameters.unscaledAscent;
        this['height'] = namedParameters.height;
        this['width'] = namedParameters.width;
        this['left'] = namedParameters.left;
        this['baseline'] = namedParameters.baseline;
        this['lineNumber'] = namedParameters.lineNumber;
        this.className = 'LineMetrics';
    }
}
export { LineMetrics };
class Paragraph extends MXDartClass {
}
export { Paragraph };
class ParagraphBuilder extends MXDartClass {
    constructor(style) {
        super();
        this['style'] = style;
        this.className = 'ParagraphBuilder';
    }
}
export { ParagraphBuilder };
var TileMode;
(function (TileMode) {
    TileMode["clamp"] = "{ \"_name\": \"TileMode.clamp\", \"index\": 0 }";
    TileMode["repeated"] = "{ \"_name\": \"TileMode.repeated\", \"index\": 1 }";
    TileMode["mirror"] = "{ \"_name\": \"TileMode.mirror\", \"index\": 2 }";
})(TileMode || (TileMode = {}));
export { TileMode };
var AppLifecycleState;
(function (AppLifecycleState) {
    AppLifecycleState["resumed"] = "{ \"_name\": \"AppLifecycleState.resumed\", \"index\": 0 }";
    AppLifecycleState["inactive"] = "{ \"_name\": \"AppLifecycleState.inactive\", \"index\": 1 }";
    AppLifecycleState["paused"] = "{ \"_name\": \"AppLifecycleState.paused\", \"index\": 2 }";
    AppLifecycleState["detached"] = "{ \"_name\": \"AppLifecycleState.detached\", \"index\": 3 }";
})(AppLifecycleState || (AppLifecycleState = {}));
export { AppLifecycleState };
class WindowPadding extends MXDartClass {
    static get zero() {
        var jsObj = new (class MXWindowPadding extends WindowPadding {
        })();
        jsObj['className'] = 'WindowPadding';
        jsObj['constructorName'] = 'zero';
        return jsObj;
    }
}
export { WindowPadding };
class Locale extends MXDartClass {
    constructor(_languageCode, _countryCode) {
        super();
        this.languageCode = _languageCode;
        this.countryCode = _countryCode;
        this.className = 'Locale';
    }
    static fromSubtags(namedParameters = {}) {
        var jsObj = new Locale();
        jsObj.languageCode = namedParameters.languageCode;
        jsObj.scriptCode = namedParameters.scriptCode;
        jsObj.countryCode = namedParameters.countryCode;
        jsObj['constructorName'] = 'fromSubtags';
        return jsObj;
    }
    // MX modified begin
    static fromJson(mapObj) {
        if (mapObj == null || mapObj == undefined) {
            return null;
        }
        let obj = new Locale(mapObj['languageCode'], mapObj['countryCode']);
        return obj;
    }
}
export { Locale };
class Window extends MXDartClass {
}
export { Window };
class AccessibilityFeatures extends MXDartClass {
}
export { AccessibilityFeatures };
var Brightness;
(function (Brightness) {
    Brightness["dark"] = "{ \"_name\": \"Brightness.dark\", \"index\": 0 }";
    Brightness["light"] = "{ \"_name\": \"Brightness.light\", \"index\": 1 }";
})(Brightness || (Brightness = {}));
export { Brightness };
class CallbackHandle extends MXDartClass {
    static fromRawHandle(_handle) {
        var jsObj = new CallbackHandle();
        jsObj.handle = _handle;
        jsObj['constructorName'] = 'fromRawHandle';
        return jsObj;
    }
}
export { CallbackHandle };
class PluginUtilities extends MXDartClass {
}
export { PluginUtilities };
class IsolateNameServer extends MXDartClass {
}
export { IsolateNameServer };
var FramePhase;
(function (FramePhase) {
    FramePhase["buildStart"] = "{ \"_name\": \"FramePhase.buildStart\", \"index\": 0 }";
    FramePhase["buildFinish"] = "{ \"_name\": \"FramePhase.buildFinish\", \"index\": 1 }";
    FramePhase["rasterStart"] = "{ \"_name\": \"FramePhase.rasterStart\", \"index\": 2 }";
    FramePhase["rasterFinish"] = "{ \"_name\": \"FramePhase.rasterFinish\", \"index\": 3 }";
})(FramePhase || (FramePhase = {}));
export { FramePhase };
class FrameTiming extends MXDartClass {
    constructor(timestamps) {
        super();
        this.timestamps = timestamps;
        this.className = 'FrameTiming';
    }
}
export { FrameTiming };
class Comparable extends MXDartClass {
}
export { Comparable };
class DateTime extends MXDartClass {
    constructor(year, month, day, hour, minute, second, millisecond, microsecond) {
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
    static utc(year, month, day, hour, minute, second, millisecond, microsecond) {
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
    static fromMillisecondsSinceEpoch(millisecondsSinceEpoch, namedParameters = {}) {
        var jsObj = new DateTime();
        jsObj['millisecondsSinceEpoch'] = millisecondsSinceEpoch;
        jsObj.isUtc = namedParameters.isUtc;
        jsObj['constructorName'] = 'fromMillisecondsSinceEpoch';
        return jsObj;
    }
    static fromMicrosecondsSinceEpoch(microsecondsSinceEpoch, namedParameters = {}) {
        var jsObj = new DateTime();
        jsObj['microsecondsSinceEpoch'] = microsecondsSinceEpoch;
        jsObj.isUtc = namedParameters.isUtc;
        jsObj['constructorName'] = 'fromMicrosecondsSinceEpoch';
        return jsObj;
    }
}
export { DateTime };
class Duration extends MXDartClass {
    constructor(namedParameters = {}) {
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
class JS extends MXDartClass {
    constructor(name) {
        super();
        this.name = name;
        this.className = 'JS';
    }
}
export { JS };
class _Anonymous extends MXDartClass {
}
export { _Anonymous };
