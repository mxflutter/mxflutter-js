"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderErrorBox = void 0;
const box_1 = require("./box");
class RenderErrorBox extends box_1.RenderBox {
    constructor(message) {
        super();
        this.message = message;
        this.className = 'RenderErrorBox';
    }
}
exports.RenderErrorBox = RenderErrorBox;
