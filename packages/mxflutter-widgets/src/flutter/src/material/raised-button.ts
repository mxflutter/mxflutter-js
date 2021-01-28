//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { Widget, BuildContext$ } from '../widgets/framework';
import { Duration } from '../../../mx-dart-sdk';
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
class RaisedButton extends MaterialButton {
  public constructor(
    namedParameters: {
      key?: Key;
      onPressed?: any;
      onLongPress?: any;
      onHighlightChanged?: any;
      mouseCursor?: MouseCursor;
      textTheme?: ButtonTextTheme;
      textColor?: Color;
      disabledTextColor?: Color;
      color?: Color;
      disabledColor?: Color;
      focusColor?: Color;
      hoverColor?: Color;
      highlightColor?: Color;
      splashColor?: Color;
      colorBrightness?: Brightness;
      elevation?: number;
      focusElevation?: number;
      hoverElevation?: number;
      highlightElevation?: number;
      disabledElevation?: number;
      padding?: EdgeInsetsGeometry;
      visualDensity?: VisualDensity;
      shape?: ShapeBorder;
      clipBehavior?: Clip;
      focusNode?: FocusNode;
      autofocus?: boolean;
      materialTapTargetSize?: MaterialTapTargetSize;
      animationDuration?: Duration;
      child?: MXWidget;
    } = {},
  ) {
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
    this['elevation'] = namedParameters.elevation;
    this['focusElevation'] = namedParameters.focusElevation;
    this['hoverElevation'] = namedParameters.hoverElevation;
    this['highlightElevation'] = namedParameters.highlightElevation;
    this['disabledElevation'] = namedParameters.disabledElevation;
    this['padding'] = namedParameters.padding;
    this['visualDensity'] = namedParameters.visualDensity;
    this['shape'] = namedParameters.shape;
    this['clipBehavior'] = namedParameters.clipBehavior;
    this['focusNode'] = namedParameters.focusNode;
    this['autofocus'] = namedParameters.autofocus;
    this['materialTapTargetSize'] = namedParameters.materialTapTargetSize;
    this['animationDuration'] = namedParameters.animationDuration;
    this['child'] = namedParameters.child;
    this.className = 'RaisedButton';
  }
  static icon(
    namedParameters: {
      key?: Key;
      onPressed?: any;
      onLongPress?: any;
      onHighlightChanged?: any;
      mouseCursor?: MouseCursor;
      textTheme?: ButtonTextTheme;
      textColor?: Color;
      disabledTextColor?: Color;
      color?: Color;
      disabledColor?: Color;
      focusColor?: Color;
      hoverColor?: Color;
      highlightColor?: Color;
      splashColor?: Color;
      colorBrightness?: Brightness;
      elevation?: number;
      highlightElevation?: number;
      disabledElevation?: number;
      shape?: ShapeBorder;
      clipBehavior?: Clip;
      focusNode?: FocusNode;
      autofocus?: boolean;
      padding?: EdgeInsetsGeometry;
      materialTapTargetSize?: MaterialTapTargetSize;
      animationDuration?: Duration;
      icon?: MXWidget;
      label?: MXWidget;
    } = {},
  ) {
    var jsObj = new RaisedButton();
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
    jsObj['elevation'] = namedParameters.elevation;
    jsObj['highlightElevation'] = namedParameters.highlightElevation;
    jsObj['disabledElevation'] = namedParameters.disabledElevation;
    jsObj['shape'] = namedParameters.shape;
    jsObj['clipBehavior'] = namedParameters.clipBehavior;
    jsObj['focusNode'] = namedParameters.focusNode;
    jsObj['autofocus'] = namedParameters.autofocus;
    jsObj['padding'] = namedParameters.padding;
    jsObj['materialTapTargetSize'] = namedParameters.materialTapTargetSize;
    jsObj['animationDuration'] = namedParameters.animationDuration;
    jsObj['icon'] = namedParameters.icon;
    jsObj['label'] = namedParameters.label;
    jsObj['constructorName'] = 'icon';
    return jsObj;
  }
}
export { RaisedButton };
class _RaisedButtonWithIcon extends RaisedButton {
  public constructor(
    namedParameters: {
      key?: Key;
      onPressed?: any;
      onLongPress?: any;
      onHighlightChanged?: any;
      mouseCursor?: MouseCursor;
      textTheme?: ButtonTextTheme;
      textColor?: Color;
      disabledTextColor?: Color;
      color?: Color;
      disabledColor?: Color;
      focusColor?: Color;
      hoverColor?: Color;
      highlightColor?: Color;
      splashColor?: Color;
      colorBrightness?: Brightness;
      elevation?: number;
      highlightElevation?: number;
      disabledElevation?: number;
      shape?: ShapeBorder;
      clipBehavior?: Clip;
      focusNode?: FocusNode;
      autofocus?: boolean;
      padding?: EdgeInsetsGeometry;
      materialTapTargetSize?: MaterialTapTargetSize;
      animationDuration?: Duration;
      icon?: MXWidget;
      label?: MXWidget;
    } = {},
  ) {
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
    this['elevation'] = namedParameters.elevation;
    this['highlightElevation'] = namedParameters.highlightElevation;
    this['disabledElevation'] = namedParameters.disabledElevation;
    this['shape'] = namedParameters.shape;
    this['clipBehavior'] = namedParameters.clipBehavior;
    this['focusNode'] = namedParameters.focusNode;
    this['autofocus'] = namedParameters.autofocus;
    this['padding'] = namedParameters.padding;
    this['materialTapTargetSize'] = namedParameters.materialTapTargetSize;
    this['animationDuration'] = namedParameters.animationDuration;
    this['icon'] = namedParameters.icon;
    this['label'] = namedParameters.label;
    this.className = '_RaisedButtonWithIcon';
  }
}
export { _RaisedButtonWithIcon };
