"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Placeholder = exports._PlaceholderPainter = void 0;
const framework_1 = require("./framework");
const custom_paint_1 = require("../rendering/custom-paint");
class _PlaceholderPainter extends custom_paint_1.CustomPainter {
    constructor(namedParameters = {}) {
        super();
        this.color = namedParameters.color;
        this.strokeWidth = namedParameters.strokeWidth;
        this.className = '_PlaceholderPainter';
    }
}
exports._PlaceholderPainter = _PlaceholderPainter;
class Placeholder extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.color = namedParameters.color;
        this.strokeWidth = namedParameters.strokeWidth;
        this.fallbackWidth = namedParameters.fallbackWidth;
        this.fallbackHeight = namedParameters.fallbackHeight;
        this.className = 'Placeholder';
    }
}
exports.Placeholder = Placeholder;
