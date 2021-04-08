"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackingScrollController = exports.ScrollController = void 0;
// MX Modified begin
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
const change_notifier_1 = require("../foundation/change-notifier");
class ScrollController extends change_notifier_1.ChangeNotifier {
    constructor(namedParameters = {}) {
        super();
        this.initialScrollOffset = namedParameters.initialScrollOffset;
        this.keepScrollOffset = namedParameters.keepScrollOffset;
        this.debugLabel = namedParameters.debugLabel;
        this.className = 'ScrollController';
    }
    // MX modified begin
    animateTo(offset, namedParameters = {}) {
        const argument = new mxflutter_base_1.MXMirrorObjMethodCall({
            mirrorID: this.mirrorID,
            className: 'ScrollController',
            funcName: 'animateTo',
            args: {
                offset,
                duration: namedParameters.duration,
                curve: namedParameters.curve,
            },
        });
        this.invokeMirrorObjMethod(argument);
    }
    jumpTo(value) {
        const argument = new mxflutter_base_1.MXMirrorObjMethodCall({
            mirrorID: this.mirrorID,
            className: 'ScrollController',
            funcName: 'jumpTo',
            args: {
                value,
            },
        });
        this.invokeMirrorObjMethod(argument);
    }
}
exports.ScrollController = ScrollController;
class TrackingScrollController extends ScrollController {
    constructor(namedParameters = {}) {
        super();
        this.initialScrollOffset = namedParameters.initialScrollOffset;
        this.keepScrollOffset = namedParameters.keepScrollOffset;
        this.debugLabel = namedParameters.debugLabel;
        this.className = 'TrackingScrollController';
    }
}
exports.TrackingScrollController = TrackingScrollController;
