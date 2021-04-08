import { MXDartClass } from '@mxflutter/mxflutter-base';
declare abstract class Comparable extends MXDartClass {
}
export { Comparable };
declare class DateTime extends MXDartClass {
    value: number;
    isUtc: boolean;
    constructor(year?: number, month?: number, day?: number, hour?: number, minute?: number, second?: number, millisecond?: number, microsecond?: number);
    static get monday(): number;
    static get tuesday(): number;
    static get wednesday(): number;
    static get thursday(): number;
    static get friday(): number;
    static get saturday(): number;
    static get sunday(): number;
    static get daysPerWeek(): number;
    static get january(): number;
    static get february(): number;
    static get march(): number;
    static get april(): number;
    static get may(): number;
    static get june(): number;
    static get july(): number;
    static get august(): number;
    static get september(): number;
    static get october(): number;
    static get november(): number;
    static get december(): number;
    static get monthsPerYear(): number;
    static utc(year?: number, month?: number, day?: number, hour?: number, minute?: number, second?: number, millisecond?: number, microsecond?: number): DateTime;
    static now(): DateTime;
    static fromMillisecondsSinceEpoch(millisecondsSinceEpoch?: number, namedParameters?: {
        isUtc?: boolean;
    }): DateTime;
    static fromMicrosecondsSinceEpoch(microsecondsSinceEpoch?: number, namedParameters?: {
        isUtc?: boolean;
    }): DateTime;
}
export { DateTime };
declare class Duration extends MXDartClass {
    duration: number;
    constructor(namedParameters?: {
        days?: number;
        hours?: number;
        minutes?: number;
        seconds?: number;
        milliseconds?: number;
        microseconds?: number;
    });
    static get microsecondsPerMillisecond(): number;
    static get millisecondsPerSecond(): number;
    static get secondsPerMinute(): number;
    static get minutesPerHour(): number;
    static get hoursPerDay(): number;
    static get microsecondsPerSecond(): number;
    static get microsecondsPerMinute(): number;
    static get microsecondsPerHour(): number;
    static get microsecondsPerDay(): number;
    static get millisecondsPerMinute(): number;
    static get millisecondsPerHour(): number;
    static get millisecondsPerDay(): number;
    static get secondsPerHour(): number;
    static get secondsPerDay(): number;
    static get minutesPerDay(): number;
    static get zero(): Duration;
}
export { Duration };
declare class NativeFieldWrapperClass1 extends MXDartClass {
}
export { NativeFieldWrapperClass1 };
declare class NativeFieldWrapperClass2 extends MXDartClass {
}
export { NativeFieldWrapperClass2 };
declare class NativeFieldWrapperClass3 extends MXDartClass {
}
export { NativeFieldWrapperClass3 };
declare class NativeFieldWrapperClass4 extends MXDartClass {
}
export { NativeFieldWrapperClass4 };
declare class _KeepToString extends MXDartClass {
}
export { _KeepToString };
declare class _StoredMessage extends MXDartClass {
    data: any;
    callback: any;
    constructor(_data?: any, _callback?: any);
}
export { _StoredMessage };
declare class _RingBuffer extends MXDartClass {
    queue: any;
    capacity: number;
    dropItemCallback: any;
    constructor(_capacity?: number);
}
export { _RingBuffer };
declare class ChannelBuffers extends MXDartClass {
    messages: Map<any, any>;
    static get kDefaultBufferSize(): number;
    static get kControlChannelName(): string;
}
export { ChannelBuffers };
declare class Scene extends NativeFieldWrapperClass2 {
}
export { Scene };
declare abstract class _EngineLayerWrapper extends MXDartClass {
    nativeLayer: EngineLayer;
    debugChildren: Array<any>;
    debugWasUsedAsOldLayer: boolean;
}
export { _EngineLayerWrapper };
declare class TransformEngineLayer extends _EngineLayerWrapper {
}
export { TransformEngineLayer };
declare class OffsetEngineLayer extends _EngineLayerWrapper {
}
export { OffsetEngineLayer };
declare class ClipRectEngineLayer extends _EngineLayerWrapper {
}
export { ClipRectEngineLayer };
declare class ClipRRectEngineLayer extends _EngineLayerWrapper {
}
export { ClipRRectEngineLayer };
declare class ClipPathEngineLayer extends _EngineLayerWrapper {
}
export { ClipPathEngineLayer };
declare class OpacityEngineLayer extends _EngineLayerWrapper {
}
export { OpacityEngineLayer };
declare class ColorFilterEngineLayer extends _EngineLayerWrapper {
}
export { ColorFilterEngineLayer };
declare class ImageFilterEngineLayer extends _EngineLayerWrapper {
}
export { ImageFilterEngineLayer };
declare class BackdropFilterEngineLayer extends _EngineLayerWrapper {
}
export { BackdropFilterEngineLayer };
declare class ShaderMaskEngineLayer extends _EngineLayerWrapper {
}
export { ShaderMaskEngineLayer };
declare class PhysicalShapeEngineLayer extends _EngineLayerWrapper {
}
export { PhysicalShapeEngineLayer };
declare class SceneBuilder extends NativeFieldWrapperClass2 {
    usedLayers: Map<any, any>;
    layerStack: Array<any>;
}
export { SceneBuilder };
declare class SceneHost extends NativeFieldWrapperClass2 {
    constructor(viewHolderToken?: any, viewConnectedCallback?: any, viewDisconnectedCallback?: any, viewStateChangedCallback?: any);
}
export { SceneHost };
declare abstract class OffsetBase extends MXDartClass {
    dx: number;
    dy: number;
}
export { OffsetBase };
declare class Offset extends OffsetBase {
    constructor(dx?: number, dy?: number);
    static get zero(): Offset;
    static get infinite(): Offset;
    static fromDirection(direction?: number, distance?: number): Offset;
}
export { Offset };
declare class Size extends OffsetBase {
    width: number;
    height: number;
    constructor(width?: number, height?: number);
    static get zero(): Size;
    static get infinite(): Size;
    static copy(source?: Size): Size;
    static square(dimension?: number): Size;
    static fromWidth(width?: number): Size;
    static fromHeight(height?: number): Size;
    static fromRadius(radius?: number): Size;
    static fromJson(mapObj: any): Size;
}
export { Size };
declare class Rect extends MXDartClass {
    left: number;
    top: number;
    right: number;
    bottom: number;
    static get zero(): Rect;
    static get largest(): Rect;
    static fromLTRB(left?: number, top?: number, right?: number, bottom?: number): Rect;
    static fromLTWH(left?: number, top?: number, width?: number, height?: number): Rect;
    static fromCircle(namedParameters?: {
        center?: Offset;
        radius?: number;
    }): Rect;
    static fromCenter(namedParameters?: {
        center?: Offset;
        width?: number;
        height?: number;
    }): Rect;
    static fromPoints(a?: Offset, b?: Offset): Rect;
}
export { Rect };
declare class Radius extends MXDartClass {
    x: number;
    y: number;
    static get zero(): Radius;
    static circular(radius?: number): Radius;
    static elliptical(x?: number, y?: number): Radius;
}
export { Radius };
declare class RRect extends MXDartClass {
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
    static get zero(): RRect;
    static fromLTRBXY(left?: number, top?: number, right?: number, bottom?: number, radiusX?: number, radiusY?: number): RRect;
    static fromLTRBR(left?: number, top?: number, right?: number, bottom?: number, radius?: Radius): RRect;
    static fromRectXY(rect?: Rect, radiusX?: number, radiusY?: number): RRect;
    static fromRectAndRadius(rect?: Rect, radius?: Radius): RRect;
    static fromLTRBAndCorners(left?: number, top?: number, right?: number, bottom?: number, namedParameters?: {
        topLeft?: Radius;
        topRight?: Radius;
        bottomRight?: Radius;
        bottomLeft?: Radius;
    }): RRect;
    static fromRectAndCorners(rect?: Rect, namedParameters?: {
        topLeft?: Radius;
        topRight?: Radius;
        bottomRight?: Radius;
        bottomLeft?: Radius;
    }): RRect;
}
export { RRect };
declare class RSTransform extends MXDartClass {
    value: any;
    constructor(scos?: number, ssin?: number, tx?: number, ty?: number);
    static fromComponents(namedParameters?: {
        rotation?: number;
        scale?: number;
        anchorX?: number;
        anchorY?: number;
        translateX?: number;
        translateY?: number;
    }): RSTransform;
}
export { RSTransform };
declare class _HashEnd extends MXDartClass {
}
export { _HashEnd };
declare class _Jenkins extends MXDartClass {
}
export { _Jenkins };
declare class IsolateNameServer extends MXDartClass {
}
export { IsolateNameServer };
declare class _Logger extends MXDartClass {
}
export { _Logger };
declare class Color extends MXDartClass {
    value: number;
    constructor(value?: number);
    static fromARGB(a?: number, r?: number, g?: number, b?: number): Color;
    static fromRGBO(r?: number, g?: number, b?: number, opacity?: number): Color;
}
export { Color };
declare enum BlendMode {
    clear = "{ \"_name\": \"BlendMode.clear\", \"index\": 0 }",
    src = "{ \"_name\": \"BlendMode.src\", \"index\": 1 }",
    dst = "{ \"_name\": \"BlendMode.dst\", \"index\": 2 }",
    srcOver = "{ \"_name\": \"BlendMode.srcOver\", \"index\": 3 }",
    dstOver = "{ \"_name\": \"BlendMode.dstOver\", \"index\": 4 }",
    srcIn = "{ \"_name\": \"BlendMode.srcIn\", \"index\": 5 }",
    dstIn = "{ \"_name\": \"BlendMode.dstIn\", \"index\": 6 }",
    srcOut = "{ \"_name\": \"BlendMode.srcOut\", \"index\": 7 }",
    dstOut = "{ \"_name\": \"BlendMode.dstOut\", \"index\": 8 }",
    srcATop = "{ \"_name\": \"BlendMode.srcATop\", \"index\": 9 }",
    dstATop = "{ \"_name\": \"BlendMode.dstATop\", \"index\": 10 }",
    xor = "{ \"_name\": \"BlendMode.xor\", \"index\": 11 }",
    plus = "{ \"_name\": \"BlendMode.plus\", \"index\": 12 }",
    modulate = "{ \"_name\": \"BlendMode.modulate\", \"index\": 13 }",
    screen = "{ \"_name\": \"BlendMode.screen\", \"index\": 14 }",
    overlay = "{ \"_name\": \"BlendMode.overlay\", \"index\": 15 }",
    darken = "{ \"_name\": \"BlendMode.darken\", \"index\": 16 }",
    lighten = "{ \"_name\": \"BlendMode.lighten\", \"index\": 17 }",
    colorDodge = "{ \"_name\": \"BlendMode.colorDodge\", \"index\": 18 }",
    colorBurn = "{ \"_name\": \"BlendMode.colorBurn\", \"index\": 19 }",
    hardLight = "{ \"_name\": \"BlendMode.hardLight\", \"index\": 20 }",
    softLight = "{ \"_name\": \"BlendMode.softLight\", \"index\": 21 }",
    difference = "{ \"_name\": \"BlendMode.difference\", \"index\": 22 }",
    exclusion = "{ \"_name\": \"BlendMode.exclusion\", \"index\": 23 }",
    multiply = "{ \"_name\": \"BlendMode.multiply\", \"index\": 24 }",
    hue = "{ \"_name\": \"BlendMode.hue\", \"index\": 25 }",
    saturation = "{ \"_name\": \"BlendMode.saturation\", \"index\": 26 }",
    color = "{ \"_name\": \"BlendMode.color\", \"index\": 27 }",
    luminosity = "{ \"_name\": \"BlendMode.luminosity\", \"index\": 28 }"
}
export { BlendMode };
declare enum FilterQuality {
    none = "{ \"_name\": \"FilterQuality.none\", \"index\": 0 }",
    low = "{ \"_name\": \"FilterQuality.low\", \"index\": 1 }",
    medium = "{ \"_name\": \"FilterQuality.medium\", \"index\": 2 }",
    high = "{ \"_name\": \"FilterQuality.high\", \"index\": 3 }"
}
export { FilterQuality };
declare enum StrokeCap {
    butt = "{ \"_name\": \"StrokeCap.butt\", \"index\": 0 }",
    round = "{ \"_name\": \"StrokeCap.round\", \"index\": 1 }",
    square = "{ \"_name\": \"StrokeCap.square\", \"index\": 2 }"
}
export { StrokeCap };
declare enum StrokeJoin {
    miter = "{ \"_name\": \"StrokeJoin.miter\", \"index\": 0 }",
    round = "{ \"_name\": \"StrokeJoin.round\", \"index\": 1 }",
    bevel = "{ \"_name\": \"StrokeJoin.bevel\", \"index\": 2 }"
}
export { StrokeJoin };
declare enum PaintingStyle {
    fill = "{ \"_name\": \"PaintingStyle.fill\", \"index\": 0 }",
    stroke = "{ \"_name\": \"PaintingStyle.stroke\", \"index\": 1 }"
}
export { PaintingStyle };
declare enum Clip {
    none = "{ \"_name\": \"Clip.none\", \"index\": 0 }",
    hardEdge = "{ \"_name\": \"Clip.hardEdge\", \"index\": 1 }",
    antiAlias = "{ \"_name\": \"Clip.antiAlias\", \"index\": 2 }",
    antiAliasWithSaveLayer = "{ \"_name\": \"Clip.antiAliasWithSaveLayer\", \"index\": 3 }"
}
export { Clip };
declare class Paint extends MXDartClass {
    data: any;
    objects: Array<any>;
}
export { Paint };
declare enum ImageByteFormat {
    rawRgba = "{ \"_name\": \"ImageByteFormat.rawRgba\", \"index\": 0 }",
    rawUnmodified = "{ \"_name\": \"ImageByteFormat.rawUnmodified\", \"index\": 1 }",
    png = "{ \"_name\": \"ImageByteFormat.png\", \"index\": 2 }"
}
export { ImageByteFormat };
declare enum PixelFormat {
    rgba8888 = "{ \"_name\": \"PixelFormat.rgba8888\", \"index\": 0 }",
    bgra8888 = "{ \"_name\": \"PixelFormat.bgra8888\", \"index\": 1 }"
}
export { PixelFormat };
declare class Image extends NativeFieldWrapperClass2 {
}
export { Image };
declare class FrameInfo extends NativeFieldWrapperClass2 {
}
export { FrameInfo };
declare class Codec extends NativeFieldWrapperClass2 {
}
export { Codec };
declare enum PathFillType {
    nonZero = "{ \"_name\": \"PathFillType.nonZero\", \"index\": 0 }",
    evenOdd = "{ \"_name\": \"PathFillType.evenOdd\", \"index\": 1 }"
}
export { PathFillType };
declare enum PathOperation {
    difference = "{ \"_name\": \"PathOperation.difference\", \"index\": 0 }",
    intersect = "{ \"_name\": \"PathOperation.intersect\", \"index\": 1 }",
    union = "{ \"_name\": \"PathOperation.union\", \"index\": 2 }",
    xor = "{ \"_name\": \"PathOperation.xor\", \"index\": 3 }",
    reverseDifference = "{ \"_name\": \"PathOperation.reverseDifference\", \"index\": 4 }"
}
export { PathOperation };
declare class EngineLayer extends NativeFieldWrapperClass2 {
}
export { EngineLayer };
declare class Path extends NativeFieldWrapperClass2 {
    static from(source?: Path): Path;
}
export { Path };
declare class Tangent extends MXDartClass {
    position: Offset;
    vector: Offset;
    constructor(position?: Offset, vector?: Offset);
    static fromAngle(position?: Offset, angle?: number): Tangent;
}
export { Tangent };
declare class PathMetricIterator extends MXDartClass {
    pathMetric: PathMetric;
    pathMeasure: _PathMeasure;
}
export { PathMetricIterator };
declare class PathMetric extends MXDartClass {
    length: number;
    isClosed: boolean;
    contourIndex: number;
    measure: _PathMeasure;
}
export { PathMetric };
declare class _PathMeasure extends NativeFieldWrapperClass2 {
    currentContourIndex: number;
    constructor(path?: Path, forceClosed?: boolean);
}
export { _PathMeasure };
declare enum BlurStyle {
    normal = "{ \"_name\": \"BlurStyle.normal\", \"index\": 0 }",
    solid = "{ \"_name\": \"BlurStyle.solid\", \"index\": 1 }",
    outer = "{ \"_name\": \"BlurStyle.outer\", \"index\": 2 }",
    inner = "{ \"_name\": \"BlurStyle.inner\", \"index\": 3 }"
}
export { BlurStyle };
declare class MaskFilter extends MXDartClass {
    style: BlurStyle;
    sigma: number;
    static blur(_style?: BlurStyle, _sigma?: number): MaskFilter;
}
export { MaskFilter };
declare class ColorFilter extends MXDartClass {
    color: Color;
    blendMode: BlendMode;
    matrix: Array<any>;
    type: number;
    static mode(color?: Color, blendMode?: BlendMode): ColorFilter;
    static matrix(matrix?: Array<any>): ColorFilter;
    static linearToSrgbGamma(): ColorFilter;
    static srgbToLinearGamma(): ColorFilter;
}
export { ColorFilter };
declare class _ColorFilter extends NativeFieldWrapperClass2 {
    creator: ColorFilter;
    static mode(creator?: ColorFilter): _ColorFilter;
    static matrix(creator?: ColorFilter): _ColorFilter;
    static linearToSrgbGamma(creator?: ColorFilter): _ColorFilter;
    static srgbToLinearGamma(creator?: ColorFilter): _ColorFilter;
}
export { _ColorFilter };
declare class ImageFilter extends MXDartClass {
    data: any;
    filterQuality: FilterQuality;
    type: number;
    nativeFilter: _ImageFilter;
    static blur(namedParameters?: {
        sigmaX?: number;
        sigmaY?: number;
    }): ImageFilter;
    static matrix(matrix4?: any, namedParameters?: {
        filterQuality?: FilterQuality;
    }): ImageFilter;
}
export { ImageFilter };
declare class _ImageFilter extends NativeFieldWrapperClass2 {
    creator: ImageFilter;
    static blur(creator?: ImageFilter): _ImageFilter;
    static matrix(creator?: ImageFilter): _ImageFilter;
}
export { _ImageFilter };
declare class Shader extends NativeFieldWrapperClass2 {
}
export { Shader };
declare enum TileMode {
    clamp = "{ \"_name\": \"TileMode.clamp\", \"index\": 0 }",
    repeated = "{ \"_name\": \"TileMode.repeated\", \"index\": 1 }",
    mirror = "{ \"_name\": \"TileMode.mirror\", \"index\": 2 }"
}
export { TileMode };
declare class Gradient extends Shader {
    static linear(from?: Offset, to?: Offset, colors?: Array<any>, colorStops?: Array<any>, tileMode?: TileMode, matrix4?: any): Gradient;
    static radial(center?: Offset, radius?: number, colors?: Array<any>, colorStops?: Array<any>, tileMode?: TileMode, matrix4?: any, focal?: Offset, focalRadius?: number): Gradient;
    static sweep(center?: Offset, colors?: Array<any>, colorStops?: Array<any>, tileMode?: TileMode, startAngle?: number, endAngle?: number, matrix4?: any): Gradient;
}
export { Gradient };
declare class ImageShader extends Shader {
    constructor(image?: Image, tmx?: TileMode, tmy?: TileMode, matrix4?: any);
}
export { ImageShader };
declare enum VertexMode {
    triangles = "{ \"_name\": \"VertexMode.triangles\", \"index\": 0 }",
    triangleStrip = "{ \"_name\": \"VertexMode.triangleStrip\", \"index\": 1 }",
    triangleFan = "{ \"_name\": \"VertexMode.triangleFan\", \"index\": 2 }"
}
export { VertexMode };
declare class Vertices extends NativeFieldWrapperClass2 {
    constructor(mode?: VertexMode, positions?: Array<any>, namedParameters?: {
        textureCoordinates?: Array<any>;
        colors?: Array<any>;
        indices?: Array<any>;
    });
    static raw(mode?: VertexMode, positions?: any, namedParameters?: {
        textureCoordinates?: any;
        colors?: any;
        indices?: any;
    }): Vertices;
}
export { Vertices };
declare enum PointMode {
    points = "{ \"_name\": \"PointMode.points\", \"index\": 0 }",
    lines = "{ \"_name\": \"PointMode.lines\", \"index\": 1 }",
    polygon = "{ \"_name\": \"PointMode.polygon\", \"index\": 2 }"
}
export { PointMode };
declare enum ClipOp {
    difference = "{ \"_name\": \"ClipOp.difference\", \"index\": 0 }",
    intersect = "{ \"_name\": \"ClipOp.intersect\", \"index\": 1 }"
}
export { ClipOp };
declare class Canvas extends NativeFieldWrapperClass2 {
    recorder: PictureRecorder;
    constructor(recorder?: PictureRecorder, cullRect?: Rect);
}
export { Canvas };
declare class Picture extends NativeFieldWrapperClass2 {
}
export { Picture };
declare class PictureRecorder extends NativeFieldWrapperClass2 {
    canvas: Canvas;
}
export { PictureRecorder };
declare class Shadow extends MXDartClass {
    color: Color;
    offset: Offset;
    blurRadius: number;
    constructor(namedParameters?: {
        color?: Color;
        offset?: Offset;
        blurRadius?: number;
    });
    static fromJson(mapObj: any): Shadow;
}
export { Shadow };
declare class ImmutableBuffer extends NativeFieldWrapperClass2 {
    length: number;
}
export { ImmutableBuffer };
declare class ImageDescriptor extends NativeFieldWrapperClass2 {
    width: number;
    height: number;
    bytesPerPixel: number;
    static raw(buffer?: ImmutableBuffer, namedParameters?: {
        width?: number;
        height?: number;
        rowBytes?: number;
        pixelFormat?: PixelFormat;
    }): ImageDescriptor;
}
export { ImageDescriptor };
declare class CallbackHandle extends MXDartClass {
    handle: number;
    static fromRawHandle(_handle?: number): CallbackHandle;
}
export { CallbackHandle };
declare class PluginUtilities extends MXDartClass {
}
export { PluginUtilities };
declare enum PointerChange {
    cancel = "{ \"_name\": \"PointerChange.cancel\", \"index\": 0 }",
    add = "{ \"_name\": \"PointerChange.add\", \"index\": 1 }",
    remove = "{ \"_name\": \"PointerChange.remove\", \"index\": 2 }",
    hover = "{ \"_name\": \"PointerChange.hover\", \"index\": 3 }",
    down = "{ \"_name\": \"PointerChange.down\", \"index\": 4 }",
    move = "{ \"_name\": \"PointerChange.move\", \"index\": 5 }",
    up = "{ \"_name\": \"PointerChange.up\", \"index\": 6 }"
}
export { PointerChange };
declare enum PointerDeviceKind {
    touch = "{ \"_name\": \"PointerDeviceKind.touch\", \"index\": 0 }",
    mouse = "{ \"_name\": \"PointerDeviceKind.mouse\", \"index\": 1 }",
    stylus = "{ \"_name\": \"PointerDeviceKind.stylus\", \"index\": 2 }",
    invertedStylus = "{ \"_name\": \"PointerDeviceKind.invertedStylus\", \"index\": 3 }",
    unknown = "{ \"_name\": \"PointerDeviceKind.unknown\", \"index\": 4 }"
}
export { PointerDeviceKind };
declare enum PointerSignalKind {
    none = "{ \"_name\": \"PointerSignalKind.none\", \"index\": 0 }",
    scroll = "{ \"_name\": \"PointerSignalKind.scroll\", \"index\": 1 }",
    unknown = "{ \"_name\": \"PointerSignalKind.unknown\", \"index\": 2 }"
}
export { PointerSignalKind };
declare class PointerData extends MXDartClass {
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
    constructor(namedParameters?: {
        embedderId?: number;
        timeStamp?: Duration;
        change?: PointerChange;
        kind?: PointerDeviceKind;
        signalKind?: PointerSignalKind;
        device?: number;
        pointerIdentifier?: number;
        physicalX?: number;
        physicalY?: number;
        physicalDeltaX?: number;
        physicalDeltaY?: number;
        buttons?: number;
        obscured?: boolean;
        synthesized?: boolean;
        pressure?: number;
        pressureMin?: number;
        pressureMax?: number;
        distance?: number;
        distanceMax?: number;
        size?: number;
        radiusMajor?: number;
        radiusMinor?: number;
        radiusMin?: number;
        radiusMax?: number;
        orientation?: number;
        tilt?: number;
        platformData?: number;
        scrollDeltaX?: number;
        scrollDeltaY?: number;
    });
}
export { PointerData };
declare class PointerDataPacket extends MXDartClass {
    data: Array<any>;
    constructor(namedParameters?: {
        data?: Array<any>;
    });
}
export { PointerDataPacket };
declare class SemanticsAction extends MXDartClass {
    index: number;
    static get tap(): SemanticsAction;
    static get longPress(): SemanticsAction;
    static get scrollLeft(): SemanticsAction;
    static get scrollRight(): SemanticsAction;
    static get scrollUp(): SemanticsAction;
    static get scrollDown(): SemanticsAction;
    static get increase(): SemanticsAction;
    static get decrease(): SemanticsAction;
    static get showOnScreen(): SemanticsAction;
    static get moveCursorForwardByCharacter(): SemanticsAction;
    static get moveCursorBackwardByCharacter(): SemanticsAction;
    static get setSelection(): SemanticsAction;
    static get copy(): SemanticsAction;
    static get cut(): SemanticsAction;
    static get paste(): SemanticsAction;
    static get didGainAccessibilityFocus(): SemanticsAction;
    static get didLoseAccessibilityFocus(): SemanticsAction;
    static get customAction(): SemanticsAction;
    static get dismiss(): SemanticsAction;
    static get moveCursorForwardByWord(): SemanticsAction;
    static get moveCursorBackwardByWord(): SemanticsAction;
    static get values(): {
        1: SemanticsAction;
        2: SemanticsAction;
        4: SemanticsAction;
        8: SemanticsAction;
        16: SemanticsAction;
        32: SemanticsAction;
        64: SemanticsAction;
        128: SemanticsAction;
        256: SemanticsAction;
        512: SemanticsAction;
        1024: SemanticsAction;
        2048: SemanticsAction;
        4096: SemanticsAction;
        8192: SemanticsAction;
        16384: SemanticsAction;
        32768: SemanticsAction;
        65536: SemanticsAction;
        131072: SemanticsAction;
        262144: SemanticsAction;
        524288: SemanticsAction;
        1048576: SemanticsAction;
    };
}
export { SemanticsAction };
declare class SemanticsFlag extends MXDartClass {
    index: number;
    static get hasCheckedState(): SemanticsFlag;
    static get isChecked(): SemanticsFlag;
    static get isSelected(): SemanticsFlag;
    static get isButton(): SemanticsFlag;
    static get isTextField(): SemanticsFlag;
    static get isReadOnly(): SemanticsFlag;
    static get isLink(): SemanticsFlag;
    static get isFocusable(): SemanticsFlag;
    static get isFocused(): SemanticsFlag;
    static get hasEnabledState(): SemanticsFlag;
    static get isEnabled(): SemanticsFlag;
    static get isInMutuallyExclusiveGroup(): SemanticsFlag;
    static get isHeader(): SemanticsFlag;
    static get isObscured(): SemanticsFlag;
    static get isMultiline(): SemanticsFlag;
    static get scopesRoute(): SemanticsFlag;
    static get namesRoute(): SemanticsFlag;
    static get isHidden(): SemanticsFlag;
    static get isImage(): SemanticsFlag;
    static get isLiveRegion(): SemanticsFlag;
    static get hasToggledState(): SemanticsFlag;
    static get isToggled(): SemanticsFlag;
    static get hasImplicitScrolling(): SemanticsFlag;
    static get values(): {
        1: SemanticsFlag;
        2: SemanticsFlag;
        4: SemanticsFlag;
        8: SemanticsFlag;
        16: SemanticsFlag;
        32: SemanticsFlag;
        64: SemanticsFlag;
        128: SemanticsFlag;
        256: SemanticsFlag;
        512: SemanticsFlag;
        1024: SemanticsFlag;
        2048: SemanticsFlag;
        4096: SemanticsFlag;
        8192: SemanticsFlag;
        16384: SemanticsFlag;
        32768: SemanticsFlag;
        65536: SemanticsFlag;
        131072: SemanticsFlag;
        262144: SemanticsFlag;
        524288: SemanticsFlag;
        1048576: SemanticsFlag;
        2097152: SemanticsFlag;
        4194304: SemanticsFlag;
    };
}
export { SemanticsFlag };
declare class SemanticsUpdateBuilder extends NativeFieldWrapperClass2 {
}
export { SemanticsUpdateBuilder };
declare class SemanticsUpdate extends NativeFieldWrapperClass2 {
}
export { SemanticsUpdate };
declare enum FontStyle {
    normal = "{ \"_name\": \"FontStyle.normal\", \"index\": 0 }",
    italic = "{ \"_name\": \"FontStyle.italic\", \"index\": 1 }"
}
export { FontStyle };
declare class FontWeight extends MXDartClass {
    index: number;
    static get w100(): FontWeight;
    static get w200(): FontWeight;
    static get w300(): FontWeight;
    static get w400(): FontWeight;
    static get w500(): FontWeight;
    static get w600(): FontWeight;
    static get w700(): FontWeight;
    static get w800(): FontWeight;
    static get w900(): FontWeight;
    static get normal(): FontWeight;
    static get bold(): FontWeight;
    static get values(): FontWeight[];
}
export { FontWeight };
declare class FontFeature extends MXDartClass {
    feature: string;
    value: number;
    constructor(feature?: string, value?: number);
    static stylisticSet(value?: number): FontFeature;
    static enable(feature?: string): FontFeature;
    static disable(feature?: string): FontFeature;
    static randomize(): FontFeature;
    static slashedZero(): FontFeature;
    static oldstyleFigures(): FontFeature;
    static proportionalFigures(): FontFeature;
    static tabularFigures(): FontFeature;
}
export { FontFeature };
declare enum TextAlign {
    left = "{ \"_name\": \"TextAlign.left\", \"index\": 0 }",
    right = "{ \"_name\": \"TextAlign.right\", \"index\": 1 }",
    center = "{ \"_name\": \"TextAlign.center\", \"index\": 2 }",
    justify = "{ \"_name\": \"TextAlign.justify\", \"index\": 3 }",
    start = "{ \"_name\": \"TextAlign.start\", \"index\": 4 }",
    end = "{ \"_name\": \"TextAlign.end\", \"index\": 5 }"
}
export { TextAlign };
declare enum TextBaseline {
    alphabetic = "{ \"_name\": \"TextBaseline.alphabetic\", \"index\": 0 }",
    ideographic = "{ \"_name\": \"TextBaseline.ideographic\", \"index\": 1 }"
}
export { TextBaseline };
declare class TextDecoration extends MXDartClass {
    mask: number;
    static get none(): TextDecoration;
    static get underline(): TextDecoration;
    static get overline(): TextDecoration;
    static get lineThrough(): TextDecoration;
    static combine(decorations?: Array<any>): TextDecoration;
}
export { TextDecoration };
declare enum TextDecorationStyle {
    solid = "{ \"_name\": \"TextDecorationStyle.solid\", \"index\": 0 }",
    double = "{ \"_name\": \"TextDecorationStyle.double\", \"index\": 1 }",
    dotted = "{ \"_name\": \"TextDecorationStyle.dotted\", \"index\": 2 }",
    dashed = "{ \"_name\": \"TextDecorationStyle.dashed\", \"index\": 3 }",
    wavy = "{ \"_name\": \"TextDecorationStyle.wavy\", \"index\": 4 }"
}
export { TextDecorationStyle };
declare class TextHeightBehavior extends MXDartClass {
    applyHeightToFirstAscent: boolean;
    applyHeightToLastDescent: boolean;
    constructor(namedParameters?: {
        applyHeightToFirstAscent?: boolean;
        applyHeightToLastDescent?: boolean;
    });
    static fromEncoded(encoded?: number): TextHeightBehavior;
}
export { TextHeightBehavior };
declare class TextStyle extends MXDartClass {
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
    constructor(namedParameters?: {
        color?: Color;
        decoration?: TextDecoration;
        decorationColor?: Color;
        decorationStyle?: TextDecorationStyle;
        decorationThickness?: number;
        fontWeight?: FontWeight;
        fontStyle?: FontStyle;
        textBaseline?: TextBaseline;
        fontFamily?: string;
        fontFamilyFallback?: Array<any>;
        fontSize?: number;
        letterSpacing?: number;
        wordSpacing?: number;
        height?: number;
        locale?: Locale;
        background?: Paint;
        foreground?: Paint;
        shadows?: Array<any>;
        fontFeatures?: Array<any>;
    });
}
export { TextStyle };
declare class ParagraphStyle extends MXDartClass {
    encoded: any;
    fontFamily: string;
    fontSize: number;
    height: number;
    strutStyle: StrutStyle;
    ellipsis: string;
    locale: Locale;
    constructor(namedParameters?: {
        textAlign?: TextAlign;
        textDirection?: TextDirection;
        maxLines?: number;
        fontFamily?: string;
        fontSize?: number;
        height?: number;
        textHeightBehavior?: TextHeightBehavior;
        fontWeight?: FontWeight;
        fontStyle?: FontStyle;
        strutStyle?: StrutStyle;
        ellipsis?: string;
        locale?: Locale;
    });
}
export { ParagraphStyle };
declare class StrutStyle extends MXDartClass {
    encoded: any;
    fontFamily: string;
    fontFamilyFallback: Array<any>;
    constructor(namedParameters?: {
        fontFamily?: string;
        fontFamilyFallback?: Array<any>;
        fontSize?: number;
        height?: number;
        leading?: number;
        fontWeight?: FontWeight;
        fontStyle?: FontStyle;
        forceStrutHeight?: boolean;
    });
}
export { StrutStyle };
declare enum TextDirection {
    rtl = "{ \"_name\": \"TextDirection.rtl\", \"index\": 0 }",
    ltr = "{ \"_name\": \"TextDirection.ltr\", \"index\": 1 }"
}
export { TextDirection };
declare class TextBox extends MXDartClass {
    left: number;
    top: number;
    right: number;
    bottom: number;
    direction: TextDirection;
    static fromLTRBD(left?: number, top?: number, right?: number, bottom?: number, direction?: TextDirection): TextBox;
}
export { TextBox };
declare enum TextAffinity {
    upstream = "{ \"_name\": \"TextAffinity.upstream\", \"index\": 0 }",
    downstream = "{ \"_name\": \"TextAffinity.downstream\", \"index\": 1 }"
}
export { TextAffinity };
declare class TextPosition extends MXDartClass {
    offset: number;
    affinity: TextAffinity;
    constructor(namedParameters?: {
        offset?: number;
        affinity?: TextAffinity;
    });
}
export { TextPosition };
declare class TextRange extends MXDartClass {
    start: number;
    end: number;
    constructor(namedParameters?: {
        start?: number;
        end?: number;
    });
    static get empty(): TextRange;
    static collapsed(offset?: number): TextRange;
}
export { TextRange };
declare class ParagraphConstraints extends MXDartClass {
    width: number;
    constructor(namedParameters?: {
        width?: number;
    });
}
export { ParagraphConstraints };
declare enum BoxHeightStyle {
    tight = "{ \"_name\": \"BoxHeightStyle.tight\", \"index\": 0 }",
    max = "{ \"_name\": \"BoxHeightStyle.max\", \"index\": 1 }",
    includeLineSpacingMiddle = "{ \"_name\": \"BoxHeightStyle.includeLineSpacingMiddle\", \"index\": 2 }",
    includeLineSpacingTop = "{ \"_name\": \"BoxHeightStyle.includeLineSpacingTop\", \"index\": 3 }",
    includeLineSpacingBottom = "{ \"_name\": \"BoxHeightStyle.includeLineSpacingBottom\", \"index\": 4 }",
    strut = "{ \"_name\": \"BoxHeightStyle.strut\", \"index\": 5 }"
}
export { BoxHeightStyle };
declare enum BoxWidthStyle {
    tight = "{ \"_name\": \"BoxWidthStyle.tight\", \"index\": 0 }",
    max = "{ \"_name\": \"BoxWidthStyle.max\", \"index\": 1 }"
}
export { BoxWidthStyle };
declare enum PlaceholderAlignment {
    baseline = "{ \"_name\": \"PlaceholderAlignment.baseline\", \"index\": 0 }",
    aboveBaseline = "{ \"_name\": \"PlaceholderAlignment.aboveBaseline\", \"index\": 1 }",
    belowBaseline = "{ \"_name\": \"PlaceholderAlignment.belowBaseline\", \"index\": 2 }",
    top = "{ \"_name\": \"PlaceholderAlignment.top\", \"index\": 3 }",
    bottom = "{ \"_name\": \"PlaceholderAlignment.bottom\", \"index\": 4 }",
    middle = "{ \"_name\": \"PlaceholderAlignment.middle\", \"index\": 5 }"
}
export { PlaceholderAlignment };
declare class LineMetrics extends MXDartClass {
    hardBreak: boolean;
    ascent: number;
    descent: number;
    unscaledAscent: number;
    height: number;
    width: number;
    left: number;
    baseline: number;
    lineNumber: number;
    constructor(namedParameters?: {
        hardBreak?: boolean;
        ascent?: number;
        descent?: number;
        unscaledAscent?: number;
        height?: number;
        width?: number;
        left?: number;
        baseline?: number;
        lineNumber?: number;
    });
}
export { LineMetrics };
declare class Paragraph extends NativeFieldWrapperClass2 {
}
export { Paragraph };
declare class ParagraphBuilder extends NativeFieldWrapperClass2 {
    placeholderCount: number;
    placeholderScales: Array<any>;
    constructor(style?: ParagraphStyle);
}
export { ParagraphBuilder };
declare enum FramePhase {
    vsyncStart = "{ \"_name\": \"FramePhase.vsyncStart\", \"index\": 0 }",
    buildStart = "{ \"_name\": \"FramePhase.buildStart\", \"index\": 1 }",
    buildFinish = "{ \"_name\": \"FramePhase.buildFinish\", \"index\": 2 }",
    rasterStart = "{ \"_name\": \"FramePhase.rasterStart\", \"index\": 3 }",
    rasterFinish = "{ \"_name\": \"FramePhase.rasterFinish\", \"index\": 4 }"
}
export { FramePhase };
declare class FrameTiming extends MXDartClass {
    timestamps: Array<any>;
    constructor(namedParameters?: {
        vsyncStart?: number;
        buildStart?: number;
        buildFinish?: number;
        rasterStart?: number;
        rasterFinish?: number;
    });
}
export { FrameTiming };
declare enum AppLifecycleState {
    resumed = "{ \"_name\": \"AppLifecycleState.resumed\", \"index\": 0 }",
    inactive = "{ \"_name\": \"AppLifecycleState.inactive\", \"index\": 1 }",
    paused = "{ \"_name\": \"AppLifecycleState.paused\", \"index\": 2 }",
    detached = "{ \"_name\": \"AppLifecycleState.detached\", \"index\": 3 }"
}
export { AppLifecycleState };
declare class WindowPadding extends MXDartClass {
    left: number;
    top: number;
    right: number;
    bottom: number;
    static get zero(): WindowPadding;
}
export { WindowPadding };
declare class Locale extends MXDartClass {
    languageCode: string;
    scriptCode: string;
    countryCode: string;
    constructor(_languageCode?: string, _countryCode?: string);
    static fromSubtags(namedParameters?: {
        languageCode?: string;
        scriptCode?: string;
        countryCode?: string;
    }): Locale;
    static fromJson(mapObj: any): Locale;
}
export { Locale };
declare class Window extends MXDartClass {
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
declare class AccessibilityFeatures extends MXDartClass {
    index: number;
}
export { AccessibilityFeatures };
declare enum Brightness {
    dark = "{ \"_name\": \"Brightness.dark\", \"index\": 0 }",
    light = "{ \"_name\": \"Brightness.light\", \"index\": 1 }"
}
export { Brightness };
