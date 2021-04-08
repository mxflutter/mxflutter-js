// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// MX Modified begin
import { MXMirrorObjMethodCall } from '@mxflutter/mxflutter-base';
// MX Modified end
import { Key } from '../foundation/key';
import { InheritedWidget, Widget, StatefulWidget, State } from '../widgets/framework';
import { TickerProvider } from '../scheduler/ticker';
import { AnimationController } from '../animation/animation-controller';
import { ChangeNotifier } from '../foundation/change-notifier';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class TabController extends ChangeNotifier {
  animationController: AnimationController;
  length: number;
  // MX Modified begin
  _index: number;
  // MX Modified end
  previousIndex: number;
  indexIsChangingCount: number;
  public constructor(namedParameters: {initialIndex?: number, length?: number, vsync?: TickerProvider} = {}) {
    super();
    this['initialIndex'] = namedParameters.initialIndex;
    this.length = namedParameters.length;
    this.className = 'TabController';
    // MX Modified begin
    this['listenerList'] = [];
    // MX Modified end
  }
  // MX Modified begin
  indexIsChanging: number;
  offset: number;
  public addListener(listener: Function) {
    this['listenerList'].push(listener.bind(this));
  }

  public listenerCallback(args: any) {
    // 通过回调来保存相关参数
    this._index = args.index;
    this.previousIndex = args.previousIndex;
    this.indexIsChanging = args.indexIsChanging;
    this.offset = args.offset;

    for (const funcKey in this['listenerList']) {
      this['listenerList'][funcKey]();
    }
  }

  public get index(): number {
    return this._index;
  }

  public set index(index: number) {
    const argument = new MXMirrorObjMethodCall({
      mirrorID: this.mirrorID,
      className: 'TabController',
      funcName: 'index',
      args: {
        index,
      },
    });
    this.invokeMirrorObjMethod(argument);
  }
  // MX Modified end
}
export { TabController };
class _TabControllerScope extends InheritedWidget {
  controller: TabController;
  enabled: boolean;
  public constructor(namedParameters: {key?: Key, controller?: TabController, enabled?: boolean, child?: MXWidget} = {}) {
    super();
    this.key = namedParameters.key;
    this.controller = namedParameters.controller;
    this.enabled = namedParameters.enabled;
    this.child = namedParameters.child;
    this.className = '_TabControllerScope';
  }
}
export { _TabControllerScope };
class DefaultTabController extends StatefulWidget {
  length: number;
  initialIndex: number;
  child: MXWidget;
  public constructor(namedParameters: {key?: Key, length?: number, initialIndex?: number, child?: MXWidget} = {}) {
    super();
    this.key = namedParameters.key;
    this.length = namedParameters.length;
    this.initialIndex = namedParameters.initialIndex;
    this.child = namedParameters.child;
    this.className = 'DefaultTabController';
  }
}
export { DefaultTabController };
class _DefaultTabControllerState extends State {
  controller: TabController;
}
export { _DefaultTabControllerState };
