import { Clip } from '../../../mx-dart-sdk';
import { CacheExtentStyle } from '../rendering/viewport';
import { Key } from '../foundation/key';
import { ViewportOffset } from '../rendering/viewport-offset';
import { AxisDirection } from '../painting/basic-types';
import { MultiChildRenderObjectWidget, MultiChildRenderObjectElement } from './framework';
declare class Viewport extends MultiChildRenderObjectWidget {
    axisDirection: AxisDirection;
    crossAxisDirection: AxisDirection;
    anchor: number;
    offset: ViewportOffset;
    center: Key;
    cacheExtent: number;
    cacheExtentStyle: CacheExtentStyle;
    clipBehavior: Clip;
    constructor(namedParameters?: {
        key?: Key;
        axisDirection?: AxisDirection;
        crossAxisDirection?: AxisDirection;
        anchor?: number;
        offset?: ViewportOffset;
        center?: Key;
        cacheExtent?: number;
        cacheExtentStyle?: CacheExtentStyle;
        clipBehavior?: Clip;
        slivers?: Array<any>;
    });
}
export { Viewport };
declare class _ViewportElement extends MultiChildRenderObjectElement {
    constructor(widget?: Viewport);
}
export { _ViewportElement };
declare class ShrinkWrappingViewport extends MultiChildRenderObjectWidget {
    axisDirection: AxisDirection;
    crossAxisDirection: AxisDirection;
    offset: ViewportOffset;
    clipBehavior: Clip;
    constructor(namedParameters?: {
        key?: Key;
        axisDirection?: AxisDirection;
        crossAxisDirection?: AxisDirection;
        offset?: ViewportOffset;
        clipBehavior?: Clip;
        slivers?: Array<any>;
    });
}
export { ShrinkWrappingViewport };
