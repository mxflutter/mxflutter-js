// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { AxisDirection } from '../painting/basic-types';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class ScrollMetrics extends MXDartClass {}
export { ScrollMetrics };
class FixedScrollMetrics extends ScrollMetrics {
  minScrollExtent: number;
  maxScrollExtent: number;
  pixels: number;
  viewportDimension: number;
  axisDirection: AxisDirection;
  public constructor(namedParameters: {minScrollExtent?: number, maxScrollExtent?: number, pixels?: number, viewportDimension?: number, axisDirection?: AxisDirection} = {}) {
    super();
    this.minScrollExtent = namedParameters.minScrollExtent;
    this.maxScrollExtent = namedParameters.maxScrollExtent;
    this.pixels = namedParameters.pixels;
    this.viewportDimension = namedParameters.viewportDimension;
    this.axisDirection = namedParameters.axisDirection;
    this.className = 'FixedScrollMetrics';
  }
}
export { FixedScrollMetrics };
