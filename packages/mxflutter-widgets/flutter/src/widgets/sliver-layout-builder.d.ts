import { RenderSliver } from '../rendering/sliver';
import { Key } from '../foundation/key';
import { ConstrainedLayoutBuilder } from './layout-builder';
declare class SliverLayoutBuilder extends ConstrainedLayoutBuilder {
    constructor(namedParameters?: {
        key?: Key;
        builder?: any;
    });
}
export { SliverLayoutBuilder };
declare class _RenderSliverLayoutBuilder extends RenderSliver {
}
export { _RenderSliverLayoutBuilder };
