//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { RenderSliver } from '../rendering/sliver';
import { SingleChildRenderObjectWidget, StatefulWidget$, State$ } from '../widgets/framework';
class _CupertinoSliverRefresh extends SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.refreshIndicatorLayoutExtent = namedParameters.refreshIndicatorLayoutExtent;
        this.hasLayoutExtent = namedParameters.hasLayoutExtent;
        this.child = namedParameters.child;
        this.className = '_CupertinoSliverRefresh';
    }
}
export { _CupertinoSliverRefresh };
class _RenderCupertinoSliverRefresh extends RenderSliver {
    constructor(namedParameters = {}) {
        super();
        this.refreshIndicatorExtent = namedParameters.refreshIndicatorExtent;
        this.hasLayoutExtent = namedParameters.hasLayoutExtent;
        this['child'] = namedParameters.child;
        this.className = '_RenderCupertinoSliverRefresh';
    }
}
export { _RenderCupertinoSliverRefresh };
var RefreshIndicatorMode;
(function (RefreshIndicatorMode) {
    RefreshIndicatorMode["inactive"] = "{ \"_name\": \"RefreshIndicatorMode.inactive\", \"index\": 0 }";
    RefreshIndicatorMode["drag"] = "{ \"_name\": \"RefreshIndicatorMode.drag\", \"index\": 1 }";
    RefreshIndicatorMode["armed"] = "{ \"_name\": \"RefreshIndicatorMode.armed\", \"index\": 2 }";
    RefreshIndicatorMode["refresh"] = "{ \"_name\": \"RefreshIndicatorMode.refresh\", \"index\": 3 }";
    RefreshIndicatorMode["done"] = "{ \"_name\": \"RefreshIndicatorMode.done\", \"index\": 4 }";
})(RefreshIndicatorMode || (RefreshIndicatorMode = {}));
export { RefreshIndicatorMode };
class CupertinoSliverRefreshControl extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.refreshTriggerPullDistance = namedParameters.refreshTriggerPullDistance;
        this.refreshIndicatorExtent = namedParameters.refreshIndicatorExtent;
        this.builder = namedParameters.builder;
        this.onRefresh = namedParameters.onRefresh;
        this.className = 'CupertinoSliverRefreshControl';
    }
}
export { CupertinoSliverRefreshControl };
class _CupertinoSliverRefreshControlState extends State$ {
}
export { _CupertinoSliverRefreshControlState };
