"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._LerpShapes = exports._LerpSides = exports._LerpProperties = exports.ButtonStyle = void 0;
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class ButtonStyle extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.textStyle = namedParameters.textStyle;
        this.backgroundColor = namedParameters.backgroundColor;
        this.foregroundColor = namedParameters.foregroundColor;
        this.overlayColor = namedParameters.overlayColor;
        this.shadowColor = namedParameters.shadowColor;
        this.elevation = namedParameters.elevation;
        this.padding = namedParameters.padding;
        this.minimumSize = namedParameters.minimumSize;
        this.side = namedParameters.side;
        this.shape = namedParameters.shape;
        this.mouseCursor = namedParameters.mouseCursor;
        this.visualDensity = namedParameters.visualDensity;
        this.tapTargetSize = namedParameters.tapTargetSize;
        this.animationDuration = namedParameters.animationDuration;
        this.enableFeedback = namedParameters.enableFeedback;
        this.className = 'ButtonStyle';
    }
}
exports.ButtonStyle = ButtonStyle;
class _LerpProperties extends mxflutter_base_1.MXDartClass {
    constructor(a, b, t, lerpFunction) {
        super();
        this.a = a;
        this.b = b;
        this.t = t;
        this.lerpFunction = lerpFunction;
        this.className = '_LerpProperties';
    }
}
exports._LerpProperties = _LerpProperties;
class _LerpSides extends mxflutter_base_1.MXDartClass {
    constructor(a, b, t) {
        super();
        this.a = a;
        this.b = b;
        this.t = t;
        this.className = '_LerpSides';
    }
}
exports._LerpSides = _LerpSides;
class _LerpShapes extends mxflutter_base_1.MXDartClass {
    constructor(a, b, t) {
        super();
        this.a = a;
        this.b = b;
        this.t = t;
        this.className = '_LerpShapes';
    }
}
exports._LerpShapes = _LerpShapes;
