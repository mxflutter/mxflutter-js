import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class ScrollPhysics extends MXDartClass {
    parent: ScrollPhysics;
    constructor(namedParameters?: {
        parent?: ScrollPhysics;
    });
}
export { ScrollPhysics };
declare class RangeMaintainingScrollPhysics extends ScrollPhysics {
    constructor(namedParameters?: {
        parent?: ScrollPhysics;
    });
}
export { RangeMaintainingScrollPhysics };
declare class BouncingScrollPhysics extends ScrollPhysics {
    constructor(namedParameters?: {
        parent?: ScrollPhysics;
    });
}
export { BouncingScrollPhysics };
declare class ClampingScrollPhysics extends ScrollPhysics {
    constructor(namedParameters?: {
        parent?: ScrollPhysics;
    });
}
export { ClampingScrollPhysics };
declare class AlwaysScrollableScrollPhysics extends ScrollPhysics {
    constructor(namedParameters?: {
        parent?: ScrollPhysics;
    });
}
export { AlwaysScrollableScrollPhysics };
declare class NeverScrollableScrollPhysics extends ScrollPhysics {
    constructor(namedParameters?: {
        parent?: ScrollPhysics;
    });
}
export { NeverScrollableScrollPhysics };
