"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tolerance = exports.ScrollSpringSimulation = exports.SpringSimulation = exports.SpringType = exports.SpringDescription = exports.Simulation = exports.GravitySimulation = exports.BoundedFrictionSimulation = exports.FrictionSimulation = exports.ClampedSimulation = void 0;
const tolerance_1 = require("./flutter/src/physics/tolerance");
Object.defineProperty(exports, "Tolerance", { enumerable: true, get: function () { return tolerance_1.Tolerance; } });
const spring_simulation_1 = require("./flutter/src/physics/spring-simulation");
Object.defineProperty(exports, "SpringDescription", { enumerable: true, get: function () { return spring_simulation_1.SpringDescription; } });
Object.defineProperty(exports, "SpringType", { enumerable: true, get: function () { return spring_simulation_1.SpringType; } });
Object.defineProperty(exports, "SpringSimulation", { enumerable: true, get: function () { return spring_simulation_1.SpringSimulation; } });
Object.defineProperty(exports, "ScrollSpringSimulation", { enumerable: true, get: function () { return spring_simulation_1.ScrollSpringSimulation; } });
const simulation_1 = require("./flutter/src/physics/simulation");
Object.defineProperty(exports, "Simulation", { enumerable: true, get: function () { return simulation_1.Simulation; } });
const gravity_simulation_1 = require("./flutter/src/physics/gravity-simulation");
Object.defineProperty(exports, "GravitySimulation", { enumerable: true, get: function () { return gravity_simulation_1.GravitySimulation; } });
const friction_simulation_1 = require("./flutter/src/physics/friction-simulation");
Object.defineProperty(exports, "FrictionSimulation", { enumerable: true, get: function () { return friction_simulation_1.FrictionSimulation; } });
Object.defineProperty(exports, "BoundedFrictionSimulation", { enumerable: true, get: function () { return friction_simulation_1.BoundedFrictionSimulation; } });
const clamped_simulation_1 = require("./flutter/src/physics/clamped-simulation");
Object.defineProperty(exports, "ClampedSimulation", { enumerable: true, get: function () { return clamped_simulation_1.ClampedSimulation; } });
