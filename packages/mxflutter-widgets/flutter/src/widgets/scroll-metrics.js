"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixedScrollMetrics = exports.ScrollMetrics = void 0;
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class ScrollMetrics extends mxflutter_base_1.MXDartClass {
}
exports.ScrollMetrics = ScrollMetrics;
class FixedScrollMetrics extends ScrollMetrics {
    constructor(namedParameters = {}) {
        super();
        this.minScrollExtent = namedParameters.minScrollExtent;
        this.maxScrollExtent = namedParameters.maxScrollExtent;
        this.pixels = namedParameters.pixels;
        this.viewportDimension = namedParameters.viewportDimension;
        this.axisDirection = namedParameters.axisDirection;
        this.className = 'FixedScrollMetrics';
    }
}
exports.FixedScrollMetrics = FixedScrollMetrics;
