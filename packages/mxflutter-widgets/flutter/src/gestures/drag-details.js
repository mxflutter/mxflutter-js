"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.DragEndDetails = exports.DragUpdateDetails = exports.DragStartDetails = exports.DragDownDetails = void 0;
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class DragDownDetails extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.globalPosition = namedParameters.globalPosition;
        this.localPosition = namedParameters.localPosition;
        this.className = 'DragDownDetails';
    }
}
exports.DragDownDetails = DragDownDetails;
class DragStartDetails extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.sourceTimeStamp = namedParameters.sourceTimeStamp;
        this.globalPosition = namedParameters.globalPosition;
        this.localPosition = namedParameters.localPosition;
        this.className = 'DragStartDetails';
    }
}
exports.DragStartDetails = DragStartDetails;
class DragUpdateDetails extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.sourceTimeStamp = namedParameters.sourceTimeStamp;
        this.delta = namedParameters.delta;
        this.primaryDelta = namedParameters.primaryDelta;
        this.globalPosition = namedParameters.globalPosition;
        this.localPosition = namedParameters.localPosition;
        this.className = 'DragUpdateDetails';
    }
}
exports.DragUpdateDetails = DragUpdateDetails;
class DragEndDetails extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.velocity = namedParameters.velocity;
        this.primaryVelocity = namedParameters.primaryVelocity;
        this.className = 'DragEndDetails';
    }
}
exports.DragEndDetails = DragEndDetails;
