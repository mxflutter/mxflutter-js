//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Curve } from '../animation/curves';
import { DiagnosticLevel, DiagnosticPropertiesBuilder, DiagnosticsTreeStyle } from '../foundation/diagnostics';
import { HitTestEntry } from '../gestures/hit-test';
import { PointerEvent } from '../gestures/events';
import { SemanticsEvent } from '../semantics/semantics-event';
import { Duration } from '../../../mx-dart-sdk';
import { SemanticsOwner, SemanticsConfiguration, SemanticsNode } from '../semantics/semantics';
import { AbstractNode } from '../foundation/node';
import { Matrix4 } from '../../../vector-math-64';
import { Rect, PictureRecorder, Canvas, Offset, Clip, RRect, Path, ColorFilter } from '../../../mx-dart-sdk';
import {
  ContainerLayer,
  PictureLayer,
  Layer,
  ClipRectLayer,
  ClipRRectLayer,
  ClipPathLayer,
  ColorFilterLayer,
  TransformLayer,
  OpacityLayer,
  OffsetLayer,
} from './layer';
import { ClipContext } from '../painting/clip';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class ParentData extends MXDartClass {}
export { ParentData };
class PaintingContext extends ClipContext {
  containerLayer: ContainerLayer;
  estimatedBounds: Rect;
  currentLayer: PictureLayer;
  recorder: PictureRecorder;
  canvas: Canvas;
  public constructor(_containerLayer?: ContainerLayer, estimatedBounds?: Rect) {
    super();
    this.containerLayer = _containerLayer;
    this.estimatedBounds = estimatedBounds;
    this.className = 'PaintingContext';
  }
  static repaintCompositedChild(child?: RenderObject, namedParameters: { debugAlsoPaintedParent?: boolean } = {}) {
    var jsObj = new MXDartClass();
    jsObj['child'] = child;
    jsObj['debugAlsoPaintedParent'] = namedParameters.debugAlsoPaintedParent;
    jsObj.className = 'PaintingContext';
    jsObj['constructorName'] = 'repaintCompositedChild';
    return jsObj;
  }
  static debugInstrumentRepaintCompositedChild(
    child?: RenderObject,
    namedParameters: { debugAlsoPaintedParent?: boolean; customContext?: PaintingContext } = {},
  ) {
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
abstract class Constraints extends MXDartClass {}
export { Constraints };
class SemanticsHandle extends MXDartClass {
  owner: PipelineOwner;
  listener: any;
}
export { SemanticsHandle };
class PipelineOwner extends MXDartClass {
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
  public constructor(
    namedParameters: { onNeedVisualUpdate?: any; onSemanticsOwnerCreated?: any; onSemanticsOwnerDisposed?: any } = {},
  ) {
    super();
    this.onNeedVisualUpdate = namedParameters.onNeedVisualUpdate;
    this.onSemanticsOwnerCreated = namedParameters.onSemanticsOwnerCreated;
    this.onSemanticsOwnerDisposed = namedParameters.onSemanticsOwnerDisposed;
    this.className = 'PipelineOwner';
  }
}
export { PipelineOwner };
abstract class RenderObject extends AbstractNode {
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
abstract class RenderObjectWithChildMixin extends RenderObject {
  child: any;
}
export { RenderObjectWithChildMixin };
abstract class ContainerParentDataMixin extends ParentData {
  previousSibling: any;
  nextSibling: any;
}
export { ContainerParentDataMixin };
abstract class ContainerRenderObjectMixin extends RenderObject {
  childCount: number;
  firstChild: any;
  lastChild: any;
}
export { ContainerRenderObjectMixin };
abstract class RelayoutWhenSystemFontsChangeMixin extends RenderObject {}
export { RelayoutWhenSystemFontsChangeMixin };
abstract class _SemanticsFragment extends MXDartClass {
  dropsSemanticsOfPreviousSiblings: boolean;
}
export { _SemanticsFragment };
class _ContainerSemanticsFragment extends _SemanticsFragment {
  interestingFragments: Array<any>;
  public constructor(namedParameters: { dropsSemanticsOfPreviousSiblings?: boolean } = {}) {
    super();
    this.dropsSemanticsOfPreviousSiblings = namedParameters.dropsSemanticsOfPreviousSiblings;
    this.className = '_ContainerSemanticsFragment';
  }
}
export { _ContainerSemanticsFragment };
abstract class _InterestingSemanticsFragment extends _SemanticsFragment {
  ancestorChain: Array<any>;
  tagsForChildren: Set<any>;
}
export { _InterestingSemanticsFragment };
class _RootSemanticsFragment extends _InterestingSemanticsFragment {
  children: Array<any>;
  public constructor(namedParameters: { owner?: RenderObject; dropsSemanticsOfPreviousSiblings?: boolean } = {}) {
    super();
    this['owner'] = namedParameters.owner;
    this.dropsSemanticsOfPreviousSiblings = namedParameters.dropsSemanticsOfPreviousSiblings;
    this.className = '_RootSemanticsFragment';
  }
}
export { _RootSemanticsFragment };
class _SwitchableSemanticsFragment extends _InterestingSemanticsFragment {
  mergeIntoParent: boolean;
  config: SemanticsConfiguration;
  isConfigWritable: boolean;
  children: Array<any>;
  isExplicit: boolean;
  public constructor(
    namedParameters: {
      mergeIntoParent?: boolean;
      config?: SemanticsConfiguration;
      owner?: RenderObject;
      dropsSemanticsOfPreviousSiblings?: boolean;
    } = {},
  ) {
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
  public constructor(namedParameters: { owner?: RenderObject } = {}) {
    super();
    this['owner'] = namedParameters.owner;
    this.className = '_AbortingSemanticsFragment';
  }
}
export { _AbortingSemanticsFragment };
class _SemanticsGeometry extends MXDartClass {
  paintClipRect: Rect;
  semanticsClipRect: Rect;
  transform: Matrix4;
  rect: Rect;
  markAsHidden: boolean;
  public constructor(
    namedParameters: { parentSemanticsClipRect?: Rect; parentPaintClipRect?: Rect; ancestors?: Array<any> } = {},
  ) {
    super();
    this['parentSemanticsClipRect'] = namedParameters.parentSemanticsClipRect;
    this['parentPaintClipRect'] = namedParameters.parentPaintClipRect;
    this['ancestors'] = namedParameters.ancestors;
    this.className = '_SemanticsGeometry';
  }
}
export { _SemanticsGeometry };
