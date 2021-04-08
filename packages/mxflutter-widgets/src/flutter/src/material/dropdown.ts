// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { InputDecoration } from './input-decorator';
import { FormField, AutovalidateMode, FormFieldState } from '../widgets/form';
import { Orientation } from '../widgets/media-query';
import { FocusNode, FocusHighlightMode } from '../widgets/focus-manager';
import { RenderProxyBox } from '../rendering/proxy-box';
import { ScrollController } from '../widgets/scroll-controller';
import { TextStyle } from '../painting/text-style';
import { ThemeData } from './theme-data';
import { PopupRoute } from '../widgets/routes';
import { SingleChildLayoutDelegate } from '../rendering/shifted-box';
import { CurvedAnimation } from '../animation/animations';
import { Key } from '../foundation/key';
import { BoxConstraints, RenderBox } from '../rendering/box';
import { EdgeInsets, EdgeInsetsGeometry } from '../painting/edge-insets';
import { StatefulWidget, State, StatelessWidget, SingleChildRenderObjectWidget, Widget, InheritedWidget } from '../widgets/framework';
import { ScrollBehavior } from '../widgets/scroll-configuration';
import { BoxPainter } from '../painting/decoration';
import { Animation } from '../animation/animation';
import { Color, Rect, TextDirection } from '../../../mx-dart-sdk';
import { CustomPainter } from '../rendering/custom-paint';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class _DropdownMenuPainter extends CustomPainter {
  color: Color;
  elevation: number;
  selectedIndex: number;
  resize: Animation;
  getSelectedItemOffset: any;
  painter: BoxPainter;
  public constructor(namedParameters: {color?: Color, elevation?: number, selectedIndex?: number, resize?: Animation, getSelectedItemOffset?: any} = {}) {
    super();
    this.color = namedParameters.color;
    this.elevation = namedParameters.elevation;
    this.selectedIndex = namedParameters.selectedIndex;
    this.resize = namedParameters.resize;
    this.getSelectedItemOffset = namedParameters.getSelectedItemOffset;
    this.className = '_DropdownMenuPainter';
  }
}
export { _DropdownMenuPainter };
class _DropdownScrollBehavior extends ScrollBehavior {}
export { _DropdownScrollBehavior };
class _DropdownMenuItemButton extends StatefulWidget {
  route: _DropdownRoute;
  padding: EdgeInsets;
  buttonRect: Rect;
  constraints: BoxConstraints;
  itemIndex: number;
  public constructor(namedParameters: {key?: Key, padding?: EdgeInsets, route?: _DropdownRoute, buttonRect?: Rect, constraints?: BoxConstraints, itemIndex?: number} = {}) {
    super();
    this.key = namedParameters.key;
    this.padding = namedParameters.padding;
    this.route = namedParameters.route;
    this.buttonRect = namedParameters.buttonRect;
    this.constraints = namedParameters.constraints;
    this.itemIndex = namedParameters.itemIndex;
    this.className = '_DropdownMenuItemButton';
  }
}
export { _DropdownMenuItemButton };
class _DropdownMenuItemButtonState extends State {}
export { _DropdownMenuItemButtonState };
class _DropdownMenu extends StatefulWidget {
  route: _DropdownRoute;
  padding: EdgeInsets;
  buttonRect: Rect;
  constraints: BoxConstraints;
  dropdownColor: Color;
  public constructor(namedParameters: {key?: Key, padding?: EdgeInsets, route?: _DropdownRoute, buttonRect?: Rect, constraints?: BoxConstraints, dropdownColor?: Color} = {}) {
    super();
    this.key = namedParameters.key;
    this.padding = namedParameters.padding;
    this.route = namedParameters.route;
    this.buttonRect = namedParameters.buttonRect;
    this.constraints = namedParameters.constraints;
    this.dropdownColor = namedParameters.dropdownColor;
    this.className = '_DropdownMenu';
  }
}
export { _DropdownMenu };
class _DropdownMenuState extends State {
  fadeOpacity: CurvedAnimation;
  resize: CurvedAnimation;
}
export { _DropdownMenuState };
class _DropdownMenuRouteLayout extends SingleChildLayoutDelegate {
  buttonRect: Rect;
  route: _DropdownRoute;
  textDirection: TextDirection;
  public constructor(namedParameters: {buttonRect?: Rect, route?: _DropdownRoute, textDirection?: TextDirection} = {}) {
    super();
    this.buttonRect = namedParameters.buttonRect;
    this.route = namedParameters.route;
    this.textDirection = namedParameters.textDirection;
    this.className = '_DropdownMenuRouteLayout';
  }
}
export { _DropdownMenuRouteLayout };
class _DropdownRouteResult extends MXDartClass {
  result: any;
  public constructor(result?: any) {
    super();
    this.result = result;
    this.className = '_DropdownRouteResult';
  }
}
export { _DropdownRouteResult };
class _MenuLimits extends MXDartClass {
  top: number;
  bottom: number;
  height: number;
  scrollOffset: number;
  public constructor(top?: number, bottom?: number, height?: number, scrollOffset?: number) {
    super();
    this.top = top;
    this.bottom = bottom;
    this.height = height;
    this.scrollOffset = scrollOffset;
    this.className = '_MenuLimits';
  }
}
export { _MenuLimits };
class _DropdownRoute extends PopupRoute {
  items: Array<any>;
  padding: EdgeInsetsGeometry;
  buttonRect: Rect;
  selectedIndex: number;
  elevation: number;
  theme: ThemeData;
  style: TextStyle;
  itemHeight: number;
  dropdownColor: Color;
  itemHeights: Array<any>;
  scrollController: ScrollController;
  barrierLabel: string;
  public constructor(namedParameters: {items?: Array<any>, padding?: EdgeInsetsGeometry, buttonRect?: Rect, selectedIndex?: number, elevation?: number, theme?: ThemeData, style?: TextStyle, barrierLabel?: string, itemHeight?: number, dropdownColor?: Color} = {}) {
    super();
    this.items = namedParameters.items;
    this.padding = namedParameters.padding;
    this.buttonRect = namedParameters.buttonRect;
    this.selectedIndex = namedParameters.selectedIndex;
    this.elevation = namedParameters.elevation;
    this.theme = namedParameters.theme;
    this.style = namedParameters.style;
    this.barrierLabel = namedParameters.barrierLabel;
    this.itemHeight = namedParameters.itemHeight;
    this.dropdownColor = namedParameters.dropdownColor;
    this.className = '_DropdownRoute';
  }
}
export { _DropdownRoute };
class _DropdownRoutePage extends StatelessWidget {
  route: _DropdownRoute;
  constraints: BoxConstraints;
  items: Array<any>;
  padding: EdgeInsetsGeometry;
  buttonRect: Rect;
  selectedIndex: number;
  elevation: number;
  theme: ThemeData;
  style: TextStyle;
  dropdownColor: Color;
  public constructor(namedParameters: {key?: Key, route?: _DropdownRoute, constraints?: BoxConstraints, items?: Array<any>, padding?: EdgeInsetsGeometry, buttonRect?: Rect, selectedIndex?: number, elevation?: number, theme?: ThemeData, style?: TextStyle, dropdownColor?: Color} = {}) {
    super();
    this.key = namedParameters.key;
    this.route = namedParameters.route;
    this.constraints = namedParameters.constraints;
    this.items = namedParameters.items;
    this.padding = namedParameters.padding;
    this.buttonRect = namedParameters.buttonRect;
    this.selectedIndex = namedParameters.selectedIndex;
    this.elevation = namedParameters.elevation;
    this.theme = namedParameters.theme;
    this.style = namedParameters.style;
    this.dropdownColor = namedParameters.dropdownColor;
    this.className = '_DropdownRoutePage';
  }
}
export { _DropdownRoutePage };
class _MenuItem extends SingleChildRenderObjectWidget {
  onLayout: any;
  item: DropdownMenuItem;
  public constructor(namedParameters: {key?: Key, onLayout?: any, item?: DropdownMenuItem} = {}) {
    super();
    this.key = namedParameters.key;
    this.onLayout = namedParameters.onLayout;
    this.item = namedParameters.item;
    this.className = '_MenuItem';
  }
}
export { _MenuItem };
class _RenderMenuItem extends RenderProxyBox {
  onLayout: any;
  public constructor(onLayout?: any, child?: RenderBox) {
    super();
    this.onLayout = onLayout;
    this['child'] = child;
    this.className = '_RenderMenuItem';
  }
}
export { _RenderMenuItem };
class _DropdownMenuItemContainer extends StatelessWidget {
  child: MXWidget;
  public constructor(namedParameters: {key?: Key, child?: MXWidget} = {}) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.className = '_DropdownMenuItemContainer';
  }
}
export { _DropdownMenuItemContainer };
class DropdownMenuItem extends _DropdownMenuItemContainer {
  onTap: any;
  value: any;
  public constructor(namedParameters: {key?: Key, onTap?: any, value?: any, child?: MXWidget} = {}) {
    super();
    this.key = namedParameters.key;
    this.onTap = namedParameters.onTap;
    this.value = namedParameters.value;
    this.child = namedParameters.child;
    this.className = 'DropdownMenuItem';
  }
}
export { DropdownMenuItem };
class DropdownButtonHideUnderline extends InheritedWidget {
  public constructor(namedParameters: {key?: Key, child?: MXWidget} = {}) {
    super();
    this['key'] = namedParameters.key;
    this['child'] = namedParameters.child;
    this.className = 'DropdownButtonHideUnderline';
  }
}
export { DropdownButtonHideUnderline };
class DropdownButton extends StatefulWidget {
  items: Array<any>;
  value: any;
  hint: MXWidget;
  disabledHint: MXWidget;
  onChanged: any;
  onTap: any;
  selectedItemBuilder: any;
  elevation: number;
  style: TextStyle;
  underline: MXWidget;
  icon: MXWidget;
  iconDisabledColor: Color;
  iconEnabledColor: Color;
  iconSize: number;
  isDense: boolean;
  isExpanded: boolean;
  itemHeight: number;
  focusColor: Color;
  focusNode: FocusNode;
  autofocus: boolean;
  dropdownColor: Color;
  public constructor(namedParameters: {key?: Key, items?: Array<any>, selectedItemBuilder?: any, value?: any, hint?: MXWidget, disabledHint?: MXWidget, onChanged?: any, onTap?: any, elevation?: number, style?: TextStyle, underline?: MXWidget, icon?: MXWidget, iconDisabledColor?: Color, iconEnabledColor?: Color, iconSize?: number, isDense?: boolean, isExpanded?: boolean, itemHeight?: number, focusColor?: Color, focusNode?: FocusNode, autofocus?: boolean, dropdownColor?: Color} = {}) {
    super();
    this.key = namedParameters.key;
    this.items = namedParameters.items;
    this.selectedItemBuilder = namedParameters.selectedItemBuilder;
    this.value = namedParameters.value;
    this.hint = namedParameters.hint;
    this.disabledHint = namedParameters.disabledHint;
    this.onChanged = namedParameters.onChanged;
    this.onTap = namedParameters.onTap;
    this.elevation = namedParameters.elevation;
    this.style = namedParameters.style;
    this.underline = namedParameters.underline;
    this.icon = namedParameters.icon;
    this.iconDisabledColor = namedParameters.iconDisabledColor;
    this.iconEnabledColor = namedParameters.iconEnabledColor;
    this.iconSize = namedParameters.iconSize;
    this.isDense = namedParameters.isDense;
    this.isExpanded = namedParameters.isExpanded;
    this.itemHeight = namedParameters.itemHeight;
    this.focusColor = namedParameters.focusColor;
    this.focusNode = namedParameters.focusNode;
    this.autofocus = namedParameters.autofocus;
    this.dropdownColor = namedParameters.dropdownColor;
    this.className = 'DropdownButton';
  }
}
export { DropdownButton };
class _DropdownButtonState extends State {
  selectedIndex: number;
  dropdownRoute: _DropdownRoute;
  lastOrientation: Orientation;
  internalNode: FocusNode;
  hasPrimaryFocus: boolean;
  actionMap: Map<any, any>;
  focusHighlightMode: FocusHighlightMode;
}
export { _DropdownButtonState };
class DropdownButtonFormField extends FormField {
  onChanged: any;
  decoration: InputDecoration;
  public constructor(namedParameters: {key?: Key, items?: Array<any>, selectedItemBuilder?: any, value?: any, hint?: MXWidget, disabledHint?: MXWidget, onChanged?: any, onTap?: any, elevation?: number, style?: TextStyle, icon?: MXWidget, iconDisabledColor?: Color, iconEnabledColor?: Color, iconSize?: number, isDense?: boolean, isExpanded?: boolean, itemHeight?: number, focusColor?: Color, focusNode?: FocusNode, autofocus?: boolean, dropdownColor?: Color, decoration?: InputDecoration, onSaved?: any, validator?: any, autovalidate?: boolean, autovalidateMode?: AutovalidateMode} = {}) {
    super();
    this.key = namedParameters.key;
    this['items'] = namedParameters.items;
    this['selectedItemBuilder'] = namedParameters.selectedItemBuilder;
    this['value'] = namedParameters.value;
    this['hint'] = namedParameters.hint;
    this['disabledHint'] = namedParameters.disabledHint;
    this.onChanged = namedParameters.onChanged;
    this['onTap'] = namedParameters.onTap;
    this['elevation'] = namedParameters.elevation;
    this['style'] = namedParameters.style;
    this['icon'] = namedParameters.icon;
    this['iconDisabledColor'] = namedParameters.iconDisabledColor;
    this['iconEnabledColor'] = namedParameters.iconEnabledColor;
    this['iconSize'] = namedParameters.iconSize;
    this['isDense'] = namedParameters.isDense;
    this['isExpanded'] = namedParameters.isExpanded;
    this['itemHeight'] = namedParameters.itemHeight;
    this['focusColor'] = namedParameters.focusColor;
    this['focusNode'] = namedParameters.focusNode;
    this['autofocus'] = namedParameters.autofocus;
    this['dropdownColor'] = namedParameters.dropdownColor;
    this.decoration = namedParameters.decoration;
    this.onSaved = namedParameters.onSaved;
    this.validator = namedParameters.validator;
    this.autovalidate = namedParameters.autovalidate;
    this.autovalidateMode = namedParameters.autovalidateMode;
    this.className = 'DropdownButtonFormField';
  }
}
export { DropdownButtonFormField };
class _DropdownButtonFormFieldState extends FormFieldState {}
export { _DropdownButtonFormFieldState };
