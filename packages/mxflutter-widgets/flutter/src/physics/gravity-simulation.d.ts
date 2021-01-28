import { Simulation } from './simulation';
declare class GravitySimulation extends Simulation {
    x: number;
    v: number;
    a: number;
    end: number;
    constructor(acceleration?: number, distance?: number, endDistance?: number, velocity?: number);
}
export { GravitySimulation };
