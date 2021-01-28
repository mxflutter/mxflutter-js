import { RenderSliver } from './sliver';
import { SemanticsTag } from '../semantics/semantics';
import { ViewportOffset } from './viewport-offset';
import { AxisDirection } from '../painting/basic-types';
import { RenderBox } from './box';
import { Rect, Clip } from '../../../mx-dart-sdk';
import { RenderObject } from './object';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare enum CacheExtentStyle {
    pixel = "{ \"_name\": \"CacheExtentStyle.pixel\", \"index\": 0 }",
    viewport = "{ \"_name\": \"CacheExtentStyle.viewport\", \"index\": 1 }"
}
export { CacheExtentStyle };
declare abstract class RenderAbstractViewport extends RenderObject {
    static get defaultCacheExtent(): number;
}
export { RenderAbstractViewport };
declare class RevealedOffset extends MXDartClass {
    offset: number;
    rect: Rect;
    constructor(namedParameters?: {
        offset?: number;
        rect?: Rect;
    });
}
export { RevealedOffset };
declare abstract class RenderViewportBase extends RenderBox {
    axisDirection: AxisDirection;
    crossAxisDirection: AxisDirection;
    offset: ViewportOffset;
    cacheExtent: number;
    calculatedCacheExtent: number;
    cacheExtentStyle: CacheExtentStyle;
    clipBehavior: Clip;
}
export { RenderViewportBase };
declare class RenderViewport extends RenderViewportBase {
    anchor: number;
    center: RenderSliver;
    minScrollExtent: number;
    maxScrollExtent: number;
    hasVisualOverflow: boolean;
    constructor(namedParameters?: {
        axisDirection?: AxisDirection;
        crossAxisDirection?: AxisDirection;
        offset?: ViewportOffset;
        anchor?: number;
        children?: Array<any>;
        center?: RenderSliver;
        cacheExtent?: number;
        cacheExtentStyle?: CacheExtentStyle;
        clipBehavior?: Clip;
    });
    static get useTwoPaneSemantics(): SemanticsTag;
    static get excludeFromScrolling(): SemanticsTag;
}
export { RenderViewport };
declare class RenderShrinkWrappingViewport extends RenderViewportBase {
    maxScrollExtent: number;
    shrinkWrapExtent: number;
    hasVisualOverflow: boolean;
    constructor(namedParameters?: {
        axisDirection?: AxisDirection;
        crossAxisDirection?: AxisDirection;
        offset?: ViewportOffset;
        clipBehavior?: Clip;
        children?: Array<any>;
    });
}
export { RenderShrinkWrappingViewport };
