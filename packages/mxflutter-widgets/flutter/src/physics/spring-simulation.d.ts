import { Tolerance } from './tolerance';
import { Simulation } from './simulation';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class SpringDescription extends MXDartClass {
    mass: number;
    stiffness: number;
    damping: number;
    constructor(namedParameters?: {
        mass?: number;
        stiffness?: number;
        damping?: number;
    });
    static withDampingRatio(namedParameters?: {
        mass?: number;
        stiffness?: number;
        ratio?: number;
    }): SpringDescription;
}
export { SpringDescription };
declare enum SpringType {
    criticallyDamped = "{ \"_name\": \"SpringType.criticallyDamped\", \"index\": 0 }",
    underDamped = "{ \"_name\": \"SpringType.underDamped\", \"index\": 1 }",
    overDamped = "{ \"_name\": \"SpringType.overDamped\", \"index\": 2 }"
}
export { SpringType };
declare class SpringSimulation extends Simulation {
    endPosition: number;
    solution: _SpringSolution;
    constructor(spring?: SpringDescription, start?: number, end?: number, velocity?: number, namedParameters?: {
        tolerance?: Tolerance;
    });
}
export { SpringSimulation };
declare class ScrollSpringSimulation extends SpringSimulation {
    constructor(spring?: SpringDescription, start?: number, end?: number, velocity?: number, namedParameters?: {
        tolerance?: Tolerance;
    });
}
export { ScrollSpringSimulation };
declare abstract class _SpringSolution extends MXDartClass {
    constructor(spring?: SpringDescription, initialPosition?: number, initialVelocity?: number);
}
export { _SpringSolution };
declare class _CriticalSolution extends MXDartClass {
    r: number;
    c1: number;
    c2: number;
    constructor(spring?: SpringDescription, distance?: number, velocity?: number);
    static withArgs(r?: number, c1?: number, c2?: number): _CriticalSolution;
}
export { _CriticalSolution };
declare class _OverdampedSolution extends MXDartClass {
    r1: number;
    r2: number;
    c1: number;
    c2: number;
    constructor(spring?: SpringDescription, distance?: number, velocity?: number);
    static withArgs(r1?: number, r2?: number, c1?: number, c2?: number): _OverdampedSolution;
}
export { _OverdampedSolution };
declare class _UnderdampedSolution extends MXDartClass {
    w: number;
    r: number;
    c1: number;
    c2: number;
    constructor(spring?: SpringDescription, distance?: number, velocity?: number);
    static withArgs(w?: number, r?: number, c1?: number, c2?: number): _UnderdampedSolution;
}
export { _UnderdampedSolution };
