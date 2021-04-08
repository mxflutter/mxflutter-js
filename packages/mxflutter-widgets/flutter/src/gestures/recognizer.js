"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.OffsetPair = exports.PrimaryPointerGestureRecognizer = exports.GestureRecognizerState = exports.OneSequenceGestureRecognizer = exports.GestureRecognizer = exports.DragStartBehavior = void 0;
const arena_1 = require("./arena");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
var DragStartBehavior;
(function (DragStartBehavior) {
    DragStartBehavior["down"] = "{ \"_name\": \"DragStartBehavior.down\", \"index\": 0 }";
    DragStartBehavior["start"] = "{ \"_name\": \"DragStartBehavior.start\", \"index\": 1 }";
})(DragStartBehavior || (DragStartBehavior = {}));
exports.DragStartBehavior = DragStartBehavior;
;
class GestureRecognizer extends arena_1.GestureArenaMember {
}
exports.GestureRecognizer = GestureRecognizer;
class OneSequenceGestureRecognizer extends GestureRecognizer {
}
exports.OneSequenceGestureRecognizer = OneSequenceGestureRecognizer;
var GestureRecognizerState;
(function (GestureRecognizerState) {
    GestureRecognizerState["ready"] = "{ \"_name\": \"GestureRecognizerState.ready\", \"index\": 0 }";
    GestureRecognizerState["possible"] = "{ \"_name\": \"GestureRecognizerState.possible\", \"index\": 1 }";
    GestureRecognizerState["defunct"] = "{ \"_name\": \"GestureRecognizerState.defunct\", \"index\": 2 }";
})(GestureRecognizerState || (GestureRecognizerState = {}));
exports.GestureRecognizerState = GestureRecognizerState;
;
class PrimaryPointerGestureRecognizer extends OneSequenceGestureRecognizer {
}
exports.PrimaryPointerGestureRecognizer = PrimaryPointerGestureRecognizer;
class OffsetPair extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.local = namedParameters.local;
        this.global = namedParameters.global;
        this.className = 'OffsetPair';
    }
    static get zero() {
        var jsObj = new OffsetPair();
        jsObj['className'] = 'OffsetPair';
        jsObj['constructorName'] = 'zero';
        return jsObj;
    }
    static fromEventPosition(event) {
        var jsObj = new OffsetPair();
        jsObj['event'] = event;
        jsObj['constructorName'] = 'fromEventPosition';
        return jsObj;
    }
    static fromEventDelta(event) {
        var jsObj = new OffsetPair();
        jsObj['event'] = event;
        jsObj['constructorName'] = 'fromEventDelta';
        return jsObj;
    }
}
exports.OffsetPair = OffsetPair;
