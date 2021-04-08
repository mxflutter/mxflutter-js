"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._ExpandIconState = exports.ExpandIcon = void 0;
const framework_1 = require("../widgets/framework");
class ExpandIcon extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.isExpanded = namedParameters.isExpanded;
        this.size = namedParameters.size;
        this.onPressed = namedParameters.onPressed;
        this.padding = namedParameters.padding;
        this.color = namedParameters.color;
        this.disabledColor = namedParameters.disabledColor;
        this.expandedColor = namedParameters.expandedColor;
        this.className = 'ExpandIcon';
    }
}
exports.ExpandIcon = ExpandIcon;
class _ExpandIconState extends framework_1.State {
}
exports._ExpandIconState = _ExpandIconState;
