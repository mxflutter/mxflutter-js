"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._FlatButtonWithIcon = exports.FlatButton = void 0;
const material_button_1 = require("./material-button");
class FlatButton extends material_button_1.MaterialButton {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['onPressed'] = namedParameters.onPressed;
        this['onLongPress'] = namedParameters.onLongPress;
        this['onHighlightChanged'] = namedParameters.onHighlightChanged;
        this['mouseCursor'] = namedParameters.mouseCursor;
        this['textTheme'] = namedParameters.textTheme;
        this['textColor'] = namedParameters.textColor;
        this['disabledTextColor'] = namedParameters.disabledTextColor;
        this['color'] = namedParameters.color;
        this['disabledColor'] = namedParameters.disabledColor;
        this['focusColor'] = namedParameters.focusColor;
        this['hoverColor'] = namedParameters.hoverColor;
        this['highlightColor'] = namedParameters.highlightColor;
        this['splashColor'] = namedParameters.splashColor;
        this['colorBrightness'] = namedParameters.colorBrightness;
        this['padding'] = namedParameters.padding;
        this['visualDensity'] = namedParameters.visualDensity;
        this['shape'] = namedParameters.shape;
        this['clipBehavior'] = namedParameters.clipBehavior;
        this['focusNode'] = namedParameters.focusNode;
        this['autofocus'] = namedParameters.autofocus;
        this['materialTapTargetSize'] = namedParameters.materialTapTargetSize;
        this['child'] = namedParameters.child;
        this['height'] = namedParameters.height;
        this['minWidth'] = namedParameters.minWidth;
        this.className = 'FlatButton';
    }
    static icon(namedParameters = {}) {
        var jsObj = new FlatButton();
        jsObj['key'] = namedParameters.key;
        jsObj['onPressed'] = namedParameters.onPressed;
        jsObj['onLongPress'] = namedParameters.onLongPress;
        jsObj['onHighlightChanged'] = namedParameters.onHighlightChanged;
        jsObj['mouseCursor'] = namedParameters.mouseCursor;
        jsObj['textTheme'] = namedParameters.textTheme;
        jsObj['textColor'] = namedParameters.textColor;
        jsObj['disabledTextColor'] = namedParameters.disabledTextColor;
        jsObj['color'] = namedParameters.color;
        jsObj['disabledColor'] = namedParameters.disabledColor;
        jsObj['focusColor'] = namedParameters.focusColor;
        jsObj['hoverColor'] = namedParameters.hoverColor;
        jsObj['highlightColor'] = namedParameters.highlightColor;
        jsObj['splashColor'] = namedParameters.splashColor;
        jsObj['colorBrightness'] = namedParameters.colorBrightness;
        jsObj['padding'] = namedParameters.padding;
        jsObj['shape'] = namedParameters.shape;
        jsObj['clipBehavior'] = namedParameters.clipBehavior;
        jsObj['focusNode'] = namedParameters.focusNode;
        jsObj['autofocus'] = namedParameters.autofocus;
        jsObj['materialTapTargetSize'] = namedParameters.materialTapTargetSize;
        jsObj['icon'] = namedParameters.icon;
        jsObj['label'] = namedParameters.label;
        jsObj['minWidth'] = namedParameters.minWidth;
        jsObj['height'] = namedParameters.height;
        jsObj['constructorName'] = 'icon';
        return jsObj;
    }
}
exports.FlatButton = FlatButton;
class _FlatButtonWithIcon extends FlatButton {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['onPressed'] = namedParameters.onPressed;
        this['onLongPress'] = namedParameters.onLongPress;
        this['onHighlightChanged'] = namedParameters.onHighlightChanged;
        this['mouseCursor'] = namedParameters.mouseCursor;
        this['textTheme'] = namedParameters.textTheme;
        this['textColor'] = namedParameters.textColor;
        this['disabledTextColor'] = namedParameters.disabledTextColor;
        this['color'] = namedParameters.color;
        this['disabledColor'] = namedParameters.disabledColor;
        this['focusColor'] = namedParameters.focusColor;
        this['hoverColor'] = namedParameters.hoverColor;
        this['highlightColor'] = namedParameters.highlightColor;
        this['splashColor'] = namedParameters.splashColor;
        this['colorBrightness'] = namedParameters.colorBrightness;
        this['padding'] = namedParameters.padding;
        this['shape'] = namedParameters.shape;
        this['clipBehavior'] = namedParameters.clipBehavior;
        this['focusNode'] = namedParameters.focusNode;
        this['autofocus'] = namedParameters.autofocus;
        this['materialTapTargetSize'] = namedParameters.materialTapTargetSize;
        this['icon'] = namedParameters.icon;
        this['label'] = namedParameters.label;
        this['minWidth'] = namedParameters.minWidth;
        this['height'] = namedParameters.height;
        this.className = '_FlatButtonWithIcon';
    }
}
exports._FlatButtonWithIcon = _FlatButtonWithIcon;
