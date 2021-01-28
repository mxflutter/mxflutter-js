//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { StatefulWidget$, State$ } from '../widgets/framework';
class CupertinoTabView extends StatefulWidget$ {
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
export { CupertinoTabView };
class _CupertinoTabViewState extends State$ {
}
export { _CupertinoTabViewState };
