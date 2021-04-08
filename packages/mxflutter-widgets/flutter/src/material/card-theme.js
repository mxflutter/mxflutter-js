"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardTheme = void 0;
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class CardTheme extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.clipBehavior = namedParameters.clipBehavior;
        this.color = namedParameters.color;
        this.shadowColor = namedParameters.shadowColor;
        this.elevation = namedParameters.elevation;
        this.margin = namedParameters.margin;
        this.shape = namedParameters.shape;
        this.className = 'CardTheme';
    }
}
exports.CardTheme = CardTheme;
