//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { PopupRoute } from '../widgets/routes';
import { RenderShiftedBox, SingleChildLayoutDelegate } from '../rendering/shifted-box';
import { StatefulWidget$, State$, SingleChildRenderObjectWidget, StatelessWidget$, } from '../widgets/framework';
class PopupMenuEntry extends StatefulWidget$ {
}
export { PopupMenuEntry };
class PopupMenuDivider extends PopupMenuEntry {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.height = namedParameters.height;
        this.className = 'PopupMenuDivider';
    }
}
export { PopupMenuDivider };
class _PopupMenuDividerState extends State$ {
}
export { _PopupMenuDividerState };
class _MenuItem extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.onLayout = namedParameters.onLayout;
        this.child = namedParameters.child;
        this.className = '_MenuItem';
    }
}
export { _MenuItem };
class _RenderMenuItem extends RenderShiftedBox {
    constructor(onLayout, child) {
        super();
        this.onLayout = onLayout;
        this['child'] = child;
        this.className = '_RenderMenuItem';
    }
}
export { _RenderMenuItem };
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
export { PopupMenuItem };
class PopupMenuItemState extends State$ {
}
export { PopupMenuItemState };
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
export { CheckedPopupMenuItem };
class _CheckedPopupMenuItemState extends PopupMenuItemState {
}
export { _CheckedPopupMenuItemState };
class _PopupMenu extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.route = namedParameters.route;
        this.semanticLabel = namedParameters.semanticLabel;
        this.className = '_PopupMenu';
    }
}
export { _PopupMenu };
class _PopupMenuRouteLayout extends SingleChildLayoutDelegate {
    constructor(position, itemSizes, selectedItemIndex, textDirection) {
        super();
        this.position = position;
        this.itemSizes = itemSizes;
        this.selectedItemIndex = selectedItemIndex;
        this.textDirection = textDirection;
        this.className = '_PopupMenuRouteLayout';
    }
}
export { _PopupMenuRouteLayout };
class _PopupMenuRoute extends PopupRoute {
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
export { _PopupMenuRoute };
class PopupMenuButton extends StatefulWidget$ {
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
export { PopupMenuButton };
class PopupMenuButtonState extends State$ {
}
export { PopupMenuButtonState };
