//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import {
  FloatingHeaderSnapConfiguration,
  OverScrollHeaderStretchConfiguration,
} from '../rendering/sliver-persistent-header';
import { SliverPersistentHeaderDelegate } from '../widgets/sliver-persistent-header';
import { ScrollPosition } from '../widgets/scroll-position';
import { ThemeData } from './theme-data';
import { Key } from '../foundation/key';
import { TextTheme } from './text-theme';
import { IconThemeData } from '../widgets/icon-theme-data';
import { ShapeBorder } from '../painting/borders';
import { PreferredSizeWidget } from '../widgets/preferred-size';
import { StatefulWidget$, Widget, State$, BuildContext$, SingleChildRenderObjectWidget } from '../widgets/framework';
import { Size, Color, Brightness, TextDirection } from '../../../mx-dart-sdk';
import { BoxConstraints, RenderBox } from '../rendering/box';
import { SingleChildLayoutDelegate, RenderAligningShiftedBox } from '../rendering/shifted-box';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class _ToolbarContainerLayout extends SingleChildLayoutDelegate {
  toolbarHeight: number;
  public constructor(toolbarHeight?: number) {
    super();
    this.toolbarHeight = toolbarHeight;
    this.className = '_ToolbarContainerLayout';
  }
}
export { _ToolbarContainerLayout };
class AppBar extends StatefulWidget$ {
  leading: MXWidget;
  automaticallyImplyLeading: boolean;
  title: MXWidget;
  actions: Array<any>;
  flexibleSpace: MXWidget;
  bottom: PreferredSizeWidget;
  elevation: number;
  shadowColor: Color;
  shape: ShapeBorder;
  backgroundColor: Color;
  brightness: Brightness;
  iconTheme: IconThemeData;
  actionsIconTheme: IconThemeData;
  textTheme: TextTheme;
  primary: boolean;
  centerTitle: boolean;
  excludeHeaderSemantics: boolean;
  titleSpacing: number;
  toolbarOpacity: number;
  bottomOpacity: number;
  preferredSize: Size;
  toolbarHeight: number;
  public constructor(
    namedParameters: {
      key?: Key;
      leading?: MXWidget;
      automaticallyImplyLeading?: boolean;
      title?: MXWidget;
      actions?: Array<any>;
      flexibleSpace?: MXWidget;
      bottom?: PreferredSizeWidget;
      elevation?: number;
      shadowColor?: Color;
      shape?: ShapeBorder;
      backgroundColor?: Color;
      brightness?: Brightness;
      iconTheme?: IconThemeData;
      actionsIconTheme?: IconThemeData;
      textTheme?: TextTheme;
      primary?: boolean;
      centerTitle?: boolean;
      excludeHeaderSemantics?: boolean;
      titleSpacing?: number;
      toolbarOpacity?: number;
      bottomOpacity?: number;
      toolbarHeight?: number;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.leading = namedParameters.leading;
    this.automaticallyImplyLeading = namedParameters.automaticallyImplyLeading;
    this.title = namedParameters.title;
    this.actions = namedParameters.actions;
    this.flexibleSpace = namedParameters.flexibleSpace;
    this.bottom = namedParameters.bottom;
    this.elevation = namedParameters.elevation;
    this.shadowColor = namedParameters.shadowColor;
    this.shape = namedParameters.shape;
    this.backgroundColor = namedParameters.backgroundColor;
    this.brightness = namedParameters.brightness;
    this.iconTheme = namedParameters.iconTheme;
    this.actionsIconTheme = namedParameters.actionsIconTheme;
    this.textTheme = namedParameters.textTheme;
    this.primary = namedParameters.primary;
    this.centerTitle = namedParameters.centerTitle;
    this.excludeHeaderSemantics = namedParameters.excludeHeaderSemantics;
    this.titleSpacing = namedParameters.titleSpacing;
    this.toolbarOpacity = namedParameters.toolbarOpacity;
    this.bottomOpacity = namedParameters.bottomOpacity;
    this.toolbarHeight = namedParameters.toolbarHeight;
    this.className = 'AppBar';
  }
}
export { AppBar };
class _AppBarState extends State$ {}
export { _AppBarState };
class _FloatingAppBar extends StatefulWidget$ {
  child: MXWidget;
  public constructor(namedParameters: { key?: Key; child?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.child = namedParameters.child;
    this.className = '_FloatingAppBar';
  }
}
export { _FloatingAppBar };
class _FloatingAppBarState extends State$ {
  position: ScrollPosition;
}
export { _FloatingAppBarState };
class _SliverAppBarDelegate extends SliverPersistentHeaderDelegate {
  leading: MXWidget;
  automaticallyImplyLeading: boolean;
  title: MXWidget;
  actions: Array<any>;
  flexibleSpace: MXWidget;
  bottom: PreferredSizeWidget;
  elevation: number;
  shadowColor: Color;
  forceElevated: boolean;
  backgroundColor: Color;
  brightness: Brightness;
  iconTheme: IconThemeData;
  actionsIconTheme: IconThemeData;
  textTheme: TextTheme;
  primary: boolean;
  centerTitle: boolean;
  excludeHeaderSemantics: boolean;
  titleSpacing: number;
  expandedHeight: number;
  collapsedHeight: number;
  topPadding: number;
  floating: boolean;
  pinned: boolean;
  shape: ShapeBorder;
  toolbarHeight: number;
  bottomHeight: number;
  snapConfiguration: FloatingHeaderSnapConfiguration;
  stretchConfiguration: OverScrollHeaderStretchConfiguration;
  public constructor(
    namedParameters: {
      leading?: MXWidget;
      automaticallyImplyLeading?: boolean;
      title?: MXWidget;
      actions?: Array<any>;
      flexibleSpace?: MXWidget;
      bottom?: PreferredSizeWidget;
      elevation?: number;
      shadowColor?: Color;
      forceElevated?: boolean;
      backgroundColor?: Color;
      brightness?: Brightness;
      iconTheme?: IconThemeData;
      actionsIconTheme?: IconThemeData;
      textTheme?: TextTheme;
      primary?: boolean;
      centerTitle?: boolean;
      excludeHeaderSemantics?: boolean;
      titleSpacing?: number;
      expandedHeight?: number;
      collapsedHeight?: number;
      topPadding?: number;
      floating?: boolean;
      pinned?: boolean;
      snapConfiguration?: FloatingHeaderSnapConfiguration;
      stretchConfiguration?: OverScrollHeaderStretchConfiguration;
      shape?: ShapeBorder;
      toolbarHeight?: number;
    } = {},
  ) {
    super();
    this.leading = namedParameters.leading;
    this.automaticallyImplyLeading = namedParameters.automaticallyImplyLeading;
    this.title = namedParameters.title;
    this.actions = namedParameters.actions;
    this.flexibleSpace = namedParameters.flexibleSpace;
    this.bottom = namedParameters.bottom;
    this.elevation = namedParameters.elevation;
    this.shadowColor = namedParameters.shadowColor;
    this.forceElevated = namedParameters.forceElevated;
    this.backgroundColor = namedParameters.backgroundColor;
    this.brightness = namedParameters.brightness;
    this.iconTheme = namedParameters.iconTheme;
    this.actionsIconTheme = namedParameters.actionsIconTheme;
    this.textTheme = namedParameters.textTheme;
    this.primary = namedParameters.primary;
    this.centerTitle = namedParameters.centerTitle;
    this.excludeHeaderSemantics = namedParameters.excludeHeaderSemantics;
    this.titleSpacing = namedParameters.titleSpacing;
    this.expandedHeight = namedParameters.expandedHeight;
    this.collapsedHeight = namedParameters.collapsedHeight;
    this.topPadding = namedParameters.topPadding;
    this.floating = namedParameters.floating;
    this.pinned = namedParameters.pinned;
    this.snapConfiguration = namedParameters.snapConfiguration;
    this.stretchConfiguration = namedParameters.stretchConfiguration;
    this.shape = namedParameters.shape;
    this.toolbarHeight = namedParameters.toolbarHeight;
    this.className = '_SliverAppBarDelegate';
  }
}
export { _SliverAppBarDelegate };
class SliverAppBar extends StatefulWidget$ {
  leading: MXWidget;
  automaticallyImplyLeading: boolean;
  title: MXWidget;
  actions: Array<any>;
  flexibleSpace: MXWidget;
  bottom: PreferredSizeWidget;
  elevation: number;
  shadowColor: Color;
  forceElevated: boolean;
  backgroundColor: Color;
  brightness: Brightness;
  iconTheme: IconThemeData;
  actionsIconTheme: IconThemeData;
  textTheme: TextTheme;
  primary: boolean;
  centerTitle: boolean;
  excludeHeaderSemantics: boolean;
  titleSpacing: number;
  collapsedHeight: number;
  expandedHeight: number;
  floating: boolean;
  pinned: boolean;
  shape: ShapeBorder;
  snap: boolean;
  stretch: boolean;
  stretchTriggerOffset: number;
  onStretchTrigger: any;
  toolbarHeight: number;
  public constructor(
    namedParameters: {
      key?: Key;
      leading?: MXWidget;
      automaticallyImplyLeading?: boolean;
      title?: MXWidget;
      actions?: Array<any>;
      flexibleSpace?: MXWidget;
      bottom?: PreferredSizeWidget;
      elevation?: number;
      shadowColor?: Color;
      forceElevated?: boolean;
      backgroundColor?: Color;
      brightness?: Brightness;
      iconTheme?: IconThemeData;
      actionsIconTheme?: IconThemeData;
      textTheme?: TextTheme;
      primary?: boolean;
      centerTitle?: boolean;
      excludeHeaderSemantics?: boolean;
      titleSpacing?: number;
      collapsedHeight?: number;
      expandedHeight?: number;
      floating?: boolean;
      pinned?: boolean;
      snap?: boolean;
      stretch?: boolean;
      stretchTriggerOffset?: number;
      onStretchTrigger?: any;
      shape?: ShapeBorder;
      toolbarHeight?: number;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.leading = namedParameters.leading;
    this.automaticallyImplyLeading = namedParameters.automaticallyImplyLeading;
    this.title = namedParameters.title;
    this.actions = namedParameters.actions;
    this.flexibleSpace = namedParameters.flexibleSpace;
    this.bottom = namedParameters.bottom;
    this.elevation = namedParameters.elevation;
    this.shadowColor = namedParameters.shadowColor;
    this.forceElevated = namedParameters.forceElevated;
    this.backgroundColor = namedParameters.backgroundColor;
    this.brightness = namedParameters.brightness;
    this.iconTheme = namedParameters.iconTheme;
    this.actionsIconTheme = namedParameters.actionsIconTheme;
    this.textTheme = namedParameters.textTheme;
    this.primary = namedParameters.primary;
    this.centerTitle = namedParameters.centerTitle;
    this.excludeHeaderSemantics = namedParameters.excludeHeaderSemantics;
    this.titleSpacing = namedParameters.titleSpacing;
    this.collapsedHeight = namedParameters.collapsedHeight;
    this.expandedHeight = namedParameters.expandedHeight;
    this.floating = namedParameters.floating;
    this.pinned = namedParameters.pinned;
    this.snap = namedParameters.snap;
    this.stretch = namedParameters.stretch;
    this.stretchTriggerOffset = namedParameters.stretchTriggerOffset;
    this.onStretchTrigger = namedParameters.onStretchTrigger;
    this.shape = namedParameters.shape;
    this.toolbarHeight = namedParameters.toolbarHeight;
    this.className = 'SliverAppBar';
  }
}
export { SliverAppBar };
class _SliverAppBarState extends State$ {
  snapConfiguration: FloatingHeaderSnapConfiguration;
  stretchConfiguration: OverScrollHeaderStretchConfiguration;
}
export { _SliverAppBarState };
class _AppBarTitleBox extends SingleChildRenderObjectWidget {
  public constructor(namedParameters: { key?: Key; child?: MXWidget } = {}) {
    super();
    this['key'] = namedParameters.key;
    this['child'] = namedParameters.child;
    this.className = '_AppBarTitleBox';
  }
}
export { _AppBarTitleBox };
class _RenderAppBarTitleBox extends RenderAligningShiftedBox {
  public constructor(namedParameters: { child?: RenderBox; textDirection?: TextDirection } = {}) {
    super();
    this['child'] = namedParameters.child;
    this['textDirection'] = namedParameters.textDirection;
    this.className = '_RenderAppBarTitleBox';
  }
}
export { _RenderAppBarTitleBox };
