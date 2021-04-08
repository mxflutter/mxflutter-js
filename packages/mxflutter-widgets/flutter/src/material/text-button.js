"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._TextButtonWithIconChild = exports._TextButtonWithIcon = exports._TextButtonDefaultMouseCursor = exports._TextButtonDefaultOverlay = exports._TextButtonDefaultForeground = exports.TextButton = void 0;
const material_state_1 = require("./material-state");
const framework_1 = require("../widgets/framework");
const button_style_button_1 = require("./button-style-button");
class TextButton extends button_style_button_1.ButtonStyleButton {
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
        this.className = 'TextButton';
    }
    static icon(namedParameters = {}) {
        var jsObj = new TextButton();
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
exports.TextButton = TextButton;
class _TextButtonDefaultForeground extends material_state_1.MaterialStateProperty {
    constructor(primary, onSurface) {
        super();
        this.primary = primary;
        this.onSurface = onSurface;
        this.className = '_TextButtonDefaultForeground';
    }
}
exports._TextButtonDefaultForeground = _TextButtonDefaultForeground;
class _TextButtonDefaultOverlay extends material_state_1.MaterialStateProperty {
    constructor(primary) {
        super();
        this.primary = primary;
        this.className = '_TextButtonDefaultOverlay';
    }
}
exports._TextButtonDefaultOverlay = _TextButtonDefaultOverlay;
class _TextButtonDefaultMouseCursor extends material_state_1.MaterialStateProperty {
    constructor(enabledCursor, disabledCursor) {
        super();
        this.enabledCursor = enabledCursor;
        this.disabledCursor = disabledCursor;
        this.className = '_TextButtonDefaultMouseCursor';
    }
}
exports._TextButtonDefaultMouseCursor = _TextButtonDefaultMouseCursor;
class _TextButtonWithIcon extends TextButton {
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
        this.className = '_TextButtonWithIcon';
    }
}
exports._TextButtonWithIcon = _TextButtonWithIcon;
class _TextButtonWithIconChild extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.label = namedParameters.label;
        this.icon = namedParameters.icon;
        this.className = '_TextButtonWithIconChild';
    }
}
exports._TextButtonWithIconChild = _TextButtonWithIconChild;
