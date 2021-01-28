import { Offset } from '../../../mx-dart-sdk';
import { Matrix4 } from '../../../vector-math-64';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare abstract class HitTestable extends MXDartClass {
}
export { HitTestable };
declare abstract class HitTestDispatcher extends MXDartClass {
}
export { HitTestDispatcher };
declare abstract class HitTestTarget extends MXDartClass {
}
export { HitTestTarget };
declare class HitTestEntry extends MXDartClass {
    target: HitTestTarget;
    transform: Matrix4;
    constructor(target?: HitTestTarget);
}
export { HitTestEntry };
declare abstract class _TransformPart extends MXDartClass {
}
export { _TransformPart };
declare class _MatrixTransformPart extends _TransformPart {
    matrix: Matrix4;
    constructor(matrix?: Matrix4);
}
export { _MatrixTransformPart };
declare class _OffsetTransformPart extends _TransformPart {
    offset: Offset;
    constructor(offset?: Offset);
}
export { _OffsetTransformPart };
declare class HitTestResult extends MXDartClass {
    path: Array<any>;
    transforms: Array<any>;
    localTransforms: Array<any>;
    static wrap(result?: HitTestResult): HitTestResult;
}
export { HitTestResult };
