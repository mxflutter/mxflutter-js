"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._DropdownButtonFormFieldState = exports.DropdownButtonFormField = exports._DropdownButtonState = exports.DropdownButton = exports.DropdownButtonHideUnderline = exports.DropdownMenuItem = exports._DropdownMenuItemContainer = exports._RenderMenuItem = exports._MenuItem = exports._DropdownRoutePage = exports._DropdownRoute = exports._MenuLimits = exports._DropdownRouteResult = exports._DropdownMenuRouteLayout = exports._DropdownMenuState = exports._DropdownMenu = exports._DropdownMenuItemButtonState = exports._DropdownMenuItemButton = exports._DropdownScrollBehavior = exports._DropdownMenuPainter = void 0;
const form_1 = require("../widgets/form");
const proxy_box_1 = require("../rendering/proxy-box");
const routes_1 = require("../widgets/routes");
const shifted_box_1 = require("../rendering/shifted-box");
const framework_1 = require("../widgets/framework");
const scroll_configuration_1 = require("../widgets/scroll-configuration");
const custom_paint_1 = require("../rendering/custom-paint");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class _DropdownMenuPainter extends custom_paint_1.CustomPainter {
    constructor(namedParameters = {}) {
        super();
        this.color = namedParameters.color;
        this.elevation = namedParameters.elevation;
        this.selectedIndex = namedParameters.selectedIndex;
        this.resize = namedParameters.resize;
        this.getSelectedItemOffset = namedParameters.getSelectedItemOffset;
        this.className = '_DropdownMenuPainter';
    }
}
exports._DropdownMenuPainter = _DropdownMenuPainter;
class _DropdownScrollBehavior extends scroll_configuration_1.ScrollBehavior {
}
exports._DropdownScrollBehavior = _DropdownScrollBehavior;
class _DropdownMenuItemButton extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.padding = namedParameters.padding;
        this.route = namedParameters.route;
        this.buttonRect = namedParameters.buttonRect;
        this.constraints = namedParameters.constraints;
        this.itemIndex = namedParameters.itemIndex;
        this.className = '_DropdownMenuItemButton';
    }
}
exports._DropdownMenuItemButton = _DropdownMenuItemButton;
class _DropdownMenuItemButtonState extends framework_1.State {
}
exports._DropdownMenuItemButtonState = _DropdownMenuItemButtonState;
class _DropdownMenu extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.padding = namedParameters.padding;
        this.route = namedParameters.route;
        this.buttonRect = namedParameters.buttonRect;
        this.constraints = namedParameters.constraints;
        this.dropdownColor = namedParameters.dropdownColor;
        this.className = '_DropdownMenu';
    }
}
exports._DropdownMenu = _DropdownMenu;
class _DropdownMenuState extends framework_1.State {
}
exports._DropdownMenuState = _DropdownMenuState;
class _DropdownMenuRouteLayout extends shifted_box_1.SingleChildLayoutDelegate {
    constructor(namedParameters = {}) {
        super();
        this.buttonRect = namedParameters.buttonRect;
        this.route = namedParameters.route;
        this.textDirection = namedParameters.textDirection;
        this.className = '_DropdownMenuRouteLayout';
    }
}
exports._DropdownMenuRouteLayout = _DropdownMenuRouteLayout;
class _DropdownRouteResult extends mxflutter_base_1.MXDartClass {
    constructor(result) {
        super();
        this.result = result;
        this.className = '_DropdownRouteResult';
    }
}
exports._DropdownRouteResult = _DropdownRouteResult;
class _MenuLimits extends mxflutter_base_1.MXDartClass {
    constructor(top, bottom, height, scrollOffset) {
        super();
        this.top = top;
        this.bottom = bottom;
        this.height = height;
        this.scrollOffset = scrollOffset;
        this.className = '_MenuLimits';
    }
}
exports._MenuLimits = _MenuLimits;
class _DropdownRoute extends routes_1.PopupRoute {
    constructor(namedParameters = {}) {
        super();
        this.items = namedParameters.items;
        this.padding = namedParameters.padding;
        this.buttonRect = namedParameters.buttonRect;
        this.selectedIndex = namedParameters.selectedIndex;
        this.elevation = namedParameters.elevation;
        this.theme = namedParameters.theme;
        this.style = namedParameters.style;
        this.barrierLabel = namedParameters.barrierLabel;
        this.itemHeight = namedParameters.itemHeight;
        this.dropdownColor = namedParameters.dropdownColor;
        this.className = '_DropdownRoute';
    }
}
exports._DropdownRoute = _DropdownRoute;
class _DropdownRoutePage extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.route = namedParameters.route;
        this.constraints = namedParameters.constraints;
        this.items = namedParameters.items;
        this.padding = namedParameters.padding;
        this.buttonRect = namedParameters.buttonRect;
        this.selectedIndex = namedParameters.selectedIndex;
        this.elevation = namedParameters.elevation;
        this.theme = namedParameters.theme;
        this.style = namedParameters.style;
        this.dropdownColor = namedParameters.dropdownColor;
        this.className = '_DropdownRoutePage';
    }
}
exports._DropdownRoutePage = _DropdownRoutePage;
class _MenuItem extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.onLayout = namedParameters.onLayout;
        this.item = namedParameters.item;
        this.className = '_MenuItem';
    }
}
exports._MenuItem = _MenuItem;
class _RenderMenuItem extends proxy_box_1.RenderProxyBox {
    constructor(onLayout, child) {
        super();
        this.onLayout = onLayout;
        this['child'] = child;
        this.className = '_RenderMenuItem';
    }
}
exports._RenderMenuItem = _RenderMenuItem;
class _DropdownMenuItemContainer extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.className = '_DropdownMenuItemContainer';
    }
}
exports._DropdownMenuItemContainer = _DropdownMenuItemContainer;
class DropdownMenuItem extends _DropdownMenuItemContainer {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.onTap = namedParameters.onTap;
        this.value = namedParameters.value;
        this.child = namedParameters.child;
        this.className = 'DropdownMenuItem';
    }
}
exports.DropdownMenuItem = DropdownMenuItem;
class DropdownButtonHideUnderline extends framework_1.InheritedWidget {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['child'] = namedParameters.child;
        this.className = 'DropdownButtonHideUnderline';
    }
}
exports.DropdownButtonHideUnderline = DropdownButtonHideUnderline;
class DropdownButton extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.items = namedParameters.items;
        this.selectedItemBuilder = namedParameters.selectedItemBuilder;
        this.value = namedParameters.value;
        this.hint = namedParameters.hint;
        this.disabledHint = namedParameters.disabledHint;
        this.onChanged = namedParameters.onChanged;
        this.onTap = namedParameters.onTap;
        this.elevation = namedParameters.elevation;
        this.style = namedParameters.style;
        this.underline = namedParameters.underline;
        this.icon = namedParameters.icon;
        this.iconDisabledColor = namedParameters.iconDisabledColor;
        this.iconEnabledColor = namedParameters.iconEnabledColor;
        this.iconSize = namedParameters.iconSize;
        this.isDense = namedParameters.isDense;
        this.isExpanded = namedParameters.isExpanded;
        this.itemHeight = namedParameters.itemHeight;
        this.focusColor = namedParameters.focusColor;
        this.focusNode = namedParameters.focusNode;
        this.autofocus = namedParameters.autofocus;
        this.dropdownColor = namedParameters.dropdownColor;
        this.className = 'DropdownButton';
    }
}
exports.DropdownButton = DropdownButton;
class _DropdownButtonState extends framework_1.State {
}
exports._DropdownButtonState = _DropdownButtonState;
class DropdownButtonFormField extends form_1.FormField {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this['items'] = namedParameters.items;
        this['selectedItemBuilder'] = namedParameters.selectedItemBuilder;
        this['value'] = namedParameters.value;
        this['hint'] = namedParameters.hint;
        this['disabledHint'] = namedParameters.disabledHint;
        this.onChanged = namedParameters.onChanged;
        this['onTap'] = namedParameters.onTap;
        this['elevation'] = namedParameters.elevation;
        this['style'] = namedParameters.style;
        this['icon'] = namedParameters.icon;
        this['iconDisabledColor'] = namedParameters.iconDisabledColor;
        this['iconEnabledColor'] = namedParameters.iconEnabledColor;
        this['iconSize'] = namedParameters.iconSize;
        this['isDense'] = namedParameters.isDense;
        this['isExpanded'] = namedParameters.isExpanded;
        this['itemHeight'] = namedParameters.itemHeight;
        this['focusColor'] = namedParameters.focusColor;
        this['focusNode'] = namedParameters.focusNode;
        this['autofocus'] = namedParameters.autofocus;
        this['dropdownColor'] = namedParameters.dropdownColor;
        this.decoration = namedParameters.decoration;
        this.onSaved = namedParameters.onSaved;
        this.validator = namedParameters.validator;
        this.autovalidate = namedParameters.autovalidate;
        this.autovalidateMode = namedParameters.autovalidateMode;
        this.className = 'DropdownButtonFormField';
    }
}
exports.DropdownButtonFormField = DropdownButtonFormField;
class _DropdownButtonFormFieldState extends form_1.FormFieldState {
}
exports._DropdownButtonFormFieldState = _DropdownButtonFormFieldState;
