import { RenderBox } from './box';
import { RenderSliverSingleBoxAdapter } from './sliver';
import { RenderSliverBoxChildManager } from './sliver-multi-box-adaptor';
import { RenderSliverFixedExtentBoxAdaptor } from './sliver-fixed-extent-list';
declare class RenderSliverFillViewport extends RenderSliverFixedExtentBoxAdaptor {
    viewportFraction: number;
    constructor(namedParameters?: {
        childManager?: RenderSliverBoxChildManager;
        viewportFraction?: number;
    });
}
export { RenderSliverFillViewport };
declare class RenderSliverFillRemainingWithScrollable extends RenderSliverSingleBoxAdapter {
    constructor(namedParameters?: {
        child?: RenderBox;
    });
}
export { RenderSliverFillRemainingWithScrollable };
declare class RenderSliverFillRemaining extends RenderSliverSingleBoxAdapter {
    constructor(namedParameters?: {
        child?: RenderBox;
    });
}
export { RenderSliverFillRemaining };
declare class RenderSliverFillRemainingAndOverscroll extends RenderSliverSingleBoxAdapter {
    constructor(namedParameters?: {
        child?: RenderBox;
    });
}
export { RenderSliverFillRemainingAndOverscroll };
