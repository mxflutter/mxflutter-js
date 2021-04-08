"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutlineInputBorder = exports.UnderlineInputBorder = exports._NoInputBorder = exports.InputBorder = void 0;
const borders_1 = require("../painting/borders");
class InputBorder extends borders_1.ShapeBorder {
    static get none() {
        var jsObj = new class MXInputBorder extends InputBorder {
        }();
        jsObj['className'] = 'InputBorder';
        jsObj['constructorName'] = 'none';
        return jsObj;
    }
}
exports.InputBorder = InputBorder;
class _NoInputBorder extends InputBorder {
}
exports._NoInputBorder = _NoInputBorder;
class UnderlineInputBorder extends InputBorder {
    constructor(namedParameters = {}) {
        super();
        this.borderSide = namedParameters.borderSide;
        this.borderRadius = namedParameters.borderRadius;
        this.className = 'UnderlineInputBorder';
    }
}
exports.UnderlineInputBorder = UnderlineInputBorder;
class OutlineInputBorder extends InputBorder {
    constructor(namedParameters = {}) {
        super();
        this.borderSide = namedParameters.borderSide;
        this.borderRadius = namedParameters.borderRadius;
        this.gapPadding = namedParameters.gapPadding;
        this.className = 'OutlineInputBorder';
    }
}
exports.OutlineInputBorder = OutlineInputBorder;
