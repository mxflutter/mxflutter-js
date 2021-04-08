// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Widget } from '../widgets/framework';
import { FocusNode } from '../widgets/focus-manager';
import { ShapeBorder } from '../painting/borders';
import { VisualDensity, MaterialTapTargetSize } from './theme-data';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { Color, Brightness, Clip } from '../../../mx-dart-sdk';
import { ButtonTextTheme } from './button-theme';
import { MouseCursor } from '../rendering/mouse-cursor';
import { Key } from '../foundation/key';
import { MaterialButton } from './material-button';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class FlatButton extends MaterialButton {
  public constructor(namedParameters: {key?: Key, onPressed?: any, onLongPress?: any, onHighlightChanged?: any, mouseCursor?: MouseCursor, textTheme?: ButtonTextTheme, textColor?: Color, disabledTextColor?: Color, color?: Color, disabledColor?: Color, focusColor?: Color, hoverColor?: Color, highlightColor?: Color, splashColor?: Color, colorBrightness?: Brightness, padding?: EdgeInsetsGeometry, visualDensity?: VisualDensity, shape?: ShapeBorder, clipBehavior?: Clip, focusNode?: FocusNode, autofocus?: boolean, materialTapTargetSize?: MaterialTapTargetSize, child?: MXWidget, height?: number, minWidth?: number} = {}) {
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
  static icon(namedParameters: {key?: Key, onPressed?: any, onLongPress?: any, onHighlightChanged?: any, mouseCursor?: MouseCursor, textTheme?: ButtonTextTheme, textColor?: Color, disabledTextColor?: Color, color?: Color, disabledColor?: Color, focusColor?: Color, hoverColor?: Color, highlightColor?: Color, splashColor?: Color, colorBrightness?: Brightness, padding?: EdgeInsetsGeometry, shape?: ShapeBorder, clipBehavior?: Clip, focusNode?: FocusNode, autofocus?: boolean, materialTapTargetSize?: MaterialTapTargetSize, icon?: MXWidget, label?: MXWidget, minWidth?: number, height?: number} = {}) {
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
export { FlatButton };
class _FlatButtonWithIcon extends FlatButton {
  public constructor(namedParameters: {key?: Key, onPressed?: any, onLongPress?: any, onHighlightChanged?: any, mouseCursor?: MouseCursor, textTheme?: ButtonTextTheme, textColor?: Color, disabledTextColor?: Color, color?: Color, disabledColor?: Color, focusColor?: Color, hoverColor?: Color, highlightColor?: Color, splashColor?: Color, colorBrightness?: Brightness, padding?: EdgeInsetsGeometry, shape?: ShapeBorder, clipBehavior?: Clip, focusNode?: FocusNode, autofocus?: boolean, materialTapTargetSize?: MaterialTapTargetSize, icon?: MXWidget, label?: MXWidget, minWidth?: number, height?: number} = {}) {
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
export { _FlatButtonWithIcon };
