"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderSliverAnimatedOpacity = exports.RenderSliverOffstage = exports.RenderSliverIgnorePointer = exports.RenderSliverOpacity = exports.RenderProxySliver = void 0;
const sliver_1 = require("./sliver");
class RenderProxySliver extends sliver_1.RenderSliver {
}
exports.RenderProxySliver = RenderProxySliver;
class RenderSliverOpacity extends RenderProxySliver {
    constructor(namedParameters = {}) {
        super();
        this.opacity = namedParameters.opacity;
        this.alwaysIncludeSemantics = namedParameters.alwaysIncludeSemantics;
        this['sliver'] = namedParameters.sliver;
        this.className = 'RenderSliverOpacity';
    }
}
exports.RenderSliverOpacity = RenderSliverOpacity;
class RenderSliverIgnorePointer extends RenderProxySliver {
    constructor(namedParameters = {}) {
        super();
        this['sliver'] = namedParameters.sliver;
        this.ignoring = namedParameters.ignoring;
        this.ignoringSemantics = namedParameters.ignoringSemantics;
        this.className = 'RenderSliverIgnorePointer';
    }
}
exports.RenderSliverIgnorePointer = RenderSliverIgnorePointer;
class RenderSliverOffstage extends RenderProxySliver {
    constructor(namedParameters = {}) {
        super();
        this.offstage = namedParameters.offstage;
        this['sliver'] = namedParameters.sliver;
        this.className = 'RenderSliverOffstage';
    }
}
exports.RenderSliverOffstage = RenderSliverOffstage;
class RenderSliverAnimatedOpacity extends RenderProxySliver {
    constructor(namedParameters = {}) {
        super();
        this['opacity'] = namedParameters.opacity;
        this['alwaysIncludeSemantics'] = namedParameters.alwaysIncludeSemantics;
        this['sliver'] = namedParameters.sliver;
        this.className = 'RenderSliverAnimatedOpacity';
    }
}
exports.RenderSliverAnimatedOpacity = RenderSliverAnimatedOpacity;
