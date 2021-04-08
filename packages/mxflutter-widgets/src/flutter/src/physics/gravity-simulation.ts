// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Simulation } from './simulation';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class GravitySimulation extends Simulation {
  x: number;
  v: number;
  a: number;
  end: number;
  public constructor(acceleration?: number, distance?: number, endDistance?: number, velocity?: number) {
    super();
    this['acceleration'] = acceleration;
    this['distance'] = distance;
    this['endDistance'] = endDistance;
    this['velocity'] = velocity;
    this.className = 'GravitySimulation';
  }
}
export { GravitySimulation };
