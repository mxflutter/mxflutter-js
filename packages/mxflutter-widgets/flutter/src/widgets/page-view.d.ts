import { Key } from '../foundation/key';
import { Clip } from '../../../mx-dart-sdk';
import { DragStartBehavior } from '../gestures/recognizer';
import { SliverChildDelegate } from './sliver';
import { StatefulWidget, State } from './framework';
import { ScrollPosition } from './scroll-position';
import { ScrollContext } from './scroll-context';
import { ScrollPhysics } from './scroll-physics';
import { ScrollPositionWithSingleContext } from './scroll-position-with-single-context';
import { AxisDirection, Axis } from '../painting/basic-types';
import { FixedScrollMetrics } from './scroll-metrics';
import { ScrollController } from './scroll-controller';
declare class PageController extends ScrollController {
    initialPage: number;
    keepPage: boolean;
    viewportFraction: number;
    constructor(namedParameters?: {
        initialPage?: number;
        keepPage?: boolean;
        viewportFraction?: number;
    });
    jumpToPage(page: number): void;
}
export { PageController };
declare class PageMetrics extends FixedScrollMetrics {
    viewportFraction: number;
    constructor(namedParameters?: {
        minScrollExtent?: number;
        maxScrollExtent?: number;
        pixels?: number;
        viewportDimension?: number;
        axisDirection?: AxisDirection;
        viewportFraction?: number;
    });
}
export { PageMetrics };
declare class _PagePosition extends ScrollPositionWithSingleContext {
    initialPage: number;
    pageToUseOnStartup: number;
    viewportFraction: number;
    constructor(namedParameters?: {
        physics?: ScrollPhysics;
        context?: ScrollContext;
        initialPage?: number;
        keepPage?: boolean;
        viewportFraction?: number;
        oldPosition?: ScrollPosition;
    });
}
export { _PagePosition };
declare class _ForceImplicitScrollPhysics extends ScrollPhysics {
    allowImplicitScrolling: boolean;
    constructor(namedParameters?: {
        allowImplicitScrolling?: boolean;
        parent?: ScrollPhysics;
    });
}
export { _ForceImplicitScrollPhysics };
declare class PageScrollPhysics extends ScrollPhysics {
    constructor(namedParameters?: {
        parent?: ScrollPhysics;
    });
}
export { PageScrollPhysics };
declare class PageView extends StatefulWidget {
    allowImplicitScrolling: boolean;
    restorationId: string;
    scrollDirection: Axis;
    reverse: boolean;
    controller: PageController;
    physics: ScrollPhysics;
    pageSnapping: boolean;
    onPageChanged: any;
    childrenDelegate: SliverChildDelegate;
    dragStartBehavior: DragStartBehavior;
    clipBehavior: Clip;
    constructor(namedParameters?: {
        key?: Key;
        scrollDirection?: Axis;
        reverse?: boolean;
        controller?: PageController;
        physics?: ScrollPhysics;
        pageSnapping?: boolean;
        onPageChanged?: any;
        children?: Array<any>;
        dragStartBehavior?: DragStartBehavior;
        allowImplicitScrolling?: boolean;
        restorationId?: string;
        clipBehavior?: Clip;
    });
    static builder(namedParameters?: {
        key?: Key;
        scrollDirection?: Axis;
        reverse?: boolean;
        controller?: PageController;
        physics?: ScrollPhysics;
        pageSnapping?: boolean;
        onPageChanged?: any;
        itemBuilder?: any;
        itemCount?: number;
        dragStartBehavior?: DragStartBehavior;
        allowImplicitScrolling?: boolean;
        restorationId?: string;
        clipBehavior?: Clip;
    }): PageView;
    static custom(namedParameters?: {
        key?: Key;
        scrollDirection?: Axis;
        reverse?: boolean;
        controller?: PageController;
        physics?: ScrollPhysics;
        pageSnapping?: boolean;
        onPageChanged?: any;
        childrenDelegate?: SliverChildDelegate;
        dragStartBehavior?: DragStartBehavior;
        allowImplicitScrolling?: boolean;
        restorationId?: string;
        clipBehavior?: Clip;
    }): PageView;
    preBuild(buildContext: any): void;
}
export { PageView };
declare class _PageViewState extends State {
    lastReportedPage: number;
}
export { _PageViewState };
