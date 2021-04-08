import { TextPainter } from '../painting/text-painter';
import { Matrix4 } from '../../../vector-math-64';
import { RenderBox } from '../rendering/box';
import { Key } from '../foundation/key';
import { Widget, StatefulWidget, State, GlobalKey, Element, LeafRenderObjectWidget } from './framework';
import { Duration } from '../../../mx-dart-sdk';
import { RenderObject, PaintingContext } from '../rendering/object';
import { Canvas, PictureRecorder, Rect, Offset, TextDirection, Picture } from '../../../mx-dart-sdk';
import { Layer, OffsetLayer, PictureLayer, ContainerLayer } from '../rendering/layer';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare class _ProxyLayer extends Layer {
    layer: Layer;
    constructor(_layer?: Layer);
}
export { _ProxyLayer };
declare class _MulticastCanvas extends MXDartClass {
    main: Canvas;
    screenshot: Canvas;
    constructor(namedParameters?: {
        main?: Canvas;
        screenshot?: Canvas;
    });
}
export { _MulticastCanvas };
declare class _ScreenshotContainerLayer extends OffsetLayer {
}
export { _ScreenshotContainerLayer };
declare class _ScreenshotData extends MXDartClass {
    target: RenderObject;
    containerLayer: OffsetLayer;
    foundTarget: boolean;
    includeInScreenshot: boolean;
    includeInRegularContext: boolean;
    constructor(namedParameters?: {
        target?: RenderObject;
    });
}
export { _ScreenshotData };
declare class _ScreenshotPaintingContext extends PaintingContext {
    data: _ScreenshotData;
    screenshotCurrentLayer: PictureLayer;
    screenshotRecorder: PictureRecorder;
    screenshotCanvas: Canvas;
    multicastCanvas: _MulticastCanvas;
    constructor(namedParameters?: {
        containerLayer?: ContainerLayer;
        estimatedBounds?: Rect;
        screenshotData?: _ScreenshotData;
    });
}
export { _ScreenshotPaintingContext };
declare class _DiagnosticsPathNode extends MXDartClass {
    node: any;
    children: Array<any>;
    childIndex: number;
    constructor(namedParameters?: {
        node?: any;
        children?: Array<any>;
        childIndex?: number;
    });
}
export { _DiagnosticsPathNode };
declare class _InspectorReferenceData extends MXDartClass {
    object: any;
    count: number;
    constructor(object?: any);
}
export { _InspectorReferenceData };
declare class _WidgetInspectorService extends MXDartClass {
}
export { _WidgetInspectorService };
declare abstract class WidgetInspectorService extends MXDartClass {
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
    static instance(instance?: WidgetInspectorService): MXDartClass;
}
export { WidgetInspectorService };
declare class _LocationCount extends MXDartClass {
    id: number;
    local: boolean;
    location: _Location;
    count: number;
    constructor(namedParameters?: {
        location?: _Location;
        id?: number;
        local?: boolean;
    });
}
export { _LocationCount };
declare class _ElementLocationStatsTracker extends MXDartClass {
    stats: Array<any>;
    active: Array<any>;
    newLocations: Array<any>;
}
export { _ElementLocationStatsTracker };
declare class _WidgetForTypeTests extends Widget {
}
export { _WidgetForTypeTests };
declare class WidgetInspector extends StatefulWidget {
    child: MXWidget;
    selectButtonBuilder: any;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        selectButtonBuilder?: any;
    });
}
export { WidgetInspector };
declare class _WidgetInspectorState extends State {
    lastPointerLocation: Offset;
    selection: InspectorSelection;
    isSelectMode: boolean;
    ignorePointerKey: GlobalKey;
    selectionChangedCallback: any;
}
export { _WidgetInspectorState };
declare class InspectorSelection extends MXDartClass {
    candidates: Array<any>;
    index: number;
    current: RenderObject;
    currentElement: Element;
}
export { InspectorSelection };
declare class _InspectorOverlay extends LeafRenderObjectWidget {
    selection: InspectorSelection;
    constructor(namedParameters?: {
        key?: Key;
        selection?: InspectorSelection;
    });
}
export { _InspectorOverlay };
declare class _RenderInspectorOverlay extends RenderBox {
    selection: InspectorSelection;
    constructor(namedParameters?: {
        selection?: InspectorSelection;
    });
}
export { _RenderInspectorOverlay };
declare class _TransformedRect extends MXDartClass {
    rect: Rect;
    transform: Matrix4;
    constructor(object?: RenderObject, ancestor?: RenderObject);
}
export { _TransformedRect };
declare class _InspectorOverlayRenderState extends MXDartClass {
    overlayRect: Rect;
    selected: _TransformedRect;
    candidates: Array<any>;
    tooltip: string;
    textDirection: TextDirection;
    constructor(namedParameters?: {
        overlayRect?: Rect;
        selected?: _TransformedRect;
        candidates?: Array<any>;
        tooltip?: string;
        textDirection?: TextDirection;
    });
}
export { _InspectorOverlayRenderState };
declare class _InspectorOverlayLayer extends Layer {
    selection: InspectorSelection;
    overlayRect: Rect;
    rootRenderObject: RenderObject;
    lastState: _InspectorOverlayRenderState;
    picture: Picture;
    textPainter: TextPainter;
    textPainterMaxWidth: number;
    constructor(namedParameters?: {
        overlayRect?: Rect;
        selection?: InspectorSelection;
        rootRenderObject?: RenderObject;
    });
}
export { _InspectorOverlayLayer };
declare abstract class _HasCreationLocation extends MXDartClass {
}
export { _HasCreationLocation };
declare class _Location extends MXDartClass {
    file: string;
    line: number;
    column: number;
    name: string;
    parameterLocations: Array<any>;
    constructor(namedParameters?: {
        file?: string;
        line?: number;
        column?: number;
        name?: string;
        parameterLocations?: Array<any>;
    });
}
export { _Location };
declare class InspectorSerializationDelegate extends MXDartClass {
    service: WidgetInspectorService;
    groupName: string;
    summaryTree: boolean;
    maxDescendentsTruncatableNode: number;
    includeProperties: boolean;
    subtreeDepth: number;
    expandPropertyValues: boolean;
    addAdditionalPropertiesCallback: any;
    nodesCreatedByLocalProject: Array<any>;
    constructor(namedParameters?: {
        groupName?: string;
        summaryTree?: boolean;
        maxDescendentsTruncatableNode?: number;
        expandPropertyValues?: boolean;
        subtreeDepth?: number;
        includeProperties?: boolean;
        service?: WidgetInspectorService;
        addAdditionalPropertiesCallback?: any;
    });
}
export { InspectorSerializationDelegate };
