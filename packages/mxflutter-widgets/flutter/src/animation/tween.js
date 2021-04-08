"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurveTween = exports.ConstantTween = exports.StepTween = exports.IntTween = exports.RectTween = exports.SizeTween = exports.ColorTween = exports.ReverseTween = exports.Tween = exports._ChainedEvaluation = exports._AnimatedEvaluation = exports.Animatable = void 0;
const animation_1 = require("./animation");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class Animatable extends mxflutter_base_1.MXDartClass {
}
exports.Animatable = Animatable;
class _AnimatedEvaluation extends animation_1.Animation {
    constructor(parent, _evaluatable) {
        super();
        this.parent = parent;
        this.evaluatable = _evaluatable;
        this.className = '_AnimatedEvaluation';
    }
}
exports._AnimatedEvaluation = _AnimatedEvaluation;
class _ChainedEvaluation extends Animatable {
    constructor(_parent, _evaluatable) {
        super();
        this.parent = _parent;
        this.evaluatable = _evaluatable;
        this.className = '_ChainedEvaluation';
    }
}
exports._ChainedEvaluation = _ChainedEvaluation;
class Tween extends Animatable {
    constructor(namedParameters = {}) {
        super();
        this.begin = namedParameters.begin;
        this.end = namedParameters.end;
        this.className = 'Tween';
    }
}
exports.Tween = Tween;
class ReverseTween extends Tween {
    constructor(parent) {
        super();
        this.parent = parent;
        this.className = 'ReverseTween';
    }
}
exports.ReverseTween = ReverseTween;
class ColorTween extends Tween {
    constructor(namedParameters = {}) {
        super();
        this['begin'] = namedParameters.begin;
        this['end'] = namedParameters.end;
        this.className = 'ColorTween';
    }
}
exports.ColorTween = ColorTween;
class SizeTween extends Tween {
    constructor(namedParameters = {}) {
        super();
        this['begin'] = namedParameters.begin;
        this['end'] = namedParameters.end;
        this.className = 'SizeTween';
    }
}
exports.SizeTween = SizeTween;
class RectTween extends Tween {
    constructor(namedParameters = {}) {
        super();
        this['begin'] = namedParameters.begin;
        this['end'] = namedParameters.end;
        this.className = 'RectTween';
    }
}
exports.RectTween = RectTween;
class IntTween extends Tween {
    constructor(namedParameters = {}) {
        super();
        this['begin'] = namedParameters.begin;
        this['end'] = namedParameters.end;
        this.className = 'IntTween';
    }
}
exports.IntTween = IntTween;
class StepTween extends Tween {
    constructor(namedParameters = {}) {
        super();
        this['begin'] = namedParameters.begin;
        this['end'] = namedParameters.end;
        this.className = 'StepTween';
    }
}
exports.StepTween = StepTween;
class ConstantTween extends Tween {
    constructor(value) {
        super();
        this['value'] = value;
        this.className = 'ConstantTween';
    }
}
exports.ConstantTween = ConstantTween;
class CurveTween extends Animatable {
    constructor(namedParameters = {}) {
        super();
        this.curve = namedParameters.curve;
        this.className = 'CurveTween';
    }
}
exports.CurveTween = CurveTween;
