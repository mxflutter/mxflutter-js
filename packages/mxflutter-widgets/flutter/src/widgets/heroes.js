"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroController = exports._HeroFlight = exports._HeroFlightManifest = exports._HeroState = exports.Hero = exports.HeroFlightDirection = void 0;
const navigator_1 = require("./navigator");
const framework_1 = require("./framework");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
var HeroFlightDirection;
(function (HeroFlightDirection) {
    HeroFlightDirection["push"] = "{ \"_name\": \"HeroFlightDirection.push\", \"index\": 0 }";
    HeroFlightDirection["pop"] = "{ \"_name\": \"HeroFlightDirection.pop\", \"index\": 1 }";
})(HeroFlightDirection || (HeroFlightDirection = {}));
exports.HeroFlightDirection = HeroFlightDirection;
;
class Hero extends framework_1.StatefulWidget {
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
exports.Hero = Hero;
class _HeroState extends framework_1.State {
}
exports._HeroState = _HeroState;
class _HeroFlightManifest extends mxflutter_base_1.MXDartClass {
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
exports._HeroFlightManifest = _HeroFlightManifest;
class _HeroFlight extends mxflutter_base_1.MXDartClass {
    constructor(onFlightEnded) {
        super();
        this.onFlightEnded = onFlightEnded;
        this.className = '_HeroFlight';
    }
}
exports._HeroFlight = _HeroFlight;
class HeroController extends navigator_1.NavigatorObserver {
    constructor(namedParameters = {}) {
        super();
        this.createRectTween = namedParameters.createRectTween;
        this.className = 'HeroController';
    }
}
exports.HeroController = HeroController;
