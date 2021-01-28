//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { TextPainter } from '../painting/text-painter';
import { RenderBox } from '../rendering/box';
import { DragDownDetails, DragUpdateDetails, DragEndDetails } from '../gestures/drag-details';
import { Matrix4 } from '../../../vector-math-64';
import { Key } from '../foundation/key';
import { Element$, Widget, StatefulWidget$, State$, GlobalKey, BuildContext$, LeafRenderObjectWidget } from './framework';
import { Duration } from '../../../mx-dart-sdk';
import { RenderObject, PaintingContext } from '../rendering/object';
import {
  SceneBuilder,
  Offset,
  Canvas,
  Path,
  RRect,
  Rect,
  ClipOp,
  Paint,
  Image,
  BlendMode,
  Color,
  Paragraph,
  Picture,
  PointMode,
  Vertices,
  PictureRecorder,
  TextDirection,
  Size,
} from '../../../mx-dart-sdk';
import { Layer, AnnotationResult, OffsetLayer, PictureLayer, ContainerLayer } from '../rendering/layer';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class _ProxyLayer extends Layer {
  layer: Layer;
  public constructor(_layer?: Layer) {
    super();
    this.layer = _layer;
    this.className = '_ProxyLayer';
  }
}
export { _ProxyLayer };
class _MulticastCanvas extends MXDartClass {
  main: Canvas;
  screenshot: Canvas;
  public constructor(namedParameters: { main?: Canvas; screenshot?: Canvas } = {}) {
    super();
    this.main = namedParameters.main;
    this.screenshot = namedParameters.screenshot;
    this.className = '_MulticastCanvas';
  }
}
export { _MulticastCanvas };
class _ScreenshotContainerLayer extends OffsetLayer {}
export { _ScreenshotContainerLayer };
class _ScreenshotData extends MXDartClass {
  target: RenderObject;
  containerLayer: OffsetLayer;
  foundTarget: boolean;
  includeInScreenshot: boolean;
  includeInRegularContext: boolean;
  public constructor(namedParameters: { target?: RenderObject } = {}) {
    super();
    this.target = namedParameters.target;
    this.className = '_ScreenshotData';
  }
}
export { _ScreenshotData };
class _ScreenshotPaintingContext extends PaintingContext {
  data: _ScreenshotData;
  screenshotCurrentLayer: PictureLayer;
  screenshotRecorder: PictureRecorder;
  screenshotCanvas: Canvas;
  multicastCanvas: _MulticastCanvas;
  public constructor(
    namedParameters: { containerLayer?: ContainerLayer; estimatedBounds?: Rect; screenshotData?: _ScreenshotData } = {},
  ) {
    super();
    this.containerLayer = namedParameters.containerLayer;
    this.estimatedBounds = namedParameters.estimatedBounds;
    this['screenshotData'] = namedParameters.screenshotData;
    this.className = '_ScreenshotPaintingContext';
  }
}
export { _ScreenshotPaintingContext };
class _DiagnosticsPathNode extends MXDartClass {
  node: any;
  children: Array<any>;
  childIndex: number;
  public constructor(namedParameters: { node?: any; children?: Array<any>; childIndex?: number } = {}) {
    super();
    this.node = namedParameters.node;
    this.children = namedParameters.children;
    this.childIndex = namedParameters.childIndex;
    this.className = '_DiagnosticsPathNode';
  }
}
export { _DiagnosticsPathNode };
class _InspectorReferenceData extends MXDartClass {
  object: any;
  count: number;
  public constructor(object?: any) {
    super();
    this.object = object;
    this.className = '_InspectorReferenceData';
  }
}
export { _InspectorReferenceData };
class _WidgetInspectorService extends MXDartClass {}
export { _WidgetInspectorService };
abstract class WidgetInspectorService extends MXDartClass {
  serializeRing: Array<any>;
  serializeRingIndex: number;
  selection: InspectorSelection;
  selectionChangedCallback: any;
  groups: Map<any, any>;
  idToReferenceData: Map<any, any>;
  objectToId: Map<any, any>;
  nextId: number;
  pubRootDirectories: Array<any>;
  trackRebuildDirtyWidgets: boolean;
  trackRepaintWidgets: boolean;
  structuredExceptionHandler: any;
  registerServiceExtensionCallback: any;
  errorsSinceReload: number;
  widgetCreationTracked: boolean;
  frameStart: Duration;
  rebuildStats: _ElementLocationStatsTracker;
  repaintStats: _ElementLocationStatsTracker;
  static instance(instance?: WidgetInspectorService) {
    var jsObj = new MXDartClass();
    jsObj['instance'] = instance;
    jsObj.className = 'WidgetInspectorService';
    jsObj['constructorName'] = 'instance';
    return jsObj;
  }
}
export { WidgetInspectorService };
class _LocationCount extends MXDartClass {
  id: number;
  local: boolean;
  location: _Location;
  count: number;
  public constructor(namedParameters: { location?: _Location; id?: number; local?: boolean } = {}) {
    super();
    this.location = namedParameters.location;
    this.id = namedParameters.id;
    this.local = namedParameters.local;
    this.className = '_LocationCount';
  }
}
export { _LocationCount };
class _ElementLocationStatsTracker extends MXDartClass {
  stats: Array<any>;
  active: Array<any>;
  newLocations: Array<any>;
}
export { _ElementLocationStatsTracker };
class _WidgetForTypeTests extends Widget {}
export { _WidgetForTypeTests };
class WidgetInspector extends StatefulWidget$ {
  child: MXWidget;
  selectButtonBuilder: any;
  public constructor(namedParameters: { key?: Key; child?: MXWidget; selectButtonBuilder?: any } = {}) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.selectButtonBuilder = namedParameters.selectButtonBuilder;
    this.className = 'WidgetInspector';
  }
}
export { WidgetInspector };
class _WidgetInspectorState extends State$ {
  lastPointerLocation: Offset;
  selection: InspectorSelection;
  isSelectMode: boolean;
  ignorePointerKey: GlobalKey;
  selectionChangedCallback: any;
}
export { _WidgetInspectorState };
class InspectorSelection extends MXDartClass {
  candidates: Array<any>;
  index: number;
  current: RenderObject;
  currentElement: Element$;
}
export { InspectorSelection };
class _InspectorOverlay extends LeafRenderObjectWidget {
  selection: InspectorSelection;
  public constructor(namedParameters: { key?: Key; selection?: InspectorSelection } = {}) {
    super();
    this.key = namedParameters.key;
    this.selection = namedParameters.selection;
    this.className = '_InspectorOverlay';
  }
}
export { _InspectorOverlay };
class _RenderInspectorOverlay extends RenderBox {
  selection: InspectorSelection;
  public constructor(namedParameters: { selection?: InspectorSelection } = {}) {
    super();
    this.selection = namedParameters.selection;
    this.className = '_RenderInspectorOverlay';
  }
}
export { _RenderInspectorOverlay };
class _TransformedRect extends MXDartClass {
  rect: Rect;
  transform: Matrix4;
  public constructor(object?: RenderObject) {
    super();
    this['object'] = object;
    this.className = '_TransformedRect';
  }
}
export { _TransformedRect };
class _InspectorOverlayRenderState extends MXDartClass {
  overlayRect: Rect;
  selected: _TransformedRect;
  candidates: Array<any>;
  tooltip: string;
  textDirection: TextDirection;
  public constructor(
    namedParameters: {
      overlayRect?: Rect;
      selected?: _TransformedRect;
      candidates?: Array<any>;
      tooltip?: string;
      textDirection?: TextDirection;
    } = {},
  ) {
    super();
    this.overlayRect = namedParameters.overlayRect;
    this.selected = namedParameters.selected;
    this.candidates = namedParameters.candidates;
    this.tooltip = namedParameters.tooltip;
    this.textDirection = namedParameters.textDirection;
    this.className = '_InspectorOverlayRenderState';
  }
}
export { _InspectorOverlayRenderState };
class _InspectorOverlayLayer extends Layer {
  selection: InspectorSelection;
  overlayRect: Rect;
  lastState: _InspectorOverlayRenderState;
  picture: Picture;
  textPainter: TextPainter;
  textPainterMaxWidth: number;
  public constructor(namedParameters: { overlayRect?: Rect; selection?: InspectorSelection } = {}) {
    super();
    this.overlayRect = namedParameters.overlayRect;
    this.selection = namedParameters.selection;
    this.className = '_InspectorOverlayLayer';
  }
}
export { _InspectorOverlayLayer };
abstract class _HasCreationLocation extends MXDartClass {}
export { _HasCreationLocation };
class _Location extends MXDartClass {
  file: string;
  line: number;
  column: number;
  name: string;
  parameterLocations: Array<any>;
  public constructor(
    namedParameters: {
      file?: string;
      line?: number;
      column?: number;
      name?: string;
      parameterLocations?: Array<any>;
    } = {},
  ) {
    super();
    this.file = namedParameters.file;
    this.line = namedParameters.line;
    this.column = namedParameters.column;
    this.name = namedParameters.name;
    this.parameterLocations = namedParameters.parameterLocations;
    this.className = '_Location';
  }
}
export { _Location };
class InspectorSerializationDelegate extends MXDartClass {
  service: WidgetInspectorService;
  groupName: string;
  summaryTree: boolean;
  maxDescendentsTruncatableNode: number;
  includeProperties: boolean;
  subtreeDepth: number;
  expandPropertyValues: boolean;
  addAdditionalPropertiesCallback: any;
  nodesCreatedByLocalProject: Array<any>;
  public constructor(
    namedParameters: {
      groupName?: string;
      summaryTree?: boolean;
      maxDescendentsTruncatableNode?: number;
      expandPropertyValues?: boolean;
      subtreeDepth?: number;
      includeProperties?: boolean;
      service?: WidgetInspectorService;
      addAdditionalPropertiesCallback?: any;
    } = {},
  ) {
    super();
    this.groupName = namedParameters.groupName;
    this.summaryTree = namedParameters.summaryTree;
    this.maxDescendentsTruncatableNode = namedParameters.maxDescendentsTruncatableNode;
    this.expandPropertyValues = namedParameters.expandPropertyValues;
    this.subtreeDepth = namedParameters.subtreeDepth;
    this.includeProperties = namedParameters.includeProperties;
    this.service = namedParameters.service;
    this.addAdditionalPropertiesCallback = namedParameters.addAdditionalPropertiesCallback;
    this.className = 'InspectorSerializationDelegate';
  }
}
export { InspectorSerializationDelegate };
