// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Simulation } from './simulation';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class ClampedSimulation extends Simulation {
  simulation: Simulation;
  xMin: number;
  xMax: number;
  dxMin: number;
  dxMax: number;
  public constructor(simulation?: Simulation, namedParameters: {xMin?: number, xMax?: number, dxMin?: number, dxMax?: number} = {}) {
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
