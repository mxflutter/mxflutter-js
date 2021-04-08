import { TextDirection, Clip } from '../../../mx-dart-sdk';
import { Axis, VerticalDirection } from '../painting/basic-types';
import { ContainerBoxParentData, RenderBox } from './box';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare enum WrapAlignment {
    start = "{ \"_name\": \"WrapAlignment.start\", \"index\": 0 }",
    end = "{ \"_name\": \"WrapAlignment.end\", \"index\": 1 }",
    center = "{ \"_name\": \"WrapAlignment.center\", \"index\": 2 }",
    spaceBetween = "{ \"_name\": \"WrapAlignment.spaceBetween\", \"index\": 3 }",
    spaceAround = "{ \"_name\": \"WrapAlignment.spaceAround\", \"index\": 4 }",
    spaceEvenly = "{ \"_name\": \"WrapAlignment.spaceEvenly\", \"index\": 5 }"
}
export { WrapAlignment };
declare enum WrapCrossAlignment {
    start = "{ \"_name\": \"WrapCrossAlignment.start\", \"index\": 0 }",
    end = "{ \"_name\": \"WrapCrossAlignment.end\", \"index\": 1 }",
    center = "{ \"_name\": \"WrapCrossAlignment.center\", \"index\": 2 }"
}
export { WrapCrossAlignment };
declare class _RunMetrics extends MXDartClass {
    mainAxisExtent: number;
    crossAxisExtent: number;
    childCount: number;
    constructor(mainAxisExtent?: number, crossAxisExtent?: number, childCount?: number);
}
export { _RunMetrics };
declare class WrapParentData extends ContainerBoxParentData {
    runIndex: number;
}
export { WrapParentData };
declare class RenderWrap extends RenderBox {
    direction: Axis;
    alignment: WrapAlignment;
    spacing: number;
    runAlignment: WrapAlignment;
    runSpacing: number;
    crossAxisAlignment: WrapCrossAlignment;
    textDirection: TextDirection;
    verticalDirection: VerticalDirection;
    clipBehavior: Clip;
    hasVisualOverflow: boolean;
    constructor(namedParameters?: {
        children?: Array<any>;
        direction?: Axis;
        alignment?: WrapAlignment;
        spacing?: number;
        runAlignment?: WrapAlignment;
        runSpacing?: number;
        crossAxisAlignment?: WrapCrossAlignment;
        textDirection?: TextDirection;
        verticalDirection?: VerticalDirection;
        clipBehavior?: Clip;
    });
}
export { RenderWrap };
