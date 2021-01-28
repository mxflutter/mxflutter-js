//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { SliverPersistentHeaderDelegate } from '../widgets/sliver-persistent-header';
import { StatefulWidget$, State$, SingleChildRenderObjectWidget } from '../widgets/framework';
import { SingleChildLayoutDelegate, RenderAligningShiftedBox } from '../rendering/shifted-box';
class _ToolbarContainerLayout extends SingleChildLayoutDelegate {
    constructor(toolbarHeight) {
        super();
        this.toolbarHeight = toolbarHeight;
        this.className = '_ToolbarContainerLayout';
    }
}
export { _ToolbarContainerLayout };
class AppBar extends StatefulWidget$ {
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
        this.className = 'AppBar';
    }
}
export { AppBar };
class _AppBarState extends State$ {
}
export { _AppBarState };
class _FloatingAppBar extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.className = '_FloatingAppBar';
    }
}
export { _FloatingAppBar };
class _FloatingAppBarState extends State$ {
}
export { _FloatingAppBarState };
class _SliverAppBarDelegate extends SliverPersistentHeaderDelegate {
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
        this.shape = namedParameters.shape;
        this.toolbarHeight = namedParameters.toolbarHeight;
        this.className = '_SliverAppBarDelegate';
    }
}
export { _SliverAppBarDelegate };
class SliverAppBar extends StatefulWidget$ {
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
        this.className = 'SliverAppBar';
    }
}
export { SliverAppBar };
class _SliverAppBarState extends State$ {
}
export { _SliverAppBarState };
class _AppBarTitleBox extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['child'] = namedParameters.child;
        this.className = '_AppBarTitleBox';
    }
}
export { _AppBarTitleBox };
class _RenderAppBarTitleBox extends RenderAligningShiftedBox {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this['textDirection'] = namedParameters.textDirection;
        this.className = '_RenderAppBarTitleBox';
    }
}
export { _RenderAppBarTitleBox };
