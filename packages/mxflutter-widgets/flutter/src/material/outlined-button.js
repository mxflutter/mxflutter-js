"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._OutlinedButtonWithIconChild = exports._OutlinedButtonWithIcon = exports._OutlinedButtonDefaultMouseCursor = exports._OutlinedButtonDefaultOverlay = exports._OutlinedButtonDefaultForeground = exports.OutlinedButton = void 0;
const material_state_1 = require("./material-state");
const framework_1 = require("../widgets/framework");
const button_style_button_1 = require("./button-style-button");
class OutlinedButton extends button_style_button_1.ButtonStyleButton {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['onPressed'] = namedParameters.onPressed;
        this['onLongPress'] = namedParameters.onLongPress;
        this['style'] = namedParameters.style;
        this['focusNode'] = namedParameters.focusNode;
        this['autofocus'] = namedParameters.autofocus;
        this['clipBehavior'] = namedParameters.clipBehavior;
        this['child'] = namedParameters.child;
        this.className = 'OutlinedButton';
    }
    static icon(namedParameters = {}) {
        var jsObj = new OutlinedButton();
        jsObj['key'] = namedParameters.key;
        jsObj['onPressed'] = namedParameters.onPressed;
        jsObj['onLongPress'] = namedParameters.onLongPress;
        jsObj['style'] = namedParameters.style;
        jsObj['focusNode'] = namedParameters.focusNode;
        jsObj['autofocus'] = namedParameters.autofocus;
        jsObj['clipBehavior'] = namedParameters.clipBehavior;
        jsObj['icon'] = namedParameters.icon;
        jsObj['label'] = namedParameters.label;
        jsObj['constructorName'] = 'icon';
        return jsObj;
    }
}
exports.OutlinedButton = OutlinedButton;
class _OutlinedButtonDefaultForeground extends material_state_1.MaterialStateProperty {
    constructor(primary, onSurface) {
        super();
        this.primary = primary;
        this.onSurface = onSurface;
        this.className = '_OutlinedButtonDefaultForeground';
    }
}
exports._OutlinedButtonDefaultForeground = _OutlinedButtonDefaultForeground;
class _OutlinedButtonDefaultOverlay extends material_state_1.MaterialStateProperty {
    constructor(primary) {
        super();
        this.primary = primary;
        this.className = '_OutlinedButtonDefaultOverlay';
    }
}
exports._OutlinedButtonDefaultOverlay = _OutlinedButtonDefaultOverlay;
class _OutlinedButtonDefaultMouseCursor extends material_state_1.MaterialStateProperty {
    constructor(enabledCursor, disabledCursor) {
        super();
        this.enabledCursor = enabledCursor;
        this.disabledCursor = disabledCursor;
        this.className = '_OutlinedButtonDefaultMouseCursor';
    }
}
exports._OutlinedButtonDefaultMouseCursor = _OutlinedButtonDefaultMouseCursor;
class _OutlinedButtonWithIcon extends OutlinedButton {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['onPressed'] = namedParameters.onPressed;
        this['onLongPress'] = namedParameters.onLongPress;
        this['style'] = namedParameters.style;
        this['focusNode'] = namedParameters.focusNode;
        this['autofocus'] = namedParameters.autofocus;
        this['clipBehavior'] = namedParameters.clipBehavior;
        this['icon'] = namedParameters.icon;
        this['label'] = namedParameters.label;
        this.className = '_OutlinedButtonWithIcon';
    }
}
exports._OutlinedButtonWithIcon = _OutlinedButtonWithIcon;
class _OutlinedButtonWithIconChild extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.label = namedParameters.label;
        this.icon = namedParameters.icon;
        this.className = '_OutlinedButtonWithIconChild';
    }
}
exports._OutlinedButtonWithIconChild = _OutlinedButtonWithIconChild;
