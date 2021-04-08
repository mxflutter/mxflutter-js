"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.FontLoader = void 0;
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class FontLoader extends mxflutter_base_1.MXDartClass {
    constructor(family) {
        super();
        this.family = family;
        this.className = 'FontLoader';
    }
}
exports.FontLoader = FontLoader;
