import { Tolerance } from './tolerance';
import { Simulation } from './simulation';
declare class FrictionSimulation extends Simulation {
    drag: number;
    dragLog: number;
    x: number;
    v: number;
    constructor(drag?: number, position?: number, velocity?: number, namedParameters?: {
        tolerance?: Tolerance;
    });
    static through(startPosition?: number, endPosition?: number, startVelocity?: number, endVelocity?: number): FrictionSimulation;
}
export { FrictionSimulation };
declare class BoundedFrictionSimulation extends FrictionSimulation {
    minX: number;
    maxX: number;
    constructor(drag?: number, position?: number, velocity?: number, _minX?: number, _maxX?: number);
}
export { BoundedFrictionSimulation };
