//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { Tween } from '../animation/tween';
class FractionalOffsetTween extends Tween {
    constructor(namedParameters = {}) {
        super();
        this['begin'] = namedParameters.begin;
        this['end'] = namedParameters.end;
        this.className = 'FractionalOffsetTween';
    }
}
export { FractionalOffsetTween };
class AlignmentTween extends Tween {
    constructor(namedParameters = {}) {
        super();
        this['begin'] = namedParameters.begin;
        this['end'] = namedParameters.end;
        this.className = 'AlignmentTween';
    }
}
export { AlignmentTween };
class AlignmentGeometryTween extends Tween {
    constructor(namedParameters = {}) {
        super();
        this['begin'] = namedParameters.begin;
        this['end'] = namedParameters.end;
        this.className = 'AlignmentGeometryTween';
    }
}
export { AlignmentGeometryTween };
