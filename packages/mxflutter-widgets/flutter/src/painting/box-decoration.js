"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._BoxDecorationPainter = exports.BoxDecoration = void 0;
const decoration_1 = require("./decoration");
class BoxDecoration extends decoration_1.Decoration {
    constructor(namedParameters = {}) {
        super();
        this.color = namedParameters.color;
        this.image = namedParameters.image;
        this.border = namedParameters.border;
        this.borderRadius = namedParameters.borderRadius;
        this.boxShadow = namedParameters.boxShadow;
        this.gradient = namedParameters.gradient;
        this.backgroundBlendMode = namedParameters.backgroundBlendMode;
        this.shape = namedParameters.shape;
        this.className = 'BoxDecoration';
    }
}
exports.BoxDecoration = BoxDecoration;
class _BoxDecorationPainter extends decoration_1.BoxPainter {
    constructor(_decoration, onChanged) {
        super();
        this.decoration = _decoration;
        this.onChanged = onChanged;
        this.className = '_BoxDecorationPainter';
    }
}
exports._BoxDecorationPainter = _BoxDecorationPainter;
