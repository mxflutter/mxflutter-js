"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrollbarPainter = void 0;
const change_notifier_1 = require("../foundation/change-notifier");
class ScrollbarPainter extends change_notifier_1.ChangeNotifier {
    constructor(namedParameters = {}) {
        super();
        this.color = namedParameters.color;
        this.textDirection = namedParameters.textDirection;
        this.thickness = namedParameters.thickness;
        this.fadeoutOpacityAnimation = namedParameters.fadeoutOpacityAnimation;
        this.padding = namedParameters.padding;
        this.mainAxisMargin = namedParameters.mainAxisMargin;
        this.crossAxisMargin = namedParameters.crossAxisMargin;
        this.radius = namedParameters.radius;
        this.minLength = namedParameters.minLength;
        this.minOverscrollLength = namedParameters.minOverscrollLength;
        this.className = 'ScrollbarPainter';
    }
}
exports.ScrollbarPainter = ScrollbarPainter;
