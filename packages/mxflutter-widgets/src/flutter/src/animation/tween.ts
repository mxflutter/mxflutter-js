// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Curve } from './curves';
import { Color, Size, Rect } from '../../../mx-dart-sdk';
import { Animation } from './animation';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class Animatable extends MXDartClass {}
export { Animatable };
class _AnimatedEvaluation extends Animation {
  parent: Animation;
  evaluatable: Animatable;
  public constructor(parent?: Animation, _evaluatable?: Animatable) {
    super();
    this.parent = parent;
    this.evaluatable = _evaluatable;
    this.className = '_AnimatedEvaluation';
  }
}
export { _AnimatedEvaluation };
class _ChainedEvaluation extends Animatable {
  parent: Animatable;
  evaluatable: Animatable;
  public constructor(_parent?: Animatable, _evaluatable?: Animatable) {
    super();
    this.parent = _parent;
    this.evaluatable = _evaluatable;
    this.className = '_ChainedEvaluation';
  }
}
export { _ChainedEvaluation };
class Tween extends Animatable {
  begin: any;
  end: any;
  public constructor(namedParameters: {begin?: any, end?: any} = {}) {
    super();
    this.begin = namedParameters.begin;
    this.end = namedParameters.end;
    this.className = 'Tween';
  }
}
export { Tween };
class ReverseTween extends Tween {
  parent: Tween;
  public constructor(parent?: Tween) {
    super();
    this.parent = parent;
    this.className = 'ReverseTween';
  }
}
export { ReverseTween };
class ColorTween extends Tween {
  public constructor(namedParameters: {begin?: Color, end?: Color} = {}) {
    super();
    this['begin'] = namedParameters.begin;
    this['end'] = namedParameters.end;
    this.className = 'ColorTween';
  }
}
export { ColorTween };
class SizeTween extends Tween {
  public constructor(namedParameters: {begin?: Size, end?: Size} = {}) {
    super();
    this['begin'] = namedParameters.begin;
    this['end'] = namedParameters.end;
    this.className = 'SizeTween';
  }
}
export { SizeTween };
class RectTween extends Tween {
  public constructor(namedParameters: {begin?: Rect, end?: Rect} = {}) {
    super();
    this['begin'] = namedParameters.begin;
    this['end'] = namedParameters.end;
    this.className = 'RectTween';
  }
}
export { RectTween };
class IntTween extends Tween {
  public constructor(namedParameters: {begin?: number, end?: number} = {}) {
    super();
    this['begin'] = namedParameters.begin;
    this['end'] = namedParameters.end;
    this.className = 'IntTween';
  }
}
export { IntTween };
class StepTween extends Tween {
  public constructor(namedParameters: {begin?: number, end?: number} = {}) {
    super();
    this['begin'] = namedParameters.begin;
    this['end'] = namedParameters.end;
    this.className = 'StepTween';
  }
}
export { StepTween };
class ConstantTween extends Tween {
  public constructor(value?: any) {
    super();
    this['value'] = value;
    this.className = 'ConstantTween';
  }
}
export { ConstantTween };
class CurveTween extends Animatable {
  curve: Curve;
  public constructor(namedParameters: {curve?: Curve} = {}) {
    super();
    this.curve = namedParameters.curve;
    this.className = 'CurveTween';
  }
}
export { CurveTween };
