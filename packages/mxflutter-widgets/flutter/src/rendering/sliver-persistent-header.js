"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderSliverFloatingPinnedPersistentHeader = exports.RenderSliverFloatingPersistentHeader = exports.FloatingHeaderSnapConfiguration = exports.RenderSliverPinnedPersistentHeader = exports.RenderSliverScrollingPersistentHeader = exports.RenderSliverPersistentHeader = exports.PersistentHeaderShowOnScreenConfiguration = exports.OverScrollHeaderStretchConfiguration = void 0;
const sliver_1 = require("./sliver");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class OverScrollHeaderStretchConfiguration extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.stretchTriggerOffset = namedParameters.stretchTriggerOffset;
        this.onStretchTrigger = namedParameters.onStretchTrigger;
        this.className = 'OverScrollHeaderStretchConfiguration';
    }
}
exports.OverScrollHeaderStretchConfiguration = OverScrollHeaderStretchConfiguration;
class PersistentHeaderShowOnScreenConfiguration extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.minShowOnScreenExtent = namedParameters.minShowOnScreenExtent;
        this.maxShowOnScreenExtent = namedParameters.maxShowOnScreenExtent;
        this.className = 'PersistentHeaderShowOnScreenConfiguration';
    }
}
exports.PersistentHeaderShowOnScreenConfiguration = PersistentHeaderShowOnScreenConfiguration;
class RenderSliverPersistentHeader extends sliver_1.RenderSliver {
}
exports.RenderSliverPersistentHeader = RenderSliverPersistentHeader;
class RenderSliverScrollingPersistentHeader extends RenderSliverPersistentHeader {
}
exports.RenderSliverScrollingPersistentHeader = RenderSliverScrollingPersistentHeader;
class RenderSliverPinnedPersistentHeader extends RenderSliverPersistentHeader {
}
exports.RenderSliverPinnedPersistentHeader = RenderSliverPinnedPersistentHeader;
class FloatingHeaderSnapConfiguration extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.curve = namedParameters.curve;
        this.duration = namedParameters.duration;
        this.className = 'FloatingHeaderSnapConfiguration';
    }
}
exports.FloatingHeaderSnapConfiguration = FloatingHeaderSnapConfiguration;
class RenderSliverFloatingPersistentHeader extends RenderSliverPersistentHeader {
}
exports.RenderSliverFloatingPersistentHeader = RenderSliverFloatingPersistentHeader;
class RenderSliverFloatingPinnedPersistentHeader extends RenderSliverFloatingPersistentHeader {
}
exports.RenderSliverFloatingPinnedPersistentHeader = RenderSliverFloatingPinnedPersistentHeader;
