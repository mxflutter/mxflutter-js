"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.SweepGradient = exports.RadialGradient = exports.LinearGradient = exports.Gradient = exports.GradientRotation = exports.GradientTransform = exports._ColorsAndStops = void 0;
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class _ColorsAndStops extends mxflutter_base_1.MXDartClass {
    constructor(colors, stops) {
        super();
        this.colors = colors;
        this.stops = stops;
        this.className = '_ColorsAndStops';
    }
}
exports._ColorsAndStops = _ColorsAndStops;
class GradientTransform extends mxflutter_base_1.MXDartClass {
}
exports.GradientTransform = GradientTransform;
class GradientRotation extends GradientTransform {
    constructor(radians) {
        super();
        this.radians = radians;
        this.className = 'GradientRotation';
    }
}
exports.GradientRotation = GradientRotation;
class Gradient extends mxflutter_base_1.MXDartClass {
}
exports.Gradient = Gradient;
class LinearGradient extends Gradient {
    constructor(namedParameters = {}) {
        super();
        this.begin = namedParameters.begin;
        this.end = namedParameters.end;
        this.colors = namedParameters.colors;
        this.stops = namedParameters.stops;
        this.tileMode = namedParameters.tileMode;
        this.transform = namedParameters.transform;
        this.className = 'LinearGradient';
    }
}
exports.LinearGradient = LinearGradient;
class RadialGradient extends Gradient {
    constructor(namedParameters = {}) {
        super();
        this.center = namedParameters.center;
        this.radius = namedParameters.radius;
        this.colors = namedParameters.colors;
        this.stops = namedParameters.stops;
        this.tileMode = namedParameters.tileMode;
        this.focal = namedParameters.focal;
        this.focalRadius = namedParameters.focalRadius;
        this.transform = namedParameters.transform;
        this.className = 'RadialGradient';
    }
}
exports.RadialGradient = RadialGradient;
class SweepGradient extends Gradient {
    constructor(namedParameters = {}) {
        super();
        this.center = namedParameters.center;
        this.startAngle = namedParameters.startAngle;
        this.endAngle = namedParameters.endAngle;
        this.colors = namedParameters.colors;
        this.stops = namedParameters.stops;
        this.tileMode = namedParameters.tileMode;
        this.transform = namedParameters.transform;
        this.className = 'SweepGradient';
    }
}
exports.SweepGradient = SweepGradient;
