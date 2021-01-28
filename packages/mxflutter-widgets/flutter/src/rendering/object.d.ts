import { SemanticsOwner, SemanticsConfiguration, SemanticsNode } from '../semantics/semantics';
import { AbstractNode } from '../foundation/node';
import { Matrix4 } from '../../../vector-math-64';
import { Rect, PictureRecorder, Canvas } from '../../../mx-dart-sdk';
import { ContainerLayer, PictureLayer } from './layer';
import { ClipContext } from '../painting/clip';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class ParentData extends MXDartClass {
}
export { ParentData };
declare class PaintingContext extends ClipContext {
    containerLayer: ContainerLayer;
    estimatedBounds: Rect;
    currentLayer: PictureLayer;
    recorder: PictureRecorder;
    canvas: Canvas;
    constructor(_containerLayer?: ContainerLayer, estimatedBounds?: Rect);
    static repaintCompositedChild(child?: RenderObject, namedParameters?: {
        debugAlsoPaintedParent?: boolean;
    }): MXDartClass;
    static debugInstrumentRepaintCompositedChild(child?: RenderObject, namedParameters?: {
        debugAlsoPaintedParent?: boolean;
        customContext?: PaintingContext;
    }): MXDartClass;
}
export { PaintingContext };
declare abstract class Constraints extends MXDartClass {
}
export { Constraints };
declare class SemanticsHandle extends MXDartClass {
    owner: PipelineOwner;
    listener: any;
}
export { SemanticsHandle };
declare class PipelineOwner extends MXDartClass {
    onNeedVisualUpdate: any;
    onSemanticsOwnerCreated: any;
    onSemanticsOwnerDisposed: any;
    rootNode: AbstractNode;
    nodesNeedingLayout: Array<any>;
    debugDoingLayout: boolean;
    debugAllowMutationsToDirtySubtrees: boolean;
    nodesNeedingCompositingBitsUpdate: Array<any>;
    nodesNeedingPaint: Array<any>;
    debugDoingPaint: boolean;
    semanticsOwner: SemanticsOwner;
    outstandingSemanticsHandles: number;
    debugDoingSemantics: boolean;
    nodesNeedingSemantics: Set<any>;
    constructor(namedParameters?: {
        onNeedVisualUpdate?: any;
        onSemanticsOwnerCreated?: any;
        onSemanticsOwnerDisposed?: any;
    });
}
export { PipelineOwner };
declare abstract class RenderObject extends AbstractNode {
    parentData: ParentData;
    debugCreator: any;
    debugDoingThisResize: boolean;
    debugDoingThisLayout: boolean;
    debugCanParentUseSize: boolean;
    debugMutationsLocked: boolean;
    needsLayout: boolean;
    relayoutBoundary: RenderObject;
    doingThisLayoutWithCallback: boolean;
    constraints: Constraints;
    debugDoingThisPaint: boolean;
    layer: ContainerLayer;
    needsCompositingBitsUpdate: boolean;
    needsCompositing: boolean;
    needsPaint: boolean;
    cachedSemanticsConfiguration: SemanticsConfiguration;
    needsSemanticsUpdate: boolean;
    semantics: SemanticsNode;
}
export { RenderObject };
declare abstract class RenderObjectWithChildMixin extends RenderObject {
    child: any;
}
export { RenderObjectWithChildMixin };
declare abstract class ContainerParentDataMixin extends ParentData {
    previousSibling: any;
    nextSibling: any;
}
export { ContainerParentDataMixin };
declare abstract class ContainerRenderObjectMixin extends RenderObject {
    childCount: number;
    firstChild: any;
    lastChild: any;
}
export { ContainerRenderObjectMixin };
declare abstract class RelayoutWhenSystemFontsChangeMixin extends RenderObject {
}
export { RelayoutWhenSystemFontsChangeMixin };
declare abstract class _SemanticsFragment extends MXDartClass {
    dropsSemanticsOfPreviousSiblings: boolean;
}
export { _SemanticsFragment };
declare class _ContainerSemanticsFragment extends _SemanticsFragment {
    interestingFragments: Array<any>;
    constructor(namedParameters?: {
        dropsSemanticsOfPreviousSiblings?: boolean;
    });
}
export { _ContainerSemanticsFragment };
declare abstract class _InterestingSemanticsFragment extends _SemanticsFragment {
    ancestorChain: Array<any>;
    tagsForChildren: Set<any>;
}
export { _InterestingSemanticsFragment };
declare class _RootSemanticsFragment extends _InterestingSemanticsFragment {
    children: Array<any>;
    constructor(namedParameters?: {
        owner?: RenderObject;
        dropsSemanticsOfPreviousSiblings?: boolean;
    });
}
export { _RootSemanticsFragment };
declare class _SwitchableSemanticsFragment extends _InterestingSemanticsFragment {
    mergeIntoParent: boolean;
    config: SemanticsConfiguration;
    isConfigWritable: boolean;
    children: Array<any>;
    isExplicit: boolean;
    constructor(namedParameters?: {
        mergeIntoParent?: boolean;
        config?: SemanticsConfiguration;
        owner?: RenderObject;
        dropsSemanticsOfPreviousSiblings?: boolean;
    });
}
export { _SwitchableSemanticsFragment };
declare class _AbortingSemanticsFragment extends _InterestingSemanticsFragment {
    constructor(namedParameters?: {
        owner?: RenderObject;
    });
}
export { _AbortingSemanticsFragment };
declare class _SemanticsGeometry extends MXDartClass {
    paintClipRect: Rect;
    semanticsClipRect: Rect;
    transform: Matrix4;
    rect: Rect;
    markAsHidden: boolean;
    constructor(namedParameters?: {
        parentSemanticsClipRect?: Rect;
        parentPaintClipRect?: Rect;
        ancestors?: Array<any>;
    });
}
export { _SemanticsGeometry };
