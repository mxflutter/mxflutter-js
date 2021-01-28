import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class Tolerance extends MXDartClass {
    distance: number;
    time: number;
    velocity: number;
    constructor(namedParameters?: {
        distance?: number;
        time?: number;
        velocity?: number;
    });
    static get defaultTolerance(): Tolerance;
}
export { Tolerance };
