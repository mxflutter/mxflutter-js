"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._DualTransitionBuilderState = exports.DualTransitionBuilder = void 0;
const framework_1 = require("./framework");
class DualTransitionBuilder extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.animation = namedParameters.animation;
        this.forwardBuilder = namedParameters.forwardBuilder;
        this.reverseBuilder = namedParameters.reverseBuilder;
        this.child = namedParameters.child;
        this.className = 'DualTransitionBuilder';
    }
}
exports.DualTransitionBuilder = DualTransitionBuilder;
class _DualTransitionBuilderState extends framework_1.State {
}
exports._DualTransitionBuilderState = _DualTransitionBuilderState;
