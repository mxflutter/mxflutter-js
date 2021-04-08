import { PointerSignalResolver } from './pointer-signal-resolver';
import { GestureArenaManager } from './arena';
import { PointerRouter } from './pointer-router';
import { BindingBase } from '../foundation/binding';
import { Duration } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class _Resampler extends MXDartClass {
    resamplers: Map<any, any>;
    frameCallbackScheduled: boolean;
    frameTime: Duration;
    lastSampleTime: Duration;
    lastEventTime: Duration;
    handlePointerEvent: any;
    handleSampleTimeChanged: any;
    constructor(_handlePointerEvent?: any, _handleSampleTimeChanged?: any);
}
export { _Resampler };
declare abstract class GestureBinding extends BindingBase {
    pendingPointerEvents: any;
    pointerRouter: PointerRouter;
    gestureArena: GestureArenaManager;
    pointerSignalResolver: PointerSignalResolver;
    hitTests: Map<any, any>;
    resampler: _Resampler;
    resamplingEnabled: boolean;
    samplingOffset: Duration;
}
export { GestureBinding };
