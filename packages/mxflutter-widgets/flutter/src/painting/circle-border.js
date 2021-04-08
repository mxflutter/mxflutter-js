"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircleBorder = void 0;
const borders_1 = require("./borders");
class CircleBorder extends borders_1.OutlinedBorder {
    constructor(namedParameters = {}) {
        super();
        this['side'] = namedParameters.side;
        this.className = 'CircleBorder';
    }
}
exports.CircleBorder = CircleBorder;
