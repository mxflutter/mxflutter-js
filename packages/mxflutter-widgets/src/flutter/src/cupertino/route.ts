// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Tween } from '../animation/tween';
import { Color, ImageFilter } from '../../../mx-dart-sdk';
import { PopupRoute } from '../widgets/routes';
import { LinearGradient } from '../painting/gradient';
import { Decoration, BoxPainter } from '../painting/decoration';
import { AnimationController } from '../animation/animation-controller';
import { HorizontalDragGestureRecognizer } from '../gestures/monodrag';
import { Animation } from '../animation/animation';
import { LocalKey, Key } from '../foundation/key';
import { Widget, StatelessWidget, StatefulWidget, State } from '../widgets/framework';
import { RouteSettings, Page, NavigatorState } from '../widgets/navigator';
import { ValueNotifier } from '../foundation/change-notifier';
import { PageRoute } from '../widgets/pages';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class CupertinoRouteTransitionMixin extends PageRoute {
  previousTitle: ValueNotifier;
}
export { CupertinoRouteTransitionMixin };
class CupertinoPageRoute extends PageRoute {
  builder: any;
  title: string;
  maintainState: boolean;
  public constructor(namedParameters: {builder?: any, title?: string, settings?: RouteSettings, maintainState?: boolean, fullscreenDialog?: boolean} = {}) {
    super();
    this.builder = namedParameters.builder;
    this.title = namedParameters.title;
    this.settings = namedParameters.settings;
    this.maintainState = namedParameters.maintainState;
    this.fullscreenDialog = namedParameters.fullscreenDialog;
    this.className = 'CupertinoPageRoute';
  }
}
export { CupertinoPageRoute };
class _PageBasedCupertinoPageRoute extends PageRoute {
  public constructor(namedParameters: {page?: CupertinoPage} = {}) {
    super();
    this['page'] = namedParameters.page;
    this.className = '_PageBasedCupertinoPageRoute';
  }
}
export { _PageBasedCupertinoPageRoute };
class CupertinoPage extends Page {
  child: MXWidget;
  title: string;
  maintainState: boolean;
  fullscreenDialog: boolean;
  public constructor(namedParameters: {child?: MXWidget, maintainState?: boolean, title?: string, fullscreenDialog?: boolean, key?: LocalKey, name?: string, mx_arguments?: any} = {}) {
    super();
    this.child = namedParameters.child;
    this.maintainState = namedParameters.maintainState;
    this.title = namedParameters.title;
    this.fullscreenDialog = namedParameters.fullscreenDialog;
    this.key = namedParameters.key;
    this.name = namedParameters.name;
    this.mx_arguments = namedParameters.mx_arguments;
    this.className = 'CupertinoPage';
  }
}
export { CupertinoPage };
class CupertinoPageTransition extends StatelessWidget {
  primaryPositionAnimation: Animation;
  secondaryPositionAnimation: Animation;
  primaryShadowAnimation: Animation;
  child: MXWidget;
  public constructor(namedParameters: {key?: Key, primaryRouteAnimation?: Animation, secondaryRouteAnimation?: Animation, child?: MXWidget, linearTransition?: boolean} = {}) {
    super();
    this.key = namedParameters.key;
    this['primaryRouteAnimation'] = namedParameters.primaryRouteAnimation;
    this['secondaryRouteAnimation'] = namedParameters.secondaryRouteAnimation;
    this.child = namedParameters.child;
    this['linearTransition'] = namedParameters.linearTransition;
    this.className = 'CupertinoPageTransition';
  }
}
export { CupertinoPageTransition };
class CupertinoFullscreenDialogTransition extends StatelessWidget {
  positionAnimation: Animation;
  secondaryPositionAnimation: Animation;
  child: MXWidget;
  public constructor(namedParameters: {key?: Key, primaryRouteAnimation?: Animation, secondaryRouteAnimation?: Animation, child?: MXWidget, linearTransition?: boolean} = {}) {
    super();
    this.key = namedParameters.key;
    this['primaryRouteAnimation'] = namedParameters.primaryRouteAnimation;
    this['secondaryRouteAnimation'] = namedParameters.secondaryRouteAnimation;
    this.child = namedParameters.child;
    this['linearTransition'] = namedParameters.linearTransition;
    this.className = 'CupertinoFullscreenDialogTransition';
  }
}
export { CupertinoFullscreenDialogTransition };
class _CupertinoBackGestureDetector extends StatefulWidget {
  child: MXWidget;
  enabledCallback: any;
  onStartPopGesture: any;
  public constructor(namedParameters: {key?: Key, enabledCallback?: any, onStartPopGesture?: any, child?: MXWidget} = {}) {
    super();
    this.key = namedParameters.key;
    this.enabledCallback = namedParameters.enabledCallback;
    this.onStartPopGesture = namedParameters.onStartPopGesture;
    this.child = namedParameters.child;
    this.className = '_CupertinoBackGestureDetector';
  }
}
export { _CupertinoBackGestureDetector };
class _CupertinoBackGestureDetectorState extends State {
  backGestureController: _CupertinoBackGestureController;
  recognizer: HorizontalDragGestureRecognizer;
}
export { _CupertinoBackGestureDetectorState };
class _CupertinoBackGestureController extends MXDartClass {
  controller: AnimationController;
  navigator: NavigatorState;
  public constructor(namedParameters: {navigator?: NavigatorState, controller?: AnimationController} = {}) {
    super();
    this.navigator = namedParameters.navigator;
    this.controller = namedParameters.controller;
    this.className = '_CupertinoBackGestureController';
  }
}
export { _CupertinoBackGestureController };
class _CupertinoEdgeShadowDecoration extends Decoration {
  edgeGradient: LinearGradient;
  public constructor(namedParameters: {edgeGradient?: LinearGradient} = {}) {
    super();
    this.edgeGradient = namedParameters.edgeGradient;
    this.className = '_CupertinoEdgeShadowDecoration';
  }
  static get none() {
    var jsObj = new _CupertinoEdgeShadowDecoration();
    jsObj['className'] = '_CupertinoEdgeShadowDecoration';
    jsObj['constructorName'] = 'none';
    return jsObj;
  }
}
export { _CupertinoEdgeShadowDecoration };
class _CupertinoEdgeShadowPainter extends BoxPainter {
  decoration: _CupertinoEdgeShadowDecoration;
  public constructor(_decoration?: _CupertinoEdgeShadowDecoration, onChange?: any) {
    super();
    this.decoration = _decoration;
    this['onChange'] = onChange;
    this.className = '_CupertinoEdgeShadowPainter';
  }
}
export { _CupertinoEdgeShadowPainter };
class _CupertinoModalPopupRoute extends PopupRoute {
  builder: any;
  semanticsDismissible: boolean;
  barrierLabel: string;
  barrierColor: Color;
  animation: Animation;
  offsetTween: Tween;
  public constructor(namedParameters: {barrierColor?: Color, barrierLabel?: string, builder?: any, semanticsDismissible?: boolean, filter?: ImageFilter, settings?: RouteSettings} = {}) {
    super();
    this.barrierColor = namedParameters.barrierColor;
    this.barrierLabel = namedParameters.barrierLabel;
    this.builder = namedParameters.builder;
    this.semanticsDismissible = namedParameters.semanticsDismissible;
    this.filter = namedParameters.filter;
    this.settings = namedParameters.settings;
    this.className = '_CupertinoModalPopupRoute';
  }
}
export { _CupertinoModalPopupRoute };
