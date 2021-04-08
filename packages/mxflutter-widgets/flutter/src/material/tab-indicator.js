"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._UnderlinePainter = exports.UnderlineTabIndicator = void 0;
const decoration_1 = require("../painting/decoration");
class UnderlineTabIndicator extends decoration_1.Decoration {
    constructor(namedParameters = {}) {
        super();
        this.borderSide = namedParameters.borderSide;
        this.insets = namedParameters.insets;
        this.className = 'UnderlineTabIndicator';
    }
}
exports.UnderlineTabIndicator = UnderlineTabIndicator;
class _UnderlinePainter extends decoration_1.BoxPainter {
    constructor(decoration, onChanged) {
        super();
        this.decoration = decoration;
        this.onChanged = onChanged;
        this.className = '_UnderlinePainter';
    }
}
exports._UnderlinePainter = _UnderlinePainter;
