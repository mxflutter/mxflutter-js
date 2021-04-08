"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._TweenAnimationBuilderState = exports.TweenAnimationBuilder = void 0;
const implicit_animations_1 = require("./implicit-animations");
class TweenAnimationBuilder extends implicit_animations_1.ImplicitlyAnimatedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.tween = namedParameters.tween;
        this.duration = namedParameters.duration;
        this.curve = namedParameters.curve;
        this.builder = namedParameters.builder;
        this.onEnd = namedParameters.onEnd;
        this.child = namedParameters.child;
        this.className = 'TweenAnimationBuilder';
    }
}
exports.TweenAnimationBuilder = TweenAnimationBuilder;
class _TweenAnimationBuilderState extends implicit_animations_1.AnimatedWidgetBaseState {
}
exports._TweenAnimationBuilderState = _TweenAnimationBuilderState;
