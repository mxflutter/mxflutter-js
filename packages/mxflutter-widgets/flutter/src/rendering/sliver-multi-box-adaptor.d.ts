import { SliverLogicalParentData, RenderSliver } from './sliver';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare abstract class RenderSliverBoxChildManager extends MXDartClass {
}
export { RenderSliverBoxChildManager };
declare abstract class KeepAliveParentDataMixin extends MXDartClass {
    keepAlive: boolean;
}
export { KeepAliveParentDataMixin };
declare abstract class RenderSliverWithKeepAliveMixin extends MXDartClass {
}
export { RenderSliverWithKeepAliveMixin };
declare class SliverMultiBoxAdaptorParentData extends SliverLogicalParentData {
    index: number;
    keptAlive: boolean;
}
export { SliverMultiBoxAdaptorParentData };
declare abstract class RenderSliverMultiBoxAdaptor extends RenderSliver {
    childManager: RenderSliverBoxChildManager;
    keepAliveBucket: Map<any, any>;
    debugDanglingKeepAlives: Array<any>;
    debugChildIntegrityEnabled: boolean;
}
export { RenderSliverMultiBoxAdaptor };
