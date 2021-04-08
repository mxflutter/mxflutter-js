"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._RenderSliverFloatingPersistentHeaderForWidgets = exports._SliverFloatingPinnedPersistentHeader = exports._RenderSliverFloatingPinnedPersistentHeaderForWidgets = exports._SliverFloatingPersistentHeader = exports._RenderSliverPinnedPersistentHeaderForWidgets = exports._SliverPinnedPersistentHeader = exports._RenderSliverScrollingPersistentHeaderForWidgets = exports._SliverScrollingPersistentHeader = exports._RenderSliverPersistentHeaderForWidgetsMixin = exports._SliverPersistentHeaderRenderObjectWidget = exports._SliverPersistentHeaderElement = exports.SliverPersistentHeader = exports.SliverPersistentHeaderDelegate = void 0;
const sliver_persistent_header_1 = require("../rendering/sliver-persistent-header");
const framework_1 = require("./framework");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class SliverPersistentHeaderDelegate extends mxflutter_base_1.MXDartClass {
}
exports.SliverPersistentHeaderDelegate = SliverPersistentHeaderDelegate;
class SliverPersistentHeader extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.delegate = namedParameters.delegate;
        this.pinned = namedParameters.pinned;
        this.floating = namedParameters.floating;
        this.className = 'SliverPersistentHeader';
    }
}
exports.SliverPersistentHeader = SliverPersistentHeader;
class _SliverPersistentHeaderElement extends framework_1.RenderObjectElement {
    constructor(widget) {
        super();
        this['mx_widget'] = widget;
        this.className = '_SliverPersistentHeaderElement';
    }
}
exports._SliverPersistentHeaderElement = _SliverPersistentHeaderElement;
class _SliverPersistentHeaderRenderObjectWidget extends framework_1.RenderObjectWidget {
}
exports._SliverPersistentHeaderRenderObjectWidget = _SliverPersistentHeaderRenderObjectWidget;
class _RenderSliverPersistentHeaderForWidgetsMixin extends sliver_persistent_header_1.RenderSliverPersistentHeader {
}
exports._RenderSliverPersistentHeaderForWidgetsMixin = _RenderSliverPersistentHeaderForWidgetsMixin;
class _SliverScrollingPersistentHeader extends _SliverPersistentHeaderRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['delegate'] = namedParameters.delegate;
        this.className = '_SliverScrollingPersistentHeader';
    }
}
exports._SliverScrollingPersistentHeader = _SliverScrollingPersistentHeader;
class _RenderSliverScrollingPersistentHeaderForWidgets extends sliver_persistent_header_1.RenderSliverScrollingPersistentHeader {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this['stretchConfiguration'] = namedParameters.stretchConfiguration;
        this.className = '_RenderSliverScrollingPersistentHeaderForWidgets';
    }
}
exports._RenderSliverScrollingPersistentHeaderForWidgets = _RenderSliverScrollingPersistentHeaderForWidgets;
class _SliverPinnedPersistentHeader extends _SliverPersistentHeaderRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['delegate'] = namedParameters.delegate;
        this.className = '_SliverPinnedPersistentHeader';
    }
}
exports._SliverPinnedPersistentHeader = _SliverPinnedPersistentHeader;
class _RenderSliverPinnedPersistentHeaderForWidgets extends sliver_persistent_header_1.RenderSliverPinnedPersistentHeader {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this['stretchConfiguration'] = namedParameters.stretchConfiguration;
        this['showOnScreenConfiguration'] = namedParameters.showOnScreenConfiguration;
        this.className = '_RenderSliverPinnedPersistentHeaderForWidgets';
    }
}
exports._RenderSliverPinnedPersistentHeaderForWidgets = _RenderSliverPinnedPersistentHeaderForWidgets;
class _SliverFloatingPersistentHeader extends _SliverPersistentHeaderRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['delegate'] = namedParameters.delegate;
        this.className = '_SliverFloatingPersistentHeader';
    }
}
exports._SliverFloatingPersistentHeader = _SliverFloatingPersistentHeader;
class _RenderSliverFloatingPinnedPersistentHeaderForWidgets extends sliver_persistent_header_1.RenderSliverFloatingPinnedPersistentHeader {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this['snapConfiguration'] = namedParameters.snapConfiguration;
        this['stretchConfiguration'] = namedParameters.stretchConfiguration;
        this['showOnScreenConfiguration'] = namedParameters.showOnScreenConfiguration;
        this.className = '_RenderSliverFloatingPinnedPersistentHeaderForWidgets';
    }
}
exports._RenderSliverFloatingPinnedPersistentHeaderForWidgets = _RenderSliverFloatingPinnedPersistentHeaderForWidgets;
class _SliverFloatingPinnedPersistentHeader extends _SliverPersistentHeaderRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['delegate'] = namedParameters.delegate;
        this.className = '_SliverFloatingPinnedPersistentHeader';
    }
}
exports._SliverFloatingPinnedPersistentHeader = _SliverFloatingPinnedPersistentHeader;
class _RenderSliverFloatingPersistentHeaderForWidgets extends sliver_persistent_header_1.RenderSliverFloatingPersistentHeader {
    constructor(namedParameters = {}) {
        super();
        this['child'] = namedParameters.child;
        this['snapConfiguration'] = namedParameters.snapConfiguration;
        this['stretchConfiguration'] = namedParameters.stretchConfiguration;
        this['showOnScreenConfiguration'] = namedParameters.showOnScreenConfiguration;
        this.className = '_RenderSliverFloatingPersistentHeaderForWidgets';
    }
}
exports._RenderSliverFloatingPersistentHeaderForWidgets = _RenderSliverFloatingPersistentHeaderForWidgets;
