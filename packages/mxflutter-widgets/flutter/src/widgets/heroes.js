//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { NavigatorObserver } from './navigator';
import { StatefulWidget$, State$ } from './framework';
import { MXDartClass } from '@mxflutter/mxflutter-base';
var HeroFlightDirection;
(function (HeroFlightDirection) {
    HeroFlightDirection["push"] = "{ \"_name\": \"HeroFlightDirection.push\", \"index\": 0 }";
    HeroFlightDirection["pop"] = "{ \"_name\": \"HeroFlightDirection.pop\", \"index\": 1 }";
})(HeroFlightDirection || (HeroFlightDirection = {}));
export { HeroFlightDirection };
class Hero extends StatefulWidget$ {
    constructor(namedParameters = {}) {
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
}
export { _HeroState };
class _HeroFlightManifest extends MXDartClass {
    constructor(namedParameters = {}) {
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
    constructor(onFlightEnded) {
        super();
        this.onFlightEnded = onFlightEnded;
        this.className = '_HeroFlight';
    }
}
export { _HeroFlight };
class HeroController extends NavigatorObserver {
    constructor(namedParameters = {}) {
        super();
        this.createRectTween = namedParameters.createRectTween;
        this.className = 'HeroController';
    }
}
export { HeroController };
