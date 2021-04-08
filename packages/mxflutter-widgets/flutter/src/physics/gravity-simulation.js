"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.GravitySimulation = void 0;
const simulation_1 = require("./simulation");
class GravitySimulation extends simulation_1.Simulation {
    constructor(acceleration, distance, endDistance, velocity) {
        super();
        this['acceleration'] = acceleration;
        this['distance'] = distance;
        this['endDistance'] = endDistance;
        this['velocity'] = velocity;
        this.className = 'GravitySimulation';
    }
}
exports.GravitySimulation = GravitySimulation;
