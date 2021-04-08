// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Animation } from '../animation/animation';
import { AnimationController } from '../animation/animation-controller';
import { Widget, StatefulWidget, State } from '../widgets/framework';
import { FocusNode } from '../widgets/focus-manager';
import { VisualDensity, MaterialTapTargetSize } from './theme-data';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { ButtonTextTheme } from './button-theme';
import { MouseCursor } from '../rendering/mouse-cursor';
import { Key } from '../foundation/key';
import { BorderSide, ShapeBorder } from '../painting/borders';
import { Color, Clip, Brightness } from '../../../mx-dart-sdk';
import { MaterialButton } from './material-button';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class OutlineButton extends MaterialButton {
  highlightedBorderColor: Color;
  disabledBorderColor: Color;
  borderSide: BorderSide;
  public constructor(namedParameters: {key?: Key, onPressed?: any, onLongPress?: any, mouseCursor?: MouseCursor, textTheme?: ButtonTextTheme, textColor?: Color, disabledTextColor?: Color, color?: Color, focusColor?: Color, hoverColor?: Color, highlightColor?: Color, splashColor?: Color, highlightElevation?: number, borderSide?: BorderSide, disabledBorderColor?: Color, highlightedBorderColor?: Color, padding?: EdgeInsetsGeometry, visualDensity?: VisualDensity, shape?: ShapeBorder, clipBehavior?: Clip, focusNode?: FocusNode, autofocus?: boolean, materialTapTargetSize?: MaterialTapTargetSize, child?: MXWidget} = {}) {
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
    this.materialTapTargetSize = namedParameters.materialTapTargetSize;
    this.child = namedParameters.child;
    this.className = 'OutlineButton';
  }
  static icon(namedParameters: {key?: Key, onPressed?: any, onLongPress?: any, mouseCursor?: MouseCursor, textTheme?: ButtonTextTheme, textColor?: Color, disabledTextColor?: Color, color?: Color, focusColor?: Color, hoverColor?: Color, highlightColor?: Color, splashColor?: Color, highlightElevation?: number, highlightedBorderColor?: Color, disabledBorderColor?: Color, borderSide?: BorderSide, padding?: EdgeInsetsGeometry, visualDensity?: VisualDensity, shape?: ShapeBorder, clipBehavior?: Clip, focusNode?: FocusNode, autofocus?: boolean, materialTapTargetSize?: MaterialTapTargetSize, icon?: MXWidget, label?: MXWidget} = {}) {
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
    jsObj.materialTapTargetSize = namedParameters.materialTapTargetSize;
    jsObj['icon'] = namedParameters.icon;
    jsObj['label'] = namedParameters.label;
    jsObj['constructorName'] = 'icon';
    return jsObj;
  }
}
export { OutlineButton };
class _OutlineButtonWithIcon extends OutlineButton {
  public constructor(namedParameters: {key?: Key, onPressed?: any, onLongPress?: any, mouseCursor?: MouseCursor, textTheme?: ButtonTextTheme, textColor?: Color, disabledTextColor?: Color, color?: Color, focusColor?: Color, hoverColor?: Color, highlightColor?: Color, splashColor?: Color, highlightElevation?: number, highlightedBorderColor?: Color, disabledBorderColor?: Color, borderSide?: BorderSide, padding?: EdgeInsetsGeometry, visualDensity?: VisualDensity, shape?: ShapeBorder, clipBehavior?: Clip, focusNode?: FocusNode, autofocus?: boolean, materialTapTargetSize?: MaterialTapTargetSize, icon?: MXWidget, label?: MXWidget} = {}) {
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
    this['materialTapTargetSize'] = namedParameters.materialTapTargetSize;
    this['icon'] = namedParameters.icon;
    this['label'] = namedParameters.label;
    this.className = '_OutlineButtonWithIcon';
  }
}
export { _OutlineButtonWithIcon };
class _OutlineButton extends StatefulWidget {
  onPressed: any;
  onLongPress: any;
  mouseCursor: MouseCursor;
  brightness: Brightness;
  textTheme: ButtonTextTheme;
  textColor: Color;
  disabledTextColor: Color;
  color: Color;
  splashColor: Color;
  focusColor: Color;
  hoverColor: Color;
  highlightColor: Color;
  highlightElevation: number;
  borderSide: BorderSide;
  disabledBorderColor: Color;
  highlightedBorderColor: Color;
  padding: EdgeInsetsGeometry;
  visualDensity: VisualDensity;
  shape: ShapeBorder;
  clipBehavior: Clip;
  focusNode: FocusNode;
  autofocus: boolean;
  child: MXWidget;
  materialTapTargetSize: MaterialTapTargetSize;
  public constructor(namedParameters: {key?: Key, onPressed?: any, onLongPress?: any, mouseCursor?: MouseCursor, brightness?: Brightness, textTheme?: ButtonTextTheme, textColor?: Color, disabledTextColor?: Color, color?: Color, focusColor?: Color, hoverColor?: Color, highlightColor?: Color, splashColor?: Color, highlightElevation?: number, borderSide?: BorderSide, disabledBorderColor?: Color, highlightedBorderColor?: Color, padding?: EdgeInsetsGeometry, visualDensity?: VisualDensity, shape?: ShapeBorder, clipBehavior?: Clip, focusNode?: FocusNode, autofocus?: boolean, child?: MXWidget, materialTapTargetSize?: MaterialTapTargetSize} = {}) {
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
    this.materialTapTargetSize = namedParameters.materialTapTargetSize;
    this.className = '_OutlineButton';
  }
}
export { _OutlineButton };
class _OutlineButtonState extends State {
  controller: AnimationController;
  fillAnimation: Animation;
  elevationAnimation: Animation;
  pressed: boolean;
}
export { _OutlineButtonState };
class _OutlineBorder extends ShapeBorder {
  shape: ShapeBorder;
  side: BorderSide;
  public constructor(namedParameters: {shape?: ShapeBorder, side?: BorderSide} = {}) {
    super();
    this.shape = namedParameters.shape;
    this.side = namedParameters.side;
    this.className = '_OutlineBorder';
  }
}
export { _OutlineBorder };
