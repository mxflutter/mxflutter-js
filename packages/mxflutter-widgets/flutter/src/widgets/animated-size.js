"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimatedSize = void 0;
const framework_1 = require("./framework");
class AnimatedSize extends framework_1.SingleChildRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.alignment = namedParameters.alignment;
        this.curve = namedParameters.curve;
        this.duration = namedParameters.duration;
        this.reverseDuration = namedParameters.reverseDuration;
        // MX modified prebuild里处理this.vsync
        this.vsync = namedParameters.vsync;
        this.className = 'AnimatedSize';
    }
}
exports.AnimatedSize = AnimatedSize;
