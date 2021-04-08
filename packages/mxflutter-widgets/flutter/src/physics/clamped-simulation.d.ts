import { Simulation } from './simulation';
declare class ClampedSimulation extends Simulation {
    simulation: Simulation;
    xMin: number;
    xMax: number;
    dxMin: number;
    dxMax: number;
    constructor(simulation?: Simulation, namedParameters?: {
        xMin?: number;
        xMax?: number;
        dxMin?: number;
        dxMax?: number;
    });
}
export { ClampedSimulation };
