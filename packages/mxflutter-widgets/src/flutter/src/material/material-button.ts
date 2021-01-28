//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { Key } from '../foundation/key';
import { Duration } from '../../../mx-dart-sdk';
import { FocusNode } from '../widgets/focus-manager';
import { ShapeBorder } from '../painting/borders';
import { VisualDensity, MaterialTapTargetSize } from './theme-data';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { Color, Brightness, Clip } from '../../../mx-dart-sdk';
import { ButtonTextTheme } from './button-theme';
import { MouseCursor } from '../rendering/mouse-cursor';
import { StatelessWidget$, Widget, BuildContext$ } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class MaterialButton extends StatelessWidget$ {
  onPressed: any;
  onLongPress: any;
  onHighlightChanged: any;
  mouseCursor: MouseCursor;
  textTheme: ButtonTextTheme;
  textColor: Color;
  disabledTextColor: Color;
  color: Color;
  disabledColor: Color;
  splashColor: Color;
  focusColor: Color;
  hoverColor: Color;
  highlightColor: Color;
  elevation: number;
  hoverElevation: number;
  focusElevation: number;
  highlightElevation: number;
  disabledElevation: number;
  colorBrightness: Brightness;
  child: MXWidget;
  padding: EdgeInsetsGeometry;
  visualDensity: VisualDensity;
  shape: ShapeBorder;
  clipBehavior: Clip;
  focusNode: FocusNode;
  autofocus: boolean;
  animationDuration: Duration;
  materialTapTargetSize: MaterialTapTargetSize;
  minWidth: number;
  height: number;
  enableFeedback: boolean;
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
      minWidth?: number;
      height?: number;
      enableFeedback?: boolean;
      child?: MXWidget;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.onPressed = namedParameters.onPressed;
    this.onLongPress = namedParameters.onLongPress;
    this.onHighlightChanged = namedParameters.onHighlightChanged;
    this.mouseCursor = namedParameters.mouseCursor;
    this.textTheme = namedParameters.textTheme;
    this.textColor = namedParameters.textColor;
    this.disabledTextColor = namedParameters.disabledTextColor;
    this.color = namedParameters.color;
    this.disabledColor = namedParameters.disabledColor;
    this.focusColor = namedParameters.focusColor;
    this.hoverColor = namedParameters.hoverColor;
    this.highlightColor = namedParameters.highlightColor;
    this.splashColor = namedParameters.splashColor;
    this.colorBrightness = namedParameters.colorBrightness;
    this.elevation = namedParameters.elevation;
    this.focusElevation = namedParameters.focusElevation;
    this.hoverElevation = namedParameters.hoverElevation;
    this.highlightElevation = namedParameters.highlightElevation;
    this.disabledElevation = namedParameters.disabledElevation;
    this.padding = namedParameters.padding;
    this.visualDensity = namedParameters.visualDensity;
    this.shape = namedParameters.shape;
    this.clipBehavior = namedParameters.clipBehavior;
    this.focusNode = namedParameters.focusNode;
    this.autofocus = namedParameters.autofocus;
    this.materialTapTargetSize = namedParameters.materialTapTargetSize;
    this.animationDuration = namedParameters.animationDuration;
    this.minWidth = namedParameters.minWidth;
    this.height = namedParameters.height;
    this.enableFeedback = namedParameters.enableFeedback;
    this.child = namedParameters.child;
    this.className = 'MaterialButton';
  }
}
export { MaterialButton };
abstract class MaterialButtonWithIconMixin extends MXDartClass {}
export { MaterialButtonWithIconMixin };
