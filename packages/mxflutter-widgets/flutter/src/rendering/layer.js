//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { AbstractNode } from '../foundation/node';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class AnnotationEntry extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.annotation = namedParameters.annotation;
        this.localPosition = namedParameters.localPosition;
        this.className = 'AnnotationEntry';
    }
}
export { AnnotationEntry };
class AnnotationResult extends MXDartClass {
}
export { AnnotationResult };
class Layer extends AbstractNode {
}
export { Layer };
class PictureLayer extends Layer {
    constructor(canvasBounds) {
        super();
        this.canvasBounds = canvasBounds;
        this.className = 'PictureLayer';
    }
}
export { PictureLayer };
class TextureLayer extends Layer {
    constructor(namedParameters = {}) {
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
    constructor(namedParameters = {}) {
        super();
        this.rect = namedParameters.rect;
        this.viewId = namedParameters.viewId;
        this.className = 'PlatformViewLayer';
    }
}
export { PlatformViewLayer };
class PerformanceOverlayLayer extends Layer {
    constructor(namedParameters = {}) {
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
}
export { ContainerLayer };
class OffsetLayer extends ContainerLayer {
    constructor(namedParameters = {}) {
        super();
        this.offset = namedParameters.offset;
        this.className = 'OffsetLayer';
    }
}
export { OffsetLayer };
class ClipRectLayer extends ContainerLayer {
    constructor(namedParameters = {}) {
        super();
        this.clipRect = namedParameters.clipRect;
        this.clipBehavior = namedParameters.clipBehavior;
        this.className = 'ClipRectLayer';
    }
}
export { ClipRectLayer };
class ClipRRectLayer extends ContainerLayer {
    constructor(namedParameters = {}) {
        super();
        this.clipRRect = namedParameters.clipRRect;
        this.clipBehavior = namedParameters.clipBehavior;
        this.className = 'ClipRRectLayer';
    }
}
export { ClipRRectLayer };
class ClipPathLayer extends ContainerLayer {
    constructor(namedParameters = {}) {
        super();
        this.clipPath = namedParameters.clipPath;
        this.clipBehavior = namedParameters.clipBehavior;
        this.className = 'ClipPathLayer';
    }
}
export { ClipPathLayer };
class ColorFilterLayer extends ContainerLayer {
    constructor(namedParameters = {}) {
        super();
        this.colorFilter = namedParameters.colorFilter;
        this.className = 'ColorFilterLayer';
    }
}
export { ColorFilterLayer };
class ImageFilterLayer extends ContainerLayer {
    constructor(namedParameters = {}) {
        super();
        this.imageFilter = namedParameters.imageFilter;
        this.className = 'ImageFilterLayer';
    }
}
export { ImageFilterLayer };
class TransformLayer extends OffsetLayer {
    constructor(namedParameters = {}) {
        super();
        this.transform = namedParameters.transform;
        this.offset = namedParameters.offset;
        this.className = 'TransformLayer';
    }
}
export { TransformLayer };
class OpacityLayer extends ContainerLayer {
    constructor(namedParameters = {}) {
        super();
        this.alpha = namedParameters.alpha;
        this.offset = namedParameters.offset;
        this.className = 'OpacityLayer';
    }
}
export { OpacityLayer };
class ShaderMaskLayer extends ContainerLayer {
    constructor(namedParameters = {}) {
        super();
        this.shader = namedParameters.shader;
        this.maskRect = namedParameters.maskRect;
        this.blendMode = namedParameters.blendMode;
        this.className = 'ShaderMaskLayer';
    }
}
export { ShaderMaskLayer };
class BackdropFilterLayer extends ContainerLayer {
    constructor(namedParameters = {}) {
        super();
        this.filter = namedParameters.filter;
        this.className = 'BackdropFilterLayer';
    }
}
export { BackdropFilterLayer };
class PhysicalModelLayer extends ContainerLayer {
    constructor(namedParameters = {}) {
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
}
export { LayerLink };
class LeaderLayer extends ContainerLayer {
    constructor(namedParameters = {}) {
        super();
        this.link = namedParameters.link;
        this.offset = namedParameters.offset;
        this.className = 'LeaderLayer';
    }
}
export { LeaderLayer };
class FollowerLayer extends ContainerLayer {
    constructor(namedParameters = {}) {
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
    constructor(value, namedParameters = {}) {
        super();
        this.value = value;
        this.size = namedParameters.size;
        this.offset = namedParameters.offset;
        this.opaque = namedParameters.opaque;
        this.className = 'AnnotatedRegionLayer';
    }
}
export { AnnotatedRegionLayer };
