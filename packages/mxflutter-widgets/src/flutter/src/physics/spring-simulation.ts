//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Tolerance } from './tolerance';
import { Simulation } from './simulation';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class SpringDescription extends MXDartClass {
  mass: number;
  stiffness: number;
  damping: number;
  public constructor(namedParameters: { mass?: number; stiffness?: number; damping?: number } = {}) {
    super();
    this.mass = namedParameters.mass;
    this.stiffness = namedParameters.stiffness;
    this.damping = namedParameters.damping;
    this.className = 'SpringDescription';
  }
  static withDampingRatio(namedParameters: { mass?: number; stiffness?: number; ratio?: number } = {}) {
    var jsObj = new SpringDescription();
    jsObj.mass = namedParameters.mass;
    jsObj.stiffness = namedParameters.stiffness;
    jsObj['ratio'] = namedParameters.ratio;
    jsObj['constructorName'] = 'withDampingRatio';
    return jsObj;
  }
}
export { SpringDescription };
enum SpringType {
  criticallyDamped = '{ "_name": "SpringType.criticallyDamped", "index": 0 }',
  underDamped = '{ "_name": "SpringType.underDamped", "index": 1 }',
  overDamped = '{ "_name": "SpringType.overDamped", "index": 2 }',
}

export { SpringType };
class SpringSimulation extends Simulation {
  endPosition: number;
  solution: _SpringSolution;
  public constructor(
    spring?: SpringDescription,
    start?: number,
    end?: number,
    velocity?: number,
    namedParameters: { tolerance?: Tolerance } = {},
  ) {
    super();
    this['spring'] = spring;
    this['start'] = start;
    this['end'] = end;
    this['velocity'] = velocity;
    this.tolerance = namedParameters.tolerance;
    this.className = 'SpringSimulation';
  }
}
export { SpringSimulation };
class ScrollSpringSimulation extends SpringSimulation {
  public constructor(
    spring?: SpringDescription,
    start?: number,
    end?: number,
    velocity?: number,
    namedParameters: { tolerance?: Tolerance } = {},
  ) {
    super();
    this['spring'] = spring;
    this['start'] = start;
    this['end'] = end;
    this['velocity'] = velocity;
    this['tolerance'] = namedParameters.tolerance;
    this.className = 'ScrollSpringSimulation';
  }
}
export { ScrollSpringSimulation };
abstract class _SpringSolution extends MXDartClass {
  public constructor(spring?: SpringDescription, initialPosition?: number, initialVelocity?: number) {
    super();
    this['spring'] = spring;
    this['initialPosition'] = initialPosition;
    this['initialVelocity'] = initialVelocity;
    this.className = '_SpringSolution';
  }
}
export { _SpringSolution };
class _CriticalSolution extends MXDartClass {
  r: number;
  c1: number;
  c2: number;
  public constructor(spring?: SpringDescription, distance?: number, velocity?: number) {
    super();
    this['spring'] = spring;
    this['distance'] = distance;
    this['velocity'] = velocity;
    this.className = '_CriticalSolution';
  }
  static withArgs(r?: number, c1?: number, c2?: number) {
    var jsObj = new _CriticalSolution();
    jsObj.r = r;
    jsObj.c1 = c1;
    jsObj.c2 = c2;
    jsObj['constructorName'] = 'withArgs';
    return jsObj;
  }
}
export { _CriticalSolution };
class _OverdampedSolution extends MXDartClass {
  r1: number;
  r2: number;
  c1: number;
  c2: number;
  public constructor(spring?: SpringDescription, distance?: number, velocity?: number) {
    super();
    this['spring'] = spring;
    this['distance'] = distance;
    this['velocity'] = velocity;
    this.className = '_OverdampedSolution';
  }
  static withArgs(r1?: number, r2?: number, c1?: number, c2?: number) {
    var jsObj = new _OverdampedSolution();
    jsObj.r1 = r1;
    jsObj.r2 = r2;
    jsObj.c1 = c1;
    jsObj.c2 = c2;
    jsObj['constructorName'] = 'withArgs';
    return jsObj;
  }
}
export { _OverdampedSolution };
class _UnderdampedSolution extends MXDartClass {
  w: number;
  r: number;
  c1: number;
  c2: number;
  public constructor(spring?: SpringDescription, distance?: number, velocity?: number) {
    super();
    this['spring'] = spring;
    this['distance'] = distance;
    this['velocity'] = velocity;
    this.className = '_UnderdampedSolution';
  }
  static withArgs(w?: number, r?: number, c1?: number, c2?: number) {
    var jsObj = new _UnderdampedSolution();
    jsObj.w = w;
    jsObj.r = r;
    jsObj.c1 = c1;
    jsObj.c2 = c2;
    jsObj['constructorName'] = 'withArgs';
    return jsObj;
  }
}
export { _UnderdampedSolution };
