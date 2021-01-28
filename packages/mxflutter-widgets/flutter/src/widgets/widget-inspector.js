//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { RenderBox } from '../rendering/box';
import { Widget, StatefulWidget$, State$, LeafRenderObjectWidget } from './framework';
import { PaintingContext } from '../rendering/object';
import { Layer, OffsetLayer } from '../rendering/layer';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class _ProxyLayer extends Layer {
    constructor(_layer) {
        super();
        this.layer = _layer;
        this.className = '_ProxyLayer';
    }
}
export { _ProxyLayer };
class _MulticastCanvas extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.main = namedParameters.main;
        this.screenshot = namedParameters.screenshot;
        this.className = '_MulticastCanvas';
    }
}
export { _MulticastCanvas };
class _ScreenshotContainerLayer extends OffsetLayer {
}
export { _ScreenshotContainerLayer };
class _ScreenshotData extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.target = namedParameters.target;
        this.className = '_ScreenshotData';
    }
}
export { _ScreenshotData };
class _ScreenshotPaintingContext extends PaintingContext {
    constructor(namedParameters = {}) {
        super();
        this.containerLayer = namedParameters.containerLayer;
        this.estimatedBounds = namedParameters.estimatedBounds;
        this['screenshotData'] = namedParameters.screenshotData;
        this.className = '_ScreenshotPaintingContext';
    }
}
export { _ScreenshotPaintingContext };
class _DiagnosticsPathNode extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.node = namedParameters.node;
        this.children = namedParameters.children;
        this.childIndex = namedParameters.childIndex;
        this.className = '_DiagnosticsPathNode';
    }
}
export { _DiagnosticsPathNode };
class _InspectorReferenceData extends MXDartClass {
    constructor(object) {
        super();
        this.object = object;
        this.className = '_InspectorReferenceData';
    }
}
export { _InspectorReferenceData };
class _WidgetInspectorService extends MXDartClass {
}
export { _WidgetInspectorService };
class WidgetInspectorService extends MXDartClass {
    static instance(instance) {
        var jsObj = new MXDartClass();
        jsObj['instance'] = instance;
        jsObj.className = 'WidgetInspectorService';
        jsObj['constructorName'] = 'instance';
        return jsObj;
    }
}
export { WidgetInspectorService };
class _LocationCount extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.location = namedParameters.location;
        this.id = namedParameters.id;
        this.local = namedParameters.local;
        this.className = '_LocationCount';
    }
}
export { _LocationCount };
class _ElementLocationStatsTracker extends MXDartClass {
}
export { _ElementLocationStatsTracker };
class _WidgetForTypeTests extends Widget {
}
export { _WidgetForTypeTests };
class WidgetInspector extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.selectButtonBuilder = namedParameters.selectButtonBuilder;
        this.className = 'WidgetInspector';
    }
}
export { WidgetInspector };
class _WidgetInspectorState extends State$ {
}
export { _WidgetInspectorState };
class InspectorSelection extends MXDartClass {
}
export { InspectorSelection };
class _InspectorOverlay extends LeafRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.selection = namedParameters.selection;
        this.className = '_InspectorOverlay';
    }
}
export { _InspectorOverlay };
class _RenderInspectorOverlay extends RenderBox {
    constructor(namedParameters = {}) {
        super();
        this.selection = namedParameters.selection;
        this.className = '_RenderInspectorOverlay';
    }
}
export { _RenderInspectorOverlay };
class _TransformedRect extends MXDartClass {
    constructor(object) {
        super();
        this['object'] = object;
        this.className = '_TransformedRect';
    }
}
export { _TransformedRect };
class _InspectorOverlayRenderState extends MXDartClass {
    constructor(namedParameters = {}) {
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
    constructor(namedParameters = {}) {
        super();
        this.overlayRect = namedParameters.overlayRect;
        this.selection = namedParameters.selection;
        this.className = '_InspectorOverlayLayer';
    }
}
export { _InspectorOverlayLayer };
class _HasCreationLocation extends MXDartClass {
}
export { _HasCreationLocation };
class _Location extends MXDartClass {
    constructor(namedParameters = {}) {
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
    constructor(namedParameters = {}) {
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
