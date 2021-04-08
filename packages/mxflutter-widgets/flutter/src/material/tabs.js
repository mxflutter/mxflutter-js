"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabPageSelector = exports.TabPageSelectorIndicator = exports._TabBarViewState = exports.TabBarView = exports._TabBarState = exports.TabBar = exports._TabBarScrollController = exports._TabBarScrollPosition = exports._DragAnimation = exports._ChangeAnimation = exports._IndicatorPainter = exports._TabLabelBar = exports._TabLabelBarRenderer = exports._TabStyle = exports.Tab = exports.TabBarIndicatorSize = void 0;
const scroll_controller_1 = require("../widgets/scroll-controller");
const scroll_position_with_single_context_1 = require("../widgets/scroll-position-with-single-context");
const custom_paint_1 = require("../rendering/custom-paint");
const basic_1 = require("../widgets/basic");
const flex_1 = require("../rendering/flex");
const animation_1 = require("../animation/animation");
const transitions_1 = require("../widgets/transitions");
const framework_1 = require("../widgets/framework");
var TabBarIndicatorSize;
(function (TabBarIndicatorSize) {
    TabBarIndicatorSize["tab"] = "{ \"_name\": \"TabBarIndicatorSize.tab\", \"index\": 0 }";
    TabBarIndicatorSize["label"] = "{ \"_name\": \"TabBarIndicatorSize.label\", \"index\": 1 }";
})(TabBarIndicatorSize || (TabBarIndicatorSize = {}));
exports.TabBarIndicatorSize = TabBarIndicatorSize;
;
class Tab extends framework_1.StatelessWidget {
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
exports.Tab = Tab;
class _TabStyle extends transitions_1.AnimatedWidget {
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
exports._TabStyle = _TabStyle;
class _TabLabelBarRenderer extends flex_1.RenderFlex {
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
exports._TabLabelBarRenderer = _TabLabelBarRenderer;
class _TabLabelBar extends basic_1.Flex {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.children = namedParameters.children;
        this.onPerformLayout = namedParameters.onPerformLayout;
        this.className = '_TabLabelBar';
    }
}
exports._TabLabelBar = _TabLabelBar;
class _IndicatorPainter extends custom_paint_1.CustomPainter {
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
exports._IndicatorPainter = _IndicatorPainter;
class _ChangeAnimation extends animation_1.Animation {
    constructor(controller) {
        super();
        this.controller = controller;
        this.className = '_ChangeAnimation';
    }
}
exports._ChangeAnimation = _ChangeAnimation;
class _DragAnimation extends animation_1.Animation {
    constructor(controller, index) {
        super();
        this.controller = controller;
        this.index = index;
        this.className = '_DragAnimation';
    }
}
exports._DragAnimation = _DragAnimation;
class _TabBarScrollPosition extends scroll_position_with_single_context_1.ScrollPositionWithSingleContext {
    constructor(namedParameters = {}) {
        super();
        this.physics = namedParameters.physics;
        this.context = namedParameters.context;
        this['oldPosition'] = namedParameters.oldPosition;
        this.tabBar = namedParameters.tabBar;
        this.className = '_TabBarScrollPosition';
    }
}
exports._TabBarScrollPosition = _TabBarScrollPosition;
class _TabBarScrollController extends scroll_controller_1.ScrollController {
    constructor(tabBar) {
        super();
        this.tabBar = tabBar;
        this.className = '_TabBarScrollController';
    }
}
exports._TabBarScrollController = _TabBarScrollController;
class TabBar extends framework_1.StatefulWidget {
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
exports.TabBar = TabBar;
class _TabBarState extends framework_1.State {
}
exports._TabBarState = _TabBarState;
class TabBarView extends framework_1.StatefulWidget {
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
exports.TabBarView = TabBarView;
class _TabBarViewState extends framework_1.State {
}
exports._TabBarViewState = _TabBarViewState;
class TabPageSelectorIndicator extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.backgroundColor = namedParameters.backgroundColor;
        this.borderColor = namedParameters.borderColor;
        this.size = namedParameters.size;
        this.className = 'TabPageSelectorIndicator';
    }
}
exports.TabPageSelectorIndicator = TabPageSelectorIndicator;
class TabPageSelector extends framework_1.StatelessWidget {
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
exports.TabPageSelector = TabPageSelector;
