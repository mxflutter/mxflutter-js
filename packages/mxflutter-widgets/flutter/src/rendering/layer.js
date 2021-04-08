"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnotatedRegionLayer = exports.FollowerLayer = exports.LeaderLayer = exports.LayerLink = exports.PhysicalModelLayer = exports.BackdropFilterLayer = exports.ShaderMaskLayer = exports.OpacityLayer = exports.TransformLayer = exports.ImageFilterLayer = exports.ColorFilterLayer = exports.ClipPathLayer = exports.ClipRRectLayer = exports.ClipRectLayer = exports.OffsetLayer = exports.ContainerLayer = exports.PerformanceOverlayLayer = exports.PlatformViewLayer = exports.TextureLayer = exports.PictureLayer = exports.Layer = exports.AnnotationResult = exports.AnnotationEntry = void 0;
const node_1 = require("../foundation/node");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class AnnotationEntry extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.annotation = namedParameters.annotation;
        this.localPosition = namedParameters.localPosition;
        this.className = 'AnnotationEntry';
    }
}
exports.AnnotationEntry = AnnotationEntry;
class AnnotationResult extends mxflutter_base_1.MXDartClass {
}
exports.AnnotationResult = AnnotationResult;
class Layer extends node_1.AbstractNode {
}
exports.Layer = Layer;
class PictureLayer extends Layer {
    constructor(canvasBounds) {
        super();
        this.canvasBounds = canvasBounds;
        this.className = 'PictureLayer';
    }
}
exports.PictureLayer = PictureLayer;
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
exports.TextureLayer = TextureLayer;
class PlatformViewLayer extends Layer {
    constructor(namedParameters = {}) {
        super();
        this.rect = namedParameters.rect;
        this.viewId = namedParameters.viewId;
        this.className = 'PlatformViewLayer';
    }
}
exports.PlatformViewLayer = PlatformViewLayer;
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
exports.PerformanceOverlayLayer = PerformanceOverlayLayer;
class ContainerLayer extends Layer {
}
exports.ContainerLayer = ContainerLayer;
class OffsetLayer extends ContainerLayer {
    constructor(namedParameters = {}) {
        super();
        this.offset = namedParameters.offset;
        this.className = 'OffsetLayer';
    }
}
exports.OffsetLayer = OffsetLayer;
class ClipRectLayer extends ContainerLayer {
    constructor(namedParameters = {}) {
        super();
        this.clipRect = namedParameters.clipRect;
        this.clipBehavior = namedParameters.clipBehavior;
        this.className = 'ClipRectLayer';
    }
}
exports.ClipRectLayer = ClipRectLayer;
class ClipRRectLayer extends ContainerLayer {
    constructor(namedParameters = {}) {
        super();
        this.clipRRect = namedParameters.clipRRect;
        this.clipBehavior = namedParameters.clipBehavior;
        this.className = 'ClipRRectLayer';
    }
}
exports.ClipRRectLayer = ClipRRectLayer;
class ClipPathLayer extends ContainerLayer {
    constructor(namedParameters = {}) {
        super();
        this.clipPath = namedParameters.clipPath;
        this.clipBehavior = namedParameters.clipBehavior;
        this.className = 'ClipPathLayer';
    }
}
exports.ClipPathLayer = ClipPathLayer;
class ColorFilterLayer extends ContainerLayer {
    constructor(namedParameters = {}) {
        super();
        this.colorFilter = namedParameters.colorFilter;
        this.className = 'ColorFilterLayer';
    }
}
exports.ColorFilterLayer = ColorFilterLayer;
class ImageFilterLayer extends ContainerLayer {
    constructor(namedParameters = {}) {
        super();
        this.imageFilter = namedParameters.imageFilter;
        this.className = 'ImageFilterLayer';
    }
}
exports.ImageFilterLayer = ImageFilterLayer;
class TransformLayer extends OffsetLayer {
    constructor(namedParameters = {}) {
        super();
        this.transform = namedParameters.transform;
        this.offset = namedParameters.offset;
        this.className = 'TransformLayer';
    }
}
exports.TransformLayer = TransformLayer;
class OpacityLayer extends ContainerLayer {
    constructor(namedParameters = {}) {
        super();
        this.alpha = namedParameters.alpha;
        this.offset = namedParameters.offset;
        this.className = 'OpacityLayer';
    }
}
exports.OpacityLayer = OpacityLayer;
class ShaderMaskLayer extends ContainerLayer {
    constructor(namedParameters = {}) {
        super();
        this.shader = namedParameters.shader;
        this.maskRect = namedParameters.maskRect;
        this.blendMode = namedParameters.blendMode;
        this.className = 'ShaderMaskLayer';
    }
}
exports.ShaderMaskLayer = ShaderMaskLayer;
class BackdropFilterLayer extends ContainerLayer {
    constructor(namedParameters = {}) {
        super();
        this.filter = namedParameters.filter;
        this.className = 'BackdropFilterLayer';
    }
}
exports.BackdropFilterLayer = BackdropFilterLayer;
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
exports.PhysicalModelLayer = PhysicalModelLayer;
class LayerLink extends mxflutter_base_1.MXDartClass {
}
exports.LayerLink = LayerLink;
class LeaderLayer extends ContainerLayer {
    constructor(namedParameters = {}) {
        super();
        this.link = namedParameters.link;
        this.offset = namedParameters.offset;
        this.className = 'LeaderLayer';
    }
}
exports.LeaderLayer = LeaderLayer;
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
exports.FollowerLayer = FollowerLayer;
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
exports.AnnotatedRegionLayer = AnnotatedRegionLayer;
