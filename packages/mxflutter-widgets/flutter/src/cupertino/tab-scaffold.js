"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._TabSwitchingViewState = exports._TabSwitchingView = exports._CupertinoTabScaffoldState = exports.CupertinoTabScaffold = exports.CupertinoTabController = void 0;
const framework_1 = require("../widgets/framework");
const change_notifier_1 = require("../foundation/change-notifier");
class CupertinoTabController extends change_notifier_1.ChangeNotifier {
    constructor(namedParameters = {}) {
        super();
        this['initialIndex'] = namedParameters.initialIndex;
        this.className = 'CupertinoTabController';
    }
}
exports.CupertinoTabController = CupertinoTabController;
class CupertinoTabScaffold extends framework_1.StatefulWidget {
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
exports.CupertinoTabScaffold = CupertinoTabScaffold;
class _CupertinoTabScaffoldState extends framework_1.State {
}
exports._CupertinoTabScaffoldState = _CupertinoTabScaffoldState;
class _TabSwitchingView extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.currentTabIndex = namedParameters.currentTabIndex;
        this.tabCount = namedParameters.tabCount;
        this.tabBuilder = namedParameters.tabBuilder;
        this.className = '_TabSwitchingView';
    }
}
exports._TabSwitchingView = _TabSwitchingView;
class _TabSwitchingViewState extends framework_1.State {
}
exports._TabSwitchingViewState = _TabSwitchingViewState;
