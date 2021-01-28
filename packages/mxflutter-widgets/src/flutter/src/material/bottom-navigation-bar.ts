//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { CustomPainter } from '../rendering/custom-paint';
import { TickerProvider } from '../scheduler/ticker';
import { CurvedAnimation } from '../animation/animations';
import { AnimationController } from '../animation/animation-controller';
import { ColorTween } from '../animation/tween';
import { Animation, AnimationStatus } from '../animation/animation';
import { BottomNavigationBarItem } from '../widgets/bottom-navigation-bar-item';
import { Key } from '../foundation/key';
import { MouseCursor } from '../rendering/mouse-cursor';
import { TextStyle } from '../painting/text-style';
import { IconThemeData } from '../widgets/icon-theme-data';
import { Color, TextDirection, Offset, Size, Canvas } from '../../../mx-dart-sdk';
import { StatefulWidget$, StatelessWidget$, BuildContext$, State$ } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum BottomNavigationBarType {
  fixed = '{ "_name": "BottomNavigationBarType.fixed", "index": 0 }',
  shifting = '{ "_name": "BottomNavigationBarType.shifting", "index": 1 }',
}

export { BottomNavigationBarType };
class BottomNavigationBar extends StatefulWidget$ {
  items: Array<any>;
  onTap: any;
  currentIndex: number;
  elevation: number;
  type: BottomNavigationBarType;
  backgroundColor: Color;
  iconSize: number;
  selectedItemColor: Color;
  unselectedItemColor: Color;
  selectedIconTheme: IconThemeData;
  unselectedIconTheme: IconThemeData;
  selectedLabelStyle: TextStyle;
  unselectedLabelStyle: TextStyle;
  selectedFontSize: number;
  unselectedFontSize: number;
  showUnselectedLabels: boolean;
  showSelectedLabels: boolean;
  mouseCursor: MouseCursor;
  public constructor(
    namedParameters: {
      key?: Key;
      items?: Array<any>;
      onTap?: any;
      currentIndex?: number;
      elevation?: number;
      type?: BottomNavigationBarType;
      fixedColor?: Color;
      backgroundColor?: Color;
      iconSize?: number;
      selectedItemColor?: Color;
      unselectedItemColor?: Color;
      selectedIconTheme?: IconThemeData;
      unselectedIconTheme?: IconThemeData;
      selectedFontSize?: number;
      unselectedFontSize?: number;
      selectedLabelStyle?: TextStyle;
      unselectedLabelStyle?: TextStyle;
      showSelectedLabels?: boolean;
      showUnselectedLabels?: boolean;
      mouseCursor?: MouseCursor;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.items = namedParameters.items;
    this.onTap = namedParameters.onTap;
    this.currentIndex = namedParameters.currentIndex;
    this.elevation = namedParameters.elevation;
    this.type = namedParameters.type;
    this['fixedColor'] = namedParameters.fixedColor;
    this.backgroundColor = namedParameters.backgroundColor;
    this.iconSize = namedParameters.iconSize;
    this.selectedItemColor = namedParameters.selectedItemColor;
    this.unselectedItemColor = namedParameters.unselectedItemColor;
    this.selectedIconTheme = namedParameters.selectedIconTheme;
    this.unselectedIconTheme = namedParameters.unselectedIconTheme;
    this.selectedFontSize = namedParameters.selectedFontSize;
    this.unselectedFontSize = namedParameters.unselectedFontSize;
    this.selectedLabelStyle = namedParameters.selectedLabelStyle;
    this.unselectedLabelStyle = namedParameters.unselectedLabelStyle;
    this.showSelectedLabels = namedParameters.showSelectedLabels;
    this.showUnselectedLabels = namedParameters.showUnselectedLabels;
    this.mouseCursor = namedParameters.mouseCursor;
    this.className = 'BottomNavigationBar';
  }
}
export { BottomNavigationBar };
class _BottomNavigationTile extends StatelessWidget$ {
  type: BottomNavigationBarType;
  item: BottomNavigationBarItem;
  animation: Animation;
  iconSize: number;
  onTap: any;
  colorTween: ColorTween;
  flex: number;
  selected: boolean;
  selectedIconTheme: IconThemeData;
  unselectedIconTheme: IconThemeData;
  selectedLabelStyle: TextStyle;
  unselectedLabelStyle: TextStyle;
  indexLabel: string;
  showSelectedLabels: boolean;
  showUnselectedLabels: boolean;
  mouseCursor: MouseCursor;
  public constructor(
    type?: BottomNavigationBarType,
    item?: BottomNavigationBarItem,
    animation?: Animation,
    iconSize?: number,
    namedParameters: {
      onTap?: any;
      colorTween?: ColorTween;
      flex?: number;
      selected?: boolean;
      selectedLabelStyle?: TextStyle;
      unselectedLabelStyle?: TextStyle;
      selectedIconTheme?: IconThemeData;
      unselectedIconTheme?: IconThemeData;
      showSelectedLabels?: boolean;
      showUnselectedLabels?: boolean;
      indexLabel?: string;
      mouseCursor?: MouseCursor;
    } = {},
  ) {
    super();
    this.type = type;
    this.item = item;
    this.animation = animation;
    this.iconSize = iconSize;
    this.onTap = namedParameters.onTap;
    this.colorTween = namedParameters.colorTween;
    this.flex = namedParameters.flex;
    this.selected = namedParameters.selected;
    this.selectedLabelStyle = namedParameters.selectedLabelStyle;
    this.unselectedLabelStyle = namedParameters.unselectedLabelStyle;
    this.selectedIconTheme = namedParameters.selectedIconTheme;
    this.unselectedIconTheme = namedParameters.unselectedIconTheme;
    this.showSelectedLabels = namedParameters.showSelectedLabels;
    this.showUnselectedLabels = namedParameters.showUnselectedLabels;
    this.indexLabel = namedParameters.indexLabel;
    this.mouseCursor = namedParameters.mouseCursor;
    this.className = '_BottomNavigationTile';
  }
}
export { _BottomNavigationTile };
class _TileIcon extends StatelessWidget$ {
  colorTween: ColorTween;
  animation: Animation;
  iconSize: number;
  selected: boolean;
  item: BottomNavigationBarItem;
  selectedIconTheme: IconThemeData;
  unselectedIconTheme: IconThemeData;
  public constructor(
    namedParameters: {
      key?: Key;
      colorTween?: ColorTween;
      animation?: Animation;
      iconSize?: number;
      selected?: boolean;
      item?: BottomNavigationBarItem;
      selectedIconTheme?: IconThemeData;
      unselectedIconTheme?: IconThemeData;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.colorTween = namedParameters.colorTween;
    this.animation = namedParameters.animation;
    this.iconSize = namedParameters.iconSize;
    this.selected = namedParameters.selected;
    this.item = namedParameters.item;
    this.selectedIconTheme = namedParameters.selectedIconTheme;
    this.unselectedIconTheme = namedParameters.unselectedIconTheme;
    this.className = '_TileIcon';
  }
}
export { _TileIcon };
class _Label extends StatelessWidget$ {
  colorTween: ColorTween;
  animation: Animation;
  item: BottomNavigationBarItem;
  selectedLabelStyle: TextStyle;
  unselectedLabelStyle: TextStyle;
  showSelectedLabels: boolean;
  showUnselectedLabels: boolean;
  public constructor(
    namedParameters: {
      key?: Key;
      colorTween?: ColorTween;
      animation?: Animation;
      item?: BottomNavigationBarItem;
      selectedLabelStyle?: TextStyle;
      unselectedLabelStyle?: TextStyle;
      showSelectedLabels?: boolean;
      showUnselectedLabels?: boolean;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.colorTween = namedParameters.colorTween;
    this.animation = namedParameters.animation;
    this.item = namedParameters.item;
    this.selectedLabelStyle = namedParameters.selectedLabelStyle;
    this.unselectedLabelStyle = namedParameters.unselectedLabelStyle;
    this.showSelectedLabels = namedParameters.showSelectedLabels;
    this.showUnselectedLabels = namedParameters.showUnselectedLabels;
    this.className = '_Label';
  }
}
export { _Label };
class _BottomNavigationBarState extends State$ {
  controllers: Array<any>;
  animations: Array<any>;
  circles: any;
  backgroundColor: Color;
}
export { _BottomNavigationBarState };
class _Circle extends MXDartClass {
  state: _BottomNavigationBarState;
  index: number;
  color: Color;
  controller: AnimationController;
  animation: CurvedAnimation;
  public constructor(
    namedParameters: { state?: _BottomNavigationBarState; index?: number; color?: Color; vsync?: TickerProvider } = {},
  ) {
    super();
    this.state = namedParameters.state;
    this.index = namedParameters.index;
    this.color = namedParameters.color;
    this.className = '_Circle';
  }
}
export { _Circle };
class _RadialPainter extends CustomPainter {
  circles: Array<any>;
  textDirection: TextDirection;
  public constructor(namedParameters: { circles?: Array<any>; textDirection?: TextDirection } = {}) {
    super();
    this.circles = namedParameters.circles;
    this.textDirection = namedParameters.textDirection;
    this.className = '_RadialPainter';
  }
}
export { _RadialPainter };
