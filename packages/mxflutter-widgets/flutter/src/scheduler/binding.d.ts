import { Duration } from '../../../mx-dart-sdk';
import { AppLifecycleState } from '../../../mx-dart-sdk';
import { BindingBase } from '../foundation/binding';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class _TaskEntry extends MXDartClass {
    task: any;
    priority: number;
    debugLabel: string;
    flow: any;
    debugStack: any;
    completer: any;
    constructor(task?: any, priority?: number, debugLabel?: string, flow?: any);
}
export { _TaskEntry };
declare class _FrameCallbackEntry extends MXDartClass {
    callback: any;
    debugStack: any;
    constructor(callback?: any, namedParameters?: {
        rescheduling?: boolean;
    });
}
export { _FrameCallbackEntry };
declare enum SchedulerPhase {
    idle = "{ \"_name\": \"SchedulerPhase.idle\", \"index\": 0 }",
    transientCallbacks = "{ \"_name\": \"SchedulerPhase.transientCallbacks\", \"index\": 1 }",
    midFrameMicrotasks = "{ \"_name\": \"SchedulerPhase.midFrameMicrotasks\", \"index\": 2 }",
    persistentCallbacks = "{ \"_name\": \"SchedulerPhase.persistentCallbacks\", \"index\": 3 }",
    postFrameCallbacks = "{ \"_name\": \"SchedulerPhase.postFrameCallbacks\", \"index\": 4 }"
}
export { SchedulerPhase };
declare abstract class SchedulerBinding extends BindingBase {
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
    static debugPrintTransientCallbackRegistrationStack(): MXDartClass;
}
export { SchedulerBinding };
