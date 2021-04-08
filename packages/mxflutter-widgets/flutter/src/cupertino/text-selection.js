"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._CupertinoTextSelectionToolbarItemsSlot = exports._CupertinoTextSelectionToolbarItemsRenderBox = exports._CupertinoTextSelectionToolbarItemsElement = exports._CupertinoTextSelectionToolbarItems = exports._CupertinoTextSelectionToolbarContentState = exports._CupertinoTextSelectionToolbarContent = exports._CupertinoTextSelectionControls = exports._TextSelectionHandlePainter = exports._ToolbarRenderBox = exports._ToolbarParentData = exports.CupertinoTextSelectionToolbar = exports._CupertinoTextSelectionToolbarWrapperState = exports._CupertinoTextSelectionToolbarWrapper = void 0;
const custom_paint_1 = require("../rendering/custom-paint");
const shifted_box_1 = require("../rendering/shifted-box");
const box_1 = require("../rendering/box");
const text_selection_1 = require("../widgets/text-selection");
const framework_1 = require("../widgets/framework");
class _CupertinoTextSelectionToolbarWrapper extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.arrowTipX = namedParameters.arrowTipX;
        this.barTopY = namedParameters.barTopY;
        this.clipboardStatus = namedParameters.clipboardStatus;
        this.handleCut = namedParameters.handleCut;
        this.handleCopy = namedParameters.handleCopy;
        this.handlePaste = namedParameters.handlePaste;
        this.handleSelectAll = namedParameters.handleSelectAll;
        this.isArrowPointingDown = namedParameters.isArrowPointingDown;
        this.className = '_CupertinoTextSelectionToolbarWrapper';
    }
}
exports._CupertinoTextSelectionToolbarWrapper = _CupertinoTextSelectionToolbarWrapper;
class _CupertinoTextSelectionToolbarWrapperState extends framework_1.State {
}
exports._CupertinoTextSelectionToolbarWrapperState = _CupertinoTextSelectionToolbarWrapperState;
class CupertinoTextSelectionToolbar extends framework_1.SingleChildRenderObjectWidget {
}
exports.CupertinoTextSelectionToolbar = CupertinoTextSelectionToolbar;
class _ToolbarParentData extends box_1.BoxParentData {
}
exports._ToolbarParentData = _ToolbarParentData;
class _ToolbarRenderBox extends shifted_box_1.RenderShiftedBox {
    constructor(_barTopY, _arrowTipX, _isArrowPointingDown, child) {
        super();
        this.barTopY = _barTopY;
        this.arrowTipX = _arrowTipX;
        this.isArrowPointingDown = _isArrowPointingDown;
        this['child'] = child;
        this.className = '_ToolbarRenderBox';
    }
}
exports._ToolbarRenderBox = _ToolbarRenderBox;
class _TextSelectionHandlePainter extends custom_paint_1.CustomPainter {
    constructor(color) {
        super();
        this.color = color;
        this.className = '_TextSelectionHandlePainter';
    }
}
exports._TextSelectionHandlePainter = _TextSelectionHandlePainter;
class _CupertinoTextSelectionControls extends text_selection_1.TextSelectionControls {
}
exports._CupertinoTextSelectionControls = _CupertinoTextSelectionControls;
class _CupertinoTextSelectionToolbarContent extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.children = namedParameters.children;
        this.isArrowPointingDown = namedParameters.isArrowPointingDown;
        this.className = '_CupertinoTextSelectionToolbarContent';
    }
}
exports._CupertinoTextSelectionToolbarContent = _CupertinoTextSelectionToolbarContent;
class _CupertinoTextSelectionToolbarContentState extends framework_1.State {
}
exports._CupertinoTextSelectionToolbarContentState = _CupertinoTextSelectionToolbarContentState;
class _CupertinoTextSelectionToolbarItems extends framework_1.RenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.page = namedParameters.page;
        this.children = namedParameters.children;
        this.backButton = namedParameters.backButton;
        this.dividerWidth = namedParameters.dividerWidth;
        this.nextButton = namedParameters.nextButton;
        this.nextButtonDisabled = namedParameters.nextButtonDisabled;
        this.className = '_CupertinoTextSelectionToolbarItems';
    }
}
exports._CupertinoTextSelectionToolbarItems = _CupertinoTextSelectionToolbarItems;
class _CupertinoTextSelectionToolbarItemsElement extends framework_1.RenderObjectElement {
    constructor(widget) {
        super();
        this['mx_widget'] = widget;
        this.className = '_CupertinoTextSelectionToolbarItemsElement';
    }
}
exports._CupertinoTextSelectionToolbarItemsElement = _CupertinoTextSelectionToolbarItemsElement;
class _CupertinoTextSelectionToolbarItemsRenderBox extends box_1.RenderBox {
    constructor(namedParameters = {}) {
        super();
        this.dividerWidth = namedParameters.dividerWidth;
        this.page = namedParameters.page;
        this.className = '_CupertinoTextSelectionToolbarItemsRenderBox';
    }
}
exports._CupertinoTextSelectionToolbarItemsRenderBox = _CupertinoTextSelectionToolbarItemsRenderBox;
var _CupertinoTextSelectionToolbarItemsSlot;
(function (_CupertinoTextSelectionToolbarItemsSlot) {
    _CupertinoTextSelectionToolbarItemsSlot["backButton"] = "{ \"_name\": \"_CupertinoTextSelectionToolbarItemsSlot.backButton\", \"index\": 0 }";
    _CupertinoTextSelectionToolbarItemsSlot["nextButton"] = "{ \"_name\": \"_CupertinoTextSelectionToolbarItemsSlot.nextButton\", \"index\": 1 }";
    _CupertinoTextSelectionToolbarItemsSlot["nextButtonDisabled"] = "{ \"_name\": \"_CupertinoTextSelectionToolbarItemsSlot.nextButtonDisabled\", \"index\": 2 }";
})(_CupertinoTextSelectionToolbarItemsSlot || (_CupertinoTextSelectionToolbarItemsSlot = {}));
exports._CupertinoTextSelectionToolbarItemsSlot = _CupertinoTextSelectionToolbarItemsSlot;
;
