"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppBarTheme = void 0;
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class AppBarTheme extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.brightness = namedParameters.brightness;
        this.color = namedParameters.color;
        this.elevation = namedParameters.elevation;
        this.shadowColor = namedParameters.shadowColor;
        this.iconTheme = namedParameters.iconTheme;
        this.actionsIconTheme = namedParameters.actionsIconTheme;
        this.textTheme = namedParameters.textTheme;
        this.centerTitle = namedParameters.centerTitle;
        this.className = 'AppBarTheme';
    }
}
exports.AppBarTheme = AppBarTheme;
