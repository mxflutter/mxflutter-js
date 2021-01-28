//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Duration } from '../../../mx-dart-sdk';
import { ProxyAnimation } from '../animation/animations';
import { Animation, AnimationStatus } from '../animation/animation';
import { Tween } from '../animation/tween';
import { PageRoute } from './pages';
import { OverlayState, OverlayEntry } from './overlay';
import { Size, Rect } from '../../../mx-dart-sdk';
import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { NavigatorState, NavigatorObserver, Route } from './navigator';
import { Key } from '../foundation/key';
import { StatefulWidget$, Widget, BuildContext$, StatefulElement, Element$, State$, GlobalKey } from './framework';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum HeroFlightDirection {
  push = '{ "_name": "HeroFlightDirection.push", "index": 0 }',
  pop = '{ "_name": "HeroFlightDirection.pop", "index": 1 }',
}

export { HeroFlightDirection };
class Hero extends StatefulWidget$ {
  tag: any;
  createRectTween: any;
  child: MXWidget;
  flightShuttleBuilder: any;
  placeholderBuilder: any;
  transitionOnUserGestures: boolean;
  public constructor(
    namedParameters: {
      key?: Key;
      tag?: any;
      createRectTween?: any;
      flightShuttleBuilder?: any;
      placeholderBuilder?: any;
      transitionOnUserGestures?: boolean;
      child?: MXWidget;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.tag = namedParameters.tag;
    this.createRectTween = namedParameters.createRectTween;
    this.flightShuttleBuilder = namedParameters.flightShuttleBuilder;
    this.placeholderBuilder = namedParameters.placeholderBuilder;
    this.transitionOnUserGestures = namedParameters.transitionOnUserGestures;
    this.child = namedParameters.child;
    this.className = 'Hero';
  }
}
export { Hero };
class _HeroState extends State$ {
  key: GlobalKey;
  placeholderSize: Size;
  shouldIncludeChild: boolean;
}
export { _HeroState };
class _HeroFlightManifest extends MXDartClass {
  type: HeroFlightDirection;
  overlay: OverlayState;
  navigatorRect: Rect;
  fromRoute: PageRoute;
  toRoute: PageRoute;
  fromHero: _HeroState;
  toHero: _HeroState;
  createRectTween: any;
  shuttleBuilder: any;
  isUserGestureTransition: boolean;
  isDiverted: boolean;
  public constructor(
    namedParameters: {
      type?: HeroFlightDirection;
      overlay?: OverlayState;
      navigatorRect?: Rect;
      fromRoute?: PageRoute;
      toRoute?: PageRoute;
      fromHero?: _HeroState;
      toHero?: _HeroState;
      createRectTween?: any;
      shuttleBuilder?: any;
      isUserGestureTransition?: boolean;
      isDiverted?: boolean;
    } = {},
  ) {
    super();
    this.type = namedParameters.type;
    this.overlay = namedParameters.overlay;
    this.navigatorRect = namedParameters.navigatorRect;
    this.fromRoute = namedParameters.fromRoute;
    this.toRoute = namedParameters.toRoute;
    this.fromHero = namedParameters.fromHero;
    this.toHero = namedParameters.toHero;
    this.createRectTween = namedParameters.createRectTween;
    this.shuttleBuilder = namedParameters.shuttleBuilder;
    this.isUserGestureTransition = namedParameters.isUserGestureTransition;
    this.isDiverted = namedParameters.isDiverted;
    this.className = '_HeroFlightManifest';
  }
}
export { _HeroFlightManifest };
class _HeroFlight extends MXDartClass {
  onFlightEnded: any;
  heroRectTween: Tween;
  shuttle: MXWidget;
  heroOpacity: Animation;
  proxyAnimation: ProxyAnimation;
  manifest: _HeroFlightManifest;
  overlayEntry: OverlayEntry;
  aborted: boolean;
  public constructor(onFlightEnded?: any) {
    super();
    this.onFlightEnded = onFlightEnded;
    this.className = '_HeroFlight';
  }
}
export { _HeroFlight };
class HeroController extends NavigatorObserver {
  createRectTween: any;
  flights: Map<any, any>;
  public constructor(namedParameters: { createRectTween?: any } = {}) {
    super();
    this.createRectTween = namedParameters.createRectTween;
    this.className = 'HeroController';
  }
}
export { HeroController };
