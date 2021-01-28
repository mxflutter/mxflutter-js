import { OneSequenceGestureRecognizer, OffsetPair } from './recognizer';
import { Offset, PointerDeviceKind } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare enum _ForceState {
    ready = "{ \"_name\": \"_ForceState.ready\", \"index\": 0 }",
    possible = "{ \"_name\": \"_ForceState.possible\", \"index\": 1 }",
    accepted = "{ \"_name\": \"_ForceState.accepted\", \"index\": 2 }",
    started = "{ \"_name\": \"_ForceState.started\", \"index\": 3 }",
    peaked = "{ \"_name\": \"_ForceState.peaked\", \"index\": 4 }"
}
export { _ForceState };
declare class ForcePressDetails extends MXDartClass {
    globalPosition: Offset;
    localPosition: Offset;
    pressure: number;
    constructor(namedParameters?: {
        globalPosition?: Offset;
        localPosition?: Offset;
        pressure?: number;
    });
}
export { ForcePressDetails };
declare class ForcePressGestureRecognizer extends OneSequenceGestureRecognizer {
    onStart: any;
    onUpdate: any;
    onPeak: any;
    onEnd: any;
    startPressure: number;
    peakPressure: number;
    interpolation: any;
    lastPosition: OffsetPair;
    lastPressure: number;
    state: _ForceState;
    constructor(namedParameters?: {
        startPressure?: number;
        peakPressure?: number;
        interpolation?: any;
        debugOwner?: any;
        kind?: PointerDeviceKind;
    });
}
export { ForcePressGestureRecognizer };
