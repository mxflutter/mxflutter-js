"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.SliverVisibility = exports.Visibility = void 0;
const framework_1 = require("./framework");
class Visibility extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.replacement = namedParameters.replacement;
        this.visible = namedParameters.visible;
        this.maintainState = namedParameters.maintainState;
        this.maintainAnimation = namedParameters.maintainAnimation;
        this.maintainSize = namedParameters.maintainSize;
        this.maintainSemantics = namedParameters.maintainSemantics;
        this.maintainInteractivity = namedParameters.maintainInteractivity;
        this.className = 'Visibility';
    }
}
exports.Visibility = Visibility;
class SliverVisibility extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.sliver = namedParameters.sliver;
        this.replacementSliver = namedParameters.replacementSliver;
        this.visible = namedParameters.visible;
        this.maintainState = namedParameters.maintainState;
        this.maintainAnimation = namedParameters.maintainAnimation;
        this.maintainSize = namedParameters.maintainSize;
        this.maintainSemantics = namedParameters.maintainSemantics;
        this.maintainInteractivity = namedParameters.maintainInteractivity;
        this.className = 'SliverVisibility';
    }
}
exports.SliverVisibility = SliverVisibility;
