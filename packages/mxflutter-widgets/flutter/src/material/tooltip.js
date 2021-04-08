"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._TooltipOverlay = exports._TooltipPositionDelegate = exports._TooltipState = exports.Tooltip = void 0;
const shifted_box_1 = require("../rendering/shifted-box");
const framework_1 = require("../widgets/framework");
class Tooltip extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.message = namedParameters.message;
        this.height = namedParameters.height;
        this.padding = namedParameters.padding;
        this.margin = namedParameters.margin;
        this.verticalOffset = namedParameters.verticalOffset;
        this.preferBelow = namedParameters.preferBelow;
        this.excludeFromSemantics = namedParameters.excludeFromSemantics;
        this.decoration = namedParameters.decoration;
        this.textStyle = namedParameters.textStyle;
        this.waitDuration = namedParameters.waitDuration;
        this.showDuration = namedParameters.showDuration;
        this.child = namedParameters.child;
        this.className = 'Tooltip';
    }
}
exports.Tooltip = Tooltip;
class _TooltipState extends framework_1.State {
}
exports._TooltipState = _TooltipState;
class _TooltipPositionDelegate extends shifted_box_1.SingleChildLayoutDelegate {
    constructor(namedParameters = {}) {
        super();
        this.target = namedParameters.target;
        this.verticalOffset = namedParameters.verticalOffset;
        this.preferBelow = namedParameters.preferBelow;
        this.className = '_TooltipPositionDelegate';
    }
}
exports._TooltipPositionDelegate = _TooltipPositionDelegate;
class _TooltipOverlay extends framework_1.StatelessWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.message = namedParameters.message;
        this.height = namedParameters.height;
        this.padding = namedParameters.padding;
        this.margin = namedParameters.margin;
        this.decoration = namedParameters.decoration;
        this.textStyle = namedParameters.textStyle;
        this.animation = namedParameters.animation;
        this.target = namedParameters.target;
        this.verticalOffset = namedParameters.verticalOffset;
        this.preferBelow = namedParameters.preferBelow;
        this.className = '_TooltipOverlay';
    }
}
exports._TooltipOverlay = _TooltipOverlay;
