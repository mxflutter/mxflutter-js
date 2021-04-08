// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { PageController } from '../widgets/page-view';
import { MouseCursor } from '../rendering/mouse-cursor';
import { DragStartBehavior } from '../gestures/recognizer';
import { ScrollController } from '../widgets/scroll-controller';
import { ScrollPosition } from '../widgets/scroll-position';
import { ScrollContext } from '../widgets/scroll-context';
import { ScrollPhysics } from '../widgets/scroll-physics';
import { ScrollPositionWithSingleContext } from '../widgets/scroll-position-with-single-context';
import { Decoration, BoxPainter } from '../painting/decoration';
import { TabController } from './tab-controller';
import { CustomPainter } from '../rendering/custom-paint';
import { Flex } from '../widgets/basic';
import { Axis, VerticalDirection } from '../painting/basic-types';
import { RenderFlex, MainAxisSize, MainAxisAlignment, CrossAxisAlignment } from '../rendering/flex';
import { Animation } from '../animation/animation';
import { Color, TextDirection, Rect } from '../../../mx-dart-sdk';
import { TextStyle } from '../painting/text-style';
import { AnimatedWidget } from '../widgets/transitions';
import { Key } from '../foundation/key';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { StatelessWidget, Widget, StatefulWidget, State } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum TabBarIndicatorSize {
  tab = '{ "_name": "TabBarIndicatorSize.tab", "index": 0 }',
  label = '{ "_name": "TabBarIndicatorSize.label", "index": 1 }',
};

export { TabBarIndicatorSize };
class Tab extends StatelessWidget {
  text: string;
  child: MXWidget;
  icon: MXWidget;
  iconMargin: EdgeInsetsGeometry;
  public constructor(namedParameters: {key?: Key, text?: string, icon?: MXWidget, iconMargin?: EdgeInsetsGeometry, child?: MXWidget} = {}) {
    super();
    this.key = namedParameters.key;
    this.text = namedParameters.text;
    this.icon = namedParameters.icon;
    this.iconMargin = namedParameters.iconMargin;
    this.child = namedParameters.child;
    this.className = 'Tab';
  }
}
export { Tab };
class _TabStyle extends AnimatedWidget {
  labelStyle: TextStyle;
  unselectedLabelStyle: TextStyle;
  selected: boolean;
  labelColor: Color;
  unselectedLabelColor: Color;
  child: MXWidget;
  public constructor(namedParameters: {key?: Key, animation?: Animation, selected?: boolean, labelColor?: Color, unselectedLabelColor?: Color, labelStyle?: TextStyle, unselectedLabelStyle?: TextStyle, child?: MXWidget} = {}) {
    super();
    this.key = namedParameters.key;
    this['animation'] = namedParameters.animation;
    this.selected = namedParameters.selected;
    this.labelColor = namedParameters.labelColor;
    this.unselectedLabelColor = namedParameters.unselectedLabelColor;
    this.labelStyle = namedParameters.labelStyle;
    this.unselectedLabelStyle = namedParameters.unselectedLabelStyle;
    this.child = namedParameters.child;
    this.className = '_TabStyle';
  }
}
export { _TabStyle };
class _TabLabelBarRenderer extends RenderFlex {
  onPerformLayout: any;
  public constructor(namedParameters: {children?: Array<any>, direction?: Axis, mainAxisSize?: MainAxisSize, mainAxisAlignment?: MainAxisAlignment, crossAxisAlignment?: CrossAxisAlignment, textDirection?: TextDirection, verticalDirection?: VerticalDirection, onPerformLayout?: any} = {}) {
    super();
    this['children'] = namedParameters.children;
    this.direction = namedParameters.direction;
    this.mainAxisSize = namedParameters.mainAxisSize;
    this.mainAxisAlignment = namedParameters.mainAxisAlignment;
    this.crossAxisAlignment = namedParameters.crossAxisAlignment;
    this.textDirection = namedParameters.textDirection;
    this.verticalDirection = namedParameters.verticalDirection;
    this.onPerformLayout = namedParameters.onPerformLayout;
    this.className = '_TabLabelBarRenderer';
  }
}
export { _TabLabelBarRenderer };
class _TabLabelBar extends Flex {
  onPerformLayout: any;
  public constructor(namedParameters: {key?: Key, children?: Array<any>, onPerformLayout?: any} = {}) {
    super();
    this.key = namedParameters.key;
    this.children = namedParameters.children;
    this.onPerformLayout = namedParameters.onPerformLayout;
    this.className = '_TabLabelBar';
  }
}
export { _TabLabelBar };
class _IndicatorPainter extends CustomPainter {
  controller: TabController;
  indicator: Decoration;
  indicatorSize: TabBarIndicatorSize;
  tabKeys: Array<any>;
  currentTabOffsets: Array<any>;
  currentTextDirection: TextDirection;
  currentRect: Rect;
  painter: BoxPainter;
  needsPaint: boolean;
  public constructor(namedParameters: {controller?: TabController, indicator?: Decoration, indicatorSize?: TabBarIndicatorSize, tabKeys?: Array<any>, old?: _IndicatorPainter} = {}) {
    super();
    this.controller = namedParameters.controller;
    this.indicator = namedParameters.indicator;
    this.indicatorSize = namedParameters.indicatorSize;
    this.tabKeys = namedParameters.tabKeys;
    this['old'] = namedParameters.old;
    this.className = '_IndicatorPainter';
  }
}
export { _IndicatorPainter };
class _ChangeAnimation extends Animation {
  controller: TabController;
  public constructor(controller?: TabController) {
    super();
    this.controller = controller;
    this.className = '_ChangeAnimation';
  }
}
export { _ChangeAnimation };
class _DragAnimation extends Animation {
  controller: TabController;
  index: number;
  public constructor(controller?: TabController, index?: number) {
    super();
    this.controller = controller;
    this.index = index;
    this.className = '_DragAnimation';
  }
}
export { _DragAnimation };
class _TabBarScrollPosition extends ScrollPositionWithSingleContext {
  tabBar: _TabBarState;
  initialViewportDimensionWasZero: boolean;
  public constructor(namedParameters: {physics?: ScrollPhysics, context?: ScrollContext, oldPosition?: ScrollPosition, tabBar?: _TabBarState} = {}) {
    super();
    this.physics = namedParameters.physics;
    this.context = namedParameters.context;
    this['oldPosition'] = namedParameters.oldPosition;
    this.tabBar = namedParameters.tabBar;
    this.className = '_TabBarScrollPosition';
  }
}
export { _TabBarScrollPosition };
class _TabBarScrollController extends ScrollController {
  tabBar: _TabBarState;
  public constructor(tabBar?: _TabBarState) {
    super();
    this.tabBar = tabBar;
    this.className = '_TabBarScrollController';
  }
}
export { _TabBarScrollController };
class TabBar extends StatefulWidget {
  tabs: Array<any>;
  controller: TabController;
  isScrollable: boolean;
  indicatorColor: Color;
  indicatorWeight: number;
  indicatorPadding: EdgeInsetsGeometry;
  indicator: Decoration;
  indicatorSize: TabBarIndicatorSize;
  labelColor: Color;
  unselectedLabelColor: Color;
  labelStyle: TextStyle;
  labelPadding: EdgeInsetsGeometry;
  unselectedLabelStyle: TextStyle;
  dragStartBehavior: DragStartBehavior;
  mouseCursor: MouseCursor;
  onTap: any;
  physics: ScrollPhysics;
  public constructor(namedParameters: {key?: Key, tabs?: Array<any>, controller?: TabController, isScrollable?: boolean, indicatorColor?: Color, indicatorWeight?: number, indicatorPadding?: EdgeInsetsGeometry, indicator?: Decoration, indicatorSize?: TabBarIndicatorSize, labelColor?: Color, labelStyle?: TextStyle, labelPadding?: EdgeInsetsGeometry, unselectedLabelColor?: Color, unselectedLabelStyle?: TextStyle, dragStartBehavior?: DragStartBehavior, mouseCursor?: MouseCursor, onTap?: any, physics?: ScrollPhysics} = {}) {
    super();
    this.key = namedParameters.key;
    this.tabs = namedParameters.tabs;
    this.controller = namedParameters.controller;
    this.isScrollable = namedParameters.isScrollable;
    this.indicatorColor = namedParameters.indicatorColor;
    this.indicatorWeight = namedParameters.indicatorWeight;
    this.indicatorPadding = namedParameters.indicatorPadding;
    this.indicator = namedParameters.indicator;
    this.indicatorSize = namedParameters.indicatorSize;
    this.labelColor = namedParameters.labelColor;
    this.labelStyle = namedParameters.labelStyle;
    this.labelPadding = namedParameters.labelPadding;
    this.unselectedLabelColor = namedParameters.unselectedLabelColor;
    this.unselectedLabelStyle = namedParameters.unselectedLabelStyle;
    this.dragStartBehavior = namedParameters.dragStartBehavior;
    this.mouseCursor = namedParameters.mouseCursor;
    this.onTap = namedParameters.onTap;
    this.physics = namedParameters.physics;
    this.className = 'TabBar';
  }
}
export { TabBar };
class _TabBarState extends State {
  scrollController: ScrollController;
  controller: TabController;
  indicatorPainter: _IndicatorPainter;
  currentIndex: number;
  tabStripWidth: number;
  tabKeys: Array<any>;
}
export { _TabBarState };
class TabBarView extends StatefulWidget {
  controller: TabController;
  children: Array<any>;
  physics: ScrollPhysics;
  dragStartBehavior: DragStartBehavior;
  public constructor(namedParameters: {key?: Key, children?: Array<any>, controller?: TabController, physics?: ScrollPhysics, dragStartBehavior?: DragStartBehavior} = {}) {
    super();
    this.key = namedParameters.key;
    this.children = namedParameters.children;
    this.controller = namedParameters.controller;
    this.physics = namedParameters.physics;
    this.dragStartBehavior = namedParameters.dragStartBehavior;
    this.className = 'TabBarView';
  }
}
export { TabBarView };
class _TabBarViewState extends State {
  controller: TabController;
  pageController: PageController;
  children: Array<any>;
  childrenWithKey: Array<any>;
  currentIndex: number;
  warpUnderwayCount: number;
}
export { _TabBarViewState };
class TabPageSelectorIndicator extends StatelessWidget {
  backgroundColor: Color;
  borderColor: Color;
  size: number;
  public constructor(namedParameters: {key?: Key, backgroundColor?: Color, borderColor?: Color, size?: number} = {}) {
    super();
    this.key = namedParameters.key;
    this.backgroundColor = namedParameters.backgroundColor;
    this.borderColor = namedParameters.borderColor;
    this.size = namedParameters.size;
    this.className = 'TabPageSelectorIndicator';
  }
}
export { TabPageSelectorIndicator };
class TabPageSelector extends StatelessWidget {
  controller: TabController;
  indicatorSize: number;
  color: Color;
  selectedColor: Color;
  public constructor(namedParameters: {key?: Key, controller?: TabController, indicatorSize?: number, color?: Color, selectedColor?: Color} = {}) {
    super();
    this.key = namedParameters.key;
    this.controller = namedParameters.controller;
    this.indicatorSize = namedParameters.indicatorSize;
    this.color = namedParameters.color;
    this.selectedColor = namedParameters.selectedColor;
    this.className = 'TabPageSelector';
  }
}
export { TabPageSelector };
