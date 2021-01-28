//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Tolerance } from './tolerance';
import { Simulation } from './simulation';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class FrictionSimulation extends Simulation {
  drag: number;
  dragLog: number;
  x: number;
  v: number;
  public constructor(
    drag?: number,
    position?: number,
    velocity?: number,
    namedParameters: { tolerance?: Tolerance } = {},
  ) {
    super();
    this.drag = drag;
    this['position'] = position;
    this['velocity'] = velocity;
    this.tolerance = namedParameters.tolerance;
    this.className = 'FrictionSimulation';
  }
  static through(startPosition?: number, endPosition?: number, startVelocity?: number, endVelocity?: number) {
    var jsObj = new FrictionSimulation();
    jsObj['startPosition'] = startPosition;
    jsObj['endPosition'] = endPosition;
    jsObj['startVelocity'] = startVelocity;
    jsObj['endVelocity'] = endVelocity;
    jsObj['constructorName'] = 'through';
    return jsObj;
  }
}
export { FrictionSimulation };
class BoundedFrictionSimulation extends FrictionSimulation {
  minX: number;
  maxX: number;
  public constructor(drag?: number, position?: number, velocity?: number, _minX?: number, _maxX?: number) {
    super();
    this.drag = drag;
    this['position'] = position;
    this['velocity'] = velocity;
    this.minX = _minX;
    this.maxX = _maxX;
    this.className = 'BoundedFrictionSimulation';
  }
}
export { BoundedFrictionSimulation };
