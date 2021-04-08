"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._SliverFillRemainingAndOverscroll = exports._SliverFillRemainingWithoutScrollable = exports._SliverFillRemainingWithScrollable = exports.SliverFillRemaining = exports._RenderSliverFractionalPadding = exports._SliverFractionalPadding = exports._SliverFillViewportRenderObjectWidget = exports.SliverFillViewport = void 0;
const sliver_padding_1 = require("../rendering/sliver-padding");
const sliver_1 = require("./sliver");
const framework_1 = require("./framework");
class SliverFillViewport extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.delegate = namedParameters.delegate;
        this.viewportFraction = namedParameters.viewportFraction;
        this.padEnds = namedParameters.padEnds;
        this.className = 'SliverFillViewport';
    }
}
exports.SliverFillViewport = SliverFillViewport;
class _SliverFillViewportRenderObjectWidget extends sliver_1.SliverMultiBoxAdaptorWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.delegate = namedParameters.delegate;
        this.viewportFraction = namedParameters.viewportFraction;
        this.className = '_SliverFillViewportRenderObjectWidget';
    }
}
exports._SliverFillViewportRenderObjectWidget = _SliverFillViewportRenderObjectWidget;
class _SliverFractionalPadding extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.viewportFraction = namedParameters.viewportFraction;
        this['sliver'] = namedParameters.sliver;
        this.className = '_SliverFractionalPadding';
    }
}
exports._SliverFractionalPadding = _SliverFractionalPadding;
class _RenderSliverFractionalPadding extends sliver_padding_1.RenderSliverEdgeInsetsPadding {
    constructor(namedParameters = {}) {
        super();
        this.viewportFraction = namedParameters.viewportFraction;
        this.className = '_RenderSliverFractionalPadding';
    }
}
exports._RenderSliverFractionalPadding = _RenderSliverFractionalPadding;
class SliverFillRemaining extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.hasScrollBody = namedParameters.hasScrollBody;
        this.fillOverscroll = namedParameters.fillOverscroll;
        this.className = 'SliverFillRemaining';
    }
}
exports.SliverFillRemaining = SliverFillRemaining;
class _SliverFillRemainingWithScrollable extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['child'] = namedParameters.child;
        this.className = '_SliverFillRemainingWithScrollable';
    }
}
exports._SliverFillRemainingWithScrollable = _SliverFillRemainingWithScrollable;
class _SliverFillRemainingWithoutScrollable extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['child'] = namedParameters.child;
        this.className = '_SliverFillRemainingWithoutScrollable';
    }
}
exports._SliverFillRemainingWithoutScrollable = _SliverFillRemainingWithoutScrollable;
class _SliverFillRemainingAndOverscroll extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this['key'] = namedParameters.key;
        this['child'] = namedParameters.child;
        this.className = '_SliverFillRemainingAndOverscroll';
    }
}
exports._SliverFillRemainingAndOverscroll = _SliverFillRemainingAndOverscroll;
