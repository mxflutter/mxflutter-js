//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

// MX modified begin
import { AnimationController } from './animation-controller';
import { Tween } from './tween';
// MX modified end
import { Animatable } from './tween';
import { Listenable } from '../foundation/change-notifier';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum AnimationStatus {
  dismissed = '{ "_name": "AnimationStatus.dismissed", "index": 0 }',
  forward = '{ "_name": "AnimationStatus.forward", "index": 1 }',
  reverse = '{ "_name": "AnimationStatus.reverse", "index": 2 }',
  completed = '{ "_name": "AnimationStatus.completed", "index": 3 }',
}

export { AnimationStatus };
// MX Modified begin
class Animation extends Listenable {
  public constructor(
    namedParameters: {
      tween?: Tween;
      controller?: AnimationController;
    } = {},
  ) {
    super();
    this['tween'] = namedParameters.tween;
    this['controller'] = namedParameters.controller;
    this['statusListenerList'] = [];
    this['listenerList'] = [];
    this.className = 'Animation';
  }

  public statusListenerCallback(status: AnimationStatus) {
    for (const funcKey in this['statusListenerList']) {
      this['statusListenerList'][funcKey](status);
    }
  }

  public listenerCallback(status: AnimationStatus) {
    for (const funcKey in this['listenerList']) {
      this['listenerList'][funcKey](status);
    }
  }

  // public value() {
  //   return 'animation.value';
  // }

  public addListener(callback: Function) {
    this['listenerList'].push(callback);
  }

  public removeListener(callback: Function) {
    const index = this['listenerList'].indexOf(callback);
    this['listenerList'].splice(index);
  }

  public addStatusListener(callback: Function) {
    this['statusListenerList'].push(callback);
  }

  public removeStatusListener(callback: Function) {
    const index = this['statusListenerList'].indexOf(callback);
    this['statusListenerList'].splice(index);
  }
  // MX modified end
}
export { Animation };
