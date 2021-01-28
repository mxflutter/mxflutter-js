//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { ScrollPosition } from './scroll-position';
class ScrollPositionWithSingleContext extends ScrollPosition {
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
export { ScrollPositionWithSingleContext };
