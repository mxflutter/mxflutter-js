"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderPerformanceOverlay = exports.PerformanceOverlayOption = void 0;
const box_1 = require("./box");
var PerformanceOverlayOption;
(function (PerformanceOverlayOption) {
    PerformanceOverlayOption["displayRasterizerStatistics"] = "{ \"_name\": \"PerformanceOverlayOption.displayRasterizerStatistics\", \"index\": 0 }";
    PerformanceOverlayOption["visualizeRasterizerStatistics"] = "{ \"_name\": \"PerformanceOverlayOption.visualizeRasterizerStatistics\", \"index\": 1 }";
    PerformanceOverlayOption["displayEngineStatistics"] = "{ \"_name\": \"PerformanceOverlayOption.displayEngineStatistics\", \"index\": 2 }";
    PerformanceOverlayOption["visualizeEngineStatistics"] = "{ \"_name\": \"PerformanceOverlayOption.visualizeEngineStatistics\", \"index\": 3 }";
})(PerformanceOverlayOption || (PerformanceOverlayOption = {}));
exports.PerformanceOverlayOption = PerformanceOverlayOption;
;
class RenderPerformanceOverlay extends box_1.RenderBox {
    constructor(namedParameters = {}) {
        super();
        this.optionsMask = namedParameters.optionsMask;
        this.rasterizerThreshold = namedParameters.rasterizerThreshold;
        this.checkerboardRasterCacheImages = namedParameters.checkerboardRasterCacheImages;
        this.checkerboardOffscreenLayers = namedParameters.checkerboardOffscreenLayers;
        this.className = 'RenderPerformanceOverlay';
    }
}
exports.RenderPerformanceOverlay = RenderPerformanceOverlay;
