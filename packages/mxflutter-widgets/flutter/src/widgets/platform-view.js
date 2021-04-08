"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.AndroidViewSurface = exports.PlatformViewSurface = exports._PlatformViewLinkState = exports.PlatformViewLink = exports.PlatformViewCreationParams = exports._UiKitPlatformView = exports._AndroidPlatformView = exports._UiKitViewState = exports._AndroidViewState = exports._HtmlElementViewController = exports.HtmlElementView = exports.UiKitView = exports.AndroidView = void 0;
const platform_views_1 = require("../services/platform-views");
const framework_1 = require("./framework");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class AndroidView extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.viewType = namedParameters.viewType;
        this.onPlatformViewCreated = namedParameters.onPlatformViewCreated;
        this.hitTestBehavior = namedParameters.hitTestBehavior;
        this.layoutDirection = namedParameters.layoutDirection;
        this.gestureRecognizers = namedParameters.gestureRecognizers;
        this.creationParams = namedParameters.creationParams;
        this.creationParamsCodec = namedParameters.creationParamsCodec;
        this.className = 'AndroidView';
    }
}
exports.AndroidView = AndroidView;
class UiKitView extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.viewType = namedParameters.viewType;
        this.onPlatformViewCreated = namedParameters.onPlatformViewCreated;
        this.hitTestBehavior = namedParameters.hitTestBehavior;
        this.layoutDirection = namedParameters.layoutDirection;
        this.creationParams = namedParameters.creationParams;
        this.creationParamsCodec = namedParameters.creationParamsCodec;
        this.gestureRecognizers = namedParameters.gestureRecognizers;
        this.className = 'UiKitView';
    }
}
exports.UiKitView = UiKitView;
class HtmlElementView extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.viewType = namedParameters.viewType;
        this.className = 'HtmlElementView';
    }
}
exports.HtmlElementView = HtmlElementView;
class _HtmlElementViewController extends platform_views_1.PlatformViewController {
    constructor(viewId, viewType) {
        super();
        this.viewId = viewId;
        this.viewType = viewType;
        this.className = '_HtmlElementViewController';
    }
}
exports._HtmlElementViewController = _HtmlElementViewController;
class _AndroidViewState extends framework_1.State {
}
exports._AndroidViewState = _AndroidViewState;
class _UiKitViewState extends framework_1.State {
}
exports._UiKitViewState = _UiKitViewState;
class _AndroidPlatformView extends framework_1.LeafRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.controller = namedParameters.controller;
        this.hitTestBehavior = namedParameters.hitTestBehavior;
        this.gestureRecognizers = namedParameters.gestureRecognizers;
        this.className = '_AndroidPlatformView';
    }
}
exports._AndroidPlatformView = _AndroidPlatformView;
class _UiKitPlatformView extends framework_1.LeafRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.controller = namedParameters.controller;
        this.hitTestBehavior = namedParameters.hitTestBehavior;
        this.gestureRecognizers = namedParameters.gestureRecognizers;
        this.className = '_UiKitPlatformView';
    }
}
exports._UiKitPlatformView = _UiKitPlatformView;
class PlatformViewCreationParams extends mxflutter_base_1.MXDartClass {
}
exports.PlatformViewCreationParams = PlatformViewCreationParams;
class PlatformViewLink extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.surfaceFactory = namedParameters.surfaceFactory;
        this.onCreatePlatformView = namedParameters.onCreatePlatformView;
        this.viewType = namedParameters.viewType;
        this.className = 'PlatformViewLink';
    }
}
exports.PlatformViewLink = PlatformViewLink;
class _PlatformViewLinkState extends framework_1.State {
}
exports._PlatformViewLinkState = _PlatformViewLinkState;
class PlatformViewSurface extends framework_1.LeafRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.controller = namedParameters.controller;
        this.hitTestBehavior = namedParameters.hitTestBehavior;
        this.gestureRecognizers = namedParameters.gestureRecognizers;
        this.className = 'PlatformViewSurface';
    }
}
exports.PlatformViewSurface = PlatformViewSurface;
class AndroidViewSurface extends PlatformViewSurface {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['controller'] = namedParameters.controller;
        this['hitTestBehavior'] = namedParameters.hitTestBehavior;
        this['gestureRecognizers'] = namedParameters.gestureRecognizers;
        this.className = 'AndroidViewSurface';
    }
}
exports.AndroidViewSurface = AndroidViewSurface;
