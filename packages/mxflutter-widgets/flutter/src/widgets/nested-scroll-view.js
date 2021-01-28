//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { RenderViewport } from '../rendering/viewport';
import { Viewport } from './viewport';
import { RenderSliver } from '../rendering/sliver';
import { ChangeNotifier } from '../foundation/change-notifier';
import { ScrollPosition } from './scroll-position';
import { BallisticScrollActivity } from './scroll-activity';
import { FixedScrollMetrics } from './scroll-metrics';
import { CustomScrollView } from './scroll-view';
import { ScrollController } from './scroll-controller';
import { StatefulWidget$, State$, InheritedWidget, SingleChildRenderObjectWidget, } from './framework';
import { MXDartClass } from '@mxflutter/mxflutter-base';
class NestedScrollView extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.controller = namedParameters.controller;
        this.scrollDirection = namedParameters.scrollDirection;
        this.reverse = namedParameters.reverse;
        this.physics = namedParameters.physics;
        this.headerSliverBuilder = namedParameters.headerSliverBuilder;
        this.body = namedParameters.body;
        this.dragStartBehavior = namedParameters.dragStartBehavior;
        this.floatHeaderSlivers = namedParameters.floatHeaderSlivers;
        this.clipBehavior = namedParameters.clipBehavior;
        this.className = 'NestedScrollView';
        // MX Modified begin
        this['children'] = [];
        // MX Modified end
    }
    // MX modified begin
    preBuild(buildContext) {
        // TODO: innerBoxIsScrolled 暂时不支持，默认为false
        if (this.headerSliverBuilder) {
            this['children'] = this.headerSliverBuilder(buildContext);
            delete this.headerSliverBuilder;
        }
    }
}
export { NestedScrollView };
class NestedScrollViewState extends State$ {
}
export { NestedScrollViewState };
class _NestedScrollViewCustomScrollView extends CustomScrollView {
    constructor(namedParameters = {}) {
        super();
        this.scrollDirection = namedParameters.scrollDirection;
        this.reverse = namedParameters.reverse;
        this.physics = namedParameters.physics;
        this.controller = namedParameters.controller;
        this.slivers = namedParameters.slivers;
        this.handle = namedParameters.handle;
        this.clipBehavior = namedParameters.clipBehavior;
        this.dragStartBehavior = namedParameters.dragStartBehavior;
        this.className = '_NestedScrollViewCustomScrollView';
    }
}
export { _NestedScrollViewCustomScrollView };
class _InheritedNestedScrollView extends InheritedWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.state = namedParameters.state;
        this.child = namedParameters.child;
        this.className = '_InheritedNestedScrollView';
    }
}
export { _InheritedNestedScrollView };
class _NestedScrollMetrics extends FixedScrollMetrics {
    constructor(namedParameters = {}) {
        super();
        this.minScrollExtent = namedParameters.minScrollExtent;
        this.maxScrollExtent = namedParameters.maxScrollExtent;
        this.pixels = namedParameters.pixels;
        this.viewportDimension = namedParameters.viewportDimension;
        this.axisDirection = namedParameters.axisDirection;
        this.minRange = namedParameters.minRange;
        this.maxRange = namedParameters.maxRange;
        this.correctionOffset = namedParameters.correctionOffset;
        this.className = '_NestedScrollMetrics';
    }
}
export { _NestedScrollMetrics };
class _NestedScrollCoordinator extends MXDartClass {
    constructor(_state, _parent, _onHasScrolledBodyChanged, _floatHeaderSlivers) {
        super();
        this.state = _state;
        this.parent = _parent;
        this.onHasScrolledBodyChanged = _onHasScrolledBodyChanged;
        this.floatHeaderSlivers = _floatHeaderSlivers;
        this.className = '_NestedScrollCoordinator';
    }
}
export { _NestedScrollCoordinator };
class _NestedScrollController extends ScrollController {
    constructor(coordinator, namedParameters = {}) {
        super();
        this.coordinator = coordinator;
        this.initialScrollOffset = namedParameters.initialScrollOffset;
        this.debugLabel = namedParameters.debugLabel;
        this.className = '_NestedScrollController';
    }
}
export { _NestedScrollController };
class _NestedScrollPosition extends ScrollPosition {
    constructor(namedParameters = {}) {
        super();
        this.physics = namedParameters.physics;
        this.context = namedParameters.context;
        this['initialPixels'] = namedParameters.initialPixels;
        this['oldPosition'] = namedParameters.oldPosition;
        this.debugLabel = namedParameters.debugLabel;
        this.coordinator = namedParameters.coordinator;
        this.className = '_NestedScrollPosition';
    }
}
export { _NestedScrollPosition };
var _NestedBallisticScrollActivityMode;
(function (_NestedBallisticScrollActivityMode) {
    _NestedBallisticScrollActivityMode["outer"] = "{ \"_name\": \"_NestedBallisticScrollActivityMode.outer\", \"index\": 0 }";
    _NestedBallisticScrollActivityMode["inner"] = "{ \"_name\": \"_NestedBallisticScrollActivityMode.inner\", \"index\": 1 }";
    _NestedBallisticScrollActivityMode["independent"] = "{ \"_name\": \"_NestedBallisticScrollActivityMode.independent\", \"index\": 2 }";
})(_NestedBallisticScrollActivityMode || (_NestedBallisticScrollActivityMode = {}));
export { _NestedBallisticScrollActivityMode };
class _NestedInnerBallisticScrollActivity extends BallisticScrollActivity {
    constructor(coordinator, position, simulation, vsync) {
        super();
        this.coordinator = coordinator;
        this['position'] = position;
        this['simulation'] = simulation;
        this.className = '_NestedInnerBallisticScrollActivity';
    }
}
export { _NestedInnerBallisticScrollActivity };
class _NestedOuterBallisticScrollActivity extends BallisticScrollActivity {
    constructor(coordinator, position, metrics, simulation, vsync) {
        super();
        this.coordinator = coordinator;
        this['position'] = position;
        this.metrics = metrics;
        this['simulation'] = simulation;
        this.className = '_NestedOuterBallisticScrollActivity';
    }
}
export { _NestedOuterBallisticScrollActivity };
class SliverOverlapAbsorberHandle extends ChangeNotifier {
}
export { SliverOverlapAbsorberHandle };
class SliverOverlapAbsorber extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.handle = namedParameters.handle;
        this['sliver'] = namedParameters.sliver;
        this.className = 'SliverOverlapAbsorber';
    }
}
export { SliverOverlapAbsorber };
class RenderSliverOverlapAbsorber extends RenderSliver {
    constructor(namedParameters = {}) {
        super();
        this.handle = namedParameters.handle;
        this['sliver'] = namedParameters.sliver;
        this.className = 'RenderSliverOverlapAbsorber';
    }
}
export { RenderSliverOverlapAbsorber };
class SliverOverlapInjector extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.handle = namedParameters.handle;
        this['sliver'] = namedParameters.sliver;
        this.className = 'SliverOverlapInjector';
    }
}
export { SliverOverlapInjector };
class RenderSliverOverlapInjector extends RenderSliver {
    constructor(namedParameters = {}) {
        super();
        this.handle = namedParameters.handle;
        this.className = 'RenderSliverOverlapInjector';
    }
}
export { RenderSliverOverlapInjector };
class NestedScrollViewViewport extends Viewport {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.axisDirection = namedParameters.axisDirection;
        this.crossAxisDirection = namedParameters.crossAxisDirection;
        this.anchor = namedParameters.anchor;
        this.offset = namedParameters.offset;
        this.center = namedParameters.center;
        this['slivers'] = namedParameters.slivers;
        this.handle = namedParameters.handle;
        this.clipBehavior = namedParameters.clipBehavior;
        this.className = 'NestedScrollViewViewport';
    }
}
export { NestedScrollViewViewport };
class RenderNestedScrollViewViewport extends RenderViewport {
    constructor(namedParameters = {}) {
        super();
        this.axisDirection = namedParameters.axisDirection;
        this.crossAxisDirection = namedParameters.crossAxisDirection;
        this.offset = namedParameters.offset;
        this.anchor = namedParameters.anchor;
        this['children'] = namedParameters.children;
        this.center = namedParameters.center;
        this.handle = namedParameters.handle;
        this.clipBehavior = namedParameters.clipBehavior;
        this.className = 'RenderNestedScrollViewViewport';
    }
}
export { RenderNestedScrollViewViewport };
