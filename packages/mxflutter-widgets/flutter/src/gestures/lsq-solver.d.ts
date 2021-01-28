import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class _Vector extends MXDartClass {
    offset: number;
    length: number;
    elements: Array<any>;
    constructor(size?: number);
    static fromVOL(values?: Array<any>, offset?: number, length?: number): _Vector;
}
export { _Vector };
declare class _Matrix extends MXDartClass {
    columns: number;
    elements: Array<any>;
    constructor(rows?: number, cols?: number);
}
export { _Matrix };
declare class PolynomialFit extends MXDartClass {
    coefficients: Array<any>;
    confidence: number;
    constructor(degree?: number);
}
export { PolynomialFit };
declare class LeastSquaresSolver extends MXDartClass {
    x: Array<any>;
    y: Array<any>;
    w: Array<any>;
    constructor(x?: Array<any>, y?: Array<any>, w?: Array<any>);
}
export { LeastSquaresSolver };
