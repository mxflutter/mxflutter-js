import { RenderBox } from './box';
import { Offset } from '../../../mx-dart-sdk';
import { HitTestResult, HitTestEntry } from '../gestures/hit-test';
import { ScrollDirection } from './viewport-offset';
import { AxisDirection } from '../painting/basic-types';
import { Constraints, ParentData, RenderObject } from './object';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare enum GrowthDirection {
    forward = "{ \"_name\": \"GrowthDirection.forward\", \"index\": 0 }",
    reverse = "{ \"_name\": \"GrowthDirection.reverse\", \"index\": 1 }"
}
export { GrowthDirection };
declare class SliverConstraints extends Constraints {
    axisDirection: AxisDirection;
    growthDirection: GrowthDirection;
    userScrollDirection: ScrollDirection;
    scrollOffset: number;
    precedingScrollExtent: number;
    overlap: number;
    remainingPaintExtent: number;
    crossAxisExtent: number;
    crossAxisDirection: AxisDirection;
    viewportMainAxisExtent: number;
    cacheOrigin: number;
    remainingCacheExtent: number;
    constructor(namedParameters?: {
        axisDirection?: AxisDirection;
        growthDirection?: GrowthDirection;
        userScrollDirection?: ScrollDirection;
        scrollOffset?: number;
        precedingScrollExtent?: number;
        overlap?: number;
        remainingPaintExtent?: number;
        crossAxisExtent?: number;
        crossAxisDirection?: AxisDirection;
        viewportMainAxisExtent?: number;
        remainingCacheExtent?: number;
        cacheOrigin?: number;
    });
}
export { SliverConstraints };
declare class SliverGeometry extends MXDartClass {
    scrollExtent: number;
    paintOrigin: number;
    paintExtent: number;
    layoutExtent: number;
    maxPaintExtent: number;
    maxScrollObstructionExtent: number;
    hitTestExtent: number;
    visible: boolean;
    hasVisualOverflow: boolean;
    scrollOffsetCorrection: number;
    cacheExtent: number;
    constructor(namedParameters?: {
        scrollExtent?: number;
        paintExtent?: number;
        paintOrigin?: number;
        layoutExtent?: number;
        maxPaintExtent?: number;
        maxScrollObstructionExtent?: number;
        hitTestExtent?: number;
        visible?: boolean;
        hasVisualOverflow?: boolean;
        scrollOffsetCorrection?: number;
        cacheExtent?: number;
    });
    static get zero(): SliverGeometry;
}
export { SliverGeometry };
declare class SliverHitTestResult extends HitTestResult {
    static wrap(result?: HitTestResult): SliverHitTestResult;
}
export { SliverHitTestResult };
declare class SliverHitTestEntry extends HitTestEntry {
    mainAxisPosition: number;
    crossAxisPosition: number;
    constructor(target?: RenderSliver, namedParameters?: {
        mainAxisPosition?: number;
        crossAxisPosition?: number;
    });
}
export { SliverHitTestEntry };
declare class SliverLogicalParentData extends ParentData {
    layoutOffset: number;
}
export { SliverLogicalParentData };
declare class SliverLogicalContainerParentData extends SliverLogicalParentData {
}
export { SliverLogicalContainerParentData };
declare class SliverPhysicalParentData extends ParentData {
    paintOffset: Offset;
}
export { SliverPhysicalParentData };
declare class SliverPhysicalContainerParentData extends SliverPhysicalParentData {
}
export { SliverPhysicalContainerParentData };
declare abstract class RenderSliver extends RenderObject {
    geometry: SliverGeometry;
}
export { RenderSliver };
declare abstract class RenderSliverHelpers extends MXDartClass {
}
export { RenderSliverHelpers };
declare abstract class RenderSliverSingleBoxAdapter extends RenderSliver {
}
export { RenderSliverSingleBoxAdapter };
declare class RenderSliverToBoxAdapter extends RenderSliverSingleBoxAdapter {
    constructor(namedParameters?: {
        child?: RenderBox;
    });
}
export { RenderSliverToBoxAdapter };
