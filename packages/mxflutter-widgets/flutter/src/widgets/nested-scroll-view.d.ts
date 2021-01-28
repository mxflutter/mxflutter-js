import { RenderViewport } from '../rendering/viewport';
import { Viewport } from './viewport';
import { RenderSliver } from '../rendering/sliver';
import { ChangeNotifier } from '../foundation/change-notifier';
import { TickerProvider } from '../scheduler/ticker';
import { Simulation } from '../physics/simulation';
import { ScrollPosition } from './scroll-position';
import { ScrollContext } from './scroll-context';
import { ScrollDragController, BallisticScrollActivity } from './scroll-activity';
import { FixedScrollMetrics } from './scroll-metrics';
import { ViewportOffset, ScrollDirection } from '../rendering/viewport-offset';
import { CustomScrollView } from './scroll-view';
import { Key } from '../foundation/key';
import { Clip } from '../../../mx-dart-sdk';
import { DragStartBehavior } from '../gestures/recognizer';
import { ScrollPhysics } from './scroll-physics';
import { Axis, AxisDirection } from '../painting/basic-types';
import { ScrollController } from './scroll-controller';
import { StatefulWidget$, State$, InheritedWidget, SingleChildRenderObjectWidget } from './framework';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare class NestedScrollView extends StatefulWidget$ {
    controller: ScrollController;
    scrollDirection: Axis;
    reverse: boolean;
    physics: ScrollPhysics;
    headerSliverBuilder: any;
    body: MXWidget;
    dragStartBehavior: DragStartBehavior;
    floatHeaderSlivers: boolean;
    clipBehavior: Clip;
    constructor(namedParameters?: {
        key?: Key;
        controller?: ScrollController;
        scrollDirection?: Axis;
        reverse?: boolean;
        physics?: ScrollPhysics;
        headerSliverBuilder?: any;
        body?: MXWidget;
        dragStartBehavior?: DragStartBehavior;
        floatHeaderSlivers?: boolean;
        clipBehavior?: Clip;
    });
    preBuild(buildContext: any): void;
}
export { NestedScrollView };
declare class NestedScrollViewState extends State$ {
    absorberHandle: SliverOverlapAbsorberHandle;
    coordinator: _NestedScrollCoordinator;
    lastHasScrolledBody: boolean;
}
export { NestedScrollViewState };
declare class _NestedScrollViewCustomScrollView extends CustomScrollView {
    handle: SliverOverlapAbsorberHandle;
    clipBehavior: Clip;
    constructor(namedParameters?: {
        scrollDirection?: Axis;
        reverse?: boolean;
        physics?: ScrollPhysics;
        controller?: ScrollController;
        slivers?: Array<any>;
        handle?: SliverOverlapAbsorberHandle;
        clipBehavior?: Clip;
        dragStartBehavior?: DragStartBehavior;
    });
}
export { _NestedScrollViewCustomScrollView };
declare class _InheritedNestedScrollView extends InheritedWidget {
    state: NestedScrollViewState;
    constructor(namedParameters?: {
        key?: Key;
        state?: NestedScrollViewState;
        child?: MXWidget;
    });
}
export { _InheritedNestedScrollView };
declare class _NestedScrollMetrics extends FixedScrollMetrics {
    minRange: number;
    maxRange: number;
    correctionOffset: number;
    constructor(namedParameters?: {
        minScrollExtent?: number;
        maxScrollExtent?: number;
        pixels?: number;
        viewportDimension?: number;
        axisDirection?: AxisDirection;
        minRange?: number;
        maxRange?: number;
        correctionOffset?: number;
    });
}
export { _NestedScrollMetrics };
declare class _NestedScrollCoordinator extends MXDartClass {
    state: NestedScrollViewState;
    parent: ScrollController;
    onHasScrolledBodyChanged: any;
    floatHeaderSlivers: boolean;
    outerController: _NestedScrollController;
    innerController: _NestedScrollController;
    userScrollDirection: ScrollDirection;
    currentDrag: ScrollDragController;
    constructor(_state?: NestedScrollViewState, _parent?: ScrollController, _onHasScrolledBodyChanged?: any, _floatHeaderSlivers?: boolean);
}
export { _NestedScrollCoordinator };
declare class _NestedScrollController extends ScrollController {
    coordinator: _NestedScrollCoordinator;
    constructor(coordinator?: _NestedScrollCoordinator, namedParameters?: {
        initialScrollOffset?: number;
        debugLabel?: string;
    });
}
export { _NestedScrollController };
declare class _NestedScrollPosition extends ScrollPosition {
    coordinator: _NestedScrollCoordinator;
    parent: ScrollController;
    constructor(namedParameters?: {
        physics?: ScrollPhysics;
        context?: ScrollContext;
        initialPixels?: number;
        oldPosition?: ScrollPosition;
        debugLabel?: string;
        coordinator?: _NestedScrollCoordinator;
    });
}
export { _NestedScrollPosition };
declare enum _NestedBallisticScrollActivityMode {
    outer = "{ \"_name\": \"_NestedBallisticScrollActivityMode.outer\", \"index\": 0 }",
    inner = "{ \"_name\": \"_NestedBallisticScrollActivityMode.inner\", \"index\": 1 }",
    independent = "{ \"_name\": \"_NestedBallisticScrollActivityMode.independent\", \"index\": 2 }"
}
export { _NestedBallisticScrollActivityMode };
declare class _NestedInnerBallisticScrollActivity extends BallisticScrollActivity {
    coordinator: _NestedScrollCoordinator;
    constructor(coordinator?: _NestedScrollCoordinator, position?: _NestedScrollPosition, simulation?: Simulation, vsync?: TickerProvider);
}
export { _NestedInnerBallisticScrollActivity };
declare class _NestedOuterBallisticScrollActivity extends BallisticScrollActivity {
    coordinator: _NestedScrollCoordinator;
    metrics: _NestedScrollMetrics;
    constructor(coordinator?: _NestedScrollCoordinator, position?: _NestedScrollPosition, metrics?: _NestedScrollMetrics, simulation?: Simulation, vsync?: TickerProvider);
}
export { _NestedOuterBallisticScrollActivity };
declare class SliverOverlapAbsorberHandle extends ChangeNotifier {
    writers: number;
    layoutExtent: number;
    scrollExtent: number;
}
export { SliverOverlapAbsorberHandle };
declare class SliverOverlapAbsorber extends SingleChildRenderObjectWidget {
    handle: SliverOverlapAbsorberHandle;
    constructor(namedParameters?: {
        key?: Key;
        handle?: SliverOverlapAbsorberHandle;
        sliver?: MXWidget;
    });
}
export { SliverOverlapAbsorber };
declare class RenderSliverOverlapAbsorber extends RenderSliver {
    handle: SliverOverlapAbsorberHandle;
    constructor(namedParameters?: {
        handle?: SliverOverlapAbsorberHandle;
        sliver?: RenderSliver;
    });
}
export { RenderSliverOverlapAbsorber };
declare class SliverOverlapInjector extends SingleChildRenderObjectWidget {
    handle: SliverOverlapAbsorberHandle;
    constructor(namedParameters?: {
        key?: Key;
        handle?: SliverOverlapAbsorberHandle;
        sliver?: MXWidget;
    });
}
export { SliverOverlapInjector };
declare class RenderSliverOverlapInjector extends RenderSliver {
    currentLayoutExtent: number;
    currentMaxExtent: number;
    handle: SliverOverlapAbsorberHandle;
    constructor(namedParameters?: {
        handle?: SliverOverlapAbsorberHandle;
    });
}
export { RenderSliverOverlapInjector };
declare class NestedScrollViewViewport extends Viewport {
    handle: SliverOverlapAbsorberHandle;
    constructor(namedParameters?: {
        key?: Key;
        axisDirection?: AxisDirection;
        crossAxisDirection?: AxisDirection;
        anchor?: number;
        offset?: ViewportOffset;
        center?: Key;
        slivers?: Array<any>;
        handle?: SliverOverlapAbsorberHandle;
        clipBehavior?: Clip;
    });
}
export { NestedScrollViewViewport };
declare class RenderNestedScrollViewViewport extends RenderViewport {
    handle: SliverOverlapAbsorberHandle;
    constructor(namedParameters?: {
        axisDirection?: AxisDirection;
        crossAxisDirection?: AxisDirection;
        offset?: ViewportOffset;
        anchor?: number;
        children?: Array<any>;
        center?: RenderSliver;
        handle?: SliverOverlapAbsorberHandle;
        clipBehavior?: Clip;
    });
}
export { RenderNestedScrollViewViewport };
