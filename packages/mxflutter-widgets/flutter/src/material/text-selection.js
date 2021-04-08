"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._MaterialTextSelectionControls = exports._TextSelectionHandlePainter = exports._TextSelectionToolbarLayout = exports._TextSelectionToolbarItemsRenderBox = exports._TextSelectionToolbarItemsElement = exports._TextSelectionToolbarItems = exports._TextSelectionToolbarContainerRenderBox = exports._TextSelectionToolbarContainer = exports._TextSelectionToolbarState = exports._ItemData = exports._TextSelectionToolbar = void 0;
const custom_paint_1 = require("../rendering/custom-paint");
const shifted_box_1 = require("../rendering/shifted-box");
const box_1 = require("../rendering/box");
const proxy_box_1 = require("../rendering/proxy-box");
const text_selection_1 = require("../widgets/text-selection");
const framework_1 = require("../widgets/framework");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class _TextSelectionToolbar extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.clipboardStatus = namedParameters.clipboardStatus;
        this.key = namedParameters.key;
        this.handleCut = namedParameters.handleCut;
        this.handleCopy = namedParameters.handleCopy;
        this.handlePaste = namedParameters.handlePaste;
        this.handleSelectAll = namedParameters.handleSelectAll;
        this.isAbove = namedParameters.isAbove;
        this.className = '_TextSelectionToolbar';
    }
}
exports._TextSelectionToolbar = _TextSelectionToolbar;
class _ItemData extends mxflutter_base_1.MXDartClass {
    constructor(onPressed, label) {
        super();
        this.onPressed = onPressed;
        this.label = label;
        this.className = '_ItemData';
    }
}
exports._ItemData = _ItemData;
class _TextSelectionToolbarState extends framework_1.State {
}
exports._TextSelectionToolbarState = _TextSelectionToolbarState;
class _TextSelectionToolbarContainer extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.overflowOpen = namedParameters.overflowOpen;
        this.className = '_TextSelectionToolbarContainer';
    }
}
exports._TextSelectionToolbarContainer = _TextSelectionToolbarContainer;
class _TextSelectionToolbarContainerRenderBox extends proxy_box_1.RenderProxyBox {
    constructor(namedParameters = {}) {
        super();
        this.overflowOpen = namedParameters.overflowOpen;
        this.className = '_TextSelectionToolbarContainerRenderBox';
    }
}
exports._TextSelectionToolbarContainerRenderBox = _TextSelectionToolbarContainerRenderBox;
class _TextSelectionToolbarItems extends framework_1.MultiChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.isAbove = namedParameters.isAbove;
        this.overflowOpen = namedParameters.overflowOpen;
        this.children = namedParameters.children;
        this.className = '_TextSelectionToolbarItems';
    }
}
exports._TextSelectionToolbarItems = _TextSelectionToolbarItems;
class _TextSelectionToolbarItemsElement extends framework_1.MultiChildRenderObjectElement {
    constructor(widget) {
        super();
        this['widget'] = widget;
        this.className = '_TextSelectionToolbarItemsElement';
    }
}
exports._TextSelectionToolbarItemsElement = _TextSelectionToolbarItemsElement;
class _TextSelectionToolbarItemsRenderBox extends box_1.RenderBox {
    constructor(namedParameters = {}) {
        super();
        this.isAbove = namedParameters.isAbove;
        this.overflowOpen = namedParameters.overflowOpen;
        this.className = '_TextSelectionToolbarItemsRenderBox';
    }
}
exports._TextSelectionToolbarItemsRenderBox = _TextSelectionToolbarItemsRenderBox;
class _TextSelectionToolbarLayout extends shifted_box_1.SingleChildLayoutDelegate {
    constructor(anchor, upperBounds, fitsAbove) {
        super();
        this.anchor = anchor;
        this.upperBounds = upperBounds;
        this.fitsAbove = fitsAbove;
        this.className = '_TextSelectionToolbarLayout';
    }
}
exports._TextSelectionToolbarLayout = _TextSelectionToolbarLayout;
class _TextSelectionHandlePainter extends custom_paint_1.CustomPainter {
    constructor(namedParameters = {}) {
        super();
        this.color = namedParameters.color;
        this.className = '_TextSelectionHandlePainter';
    }
}
exports._TextSelectionHandlePainter = _TextSelectionHandlePainter;
class _MaterialTextSelectionControls extends text_selection_1.TextSelectionControls {
}
exports._MaterialTextSelectionControls = _MaterialTextSelectionControls;
