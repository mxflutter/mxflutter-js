//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { SemanticsConfiguration } from '../semantics/semantics';
import { PaintingContext } from '../rendering/object';
import { RenderToggleable } from './toggleable';
import { BoxConstraints } from '../rendering/box';
import { TickerProvider } from '../scheduler/ticker';
import { ActivateIntent } from '../widgets/actions';
import { Key } from '../foundation/key';
import { FocusNode } from '../widgets/focus-manager';
import { MaterialTapTargetSize, VisualDensity, ThemeData } from './theme-data';
import { Color, Offset } from '../../../mx-dart-sdk';
import { MouseCursor } from '../rendering/mouse-cursor';
import { StatefulWidget$, State$, BuildContext$, LeafRenderObjectWidget } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class Radio extends StatefulWidget$ {
  value: any;
  groupValue: any;
  onChanged: any;
  mouseCursor: MouseCursor;
  toggleable: boolean;
  activeColor: Color;
  materialTapTargetSize: MaterialTapTargetSize;
  visualDensity: VisualDensity;
  focusColor: Color;
  hoverColor: Color;
  focusNode: FocusNode;
  autofocus: boolean;
  public constructor(
    namedParameters: {
      key?: Key;
      value?: any;
      groupValue?: any;
      onChanged?: any;
      mouseCursor?: MouseCursor;
      toggleable?: boolean;
      activeColor?: Color;
      focusColor?: Color;
      hoverColor?: Color;
      materialTapTargetSize?: MaterialTapTargetSize;
      visualDensity?: VisualDensity;
      focusNode?: FocusNode;
      autofocus?: boolean;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.value = namedParameters.value;
    this.groupValue = namedParameters.groupValue;
    this.onChanged = namedParameters.onChanged;
    this.mouseCursor = namedParameters.mouseCursor;
    this.toggleable = namedParameters.toggleable;
    this.activeColor = namedParameters.activeColor;
    this.focusColor = namedParameters.focusColor;
    this.hoverColor = namedParameters.hoverColor;
    this.materialTapTargetSize = namedParameters.materialTapTargetSize;
    this.visualDensity = namedParameters.visualDensity;
    this.focusNode = namedParameters.focusNode;
    this.autofocus = namedParameters.autofocus;
    this.className = 'Radio';
  }
}
export { Radio };
class _RadioState extends State$ {
  actionMap: Map<any, any>;
  focused: boolean;
  hovering: boolean;
}
export { _RadioState };
class _RadioRenderObjectWidget extends LeafRenderObjectWidget {
  selected: boolean;
  hasFocus: boolean;
  hovering: boolean;
  inactiveColor: Color;
  activeColor: Color;
  focusColor: Color;
  hoverColor: Color;
  onChanged: any;
  toggleable: boolean;
  vsync: TickerProvider;
  additionalConstraints: BoxConstraints;
  public constructor(
    namedParameters: {
      key?: Key;
      selected?: boolean;
      activeColor?: Color;
      inactiveColor?: Color;
      focusColor?: Color;
      hoverColor?: Color;
      additionalConstraints?: BoxConstraints;
      onChanged?: any;
      toggleable?: boolean;
      vsync?: TickerProvider;
      hasFocus?: boolean;
      hovering?: boolean;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.selected = namedParameters.selected;
    this.activeColor = namedParameters.activeColor;
    this.inactiveColor = namedParameters.inactiveColor;
    this.focusColor = namedParameters.focusColor;
    this.hoverColor = namedParameters.hoverColor;
    this.additionalConstraints = namedParameters.additionalConstraints;
    this.onChanged = namedParameters.onChanged;
    this.toggleable = namedParameters.toggleable;
    this.hasFocus = namedParameters.hasFocus;
    this.hovering = namedParameters.hovering;
    this.className = '_RadioRenderObjectWidget';
  }
}
export { _RadioRenderObjectWidget };
class _RenderRadio extends RenderToggleable {
  public constructor(
    namedParameters: {
      value?: boolean;
      activeColor?: Color;
      inactiveColor?: Color;
      focusColor?: Color;
      hoverColor?: Color;
      onChanged?: any;
      tristate?: boolean;
      additionalConstraints?: BoxConstraints;
      vsync?: TickerProvider;
      hasFocus?: boolean;
      hovering?: boolean;
    } = {},
  ) {
    super();
    this['value'] = namedParameters.value;
    this['activeColor'] = namedParameters.activeColor;
    this['inactiveColor'] = namedParameters.inactiveColor;
    this['focusColor'] = namedParameters.focusColor;
    this['hoverColor'] = namedParameters.hoverColor;
    this['onChanged'] = namedParameters.onChanged;
    this['tristate'] = namedParameters.tristate;
    this['additionalConstraints'] = namedParameters.additionalConstraints;
    this['hasFocus'] = namedParameters.hasFocus;
    this['hovering'] = namedParameters.hovering;
    this.className = '_RenderRadio';
  }
}
export { _RenderRadio };
