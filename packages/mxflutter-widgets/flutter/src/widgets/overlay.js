"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._RenderTheatre = exports._TheatreElement = exports._Theatre = exports.OverlayState = exports.Overlay = exports._OverlayEntryWidgetState = exports._OverlayEntryWidget = exports.OverlayEntry = void 0;
const box_1 = require("../rendering/box");
const framework_1 = require("./framework");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class OverlayEntry extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.builder = namedParameters.builder;
        this.opaque = namedParameters.opaque;
        this.maintainState = namedParameters.maintainState;
        this.className = 'OverlayEntry';
    }
}
exports.OverlayEntry = OverlayEntry;
class _OverlayEntryWidget extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.entry = namedParameters.entry;
        this.tickerEnabled = namedParameters.tickerEnabled;
        this.className = '_OverlayEntryWidget';
    }
}
exports._OverlayEntryWidget = _OverlayEntryWidget;
class _OverlayEntryWidgetState extends framework_1.State {
}
exports._OverlayEntryWidgetState = _OverlayEntryWidgetState;
class Overlay extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.initialEntries = namedParameters.initialEntries;
        this.className = 'Overlay';
    }
}
exports.Overlay = Overlay;
class OverlayState extends framework_1.State {
}
exports.OverlayState = OverlayState;
class _Theatre extends framework_1.MultiChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.skipCount = namedParameters.skipCount;
        this.children = namedParameters.children;
        this.className = '_Theatre';
    }
}
exports._Theatre = _Theatre;
class _TheatreElement extends framework_1.MultiChildRenderObjectElement {
    constructor(widget) {
        super();
        this['widget'] = widget;
        this.className = '_TheatreElement';
    }
}
exports._TheatreElement = _TheatreElement;
class _RenderTheatre extends box_1.RenderBox {
    constructor(namedParameters = {}) {
        super();
        this['children'] = namedParameters.children;
        this.textDirection = namedParameters.textDirection;
        this.skipCount = namedParameters.skipCount;
        this.className = '_RenderTheatre';
    }
}
exports._RenderTheatre = _RenderTheatre;
