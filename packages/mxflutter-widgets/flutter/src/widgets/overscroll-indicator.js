"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.OverscrollIndicatorNotification = exports._GlowingOverscrollIndicatorPainter = exports._GlowController = exports._GlowState = exports._GlowingOverscrollIndicatorState = exports.GlowingOverscrollIndicator = void 0;
const notification_listener_1 = require("./notification-listener");
const custom_paint_1 = require("../rendering/custom-paint");
const change_notifier_1 = require("../foundation/change-notifier");
const framework_1 = require("./framework");
class GlowingOverscrollIndicator extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.showLeading = namedParameters.showLeading;
        this.showTrailing = namedParameters.showTrailing;
        this.axisDirection = namedParameters.axisDirection;
        this.color = namedParameters.color;
        this.notificationPredicate = namedParameters.notificationPredicate;
        this.child = namedParameters.child;
        this.className = 'GlowingOverscrollIndicator';
    }
}
exports.GlowingOverscrollIndicator = GlowingOverscrollIndicator;
class _GlowingOverscrollIndicatorState extends framework_1.State {
}
exports._GlowingOverscrollIndicatorState = _GlowingOverscrollIndicatorState;
var _GlowState;
(function (_GlowState) {
    _GlowState["idle"] = "{ \"_name\": \"_GlowState.idle\", \"index\": 0 }";
    _GlowState["absorb"] = "{ \"_name\": \"_GlowState.absorb\", \"index\": 1 }";
    _GlowState["pull"] = "{ \"_name\": \"_GlowState.pull\", \"index\": 2 }";
    _GlowState["recede"] = "{ \"_name\": \"_GlowState.recede\", \"index\": 3 }";
})(_GlowState || (_GlowState = {}));
exports._GlowState = _GlowState;
;
class _GlowController extends change_notifier_1.ChangeNotifier {
    constructor(namedParameters = {}) {
        super();
        this.color = namedParameters.color;
        this.axis = namedParameters.axis;
        this.className = '_GlowController';
    }
}
exports._GlowController = _GlowController;
class _GlowingOverscrollIndicatorPainter extends custom_paint_1.CustomPainter {
    constructor(namedParameters = {}) {
        super();
        this.leadingController = namedParameters.leadingController;
        this.trailingController = namedParameters.trailingController;
        this.axisDirection = namedParameters.axisDirection;
        this.repaint = namedParameters.repaint;
        this.className = '_GlowingOverscrollIndicatorPainter';
    }
    static get piOver2() {
        return 1.5707963267948966;
    }
}
exports._GlowingOverscrollIndicatorPainter = _GlowingOverscrollIndicatorPainter;
class OverscrollIndicatorNotification extends notification_listener_1.Notification {
    constructor(namedParameters = {}) {
        super();
        this.leading = namedParameters.leading;
        this.className = 'OverscrollIndicatorNotification';
    }
}
exports.OverscrollIndicatorNotification = OverscrollIndicatorNotification;
