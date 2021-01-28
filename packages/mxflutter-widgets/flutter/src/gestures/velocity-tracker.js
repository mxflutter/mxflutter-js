//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { MXDartClass } from '@mxflutter/mxflutter-base';
class Velocity extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.pixelsPerSecond = namedParameters.pixelsPerSecond;
        this.className = 'Velocity';
    }
    static get zero() {
        var jsObj = new Velocity();
        jsObj['className'] = 'Velocity';
        jsObj['constructorName'] = 'zero';
        return jsObj;
    }
}
export { Velocity };
class VelocityEstimate extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.pixelsPerSecond = namedParameters.pixelsPerSecond;
        this.confidence = namedParameters.confidence;
        this.duration = namedParameters.duration;
        this.offset = namedParameters.offset;
        this.className = 'VelocityEstimate';
    }
}
export { VelocityEstimate };
class _PointAtTime extends MXDartClass {
    constructor(point, time) {
        super();
        this.point = point;
        this.time = time;
        this.className = '_PointAtTime';
    }
}
export { _PointAtTime };
class VelocityTracker extends MXDartClass {
}
export { VelocityTracker };
