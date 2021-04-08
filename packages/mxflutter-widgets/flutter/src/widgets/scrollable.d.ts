import { RestorableValue } from './restoration-properties';
import { Intent, Action } from './actions';
import { ScrollMetrics } from './scroll-metrics';
import { RenderBox } from '../rendering/box';
import { SemanticsNode } from '../semantics/semantics';
import { RenderProxyBox } from '../rendering/proxy-box';
import { ScrollHoldController } from './scroll-activity';
import { Drag } from '../gestures/drag';
import { ScrollBehavior } from './scroll-configuration';
import { ScrollPosition } from './scroll-position';
import { Key } from '../foundation/key';
import { DragStartBehavior } from '../gestures/recognizer';
import { ScrollPhysics } from './scroll-physics';
import { ScrollController } from './scroll-controller';
import { AxisDirection, Axis } from '../painting/basic-types';
import { StatefulWidget, InheritedWidget, State, GlobalKey, SingleChildRenderObjectWidget } from './framework';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare class Scrollable extends StatefulWidget {
    axisDirection: AxisDirection;
    controller: ScrollController;
    physics: ScrollPhysics;
    viewportBuilder: any;
    incrementCalculator: any;
    excludeFromSemantics: boolean;
    semanticChildCount: number;
    dragStartBehavior: DragStartBehavior;
    restorationId: string;
    constructor(namedParameters?: {
        key?: Key;
        axisDirection?: AxisDirection;
        controller?: ScrollController;
        physics?: ScrollPhysics;
        viewportBuilder?: any;
        incrementCalculator?: any;
        excludeFromSemantics?: boolean;
        semanticChildCount?: number;
        dragStartBehavior?: DragStartBehavior;
        restorationId?: string;
    });
}
export { Scrollable };
declare class _ScrollableScope extends InheritedWidget {
    scrollable: ScrollableState;
    position: ScrollPosition;
    constructor(namedParameters?: {
        key?: Key;
        scrollable?: ScrollableState;
        position?: ScrollPosition;
        child?: MXWidget;
    });
}
export { _ScrollableScope };
declare class ScrollableState extends State {
    position: ScrollPosition;
    persistedScrollOffset: _RestorableScrollOffset;
    configuration: ScrollBehavior;
    physics: ScrollPhysics;
    scrollSemanticsKey: GlobalKey;
    gestureDetectorKey: GlobalKey;
    ignorePointerKey: GlobalKey;
    gestureRecognizers: Map<any, any>;
    shouldIgnorePointer: boolean;
    lastCanDrag: boolean;
    lastAxisDirection: Axis;
    drag: Drag;
    hold: ScrollHoldController;
}
export { ScrollableState };
declare class _ScrollSemantics extends SingleChildRenderObjectWidget {
    position: ScrollPosition;
    allowImplicitScrolling: boolean;
    semanticChildCount: number;
    constructor(namedParameters?: {
        key?: Key;
        position?: ScrollPosition;
        allowImplicitScrolling?: boolean;
        semanticChildCount?: number;
        child?: MXWidget;
    });
}
export { _ScrollSemantics };
declare class _RenderScrollSemantics extends RenderProxyBox {
    position: ScrollPosition;
    allowImplicitScrolling: boolean;
    semanticChildCount: number;
    innerNode: SemanticsNode;
    constructor(namedParameters?: {
        position?: ScrollPosition;
        allowImplicitScrolling?: boolean;
        semanticChildCount?: number;
        child?: RenderBox;
    });
}
export { _RenderScrollSemantics };
declare enum ScrollIncrementType {
    line = "{ \"_name\": \"ScrollIncrementType.line\", \"index\": 0 }",
    page = "{ \"_name\": \"ScrollIncrementType.page\", \"index\": 1 }"
}
export { ScrollIncrementType };
declare class ScrollIncrementDetails extends MXDartClass {
    type: ScrollIncrementType;
    metrics: ScrollMetrics;
    constructor(namedParameters?: {
        type?: ScrollIncrementType;
        metrics?: ScrollMetrics;
    });
}
export { ScrollIncrementDetails };
declare class ScrollIntent extends Intent {
    direction: AxisDirection;
    type: ScrollIncrementType;
    constructor(namedParameters?: {
        direction?: AxisDirection;
        type?: ScrollIncrementType;
    });
}
export { ScrollIntent };
declare class ScrollAction extends Action {
}
export { ScrollAction };
declare class _RestorableScrollOffset extends RestorableValue {
}
export { _RestorableScrollOffset };
