"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._SnackBarState = exports.SnackBar = exports._SnackBarActionState = exports.SnackBarAction = exports.SnackBarClosedReason = void 0;
const framework_1 = require("../widgets/framework");
var SnackBarClosedReason;
(function (SnackBarClosedReason) {
    SnackBarClosedReason["action"] = "{ \"_name\": \"SnackBarClosedReason.action\", \"index\": 0 }";
    SnackBarClosedReason["dismiss"] = "{ \"_name\": \"SnackBarClosedReason.dismiss\", \"index\": 1 }";
    SnackBarClosedReason["swipe"] = "{ \"_name\": \"SnackBarClosedReason.swipe\", \"index\": 2 }";
    SnackBarClosedReason["hide"] = "{ \"_name\": \"SnackBarClosedReason.hide\", \"index\": 3 }";
    SnackBarClosedReason["remove"] = "{ \"_name\": \"SnackBarClosedReason.remove\", \"index\": 4 }";
    SnackBarClosedReason["timeout"] = "{ \"_name\": \"SnackBarClosedReason.timeout\", \"index\": 5 }";
})(SnackBarClosedReason || (SnackBarClosedReason = {}));
exports.SnackBarClosedReason = SnackBarClosedReason;
;
class SnackBarAction extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.textColor = namedParameters.textColor;
        this.disabledTextColor = namedParameters.disabledTextColor;
        this.label = namedParameters.label;
        this.onPressed = namedParameters.onPressed;
        this.className = 'SnackBarAction';
    }
}
exports.SnackBarAction = SnackBarAction;
class _SnackBarActionState extends framework_1.State {
}
exports._SnackBarActionState = _SnackBarActionState;
class SnackBar extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.content = namedParameters.content;
        this.backgroundColor = namedParameters.backgroundColor;
        this.elevation = namedParameters.elevation;
        this.margin = namedParameters.margin;
        this.padding = namedParameters.padding;
        this.width = namedParameters.width;
        this.shape = namedParameters.shape;
        this.behavior = namedParameters.behavior;
        this.action = namedParameters.action;
        this.duration = namedParameters.duration;
        this.animation = namedParameters.animation;
        this.onVisible = namedParameters.onVisible;
        this.className = 'SnackBar';
    }
}
exports.SnackBar = SnackBar;
class _SnackBarState extends framework_1.State {
}
exports._SnackBarState = _SnackBarState;
