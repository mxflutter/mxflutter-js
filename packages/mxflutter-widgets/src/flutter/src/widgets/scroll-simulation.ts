//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Tolerance } from '../physics/tolerance';
import { FrictionSimulation } from '../physics/friction-simulation';
import { SpringDescription } from '../physics/spring-simulation';
import { Simulation } from '../physics/simulation';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class BouncingScrollSimulation extends Simulation {
  leadingExtent: number;
  trailingExtent: number;
  spring: SpringDescription;
  frictionSimulation: FrictionSimulation;
  springSimulation: Simulation;
  springTime: number;
  timeOffset: number;
  public constructor(
    namedParameters: {
      position?: number;
      velocity?: number;
      leadingExtent?: number;
      trailingExtent?: number;
      spring?: SpringDescription;
      tolerance?: Tolerance;
    } = {},
  ) {
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
  position: number;
  velocity: number;
  friction: number;
  duration: number;
  distance: number;
  public constructor(
    namedParameters: { position?: number; velocity?: number; friction?: number; tolerance?: Tolerance } = {},
  ) {
    super();
    this.position = namedParameters.position;
    this.velocity = namedParameters.velocity;
    this.friction = namedParameters.friction;
    this.tolerance = namedParameters.tolerance;
    this.className = 'ClampingScrollSimulation';
  }
}
export { ClampingScrollSimulation };
