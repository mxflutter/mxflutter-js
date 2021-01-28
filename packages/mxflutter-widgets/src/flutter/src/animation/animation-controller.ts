//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

// MX modified begin
import { MXMirrorObjMethodCall } from '@mxflutter/mxflutter-base';
import { Animatable } from './tween';
// MX modified end
import { Curve } from './curves';
import { Simulation } from '../physics/simulation';
import { Ticker, TickerProvider } from '../scheduler/ticker';
import { Duration } from '../../../mx-dart-sdk';
import { Animation, AnimationStatus } from './animation';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum _AnimationDirection {
  forward = '{ "_name": "_AnimationDirection.forward", "index": 0 }',
  reverse = '{ "_name": "_AnimationDirection.reverse", "index": 1 }',
}

export { _AnimationDirection };
enum AnimationBehavior {
  normal = '{ "_name": "AnimationBehavior.normal", "index": 0 }',
  preserve = '{ "_name": "AnimationBehavior.preserve", "index": 1 }',
}

export { AnimationBehavior };
class AnimationController extends Animation {
  lowerBound: number;
  upperBound: number;
  debugLabel: string;
  animationBehavior: AnimationBehavior;
  duration: Duration;
  reverseDuration: Duration;
  ticker: Ticker;
  simulation: Simulation;
  value: number;
  lastElapsedDuration: Duration;
  direction: _AnimationDirection;
  status: AnimationStatus;
  lastReportedStatus: AnimationStatus;
  public constructor(
    namedParameters: {
      value?: number;
      duration?: Duration;
      reverseDuration?: Duration;
      debugLabel?: string;
      lowerBound?: number;
      upperBound?: number;
      animationBehavior?: AnimationBehavior;
      vsync?: TickerProvider;
    } = {},
  ) {
    super();
    this.value = namedParameters.value;
    this.duration = namedParameters.duration;
    this.reverseDuration = namedParameters.reverseDuration;
    this.debugLabel = namedParameters.debugLabel;
    this.lowerBound = namedParameters.lowerBound;
    this.upperBound = namedParameters.upperBound;
    this.animationBehavior = namedParameters.animationBehavior;
    this.className = 'AnimationController';
  }
  static unbounded(
    namedParameters: {
      value?: number;
      duration?: Duration;
      reverseDuration?: Duration;
      debugLabel?: string;
      vsync?: TickerProvider;
      animationBehavior?: AnimationBehavior;
    } = {},
  ) {
    var jsObj = new AnimationController();
    jsObj.value = namedParameters.value;
    jsObj.duration = namedParameters.duration;
    jsObj.reverseDuration = namedParameters.reverseDuration;
    jsObj.debugLabel = namedParameters.debugLabel;
    jsObj.animationBehavior = namedParameters.animationBehavior;
    jsObj['constructorName'] = 'unbounded';
    return jsObj;
  }
  // MX Modified begin
  public dispose() {
    var argument = new MXMirrorObjMethodCall({
      mirrorID: this.mirrorID,
      className: 'AnimationController',
      funcName: 'dispose',
      args: {},
    });
    this.invokeMirrorObjMethod(argument);
  }

  public reset() {
    var argument = new MXMirrorObjMethodCall({
      mirrorID: this.mirrorID,
      className: 'AnimationController',
      funcName: 'reset',
      args: {},
    });
    this.invokeMirrorObjMethod(argument);
  }

  public forward(namedParameters: { from?: number } = {}) {
    var argument = new MXMirrorObjMethodCall({
      mirrorID: this.mirrorID,
      className: 'AnimationController',
      funcName: 'forward',
      args: {
        from: namedParameters.from,
      },
    });
    this.invokeMirrorObjMethod(argument);
  }

  public reverse(namedParameters: { from?: number } = {}) {
    var argument = new MXMirrorObjMethodCall({
      mirrorID: this.mirrorID,
      className: 'AnimationController',
      funcName: 'reverse',
      args: {
        from: namedParameters.from,
      },
    });
    this.invokeMirrorObjMethod(argument);
  }

  public repeat(namedParameters: { min?: number; max?: number; reverse?: boolean; period?: Duration } = {}) {
    var argument = new MXMirrorObjMethodCall({
      mirrorID: this.mirrorID,
      className: 'AnimationController',
      funcName: 'repeat',
      args: {
        min: namedParameters.min,
        max: namedParameters.max,
        reverse: namedParameters.reverse,
        period: namedParameters.period,
      },
    });
    this.invokeMirrorObjMethod(argument);
  }

  public drive(animatable: Animatable) {
    var argument = new MXMirrorObjMethodCall({
      mirrorID: this.mirrorID,
      className: 'AnimationController',
      funcName: 'drive',
      args: {
        animatable: animatable,
      },
    });
    this.invokeMirrorObjMethod(argument);
  }

  public stop(namedParameters: { canceled?: boolean } = {}) {
    var argument = new MXMirrorObjMethodCall({
      mirrorID: this.mirrorID,
      className: 'AnimationController',
      funcName: 'stop',
      args: {
        canceled: namedParameters.canceled,
      },
    });
    this.invokeMirrorObjMethod(argument);
  }
  // MX Modified end
}
export { AnimationController };
class _InterpolationSimulation extends Simulation {
  durationInSeconds: number;
  begin: number;
  end: number;
  curve: Curve;
  public constructor(_begin?: number, _end?: number, duration?: Duration, _curve?: Curve, scale?: number) {
    super();
    this.begin = _begin;
    this.end = _end;
    this['duration'] = duration;
    this.curve = _curve;
    this['scale'] = scale;
    this.className = '_InterpolationSimulation';
  }
}
export { _InterpolationSimulation };
class _RepeatingSimulation extends Simulation {
  min: number;
  max: number;
  reverse: boolean;
  directionSetter: any;
  periodInSeconds: number;
  initialT: number;
  public constructor(
    initialValue?: number,
    min?: number,
    max?: number,
    reverse?: boolean,
    period?: Duration,
    directionSetter?: any,
  ) {
    super();
    this['initialValue'] = initialValue;
    this.min = min;
    this.max = max;
    this.reverse = reverse;
    this['period'] = period;
    this.directionSetter = directionSetter;
    this.className = '_RepeatingSimulation';
  }
}
export { _RepeatingSimulation };
