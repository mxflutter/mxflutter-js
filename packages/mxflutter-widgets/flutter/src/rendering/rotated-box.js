"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderRotatedBox = void 0;
const box_1 = require("./box");
class RenderRotatedBox extends box_1.RenderBox {
    constructor(namedParameters = {}) {
        super();
        this.quarterTurns = namedParameters.quarterTurns;
        this['child'] = namedParameters.child;
        this.className = 'RenderRotatedBox';
    }
}
exports.RenderRotatedBox = RenderRotatedBox;
