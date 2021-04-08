"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._CupertinoSliverRefreshControlState = exports.CupertinoSliverRefreshControl = exports.RefreshIndicatorMode = exports._RenderCupertinoSliverRefresh = exports._CupertinoSliverRefresh = void 0;
const sliver_1 = require("../rendering/sliver");
const framework_1 = require("../widgets/framework");
class _CupertinoSliverRefresh extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.refreshIndicatorLayoutExtent = namedParameters.refreshIndicatorLayoutExtent;
        this.hasLayoutExtent = namedParameters.hasLayoutExtent;
        this.child = namedParameters.child;
        this.className = '_CupertinoSliverRefresh';
    }
}
exports._CupertinoSliverRefresh = _CupertinoSliverRefresh;
class _RenderCupertinoSliverRefresh extends sliver_1.RenderSliver {
    constructor(namedParameters = {}) {
        super();
        this.refreshIndicatorExtent = namedParameters.refreshIndicatorExtent;
        this.hasLayoutExtent = namedParameters.hasLayoutExtent;
        this['child'] = namedParameters.child;
        this.className = '_RenderCupertinoSliverRefresh';
    }
}
exports._RenderCupertinoSliverRefresh = _RenderCupertinoSliverRefresh;
var RefreshIndicatorMode;
(function (RefreshIndicatorMode) {
    RefreshIndicatorMode["inactive"] = "{ \"_name\": \"RefreshIndicatorMode.inactive\", \"index\": 0 }";
    RefreshIndicatorMode["drag"] = "{ \"_name\": \"RefreshIndicatorMode.drag\", \"index\": 1 }";
    RefreshIndicatorMode["armed"] = "{ \"_name\": \"RefreshIndicatorMode.armed\", \"index\": 2 }";
    RefreshIndicatorMode["refresh"] = "{ \"_name\": \"RefreshIndicatorMode.refresh\", \"index\": 3 }";
    RefreshIndicatorMode["done"] = "{ \"_name\": \"RefreshIndicatorMode.done\", \"index\": 4 }";
})(RefreshIndicatorMode || (RefreshIndicatorMode = {}));
exports.RefreshIndicatorMode = RefreshIndicatorMode;
;
class CupertinoSliverRefreshControl extends framework_1.StatefulWidget {
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
exports.CupertinoSliverRefreshControl = CupertinoSliverRefreshControl;
class _CupertinoSliverRefreshControlState extends framework_1.State {
}
exports._CupertinoSliverRefreshControlState = _CupertinoSliverRefreshControlState;
