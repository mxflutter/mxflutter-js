import { ViewportOffset } from '../rendering/viewport-offset';
import { Clip } from '../../../mx-dart-sdk';
import { StatefulWidget, State, RenderObjectElement, RenderObjectWidget } from './framework';
import { Key } from '../foundation/key';
import { Scrollable, ScrollableState } from './scrollable';
import { ScrollPosition } from './scroll-position';
import { ScrollContext } from './scroll-context';
import { ScrollPhysics } from './scroll-physics';
import { ScrollPositionWithSingleContext } from './scroll-position-with-single-context';
import { AxisDirection } from '../painting/basic-types';
import { FixedScrollMetrics } from './scroll-metrics';
import { ScrollController } from './scroll-controller';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare abstract class ListWheelChildDelegate extends MXDartClass {
}
export { ListWheelChildDelegate };
declare class ListWheelChildListDelegate extends ListWheelChildDelegate {
    children: Array<any>;
    constructor(namedParameters?: {
        children?: Array<any>;
    });
}
export { ListWheelChildListDelegate };
declare class ListWheelChildLoopingListDelegate extends ListWheelChildDelegate {
    children: Array<any>;
    constructor(namedParameters?: {
        children?: Array<any>;
    });
}
export { ListWheelChildLoopingListDelegate };
declare class ListWheelChildBuilderDelegate extends ListWheelChildDelegate {
    builder: any;
    childCount: number;
    constructor(namedParameters?: {
        builder?: any;
        childCount?: number;
    });
}
export { ListWheelChildBuilderDelegate };
declare class FixedExtentScrollController extends ScrollController {
    initialItem: number;
    constructor(namedParameters?: {
        initialItem?: number;
    });
}
export { FixedExtentScrollController };
declare class FixedExtentMetrics extends FixedScrollMetrics {
    itemIndex: number;
    constructor(namedParameters?: {
        minScrollExtent?: number;
        maxScrollExtent?: number;
        pixels?: number;
        viewportDimension?: number;
        axisDirection?: AxisDirection;
        itemIndex?: number;
    });
}
export { FixedExtentMetrics };
declare class _FixedExtentScrollPosition extends ScrollPositionWithSingleContext {
    constructor(namedParameters?: {
        physics?: ScrollPhysics;
        context?: ScrollContext;
        initialItem?: number;
        keepScrollOffset?: boolean;
        oldPosition?: ScrollPosition;
        debugLabel?: string;
    });
}
export { _FixedExtentScrollPosition };
declare class _FixedExtentScrollable extends Scrollable {
    itemExtent: number;
    constructor(namedParameters?: {
        key?: Key;
        axisDirection?: AxisDirection;
        controller?: ScrollController;
        physics?: ScrollPhysics;
        itemExtent?: number;
        viewportBuilder?: any;
        restorationId?: string;
    });
}
export { _FixedExtentScrollable };
declare class _FixedExtentScrollableState extends ScrollableState {
}
export { _FixedExtentScrollableState };
declare class FixedExtentScrollPhysics extends ScrollPhysics {
    constructor(namedParameters?: {
        parent?: ScrollPhysics;
    });
}
export { FixedExtentScrollPhysics };
declare class ListWheelScrollView extends StatefulWidget {
    controller: ScrollController;
    physics: ScrollPhysics;
    diameterRatio: number;
    perspective: number;
    offAxisFraction: number;
    useMagnifier: boolean;
    magnification: number;
    overAndUnderCenterOpacity: number;
    itemExtent: number;
    squeeze: number;
    onSelectedItemChanged: any;
    renderChildrenOutsideViewport: boolean;
    childDelegate: ListWheelChildDelegate;
    clipBehavior: Clip;
    restorationId: string;
    constructor(namedParameters?: {
        key?: Key;
        controller?: ScrollController;
        physics?: ScrollPhysics;
        diameterRatio?: number;
        perspective?: number;
        offAxisFraction?: number;
        useMagnifier?: boolean;
        magnification?: number;
        overAndUnderCenterOpacity?: number;
        itemExtent?: number;
        squeeze?: number;
        onSelectedItemChanged?: any;
        renderChildrenOutsideViewport?: boolean;
        clipBehavior?: Clip;
        restorationId?: string;
        children?: Array<any>;
    });
    static useDelegate(namedParameters?: {
        key?: Key;
        controller?: ScrollController;
        physics?: ScrollPhysics;
        diameterRatio?: number;
        perspective?: number;
        offAxisFraction?: number;
        useMagnifier?: boolean;
        magnification?: number;
        overAndUnderCenterOpacity?: number;
        itemExtent?: number;
        squeeze?: number;
        onSelectedItemChanged?: any;
        renderChildrenOutsideViewport?: boolean;
        clipBehavior?: Clip;
        restorationId?: string;
        childDelegate?: ListWheelChildDelegate;
    }): ListWheelScrollView;
}
export { ListWheelScrollView };
declare class _ListWheelScrollViewState extends State {
    lastReportedItemIndex: number;
    scrollController: ScrollController;
}
export { _ListWheelScrollViewState };
declare class ListWheelElement extends RenderObjectElement {
    childWidgets: Map<any, any>;
    childElements: any;
    constructor(widget?: ListWheelViewport);
}
export { ListWheelElement };
declare class ListWheelViewport extends RenderObjectWidget {
    diameterRatio: number;
    perspective: number;
    offAxisFraction: number;
    useMagnifier: boolean;
    magnification: number;
    overAndUnderCenterOpacity: number;
    itemExtent: number;
    squeeze: number;
    renderChildrenOutsideViewport: boolean;
    offset: ViewportOffset;
    childDelegate: ListWheelChildDelegate;
    clipBehavior: Clip;
    constructor(namedParameters?: {
        key?: Key;
        diameterRatio?: number;
        perspective?: number;
        offAxisFraction?: number;
        useMagnifier?: boolean;
        magnification?: number;
        overAndUnderCenterOpacity?: number;
        itemExtent?: number;
        squeeze?: number;
        renderChildrenOutsideViewport?: boolean;
        offset?: ViewportOffset;
        childDelegate?: ListWheelChildDelegate;
        clipBehavior?: Clip;
    });
}
export { ListWheelViewport };
