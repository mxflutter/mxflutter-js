import { TextDirection, TextBaseline, Clip } from '../../../mx-dart-sdk';
import { Axis, VerticalDirection } from '../painting/basic-types';
import { ContainerBoxParentData, RenderBox } from './box';
declare enum FlexFit {
    tight = "{ \"_name\": \"FlexFit.tight\", \"index\": 0 }",
    loose = "{ \"_name\": \"FlexFit.loose\", \"index\": 1 }"
}
export { FlexFit };
declare class FlexParentData extends ContainerBoxParentData {
    flex: number;
    fit: FlexFit;
}
export { FlexParentData };
declare enum MainAxisSize {
    min = "{ \"_name\": \"MainAxisSize.min\", \"index\": 0 }",
    max = "{ \"_name\": \"MainAxisSize.max\", \"index\": 1 }"
}
export { MainAxisSize };
declare enum MainAxisAlignment {
    start = "{ \"_name\": \"MainAxisAlignment.start\", \"index\": 0 }",
    end = "{ \"_name\": \"MainAxisAlignment.end\", \"index\": 1 }",
    center = "{ \"_name\": \"MainAxisAlignment.center\", \"index\": 2 }",
    spaceBetween = "{ \"_name\": \"MainAxisAlignment.spaceBetween\", \"index\": 3 }",
    spaceAround = "{ \"_name\": \"MainAxisAlignment.spaceAround\", \"index\": 4 }",
    spaceEvenly = "{ \"_name\": \"MainAxisAlignment.spaceEvenly\", \"index\": 5 }"
}
export { MainAxisAlignment };
declare enum CrossAxisAlignment {
    start = "{ \"_name\": \"CrossAxisAlignment.start\", \"index\": 0 }",
    end = "{ \"_name\": \"CrossAxisAlignment.end\", \"index\": 1 }",
    center = "{ \"_name\": \"CrossAxisAlignment.center\", \"index\": 2 }",
    stretch = "{ \"_name\": \"CrossAxisAlignment.stretch\", \"index\": 3 }",
    baseline = "{ \"_name\": \"CrossAxisAlignment.baseline\", \"index\": 4 }"
}
export { CrossAxisAlignment };
declare class RenderFlex extends RenderBox {
    direction: Axis;
    mainAxisAlignment: MainAxisAlignment;
    mainAxisSize: MainAxisSize;
    crossAxisAlignment: CrossAxisAlignment;
    textDirection: TextDirection;
    verticalDirection: VerticalDirection;
    textBaseline: TextBaseline;
    overflow: number;
    clipBehavior: Clip;
    constructor(namedParameters?: {
        children?: Array<any>;
        direction?: Axis;
        mainAxisSize?: MainAxisSize;
        mainAxisAlignment?: MainAxisAlignment;
        crossAxisAlignment?: CrossAxisAlignment;
        textDirection?: TextDirection;
        verticalDirection?: VerticalDirection;
        textBaseline?: TextBaseline;
        clipBehavior?: Clip;
    });
}
export { RenderFlex };
