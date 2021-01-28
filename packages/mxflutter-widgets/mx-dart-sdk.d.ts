import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class PlatformViewRegistry extends MXDartClass {
    registeredFactories: Map<any, any>;
    createdViews: Map<any, any>;
}
export { PlatformViewRegistry };
declare class _KeepToString extends MXDartClass {
}
export { _KeepToString };
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
declare enum VertexMode {
    triangles = "{ \"_name\": \"VertexMode.triangles\", \"index\": 0 }",
    triangleStrip = "{ \"_name\": \"VertexMode.triangleStrip\", \"index\": 1 }",
    triangleFan = "{ \"_name\": \"VertexMode.triangleFan\", \"index\": 2 }"
}
export { VertexMode };
declare class Vertices extends MXDartClass {
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
declare abstract class PictureRecorder extends MXDartClass {
    constructor();
}
export { PictureRecorder };
declare abstract class Canvas extends MXDartClass {
    constructor(recorder?: PictureRecorder, cullRect?: Rect);
}
export { Canvas };
declare abstract class Picture extends MXDartClass {
}
export { Picture };
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
declare abstract class Scene extends MXDartClass {
}
export { Scene };
declare abstract class TransformEngineLayer extends MXDartClass {
}
export { TransformEngineLayer };
declare abstract class OffsetEngineLayer extends MXDartClass {
}
export { OffsetEngineLayer };
declare abstract class ClipRectEngineLayer extends MXDartClass {
}
export { ClipRectEngineLayer };
declare abstract class ClipRRectEngineLayer extends MXDartClass {
}
export { ClipRRectEngineLayer };
declare abstract class ClipPathEngineLayer extends MXDartClass {
}
export { ClipPathEngineLayer };
declare abstract class OpacityEngineLayer extends MXDartClass {
}
export { OpacityEngineLayer };
declare abstract class ColorFilterEngineLayer extends MXDartClass {
}
export { ColorFilterEngineLayer };
declare abstract class ImageFilterEngineLayer extends MXDartClass {
}
export { ImageFilterEngineLayer };
declare abstract class BackdropFilterEngineLayer extends MXDartClass {
}
export { BackdropFilterEngineLayer };
declare abstract class ShaderMaskEngineLayer extends MXDartClass {
}
export { ShaderMaskEngineLayer };
declare abstract class PhysicalShapeEngineLayer extends MXDartClass {
}
export { PhysicalShapeEngineLayer };
declare abstract class SceneBuilder extends MXDartClass {
    constructor();
}
export { SceneBuilder };
declare class EngineLayer extends MXDartClass {
}
export { EngineLayer };
declare class SceneHost extends MXDartClass {
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
    webOnlyUniformRadii: boolean;
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
declare enum Clip {
    none = "{ \"_name\": \"Clip.none\", \"index\": 0 }",
    hardEdge = "{ \"_name\": \"Clip.hardEdge\", \"index\": 1 }",
    antiAlias = "{ \"_name\": \"Clip.antiAlias\", \"index\": 2 }",
    antiAliasWithSaveLayer = "{ \"_name\": \"Clip.antiAliasWithSaveLayer\", \"index\": 3 }"
}
export { Clip };
declare abstract class Paint extends MXDartClass {
    constructor();
}
export { Paint };
declare abstract class Shader extends MXDartClass {
}
export { Shader };
declare abstract class Gradient extends Shader {
    static linear(from?: Offset, to?: Offset, colors?: Array<any>, colorStops?: Array<any>, tileMode?: TileMode, matrix4?: any): {
        className: string;
        mirrorID: string;
    };
    static radial(center?: Offset, radius?: number, colors?: Array<any>, colorStops?: Array<any>, tileMode?: TileMode, matrix4?: any, focal?: Offset, focalRadius?: number): {
        className: string;
        mirrorID: string;
    };
    static sweep(center?: Offset, colors?: Array<any>, colorStops?: Array<any>, tileMode?: TileMode, startAngle?: number, endAngle?: number, matrix4?: any): {
        className: string;
        mirrorID: string;
    };
}
export { Gradient };
declare abstract class Image extends MXDartClass {
}
export { Image };
declare abstract class ColorFilter extends MXDartClass {
    static mode(color?: Color, blendMode?: BlendMode): {
        className: string;
        mirrorID: string;
    };
    static matrix(matrix?: Array<any>): {
        className: string;
        mirrorID: string;
    };
    static linearToSrgbGamma(): {
        className: string;
        mirrorID: string;
    };
    static srgbToLinearGamma(): {
        className: string;
        mirrorID: string;
    };
}
export { ColorFilter };
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
declare enum FilterQuality {
    none = "{ \"_name\": \"FilterQuality.none\", \"index\": 0 }",
    low = "{ \"_name\": \"FilterQuality.low\", \"index\": 1 }",
    medium = "{ \"_name\": \"FilterQuality.medium\", \"index\": 2 }",
    high = "{ \"_name\": \"FilterQuality.high\", \"index\": 3 }"
}
export { FilterQuality };
declare class ImageFilter extends MXDartClass {
    static blur(namedParameters?: {
        sigmaX?: number;
        sigmaY?: number;
    }): ImageFilter;
    static matrix(matrix4?: any, namedParameters?: {
        filterQuality?: FilterQuality;
    }): ImageFilter;
}
export { ImageFilter };
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
declare class _ImageInfo extends MXDartClass {
    width: number;
    height: number;
    format: number;
    rowBytes: number;
    constructor(width?: number, height?: number, format?: number, rowBytes?: number);
}
export { _ImageInfo };
declare abstract class FrameInfo extends MXDartClass {
}
export { FrameInfo };
declare class Codec extends MXDartClass {
}
export { Codec };
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
declare class ImageShader extends Shader {
    constructor(image?: Image, tmx?: TileMode, tmy?: TileMode, matrix4?: any);
}
export { ImageShader };
declare abstract class Path extends MXDartClass {
    constructor();
    static from(source?: Path): {
        className: string;
        mirrorID: string;
    };
}
export { Path };
declare abstract class PathMetricIterator extends MXDartClass {
}
export { PathMetricIterator };
declare abstract class PathMetric extends MXDartClass {
}
export { PathMetric };
declare class Tangent extends MXDartClass {
    position: Offset;
    vector: Offset;
    constructor(position?: Offset, vector?: Offset);
    static fromAngle(position?: Offset, angle?: number): Tangent;
}
export { Tangent };
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
    static get isLink(): SemanticsFlag;
    static get isTextField(): SemanticsFlag;
    static get isReadOnly(): SemanticsFlag;
    static get isFocusable(): SemanticsFlag;
    static get isFocused(): SemanticsFlag;
    static get hasEnabledState(): SemanticsFlag;
    static get isEnabled(): SemanticsFlag;
    static get isInMutuallyExclusiveGroup(): SemanticsFlag;
    static get isHeader(): SemanticsFlag;
    static get isObscured(): SemanticsFlag;
    static get scopesRoute(): SemanticsFlag;
    static get namesRoute(): SemanticsFlag;
    static get isHidden(): SemanticsFlag;
    static get isImage(): SemanticsFlag;
    static get isLiveRegion(): SemanticsFlag;
    static get hasToggledState(): SemanticsFlag;
    static get isToggled(): SemanticsFlag;
    static get hasImplicitScrolling(): SemanticsFlag;
    static get isMultiline(): SemanticsFlag;
    static get values(): {
        1: SemanticsFlag;
        2: SemanticsFlag;
        4: SemanticsFlag;
        8: SemanticsFlag;
        4194304: SemanticsFlag;
        16: SemanticsFlag;
        2097152: SemanticsFlag;
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
    };
}
export { SemanticsFlag };
declare class SemanticsUpdateBuilder extends MXDartClass {
    nodeUpdates: Array<any>;
}
export { SemanticsUpdateBuilder };
declare abstract class SemanticsUpdate extends MXDartClass {
}
export { SemanticsUpdate };
declare enum FontStyle {
    normal = "{ \"_name\": \"FontStyle.normal\", \"index\": 0 }",
    italic = "{ \"_name\": \"FontStyle.italic\", \"index\": 1 }"
}
export { FontStyle };
declare enum PlaceholderAlignment {
    baseline = "{ \"_name\": \"PlaceholderAlignment.baseline\", \"index\": 0 }",
    aboveBaseline = "{ \"_name\": \"PlaceholderAlignment.aboveBaseline\", \"index\": 1 }",
    belowBaseline = "{ \"_name\": \"PlaceholderAlignment.belowBaseline\", \"index\": 2 }",
    top = "{ \"_name\": \"PlaceholderAlignment.top\", \"index\": 3 }",
    bottom = "{ \"_name\": \"PlaceholderAlignment.bottom\", \"index\": 4 }",
    middle = "{ \"_name\": \"PlaceholderAlignment.middle\", \"index\": 5 }"
}
export { PlaceholderAlignment };
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
declare abstract class TextStyle extends MXDartClass {
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
declare abstract class ParagraphStyle extends MXDartClass {
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
declare abstract class StrutStyle extends MXDartClass {
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
declare abstract class LineMetrics extends MXDartClass {
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
declare abstract class Paragraph extends MXDartClass {
}
export { Paragraph };
declare abstract class ParagraphBuilder extends MXDartClass {
    constructor(style?: ParagraphStyle);
}
export { ParagraphBuilder };
declare enum TileMode {
    clamp = "{ \"_name\": \"TileMode.clamp\", \"index\": 0 }",
    repeated = "{ \"_name\": \"TileMode.repeated\", \"index\": 1 }",
    mirror = "{ \"_name\": \"TileMode.mirror\", \"index\": 2 }"
}
export { TileMode };
declare enum AppLifecycleState {
    resumed = "{ \"_name\": \"AppLifecycleState.resumed\", \"index\": 0 }",
    inactive = "{ \"_name\": \"AppLifecycleState.inactive\", \"index\": 1 }",
    paused = "{ \"_name\": \"AppLifecycleState.paused\", \"index\": 2 }",
    detached = "{ \"_name\": \"AppLifecycleState.detached\", \"index\": 3 }"
}
export { AppLifecycleState };
declare abstract class WindowPadding extends MXDartClass {
    static get zero(): {
        className: string;
        mirrorID: string;
    };
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
declare abstract class Window extends MXDartClass {
    textScaleFactor: number;
    alwaysUse24HourFormat: boolean;
    accessibilityFeatures: AccessibilityFeatures;
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
declare class CallbackHandle extends MXDartClass {
    handle: number;
    static fromRawHandle(_handle?: number): CallbackHandle;
}
export { CallbackHandle };
declare class PluginUtilities extends MXDartClass {
}
export { PluginUtilities };
declare class IsolateNameServer extends MXDartClass {
}
export { IsolateNameServer };
declare enum FramePhase {
    buildStart = "{ \"_name\": \"FramePhase.buildStart\", \"index\": 0 }",
    buildFinish = "{ \"_name\": \"FramePhase.buildFinish\", \"index\": 1 }",
    rasterStart = "{ \"_name\": \"FramePhase.rasterStart\", \"index\": 2 }",
    rasterFinish = "{ \"_name\": \"FramePhase.rasterFinish\", \"index\": 3 }"
}
export { FramePhase };
declare class FrameTiming extends MXDartClass {
    timestamps: Array<any>;
    constructor(timestamps?: Array<any>);
}
export { FrameTiming };
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
declare class JS extends MXDartClass {
    name: string;
    constructor(name?: string);
}
export { JS };
declare class _Anonymous extends MXDartClass {
}
export { _Anonymous };
