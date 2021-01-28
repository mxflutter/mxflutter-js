//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { MaterialButton } from './material-button';
class FlatButton extends MaterialButton {
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
        jsObj['constructorName'] = 'icon';
        return jsObj;
    }
}
export { FlatButton };
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
        this.className = '_FlatButtonWithIcon';
    }
}
export { _FlatButtonWithIcon };
