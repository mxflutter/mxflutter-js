//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { OutlinedBorder } from './borders';
class RoundedRectangleBorder extends OutlinedBorder {
    constructor(namedParameters = {}) {
        super();
        this.side = namedParameters.side;
        this.borderRadius = namedParameters.borderRadius;
        this.className = 'RoundedRectangleBorder';
    }
}
export { RoundedRectangleBorder };
class _RoundedRectangleToCircleBorder extends OutlinedBorder {
    constructor(namedParameters = {}) {
        super();
        this.side = namedParameters.side;
        this.borderRadius = namedParameters.borderRadius;
        this.circleness = namedParameters.circleness;
        this.className = '_RoundedRectangleToCircleBorder';
    }
}
export { _RoundedRectangleToCircleBorder };
