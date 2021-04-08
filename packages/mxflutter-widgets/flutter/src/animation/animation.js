"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animation = exports.AnimationStatus = void 0;
// MX modified end
const change_notifier_1 = require("../foundation/change-notifier");
var AnimationStatus;
(function (AnimationStatus) {
    AnimationStatus["dismissed"] = "{ \"_name\": \"AnimationStatus.dismissed\", \"index\": 0 }";
    AnimationStatus["forward"] = "{ \"_name\": \"AnimationStatus.forward\", \"index\": 1 }";
    AnimationStatus["reverse"] = "{ \"_name\": \"AnimationStatus.reverse\", \"index\": 2 }";
    AnimationStatus["completed"] = "{ \"_name\": \"AnimationStatus.completed\", \"index\": 3 }";
})(AnimationStatus || (AnimationStatus = {}));
exports.AnimationStatus = AnimationStatus;
;
// MX Modified begin
class Animation extends change_notifier_1.Listenable {
    constructor(namedParameters = {}) {
        super();
        this['tween'] = namedParameters.tween;
        this['controller'] = namedParameters.controller;
        this['statusListenerList'] = [];
        this['listenerList'] = [];
        this.className = 'Animation';
    }
    statusListenerCallback(status) {
        for (const funcKey in this['statusListenerList']) {
            this['statusListenerList'][funcKey](status);
        }
    }
    listenerCallback(status) {
        for (const funcKey in this['listenerList']) {
            this['listenerList'][funcKey](status);
        }
    }
    // public value() {
    //   return 'animation.value';
    // }
    addListener(callback) {
        this['listenerList'].push(callback);
    }
    removeListener(callback) {
        const index = this['listenerList'].indexOf(callback);
        this['listenerList'].splice(index);
    }
    addStatusListener(callback) {
        this['statusListenerList'].push(callback);
    }
    removeStatusListener(callback) {
        const index = this['statusListenerList'].indexOf(callback);
        this['statusListenerList'].splice(index);
    }
}
exports.Animation = Animation;
