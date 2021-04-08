"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrollPositionWithSingleContext = void 0;
const scroll_position_1 = require("./scroll-position");
class ScrollPositionWithSingleContext extends scroll_position_1.ScrollPosition {
    constructor(namedParameters = {}) {
        super();
        this.physics = namedParameters.physics;
        this.context = namedParameters.context;
        this['initialPixels'] = namedParameters.initialPixels;
        this.keepScrollOffset = namedParameters.keepScrollOffset;
        this['oldPosition'] = namedParameters.oldPosition;
        this.debugLabel = namedParameters.debugLabel;
        this.className = 'ScrollPositionWithSingleContext';
    }
}
exports.ScrollPositionWithSingleContext = ScrollPositionWithSingleContext;
