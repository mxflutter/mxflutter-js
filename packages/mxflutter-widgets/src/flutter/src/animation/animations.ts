//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { Curve } from './curves';
import { Animation, AnimationStatus } from './animation';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class _AlwaysCompleteAnimation extends Animation {}
export { _AlwaysCompleteAnimation };
class _AlwaysDismissedAnimation extends Animation {}
export { _AlwaysDismissedAnimation };
class AlwaysStoppedAnimation extends Animation {
  value: any;
  public constructor(value?: any) {
    super();
    this.value = value;
    this.className = 'AlwaysStoppedAnimation';
  }
}
export { AlwaysStoppedAnimation };
abstract class AnimationWithParentMixin extends MXDartClass {}
export { AnimationWithParentMixin };
class ProxyAnimation extends Animation {
  status: AnimationStatus;
  value: number;
  parent: Animation;
  public constructor(animation?: Animation) {
    super();
    this['animation'] = animation;
    this.className = 'ProxyAnimation';
  }
}
export { ProxyAnimation };
class ReverseAnimation extends Animation {
  parent: Animation;
  public constructor(parent?: Animation) {
    super();
    this.parent = parent;
    this.className = 'ReverseAnimation';
  }
}
export { ReverseAnimation };
class CurvedAnimation extends Animation {
  parent: Animation;
  curve: Curve;
  reverseCurve: Curve;
  curveDirection: AnimationStatus;
  public constructor(namedParameters: { parent?: Animation; curve?: Curve; reverseCurve?: Curve } = {}) {
    super();
    this.parent = namedParameters.parent;
    this.curve = namedParameters.curve;
    this.reverseCurve = namedParameters.reverseCurve;
    this.className = 'CurvedAnimation';
  }
}
export { CurvedAnimation };
enum _TrainHoppingMode {
  minimize = '{ "_name": "_TrainHoppingMode.minimize", "index": 0 }',
  maximize = '{ "_name": "_TrainHoppingMode.maximize", "index": 1 }',
}

export { _TrainHoppingMode };
class TrainHoppingAnimation extends Animation {
  currentTrain: Animation;
  nextTrain: Animation;
  mode: _TrainHoppingMode;
  onSwitchedTrain: any;
  lastStatus: AnimationStatus;
  lastValue: number;
  public constructor(
    _currentTrain?: Animation,
    _nextTrain?: Animation,
    namedParameters: { onSwitchedTrain?: any } = {},
  ) {
    super();
    this.currentTrain = _currentTrain;
    this.nextTrain = _nextTrain;
    this.onSwitchedTrain = namedParameters.onSwitchedTrain;
    this.className = 'TrainHoppingAnimation';
  }
}
export { TrainHoppingAnimation };
abstract class CompoundAnimation extends Animation {
  first: Animation;
  next: Animation;
  lastStatus: AnimationStatus;
  lastValue: any;
}
export { CompoundAnimation };
class AnimationMean extends CompoundAnimation {
  public constructor(namedParameters: { left?: Animation; right?: Animation } = {}) {
    super();
    this['left'] = namedParameters.left;
    this['right'] = namedParameters.right;
    this.className = 'AnimationMean';
  }
}
export { AnimationMean };
class AnimationMax extends CompoundAnimation {
  public constructor(first?: Animation, next?: Animation) {
    super();
    this['first'] = first;
    this['next'] = next;
    this.className = 'AnimationMax';
  }
}
export { AnimationMax };
class AnimationMin extends CompoundAnimation {
  public constructor(first?: Animation, next?: Animation) {
    super();
    this['first'] = first;
    this['next'] = next;
    this.className = 'AnimationMin';
  }
}
export { AnimationMin };
