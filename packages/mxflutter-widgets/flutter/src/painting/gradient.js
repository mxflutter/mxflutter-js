//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { MXDartClass } from '@mxflutter/mxflutter-base';
class _ColorsAndStops extends MXDartClass {
    constructor(colors, stops) {
        super();
        this.colors = colors;
        this.stops = stops;
        this.className = '_ColorsAndStops';
    }
}
export { _ColorsAndStops };
class GradientTransform extends MXDartClass {
}
export { GradientTransform };
class GradientRotation extends GradientTransform {
    constructor(radians) {
        super();
        this.radians = radians;
        this.className = 'GradientRotation';
    }
}
export { GradientRotation };
class Gradient extends MXDartClass {
}
export { Gradient };
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
export { LinearGradient };
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
export { RadialGradient };
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
export { SweepGradient };
