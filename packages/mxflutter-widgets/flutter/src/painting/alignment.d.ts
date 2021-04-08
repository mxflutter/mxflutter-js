import { MXDartClass } from '@mxflutter/mxflutter-base';
declare abstract class AlignmentGeometry extends MXDartClass {
}
export { AlignmentGeometry };
declare class Alignment extends AlignmentGeometry {
    x: number;
    y: number;
    constructor(x?: number, y?: number);
    static get topLeft(): Alignment;
    static get topCenter(): Alignment;
    static get topRight(): Alignment;
    static get centerLeft(): Alignment;
    static get center(): Alignment;
    static get centerRight(): Alignment;
    static get bottomLeft(): Alignment;
    static get bottomCenter(): Alignment;
    static get bottomRight(): Alignment;
}
export { Alignment };
declare class AlignmentDirectional extends AlignmentGeometry {
    start: number;
    y: number;
    constructor(start?: number, y?: number);
    static get topStart(): AlignmentDirectional;
    static get topCenter(): AlignmentDirectional;
    static get topEnd(): AlignmentDirectional;
    static get centerStart(): AlignmentDirectional;
    static get center(): AlignmentDirectional;
    static get centerEnd(): AlignmentDirectional;
    static get bottomStart(): AlignmentDirectional;
    static get bottomCenter(): AlignmentDirectional;
    static get bottomEnd(): AlignmentDirectional;
}
export { AlignmentDirectional };
declare class _MixedAlignment extends AlignmentGeometry {
    x: number;
    start: number;
    y: number;
    constructor(_x?: number, _start?: number, _y?: number);
}
export { _MixedAlignment };
declare class TextAlignVertical extends MXDartClass {
    y: number;
    constructor(namedParameters?: {
        y?: number;
    });
    static get top(): TextAlignVertical;
    static get center(): TextAlignVertical;
    static get bottom(): TextAlignVertical;
}
export { TextAlignVertical };
