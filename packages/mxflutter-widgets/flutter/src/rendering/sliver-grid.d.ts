import { SliverMultiBoxAdaptorParentData, RenderSliverMultiBoxAdaptor, RenderSliverBoxChildManager } from './sliver-multi-box-adaptor';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class SliverGridGeometry extends MXDartClass {
    scrollOffset: number;
    crossAxisOffset: number;
    mainAxisExtent: number;
    crossAxisExtent: number;
    constructor(namedParameters?: {
        scrollOffset?: number;
        crossAxisOffset?: number;
        mainAxisExtent?: number;
        crossAxisExtent?: number;
    });
}
export { SliverGridGeometry };
declare abstract class SliverGridLayout extends MXDartClass {
}
export { SliverGridLayout };
declare class SliverGridRegularTileLayout extends SliverGridLayout {
    crossAxisCount: number;
    mainAxisStride: number;
    crossAxisStride: number;
    childMainAxisExtent: number;
    childCrossAxisExtent: number;
    reverseCrossAxis: boolean;
    constructor(namedParameters?: {
        crossAxisCount?: number;
        mainAxisStride?: number;
        crossAxisStride?: number;
        childMainAxisExtent?: number;
        childCrossAxisExtent?: number;
        reverseCrossAxis?: boolean;
    });
}
export { SliverGridRegularTileLayout };
declare abstract class SliverGridDelegate extends MXDartClass {
}
export { SliverGridDelegate };
declare class SliverGridDelegateWithFixedCrossAxisCount extends SliverGridDelegate {
    crossAxisCount: number;
    mainAxisSpacing: number;
    crossAxisSpacing: number;
    childAspectRatio: number;
    constructor(namedParameters?: {
        crossAxisCount?: number;
        mainAxisSpacing?: number;
        crossAxisSpacing?: number;
        childAspectRatio?: number;
    });
}
export { SliverGridDelegateWithFixedCrossAxisCount };
declare class SliverGridDelegateWithMaxCrossAxisExtent extends SliverGridDelegate {
    maxCrossAxisExtent: number;
    mainAxisSpacing: number;
    crossAxisSpacing: number;
    childAspectRatio: number;
    constructor(namedParameters?: {
        maxCrossAxisExtent?: number;
        mainAxisSpacing?: number;
        crossAxisSpacing?: number;
        childAspectRatio?: number;
    });
}
export { SliverGridDelegateWithMaxCrossAxisExtent };
declare class SliverGridParentData extends SliverMultiBoxAdaptorParentData {
    crossAxisOffset: number;
}
export { SliverGridParentData };
declare class RenderSliverGrid extends RenderSliverMultiBoxAdaptor {
    gridDelegate: SliverGridDelegate;
    constructor(namedParameters?: {
        childManager?: RenderSliverBoxChildManager;
        gridDelegate?: SliverGridDelegate;
    });
}
export { RenderSliverGrid };
