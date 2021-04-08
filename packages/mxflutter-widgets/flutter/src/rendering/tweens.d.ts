import { Alignment, AlignmentGeometry } from '../painting/alignment';
import { FractionalOffset } from '../painting/fractional-offset';
import { Tween } from '../animation/tween';
declare class FractionalOffsetTween extends Tween {
    constructor(namedParameters?: {
        begin?: FractionalOffset;
        end?: FractionalOffset;
    });
}
export { FractionalOffsetTween };
declare class AlignmentTween extends Tween {
    constructor(namedParameters?: {
        begin?: Alignment;
        end?: Alignment;
    });
}
export { AlignmentTween };
declare class AlignmentGeometryTween extends Tween {
    constructor(namedParameters?: {
        begin?: AlignmentGeometry;
        end?: AlignmentGeometry;
    });
}
export { AlignmentGeometryTween };
