//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { BindingBase } from '../foundation/binding';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class _TaskEntry extends MXDartClass {
    constructor(task, priority, debugLabel, flow) {
        super();
        this.task = task;
        this.priority = priority;
        this.debugLabel = debugLabel;
        this.flow = flow;
        this.className = '_TaskEntry';
    }
}
export { _TaskEntry };
class _FrameCallbackEntry extends MXDartClass {
    constructor(callback, namedParameters = {}) {
        super();
        this.callback = callback;
        this['rescheduling'] = namedParameters.rescheduling;
        this.className = '_FrameCallbackEntry';
    }
}
export { _FrameCallbackEntry };
var SchedulerPhase;
(function (SchedulerPhase) {
    SchedulerPhase["idle"] = "{ \"_name\": \"SchedulerPhase.idle\", \"index\": 0 }";
    SchedulerPhase["transientCallbacks"] = "{ \"_name\": \"SchedulerPhase.transientCallbacks\", \"index\": 1 }";
    SchedulerPhase["midFrameMicrotasks"] = "{ \"_name\": \"SchedulerPhase.midFrameMicrotasks\", \"index\": 2 }";
    SchedulerPhase["persistentCallbacks"] = "{ \"_name\": \"SchedulerPhase.persistentCallbacks\", \"index\": 3 }";
    SchedulerPhase["postFrameCallbacks"] = "{ \"_name\": \"SchedulerPhase.postFrameCallbacks\", \"index\": 4 }";
})(SchedulerPhase || (SchedulerPhase = {}));
export { SchedulerPhase };
class SchedulerBinding extends BindingBase {
    static debugPrintTransientCallbackRegistrationStack() {
        var jsObj = new MXDartClass();
        jsObj.className = 'SchedulerBinding';
        jsObj['constructorName'] = 'debugPrintTransientCallbackRegistrationStack';
        return jsObj;
    }
}
export { SchedulerBinding };
