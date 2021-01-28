import { Shadow, Color, Offset } from '../../../mx-dart-sdk';
declare class BoxShadow extends Shadow {
    spreadRadius: number;
    constructor(namedParameters?: {
        color?: Color;
        offset?: Offset;
        blurRadius?: number;
        spreadRadius?: number;
    });
}
export { BoxShadow };
