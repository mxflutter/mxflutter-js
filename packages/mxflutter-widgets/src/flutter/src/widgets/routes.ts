// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// MX Modified begin
import {MXMirrorObjMethodCall, invokeMirrorObjMethod } from '@mxflutter/mxflutter-base';
// MX Modified end
import { Duration } from '../../../mx-dart-sdk';
import { OverlayEntry } from './overlay';
import { PageStorageBucket } from './page-storage';
import { ImageFilter, Color } from '../../../mx-dart-sdk';
import { FocusScopeNode } from './focus-manager';
import { Listenable } from '../foundation/change-notifier';
import { Key } from '../foundation/key';
import { InheritedWidget, Widget, StatefulWidget, State, GlobalKey } from './framework';
import { DismissAction } from './actions';
import { ProxyAnimation } from '../animation/animations';
import { AnimationController } from '../animation/animation-controller';
import { Animation } from '../animation/animation';
import { Route, NavigatorObserver, RouteSettings } from './navigator';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class OverlayRoute extends Route {
  overlayEntries: Array<any>;
}
export { OverlayRoute };
abstract class TransitionRoute extends OverlayRoute {
  transitionCompleter: any;
  animation: Animation;
  controller: AnimationController;
  secondaryAnimation: ProxyAnimation;
  result: any;
  trainHoppingListenerRemover: any;
}
export { TransitionRoute };
class LocalHistoryEntry extends MXDartClass {
  onRemove: any;
  owner: LocalHistoryRoute;
  public constructor(namedParameters: {onRemove?: any} = {}) {
    super();
    this.onRemove = namedParameters.onRemove;
    this.className = 'LocalHistoryEntry';
  }
}
export { LocalHistoryEntry };
abstract class LocalHistoryRoute extends Route {
  localHistory: Array<any>;
}
export { LocalHistoryRoute };
class _DismissModalAction extends DismissAction {}
export { _DismissModalAction };
class _ModalScopeStatus extends InheritedWidget {
  isCurrent: boolean;
  canPop: boolean;
  route: Route;
  public constructor(namedParameters: {key?: Key, isCurrent?: boolean, canPop?: boolean, route?: Route, child?: MXWidget} = {}) {
    super();
    this.key = namedParameters.key;
    this.isCurrent = namedParameters.isCurrent;
    this.canPop = namedParameters.canPop;
    this.route = namedParameters.route;
    this.child = namedParameters.child;
    this.className = '_ModalScopeStatus';
  }
}
export { _ModalScopeStatus };
class _ModalScope extends StatefulWidget {
  route: ModalRoute;
  public constructor(namedParameters: {key?: Key, route?: ModalRoute} = {}) {
    super();
    this.key = namedParameters.key;
    this.route = namedParameters.route;
    this.className = '_ModalScope';
  }
}
export { _ModalScope };
class _ModalScopeState extends State {
  page: MXWidget;
  listenable: Listenable;
  focusScopeNode: FocusScopeNode;
}
export { _ModalScopeState };
abstract class ModalRoute extends TransitionRoute {
  filter: ImageFilter;
  offstage: boolean;
  animationProxy: ProxyAnimation;
  secondaryAnimationProxy: ProxyAnimation;
  willPopCallbacks: Array<any>;
  scopeKey: GlobalKey;
  subtreeKey: GlobalKey;
  storageBucket: PageStorageBucket;
  modalBarrier: OverlayEntry;
  modalScopeCache: MXWidget;
  modalScope: OverlayEntry;
  // MX Modified begin
  // TODO: 先用异步实现
  public static async of(context: any) {
    const argument = new MXMirrorObjMethodCall({
      funcName: 'ModalRoute.of',
      args: {
        widgetElementID: context.widgetElementID,
      },
    });

    const promiseResult = new Promise(function (resolve, reject) {
      invokeMirrorObjMethod(argument, function (value) {
        if (value !== null) {
          const jsonObj = JSON.parse(value);
          resolve(jsonObj);
        } else {
          reject(null);
        }
      });
    });

    return promiseResult;
  }
  // MX Modified end
}
export { ModalRoute };
abstract class PopupRoute extends ModalRoute {}
export { PopupRoute };
class RouteObserver extends NavigatorObserver {
  listeners: Map<any, any>;
}
export { RouteObserver };
abstract class RouteAware extends MXDartClass {}
export { RouteAware };
class _DialogRoute extends PopupRoute {
  pageBuilder: any;
  barrierDismissible: boolean;
  barrierLabel: string;
  barrierColor: Color;
  transitionDuration: Duration;
  transitionBuilder: any;
  public constructor(namedParameters: {pageBuilder?: any, barrierDismissible?: boolean, barrierLabel?: string, barrierColor?: Color, transitionDuration?: Duration, transitionBuilder?: any, settings?: RouteSettings} = {}) {
    super();
    this.pageBuilder = namedParameters.pageBuilder;
    this.barrierDismissible = namedParameters.barrierDismissible;
    this.barrierLabel = namedParameters.barrierLabel;
    this.barrierColor = namedParameters.barrierColor;
    this.transitionDuration = namedParameters.transitionDuration;
    this.transitionBuilder = namedParameters.transitionBuilder;
    this.settings = namedParameters.settings;
    this.className = '_DialogRoute';
  }
}
export { _DialogRoute };
