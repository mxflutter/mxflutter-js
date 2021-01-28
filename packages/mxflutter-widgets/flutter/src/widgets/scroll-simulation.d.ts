import { Tolerance } from '../physics/tolerance';
import { FrictionSimulation } from '../physics/friction-simulation';
import { SpringDescription } from '../physics/spring-simulation';
import { Simulation } from '../physics/simulation';
declare class BouncingScrollSimulation extends Simulation {
    leadingExtent: number;
    trailingExtent: number;
    spring: SpringDescription;
    frictionSimulation: FrictionSimulation;
    springSimulation: Simulation;
    springTime: number;
    timeOffset: number;
    constructor(namedParameters?: {
        position?: number;
        velocity?: number;
        leadingExtent?: number;
        trailingExtent?: number;
        spring?: SpringDescription;
        tolerance?: Tolerance;
    });
    static get maxSpringTransferVelocity(): number;
}
export { BouncingScrollSimulation };
declare class ClampingScrollSimulation extends Simulation {
    position: number;
    velocity: number;
    friction: number;
    duration: number;
    distance: number;
    constructor(namedParameters?: {
        position?: number;
        velocity?: number;
        friction?: number;
        tolerance?: Tolerance;
    });
}
export { ClampingScrollSimulation };
