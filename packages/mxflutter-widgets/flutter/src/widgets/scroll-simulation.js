//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { Simulation } from '../physics/simulation';
class BouncingScrollSimulation extends Simulation {
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
export { BouncingScrollSimulation };
class ClampingScrollSimulation extends Simulation {
    constructor(namedParameters = {}) {
        super();
        this.position = namedParameters.position;
        this.velocity = namedParameters.velocity;
        this.friction = namedParameters.friction;
        this.tolerance = namedParameters.tolerance;
        this.className = 'ClampingScrollSimulation';
    }
}
export { ClampingScrollSimulation };
