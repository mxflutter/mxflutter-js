import { Duration } from '../../../mx-dart-sdk';
import { GestureArenaTeam } from './team';
import { PointerEvent } from './events';
import { PointerDeviceKind, Offset } from '../../../mx-dart-sdk';
import { GestureArenaMember } from './arena';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare enum DragStartBehavior {
    down = "{ \"_name\": \"DragStartBehavior.down\", \"index\": 0 }",
    start = "{ \"_name\": \"DragStartBehavior.start\", \"index\": 1 }"
}
export { DragStartBehavior };
declare abstract class GestureRecognizer extends GestureArenaMember {
    debugOwner: any;
    kindFilter: PointerDeviceKind;
    pointerToKind: Map<any, any>;
}
export { GestureRecognizer };
declare abstract class OneSequenceGestureRecognizer extends GestureRecognizer {
    entries: Map<any, any>;
    trackedPointers: Set<any>;
    team: GestureArenaTeam;
}
export { OneSequenceGestureRecognizer };
declare enum GestureRecognizerState {
    ready = "{ \"_name\": \"GestureRecognizerState.ready\", \"index\": 0 }",
    possible = "{ \"_name\": \"GestureRecognizerState.possible\", \"index\": 1 }",
    defunct = "{ \"_name\": \"GestureRecognizerState.defunct\", \"index\": 2 }"
}
export { GestureRecognizerState };
declare abstract class PrimaryPointerGestureRecognizer extends OneSequenceGestureRecognizer {
    deadline: Duration;
    preAcceptSlopTolerance: number;
    postAcceptSlopTolerance: number;
    state: GestureRecognizerState;
    primaryPointer: number;
    initialPosition: OffsetPair;
    gestureAccepted: boolean;
    timer: any;
}
export { PrimaryPointerGestureRecognizer };
declare class OffsetPair extends MXDartClass {
    local: Offset;
    global: Offset;
    constructor(namedParameters?: {
        local?: Offset;
        global?: Offset;
    });
    static get zero(): OffsetPair;
    static fromEventPosition(event?: PointerEvent): OffsetPair;
    static fromEventDelta(event?: PointerEvent): OffsetPair;
}
export { OffsetPair };
