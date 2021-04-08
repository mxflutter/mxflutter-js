"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._CupertinoTabViewState = exports.CupertinoTabView = void 0;
const framework_1 = require("../widgets/framework");
class CupertinoTabView extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.builder = namedParameters.builder;
        this.navigatorKey = namedParameters.navigatorKey;
        this.defaultTitle = namedParameters.defaultTitle;
        this.routes = namedParameters.routes;
        this.onGenerateRoute = namedParameters.onGenerateRoute;
        this.onUnknownRoute = namedParameters.onUnknownRoute;
        this.navigatorObservers = namedParameters.navigatorObservers;
        this.className = 'CupertinoTabView';
    }
}
exports.CupertinoTabView = CupertinoTabView;
class _CupertinoTabViewState extends framework_1.State {
}
exports._CupertinoTabViewState = _CupertinoTabViewState;
