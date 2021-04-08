import { Animatable } from './tween';
import { Curve } from './curves';
import { Simulation } from '../physics/simulation';
import { Ticker } from '../scheduler/ticker';
import { Duration } from '../../../mx-dart-sdk';
import { Animation, AnimationStatus } from './animation';
declare enum _AnimationDirection {
    forward = "{ \"_name\": \"_AnimationDirection.forward\", \"index\": 0 }",
    reverse = "{ \"_name\": \"_AnimationDirection.reverse\", \"index\": 1 }"
}
export { _AnimationDirection };
declare enum AnimationBehavior {
    normal = "{ \"_name\": \"AnimationBehavior.normal\", \"index\": 0 }",
    preserve = "{ \"_name\": \"AnimationBehavior.preserve\", \"index\": 1 }"
}
export { AnimationBehavior };
declare class AnimationController extends Animation {
    lowerBound: number;
    upperBound: number;
    debugLabel: string;
    animationBehavior: AnimationBehavior;
    duration: Duration;
    reverseDuration: Duration;
    ticker: Ticker;
    simulation: Simulation;
    value: number;
    lastElapsedDuration: Duration;
    direction: _AnimationDirection;
    status: AnimationStatus;
    lastReportedStatus: AnimationStatus;
    vsync: any;
    constructor(namedParameters?: {
        value?: number;
        duration?: Duration;
        reverseDuration?: Duration;
        debugLabel?: string;
        lowerBound?: number;
        upperBound?: number;
        animationBehavior?: AnimationBehavior;
        vsync?: any;
    });
    static unbounded(namedParameters?: {
        value?: number;
        duration?: Duration;
        reverseDuration?: Duration;
        debugLabel?: string;
        vsync?: any;
        animationBehavior?: AnimationBehavior;
    }): AnimationController;
    dispose(): void;
    forward(namedParameters?: {
        from?: number;
    }): void;
    reverse(namedParameters?: {
        from?: number;
    }): void;
    repeat(namedParameters?: {
        min?: number;
        max?: number;
        reverse?: boolean;
        period?: Duration;
    }): void;
    drive(animatable: Animatable): void;
    stop(namedParameters?: {
        canceled?: boolean;
    }): void;
}
export { AnimationController };
declare class _InterpolationSimulation extends Simulation {
    durationInSeconds: number;
    begin: number;
    end: number;
    curve: Curve;
    constructor(_begin?: number, _end?: number, duration?: Duration, _curve?: Curve, scale?: number);
}
export { _InterpolationSimulation };
declare class _RepeatingSimulation extends Simulation {
    min: number;
    max: number;
    reverse: boolean;
    directionSetter: any;
    periodInSeconds: number;
    initialT: number;
    constructor(initialValue?: number, min?: number, max?: number, reverse?: boolean, period?: Duration, directionSetter?: any);
}
export { _RepeatingSimulation };
