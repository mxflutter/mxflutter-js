import { RenderObject } from './object';
import { Rect, Offset } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare enum _OverflowSide {
    left = "{ \"_name\": \"_OverflowSide.left\", \"index\": 0 }",
    top = "{ \"_name\": \"_OverflowSide.top\", \"index\": 1 }",
    bottom = "{ \"_name\": \"_OverflowSide.bottom\", \"index\": 2 }",
    right = "{ \"_name\": \"_OverflowSide.right\", \"index\": 3 }"
}
export { _OverflowSide };
declare class _OverflowRegionData extends MXDartClass {
    rect: Rect;
    label: string;
    labelOffset: Offset;
    rotation: number;
    side: _OverflowSide;
    constructor(namedParameters?: {
        rect?: Rect;
        label?: string;
        labelOffset?: Offset;
        rotation?: number;
        side?: _OverflowSide;
    });
}
export { _OverflowRegionData };
declare abstract class DebugOverflowIndicatorMixin extends RenderObject {
    indicatorLabel: Array<any>;
    overflowReportNeeded: boolean;
}
export { DebugOverflowIndicatorMixin };
