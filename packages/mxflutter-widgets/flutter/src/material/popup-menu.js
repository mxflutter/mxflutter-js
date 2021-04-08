"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopupMenuButtonState = exports.PopupMenuButton = exports._PopupMenuRoute = exports._PopupMenuRouteLayout = exports._PopupMenu = exports._CheckedPopupMenuItemState = exports.CheckedPopupMenuItem = exports.PopupMenuItemState = exports.PopupMenuItem = exports._RenderMenuItem = exports._MenuItem = exports._PopupMenuDividerState = exports.PopupMenuDivider = exports.PopupMenuEntry = void 0;
const routes_1 = require("../widgets/routes");
const shifted_box_1 = require("../rendering/shifted-box");
const framework_1 = require("../widgets/framework");
class PopupMenuEntry extends framework_1.StatefulWidget {
}
exports.PopupMenuEntry = PopupMenuEntry;
class PopupMenuDivider extends PopupMenuEntry {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.height = namedParameters.height;
        this.className = 'PopupMenuDivider';
    }
}
exports.PopupMenuDivider = PopupMenuDivider;
class _PopupMenuDividerState extends framework_1.State {
}
exports._PopupMenuDividerState = _PopupMenuDividerState;
class _MenuItem extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.onLayout = namedParameters.onLayout;
        this.child = namedParameters.child;
        this.className = '_MenuItem';
    }
}
exports._MenuItem = _MenuItem;
class _RenderMenuItem extends shifted_box_1.RenderShiftedBox {
    constructor(onLayout, child) {
        super();
        this.onLayout = onLayout;
        this['child'] = child;
        this.className = '_RenderMenuItem';
    }
}
exports._RenderMenuItem = _RenderMenuItem;
class PopupMenuItem extends PopupMenuEntry {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.value = namedParameters.value;
        this.enabled = namedParameters.enabled;
        this.height = namedParameters.height;
        this.textStyle = namedParameters.textStyle;
        this.mouseCursor = namedParameters.mouseCursor;
        this.child = namedParameters.child;
        this.className = 'PopupMenuItem';
    }
}
exports.PopupMenuItem = PopupMenuItem;
class PopupMenuItemState extends framework_1.State {
}
exports.PopupMenuItemState = PopupMenuItemState;
class CheckedPopupMenuItem extends PopupMenuItem {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.value = namedParameters.value;
        this.checked = namedParameters.checked;
        this.enabled = namedParameters.enabled;
        this.child = namedParameters.child;
        this.className = 'CheckedPopupMenuItem';
    }
}
exports.CheckedPopupMenuItem = CheckedPopupMenuItem;
class _CheckedPopupMenuItemState extends PopupMenuItemState {
}
exports._CheckedPopupMenuItemState = _CheckedPopupMenuItemState;
class _PopupMenu extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.route = namedParameters.route;
        this.semanticLabel = namedParameters.semanticLabel;
        this.className = '_PopupMenu';
    }
}
exports._PopupMenu = _PopupMenu;
class _PopupMenuRouteLayout extends shifted_box_1.SingleChildLayoutDelegate {
    constructor(position, itemSizes, selectedItemIndex, textDirection) {
        super();
        this.position = position;
        this.itemSizes = itemSizes;
        this.selectedItemIndex = selectedItemIndex;
        this.textDirection = textDirection;
        this.className = '_PopupMenuRouteLayout';
    }
}
exports._PopupMenuRouteLayout = _PopupMenuRouteLayout;
class _PopupMenuRoute extends routes_1.PopupRoute {
    constructor(namedParameters = {}) {
        super();
        this.position = namedParameters.position;
        this.items = namedParameters.items;
        this.initialValue = namedParameters.initialValue;
        this.elevation = namedParameters.elevation;
        this.theme = namedParameters.theme;
        this.popupMenuTheme = namedParameters.popupMenuTheme;
        this.barrierLabel = namedParameters.barrierLabel;
        this.semanticLabel = namedParameters.semanticLabel;
        this.shape = namedParameters.shape;
        this.color = namedParameters.color;
        this.showMenuContext = namedParameters.showMenuContext;
        this.captureInheritedThemes = namedParameters.captureInheritedThemes;
        this.className = '_PopupMenuRoute';
    }
}
exports._PopupMenuRoute = _PopupMenuRoute;
class PopupMenuButton extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.itemBuilder = namedParameters.itemBuilder;
        this.initialValue = namedParameters.initialValue;
        this.onSelected = namedParameters.onSelected;
        this.onCanceled = namedParameters.onCanceled;
        this.tooltip = namedParameters.tooltip;
        this.elevation = namedParameters.elevation;
        this.padding = namedParameters.padding;
        this.child = namedParameters.child;
        this.icon = namedParameters.icon;
        this.offset = namedParameters.offset;
        this.enabled = namedParameters.enabled;
        this.shape = namedParameters.shape;
        this.color = namedParameters.color;
        this.captureInheritedThemes = namedParameters.captureInheritedThemes;
        this.className = 'PopupMenuButton';
        // MX Modified begin
        this['children'] = [];
        // MX Modified end
    }
    // MX modified begin
    preBuild(buildContext) {
        if (this.itemBuilder) {
            this['children'] = this.itemBuilder(buildContext);
            delete this.itemBuilder;
        }
    }
}
exports.PopupMenuButton = PopupMenuButton;
class PopupMenuButtonState extends framework_1.State {
}
exports.PopupMenuButtonState = PopupMenuButtonState;
