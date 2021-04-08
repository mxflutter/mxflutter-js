"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnackBarThemeData = exports.SnackBarBehavior = void 0;
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
var SnackBarBehavior;
(function (SnackBarBehavior) {
    SnackBarBehavior["fixed"] = "{ \"_name\": \"SnackBarBehavior.fixed\", \"index\": 0 }";
    SnackBarBehavior["floating"] = "{ \"_name\": \"SnackBarBehavior.floating\", \"index\": 1 }";
})(SnackBarBehavior || (SnackBarBehavior = {}));
exports.SnackBarBehavior = SnackBarBehavior;
;
class SnackBarThemeData extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.backgroundColor = namedParameters.backgroundColor;
        this.actionTextColor = namedParameters.actionTextColor;
        this.disabledActionTextColor = namedParameters.disabledActionTextColor;
        this.contentTextStyle = namedParameters.contentTextStyle;
        this.elevation = namedParameters.elevation;
        this.shape = namedParameters.shape;
        this.behavior = namedParameters.behavior;
        this.className = 'SnackBarThemeData';
    }
}
exports.SnackBarThemeData = SnackBarThemeData;
