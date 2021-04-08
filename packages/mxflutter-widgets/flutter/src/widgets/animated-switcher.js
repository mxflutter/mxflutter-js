"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._AnimatedSwitcherState = exports.AnimatedSwitcher = exports._ChildEntry = void 0;
const framework_1 = require("./framework");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class _ChildEntry extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.controller = namedParameters.controller;
        this.animation = namedParameters.animation;
        this.transition = namedParameters.transition;
        this.widgetChild = namedParameters.widgetChild;
        this.className = '_ChildEntry';
    }
}
exports._ChildEntry = _ChildEntry;
class AnimatedSwitcher extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.duration = namedParameters.duration;
        this.reverseDuration = namedParameters.reverseDuration;
        this.switchInCurve = namedParameters.switchInCurve;
        this.switchOutCurve = namedParameters.switchOutCurve;
        this.transitionBuilder = namedParameters.transitionBuilder;
        this.layoutBuilder = namedParameters.layoutBuilder;
        this.className = 'AnimatedSwitcher';
    }
}
exports.AnimatedSwitcher = AnimatedSwitcher;
class _AnimatedSwitcherState extends framework_1.State {
}
exports._AnimatedSwitcherState = _AnimatedSwitcherState;
