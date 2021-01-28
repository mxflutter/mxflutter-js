//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { StatefulWidget$, State$ } from '../widgets/framework';
import { ChangeNotifier } from '../foundation/change-notifier';
class CupertinoTabController extends ChangeNotifier {
    constructor(namedParameters = {}) {
        super();
        this['initialIndex'] = namedParameters.initialIndex;
        this.className = 'CupertinoTabController';
    }
}
export { CupertinoTabController };
class CupertinoTabScaffold extends StatefulWidget$ {
    constructor(namedParameters = {}) {
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
    preBuild(buildContext) {
        if (this.tabBuilder) {
            this['children'] = this.tabBuilder(buildContext);
            delete this.tabBuilder;
        }
    }
}
export { CupertinoTabScaffold };
class _CupertinoTabScaffoldState extends State$ {
}
export { _CupertinoTabScaffoldState };
class _TabSwitchingView extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.currentTabIndex = namedParameters.currentTabIndex;
        this.tabCount = namedParameters.tabCount;
        this.tabBuilder = namedParameters.tabBuilder;
        this.className = '_TabSwitchingView';
    }
}
export { _TabSwitchingView };
class _TabSwitchingViewState extends State$ {
}
export { _TabSwitchingViewState };
