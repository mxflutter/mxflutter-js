import { Matrix4 } from '../../../vector-math-64';
import { AbstractNode } from '../foundation/node';
import { Offset, EngineLayer, Rect, Picture, FilterQuality, Clip, RRect, Path, ColorFilter, ImageFilter, Shader, BlendMode, Color, Size } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class AnnotationEntry extends MXDartClass {
    annotation: any;
    localPosition: Offset;
    constructor(namedParameters?: {
        annotation?: any;
        localPosition?: Offset;
    });
}
export { AnnotationEntry };
declare class AnnotationResult extends MXDartClass {
    entries: Array<any>;
}
export { AnnotationResult };
declare abstract class Layer extends AbstractNode {
    needsAddToScene: boolean;
    engineLayer: EngineLayer;
    nextSibling: Layer;
    previousSibling: Layer;
    debugCreator: any;
}
export { Layer };
declare class PictureLayer extends Layer {
    canvasBounds: Rect;
    picture: Picture;
    isComplexHint: boolean;
    willChangeHint: boolean;
    constructor(canvasBounds?: Rect);
}
export { PictureLayer };
declare class TextureLayer extends Layer {
    rect: Rect;
    textureId: number;
    freeze: boolean;
    filterQuality: FilterQuality;
    constructor(namedParameters?: {
        rect?: Rect;
        textureId?: number;
        freeze?: boolean;
        filterQuality?: FilterQuality;
    });
}
export { TextureLayer };
declare class PlatformViewLayer extends Layer {
    rect: Rect;
    viewId: number;
    constructor(namedParameters?: {
        rect?: Rect;
        viewId?: number;
    });
}
export { PlatformViewLayer };
declare class PerformanceOverlayLayer extends Layer {
    overlayRect: Rect;
    optionsMask: number;
    rasterizerThreshold: number;
    checkerboardRasterCacheImages: boolean;
    checkerboardOffscreenLayers: boolean;
    constructor(namedParameters?: {
        overlayRect?: Rect;
        optionsMask?: number;
        rasterizerThreshold?: number;
        checkerboardRasterCacheImages?: boolean;
        checkerboardOffscreenLayers?: boolean;
    });
}
export { PerformanceOverlayLayer };
declare class ContainerLayer extends Layer {
    firstChild: Layer;
    lastChild: Layer;
}
export { ContainerLayer };
declare class OffsetLayer extends ContainerLayer {
    offset: Offset;
    constructor(namedParameters?: {
        offset?: Offset;
    });
}
export { OffsetLayer };
declare class ClipRectLayer extends ContainerLayer {
    clipRect: Rect;
    clipBehavior: Clip;
    constructor(namedParameters?: {
        clipRect?: Rect;
        clipBehavior?: Clip;
    });
}
export { ClipRectLayer };
declare class ClipRRectLayer extends ContainerLayer {
    clipRRect: RRect;
    clipBehavior: Clip;
    constructor(namedParameters?: {
        clipRRect?: RRect;
        clipBehavior?: Clip;
    });
}
export { ClipRRectLayer };
declare class ClipPathLayer extends ContainerLayer {
    clipPath: Path;
    clipBehavior: Clip;
    constructor(namedParameters?: {
        clipPath?: Path;
        clipBehavior?: Clip;
    });
}
export { ClipPathLayer };
declare class ColorFilterLayer extends ContainerLayer {
    colorFilter: ColorFilter;
    constructor(namedParameters?: {
        colorFilter?: ColorFilter;
    });
}
export { ColorFilterLayer };
declare class ImageFilterLayer extends ContainerLayer {
    imageFilter: ImageFilter;
    constructor(namedParameters?: {
        imageFilter?: ImageFilter;
    });
}
export { ImageFilterLayer };
declare class TransformLayer extends OffsetLayer {
    transform: Matrix4;
    lastEffectiveTransform: Matrix4;
    invertedTransform: Matrix4;
    inverseDirty: boolean;
    constructor(namedParameters?: {
        transform?: Matrix4;
        offset?: Offset;
    });
}
export { TransformLayer };
declare class OpacityLayer extends ContainerLayer {
    alpha: number;
    offset: Offset;
    constructor(namedParameters?: {
        alpha?: number;
        offset?: Offset;
    });
}
export { OpacityLayer };
declare class ShaderMaskLayer extends ContainerLayer {
    shader: Shader;
    maskRect: Rect;
    blendMode: BlendMode;
    constructor(namedParameters?: {
        shader?: Shader;
        maskRect?: Rect;
        blendMode?: BlendMode;
    });
}
export { ShaderMaskLayer };
declare class BackdropFilterLayer extends ContainerLayer {
    filter: ImageFilter;
    constructor(namedParameters?: {
        filter?: ImageFilter;
    });
}
export { BackdropFilterLayer };
declare class PhysicalModelLayer extends ContainerLayer {
    clipPath: Path;
    clipBehavior: Clip;
    elevation: number;
    color: Color;
    shadowColor: Color;
    constructor(namedParameters?: {
        clipPath?: Path;
        clipBehavior?: Clip;
        elevation?: number;
        color?: Color;
        shadowColor?: Color;
    });
}
export { PhysicalModelLayer };
declare class LayerLink extends MXDartClass {
    leader: LeaderLayer;
}
export { LayerLink };
declare class LeaderLayer extends ContainerLayer {
    link: LayerLink;
    offset: Offset;
    lastOffset: Offset;
    constructor(namedParameters?: {
        link?: LayerLink;
        offset?: Offset;
    });
}
export { LeaderLayer };
declare class FollowerLayer extends ContainerLayer {
    link: LayerLink;
    showWhenUnlinked: boolean;
    unlinkedOffset: Offset;
    linkedOffset: Offset;
    lastOffset: Offset;
    lastTransform: Matrix4;
    invertedTransform: Matrix4;
    inverseDirty: boolean;
    constructor(namedParameters?: {
        link?: LayerLink;
        showWhenUnlinked?: boolean;
        unlinkedOffset?: Offset;
        linkedOffset?: Offset;
    });
}
export { FollowerLayer };
declare class AnnotatedRegionLayer extends ContainerLayer {
    value: any;
    size: Size;
    offset: Offset;
    opaque: boolean;
    constructor(value?: any, namedParameters?: {
        size?: Size;
        offset?: Offset;
        opaque?: boolean;
    });
}
export { AnnotatedRegionLayer };
