"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._ShapeDecorationPainter = exports.ShapeDecoration = void 0;
const decoration_1 = require("./decoration");
class ShapeDecoration extends decoration_1.Decoration {
    constructor(namedParameters = {}) {
        super();
        this.color = namedParameters.color;
        this.image = namedParameters.image;
        this.gradient = namedParameters.gradient;
        this.shadows = namedParameters.shadows;
        this.shape = namedParameters.shape;
        this.className = 'ShapeDecoration';
    }
    static fromBoxDecoration(source) {
        var jsObj = new ShapeDecoration();
        jsObj['source'] = source;
        jsObj['constructorName'] = 'fromBoxDecoration';
        return jsObj;
    }
}
exports.ShapeDecoration = ShapeDecoration;
class _ShapeDecorationPainter extends decoration_1.BoxPainter {
    constructor(_decoration, onChanged) {
        super();
        this.decoration = _decoration;
        this.onChanged = onChanged;
        this.className = '_ShapeDecorationPainter';
    }
}
exports._ShapeDecorationPainter = _ShapeDecorationPainter;
