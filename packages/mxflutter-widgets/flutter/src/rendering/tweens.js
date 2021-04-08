"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlignmentGeometryTween = exports.AlignmentTween = exports.FractionalOffsetTween = void 0;
const tween_1 = require("../animation/tween");
class FractionalOffsetTween extends tween_1.Tween {
    constructor(namedParameters = {}) {
        super();
        this['begin'] = namedParameters.begin;
        this['end'] = namedParameters.end;
        this.className = 'FractionalOffsetTween';
    }
}
exports.FractionalOffsetTween = FractionalOffsetTween;
class AlignmentTween extends tween_1.Tween {
    constructor(namedParameters = {}) {
        super();
        this['begin'] = namedParameters.begin;
        this['end'] = namedParameters.end;
        this.className = 'AlignmentTween';
    }
}
exports.AlignmentTween = AlignmentTween;
class AlignmentGeometryTween extends tween_1.Tween {
    constructor(namedParameters = {}) {
        super();
        this['begin'] = namedParameters.begin;
        this['end'] = namedParameters.end;
        this.className = 'AlignmentGeometryTween';
    }
}
exports.AlignmentGeometryTween = AlignmentGeometryTween;
