//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { AbstractNode } from '../foundation/node';
import { ClipContext } from '../painting/clip';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class ParentData extends MXDartClass {
}
export { ParentData };
class PaintingContext extends ClipContext {
    constructor(_containerLayer, estimatedBounds) {
        super();
        this.containerLayer = _containerLayer;
        this.estimatedBounds = estimatedBounds;
        this.className = 'PaintingContext';
    }
    static repaintCompositedChild(child, namedParameters = {}) {
        var jsObj = new MXDartClass();
        jsObj['child'] = child;
        jsObj['debugAlsoPaintedParent'] = namedParameters.debugAlsoPaintedParent;
        jsObj.className = 'PaintingContext';
        jsObj['constructorName'] = 'repaintCompositedChild';
        return jsObj;
    }
    static debugInstrumentRepaintCompositedChild(child, namedParameters = {}) {
        var jsObj = new MXDartClass();
        jsObj['child'] = child;
        jsObj['debugAlsoPaintedParent'] = namedParameters.debugAlsoPaintedParent;
        jsObj['customContext'] = namedParameters.customContext;
        jsObj.className = 'PaintingContext';
        jsObj['constructorName'] = 'debugInstrumentRepaintCompositedChild';
        return jsObj;
    }
}
export { PaintingContext };
class Constraints extends MXDartClass {
}
export { Constraints };
class SemanticsHandle extends MXDartClass {
}
export { SemanticsHandle };
class PipelineOwner extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.onNeedVisualUpdate = namedParameters.onNeedVisualUpdate;
        this.onSemanticsOwnerCreated = namedParameters.onSemanticsOwnerCreated;
        this.onSemanticsOwnerDisposed = namedParameters.onSemanticsOwnerDisposed;
        this.className = 'PipelineOwner';
    }
}
export { PipelineOwner };
class RenderObject extends AbstractNode {
}
export { RenderObject };
class RenderObjectWithChildMixin extends RenderObject {
}
export { RenderObjectWithChildMixin };
class ContainerParentDataMixin extends ParentData {
}
export { ContainerParentDataMixin };
class ContainerRenderObjectMixin extends RenderObject {
}
export { ContainerRenderObjectMixin };
class RelayoutWhenSystemFontsChangeMixin extends RenderObject {
}
export { RelayoutWhenSystemFontsChangeMixin };
class _SemanticsFragment extends MXDartClass {
}
export { _SemanticsFragment };
class _ContainerSemanticsFragment extends _SemanticsFragment {
    constructor(namedParameters = {}) {
        super();
        this.dropsSemanticsOfPreviousSiblings = namedParameters.dropsSemanticsOfPreviousSiblings;
        this.className = '_ContainerSemanticsFragment';
    }
}
export { _ContainerSemanticsFragment };
class _InterestingSemanticsFragment extends _SemanticsFragment {
}
export { _InterestingSemanticsFragment };
class _RootSemanticsFragment extends _InterestingSemanticsFragment {
    constructor(namedParameters = {}) {
        super();
        this['owner'] = namedParameters.owner;
        this.dropsSemanticsOfPreviousSiblings = namedParameters.dropsSemanticsOfPreviousSiblings;
        this.className = '_RootSemanticsFragment';
    }
}
export { _RootSemanticsFragment };
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
export { _SwitchableSemanticsFragment };
class _AbortingSemanticsFragment extends _InterestingSemanticsFragment {
    constructor(namedParameters = {}) {
        super();
        this['owner'] = namedParameters.owner;
        this.className = '_AbortingSemanticsFragment';
    }
}
export { _AbortingSemanticsFragment };
class _SemanticsGeometry extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this['parentSemanticsClipRect'] = namedParameters.parentSemanticsClipRect;
        this['parentPaintClipRect'] = namedParameters.parentPaintClipRect;
        this['ancestors'] = namedParameters.ancestors;
        this.className = '_SemanticsGeometry';
    }
}
export { _SemanticsGeometry };
