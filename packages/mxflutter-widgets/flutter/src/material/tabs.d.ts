import { PageController } from '../widgets/page-view';
import { MouseCursor } from '../rendering/mouse-cursor';
import { DragStartBehavior } from '../gestures/recognizer';
import { ScrollController } from '../widgets/scroll-controller';
import { ScrollPosition } from '../widgets/scroll-position';
import { ScrollContext } from '../widgets/scroll-context';
import { ScrollPhysics } from '../widgets/scroll-physics';
import { ScrollPositionWithSingleContext } from '../widgets/scroll-position-with-single-context';
import { Decoration, BoxPainter } from '../painting/decoration';
import { TabController } from './tab-controller';
import { CustomPainter } from '../rendering/custom-paint';
import { Flex } from '../widgets/basic';
import { Axis, VerticalDirection } from '../painting/basic-types';
import { RenderFlex, MainAxisSize, MainAxisAlignment, CrossAxisAlignment } from '../rendering/flex';
import { Animation } from '../animation/animation';
import { Color, TextDirection, Rect } from '../../../mx-dart-sdk';
import { TextStyle } from '../painting/text-style';
import { AnimatedWidget } from '../widgets/transitions';
import { Key } from '../foundation/key';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { StatelessWidget$, StatefulWidget$, State$ } from '../widgets/framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare enum TabBarIndicatorSize {
    tab = "{ \"_name\": \"TabBarIndicatorSize.tab\", \"index\": 0 }",
    label = "{ \"_name\": \"TabBarIndicatorSize.label\", \"index\": 1 }"
}
export { TabBarIndicatorSize };
declare class Tab extends StatelessWidget$ {
    text: string;
    child: MXWidget;
    icon: MXWidget;
    iconMargin: EdgeInsetsGeometry;
    constructor(namedParameters?: {
        key?: Key;
        text?: string;
        icon?: MXWidget;
        iconMargin?: EdgeInsetsGeometry;
        child?: MXWidget;
    });
}
export { Tab };
declare class _TabStyle extends AnimatedWidget {
    labelStyle: TextStyle;
    unselectedLabelStyle: TextStyle;
    selected: boolean;
    labelColor: Color;
    unselectedLabelColor: Color;
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        animation?: Animation;
        selected?: boolean;
        labelColor?: Color;
        unselectedLabelColor?: Color;
        labelStyle?: TextStyle;
        unselectedLabelStyle?: TextStyle;
        child?: MXWidget;
    });
}
export { _TabStyle };
declare class _TabLabelBarRenderer extends RenderFlex {
    onPerformLayout: any;
    constructor(namedParameters?: {
        children?: Array<any>;
        direction?: Axis;
        mainAxisSize?: MainAxisSize;
        mainAxisAlignment?: MainAxisAlignment;
        crossAxisAlignment?: CrossAxisAlignment;
        textDirection?: TextDirection;
        verticalDirection?: VerticalDirection;
        onPerformLayout?: any;
    });
}
export { _TabLabelBarRenderer };
declare class _TabLabelBar extends Flex {
    onPerformLayout: any;
    constructor(namedParameters?: {
        key?: Key;
        children?: Array<any>;
        onPerformLayout?: any;
    });
}
export { _TabLabelBar };
declare class _IndicatorPainter extends CustomPainter {
    controller: TabController;
    indicator: Decoration;
    indicatorSize: TabBarIndicatorSize;
    tabKeys: Array<any>;
    currentTabOffsets: Array<any>;
    currentTextDirection: TextDirection;
    currentRect: Rect;
    painter: BoxPainter;
    needsPaint: boolean;
    constructor(namedParameters?: {
        controller?: TabController;
        indicator?: Decoration;
        indicatorSize?: TabBarIndicatorSize;
        tabKeys?: Array<any>;
        old?: _IndicatorPainter;
    });
}
export { _IndicatorPainter };
declare class _ChangeAnimation extends Animation {
    controller: TabController;
    constructor(controller?: TabController);
}
export { _ChangeAnimation };
declare class _DragAnimation extends Animation {
    controller: TabController;
    index: number;
    constructor(controller?: TabController, index?: number);
}
export { _DragAnimation };
declare class _TabBarScrollPosition extends ScrollPositionWithSingleContext {
    tabBar: _TabBarState;
    initialViewportDimensionWasZero: boolean;
    constructor(namedParameters?: {
        physics?: ScrollPhysics;
        context?: ScrollContext;
        oldPosition?: ScrollPosition;
        tabBar?: _TabBarState;
    });
}
export { _TabBarScrollPosition };
declare class _TabBarScrollController extends ScrollController {
    tabBar: _TabBarState;
    constructor(tabBar?: _TabBarState);
}
export { _TabBarScrollController };
declare class TabBar extends StatefulWidget$ {
    tabs: Array<any>;
    controller: TabController;
    isScrollable: boolean;
    indicatorColor: Color;
    indicatorWeight: number;
    indicatorPadding: EdgeInsetsGeometry;
    indicator: Decoration;
    indicatorSize: TabBarIndicatorSize;
    labelColor: Color;
    unselectedLabelColor: Color;
    labelStyle: TextStyle;
    labelPadding: EdgeInsetsGeometry;
    unselectedLabelStyle: TextStyle;
    dragStartBehavior: DragStartBehavior;
    mouseCursor: MouseCursor;
    onTap: any;
    physics: ScrollPhysics;
    constructor(namedParameters?: {
        key?: Key;
        tabs?: Array<any>;
        controller?: TabController;
        isScrollable?: boolean;
        indicatorColor?: Color;
        indicatorWeight?: number;
        indicatorPadding?: EdgeInsetsGeometry;
        indicator?: Decoration;
        indicatorSize?: TabBarIndicatorSize;
        labelColor?: Color;
        labelStyle?: TextStyle;
        labelPadding?: EdgeInsetsGeometry;
        unselectedLabelColor?: Color;
        unselectedLabelStyle?: TextStyle;
        dragStartBehavior?: DragStartBehavior;
        mouseCursor?: MouseCursor;
        onTap?: any;
        physics?: ScrollPhysics;
    });
}
export { TabBar };
declare class _TabBarState extends State$ {
    scrollController: ScrollController;
    controller: TabController;
    indicatorPainter: _IndicatorPainter;
    currentIndex: number;
    tabStripWidth: number;
    tabKeys: Array<any>;
}
export { _TabBarState };
declare class TabBarView extends StatefulWidget$ {
    controller: TabController;
    children: Array<any>;
    physics: ScrollPhysics;
    dragStartBehavior: DragStartBehavior;
    constructor(namedParameters?: {
        key?: Key;
        children?: Array<any>;
        controller?: TabController;
        physics?: ScrollPhysics;
        dragStartBehavior?: DragStartBehavior;
    });
}
export { TabBarView };
declare class _TabBarViewState extends State$ {
    controller: TabController;
    pageController: PageController;
    children: Array<any>;
    childrenWithKey: Array<any>;
    currentIndex: number;
    warpUnderwayCount: number;
}
export { _TabBarViewState };
declare class TabPageSelectorIndicator extends StatelessWidget$ {
    backgroundColor: Color;
    borderColor: Color;
    size: number;
    constructor(namedParameters?: {
        key?: Key;
        backgroundColor?: Color;
        borderColor?: Color;
        size?: number;
    });
}
export { TabPageSelectorIndicator };
declare class TabPageSelector extends StatelessWidget$ {
    controller: TabController;
    indicatorSize: number;
    color: Color;
    selectedColor: Color;
    constructor(namedParameters?: {
        key?: Key;
        controller?: TabController;
        indicatorSize?: number;
        color?: Color;
        selectedColor?: Color;
    });
}
export { TabPageSelector };
