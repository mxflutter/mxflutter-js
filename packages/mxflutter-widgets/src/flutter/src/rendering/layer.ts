// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Matrix4 } from '../../../vector-math-64';
import { AbstractNode } from '../foundation/node';
import { Offset, EngineLayer, Rect, Picture, FilterQuality, Clip, RRect, Path, ColorFilter, ImageFilter, Shader, BlendMode, Color, Size } from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class AnnotationEntry extends MXDartClass {
  annotation: any;
  localPosition: Offset;
  public constructor(namedParameters: {annotation?: any, localPosition?: Offset} = {}) {
    super();
    this.annotation = namedParameters.annotation;
    this.localPosition = namedParameters.localPosition;
    this.className = 'AnnotationEntry';
  }
}
export { AnnotationEntry };
class AnnotationResult extends MXDartClass {
  entries: Array<any>;
}
export { AnnotationResult };
abstract class Layer extends AbstractNode {
  needsAddToScene: boolean;
  engineLayer: EngineLayer;
  nextSibling: Layer;
  previousSibling: Layer;
  debugCreator: any;
}
export { Layer };
class PictureLayer extends Layer {
  canvasBounds: Rect;
  picture: Picture;
  isComplexHint: boolean;
  willChangeHint: boolean;
  public constructor(canvasBounds?: Rect) {
    super();
    this.canvasBounds = canvasBounds;
    this.className = 'PictureLayer';
  }
}
export { PictureLayer };
class TextureLayer extends Layer {
  rect: Rect;
  textureId: number;
  freeze: boolean;
  filterQuality: FilterQuality;
  public constructor(namedParameters: {rect?: Rect, textureId?: number, freeze?: boolean, filterQuality?: FilterQuality} = {}) {
    super();
    this.rect = namedParameters.rect;
    this.textureId = namedParameters.textureId;
    this.freeze = namedParameters.freeze;
    this.filterQuality = namedParameters.filterQuality;
    this.className = 'TextureLayer';
  }
}
export { TextureLayer };
class PlatformViewLayer extends Layer {
  rect: Rect;
  viewId: number;
  public constructor(namedParameters: {rect?: Rect, viewId?: number} = {}) {
    super();
    this.rect = namedParameters.rect;
    this.viewId = namedParameters.viewId;
    this.className = 'PlatformViewLayer';
  }
}
export { PlatformViewLayer };
class PerformanceOverlayLayer extends Layer {
  overlayRect: Rect;
  optionsMask: number;
  rasterizerThreshold: number;
  checkerboardRasterCacheImages: boolean;
  checkerboardOffscreenLayers: boolean;
  public constructor(namedParameters: {overlayRect?: Rect, optionsMask?: number, rasterizerThreshold?: number, checkerboardRasterCacheImages?: boolean, checkerboardOffscreenLayers?: boolean} = {}) {
    super();
    this.overlayRect = namedParameters.overlayRect;
    this.optionsMask = namedParameters.optionsMask;
    this.rasterizerThreshold = namedParameters.rasterizerThreshold;
    this.checkerboardRasterCacheImages = namedParameters.checkerboardRasterCacheImages;
    this.checkerboardOffscreenLayers = namedParameters.checkerboardOffscreenLayers;
    this.className = 'PerformanceOverlayLayer';
  }
}
export { PerformanceOverlayLayer };
class ContainerLayer extends Layer {
  firstChild: Layer;
  lastChild: Layer;
}
export { ContainerLayer };
class OffsetLayer extends ContainerLayer {
  offset: Offset;
  public constructor(namedParameters: {offset?: Offset} = {}) {
    super();
    this.offset = namedParameters.offset;
    this.className = 'OffsetLayer';
  }
}
export { OffsetLayer };
class ClipRectLayer extends ContainerLayer {
  clipRect: Rect;
  clipBehavior: Clip;
  public constructor(namedParameters: {clipRect?: Rect, clipBehavior?: Clip} = {}) {
    super();
    this.clipRect = namedParameters.clipRect;
    this.clipBehavior = namedParameters.clipBehavior;
    this.className = 'ClipRectLayer';
  }
}
export { ClipRectLayer };
class ClipRRectLayer extends ContainerLayer {
  clipRRect: RRect;
  clipBehavior: Clip;
  public constructor(namedParameters: {clipRRect?: RRect, clipBehavior?: Clip} = {}) {
    super();
    this.clipRRect = namedParameters.clipRRect;
    this.clipBehavior = namedParameters.clipBehavior;
    this.className = 'ClipRRectLayer';
  }
}
export { ClipRRectLayer };
class ClipPathLayer extends ContainerLayer {
  clipPath: Path;
  clipBehavior: Clip;
  public constructor(namedParameters: {clipPath?: Path, clipBehavior?: Clip} = {}) {
    super();
    this.clipPath = namedParameters.clipPath;
    this.clipBehavior = namedParameters.clipBehavior;
    this.className = 'ClipPathLayer';
  }
}
export { ClipPathLayer };
class ColorFilterLayer extends ContainerLayer {
  colorFilter: ColorFilter;
  public constructor(namedParameters: {colorFilter?: ColorFilter} = {}) {
    super();
    this.colorFilter = namedParameters.colorFilter;
    this.className = 'ColorFilterLayer';
  }
}
export { ColorFilterLayer };
class ImageFilterLayer extends ContainerLayer {
  imageFilter: ImageFilter;
  public constructor(namedParameters: {imageFilter?: ImageFilter} = {}) {
    super();
    this.imageFilter = namedParameters.imageFilter;
    this.className = 'ImageFilterLayer';
  }
}
export { ImageFilterLayer };
class TransformLayer extends OffsetLayer {
  transform: Matrix4;
  lastEffectiveTransform: Matrix4;
  invertedTransform: Matrix4;
  inverseDirty: boolean;
  public constructor(namedParameters: {transform?: Matrix4, offset?: Offset} = {}) {
    super();
    this.transform = namedParameters.transform;
    this.offset = namedParameters.offset;
    this.className = 'TransformLayer';
  }
}
export { TransformLayer };
class OpacityLayer extends ContainerLayer {
  alpha: number;
  offset: Offset;
  public constructor(namedParameters: {alpha?: number, offset?: Offset} = {}) {
    super();
    this.alpha = namedParameters.alpha;
    this.offset = namedParameters.offset;
    this.className = 'OpacityLayer';
  }
}
export { OpacityLayer };
class ShaderMaskLayer extends ContainerLayer {
  shader: Shader;
  maskRect: Rect;
  blendMode: BlendMode;
  public constructor(namedParameters: {shader?: Shader, maskRect?: Rect, blendMode?: BlendMode} = {}) {
    super();
    this.shader = namedParameters.shader;
    this.maskRect = namedParameters.maskRect;
    this.blendMode = namedParameters.blendMode;
    this.className = 'ShaderMaskLayer';
  }
}
export { ShaderMaskLayer };
class BackdropFilterLayer extends ContainerLayer {
  filter: ImageFilter;
  public constructor(namedParameters: {filter?: ImageFilter} = {}) {
    super();
    this.filter = namedParameters.filter;
    this.className = 'BackdropFilterLayer';
  }
}
export { BackdropFilterLayer };
class PhysicalModelLayer extends ContainerLayer {
  clipPath: Path;
  clipBehavior: Clip;
  elevation: number;
  color: Color;
  shadowColor: Color;
  public constructor(namedParameters: {clipPath?: Path, clipBehavior?: Clip, elevation?: number, color?: Color, shadowColor?: Color} = {}) {
    super();
    this.clipPath = namedParameters.clipPath;
    this.clipBehavior = namedParameters.clipBehavior;
    this.elevation = namedParameters.elevation;
    this.color = namedParameters.color;
    this.shadowColor = namedParameters.shadowColor;
    this.className = 'PhysicalModelLayer';
  }
}
export { PhysicalModelLayer };
class LayerLink extends MXDartClass {
  leader: LeaderLayer;
}
export { LayerLink };
class LeaderLayer extends ContainerLayer {
  link: LayerLink;
  offset: Offset;
  lastOffset: Offset;
  public constructor(namedParameters: {link?: LayerLink, offset?: Offset} = {}) {
    super();
    this.link = namedParameters.link;
    this.offset = namedParameters.offset;
    this.className = 'LeaderLayer';
  }
}
export { LeaderLayer };
class FollowerLayer extends ContainerLayer {
  link: LayerLink;
  showWhenUnlinked: boolean;
  unlinkedOffset: Offset;
  linkedOffset: Offset;
  lastOffset: Offset;
  lastTransform: Matrix4;
  invertedTransform: Matrix4;
  inverseDirty: boolean;
  public constructor(namedParameters: {link?: LayerLink, showWhenUnlinked?: boolean, unlinkedOffset?: Offset, linkedOffset?: Offset} = {}) {
    super();
    this.link = namedParameters.link;
    this.showWhenUnlinked = namedParameters.showWhenUnlinked;
    this.unlinkedOffset = namedParameters.unlinkedOffset;
    this.linkedOffset = namedParameters.linkedOffset;
    this.className = 'FollowerLayer';
  }
}
export { FollowerLayer };
class AnnotatedRegionLayer extends ContainerLayer {
  value: any;
  size: Size;
  offset: Offset;
  opaque: boolean;
  public constructor(value?: any, namedParameters: {size?: Size, offset?: Offset, opaque?: boolean} = {}) {
    super();
    this.value = value;
    this.size = namedParameters.size;
    this.offset = namedParameters.offset;
    this.opaque = namedParameters.opaque;
    this.className = 'AnnotatedRegionLayer';
  }
}
export { AnnotatedRegionLayer };
