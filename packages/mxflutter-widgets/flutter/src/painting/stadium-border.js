//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { OutlinedBorder } from './borders';
class StadiumBorder extends OutlinedBorder {
    constructor(namedParameters = {}) {
        super();
        this['side'] = namedParameters.side;
        this.className = 'StadiumBorder';
    }
}
export { StadiumBorder };
class _StadiumToCircleBorder extends OutlinedBorder {
    constructor(namedParameters = {}) {
        super();
        this.side = namedParameters.side;
        this.circleness = namedParameters.circleness;
        this.className = '_StadiumToCircleBorder';
    }
}
export { _StadiumToCircleBorder };
class _StadiumToRoundedRectangleBorder extends OutlinedBorder {
    constructor(namedParameters = {}) {
        super();
        this.side = namedParameters.side;
        this.borderRadius = namedParameters.borderRadius;
        this.rectness = namedParameters.rectness;
        this.className = '_StadiumToRoundedRectangleBorder';
    }
}
export { _StadiumToRoundedRectangleBorder };
