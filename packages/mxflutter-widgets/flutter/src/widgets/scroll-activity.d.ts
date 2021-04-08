import { Curve } from '../animation/curves';
import { TickerProvider } from '../scheduler/ticker';
import { Simulation } from '../physics/simulation';
import { AnimationController } from '../animation/animation-controller';
import { DragStartDetails } from '../gestures/drag-details';
import { Duration } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare abstract class ScrollActivityDelegate extends MXDartClass {
}
export { ScrollActivityDelegate };
declare abstract class ScrollActivity extends MXDartClass {
    delegate: ScrollActivityDelegate;
}
export { ScrollActivity };
declare class IdleScrollActivity extends ScrollActivity {
    constructor(delegate?: ScrollActivityDelegate);
}
export { IdleScrollActivity };
declare abstract class ScrollHoldController extends MXDartClass {
}
export { ScrollHoldController };
declare class HoldScrollActivity extends ScrollActivity {
    onHoldCanceled: any;
    constructor(namedParameters?: {
        delegate?: ScrollActivityDelegate;
        onHoldCanceled?: any;
    });
}
export { HoldScrollActivity };
declare class ScrollDragController extends MXDartClass {
    delegate: ScrollActivityDelegate;
    onDragCanceled: any;
    carriedVelocity: number;
    motionStartDistanceThreshold: number;
    lastNonStationaryTimestamp: Duration;
    retainMomentum: boolean;
    offsetSinceLastStop: number;
    lastDetails: any;
    constructor(namedParameters?: {
        delegate?: ScrollActivityDelegate;
        details?: DragStartDetails;
        onDragCanceled?: any;
        carriedVelocity?: number;
        motionStartDistanceThreshold?: number;
    });
    static get momentumRetainStationaryDurationThreshold(): Duration;
    static get motionStoppedDurationThreshold(): Duration;
}
export { ScrollDragController };
declare class DragScrollActivity extends ScrollActivity {
    controller: ScrollDragController;
    constructor(delegate?: ScrollActivityDelegate, controller?: ScrollDragController);
}
export { DragScrollActivity };
declare class BallisticScrollActivity extends ScrollActivity {
    controller: AnimationController;
    constructor(delegate?: ScrollActivityDelegate, simulation?: Simulation, vsync?: TickerProvider);
}
export { BallisticScrollActivity };
declare class DrivenScrollActivity extends ScrollActivity {
    completer: any;
    controller: AnimationController;
    constructor(delegate?: ScrollActivityDelegate, namedParameters?: {
        from?: number;
        to?: number;
        duration?: Duration;
        curve?: Curve;
        vsync?: TickerProvider;
    });
}
export { DrivenScrollActivity };
