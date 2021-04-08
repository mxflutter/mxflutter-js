import { AxisDirection } from '../painting/basic-types';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare abstract class ScrollMetrics extends MXDartClass {
}
export { ScrollMetrics };
declare class FixedScrollMetrics extends ScrollMetrics {
    minScrollExtent: number;
    maxScrollExtent: number;
    pixels: number;
    viewportDimension: number;
    axisDirection: AxisDirection;
    constructor(namedParameters?: {
        minScrollExtent?: number;
        maxScrollExtent?: number;
        pixels?: number;
        viewportDimension?: number;
        axisDirection?: AxisDirection;
    });
}
export { FixedScrollMetrics };
