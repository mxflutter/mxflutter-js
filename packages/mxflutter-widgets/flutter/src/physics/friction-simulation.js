"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoundedFrictionSimulation = exports.FrictionSimulation = void 0;
const simulation_1 = require("./simulation");
class FrictionSimulation extends simulation_1.Simulation {
    constructor(drag, position, velocity, namedParameters = {}) {
        super();
        this.drag = drag;
        this['position'] = position;
        this['velocity'] = velocity;
        this.tolerance = namedParameters.tolerance;
        this.className = 'FrictionSimulation';
    }
    static through(startPosition, endPosition, startVelocity, endVelocity) {
        var jsObj = new FrictionSimulation();
        jsObj['startPosition'] = startPosition;
        jsObj['endPosition'] = endPosition;
        jsObj['startVelocity'] = startVelocity;
        jsObj['endVelocity'] = endVelocity;
        jsObj['constructorName'] = 'through';
        return jsObj;
    }
}
exports.FrictionSimulation = FrictionSimulation;
class BoundedFrictionSimulation extends FrictionSimulation {
    constructor(drag, position, velocity, _minX, _maxX) {
        super();
        this.drag = drag;
        this['position'] = position;
        this['velocity'] = velocity;
        this.minX = _minX;
        this.maxX = _maxX;
        this.className = 'BoundedFrictionSimulation';
    }
}
exports.BoundedFrictionSimulation = BoundedFrictionSimulation;
