// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { RenderBox } from '../rendering/box';
import { BorderTween } from '../widgets/implicit-animations';
import { Tween, ColorTween } from '../animation/tween';
import { Animation } from '../animation/animation';
import { TextStyle } from '../painting/text-style';
import { ModalRoute } from '../widgets/routes';
import { KeyedSubtree } from '../widgets/basic';
import { SliverPersistentHeaderDelegate } from '../widgets/sliver-persistent-header';
import { Key } from '../foundation/key';
import { Border } from '../painting/box-border';
import { EdgeInsetsDirectional } from '../painting/edge-insets';
import { Color, Brightness, Rect, TextDirection } from '../../../mx-dart-sdk';
import { StatefulWidget, Widget, State, StatelessWidget, GlobalKey } from '../widgets/framework';
import { NavigatorState } from '../widgets/navigator';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class _HeroTag extends MXDartClass {
  navigator: NavigatorState;
  public constructor(navigator?: NavigatorState) {
    super();
    this.navigator = navigator;
    this.className = '_HeroTag';
  }
}
export { _HeroTag };
class CupertinoNavigationBar extends StatefulWidget {
  leading: MXWidget;
  automaticallyImplyLeading: boolean;
  automaticallyImplyMiddle: boolean;
  previousPageTitle: string;
  middle: MXWidget;
  trailing: MXWidget;
  backgroundColor: Color;
  brightness: Brightness;
  padding: EdgeInsetsDirectional;
  border: Border;
  actionsForegroundColor: Color;
  transitionBetweenRoutes: boolean;
  heroTag: any;
  public constructor(namedParameters: {key?: Key, leading?: MXWidget, automaticallyImplyLeading?: boolean, automaticallyImplyMiddle?: boolean, previousPageTitle?: string, middle?: MXWidget, trailing?: MXWidget, border?: Border, backgroundColor?: Color, brightness?: Brightness, padding?: EdgeInsetsDirectional, actionsForegroundColor?: Color, transitionBetweenRoutes?: boolean, heroTag?: any} = {}) {
    super();
    this.key = namedParameters.key;
    this.leading = namedParameters.leading;
    this.automaticallyImplyLeading = namedParameters.automaticallyImplyLeading;
    this.automaticallyImplyMiddle = namedParameters.automaticallyImplyMiddle;
    this.previousPageTitle = namedParameters.previousPageTitle;
    this.middle = namedParameters.middle;
    this.trailing = namedParameters.trailing;
    this.border = namedParameters.border;
    this.backgroundColor = namedParameters.backgroundColor;
    this.brightness = namedParameters.brightness;
    this.padding = namedParameters.padding;
    this.actionsForegroundColor = namedParameters.actionsForegroundColor;
    this.transitionBetweenRoutes = namedParameters.transitionBetweenRoutes;
    this.heroTag = namedParameters.heroTag;
    this.className = 'CupertinoNavigationBar';
  }
}
export { CupertinoNavigationBar };
class _CupertinoNavigationBarState extends State {
  keys: _NavigationBarStaticComponentsKeys;
}
export { _CupertinoNavigationBarState };
class CupertinoSliverNavigationBar extends StatefulWidget {
  largeTitle: MXWidget;
  leading: MXWidget;
  automaticallyImplyLeading: boolean;
  automaticallyImplyTitle: boolean;
  previousPageTitle: string;
  middle: MXWidget;
  trailing: MXWidget;
  backgroundColor: Color;
  brightness: Brightness;
  padding: EdgeInsetsDirectional;
  border: Border;
  actionsForegroundColor: Color;
  transitionBetweenRoutes: boolean;
  heroTag: any;
  public constructor(namedParameters: {key?: Key, largeTitle?: MXWidget, leading?: MXWidget, automaticallyImplyLeading?: boolean, automaticallyImplyTitle?: boolean, previousPageTitle?: string, middle?: MXWidget, trailing?: MXWidget, border?: Border, backgroundColor?: Color, brightness?: Brightness, padding?: EdgeInsetsDirectional, actionsForegroundColor?: Color, transitionBetweenRoutes?: boolean, heroTag?: any} = {}) {
    super();
    this.key = namedParameters.key;
    this.largeTitle = namedParameters.largeTitle;
    this.leading = namedParameters.leading;
    this.automaticallyImplyLeading = namedParameters.automaticallyImplyLeading;
    this.automaticallyImplyTitle = namedParameters.automaticallyImplyTitle;
    this.previousPageTitle = namedParameters.previousPageTitle;
    this.middle = namedParameters.middle;
    this.trailing = namedParameters.trailing;
    this.border = namedParameters.border;
    this.backgroundColor = namedParameters.backgroundColor;
    this.brightness = namedParameters.brightness;
    this.padding = namedParameters.padding;
    this.actionsForegroundColor = namedParameters.actionsForegroundColor;
    this.transitionBetweenRoutes = namedParameters.transitionBetweenRoutes;
    this.heroTag = namedParameters.heroTag;
    this.className = 'CupertinoSliverNavigationBar';
  }
}
export { CupertinoSliverNavigationBar };
class _CupertinoSliverNavigationBarState extends State {
  keys: _NavigationBarStaticComponentsKeys;
}
export { _CupertinoSliverNavigationBarState };
class _LargeTitleNavigationBarSliverDelegate extends SliverPersistentHeaderDelegate {
  keys: _NavigationBarStaticComponentsKeys;
  components: _NavigationBarStaticComponents;
  userMiddle: MXWidget;
  backgroundColor: Color;
  brightness: Brightness;
  border: Border;
  padding: EdgeInsetsDirectional;
  actionsForegroundColor: Color;
  transitionBetweenRoutes: boolean;
  heroTag: any;
  persistentHeight: number;
  alwaysShowMiddle: boolean;
  public constructor(namedParameters: {keys?: _NavigationBarStaticComponentsKeys, components?: _NavigationBarStaticComponents, userMiddle?: MXWidget, backgroundColor?: Color, brightness?: Brightness, border?: Border, padding?: EdgeInsetsDirectional, actionsForegroundColor?: Color, transitionBetweenRoutes?: boolean, heroTag?: any, persistentHeight?: number, alwaysShowMiddle?: boolean} = {}) {
    super();
    this.keys = namedParameters.keys;
    this.components = namedParameters.components;
    this.userMiddle = namedParameters.userMiddle;
    this.backgroundColor = namedParameters.backgroundColor;
    this.brightness = namedParameters.brightness;
    this.border = namedParameters.border;
    this.padding = namedParameters.padding;
    this.actionsForegroundColor = namedParameters.actionsForegroundColor;
    this.transitionBetweenRoutes = namedParameters.transitionBetweenRoutes;
    this.heroTag = namedParameters.heroTag;
    this.persistentHeight = namedParameters.persistentHeight;
    this.alwaysShowMiddle = namedParameters.alwaysShowMiddle;
    this.className = '_LargeTitleNavigationBarSliverDelegate';
  }
}
export { _LargeTitleNavigationBarSliverDelegate };
class _PersistentNavigationBar extends StatelessWidget {
  components: _NavigationBarStaticComponents;
  padding: EdgeInsetsDirectional;
  middleVisible: boolean;
  public constructor(namedParameters: {key?: Key, components?: _NavigationBarStaticComponents, padding?: EdgeInsetsDirectional, middleVisible?: boolean} = {}) {
    super();
    this.key = namedParameters.key;
    this.components = namedParameters.components;
    this.padding = namedParameters.padding;
    this.middleVisible = namedParameters.middleVisible;
    this.className = '_PersistentNavigationBar';
  }
}
export { _PersistentNavigationBar };
class _NavigationBarStaticComponentsKeys extends MXDartClass {
  navBarBoxKey: GlobalKey;
  leadingKey: GlobalKey;
  backChevronKey: GlobalKey;
  backLabelKey: GlobalKey;
  middleKey: GlobalKey;
  trailingKey: GlobalKey;
  largeTitleKey: GlobalKey;
}
export { _NavigationBarStaticComponentsKeys };
class _NavigationBarStaticComponents extends MXDartClass {
  leading: KeyedSubtree;
  backChevron: KeyedSubtree;
  backLabel: KeyedSubtree;
  middle: KeyedSubtree;
  trailing: KeyedSubtree;
  largeTitle: KeyedSubtree;
  public constructor(namedParameters: {keys?: _NavigationBarStaticComponentsKeys, route?: ModalRoute, userLeading?: MXWidget, automaticallyImplyLeading?: boolean, automaticallyImplyTitle?: boolean, previousPageTitle?: string, userMiddle?: MXWidget, userTrailing?: MXWidget, userLargeTitle?: MXWidget, padding?: EdgeInsetsDirectional, large?: boolean} = {}) {
    super();
    this['keys'] = namedParameters.keys;
    this['route'] = namedParameters.route;
    this['userLeading'] = namedParameters.userLeading;
    this['automaticallyImplyLeading'] = namedParameters.automaticallyImplyLeading;
    this['automaticallyImplyTitle'] = namedParameters.automaticallyImplyTitle;
    this['previousPageTitle'] = namedParameters.previousPageTitle;
    this['userMiddle'] = namedParameters.userMiddle;
    this['userTrailing'] = namedParameters.userTrailing;
    this['userLargeTitle'] = namedParameters.userLargeTitle;
    this['padding'] = namedParameters.padding;
    this['large'] = namedParameters.large;
    this.className = '_NavigationBarStaticComponents';
  }
}
export { _NavigationBarStaticComponents };
class CupertinoNavigationBarBackButton extends StatelessWidget {
  color: Color;
  previousPageTitle: string;
  onPressed: any;
  backChevron: MXWidget;
  backLabel: MXWidget;
  public constructor(namedParameters: {key?: Key, color?: Color, previousPageTitle?: string, onPressed?: any} = {}) {
    super();
    this.key = namedParameters.key;
    this.color = namedParameters.color;
    this.previousPageTitle = namedParameters.previousPageTitle;
    this.onPressed = namedParameters.onPressed;
    this.className = 'CupertinoNavigationBarBackButton';
  }
}
export { CupertinoNavigationBarBackButton };
class _BackChevron extends StatelessWidget {
  public constructor(namedParameters: {key?: Key} = {}) {
    super();
    this['key'] = namedParameters.key;
    this.className = '_BackChevron';
  }
}
export { _BackChevron };
class _BackLabel extends StatelessWidget {
  specifiedPreviousTitle: string;
  route: ModalRoute;
  public constructor(namedParameters: {key?: Key, specifiedPreviousTitle?: string, route?: ModalRoute} = {}) {
    super();
    this.key = namedParameters.key;
    this.specifiedPreviousTitle = namedParameters.specifiedPreviousTitle;
    this.route = namedParameters.route;
    this.className = '_BackLabel';
  }
}
export { _BackLabel };
class _TransitionableNavigationBar extends StatelessWidget {
  componentsKeys: _NavigationBarStaticComponentsKeys;
  backgroundColor: Color;
  backButtonTextStyle: TextStyle;
  titleTextStyle: TextStyle;
  largeTitleTextStyle: TextStyle;
  border: Border;
  hasUserMiddle: boolean;
  largeExpanded: boolean;
  child: MXWidget;
  public constructor(namedParameters: {componentsKeys?: _NavigationBarStaticComponentsKeys, backgroundColor?: Color, backButtonTextStyle?: TextStyle, titleTextStyle?: TextStyle, largeTitleTextStyle?: TextStyle, border?: Border, hasUserMiddle?: boolean, largeExpanded?: boolean, child?: MXWidget} = {}) {
    super();
    this.componentsKeys = namedParameters.componentsKeys;
    this.backgroundColor = namedParameters.backgroundColor;
    this.backButtonTextStyle = namedParameters.backButtonTextStyle;
    this.titleTextStyle = namedParameters.titleTextStyle;
    this.largeTitleTextStyle = namedParameters.largeTitleTextStyle;
    this.border = namedParameters.border;
    this.hasUserMiddle = namedParameters.hasUserMiddle;
    this.largeExpanded = namedParameters.largeExpanded;
    this.child = namedParameters.child;
    this.className = '_TransitionableNavigationBar';
  }
}
export { _TransitionableNavigationBar };
class _NavigationBarTransition extends StatelessWidget {
  animation: Animation;
  topNavBar: _TransitionableNavigationBar;
  bottomNavBar: _TransitionableNavigationBar;
  heightTween: Tween;
  backgroundTween: ColorTween;
  borderTween: BorderTween;
  public constructor(namedParameters: {animation?: Animation, topNavBar?: _TransitionableNavigationBar, bottomNavBar?: _TransitionableNavigationBar} = {}) {
    super();
    this.animation = namedParameters.animation;
    this.topNavBar = namedParameters.topNavBar;
    this.bottomNavBar = namedParameters.bottomNavBar;
    this.className = '_NavigationBarTransition';
  }
}
export { _NavigationBarTransition };
class _NavigationBarComponentsTransition extends MXDartClass {
  animation: Animation;
  bottomComponents: _NavigationBarStaticComponentsKeys;
  topComponents: _NavigationBarStaticComponentsKeys;
  bottomNavBarBox: RenderBox;
  topNavBarBox: RenderBox;
  bottomBackButtonTextStyle: TextStyle;
  topBackButtonTextStyle: TextStyle;
  bottomTitleTextStyle: TextStyle;
  topTitleTextStyle: TextStyle;
  bottomLargeTitleTextStyle: TextStyle;
  topLargeTitleTextStyle: TextStyle;
  bottomHasUserMiddle: boolean;
  topHasUserMiddle: boolean;
  bottomLargeExpanded: boolean;
  topLargeExpanded: boolean;
  transitionBox: Rect;
  forwardDirection: number;
  public constructor(namedParameters: {animation?: Animation, bottomNavBar?: _TransitionableNavigationBar, topNavBar?: _TransitionableNavigationBar, directionality?: TextDirection} = {}) {
    super();
    this.animation = namedParameters.animation;
    this['bottomNavBar'] = namedParameters.bottomNavBar;
    this['topNavBar'] = namedParameters.topNavBar;
    this['directionality'] = namedParameters.directionality;
    this.className = '_NavigationBarComponentsTransition';
  }
}
export { _NavigationBarComponentsTransition };
