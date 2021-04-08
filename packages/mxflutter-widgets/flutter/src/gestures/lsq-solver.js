"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeastSquaresSolver = exports.PolynomialFit = exports._Matrix = exports._Vector = void 0;
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class _Vector extends mxflutter_base_1.MXDartClass {
    constructor(size) {
        super();
        this['size'] = size;
        this.className = '_Vector';
    }
    static fromVOL(values, offset, length) {
        var jsObj = new _Vector();
        jsObj['values'] = values;
        jsObj.offset = offset;
        jsObj.length = length;
        jsObj['constructorName'] = 'fromVOL';
        return jsObj;
    }
}
exports._Vector = _Vector;
class _Matrix extends mxflutter_base_1.MXDartClass {
    constructor(rows, cols) {
        super();
        this['rows'] = rows;
        this['cols'] = cols;
        this.className = '_Matrix';
    }
}
exports._Matrix = _Matrix;
class PolynomialFit extends mxflutter_base_1.MXDartClass {
    constructor(degree) {
        super();
        this['degree'] = degree;
        this.className = 'PolynomialFit';
    }
}
exports.PolynomialFit = PolynomialFit;
class LeastSquaresSolver extends mxflutter_base_1.MXDartClass {
    constructor(x, y, w) {
        super();
        this.x = x;
        this.y = y;
        this.w = w;
        this.className = 'LeastSquaresSolver';
    }
}
exports.LeastSquaresSolver = LeastSquaresSolver;
