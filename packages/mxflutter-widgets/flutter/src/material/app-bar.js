"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._RenderAppBarTitleBox = exports._AppBarTitleBox = exports._SliverAppBarState = exports.SliverAppBar = exports._SliverAppBarDelegate = exports._FloatingAppBarState = exports._FloatingAppBar = exports._AppBarState = exports.AppBar = exports._ToolbarContainerLayout = void 0;
const sliver_persistent_header_1 = require("../widgets/sliver-persistent-header");
const framework_1 = require("../widgets/framework");
const shifted_box_1 = require("../rendering/shifted-box");
class _ToolbarContainerLayout extends shifted_box_1.SingleChildLayoutDelegate {
    constructor(toolbarHeight) {
        super();
        this.toolbarHeight = toolbarHeight;
        this.className = '_ToolbarContainerLayout';
    }
}
exports._ToolbarContainerLayout = _ToolbarContainerLayout;
class AppBar extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.leading = namedParameters.leading;
        this.automaticallyImplyLeading = namedParameters.automaticallyImplyLeading;
        this.title = namedParameters.title;
        this.actions = namedParameters.actions;
        this.flexibleSpace = namedParameters.flexibleSpace;
        this.bottom = namedParameters.bottom;
        this.elevation = namedParameters.elevation;
        this.shadowColor = namedParameters.shadowColor;
        this.shape = namedParameters.shape;
        this.backgroundColor = namedParameters.backgroundColor;
        this.brightness = namedParameters.brightness;
        this.iconTheme = namedParameters.iconTheme;
        this.actionsIconTheme = namedParameters.actionsIconTheme;
        this.textTheme = namedParameters.textTheme;
        this.primary = namedParameters.primary;
        this.centerTitle = namedParameters.centerTitle;
        this.excludeHeaderSemantics = namedParameters.excludeHeaderSemantics;
        this.titleSpacing = namedParameters.titleSpacing;
        this.toolbarOpacity = namedParameters.toolbarOpacity;
        this.bottomOpacity = namedParameters.bottomOpacity;
        this.toolbarHeight = namedParameters.toolbarHeight;
        this.leadingWidth = namedParameters.leadingWidth;
        this.className = 'AppBar';
    }
}
exports.AppBar = AppBar;
class _AppBarState extends framework_1.State {
}
exports._AppBarState = _AppBarState;
class _FloatingAppBar extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.className = '_FloatingAppBar';
    }
}
exports._FloatingAppBar = _FloatingAppBar;
class _FloatingAppBarState extends framework_1.State {
}
exports._FloatingAppBarState = _FloatingAppBarState;
class _SliverAppBarDelegate extends sliver_persistent_header_1.SliverPersistentHeaderDelegate {
    constructor(namedParameters = {}) {
        super();
        this.leading = namedParameters.leading;
        this.automaticallyImplyLeading = namedParameters.automaticallyImplyLeading;
        this.title = namedParameters.title;
        this.actions = namedParameters.actions;
        this.flexibleSpace = namedParameters.flexibleSpace;
        this.bottom = namedParameters.bottom;
        this.elevation = namedParameters.elevation;
        this.shadowColor = namedParameters.shadowColor;
        this.forceElevated = namedParameters.forceElevated;
        this.backgroundColor = namedParameters.backgroundColor;
        this.brightness = namedParameters.brightness;
        this.iconTheme = namedParameters.iconTheme;
        this.actionsIconTheme = namedParameters.actionsIconTheme;
        this.textTheme = namedParameters.textTheme;
        this.primary = namedParameters.primary;
        this.centerTitle = namedParameters.centerTitle;
        this.excludeHeaderSemantics = namedParameters.excludeHeaderSemantics;
        this.titleSpacing = namedParameters.titleSpacing;
        this.expandedHeight = namedParameters.expandedHeight;
        this.collapsedHeight = namedParameters.collapsedHeight;
        this.topPadding = namedParameters.topPadding;
        this.floating = namedParameters.floating;
        this.pinned = namedParameters.pinned;
        this.snapConfiguration = namedParameters.snapConfiguration;
        this.stretchConfiguration = namedParameters.stretchConfiguration;
        this.showOnScreenConfiguration = namedParameters.showOnScreenConfiguration;
        this.shape = namedParameters.shape;
        this.toolbarHeight = namedParameters.toolbarHeight;
        this.leadingWidth = namedParameters.leadingWidth;
        this.className = '_SliverAppBarDelegate';
    }
}
exports._SliverAppBarDelegate = _SliverAppBarDelegate;
class SliverAppBar extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.leading = namedParameters.leading;
        this.automaticallyImplyLeading = namedParameters.automaticallyImplyLeading;
        this.title = namedParameters.title;
        this.actions = namedParameters.actions;
        this.flexibleSpace = namedParameters.flexibleSpace;
        this.bottom = namedParameters.bottom;
        this.elevation = namedParameters.elevation;
        this.shadowColor = namedParameters.shadowColor;
        this.forceElevated = namedParameters.forceElevated;
        this.backgroundColor = namedParameters.backgroundColor;
        this.brightness = namedParameters.brightness;
        this.iconTheme = namedParameters.iconTheme;
        this.actionsIconTheme = namedParameters.actionsIconTheme;
        this.textTheme = namedParameters.textTheme;
        this.primary = namedParameters.primary;
        this.centerTitle = namedParameters.centerTitle;
        this.excludeHeaderSemantics = namedParameters.excludeHeaderSemantics;
        this.titleSpacing = namedParameters.titleSpacing;
        this.collapsedHeight = namedParameters.collapsedHeight;
        this.expandedHeight = namedParameters.expandedHeight;
        this.floating = namedParameters.floating;
        this.pinned = namedParameters.pinned;
        this.snap = namedParameters.snap;
        this.stretch = namedParameters.stretch;
        this.stretchTriggerOffset = namedParameters.stretchTriggerOffset;
        this.onStretchTrigger = namedParameters.onStretchTrigger;
        this.shape = namedParameters.shape;
        this.toolbarHeight = namedParameters.toolbarHeight;
        this.leadingWidth = namedParameters.leadingWidth;
        this.className = 'SliverAppBar';
    }
}
exports.SliverAppBar = SliverAppBar;
class _SliverAppBarState extends framework_1.State {
}
exports._SliverAppBarState = _SliverAppBarState;
class _AppBarTitleBox extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['child'] = namedParameters.child;
        this.className = '_AppBarTitleBox';
    }
}
exports._AppBarTitleBox = _AppBarTitleBox;
class _RenderAppBarTitleBox extends shifted_box_1.RenderAligningShiftedBox {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this['textDirection'] = namedParameters.textDirection;
        this.className = '_RenderAppBarTitleBox';
    }
}
exports._RenderAppBarTitleBox = _RenderAppBarTitleBox;
