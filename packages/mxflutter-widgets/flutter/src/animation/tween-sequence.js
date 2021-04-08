"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._Interval = exports.TweenSequenceItem = exports.FlippedTweenSequence = exports.TweenSequence = void 0;
const tween_1 = require("./tween");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class TweenSequence extends tween_1.Animatable {
    constructor(items) {
        super();
        this.items = items;
        this.className = 'TweenSequence';
    }
}
exports.TweenSequence = TweenSequence;
class FlippedTweenSequence extends TweenSequence {
    constructor(items) {
        super();
        this['items'] = items;
        this.className = 'FlippedTweenSequence';
    }
}
exports.FlippedTweenSequence = FlippedTweenSequence;
class TweenSequenceItem extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.tween = namedParameters.tween;
        this.weight = namedParameters.weight;
        this.className = 'TweenSequenceItem';
    }
}
exports.TweenSequenceItem = TweenSequenceItem;
class _Interval extends mxflutter_base_1.MXDartClass {
    constructor(start, end) {
        super();
        this.start = start;
        this.end = end;
        this.className = '_Interval';
    }
}
exports._Interval = _Interval;
