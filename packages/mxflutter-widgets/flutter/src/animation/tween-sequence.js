//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { Animatable } from './tween';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class TweenSequence extends Animatable {
    constructor(items) {
        super();
        this.items = items;
        this.className = 'TweenSequence';
    }
}
export { TweenSequence };
class FlippedTweenSequence extends TweenSequence {
    constructor(items) {
        super();
        this['items'] = items;
        this.className = 'FlippedTweenSequence';
    }
}
export { FlippedTweenSequence };
class TweenSequenceItem extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.tween = namedParameters.tween;
        this.weight = namedParameters.weight;
        this.className = 'TweenSequenceItem';
    }
}
export { TweenSequenceItem };
class _Interval extends MXDartClass {
    constructor(start, end) {
        super();
        this.start = start;
        this.end = end;
        this.className = '_Interval';
    }
}
export { _Interval };
