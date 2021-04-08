"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._RepeatingSimulation = exports._InterpolationSimulation = exports.AnimationController = exports.AnimationBehavior = exports._AnimationDirection = void 0;
// MX modified begin
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
const simulation_1 = require("../physics/simulation");
const animation_1 = require("./animation");
var _AnimationDirection;
(function (_AnimationDirection) {
    _AnimationDirection["forward"] = "{ \"_name\": \"_AnimationDirection.forward\", \"index\": 0 }";
    _AnimationDirection["reverse"] = "{ \"_name\": \"_AnimationDirection.reverse\", \"index\": 1 }";
})(_AnimationDirection || (_AnimationDirection = {}));
exports._AnimationDirection = _AnimationDirection;
;
var AnimationBehavior;
(function (AnimationBehavior) {
    AnimationBehavior["normal"] = "{ \"_name\": \"AnimationBehavior.normal\", \"index\": 0 }";
    AnimationBehavior["preserve"] = "{ \"_name\": \"AnimationBehavior.preserve\", \"index\": 1 }";
})(AnimationBehavior || (AnimationBehavior = {}));
exports.AnimationBehavior = AnimationBehavior;
;
class AnimationController extends animation_1.Animation {
    constructor(namedParameters = {}) {
        super();
        this.value = namedParameters.value;
        this.duration = namedParameters.duration;
        this.reverseDuration = namedParameters.reverseDuration;
        this.debugLabel = namedParameters.debugLabel;
        this.lowerBound = namedParameters.lowerBound;
        this.upperBound = namedParameters.upperBound;
        this.animationBehavior = namedParameters.animationBehavior;
        // MX Modified begin
        this.vsync = namedParameters.vsync;
        // MX Modified end
        this.className = 'AnimationController';
    }
    static unbounded(namedParameters = {}) {
        var jsObj = new AnimationController();
        jsObj.value = namedParameters.value;
        jsObj.duration = namedParameters.duration;
        jsObj.reverseDuration = namedParameters.reverseDuration;
        jsObj.debugLabel = namedParameters.debugLabel;
        jsObj.animationBehavior = namedParameters.animationBehavior;
        // MX Modified begin
        jsObj.vsync = namedParameters.vsync;
        // MX Modified end
        jsObj['constructorName'] = 'unbounded';
        return jsObj;
    }
    // MX Modified begin
    ///TODO:
    dispose() { }
    forward(namedParameters = {}) {
        var argument = new mxflutter_base_1.MXMirrorObjMethodCall({
            mirrorID: this.mirrorID,
            className: 'AnimationController',
            funcName: 'forward',
            args: {
                from: namedParameters.from,
            },
        });
        this.invokeMirrorObjMethod(argument);
    }
    reverse(namedParameters = {}) {
        var argument = new mxflutter_base_1.MXMirrorObjMethodCall({
            mirrorID: this.mirrorID,
            className: 'AnimationController',
            funcName: 'reverse',
            args: {
                from: namedParameters.from,
            },
        });
        this.invokeMirrorObjMethod(argument);
    }
    repeat(namedParameters = {}) {
        var argument = new mxflutter_base_1.MXMirrorObjMethodCall({
            mirrorID: this.mirrorID,
            className: 'AnimationController',
            funcName: 'repeat',
            args: {
                min: namedParameters.min,
                max: namedParameters.max,
                reverse: namedParameters.reverse,
                period: namedParameters.period,
            },
        });
        this.invokeMirrorObjMethod(argument);
    }
    drive(animatable) {
        var argument = new mxflutter_base_1.MXMirrorObjMethodCall({
            mirrorID: this.mirrorID,
            className: 'AnimationController',
            funcName: 'drive',
            args: {
                animatable: animatable,
            },
        });
        this.invokeMirrorObjMethod(argument);
    }
    stop(namedParameters = {}) {
        var argument = new mxflutter_base_1.MXMirrorObjMethodCall({
            mirrorID: this.mirrorID,
            className: 'AnimationController',
            funcName: 'stop',
            args: {
                canceled: namedParameters.canceled,
            },
        });
        this.invokeMirrorObjMethod(argument);
    }
}
exports.AnimationController = AnimationController;
class _InterpolationSimulation extends simulation_1.Simulation {
    constructor(_begin, _end, duration, _curve, scale) {
        super();
        this.begin = _begin;
        this.end = _end;
        this['duration'] = duration;
        this.curve = _curve;
        this['scale'] = scale;
        this.className = '_InterpolationSimulation';
    }
}
exports._InterpolationSimulation = _InterpolationSimulation;
class _RepeatingSimulation extends simulation_1.Simulation {
    constructor(initialValue, min, max, reverse, period, directionSetter) {
        super();
        this['initialValue'] = initialValue;
        this.min = min;
        this.max = max;
        this.reverse = reverse;
        this['period'] = period;
        this.directionSetter = directionSetter;
        this.className = '_RepeatingSimulation';
    }
}
exports._RepeatingSimulation = _RepeatingSimulation;
