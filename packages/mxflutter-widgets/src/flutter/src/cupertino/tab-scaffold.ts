// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Key } from '../foundation/key';
import { Color } from '../../../mx-dart-sdk';
import { CupertinoTabBar } from './bottom-tab-bar';
import { StatefulWidget, State } from '../widgets/framework';
import { ChangeNotifier } from '../foundation/change-notifier';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class CupertinoTabController extends ChangeNotifier {
  isDisposed: boolean;
  index: number;
  public constructor(namedParameters: {initialIndex?: number} = {}) {
    super();
    this['initialIndex'] = namedParameters.initialIndex;
    this.className = 'CupertinoTabController';
  }
}
export { CupertinoTabController };
class CupertinoTabScaffold extends StatefulWidget {
  tabBar: CupertinoTabBar;
  controller: CupertinoTabController;
  tabBuilder: any;
  backgroundColor: Color;
  resizeToAvoidBottomInset: boolean;
  public constructor(namedParameters: {key?: Key, tabBar?: CupertinoTabBar, tabBuilder?: any, controller?: CupertinoTabController, backgroundColor?: Color, resizeToAvoidBottomInset?: boolean} = {}) {
    super();
    this.key = namedParameters.key;
    this.tabBar = namedParameters.tabBar;
    this.tabBuilder = namedParameters.tabBuilder;
    this.controller = namedParameters.controller;
    this.backgroundColor = namedParameters.backgroundColor;
    this.resizeToAvoidBottomInset = namedParameters.resizeToAvoidBottomInset;
    this.className = 'CupertinoTabScaffold';
    // MX Modified begin
    this['children'] = [];
    // MX Modified end
  }
  // MX modified begin
  public preBuild(buildContext: any) {
    if (this.tabBuilder) {
      this['children'] = this.tabBuilder(buildContext);
      delete this.tabBuilder;
    }
  }
  // MX modified end
}
export { CupertinoTabScaffold };
class _CupertinoTabScaffoldState extends State {
  controller: CupertinoTabController;
}
export { _CupertinoTabScaffoldState };
class _TabSwitchingView extends StatefulWidget {
  currentTabIndex: number;
  tabCount: number;
  tabBuilder: any;
  public constructor(namedParameters: {currentTabIndex?: number, tabCount?: number, tabBuilder?: any} = {}) {
    super();
    this.currentTabIndex = namedParameters.currentTabIndex;
    this.tabCount = namedParameters.tabCount;
    this.tabBuilder = namedParameters.tabBuilder;
    this.className = '_TabSwitchingView';
  }
}
export { _TabSwitchingView };
class _TabSwitchingViewState extends State {
  shouldBuildTab: Array<any>;
  tabFocusNodes: Array<any>;
  discardedNodes: Array<any>;
}
export { _TabSwitchingViewState };
