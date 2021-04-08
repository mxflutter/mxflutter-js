"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.InspectorSerializationDelegate = exports._Location = exports._HasCreationLocation = exports._InspectorOverlayLayer = exports._InspectorOverlayRenderState = exports._TransformedRect = exports._RenderInspectorOverlay = exports._InspectorOverlay = exports.InspectorSelection = exports._WidgetInspectorState = exports.WidgetInspector = exports._WidgetForTypeTests = exports._ElementLocationStatsTracker = exports._LocationCount = exports.WidgetInspectorService = exports._WidgetInspectorService = exports._InspectorReferenceData = exports._DiagnosticsPathNode = exports._ScreenshotPaintingContext = exports._ScreenshotData = exports._ScreenshotContainerLayer = exports._MulticastCanvas = exports._ProxyLayer = void 0;
const box_1 = require("../rendering/box");
const framework_1 = require("./framework");
const object_1 = require("../rendering/object");
const layer_1 = require("../rendering/layer");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class _ProxyLayer extends layer_1.Layer {
    constructor(_layer) {
        super();
        this.layer = _layer;
        this.className = '_ProxyLayer';
    }
}
exports._ProxyLayer = _ProxyLayer;
class _MulticastCanvas extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.main = namedParameters.main;
        this.screenshot = namedParameters.screenshot;
        this.className = '_MulticastCanvas';
    }
}
exports._MulticastCanvas = _MulticastCanvas;
class _ScreenshotContainerLayer extends layer_1.OffsetLayer {
}
exports._ScreenshotContainerLayer = _ScreenshotContainerLayer;
class _ScreenshotData extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.target = namedParameters.target;
        this.className = '_ScreenshotData';
    }
}
exports._ScreenshotData = _ScreenshotData;
class _ScreenshotPaintingContext extends object_1.PaintingContext {
    constructor(namedParameters = {}) {
        super();
        this.containerLayer = namedParameters.containerLayer;
        this.estimatedBounds = namedParameters.estimatedBounds;
        this['screenshotData'] = namedParameters.screenshotData;
        this.className = '_ScreenshotPaintingContext';
    }
}
exports._ScreenshotPaintingContext = _ScreenshotPaintingContext;
class _DiagnosticsPathNode extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.node = namedParameters.node;
        this.children = namedParameters.children;
        this.childIndex = namedParameters.childIndex;
        this.className = '_DiagnosticsPathNode';
    }
}
exports._DiagnosticsPathNode = _DiagnosticsPathNode;
class _InspectorReferenceData extends mxflutter_base_1.MXDartClass {
    constructor(object) {
        super();
        this.object = object;
        this.className = '_InspectorReferenceData';
    }
}
exports._InspectorReferenceData = _InspectorReferenceData;
class _WidgetInspectorService extends mxflutter_base_1.MXDartClass {
}
exports._WidgetInspectorService = _WidgetInspectorService;
class WidgetInspectorService extends mxflutter_base_1.MXDartClass {
    static instance(instance) {
        var jsObj = new mxflutter_base_1.MXDartClass();
        jsObj['instance'] = instance;
        jsObj.className = 'WidgetInspectorService';
        jsObj['constructorName'] = 'instance';
        return jsObj;
    }
}
exports.WidgetInspectorService = WidgetInspectorService;
class _LocationCount extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.location = namedParameters.location;
        this.id = namedParameters.id;
        this.local = namedParameters.local;
        this.className = '_LocationCount';
    }
}
exports._LocationCount = _LocationCount;
class _ElementLocationStatsTracker extends mxflutter_base_1.MXDartClass {
}
exports._ElementLocationStatsTracker = _ElementLocationStatsTracker;
class _WidgetForTypeTests extends framework_1.Widget {
}
exports._WidgetForTypeTests = _WidgetForTypeTests;
class WidgetInspector extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.selectButtonBuilder = namedParameters.selectButtonBuilder;
        this.className = 'WidgetInspector';
    }
}
exports.WidgetInspector = WidgetInspector;
class _WidgetInspectorState extends framework_1.State {
}
exports._WidgetInspectorState = _WidgetInspectorState;
class InspectorSelection extends mxflutter_base_1.MXDartClass {
}
exports.InspectorSelection = InspectorSelection;
class _InspectorOverlay extends framework_1.LeafRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.selection = namedParameters.selection;
        this.className = '_InspectorOverlay';
    }
}
exports._InspectorOverlay = _InspectorOverlay;
class _RenderInspectorOverlay extends box_1.RenderBox {
    constructor(namedParameters = {}) {
        super();
        this.selection = namedParameters.selection;
        this.className = '_RenderInspectorOverlay';
    }
}
exports._RenderInspectorOverlay = _RenderInspectorOverlay;
class _TransformedRect extends mxflutter_base_1.MXDartClass {
    constructor(object, ancestor) {
        super();
        this['object'] = object;
        this['ancestor'] = ancestor;
        this.className = '_TransformedRect';
    }
}
exports._TransformedRect = _TransformedRect;
class _InspectorOverlayRenderState extends mxflutter_base_1.MXDartClass {
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
exports._InspectorOverlayRenderState = _InspectorOverlayRenderState;
class _InspectorOverlayLayer extends layer_1.Layer {
    constructor(namedParameters = {}) {
        super();
        this.overlayRect = namedParameters.overlayRect;
        this.selection = namedParameters.selection;
        this.rootRenderObject = namedParameters.rootRenderObject;
        this.className = '_InspectorOverlayLayer';
    }
}
exports._InspectorOverlayLayer = _InspectorOverlayLayer;
class _HasCreationLocation extends mxflutter_base_1.MXDartClass {
}
exports._HasCreationLocation = _HasCreationLocation;
class _Location extends mxflutter_base_1.MXDartClass {
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
exports._Location = _Location;
class InspectorSerializationDelegate extends mxflutter_base_1.MXDartClass {
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
exports.InspectorSerializationDelegate = InspectorSerializationDelegate;
