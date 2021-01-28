//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { Simulation } from './simulation';
class GravitySimulation extends Simulation {
    constructor(acceleration, distance, endDistance, velocity) {
        super();
        this['acceleration'] = acceleration;
        this['distance'] = distance;
        this['endDistance'] = endDistance;
        this['velocity'] = velocity;
        this.className = 'GravitySimulation';
    }
}
export { GravitySimulation };
