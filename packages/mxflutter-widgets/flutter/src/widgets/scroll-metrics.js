//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { MXDartClass } from '@mxflutter/mxflutter-base';
class ScrollMetrics extends MXDartClass {
}
export { ScrollMetrics };
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
export { FixedScrollMetrics };
