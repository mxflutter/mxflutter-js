//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { LeafRenderObjectWidget } from './framework';
class PerformanceOverlay extends LeafRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.optionsMask = namedParameters.optionsMask;
        this.rasterizerThreshold = namedParameters.rasterizerThreshold;
        this.checkerboardRasterCacheImages = namedParameters.checkerboardRasterCacheImages;
        this.checkerboardOffscreenLayers = namedParameters.checkerboardOffscreenLayers;
        this.className = 'PerformanceOverlay';
    }
    static allEnabled(namedParameters = {}) {
        var jsObj = new PerformanceOverlay();
        jsObj.key = namedParameters.key;
        jsObj.rasterizerThreshold = namedParameters.rasterizerThreshold;
        jsObj.checkerboardRasterCacheImages = namedParameters.checkerboardRasterCacheImages;
        jsObj.checkerboardOffscreenLayers = namedParameters.checkerboardOffscreenLayers;
        jsObj['constructorName'] = 'allEnabled';
        return jsObj;
    }
}
export { PerformanceOverlay };
