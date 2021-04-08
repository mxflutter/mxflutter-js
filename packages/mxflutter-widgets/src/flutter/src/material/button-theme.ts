// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Widget } from '../widgets/framework';
import { MaterialTapTargetSize } from './theme-data';
import { ColorScheme } from './color-scheme';
import { Color } from '../../../mx-dart-sdk';
import { ShapeBorder } from '../painting/borders';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { Key } from '../foundation/key';
import { InheritedTheme } from '../widgets/inherited-theme';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum ButtonTextTheme {
  normal = '{ "_name": "ButtonTextTheme.normal", "index": 0 }',
  accent = '{ "_name": "ButtonTextTheme.accent", "index": 1 }',
  primary = '{ "_name": "ButtonTextTheme.primary", "index": 2 }',
};

export { ButtonTextTheme };
enum ButtonBarLayoutBehavior {
  constrained = '{ "_name": "ButtonBarLayoutBehavior.constrained", "index": 0 }',
  padded = '{ "_name": "ButtonBarLayoutBehavior.padded", "index": 1 }',
};

export { ButtonBarLayoutBehavior };
class ButtonTheme extends InheritedTheme {
  data: ButtonThemeData;
  public constructor(namedParameters: {key?: Key, textTheme?: ButtonTextTheme, layoutBehavior?: ButtonBarLayoutBehavior, minWidth?: number, height?: number, padding?: EdgeInsetsGeometry, shape?: ShapeBorder, alignedDropdown?: boolean, buttonColor?: Color, disabledColor?: Color, focusColor?: Color, hoverColor?: Color, highlightColor?: Color, splashColor?: Color, colorScheme?: ColorScheme, materialTapTargetSize?: MaterialTapTargetSize, child?: MXWidget} = {}) {
    super();
    this.key = namedParameters.key;
    this['textTheme'] = namedParameters.textTheme;
    this['layoutBehavior'] = namedParameters.layoutBehavior;
    this['minWidth'] = namedParameters.minWidth;
    this['height'] = namedParameters.height;
    this['padding'] = namedParameters.padding;
    this['shape'] = namedParameters.shape;
    this['alignedDropdown'] = namedParameters.alignedDropdown;
    this['buttonColor'] = namedParameters.buttonColor;
    this['disabledColor'] = namedParameters.disabledColor;
    this['focusColor'] = namedParameters.focusColor;
    this['hoverColor'] = namedParameters.hoverColor;
    this['highlightColor'] = namedParameters.highlightColor;
    this['splashColor'] = namedParameters.splashColor;
    this['colorScheme'] = namedParameters.colorScheme;
    this['materialTapTargetSize'] = namedParameters.materialTapTargetSize;
    this.child = namedParameters.child;
    this.className = 'ButtonTheme';
  }
  static fromButtonThemeData(namedParameters: {key?: Key, data?: ButtonThemeData, child?: MXWidget} = {}) {
    var jsObj = new ButtonTheme();
    jsObj.key = namedParameters.key;
    jsObj.data = namedParameters.data;
    jsObj.child = namedParameters.child;
    jsObj['constructorName'] = 'fromButtonThemeData';
    return jsObj;
  }
  static bar(namedParameters: {key?: Key, textTheme?: ButtonTextTheme, minWidth?: number, height?: number, padding?: EdgeInsetsGeometry, shape?: ShapeBorder, alignedDropdown?: boolean, buttonColor?: Color, disabledColor?: Color, focusColor?: Color, hoverColor?: Color, highlightColor?: Color, splashColor?: Color, colorScheme?: ColorScheme, child?: MXWidget, layoutBehavior?: ButtonBarLayoutBehavior} = {}) {
    var jsObj = new ButtonTheme();
    jsObj.key = namedParameters.key;
    jsObj['textTheme'] = namedParameters.textTheme;
    jsObj['minWidth'] = namedParameters.minWidth;
    jsObj['height'] = namedParameters.height;
    jsObj['padding'] = namedParameters.padding;
    jsObj['shape'] = namedParameters.shape;
    jsObj['alignedDropdown'] = namedParameters.alignedDropdown;
    jsObj['buttonColor'] = namedParameters.buttonColor;
    jsObj['disabledColor'] = namedParameters.disabledColor;
    jsObj['focusColor'] = namedParameters.focusColor;
    jsObj['hoverColor'] = namedParameters.hoverColor;
    jsObj['highlightColor'] = namedParameters.highlightColor;
    jsObj['splashColor'] = namedParameters.splashColor;
    jsObj['colorScheme'] = namedParameters.colorScheme;
    jsObj.child = namedParameters.child;
    jsObj['layoutBehavior'] = namedParameters.layoutBehavior;
    jsObj['constructorName'] = 'bar';
    return jsObj;
  }
}
export { ButtonTheme };
class ButtonThemeData extends MXDartClass {
  minWidth: number;
  height: number;
  textTheme: ButtonTextTheme;
  layoutBehavior: ButtonBarLayoutBehavior;
  padding: EdgeInsetsGeometry;
  shape: ShapeBorder;
  alignedDropdown: boolean;
  buttonColor: Color;
  disabledColor: Color;
  focusColor: Color;
  hoverColor: Color;
  highlightColor: Color;
  splashColor: Color;
  colorScheme: ColorScheme;
  materialTapTargetSize: MaterialTapTargetSize;
  public constructor(namedParameters: {textTheme?: ButtonTextTheme, minWidth?: number, height?: number, padding?: EdgeInsetsGeometry, shape?: ShapeBorder, layoutBehavior?: ButtonBarLayoutBehavior, alignedDropdown?: boolean, buttonColor?: Color, disabledColor?: Color, focusColor?: Color, hoverColor?: Color, highlightColor?: Color, splashColor?: Color, colorScheme?: ColorScheme, materialTapTargetSize?: MaterialTapTargetSize} = {}) {
    super();
    this.textTheme = namedParameters.textTheme;
    this.minWidth = namedParameters.minWidth;
    this.height = namedParameters.height;
    this.padding = namedParameters.padding;
    this.shape = namedParameters.shape;
    this.layoutBehavior = namedParameters.layoutBehavior;
    this.alignedDropdown = namedParameters.alignedDropdown;
    this.buttonColor = namedParameters.buttonColor;
    this.disabledColor = namedParameters.disabledColor;
    this.focusColor = namedParameters.focusColor;
    this.hoverColor = namedParameters.hoverColor;
    this.highlightColor = namedParameters.highlightColor;
    this.splashColor = namedParameters.splashColor;
    this.colorScheme = namedParameters.colorScheme;
    this.materialTapTargetSize = namedParameters.materialTapTargetSize;
    this.className = 'ButtonThemeData';
  }
}
export { ButtonThemeData };
