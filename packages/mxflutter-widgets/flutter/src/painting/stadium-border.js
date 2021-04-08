"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._StadiumToRoundedRectangleBorder = exports._StadiumToCircleBorder = exports.StadiumBorder = void 0;
const borders_1 = require("./borders");
class StadiumBorder extends borders_1.OutlinedBorder {
    constructor(namedParameters = {}) {
        super();
        this['side'] = namedParameters.side;
        this.className = 'StadiumBorder';
    }
}
exports.StadiumBorder = StadiumBorder;
class _StadiumToCircleBorder extends borders_1.OutlinedBorder {
    constructor(namedParameters = {}) {
        super();
        this.side = namedParameters.side;
        this.circleness = namedParameters.circleness;
        this.className = '_StadiumToCircleBorder';
    }
}
exports._StadiumToCircleBorder = _StadiumToCircleBorder;
class _StadiumToRoundedRectangleBorder extends borders_1.OutlinedBorder {
    constructor(namedParameters = {}) {
        super();
        this.side = namedParameters.side;
        this.borderRadius = namedParameters.borderRadius;
        this.rectness = namedParameters.rectness;
        this.className = '_StadiumToRoundedRectangleBorder';
    }
}
exports._StadiumToRoundedRectangleBorder = _StadiumToRoundedRectangleBorder;
