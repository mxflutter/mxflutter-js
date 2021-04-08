"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForcePressGestureRecognizer = exports.ForcePressDetails = exports._ForceState = void 0;
const recognizer_1 = require("./recognizer");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
var _ForceState;
(function (_ForceState) {
    _ForceState["ready"] = "{ \"_name\": \"_ForceState.ready\", \"index\": 0 }";
    _ForceState["possible"] = "{ \"_name\": \"_ForceState.possible\", \"index\": 1 }";
    _ForceState["accepted"] = "{ \"_name\": \"_ForceState.accepted\", \"index\": 2 }";
    _ForceState["started"] = "{ \"_name\": \"_ForceState.started\", \"index\": 3 }";
    _ForceState["peaked"] = "{ \"_name\": \"_ForceState.peaked\", \"index\": 4 }";
})(_ForceState || (_ForceState = {}));
exports._ForceState = _ForceState;
;
class ForcePressDetails extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.globalPosition = namedParameters.globalPosition;
        this.localPosition = namedParameters.localPosition;
        this.pressure = namedParameters.pressure;
        this.className = 'ForcePressDetails';
    }
}
exports.ForcePressDetails = ForcePressDetails;
class ForcePressGestureRecognizer extends recognizer_1.OneSequenceGestureRecognizer {
    constructor(namedParameters = {}) {
        super();
        this.startPressure = namedParameters.startPressure;
        this.peakPressure = namedParameters.peakPressure;
        this.interpolation = namedParameters.interpolation;
        this.debugOwner = namedParameters.debugOwner;
        this['kind'] = namedParameters.kind;
        this.className = 'ForcePressGestureRecognizer';
    }
}
exports.ForcePressGestureRecognizer = ForcePressGestureRecognizer;
