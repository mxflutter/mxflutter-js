import { Matrix4 } from '../../../vector-math-64';
import { OneSequenceGestureRecognizer } from './recognizer';
import { Velocity } from './velocity-tracker';
import { Offset, PointerDeviceKind } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare enum _ScaleState {
    ready = "{ \"_name\": \"_ScaleState.ready\", \"index\": 0 }",
    possible = "{ \"_name\": \"_ScaleState.possible\", \"index\": 1 }",
    accepted = "{ \"_name\": \"_ScaleState.accepted\", \"index\": 2 }",
    started = "{ \"_name\": \"_ScaleState.started\", \"index\": 3 }"
}
export { _ScaleState };
declare class ScaleStartDetails extends MXDartClass {
    focalPoint: Offset;
    localFocalPoint: Offset;
    constructor(namedParameters?: {
        focalPoint?: Offset;
        localFocalPoint?: Offset;
    });
}
export { ScaleStartDetails };
declare class ScaleUpdateDetails extends MXDartClass {
    focalPoint: Offset;
    localFocalPoint: Offset;
    scale: number;
    horizontalScale: number;
    verticalScale: number;
    rotation: number;
    constructor(namedParameters?: {
        focalPoint?: Offset;
        localFocalPoint?: Offset;
        scale?: number;
        horizontalScale?: number;
        verticalScale?: number;
        rotation?: number;
    });
}
export { ScaleUpdateDetails };
declare class ScaleEndDetails extends MXDartClass {
    velocity: Velocity;
    constructor(namedParameters?: {
        velocity?: Velocity;
    });
}
export { ScaleEndDetails };
declare class _LineBetweenPointers extends MXDartClass {
    pointerStartLocation: Offset;
    pointerStartId: number;
    pointerEndLocation: Offset;
    pointerEndId: number;
    constructor(namedParameters?: {
        pointerStartLocation?: Offset;
        pointerStartId?: number;
        pointerEndLocation?: Offset;
        pointerEndId?: number;
    });
}
export { _LineBetweenPointers };
declare class ScaleGestureRecognizer extends OneSequenceGestureRecognizer {
    onStart: any;
    onUpdate: any;
    onEnd: any;
    state: _ScaleState;
    lastTransform: Matrix4;
    initialFocalPoint: Offset;
    currentFocalPoint: Offset;
    initialSpan: number;
    currentSpan: number;
    initialHorizontalSpan: number;
    currentHorizontalSpan: number;
    initialVerticalSpan: number;
    currentVerticalSpan: number;
    initialLine: _LineBetweenPointers;
    currentLine: _LineBetweenPointers;
    pointerLocations: Map<any, any>;
    pointerQueue: Array<any>;
    velocityTrackers: Map<any, any>;
    constructor(namedParameters?: {
        debugOwner?: any;
        kind?: PointerDeviceKind;
    });
}
export { ScaleGestureRecognizer };
