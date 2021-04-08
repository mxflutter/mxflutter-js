// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { Duration } from '../../../mx-dart-sdk';
import { AppLifecycleState } from '../../../mx-dart-sdk';
import { BindingBase } from '../foundation/binding';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class _TaskEntry extends MXDartClass {
  task: any;
  priority: number;
  debugLabel: string;
  flow: any;
  debugStack: any;
  completer: any;
  public constructor(task?: any, priority?: number, debugLabel?: string, flow?: any) {
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
  callback: any;
  debugStack: any;
  public constructor(callback?: any, namedParameters: {rescheduling?: boolean} = {}) {
    super();
    this.callback = callback;
    this['rescheduling'] = namedParameters.rescheduling;
    this.className = '_FrameCallbackEntry';
  }
}
export { _FrameCallbackEntry };
enum SchedulerPhase {
  idle = '{ "_name": "SchedulerPhase.idle", "index": 0 }',
  transientCallbacks = '{ "_name": "SchedulerPhase.transientCallbacks", "index": 1 }',
  midFrameMicrotasks = '{ "_name": "SchedulerPhase.midFrameMicrotasks", "index": 2 }',
  persistentCallbacks = '{ "_name": "SchedulerPhase.persistentCallbacks", "index": 3 }',
  postFrameCallbacks = '{ "_name": "SchedulerPhase.postFrameCallbacks", "index": 4 }',
};

export { SchedulerPhase };
abstract class SchedulerBinding extends BindingBase {
  timingsCallbacks: Array<any>;
  lifecycleState: AppLifecycleState;
  schedulingStrategy: any;
  taskQueue: any;
  hasRequestedAnEventLoopCallback: boolean;
  nextFrameCallbackId: number;
  transientCallbacks: Map<any, any>;
  removedIds: Set<any>;
  persistentCallbacks: Array<any>;
  postFrameCallbacks: Array<any>;
  nextFrameCompleter: any;
  hasScheduledFrame: boolean;
  schedulerPhase: SchedulerPhase;
  framesEnabled: boolean;
  warmUpFrame: boolean;
  firstRawTimeStampInEpoch: Duration;
  epochStart: Duration;
  lastRawTimeStamp: Duration;
  currentFrameTimeStamp: Duration;
  debugFrameNumber: number;
  debugBanner: string;
  ignoreNextEngineDrawFrame: boolean;
  static debugPrintTransientCallbackRegistrationStack() {
    var jsObj = new MXDartClass();
    jsObj.className = 'SchedulerBinding';
    jsObj['constructorName'] = 'debugPrintTransientCallbackRegistrationStack';
    return jsObj;
  }
}
export { SchedulerBinding };
