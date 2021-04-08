"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScaleGestureRecognizer = exports._LineBetweenPointers = exports.ScaleEndDetails = exports.ScaleUpdateDetails = exports.ScaleStartDetails = exports._ScaleState = void 0;
const recognizer_1 = require("./recognizer");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
var _ScaleState;
(function (_ScaleState) {
    _ScaleState["ready"] = "{ \"_name\": \"_ScaleState.ready\", \"index\": 0 }";
    _ScaleState["possible"] = "{ \"_name\": \"_ScaleState.possible\", \"index\": 1 }";
    _ScaleState["accepted"] = "{ \"_name\": \"_ScaleState.accepted\", \"index\": 2 }";
    _ScaleState["started"] = "{ \"_name\": \"_ScaleState.started\", \"index\": 3 }";
})(_ScaleState || (_ScaleState = {}));
exports._ScaleState = _ScaleState;
;
class ScaleStartDetails extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.focalPoint = namedParameters.focalPoint;
        this.localFocalPoint = namedParameters.localFocalPoint;
        this.className = 'ScaleStartDetails';
    }
}
exports.ScaleStartDetails = ScaleStartDetails;
class ScaleUpdateDetails extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.focalPoint = namedParameters.focalPoint;
        this.localFocalPoint = namedParameters.localFocalPoint;
        this.scale = namedParameters.scale;
        this.horizontalScale = namedParameters.horizontalScale;
        this.verticalScale = namedParameters.verticalScale;
        this.rotation = namedParameters.rotation;
        this.className = 'ScaleUpdateDetails';
    }
}
exports.ScaleUpdateDetails = ScaleUpdateDetails;
class ScaleEndDetails extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.velocity = namedParameters.velocity;
        this.className = 'ScaleEndDetails';
    }
}
exports.ScaleEndDetails = ScaleEndDetails;
class _LineBetweenPointers extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.pointerStartLocation = namedParameters.pointerStartLocation;
        this.pointerStartId = namedParameters.pointerStartId;
        this.pointerEndLocation = namedParameters.pointerEndLocation;
        this.pointerEndId = namedParameters.pointerEndId;
        this.className = '_LineBetweenPointers';
    }
}
exports._LineBetweenPointers = _LineBetweenPointers;
class ScaleGestureRecognizer extends recognizer_1.OneSequenceGestureRecognizer {
    constructor(namedParameters = {}) {
        super();
        this.debugOwner = namedParameters.debugOwner;
        this['kind'] = namedParameters.kind;
        this.className = 'ScaleGestureRecognizer';
    }
}
exports.ScaleGestureRecognizer = ScaleGestureRecognizer;
