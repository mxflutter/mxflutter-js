//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
const { MXMirrorWidget, MXLifecycleWidgetBase, MXMirrorObjMethodCall } = require('@mxflutter/mxflutter');
LoadStatus = {
    start: {
        _name: "CrossAxisAlignment.idle",
        index: 0
    },
    end: {
        _name: "CrossAxisAlignment.canLoading",
        index: 1
    },
    center: {
        _name: "CrossAxisAlignment.loading",
        index: 2
    },
    stretch: {
        _name: "CrossAxisAlignment.noMore",
        index: 3
    },
    baseline: {
        _name: "CrossAxisAlignment.failed",
        index: 4
    }
};
class RefreshConfiguration extends MXMirrorWidget {
    constructor({ child, headerBuilder, footerBuilder, dragSpeedRatio, shouldFooterFollowWhenNotFull, enableScrollWhenTwoLevel, enableLoadingWhenNoData, enableBallisticRefresh, springDescription, enableScrollWhenRefreshCompleted, enableLoadingWhenFailed, twiceTriggerDistance, closeTwoLevelDistance, skipCanRefresh, autoLoad, maxOverScrollExtent, enableBallisticLoad, maxUnderScrollExtent, headerTriggerDistance, footerTriggerDistance, hideFooterWhenNotFull, topHitBoundary, bottomHitBoundary, } = {}) {
        super();
        this.child = child;
        this.headerBuilder = headerBuilder;
        this.footerBuilder = footerBuilder;
        this.dragSpeedRatio = dragSpeedRatio;
        this.shouldFooterFollowWhenNotFull = shouldFooterFollowWhenNotFull;
        this.enableScrollWhenTwoLevel = enableScrollWhenTwoLevel;
        this.enableLoadingWhenNoData = enableLoadingWhenNoData;
        this.enableBallisticRefresh = enableBallisticRefresh;
        this.springDescription = springDescription;
        this.enableScrollWhenRefreshCompleted = enableScrollWhenRefreshCompleted;
        this.enableLoadingWhenFailed = enableLoadingWhenFailed;
        this.twiceTriggerDistance = twiceTriggerDistance;
        this.closeTwoLevelDistance = closeTwoLevelDistance;
        this.skipCanRefresh = skipCanRefresh;
        this.autoLoad = autoLoad;
        this.maxOverScrollExtent = maxOverScrollExtent;
        this.enableBallisticLoad = enableBallisticLoad;
        this.maxUnderScrollExtent = maxUnderScrollExtent;
        this.headerTriggerDistance = headerTriggerDistance;
        this.footerTriggerDistance = footerTriggerDistance;
        this.hideFooterWhenNotFull = hideFooterWhenNotFull;
        this.topHitBoundary = topHitBoundary;
        this.bottomHitBoundary = bottomHitBoundary;
    }
    preBuild(buildContext) {
        if (this.headerBuilder) {
            this.headerBuilderChild = this.headerBuilder();
            delete this.headerBuilder;
        }
        if (this.footerBuilder) {
            this.footerBuilderChild = this.footerBuilder();
            delete this.footerBuilder;
        }
    }
}
RefreshConfiguration.new = function (arg) {
    return new RefreshConfiguration(arg);
};
class SmartRefresher extends MXMirrorWidget {
    constructor({ key, controller, child, header, footer, enablePullDown, enablePullUp, enableTwoLevel, onRefresh, onLoading, onTwoLevel, onOffsetChange, dragStartBehavior, primary, cacheExtent, semanticChildCount, reverse, physics, scrollDirection, scrollController, } = {}) {
        super();
        this.key = key;
        this.controller = controller;
        this.child = child;
        this.header = header;
        this.footer = footer;
        this.enablePullDown = enablePullDown;
        this.enablePullUp = enablePullUp;
        this.enableTwoLevel = enableTwoLevel;
        this.onRefresh = onRefresh;
        this.onLoading = onLoading;
        this.onTwoLevel = onTwoLevel;
        this.onOffsetChange = onOffsetChange;
        this.dragStartBehavior = dragStartBehavior;
        this.primary = primary;
        this.cacheExtent = cacheExtent;
        this.semanticChildCount = semanticChildCount;
        this.reverse = reverse;
        this.physics = physics;
        this.scrollDirection = scrollDirection;
        this.scrollController = scrollController;
    }
}
SmartRefresher.new = function (arg) {
    return new SmartRefresher(arg);
};
LoadStyle = {
    ShowAlways: {
        _name: "LoadStyle.ShowAlways",
        index: 0
    },
    HideAlways: {
        _name: "LoadStyle.HideAlways",
        index: 1
    },
    ShowWhenLoading: {
        _name: "LoadStyle.ShowWhenLoading",
        index: 2
    },
};
IconPosition = {
    left: {
        _name: "IconPosition.left",
        index: 0
    },
    right: {
        _name: "IconPosition.right",
        index: 1
    },
    top: {
        _name: "IconPosition.top",
        index: 2
    },
    bottom: {
        _name: "IconPosition.bottom",
        index: 3
    },
};
class RefreshController extends MXLifecycleWidgetBase {
    constructor({ initialRefresh, initialRefreshStatus, initialLoadStatus, } = {}) {
        super();
        this.initialRefresh = initialRefresh;
        this.initialRefreshStatus = initialRefreshStatus;
        this.initialLoadStatus = initialLoadStatus;
    }
    /// request complete,the header will enter complete state,
    ///
    /// resetFooterState : it will set the footer state from noData to idle
    refreshCompleted({ resetFooterState = false } = {}) {
        var argument = new MXMirrorObjMethodCall({
            mirrorID: this.mirrorID,
            className: "RefreshController",
            funcName: "refreshCompleted",
            args: arguments
        });
        this.invokeMirrorObjMethod(argument);
    }
    /// end twoLeveling,will return back first floor
    twoLevelComplete({ duration = new Duration({ milliseconds: 500 }), curve } = {}) {
        var argument = new MXMirrorObjMethodCall({
            mirrorID: this.mirrorID,
            className: "RefreshController",
            funcName: "twoLevelComplete",
            args: arguments
        });
        this.invokeMirrorObjMethod(argument);
    }
    /// request failed,the header display failed state
    refreshFailed() {
        var argument = new MXMirrorObjMethodCall({
            mirrorID: this.mirrorID,
            className: "RefreshController",
            funcName: "refreshFailed",
            args: arguments
        });
        this.invokeMirrorObjMethod(argument);
    }
    /// not show success or failed, it will set header state to idle and spring back at once
    refreshToIdle() {
        var argument = new MXMirrorObjMethodCall({
            mirrorID: this.mirrorID,
            className: "RefreshController",
            funcName: "refreshToIdle",
            args: arguments
        });
        this.invokeMirrorObjMethod(argument);
    }
    loadComplete() {
        var argument = new MXMirrorObjMethodCall({
            mirrorID: this.mirrorID,
            className: "RefreshController",
            funcName: "loadComplete",
            args: {}
        });
        this.invokeMirrorObjMethod(argument);
    }
    loadFailed() {
        var argument = new MXMirrorObjMethodCall({
            mirrorID: this.mirrorID,
            className: "RefreshController",
            funcName: "loadFailed",
            args: {}
        });
        this.invokeMirrorObjMethod(argument);
    }
    loadNoData() {
        var argument = new MXMirrorObjMethodCall({
            mirrorID: this.mirrorID,
            className: "RefreshController",
            funcName: "loadNoData",
            args: {}
        });
        this.invokeMirrorObjMethod(argument);
    }
    resetNoData() {
        var argument = new MXMirrorObjMethodCall({
            mirrorID: this.mirrorID,
            className: "RefreshController",
            funcName: "resetNoData",
            args: {}
        });
        this.invokeMirrorObjMethod(argument);
    }
    dispose() {
        var argument = new MXMirrorObjMethodCall({
            mirrorID: this.mirrorID,
            className: "RefreshController",
            funcName: "dispose",
            args: {}
        });
        this.invokeMirrorObjMethod(argument);
    }
}
RefreshController.new = function (arg) {
    return new RefreshController(arg);
};
RefreshStatus = {
    idle: { _name: "RefreshStatus.idle", index: 0 },
    canRefresh: { _name: "RefreshStatus.canRefresh", index: 1 },
    refreshing: { _name: "RefreshStatus.refreshing", index: 2 },
    completed: { _name: "RefreshStatus.completed", index: 3 },
    failed: { _name: "RefreshStatus.failed", index: 4 },
    canTwoLevel: { _name: "RefreshStatus.canTwoLevel", index: 5 },
    twoLevelOpening: { _name: "RefreshStatus.twoLevelOpening", index: 6 },
    twoLeveling: { _name: "RefreshStatus.twoLeveling", index: 7 },
    twoLevelClosing: { _name: "RefreshStatus.twoLevelClosing", index: 8 },
};
// src__smart_refresher = Object.create(null);
// src__smart_refresher.SmartRefresher = SmartRefresher;
// src__smart_refresher.RefreshConfiguration = RefreshConfiguration;
// src__smart_refresher.RefreshController = RefreshController;
// src__smart_refresher.LoadStatus = LoadStatus;
// src__smart_refresher.LoadStyle = LoadStyle;
// src__smart_refresher.IconPosition = IconPosition;
// src__smart_refresher.RefreshStatus = RefreshStatus;
// exports.src__smart_refresher = src__smart_refresher;
exports.SmartRefresher = SmartRefresher;
exports.RefreshController = RefreshController;
exports.RefreshConfiguration = RefreshConfiguration;
exports.LoadStatus = LoadStatus;
exports.LoadStyle = LoadStyle;
exports.IconPosition = IconPosition;
exports.RefreshStatus = RefreshStatus;
