"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._FlutterLogoPainter = exports.FlutterLogoDecoration = exports.FlutterLogoStyle = void 0;
const decoration_1 = require("./decoration");
var FlutterLogoStyle;
(function (FlutterLogoStyle) {
    FlutterLogoStyle["markOnly"] = "{ \"_name\": \"FlutterLogoStyle.markOnly\", \"index\": 0 }";
    FlutterLogoStyle["horizontal"] = "{ \"_name\": \"FlutterLogoStyle.horizontal\", \"index\": 1 }";
    FlutterLogoStyle["stacked"] = "{ \"_name\": \"FlutterLogoStyle.stacked\", \"index\": 2 }";
})(FlutterLogoStyle || (FlutterLogoStyle = {}));
exports.FlutterLogoStyle = FlutterLogoStyle;
;
class FlutterLogoDecoration extends decoration_1.Decoration {
    constructor(namedParameters = {}) {
        super();
        this.textColor = namedParameters.textColor;
        this.style = namedParameters.style;
        this.margin = namedParameters.margin;
        this.className = 'FlutterLogoDecoration';
    }
}
exports.FlutterLogoDecoration = FlutterLogoDecoration;
class _FlutterLogoPainter extends decoration_1.BoxPainter {
    constructor(_config) {
        super();
        this.config = _config;
        this.className = '_FlutterLogoPainter';
    }
}
exports._FlutterLogoPainter = _FlutterLogoPainter;
