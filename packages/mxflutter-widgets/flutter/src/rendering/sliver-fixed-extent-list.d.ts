import { RenderSliverMultiBoxAdaptor, RenderSliverBoxChildManager } from './sliver-multi-box-adaptor';
declare abstract class RenderSliverFixedExtentBoxAdaptor extends RenderSliverMultiBoxAdaptor {
}
export { RenderSliverFixedExtentBoxAdaptor };
declare class RenderSliverFixedExtentList extends RenderSliverFixedExtentBoxAdaptor {
    itemExtent: number;
    constructor(namedParameters?: {
        childManager?: RenderSliverBoxChildManager;
        itemExtent?: number;
    });
}
export { RenderSliverFixedExtentList };
