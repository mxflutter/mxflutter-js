"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.TapGestureRecognizer = exports.BaseTapGestureRecognizer = exports.TapUpDetails = exports.TapDownDetails = void 0;
const recognizer_1 = require("./recognizer");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class TapDownDetails extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.globalPosition = namedParameters.globalPosition;
        this.localPosition = namedParameters.localPosition;
        this.kind = namedParameters.kind;
        this.className = 'TapDownDetails';
    }
}
exports.TapDownDetails = TapDownDetails;
class TapUpDetails extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.kind = namedParameters.kind;
        this.globalPosition = namedParameters.globalPosition;
        this.localPosition = namedParameters.localPosition;
        this.className = 'TapUpDetails';
    }
}
exports.TapUpDetails = TapUpDetails;
class BaseTapGestureRecognizer extends recognizer_1.PrimaryPointerGestureRecognizer {
}
exports.BaseTapGestureRecognizer = BaseTapGestureRecognizer;
class TapGestureRecognizer extends BaseTapGestureRecognizer {
    constructor(namedParameters = {}) {
        super();
        this.debugOwner = namedParameters.debugOwner;
        this.className = 'TapGestureRecognizer';
    }
}
exports.TapGestureRecognizer = TapGestureRecognizer;
