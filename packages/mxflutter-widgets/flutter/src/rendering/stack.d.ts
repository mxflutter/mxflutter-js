import { Alignment, AlignmentGeometry } from '../painting/alignment';
import { ContainerBoxParentData, RenderBox } from './box';
import { Rect, Size, TextDirection, Clip } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class RelativeRect extends MXDartClass {
    left: number;
    top: number;
    right: number;
    bottom: number;
    static get fill(): RelativeRect;
    static fromSize(rect?: Rect, container?: Size): RelativeRect;
    static fromRect(rect?: Rect, container?: Rect): RelativeRect;
    static fromLTRB(left?: number, top?: number, right?: number, bottom?: number): RelativeRect;
}
export { RelativeRect };
declare class StackParentData extends ContainerBoxParentData {
    top: number;
    right: number;
    bottom: number;
    left: number;
    width: number;
    height: number;
}
export { StackParentData };
declare enum StackFit {
    loose = "{ \"_name\": \"StackFit.loose\", \"index\": 0 }",
    expand = "{ \"_name\": \"StackFit.expand\", \"index\": 1 }",
    passthrough = "{ \"_name\": \"StackFit.passthrough\", \"index\": 2 }"
}
export { StackFit };
declare enum Overflow {
    visible = "{ \"_name\": \"Overflow.visible\", \"index\": 0 }",
    clip = "{ \"_name\": \"Overflow.clip\", \"index\": 1 }"
}
export { Overflow };
declare class RenderStack extends RenderBox {
    hasVisualOverflow: boolean;
    resolvedAlignment: Alignment;
    alignment: AlignmentGeometry;
    textDirection: TextDirection;
    fit: StackFit;
    clipBehavior: Clip;
    constructor(namedParameters?: {
        children?: Array<any>;
        alignment?: AlignmentGeometry;
        textDirection?: TextDirection;
        fit?: StackFit;
        clipBehavior?: Clip;
    });
}
export { RenderStack };
declare class RenderIndexedStack extends RenderStack {
    index: number;
    constructor(namedParameters?: {
        children?: Array<any>;
        alignment?: AlignmentGeometry;
        textDirection?: TextDirection;
        index?: number;
    });
}
export { RenderIndexedStack };
