"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.IOSScrollViewFlingVelocityTracker = exports.VelocityTracker = exports._PointAtTime = exports.VelocityEstimate = exports.Velocity = void 0;
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class Velocity extends mxflutter_base_1.MXDartClass {
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
exports.Velocity = Velocity;
class VelocityEstimate extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.pixelsPerSecond = namedParameters.pixelsPerSecond;
        this.confidence = namedParameters.confidence;
        this.duration = namedParameters.duration;
        this.offset = namedParameters.offset;
        this.className = 'VelocityEstimate';
    }
}
exports.VelocityEstimate = VelocityEstimate;
class _PointAtTime extends mxflutter_base_1.MXDartClass {
    constructor(point, time) {
        super();
        this.point = point;
        this.time = time;
        this.className = '_PointAtTime';
    }
}
exports._PointAtTime = _PointAtTime;
class VelocityTracker extends mxflutter_base_1.MXDartClass {
    constructor(kind) {
        super();
        this.kind = kind;
        this.className = 'VelocityTracker';
    }
    static withKind(kind) {
        var jsObj = new VelocityTracker();
        jsObj.kind = kind;
        jsObj['constructorName'] = 'withKind';
        return jsObj;
    }
}
exports.VelocityTracker = VelocityTracker;
class IOSScrollViewFlingVelocityTracker extends VelocityTracker {
    constructor(kind) {
        super();
        this.kind = kind;
        this.className = 'IOSScrollViewFlingVelocityTracker';
    }
}
exports.IOSScrollViewFlingVelocityTracker = IOSScrollViewFlingVelocityTracker;
