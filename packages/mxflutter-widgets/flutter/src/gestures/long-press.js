"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.LongPressGestureRecognizer = exports.LongPressEndDetails = exports.LongPressMoveUpdateDetails = exports.LongPressStartDetails = void 0;
const recognizer_1 = require("./recognizer");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class LongPressStartDetails extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.globalPosition = namedParameters.globalPosition;
        this.localPosition = namedParameters.localPosition;
        this.className = 'LongPressStartDetails';
    }
}
exports.LongPressStartDetails = LongPressStartDetails;
class LongPressMoveUpdateDetails extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.globalPosition = namedParameters.globalPosition;
        this.localPosition = namedParameters.localPosition;
        this.offsetFromOrigin = namedParameters.offsetFromOrigin;
        this.localOffsetFromOrigin = namedParameters.localOffsetFromOrigin;
        this.className = 'LongPressMoveUpdateDetails';
    }
}
exports.LongPressMoveUpdateDetails = LongPressMoveUpdateDetails;
class LongPressEndDetails extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.globalPosition = namedParameters.globalPosition;
        this.localPosition = namedParameters.localPosition;
        this.velocity = namedParameters.velocity;
        this.className = 'LongPressEndDetails';
    }
}
exports.LongPressEndDetails = LongPressEndDetails;
class LongPressGestureRecognizer extends recognizer_1.PrimaryPointerGestureRecognizer {
    constructor(namedParameters = {}) {
        super();
        this['duration'] = namedParameters.duration;
        this.postAcceptSlopTolerance = namedParameters.postAcceptSlopTolerance;
        this['kind'] = namedParameters.kind;
        this.debugOwner = namedParameters.debugOwner;
        this.className = 'LongPressGestureRecognizer';
    }
}
exports.LongPressGestureRecognizer = LongPressGestureRecognizer;
