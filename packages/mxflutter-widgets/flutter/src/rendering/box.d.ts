import { HitTestResult, HitTestEntry } from '../gestures/hit-test';
import { Constraints, ParentData, RenderObject } from './object';
import { Size, Offset } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class _DebugSize extends Size {
    owner: RenderBox;
    canBeUsedByParent: boolean;
    constructor(source?: Size, _owner?: RenderBox, _canBeUsedByParent?: boolean);
}
export { _DebugSize };
declare class BoxConstraints extends Constraints {
    minWidth: number;
    maxWidth: number;
    minHeight: number;
    maxHeight: number;
    constructor(namedParameters?: {
        minWidth?: number;
        maxWidth?: number;
        minHeight?: number;
        maxHeight?: number;
    });
    static tight(size?: Size): BoxConstraints;
    static tightFor(namedParameters?: {
        width?: number;
        height?: number;
    }): BoxConstraints;
    static tightForFinite(namedParameters?: {
        width?: number;
        height?: number;
    }): BoxConstraints;
    static loose(size?: Size): BoxConstraints;
    static expand(namedParameters?: {
        width?: number;
        height?: number;
    }): BoxConstraints;
}
export { BoxConstraints };
declare class BoxHitTestResult extends HitTestResult {
    static wrap(result?: HitTestResult): BoxHitTestResult;
}
export { BoxHitTestResult };
declare class BoxHitTestEntry extends HitTestEntry {
    localPosition: Offset;
    constructor(target?: RenderBox, localPosition?: Offset);
}
export { BoxHitTestEntry };
declare class BoxParentData extends ParentData {
    offset: Offset;
}
export { BoxParentData };
declare abstract class ContainerBoxParentData extends BoxParentData {
}
export { ContainerBoxParentData };
declare enum _IntrinsicDimension {
    minWidth = "{ \"_name\": \"_IntrinsicDimension.minWidth\", \"index\": 0 }",
    maxWidth = "{ \"_name\": \"_IntrinsicDimension.maxWidth\", \"index\": 1 }",
    minHeight = "{ \"_name\": \"_IntrinsicDimension.minHeight\", \"index\": 2 }",
    maxHeight = "{ \"_name\": \"_IntrinsicDimension.maxHeight\", \"index\": 3 }"
}
export { _IntrinsicDimension };
declare class _IntrinsicDimensionsCacheEntry extends MXDartClass {
    dimension: _IntrinsicDimension;
    argument: number;
    constructor(dimension?: _IntrinsicDimension, argument?: number);
}
export { _IntrinsicDimensionsCacheEntry };
declare abstract class RenderBox extends RenderObject {
    cachedIntrinsicDimensions: Map<any, any>;
    size: Size;
    cachedBaselines: Map<any, any>;
    debugActivePointers: number;
}
export { RenderBox };
declare abstract class RenderBoxContainerDefaultsMixin extends MXDartClass {
}
export { RenderBoxContainerDefaultsMixin };
