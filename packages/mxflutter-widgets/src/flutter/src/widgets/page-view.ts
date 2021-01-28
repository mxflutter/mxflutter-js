//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

// MX Modified begin
import { MXMirrorObjMethodCall } from '@mxflutter/mxflutter-base';
// MX Modified end
import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { ViewportOffset } from '../rendering/viewport-offset';
import { ScrollNotification } from './scroll-notification';
import { Key } from '../foundation/key';
import { DragStartBehavior } from '../gestures/recognizer';
import { SliverChildDelegate } from './sliver';
import { StatefulWidget$, State$, BuildContext$ } from './framework';
import { Tolerance } from '../physics/tolerance';
import { ScrollPositionWithSingleContext } from './scroll-position-with-single-context';
import { AxisDirection, Axis } from '../painting/basic-types';
import { FixedScrollMetrics, ScrollMetrics } from './scroll-metrics';
import { ScrollPosition } from './scroll-position';
import { ScrollContext } from './scroll-context';
import { ScrollPhysics } from './scroll-physics';
import { Curve } from '../animation/curves';
import { Duration } from '../../../mx-dart-sdk';
import { ScrollController } from './scroll-controller';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class PageController extends ScrollController {
  initialPage: number;
  keepPage: boolean;
  viewportFraction: number;
  public constructor(namedParameters: { initialPage?: number; keepPage?: boolean; viewportFraction?: number } = {}) {
    super();
    this.initialPage = namedParameters.initialPage;
    this.keepPage = namedParameters.keepPage;
    this.viewportFraction = namedParameters.viewportFraction;
    this.className = 'PageController';
  }
  // MX Modified begin
  public jumpToPage(page: number) {
    const argument = new MXMirrorObjMethodCall({
      mirrorID: this.mirrorID,
      className: 'PageController',
      funcName: 'jumpToPage',
      args: {
        page,
      },
    });
    this.invokeMirrorObjMethod(argument);
  }
  // MX Modified end
}
export { PageController };
class PageMetrics extends FixedScrollMetrics {
  viewportFraction: number;
  public constructor(
    namedParameters: {
      minScrollExtent?: number;
      maxScrollExtent?: number;
      pixels?: number;
      viewportDimension?: number;
      axisDirection?: AxisDirection;
      viewportFraction?: number;
    } = {},
  ) {
    super();
    this.minScrollExtent = namedParameters.minScrollExtent;
    this.maxScrollExtent = namedParameters.maxScrollExtent;
    this.pixels = namedParameters.pixels;
    this.viewportDimension = namedParameters.viewportDimension;
    this.axisDirection = namedParameters.axisDirection;
    this.viewportFraction = namedParameters.viewportFraction;
    this.className = 'PageMetrics';
  }
}
export { PageMetrics };
class _PagePosition extends ScrollPositionWithSingleContext {
  initialPage: number;
  pageToUseOnStartup: number;
  viewportFraction: number;
  public constructor(
    namedParameters: {
      physics?: ScrollPhysics;
      context?: ScrollContext;
      initialPage?: number;
      keepPage?: boolean;
      viewportFraction?: number;
      oldPosition?: ScrollPosition;
    } = {},
  ) {
    super();
    this.physics = namedParameters.physics;
    this.context = namedParameters.context;
    this.initialPage = namedParameters.initialPage;
    this['keepPage'] = namedParameters.keepPage;
    this.viewportFraction = namedParameters.viewportFraction;
    this['oldPosition'] = namedParameters.oldPosition;
    this.className = '_PagePosition';
  }
}
export { _PagePosition };
class _ForceImplicitScrollPhysics extends ScrollPhysics {
  allowImplicitScrolling: boolean;
  public constructor(namedParameters: { allowImplicitScrolling?: boolean; parent?: ScrollPhysics } = {}) {
    super();
    this.allowImplicitScrolling = namedParameters.allowImplicitScrolling;
    this.parent = namedParameters.parent;
    this.className = '_ForceImplicitScrollPhysics';
  }
}
export { _ForceImplicitScrollPhysics };
class PageScrollPhysics extends ScrollPhysics {
  public constructor(namedParameters: { parent?: ScrollPhysics } = {}) {
    super();
    this['parent'] = namedParameters.parent;
    this.className = 'PageScrollPhysics';
  }
}
export { PageScrollPhysics };
class PageView extends StatefulWidget$ {
  allowImplicitScrolling: boolean;
  scrollDirection: Axis;
  reverse: boolean;
  controller: PageController;
  physics: ScrollPhysics;
  pageSnapping: boolean;
  onPageChanged: any;
  childrenDelegate: SliverChildDelegate;
  dragStartBehavior: DragStartBehavior;
  public constructor(
    namedParameters: {
      key?: Key;
      scrollDirection?: Axis;
      reverse?: boolean;
      controller?: PageController;
      physics?: ScrollPhysics;
      pageSnapping?: boolean;
      onPageChanged?: any;
      children?: Array<any>;
      dragStartBehavior?: DragStartBehavior;
      allowImplicitScrolling?: boolean;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.scrollDirection = namedParameters.scrollDirection;
    this.reverse = namedParameters.reverse;
    this.controller = namedParameters.controller;
    this.physics = namedParameters.physics;
    this.pageSnapping = namedParameters.pageSnapping;
    this.onPageChanged = namedParameters.onPageChanged;
    this['children'] = namedParameters.children;
    this.dragStartBehavior = namedParameters.dragStartBehavior;
    this.allowImplicitScrolling = namedParameters.allowImplicitScrolling;
    this.className = 'PageView';
  }
  static builder(
    namedParameters: {
      key?: Key;
      scrollDirection?: Axis;
      reverse?: boolean;
      controller?: PageController;
      physics?: ScrollPhysics;
      pageSnapping?: boolean;
      onPageChanged?: any;
      itemBuilder?: any;
      itemCount?: number;
      dragStartBehavior?: DragStartBehavior;
      allowImplicitScrolling?: boolean;
    } = {},
  ) {
    var jsObj = new PageView();
    jsObj.key = namedParameters.key;
    jsObj.scrollDirection = namedParameters.scrollDirection;
    jsObj.reverse = namedParameters.reverse;
    jsObj.controller = namedParameters.controller;
    jsObj.physics = namedParameters.physics;
    jsObj.pageSnapping = namedParameters.pageSnapping;
    jsObj.onPageChanged = namedParameters.onPageChanged;
    jsObj['itemBuilder'] = namedParameters.itemBuilder;
    jsObj['itemCount'] = namedParameters.itemCount;
    jsObj.dragStartBehavior = namedParameters.dragStartBehavior;
    jsObj.allowImplicitScrolling = namedParameters.allowImplicitScrolling;
    jsObj['constructorName'] = 'builder';
    return jsObj;
  }
  static custom(
    namedParameters: {
      key?: Key;
      scrollDirection?: Axis;
      reverse?: boolean;
      controller?: PageController;
      physics?: ScrollPhysics;
      pageSnapping?: boolean;
      onPageChanged?: any;
      childrenDelegate?: SliverChildDelegate;
      dragStartBehavior?: DragStartBehavior;
      allowImplicitScrolling?: boolean;
    } = {},
  ) {
    var jsObj = new PageView();
    jsObj.key = namedParameters.key;
    jsObj.scrollDirection = namedParameters.scrollDirection;
    jsObj.reverse = namedParameters.reverse;
    jsObj.controller = namedParameters.controller;
    jsObj.physics = namedParameters.physics;
    jsObj.pageSnapping = namedParameters.pageSnapping;
    jsObj.onPageChanged = namedParameters.onPageChanged;
    jsObj.childrenDelegate = namedParameters.childrenDelegate;
    jsObj.dragStartBehavior = namedParameters.dragStartBehavior;
    jsObj.allowImplicitScrolling = namedParameters.allowImplicitScrolling;
    jsObj['constructorName'] = 'custom';
    return jsObj;
  }
  // MX modified begin
  public preBuild(buildContext: any) {
    if (this['itemBuilder']) {
      this['children'] = [];
      for (let i = 0; i < this['itemCount']; ++i) {
        const w = this['itemBuilder'](buildContext, i);
        this['children'].push(w);
      }
      delete this['itemBuilder'];
    }
  }
  // MX modified end
}
export { PageView };
class _PageViewState extends State$ {
  lastReportedPage: number;
}
export { _PageViewState };
