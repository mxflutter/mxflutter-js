"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._ElevatedButtonWithIconChild = exports._ElevatedButtonWithIcon = exports._ElevatedButtonDefaultMouseCursor = exports._ElevatedButtonDefaultElevation = exports._ElevatedButtonDefaultOverlay = exports._ElevatedButtonDefaultForeground = exports._ElevatedButtonDefaultBackground = exports.ElevatedButton = void 0;
const material_state_1 = require("./material-state");
const framework_1 = require("../widgets/framework");
const button_style_button_1 = require("./button-style-button");
class ElevatedButton extends button_style_button_1.ButtonStyleButton {
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
        this.className = 'ElevatedButton';
    }
    static icon(namedParameters = {}) {
        var jsObj = new ElevatedButton();
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
exports.ElevatedButton = ElevatedButton;
class _ElevatedButtonDefaultBackground extends material_state_1.MaterialStateProperty {
    constructor(primary, onSurface) {
        super();
        this.primary = primary;
        this.onSurface = onSurface;
        this.className = '_ElevatedButtonDefaultBackground';
    }
}
exports._ElevatedButtonDefaultBackground = _ElevatedButtonDefaultBackground;
class _ElevatedButtonDefaultForeground extends material_state_1.MaterialStateProperty {
    constructor(onPrimary, onSurface) {
        super();
        this.onPrimary = onPrimary;
        this.onSurface = onSurface;
        this.className = '_ElevatedButtonDefaultForeground';
    }
}
exports._ElevatedButtonDefaultForeground = _ElevatedButtonDefaultForeground;
class _ElevatedButtonDefaultOverlay extends material_state_1.MaterialStateProperty {
    constructor(onPrimary) {
        super();
        this.onPrimary = onPrimary;
        this.className = '_ElevatedButtonDefaultOverlay';
    }
}
exports._ElevatedButtonDefaultOverlay = _ElevatedButtonDefaultOverlay;
class _ElevatedButtonDefaultElevation extends material_state_1.MaterialStateProperty {
    constructor(elevation) {
        super();
        this.elevation = elevation;
        this.className = '_ElevatedButtonDefaultElevation';
    }
}
exports._ElevatedButtonDefaultElevation = _ElevatedButtonDefaultElevation;
class _ElevatedButtonDefaultMouseCursor extends material_state_1.MaterialStateProperty {
    constructor(enabledCursor, disabledCursor) {
        super();
        this.enabledCursor = enabledCursor;
        this.disabledCursor = disabledCursor;
        this.className = '_ElevatedButtonDefaultMouseCursor';
    }
}
exports._ElevatedButtonDefaultMouseCursor = _ElevatedButtonDefaultMouseCursor;
class _ElevatedButtonWithIcon extends ElevatedButton {
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
        this.className = '_ElevatedButtonWithIcon';
    }
}
exports._ElevatedButtonWithIcon = _ElevatedButtonWithIcon;
class _ElevatedButtonWithIconChild extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.label = namedParameters.label;
        this.icon = namedParameters.icon;
        this.className = '_ElevatedButtonWithIconChild';
    }
}
exports._ElevatedButtonWithIconChild = _ElevatedButtonWithIconChild;
