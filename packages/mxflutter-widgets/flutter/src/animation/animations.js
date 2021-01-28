//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { Animation } from './animation';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class _AlwaysCompleteAnimation extends Animation {
}
export { _AlwaysCompleteAnimation };
class _AlwaysDismissedAnimation extends Animation {
}
export { _AlwaysDismissedAnimation };
class AlwaysStoppedAnimation extends Animation {
    constructor(value) {
        super();
        this.value = value;
        this.className = 'AlwaysStoppedAnimation';
    }
}
export { AlwaysStoppedAnimation };
class AnimationWithParentMixin extends MXDartClass {
}
export { AnimationWithParentMixin };
class ProxyAnimation extends Animation {
    constructor(animation) {
        super();
        this['animation'] = animation;
        this.className = 'ProxyAnimation';
    }
}
export { ProxyAnimation };
class ReverseAnimation extends Animation {
    constructor(parent) {
        super();
        this.parent = parent;
        this.className = 'ReverseAnimation';
    }
}
export { ReverseAnimation };
class CurvedAnimation extends Animation {
    constructor(namedParameters = {}) {
        super();
        this.parent = namedParameters.parent;
        this.curve = namedParameters.curve;
        this.reverseCurve = namedParameters.reverseCurve;
        this.className = 'CurvedAnimation';
    }
}
export { CurvedAnimation };
var _TrainHoppingMode;
(function (_TrainHoppingMode) {
    _TrainHoppingMode["minimize"] = "{ \"_name\": \"_TrainHoppingMode.minimize\", \"index\": 0 }";
    _TrainHoppingMode["maximize"] = "{ \"_name\": \"_TrainHoppingMode.maximize\", \"index\": 1 }";
})(_TrainHoppingMode || (_TrainHoppingMode = {}));
export { _TrainHoppingMode };
class TrainHoppingAnimation extends Animation {
    constructor(_currentTrain, _nextTrain, namedParameters = {}) {
        super();
        this.currentTrain = _currentTrain;
        this.nextTrain = _nextTrain;
        this.onSwitchedTrain = namedParameters.onSwitchedTrain;
        this.className = 'TrainHoppingAnimation';
    }
}
export { TrainHoppingAnimation };
class CompoundAnimation extends Animation {
}
export { CompoundAnimation };
class AnimationMean extends CompoundAnimation {
    constructor(namedParameters = {}) {
        super();
        this['left'] = namedParameters.left;
        this['right'] = namedParameters.right;
        this.className = 'AnimationMean';
    }
}
export { AnimationMean };
class AnimationMax extends CompoundAnimation {
    constructor(first, next) {
        super();
        this['first'] = first;
        this['next'] = next;
        this.className = 'AnimationMax';
    }
}
export { AnimationMax };
class AnimationMin extends CompoundAnimation {
    constructor(first, next) {
        super();
        this['first'] = first;
        this['next'] = next;
        this.className = 'AnimationMin';
    }
}
export { AnimationMin };
