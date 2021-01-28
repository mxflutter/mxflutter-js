//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Key } from '../foundation/key';
import { Animation } from '../animation/animation';
import { AnimationController } from '../animation/animation-controller';
import { IconThemeData } from '../widgets/icon-theme-data';
import { TextStyle } from '../painting/text-style';
import { Color } from '../../../mx-dart-sdk';
import { StatefulWidget$, Widget, BuildContext$, State$, StatelessWidget$, InheritedWidget } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class NavigationRail extends StatefulWidget$ {
  backgroundColor: Color;
  extended: boolean;
  leading: MXWidget;
  trailing: MXWidget;
  destinations: Array<any>;
  selectedIndex: number;
  onDestinationSelected: any;
  elevation: number;
  groupAlignment: number;
  labelType: NavigationRailLabelType;
  unselectedLabelTextStyle: TextStyle;
  selectedLabelTextStyle: TextStyle;
  unselectedIconTheme: IconThemeData;
  selectedIconTheme: IconThemeData;
  minWidth: number;
  minExtendedWidth: number;
  public constructor(
    namedParameters: {
      backgroundColor?: Color;
      extended?: boolean;
      leading?: MXWidget;
      trailing?: MXWidget;
      destinations?: Array<any>;
      selectedIndex?: number;
      onDestinationSelected?: any;
      elevation?: number;
      groupAlignment?: number;
      labelType?: NavigationRailLabelType;
      unselectedLabelTextStyle?: TextStyle;
      selectedLabelTextStyle?: TextStyle;
      unselectedIconTheme?: IconThemeData;
      selectedIconTheme?: IconThemeData;
      minWidth?: number;
      minExtendedWidth?: number;
    } = {},
  ) {
    super();
    this.backgroundColor = namedParameters.backgroundColor;
    this.extended = namedParameters.extended;
    this.leading = namedParameters.leading;
    this.trailing = namedParameters.trailing;
    this.destinations = namedParameters.destinations;
    this.selectedIndex = namedParameters.selectedIndex;
    this.onDestinationSelected = namedParameters.onDestinationSelected;
    this.elevation = namedParameters.elevation;
    this.groupAlignment = namedParameters.groupAlignment;
    this.labelType = namedParameters.labelType;
    this.unselectedLabelTextStyle = namedParameters.unselectedLabelTextStyle;
    this.selectedLabelTextStyle = namedParameters.selectedLabelTextStyle;
    this.unselectedIconTheme = namedParameters.unselectedIconTheme;
    this.selectedIconTheme = namedParameters.selectedIconTheme;
    this.minWidth = namedParameters.minWidth;
    this.minExtendedWidth = namedParameters.minExtendedWidth;
    this.className = 'NavigationRail';
  }
}
export { NavigationRail };
class _NavigationRailState extends State$ {
  destinationControllers: Array<any>;
  destinationAnimations: Array<any>;
  extendedController: AnimationController;
  extendedAnimation: Animation;
}
export { _NavigationRailState };
class _RailDestination extends StatelessWidget$ {
  minWidth: number;
  minExtendedWidth: number;
  icon: MXWidget;
  label: MXWidget;
  destinationAnimation: Animation;
  labelType: NavigationRailLabelType;
  selected: boolean;
  extendedTransitionAnimation: Animation;
  iconTheme: IconThemeData;
  labelTextStyle: TextStyle;
  onTap: any;
  indexLabel: string;
  positionAnimation: Animation;
  public constructor(
    namedParameters: {
      minWidth?: number;
      minExtendedWidth?: number;
      icon?: MXWidget;
      label?: MXWidget;
      destinationAnimation?: Animation;
      extendedTransitionAnimation?: Animation;
      labelType?: NavigationRailLabelType;
      selected?: boolean;
      iconTheme?: IconThemeData;
      labelTextStyle?: TextStyle;
      onTap?: any;
      indexLabel?: string;
    } = {},
  ) {
    super();
    this.minWidth = namedParameters.minWidth;
    this.minExtendedWidth = namedParameters.minExtendedWidth;
    this.icon = namedParameters.icon;
    this.label = namedParameters.label;
    this.destinationAnimation = namedParameters.destinationAnimation;
    this.extendedTransitionAnimation = namedParameters.extendedTransitionAnimation;
    this.labelType = namedParameters.labelType;
    this.selected = namedParameters.selected;
    this.iconTheme = namedParameters.iconTheme;
    this.labelTextStyle = namedParameters.labelTextStyle;
    this.onTap = namedParameters.onTap;
    this.indexLabel = namedParameters.indexLabel;
    this.className = '_RailDestination';
  }
}
export { _RailDestination };
enum NavigationRailLabelType {
  none = '{ "_name": "NavigationRailLabelType.none", "index": 0 }',
  selected = '{ "_name": "NavigationRailLabelType.selected", "index": 1 }',
  all = '{ "_name": "NavigationRailLabelType.all", "index": 2 }',
}

export { NavigationRailLabelType };
class NavigationRailDestination extends MXDartClass {
  icon: MXWidget;
  selectedIcon: MXWidget;
  label: MXWidget;
  public constructor(namedParameters: { icon?: MXWidget; selectedIcon?: MXWidget; label?: MXWidget } = {}) {
    super();
    this.icon = namedParameters.icon;
    this.selectedIcon = namedParameters.selectedIcon;
    this.label = namedParameters.label;
    this.className = 'NavigationRailDestination';
  }
}
export { NavigationRailDestination };
class _ExtendedNavigationRailAnimation extends InheritedWidget {
  animation: Animation;
  public constructor(namedParameters: { key?: Key; animation?: Animation; child?: MXWidget } = {}) {
    super();
    this.key = namedParameters.key;
    this.animation = namedParameters.animation;
    this.child = namedParameters.child;
    this.className = '_ExtendedNavigationRailAnimation';
  }
}
export { _ExtendedNavigationRailAnimation };
