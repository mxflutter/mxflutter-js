"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchedulerBinding = exports.SchedulerPhase = exports._FrameCallbackEntry = exports._TaskEntry = void 0;
const binding_1 = require("../foundation/binding");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class _TaskEntry extends mxflutter_base_1.MXDartClass {
    constructor(task, priority, debugLabel, flow) {
        super();
        this.task = task;
        this.priority = priority;
        this.debugLabel = debugLabel;
        this.flow = flow;
        this.className = '_TaskEntry';
    }
}
exports._TaskEntry = _TaskEntry;
class _FrameCallbackEntry extends mxflutter_base_1.MXDartClass {
    constructor(callback, namedParameters = {}) {
        super();
        this.callback = callback;
        this['rescheduling'] = namedParameters.rescheduling;
        this.className = '_FrameCallbackEntry';
    }
}
exports._FrameCallbackEntry = _FrameCallbackEntry;
var SchedulerPhase;
(function (SchedulerPhase) {
    SchedulerPhase["idle"] = "{ \"_name\": \"SchedulerPhase.idle\", \"index\": 0 }";
    SchedulerPhase["transientCallbacks"] = "{ \"_name\": \"SchedulerPhase.transientCallbacks\", \"index\": 1 }";
    SchedulerPhase["midFrameMicrotasks"] = "{ \"_name\": \"SchedulerPhase.midFrameMicrotasks\", \"index\": 2 }";
    SchedulerPhase["persistentCallbacks"] = "{ \"_name\": \"SchedulerPhase.persistentCallbacks\", \"index\": 3 }";
    SchedulerPhase["postFrameCallbacks"] = "{ \"_name\": \"SchedulerPhase.postFrameCallbacks\", \"index\": 4 }";
})(SchedulerPhase || (SchedulerPhase = {}));
exports.SchedulerPhase = SchedulerPhase;
;
class SchedulerBinding extends binding_1.BindingBase {
    static debugPrintTransientCallbackRegistrationStack() {
        var jsObj = new mxflutter_base_1.MXDartClass();
        jsObj.className = 'SchedulerBinding';
        jsObj['constructorName'] = 'debugPrintTransientCallbackRegistrationStack';
        return jsObj;
    }
}
exports.SchedulerBinding = SchedulerBinding;
