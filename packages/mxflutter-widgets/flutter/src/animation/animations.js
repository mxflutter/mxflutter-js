"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationMin = exports.AnimationMax = exports.AnimationMean = exports.CompoundAnimation = exports.TrainHoppingAnimation = exports._TrainHoppingMode = exports.CurvedAnimation = exports.ReverseAnimation = exports.ProxyAnimation = exports.AnimationWithParentMixin = exports.AlwaysStoppedAnimation = exports._AlwaysDismissedAnimation = exports._AlwaysCompleteAnimation = void 0;
const animation_1 = require("./animation");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class _AlwaysCompleteAnimation extends animation_1.Animation {
}
exports._AlwaysCompleteAnimation = _AlwaysCompleteAnimation;
class _AlwaysDismissedAnimation extends animation_1.Animation {
}
exports._AlwaysDismissedAnimation = _AlwaysDismissedAnimation;
class AlwaysStoppedAnimation extends animation_1.Animation {
    constructor(value) {
        super();
        this.value = value;
        this.className = 'AlwaysStoppedAnimation';
    }
}
exports.AlwaysStoppedAnimation = AlwaysStoppedAnimation;
class AnimationWithParentMixin extends mxflutter_base_1.MXDartClass {
}
exports.AnimationWithParentMixin = AnimationWithParentMixin;
class ProxyAnimation extends animation_1.Animation {
    constructor(animation) {
        super();
        this['animation'] = animation;
        this.className = 'ProxyAnimation';
    }
}
exports.ProxyAnimation = ProxyAnimation;
class ReverseAnimation extends animation_1.Animation {
    constructor(parent) {
        super();
        this.parent = parent;
        this.className = 'ReverseAnimation';
    }
}
exports.ReverseAnimation = ReverseAnimation;
class CurvedAnimation extends animation_1.Animation {
    constructor(namedParameters = {}) {
        super();
        this.parent = namedParameters.parent;
        this.curve = namedParameters.curve;
        this.reverseCurve = namedParameters.reverseCurve;
        this.className = 'CurvedAnimation';
    }
}
exports.CurvedAnimation = CurvedAnimation;
var _TrainHoppingMode;
(function (_TrainHoppingMode) {
    _TrainHoppingMode["minimize"] = "{ \"_name\": \"_TrainHoppingMode.minimize\", \"index\": 0 }";
    _TrainHoppingMode["maximize"] = "{ \"_name\": \"_TrainHoppingMode.maximize\", \"index\": 1 }";
})(_TrainHoppingMode || (_TrainHoppingMode = {}));
exports._TrainHoppingMode = _TrainHoppingMode;
;
class TrainHoppingAnimation extends animation_1.Animation {
    constructor(_currentTrain, _nextTrain, namedParameters = {}) {
        super();
        this.currentTrain = _currentTrain;
        this.nextTrain = _nextTrain;
        this.onSwitchedTrain = namedParameters.onSwitchedTrain;
        this.className = 'TrainHoppingAnimation';
    }
}
exports.TrainHoppingAnimation = TrainHoppingAnimation;
class CompoundAnimation extends animation_1.Animation {
}
exports.CompoundAnimation = CompoundAnimation;
class AnimationMean extends CompoundAnimation {
    constructor(namedParameters = {}) {
        super();
        this['left'] = namedParameters.left;
        this['right'] = namedParameters.right;
        this.className = 'AnimationMean';
    }
}
exports.AnimationMean = AnimationMean;
class AnimationMax extends CompoundAnimation {
    constructor(first, next) {
        super();
        this['first'] = first;
        this['next'] = next;
        this.className = 'AnimationMax';
    }
}
exports.AnimationMax = AnimationMax;
class AnimationMin extends CompoundAnimation {
    constructor(first, next) {
        super();
        this['first'] = first;
        this['next'] = next;
        this.className = 'AnimationMin';
    }
}
exports.AnimationMin = AnimationMin;
