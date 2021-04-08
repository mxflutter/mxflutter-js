// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { RenderToggleable } from './toggleable';
import { BoxConstraints } from '../rendering/box';
import { TickerProvider } from '../scheduler/ticker';
import { Key } from '../foundation/key';
import { FocusNode } from '../widgets/focus-manager';
import { MaterialTapTargetSize, VisualDensity } from './theme-data';
import { Color } from '../../../mx-dart-sdk';
import { MouseCursor } from '../rendering/mouse-cursor';
import { StatefulWidget, State, LeafRenderObjectWidget } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class Checkbox extends StatefulWidget {
  value: boolean;
  onChanged: any;
  mouseCursor: MouseCursor;
  activeColor: Color;
  checkColor: Color;
  tristate: boolean;
  materialTapTargetSize: MaterialTapTargetSize;
  visualDensity: VisualDensity;
  focusColor: Color;
  hoverColor: Color;
  focusNode: FocusNode;
  autofocus: boolean;
  public constructor(namedParameters: {key?: Key, value?: boolean, tristate?: boolean, onChanged?: any, mouseCursor?: MouseCursor, activeColor?: Color, checkColor?: Color, focusColor?: Color, hoverColor?: Color, materialTapTargetSize?: MaterialTapTargetSize, visualDensity?: VisualDensity, focusNode?: FocusNode, autofocus?: boolean} = {}) {
    super();
    this.key = namedParameters.key;
    this.value = namedParameters.value;
    this.tristate = namedParameters.tristate;
    this.onChanged = namedParameters.onChanged;
    this.mouseCursor = namedParameters.mouseCursor;
    this.activeColor = namedParameters.activeColor;
    this.checkColor = namedParameters.checkColor;
    this.focusColor = namedParameters.focusColor;
    this.hoverColor = namedParameters.hoverColor;
    this.materialTapTargetSize = namedParameters.materialTapTargetSize;
    this.visualDensity = namedParameters.visualDensity;
    this.focusNode = namedParameters.focusNode;
    this.autofocus = namedParameters.autofocus;
    this.className = 'Checkbox';
  }
  static get width() {
    return 18.0;
  }
}
export { Checkbox };
class _CheckboxState extends State {
  actionMap: Map<any, any>;
  focused: boolean;
  hovering: boolean;
}
export { _CheckboxState };
class _CheckboxRenderObjectWidget extends LeafRenderObjectWidget {
  value: boolean;
  tristate: boolean;
  hasFocus: boolean;
  hovering: boolean;
  activeColor: Color;
  checkColor: Color;
  inactiveColor: Color;
  focusColor: Color;
  hoverColor: Color;
  onChanged: any;
  vsync: TickerProvider;
  additionalConstraints: BoxConstraints;
  public constructor(namedParameters: {key?: Key, value?: boolean, tristate?: boolean, activeColor?: Color, checkColor?: Color, inactiveColor?: Color, focusColor?: Color, hoverColor?: Color, onChanged?: any, vsync?: TickerProvider, additionalConstraints?: BoxConstraints, hasFocus?: boolean, hovering?: boolean} = {}) {
    super();
    this.key = namedParameters.key;
    this.value = namedParameters.value;
    this.tristate = namedParameters.tristate;
    this.activeColor = namedParameters.activeColor;
    this.checkColor = namedParameters.checkColor;
    this.inactiveColor = namedParameters.inactiveColor;
    this.focusColor = namedParameters.focusColor;
    this.hoverColor = namedParameters.hoverColor;
    this.onChanged = namedParameters.onChanged;
    this.additionalConstraints = namedParameters.additionalConstraints;
    this.hasFocus = namedParameters.hasFocus;
    this.hovering = namedParameters.hovering;
    this.className = '_CheckboxRenderObjectWidget';
  }
}
export { _CheckboxRenderObjectWidget };
class _RenderCheckbox extends RenderToggleable {
  oldValue: boolean;
  checkColor: Color;
  public constructor(namedParameters: {value?: boolean, tristate?: boolean, activeColor?: Color, checkColor?: Color, inactiveColor?: Color, focusColor?: Color, hoverColor?: Color, additionalConstraints?: BoxConstraints, onChanged?: any, hasFocus?: boolean, hovering?: boolean, vsync?: TickerProvider} = {}) {
    super();
    this.value = namedParameters.value;
    this.tristate = namedParameters.tristate;
    this.activeColor = namedParameters.activeColor;
    this.checkColor = namedParameters.checkColor;
    this.inactiveColor = namedParameters.inactiveColor;
    this.focusColor = namedParameters.focusColor;
    this.hoverColor = namedParameters.hoverColor;
    this.additionalConstraints = namedParameters.additionalConstraints;
    this.onChanged = namedParameters.onChanged;
    this.hasFocus = namedParameters.hasFocus;
    this.hovering = namedParameters.hovering;
    this.className = '_RenderCheckbox';
  }
}
export { _RenderCheckbox };
