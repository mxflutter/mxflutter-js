"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._DismissibleState = exports._FlingGestureKind = exports._DismissibleClipper = exports.Dismissible = exports.DismissDirection = void 0;
const proxy_box_1 = require("../rendering/proxy-box");
const framework_1 = require("./framework");
var DismissDirection;
(function (DismissDirection) {
    DismissDirection["vertical"] = "{ \"_name\": \"DismissDirection.vertical\", \"index\": 0 }";
    DismissDirection["horizontal"] = "{ \"_name\": \"DismissDirection.horizontal\", \"index\": 1 }";
    DismissDirection["endToStart"] = "{ \"_name\": \"DismissDirection.endToStart\", \"index\": 2 }";
    DismissDirection["startToEnd"] = "{ \"_name\": \"DismissDirection.startToEnd\", \"index\": 3 }";
    DismissDirection["up"] = "{ \"_name\": \"DismissDirection.up\", \"index\": 4 }";
    DismissDirection["down"] = "{ \"_name\": \"DismissDirection.down\", \"index\": 5 }";
})(DismissDirection || (DismissDirection = {}));
exports.DismissDirection = DismissDirection;
;
class Dismissible extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.child = namedParameters.child;
        this.background = namedParameters.background;
        this.secondaryBackground = namedParameters.secondaryBackground;
        this.confirmDismiss = namedParameters.confirmDismiss;
        this.onResize = namedParameters.onResize;
        this.onDismissed = namedParameters.onDismissed;
        this.direction = namedParameters.direction;
        this.resizeDuration = namedParameters.resizeDuration;
        this.dismissThresholds = namedParameters.dismissThresholds;
        this.movementDuration = namedParameters.movementDuration;
        this.crossAxisEndOffset = namedParameters.crossAxisEndOffset;
        this.dragStartBehavior = namedParameters.dragStartBehavior;
        this.className = 'Dismissible';
    }
}
exports.Dismissible = Dismissible;
class _DismissibleClipper extends proxy_box_1.CustomClipper {
    constructor(namedParameters = {}) {
        super();
        this.axis = namedParameters.axis;
        this.moveAnimation = namedParameters.moveAnimation;
        this.className = '_DismissibleClipper';
    }
}
exports._DismissibleClipper = _DismissibleClipper;
var _FlingGestureKind;
(function (_FlingGestureKind) {
    _FlingGestureKind["none"] = "{ \"_name\": \"_FlingGestureKind.none\", \"index\": 0 }";
    _FlingGestureKind["forward"] = "{ \"_name\": \"_FlingGestureKind.forward\", \"index\": 1 }";
    _FlingGestureKind["reverse"] = "{ \"_name\": \"_FlingGestureKind.reverse\", \"index\": 2 }";
})(_FlingGestureKind || (_FlingGestureKind = {}));
exports._FlingGestureKind = _FlingGestureKind;
;
class _DismissibleState extends framework_1.State {
}
exports._DismissibleState = _DismissibleState;
