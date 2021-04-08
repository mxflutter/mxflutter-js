"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._RenderSingleChildViewport = exports._SingleChildViewport = exports.SingleChildScrollView = void 0;
const box_1 = require("../rendering/box");
const framework_1 = require("./framework");
class SingleChildScrollView extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.scrollDirection = namedParameters.scrollDirection;
        this.reverse = namedParameters.reverse;
        this.padding = namedParameters.padding;
        this.primary = namedParameters.primary;
        this.physics = namedParameters.physics;
        this.controller = namedParameters.controller;
        this.child = namedParameters.child;
        this.dragStartBehavior = namedParameters.dragStartBehavior;
        this.clipBehavior = namedParameters.clipBehavior;
        this.restorationId = namedParameters.restorationId;
        this.className = 'SingleChildScrollView';
    }
}
exports.SingleChildScrollView = SingleChildScrollView;
class _SingleChildViewport extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.axisDirection = namedParameters.axisDirection;
        this.offset = namedParameters.offset;
        this.child = namedParameters.child;
        this.clipBehavior = namedParameters.clipBehavior;
        this.className = '_SingleChildViewport';
    }
}
exports._SingleChildViewport = _SingleChildViewport;
class _RenderSingleChildViewport extends box_1.RenderBox {
    constructor(namedParameters = {}) {
        super();
        this.axisDirection = namedParameters.axisDirection;
        this.offset = namedParameters.offset;
        this.cacheExtent = namedParameters.cacheExtent;
        this['child'] = namedParameters.child;
        this.clipBehavior = namedParameters.clipBehavior;
        this.className = '_RenderSingleChildViewport';
    }
}
exports._RenderSingleChildViewport = _RenderSingleChildViewport;
