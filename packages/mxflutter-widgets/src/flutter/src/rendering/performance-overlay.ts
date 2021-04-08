// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { RenderBox } from './box';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum PerformanceOverlayOption {
  displayRasterizerStatistics = '{ "_name": "PerformanceOverlayOption.displayRasterizerStatistics", "index": 0 }',
  visualizeRasterizerStatistics = '{ "_name": "PerformanceOverlayOption.visualizeRasterizerStatistics", "index": 1 }',
  displayEngineStatistics = '{ "_name": "PerformanceOverlayOption.displayEngineStatistics", "index": 2 }',
  visualizeEngineStatistics = '{ "_name": "PerformanceOverlayOption.visualizeEngineStatistics", "index": 3 }',
};

export { PerformanceOverlayOption };
class RenderPerformanceOverlay extends RenderBox {
  optionsMask: number;
  rasterizerThreshold: number;
  checkerboardRasterCacheImages: boolean;
  checkerboardOffscreenLayers: boolean;
  public constructor(namedParameters: {optionsMask?: number, rasterizerThreshold?: number, checkerboardRasterCacheImages?: boolean, checkerboardOffscreenLayers?: boolean} = {}) {
    super();
    this.optionsMask = namedParameters.optionsMask;
    this.rasterizerThreshold = namedParameters.rasterizerThreshold;
    this.checkerboardRasterCacheImages = namedParameters.checkerboardRasterCacheImages;
    this.checkerboardOffscreenLayers = namedParameters.checkerboardOffscreenLayers;
    this.className = 'RenderPerformanceOverlay';
  }
}
export { RenderPerformanceOverlay };
