"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._UnderdampedSolution = exports._OverdampedSolution = exports._CriticalSolution = exports._SpringSolution = exports.ScrollSpringSimulation = exports.SpringSimulation = exports.SpringType = exports.SpringDescription = void 0;
const simulation_1 = require("./simulation");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class SpringDescription extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.mass = namedParameters.mass;
        this.stiffness = namedParameters.stiffness;
        this.damping = namedParameters.damping;
        this.className = 'SpringDescription';
    }
    static withDampingRatio(namedParameters = {}) {
        var jsObj = new SpringDescription();
        jsObj.mass = namedParameters.mass;
        jsObj.stiffness = namedParameters.stiffness;
        jsObj['ratio'] = namedParameters.ratio;
        jsObj['constructorName'] = 'withDampingRatio';
        return jsObj;
    }
}
exports.SpringDescription = SpringDescription;
var SpringType;
(function (SpringType) {
    SpringType["criticallyDamped"] = "{ \"_name\": \"SpringType.criticallyDamped\", \"index\": 0 }";
    SpringType["underDamped"] = "{ \"_name\": \"SpringType.underDamped\", \"index\": 1 }";
    SpringType["overDamped"] = "{ \"_name\": \"SpringType.overDamped\", \"index\": 2 }";
})(SpringType || (SpringType = {}));
exports.SpringType = SpringType;
;
class SpringSimulation extends simulation_1.Simulation {
    constructor(spring, start, end, velocity, namedParameters = {}) {
        super();
        this['spring'] = spring;
        this['start'] = start;
        this['end'] = end;
        this['velocity'] = velocity;
        this.tolerance = namedParameters.tolerance;
        this.className = 'SpringSimulation';
    }
}
exports.SpringSimulation = SpringSimulation;
class ScrollSpringSimulation extends SpringSimulation {
    constructor(spring, start, end, velocity, namedParameters = {}) {
        super();
        this['spring'] = spring;
        this['start'] = start;
        this['end'] = end;
        this['velocity'] = velocity;
        this['tolerance'] = namedParameters.tolerance;
        this.className = 'ScrollSpringSimulation';
    }
}
exports.ScrollSpringSimulation = ScrollSpringSimulation;
class _SpringSolution extends mxflutter_base_1.MXDartClass {
    constructor(spring, initialPosition, initialVelocity) {
        super();
        this['spring'] = spring;
        this['initialPosition'] = initialPosition;
        this['initialVelocity'] = initialVelocity;
        this.className = '_SpringSolution';
    }
}
exports._SpringSolution = _SpringSolution;
class _CriticalSolution extends mxflutter_base_1.MXDartClass {
    constructor(spring, distance, velocity) {
        super();
        this['spring'] = spring;
        this['distance'] = distance;
        this['velocity'] = velocity;
        this.className = '_CriticalSolution';
    }
    static withArgs(r, c1, c2) {
        var jsObj = new _CriticalSolution();
        jsObj.r = r;
        jsObj.c1 = c1;
        jsObj.c2 = c2;
        jsObj['constructorName'] = 'withArgs';
        return jsObj;
    }
}
exports._CriticalSolution = _CriticalSolution;
class _OverdampedSolution extends mxflutter_base_1.MXDartClass {
    constructor(spring, distance, velocity) {
        super();
        this['spring'] = spring;
        this['distance'] = distance;
        this['velocity'] = velocity;
        this.className = '_OverdampedSolution';
    }
    static withArgs(r1, r2, c1, c2) {
        var jsObj = new _OverdampedSolution();
        jsObj.r1 = r1;
        jsObj.r2 = r2;
        jsObj.c1 = c1;
        jsObj.c2 = c2;
        jsObj['constructorName'] = 'withArgs';
        return jsObj;
    }
}
exports._OverdampedSolution = _OverdampedSolution;
class _UnderdampedSolution extends mxflutter_base_1.MXDartClass {
    constructor(spring, distance, velocity) {
        super();
        this['spring'] = spring;
        this['distance'] = distance;
        this['velocity'] = velocity;
        this.className = '_UnderdampedSolution';
    }
    static withArgs(w, r, c1, c2) {
        var jsObj = new _UnderdampedSolution();
        jsObj.w = w;
        jsObj.r = r;
        jsObj.c1 = c1;
        jsObj.c2 = c2;
        jsObj['constructorName'] = 'withArgs';
        return jsObj;
    }
}
exports._UnderdampedSolution = _UnderdampedSolution;
