// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { HeroController } from '../widgets/heroes';
import { Key } from '../foundation/key';
import { StatefulWidget, GlobalKey, State } from '../widgets/framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class CupertinoTabView extends StatefulWidget {
  builder: any;
  navigatorKey: GlobalKey;
  defaultTitle: string;
  routes: Map<any, any>;
  onGenerateRoute: any;
  onUnknownRoute: any;
  navigatorObservers: Array<any>;
  public constructor(namedParameters: {key?: Key, builder?: any, navigatorKey?: GlobalKey, defaultTitle?: string, routes?: Map<any, any>, onGenerateRoute?: any, onUnknownRoute?: any, navigatorObservers?: Array<any>} = {}) {
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
class _CupertinoTabViewState extends State {
  heroController: HeroController;
  navigatorObservers: Array<any>;
}
export { _CupertinoTabViewState };
