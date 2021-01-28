//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { TargetPlatform } from '../foundation/platform';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { Animation } from '../animation/animation';
import { PopupMenuThemeData } from './popup-menu-theme';
import { ShapeBorder } from '../painting/borders';
import { ThemeData } from './theme-data';
import { PopupRoute } from '../widgets/routes';
import { RelativeRect } from '../rendering/stack';
import { Size, TextDirection, Color, Offset } from '../../../mx-dart-sdk';
import { AnimationController } from '../animation/animation-controller';
import { MouseCursor } from '../rendering/mouse-cursor';
import { TextStyle } from '../painting/text-style';
import { RenderBox, BoxConstraints } from '../rendering/box';
import { RenderShiftedBox, SingleChildLayoutDelegate } from '../rendering/shifted-box';
import { Key } from '../foundation/key';
import {
  StatefulWidget$,
  State$,
  BuildContext$,
  SingleChildRenderObjectWidget,
  Widget,
  StatelessWidget$,
} from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class PopupMenuEntry extends StatefulWidget$ {}
export { PopupMenuEntry };
class PopupMenuDivider extends PopupMenuEntry {
  height: number;
  public constructor(namedParameters: { key?: Key; height?: number } = {}) {
    super();
    this.key = namedParameters.key;
    this.height = namedParameters.height;
    this.className = 'PopupMenuDivider';
  }
}
export { PopupMenuDivider };
class _PopupMenuDividerState extends State$ {}
export { _PopupMenuDividerState };
class _MenuItem extends SingleChildRenderObjectWidget {
  onLayout: any;
  public constructor(namedParameters: { key?: Key; onLayout?: any; child?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.onLayout = namedParameters.onLayout;
    this.child = namedParameters.child;
    this.className = '_MenuItem';
  }
}
export { _MenuItem };
class _RenderMenuItem extends RenderShiftedBox {
  onLayout: any;
  public constructor(onLayout?: any, child?: RenderBox) {
    super();
    this.onLayout = onLayout;
    this['child'] = child;
    this.className = '_RenderMenuItem';
  }
}
export { _RenderMenuItem };
class PopupMenuItem extends PopupMenuEntry {
  value: any;
  enabled: boolean;
  height: number;
  textStyle: TextStyle;
  mouseCursor: MouseCursor;
  child: MXWidget;
  public constructor(
    namedParameters: {
      key?: Key;
      value?: any;
      enabled?: boolean;
      height?: number;
      textStyle?: TextStyle;
      mouseCursor?: MouseCursor;
      child?: MXWidget;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.value = namedParameters.value;
    this.enabled = namedParameters.enabled;
    this.height = namedParameters.height;
    this.textStyle = namedParameters.textStyle;
    this.mouseCursor = namedParameters.mouseCursor;
    this.child = namedParameters.child;
    this.className = 'PopupMenuItem';
  }
}
export { PopupMenuItem };
class PopupMenuItemState extends State$ {}
export { PopupMenuItemState };
class CheckedPopupMenuItem extends PopupMenuItem {
  checked: boolean;
  public constructor(
    namedParameters: { key?: Key; value?: any; checked?: boolean; enabled?: boolean; child?: MXWidget } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.value = namedParameters.value;
    this.checked = namedParameters.checked;
    this.enabled = namedParameters.enabled;
    this.child = namedParameters.child;
    this.className = 'CheckedPopupMenuItem';
  }
}
export { CheckedPopupMenuItem };
class _CheckedPopupMenuItemState extends PopupMenuItemState {
  controller: AnimationController;
}
export { _CheckedPopupMenuItemState };
class _PopupMenu extends StatelessWidget$ {
  route: _PopupMenuRoute;
  semanticLabel: string;
  public constructor(namedParameters: { key?: Key; route?: _PopupMenuRoute; semanticLabel?: string } = {}) {
    super();
    this.key = namedParameters.key;
    this.route = namedParameters.route;
    this.semanticLabel = namedParameters.semanticLabel;
    this.className = '_PopupMenu';
  }
}
export { _PopupMenu };
class _PopupMenuRouteLayout extends SingleChildLayoutDelegate {
  position: RelativeRect;
  itemSizes: Array<any>;
  selectedItemIndex: number;
  textDirection: TextDirection;
  public constructor(
    position?: RelativeRect,
    itemSizes?: Array<any>,
    selectedItemIndex?: number,
    textDirection?: TextDirection,
  ) {
    super();
    this.position = position;
    this.itemSizes = itemSizes;
    this.selectedItemIndex = selectedItemIndex;
    this.textDirection = textDirection;
    this.className = '_PopupMenuRouteLayout';
  }
}
export { _PopupMenuRouteLayout };
class _PopupMenuRoute extends PopupRoute {
  position: RelativeRect;
  items: Array<any>;
  itemSizes: Array<any>;
  initialValue: any;
  elevation: number;
  theme: ThemeData;
  semanticLabel: string;
  shape: ShapeBorder;
  color: Color;
  popupMenuTheme: PopupMenuThemeData;
  showMenuContext: BuildContext$;
  captureInheritedThemes: boolean;
  barrierLabel: string;
  public constructor(
    namedParameters: {
      position?: RelativeRect;
      items?: Array<any>;
      initialValue?: any;
      elevation?: number;
      theme?: ThemeData;
      popupMenuTheme?: PopupMenuThemeData;
      barrierLabel?: string;
      semanticLabel?: string;
      shape?: ShapeBorder;
      color?: Color;
      showMenuContext?: BuildContext$;
      captureInheritedThemes?: boolean;
    } = {},
  ) {
    super();
    this.position = namedParameters.position;
    this.items = namedParameters.items;
    this.initialValue = namedParameters.initialValue;
    this.elevation = namedParameters.elevation;
    this.theme = namedParameters.theme;
    this.popupMenuTheme = namedParameters.popupMenuTheme;
    this.barrierLabel = namedParameters.barrierLabel;
    this.semanticLabel = namedParameters.semanticLabel;
    this.shape = namedParameters.shape;
    this.color = namedParameters.color;
    this.showMenuContext = namedParameters.showMenuContext;
    this.captureInheritedThemes = namedParameters.captureInheritedThemes;
    this.className = '_PopupMenuRoute';
  }
}
export { _PopupMenuRoute };
class PopupMenuButton extends StatefulWidget$ {
  itemBuilder: any;
  initialValue: any;
  onSelected: any;
  onCanceled: any;
  tooltip: string;
  elevation: number;
  padding: EdgeInsetsGeometry;
  child: MXWidget;
  icon: MXWidget;
  offset: Offset;
  enabled: boolean;
  shape: ShapeBorder;
  color: Color;
  captureInheritedThemes: boolean;
  public constructor(
    namedParameters: {
      key?: Key;
      itemBuilder?: any;
      initialValue?: any;
      onSelected?: any;
      onCanceled?: any;
      tooltip?: string;
      elevation?: number;
      padding?: EdgeInsetsGeometry;
      child?: MXWidget;
      icon?: MXWidget;
      offset?: Offset;
      enabled?: boolean;
      shape?: ShapeBorder;
      color?: Color;
      captureInheritedThemes?: boolean;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.itemBuilder = namedParameters.itemBuilder;
    this.initialValue = namedParameters.initialValue;
    this.onSelected = namedParameters.onSelected;
    this.onCanceled = namedParameters.onCanceled;
    this.tooltip = namedParameters.tooltip;
    this.elevation = namedParameters.elevation;
    this.padding = namedParameters.padding;
    this.child = namedParameters.child;
    this.icon = namedParameters.icon;
    this.offset = namedParameters.offset;
    this.enabled = namedParameters.enabled;
    this.shape = namedParameters.shape;
    this.color = namedParameters.color;
    this.captureInheritedThemes = namedParameters.captureInheritedThemes;
    this.className = 'PopupMenuButton';
    // MX Modified begin
    this['children'] = [];
    // MX Modified end
  }
  // MX modified begin
  preBuild(buildContext: any) {
    if (this.itemBuilder) {
      this['children'] = this.itemBuilder(buildContext);
      delete this.itemBuilder;
    }
  }
  // MX modified end
}
export { PopupMenuButton };
class PopupMenuButtonState extends State$ {}
export { PopupMenuButtonState };
