//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { Animation } from './animation';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class Animatable extends MXDartClass {
}
export { Animatable };
class _AnimatedEvaluation extends Animation {
    constructor(parent, _evaluatable) {
        super();
        this.parent = parent;
        this.evaluatable = _evaluatable;
        this.className = '_AnimatedEvaluation';
    }
}
export { _AnimatedEvaluation };
class _ChainedEvaluation extends Animatable {
    constructor(_parent, _evaluatable) {
        super();
        this.parent = _parent;
        this.evaluatable = _evaluatable;
        this.className = '_ChainedEvaluation';
    }
}
export { _ChainedEvaluation };
class Tween extends Animatable {
    constructor(namedParameters = {}) {
        super();
        this.begin = namedParameters.begin;
        this.end = namedParameters.end;
        this.className = 'Tween';
    }
}
export { Tween };
class ReverseTween extends Tween {
    constructor(parent) {
        super();
        this.parent = parent;
        this.className = 'ReverseTween';
    }
}
export { ReverseTween };
class ColorTween extends Tween {
    constructor(namedParameters = {}) {
        super();
        this['begin'] = namedParameters.begin;
        this['end'] = namedParameters.end;
        this.className = 'ColorTween';
    }
}
export { ColorTween };
class SizeTween extends Tween {
    constructor(namedParameters = {}) {
        super();
        this['begin'] = namedParameters.begin;
        this['end'] = namedParameters.end;
        this.className = 'SizeTween';
    }
}
export { SizeTween };
class RectTween extends Tween {
    constructor(namedParameters = {}) {
        super();
        this['begin'] = namedParameters.begin;
        this['end'] = namedParameters.end;
        this.className = 'RectTween';
    }
}
export { RectTween };
class IntTween extends Tween {
    constructor(namedParameters = {}) {
        super();
        this['begin'] = namedParameters.begin;
        this['end'] = namedParameters.end;
        this.className = 'IntTween';
    }
}
export { IntTween };
class StepTween extends Tween {
    constructor(namedParameters = {}) {
        super();
        this['begin'] = namedParameters.begin;
        this['end'] = namedParameters.end;
        this.className = 'StepTween';
    }
}
export { StepTween };
class ConstantTween extends Tween {
    constructor(value) {
        super();
        this['value'] = value;
        this.className = 'ConstantTween';
    }
}
export { ConstantTween };
class CurveTween extends Animatable {
    constructor(namedParameters = {}) {
        super();
        this.curve = namedParameters.curve;
        this.className = 'CurveTween';
    }
}
export { CurveTween };
