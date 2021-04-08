"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._ThumbPressGestureRecognizer = exports._CupertinoScrollbarState = exports.CupertinoScrollbar = void 0;
const long_press_1 = require("../gestures/long-press");
const mx_dart_sdk_1 = require("../../../mx-dart-sdk");
const framework_1 = require("../widgets/framework");
class CupertinoScrollbar extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.controller = namedParameters.controller;
        this.isAlwaysShown = namedParameters.isAlwaysShown;
        this.thickness = namedParameters.thickness;
        this.thicknessWhileDragging = namedParameters.thicknessWhileDragging;
        this.radius = namedParameters.radius;
        this.radiusWhileDragging = namedParameters.radiusWhileDragging;
        this.child = namedParameters.child;
        this.className = 'CupertinoScrollbar';
    }
    static get defaultThickness() {
        return 3.0;
    }
    static get defaultThicknessWhileDragging() {
        return 8.0;
    }
    static get defaultRadius() {
        var jsObj = new mx_dart_sdk_1.Radius();
        jsObj['className'] = 'CupertinoScrollbar';
        jsObj['constructorName'] = 'defaultRadius';
        return jsObj;
    }
    static get defaultRadiusWhileDragging() {
        var jsObj = new mx_dart_sdk_1.Radius();
        jsObj['className'] = 'CupertinoScrollbar';
        jsObj['constructorName'] = 'defaultRadiusWhileDragging';
        return jsObj;
    }
}
exports.CupertinoScrollbar = CupertinoScrollbar;
class _CupertinoScrollbarState extends framework_1.State {
}
exports._CupertinoScrollbarState = _CupertinoScrollbarState;
class _ThumbPressGestureRecognizer extends long_press_1.LongPressGestureRecognizer {
    constructor(namedParameters = {}) {
        super();
        this.postAcceptSlopTolerance = namedParameters.postAcceptSlopTolerance;
        this['kind'] = namedParameters.kind;
        this.debugOwner = namedParameters.debugOwner;
        this.customPaintKey = namedParameters.customPaintKey;
        this.className = '_ThumbPressGestureRecognizer';
    }
}
exports._ThumbPressGestureRecognizer = _ThumbPressGestureRecognizer;
