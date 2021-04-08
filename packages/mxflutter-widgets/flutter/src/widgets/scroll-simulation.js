"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClampingScrollSimulation = exports.BouncingScrollSimulation = void 0;
const simulation_1 = require("../physics/simulation");
class BouncingScrollSimulation extends simulation_1.Simulation {
    constructor(namedParameters = {}) {
        super();
        this['position'] = namedParameters.position;
        this['velocity'] = namedParameters.velocity;
        this.leadingExtent = namedParameters.leadingExtent;
        this.trailingExtent = namedParameters.trailingExtent;
        this.spring = namedParameters.spring;
        this.tolerance = namedParameters.tolerance;
        this.className = 'BouncingScrollSimulation';
    }
    static get maxSpringTransferVelocity() {
        return 5000.0;
    }
}
exports.BouncingScrollSimulation = BouncingScrollSimulation;
class ClampingScrollSimulation extends simulation_1.Simulation {
    constructor(namedParameters = {}) {
        super();
        this.position = namedParameters.position;
        this.velocity = namedParameters.velocity;
        this.friction = namedParameters.friction;
        this.tolerance = namedParameters.tolerance;
        this.className = 'ClampingScrollSimulation';
    }
}
exports.ClampingScrollSimulation = ClampingScrollSimulation;
