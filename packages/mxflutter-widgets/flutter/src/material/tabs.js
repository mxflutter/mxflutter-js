//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { ScrollController } from '../widgets/scroll-controller';
import { ScrollPositionWithSingleContext } from '../widgets/scroll-position-with-single-context';
import { CustomPainter } from '../rendering/custom-paint';
import { Flex } from '../widgets/basic';
import { RenderFlex } from '../rendering/flex';
import { Animation } from '../animation/animation';
import { AnimatedWidget } from '../widgets/transitions';
import { StatelessWidget$, StatefulWidget$, State$ } from '../widgets/framework';
var TabBarIndicatorSize;
(function (TabBarIndicatorSize) {
    TabBarIndicatorSize["tab"] = "{ \"_name\": \"TabBarIndicatorSize.tab\", \"index\": 0 }";
    TabBarIndicatorSize["label"] = "{ \"_name\": \"TabBarIndicatorSize.label\", \"index\": 1 }";
})(TabBarIndicatorSize || (TabBarIndicatorSize = {}));
export { TabBarIndicatorSize };
class Tab extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.text = namedParameters.text;
        this.icon = namedParameters.icon;
        this.iconMargin = namedParameters.iconMargin;
        this.child = namedParameters.child;
        this.className = 'Tab';
    }
}
export { Tab };
class _TabStyle extends AnimatedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this['animation'] = namedParameters.animation;
        this.selected = namedParameters.selected;
        this.labelColor = namedParameters.labelColor;
        this.unselectedLabelColor = namedParameters.unselectedLabelColor;
        this.labelStyle = namedParameters.labelStyle;
        this.unselectedLabelStyle = namedParameters.unselectedLabelStyle;
        this.child = namedParameters.child;
        this.className = '_TabStyle';
    }
}
export { _TabStyle };
class _TabLabelBarRenderer extends RenderFlex {
    constructor(namedParameters = {}) {
        super();
        this['children'] = namedParameters.children;
        this.direction = namedParameters.direction;
        this.mainAxisSize = namedParameters.mainAxisSize;
        this.mainAxisAlignment = namedParameters.mainAxisAlignment;
        this.crossAxisAlignment = namedParameters.crossAxisAlignment;
        this.textDirection = namedParameters.textDirection;
        this.verticalDirection = namedParameters.verticalDirection;
        this.onPerformLayout = namedParameters.onPerformLayout;
        this.className = '_TabLabelBarRenderer';
    }
}
export { _TabLabelBarRenderer };
class _TabLabelBar extends Flex {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.children = namedParameters.children;
        this.onPerformLayout = namedParameters.onPerformLayout;
        this.className = '_TabLabelBar';
    }
}
export { _TabLabelBar };
class _IndicatorPainter extends CustomPainter {
    constructor(namedParameters = {}) {
        super();
        this.controller = namedParameters.controller;
        this.indicator = namedParameters.indicator;
        this.indicatorSize = namedParameters.indicatorSize;
        this.tabKeys = namedParameters.tabKeys;
        this['old'] = namedParameters.old;
        this.className = '_IndicatorPainter';
    }
}
export { _IndicatorPainter };
class _ChangeAnimation extends Animation {
    constructor(controller) {
        super();
        this.controller = controller;
        this.className = '_ChangeAnimation';
    }
}
export { _ChangeAnimation };
class _DragAnimation extends Animation {
    constructor(controller, index) {
        super();
        this.controller = controller;
        this.index = index;
        this.className = '_DragAnimation';
    }
}
export { _DragAnimation };
class _TabBarScrollPosition extends ScrollPositionWithSingleContext {
    constructor(namedParameters = {}) {
        super();
        this.physics = namedParameters.physics;
        this.context = namedParameters.context;
        this['oldPosition'] = namedParameters.oldPosition;
        this.tabBar = namedParameters.tabBar;
        this.className = '_TabBarScrollPosition';
    }
}
export { _TabBarScrollPosition };
class _TabBarScrollController extends ScrollController {
    constructor(tabBar) {
        super();
        this.tabBar = tabBar;
        this.className = '_TabBarScrollController';
    }
}
export { _TabBarScrollController };
class TabBar extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.tabs = namedParameters.tabs;
        this.controller = namedParameters.controller;
        this.isScrollable = namedParameters.isScrollable;
        this.indicatorColor = namedParameters.indicatorColor;
        this.indicatorWeight = namedParameters.indicatorWeight;
        this.indicatorPadding = namedParameters.indicatorPadding;
        this.indicator = namedParameters.indicator;
        this.indicatorSize = namedParameters.indicatorSize;
        this.labelColor = namedParameters.labelColor;
        this.labelStyle = namedParameters.labelStyle;
        this.labelPadding = namedParameters.labelPadding;
        this.unselectedLabelColor = namedParameters.unselectedLabelColor;
        this.unselectedLabelStyle = namedParameters.unselectedLabelStyle;
        this.dragStartBehavior = namedParameters.dragStartBehavior;
        this.mouseCursor = namedParameters.mouseCursor;
        this.onTap = namedParameters.onTap;
        this.physics = namedParameters.physics;
        this.className = 'TabBar';
    }
}
export { TabBar };
class _TabBarState extends State$ {
}
export { _TabBarState };
class TabBarView extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.children = namedParameters.children;
        this.controller = namedParameters.controller;
        this.physics = namedParameters.physics;
        this.dragStartBehavior = namedParameters.dragStartBehavior;
        this.className = 'TabBarView';
    }
}
export { TabBarView };
class _TabBarViewState extends State$ {
}
export { _TabBarViewState };
class TabPageSelectorIndicator extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.backgroundColor = namedParameters.backgroundColor;
        this.borderColor = namedParameters.borderColor;
        this.size = namedParameters.size;
        this.className = 'TabPageSelectorIndicator';
    }
}
export { TabPageSelectorIndicator };
class TabPageSelector extends StatelessWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.controller = namedParameters.controller;
        this.indicatorSize = namedParameters.indicatorSize;
        this.color = namedParameters.color;
        this.selectedColor = namedParameters.selectedColor;
        this.className = 'TabPageSelector';
    }
}
export { TabPageSelector };
