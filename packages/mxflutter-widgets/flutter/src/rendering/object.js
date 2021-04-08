"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._SemanticsGeometry = exports._AbortingSemanticsFragment = exports._SwitchableSemanticsFragment = exports._RootSemanticsFragment = exports._InterestingSemanticsFragment = exports._ContainerSemanticsFragment = exports._SemanticsFragment = exports.RelayoutWhenSystemFontsChangeMixin = exports.ContainerRenderObjectMixin = exports.ContainerParentDataMixin = exports.RenderObjectWithChildMixin = exports.RenderObject = exports.PipelineOwner = exports.SemanticsHandle = exports.Constraints = exports.PaintingContext = exports.ParentData = void 0;
const node_1 = require("../foundation/node");
const clip_1 = require("../painting/clip");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class ParentData extends mxflutter_base_1.MXDartClass {
}
exports.ParentData = ParentData;
class PaintingContext extends clip_1.ClipContext {
    constructor(_containerLayer, estimatedBounds) {
        super();
        this.containerLayer = _containerLayer;
        this.estimatedBounds = estimatedBounds;
        this.className = 'PaintingContext';
    }
    static repaintCompositedChild(child, namedParameters = {}) {
        var jsObj = new mxflutter_base_1.MXDartClass();
        jsObj['child'] = child;
        jsObj['debugAlsoPaintedParent'] = namedParameters.debugAlsoPaintedParent;
        jsObj.className = 'PaintingContext';
        jsObj['constructorName'] = 'repaintCompositedChild';
        return jsObj;
    }
    static debugInstrumentRepaintCompositedChild(child, namedParameters = {}) {
        var jsObj = new mxflutter_base_1.MXDartClass();
        jsObj['child'] = child;
        jsObj['debugAlsoPaintedParent'] = namedParameters.debugAlsoPaintedParent;
        jsObj['customContext'] = namedParameters.customContext;
        jsObj.className = 'PaintingContext';
        jsObj['constructorName'] = 'debugInstrumentRepaintCompositedChild';
        return jsObj;
    }
}
exports.PaintingContext = PaintingContext;
class Constraints extends mxflutter_base_1.MXDartClass {
}
exports.Constraints = Constraints;
class SemanticsHandle extends mxflutter_base_1.MXDartClass {
}
exports.SemanticsHandle = SemanticsHandle;
class PipelineOwner extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.onNeedVisualUpdate = namedParameters.onNeedVisualUpdate;
        this.onSemanticsOwnerCreated = namedParameters.onSemanticsOwnerCreated;
        this.onSemanticsOwnerDisposed = namedParameters.onSemanticsOwnerDisposed;
        this.className = 'PipelineOwner';
    }
}
exports.PipelineOwner = PipelineOwner;
class RenderObject extends node_1.AbstractNode {
}
exports.RenderObject = RenderObject;
class RenderObjectWithChildMixin extends RenderObject {
}
exports.RenderObjectWithChildMixin = RenderObjectWithChildMixin;
class ContainerParentDataMixin extends ParentData {
}
exports.ContainerParentDataMixin = ContainerParentDataMixin;
class ContainerRenderObjectMixin extends RenderObject {
}
exports.ContainerRenderObjectMixin = ContainerRenderObjectMixin;
class RelayoutWhenSystemFontsChangeMixin extends RenderObject {
}
exports.RelayoutWhenSystemFontsChangeMixin = RelayoutWhenSystemFontsChangeMixin;
class _SemanticsFragment extends mxflutter_base_1.MXDartClass {
}
exports._SemanticsFragment = _SemanticsFragment;
class _ContainerSemanticsFragment extends _SemanticsFragment {
    constructor(namedParameters = {}) {
        super();
        this.dropsSemanticsOfPreviousSiblings = namedParameters.dropsSemanticsOfPreviousSiblings;
        this.className = '_ContainerSemanticsFragment';
    }
}
exports._ContainerSemanticsFragment = _ContainerSemanticsFragment;
class _InterestingSemanticsFragment extends _SemanticsFragment {
}
exports._InterestingSemanticsFragment = _InterestingSemanticsFragment;
class _RootSemanticsFragment extends _InterestingSemanticsFragment {
    constructor(namedParameters = {}) {
        super();
        this['owner'] = namedParameters.owner;
        this.dropsSemanticsOfPreviousSiblings = namedParameters.dropsSemanticsOfPreviousSiblings;
        this.className = '_RootSemanticsFragment';
    }
}
exports._RootSemanticsFragment = _RootSemanticsFragment;
class _SwitchableSemanticsFragment extends _InterestingSemanticsFragment {
    constructor(namedParameters = {}) {
        super();
        this.mergeIntoParent = namedParameters.mergeIntoParent;
        this.config = namedParameters.config;
        this['owner'] = namedParameters.owner;
        this.dropsSemanticsOfPreviousSiblings = namedParameters.dropsSemanticsOfPreviousSiblings;
        this.className = '_SwitchableSemanticsFragment';
    }
}
exports._SwitchableSemanticsFragment = _SwitchableSemanticsFragment;
class _AbortingSemanticsFragment extends _InterestingSemanticsFragment {
    constructor(namedParameters = {}) {
        super();
        this['owner'] = namedParameters.owner;
        this.className = '_AbortingSemanticsFragment';
    }
}
exports._AbortingSemanticsFragment = _AbortingSemanticsFragment;
class _SemanticsGeometry extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this['parentSemanticsClipRect'] = namedParameters.parentSemanticsClipRect;
        this['parentPaintClipRect'] = namedParameters.parentPaintClipRect;
        this['ancestors'] = namedParameters.ancestors;
        this.className = '_SemanticsGeometry';
    }
}
exports._SemanticsGeometry = _SemanticsGeometry;
