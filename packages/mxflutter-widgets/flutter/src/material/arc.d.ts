import { Offset, Rect } from '../../../mx-dart-sdk';
import { Tween, RectTween } from '../animation/tween';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class MaterialPointArcTween extends Tween {
    dirty: boolean;
    center: Offset;
    radius: number;
    beginAngle: number;
    endAngle: number;
    constructor(namedParameters?: {
        begin?: Offset;
        end?: Offset;
    });
}
export { MaterialPointArcTween };
declare enum _CornerId {
    topLeft = "{ \"_name\": \"_CornerId.topLeft\", \"index\": 0 }",
    topRight = "{ \"_name\": \"_CornerId.topRight\", \"index\": 1 }",
    bottomLeft = "{ \"_name\": \"_CornerId.bottomLeft\", \"index\": 2 }",
    bottomRight = "{ \"_name\": \"_CornerId.bottomRight\", \"index\": 3 }"
}
export { _CornerId };
declare class _Diagonal extends MXDartClass {
    beginId: _CornerId;
    endId: _CornerId;
    constructor(beginId?: _CornerId, endId?: _CornerId);
}
export { _Diagonal };
declare class MaterialRectArcTween extends RectTween {
    dirty: boolean;
    beginArc: MaterialPointArcTween;
    endArc: MaterialPointArcTween;
    constructor(namedParameters?: {
        begin?: Rect;
        end?: Rect;
    });
}
export { MaterialRectArcTween };
declare class MaterialRectCenterArcTween extends RectTween {
    dirty: boolean;
    centerArc: MaterialPointArcTween;
    constructor(namedParameters?: {
        begin?: Rect;
        end?: Rect;
    });
}
export { MaterialRectCenterArcTween };
