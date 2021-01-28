//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { FormField, FormFieldState } from '../widgets/form';
import { RenderProxyBox } from '../rendering/proxy-box';
import { PopupRoute } from '../widgets/routes';
import { SingleChildLayoutDelegate } from '../rendering/shifted-box';
import { StatefulWidget$, State$, StatelessWidget$, SingleChildRenderObjectWidget, InheritedWidget, } from '../widgets/framework';
import { ScrollBehavior } from '../widgets/scroll-configuration';
import { CustomPainter } from '../rendering/custom-paint';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class _DropdownMenuPainter extends CustomPainter {
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
export { _DropdownMenuPainter };
class _DropdownScrollBehavior extends ScrollBehavior {
}
export { _DropdownScrollBehavior };
class _DropdownMenuItemButton extends StatefulWidget$ {
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
export { _DropdownMenuItemButton };
class _DropdownMenuItemButtonState extends State$ {
}
export { _DropdownMenuItemButtonState };
class _DropdownMenu extends StatefulWidget$ {
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
export { _DropdownMenu };
class _DropdownMenuState extends State$ {
}
export { _DropdownMenuState };
class _DropdownMenuRouteLayout extends SingleChildLayoutDelegate {
    constructor(namedParameters = {}) {
        super();
        this.buttonRect = namedParameters.buttonRect;
        this.route = namedParameters.route;
        this.textDirection = namedParameters.textDirection;
        this.className = '_DropdownMenuRouteLayout';
    }
}
export { _DropdownMenuRouteLayout };
class _DropdownRouteResult extends MXDartClass {
    constructor(result) {
        super();
        this.result = result;
        this.className = '_DropdownRouteResult';
    }
}
export { _DropdownRouteResult };
class _MenuLimits extends MXDartClass {
    constructor(top, bottom, height, scrollOffset) {
        super();
        this.top = top;
        this.bottom = bottom;
        this.height = height;
        this.scrollOffset = scrollOffset;
        this.className = '_MenuLimits';
    }
}
export { _MenuLimits };
class _DropdownRoute extends PopupRoute {
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
export { _DropdownRoute };
class _DropdownRoutePage extends StatelessWidget$ {
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
export { _DropdownRoutePage };
class _MenuItem extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.onLayout = namedParameters.onLayout;
        this.item = namedParameters.item;
        this.className = '_MenuItem';
    }
}
export { _MenuItem };
class _RenderMenuItem extends RenderProxyBox {
    constructor(onLayout, child) {
        super();
        this.onLayout = onLayout;
        this['child'] = child;
        this.className = '_RenderMenuItem';
    }
}
export { _RenderMenuItem };
class _DropdownMenuItemContainer extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.className = '_DropdownMenuItemContainer';
    }
}
export { _DropdownMenuItemContainer };
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
export { DropdownMenuItem };
class DropdownButtonHideUnderline extends InheritedWidget {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['child'] = namedParameters.child;
        this.className = 'DropdownButtonHideUnderline';
    }
}
export { DropdownButtonHideUnderline };
class DropdownButton extends StatefulWidget$ {
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
export { DropdownButton };
class _DropdownButtonState extends State$ {
}
export { _DropdownButtonState };
class DropdownButtonFormField extends FormField {
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
        this.className = 'DropdownButtonFormField';
    }
}
export { DropdownButtonFormField };
class _DropdownButtonFormFieldState extends FormFieldState {
}
export { _DropdownButtonFormFieldState };
