//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { StatefulWidget$, State$ } from '../widgets/framework';
import { ShapeBorder } from '../painting/borders';
import { MaterialButton } from './material-button';
class OutlineButton extends MaterialButton {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.onPressed = namedParameters.onPressed;
        this.onLongPress = namedParameters.onLongPress;
        this.mouseCursor = namedParameters.mouseCursor;
        this.textTheme = namedParameters.textTheme;
        this.textColor = namedParameters.textColor;
        this.disabledTextColor = namedParameters.disabledTextColor;
        this.color = namedParameters.color;
        this.focusColor = namedParameters.focusColor;
        this.hoverColor = namedParameters.hoverColor;
        this.highlightColor = namedParameters.highlightColor;
        this.splashColor = namedParameters.splashColor;
        this.highlightElevation = namedParameters.highlightElevation;
        this.borderSide = namedParameters.borderSide;
        this.disabledBorderColor = namedParameters.disabledBorderColor;
        this.highlightedBorderColor = namedParameters.highlightedBorderColor;
        this.padding = namedParameters.padding;
        this.visualDensity = namedParameters.visualDensity;
        this.shape = namedParameters.shape;
        this.clipBehavior = namedParameters.clipBehavior;
        this.focusNode = namedParameters.focusNode;
        this.autofocus = namedParameters.autofocus;
        this.child = namedParameters.child;
        this.className = 'OutlineButton';
    }
    static icon(namedParameters = {}) {
        var jsObj = new OutlineButton();
        jsObj.key = namedParameters.key;
        jsObj.onPressed = namedParameters.onPressed;
        jsObj.onLongPress = namedParameters.onLongPress;
        jsObj.mouseCursor = namedParameters.mouseCursor;
        jsObj.textTheme = namedParameters.textTheme;
        jsObj.textColor = namedParameters.textColor;
        jsObj.disabledTextColor = namedParameters.disabledTextColor;
        jsObj.color = namedParameters.color;
        jsObj.focusColor = namedParameters.focusColor;
        jsObj.hoverColor = namedParameters.hoverColor;
        jsObj.highlightColor = namedParameters.highlightColor;
        jsObj.splashColor = namedParameters.splashColor;
        jsObj.highlightElevation = namedParameters.highlightElevation;
        jsObj.highlightedBorderColor = namedParameters.highlightedBorderColor;
        jsObj.disabledBorderColor = namedParameters.disabledBorderColor;
        jsObj.borderSide = namedParameters.borderSide;
        jsObj.padding = namedParameters.padding;
        jsObj.visualDensity = namedParameters.visualDensity;
        jsObj.shape = namedParameters.shape;
        jsObj.clipBehavior = namedParameters.clipBehavior;
        jsObj.focusNode = namedParameters.focusNode;
        jsObj.autofocus = namedParameters.autofocus;
        jsObj['icon'] = namedParameters.icon;
        jsObj['label'] = namedParameters.label;
        jsObj['constructorName'] = 'icon';
        return jsObj;
    }
}
export { OutlineButton };
class _OutlineButtonWithIcon extends OutlineButton {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['onPressed'] = namedParameters.onPressed;
        this['onLongPress'] = namedParameters.onLongPress;
        this['mouseCursor'] = namedParameters.mouseCursor;
        this['textTheme'] = namedParameters.textTheme;
        this['textColor'] = namedParameters.textColor;
        this['disabledTextColor'] = namedParameters.disabledTextColor;
        this['color'] = namedParameters.color;
        this['focusColor'] = namedParameters.focusColor;
        this['hoverColor'] = namedParameters.hoverColor;
        this['highlightColor'] = namedParameters.highlightColor;
        this['splashColor'] = namedParameters.splashColor;
        this['highlightElevation'] = namedParameters.highlightElevation;
        this['highlightedBorderColor'] = namedParameters.highlightedBorderColor;
        this['disabledBorderColor'] = namedParameters.disabledBorderColor;
        this['borderSide'] = namedParameters.borderSide;
        this['padding'] = namedParameters.padding;
        this['visualDensity'] = namedParameters.visualDensity;
        this['shape'] = namedParameters.shape;
        this['clipBehavior'] = namedParameters.clipBehavior;
        this['focusNode'] = namedParameters.focusNode;
        this['autofocus'] = namedParameters.autofocus;
        this['icon'] = namedParameters.icon;
        this['label'] = namedParameters.label;
        this.className = '_OutlineButtonWithIcon';
    }
}
export { _OutlineButtonWithIcon };
class _OutlineButton extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.onPressed = namedParameters.onPressed;
        this.onLongPress = namedParameters.onLongPress;
        this.mouseCursor = namedParameters.mouseCursor;
        this.brightness = namedParameters.brightness;
        this.textTheme = namedParameters.textTheme;
        this.textColor = namedParameters.textColor;
        this.disabledTextColor = namedParameters.disabledTextColor;
        this.color = namedParameters.color;
        this.focusColor = namedParameters.focusColor;
        this.hoverColor = namedParameters.hoverColor;
        this.highlightColor = namedParameters.highlightColor;
        this.splashColor = namedParameters.splashColor;
        this.highlightElevation = namedParameters.highlightElevation;
        this.borderSide = namedParameters.borderSide;
        this.disabledBorderColor = namedParameters.disabledBorderColor;
        this.highlightedBorderColor = namedParameters.highlightedBorderColor;
        this.padding = namedParameters.padding;
        this.visualDensity = namedParameters.visualDensity;
        this.shape = namedParameters.shape;
        this.clipBehavior = namedParameters.clipBehavior;
        this.focusNode = namedParameters.focusNode;
        this.autofocus = namedParameters.autofocus;
        this.child = namedParameters.child;
        this.className = '_OutlineButton';
    }
}
export { _OutlineButton };
class _OutlineButtonState extends State$ {
}
export { _OutlineButtonState };
class _OutlineBorder extends ShapeBorder {
    constructor(namedParameters = {}) {
        super();
        this.shape = namedParameters.shape;
        this.side = namedParameters.side;
        this.className = '_OutlineBorder';
    }
}
export { _OutlineBorder };
