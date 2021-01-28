//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { Simulation } from './simulation';
class ClampedSimulation extends Simulation {
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
export { ClampedSimulation };
