"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClampedSimulation = void 0;
const simulation_1 = require("./simulation");
class ClampedSimulation extends simulation_1.Simulation {
    constructor(simulation, namedParameters = {}) {
        super();
        this.simulation = simulation;
        this.xMin = namedParameters.xMin;
        this.xMax = namedParameters.xMax;
        this.dxMin = namedParameters.dxMin;
        this.dxMax = namedParameters.dxMax;
        this.className = 'ClampedSimulation';
    }
}
exports.ClampedSimulation = ClampedSimulation;
