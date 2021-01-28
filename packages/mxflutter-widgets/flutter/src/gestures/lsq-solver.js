//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { MXDartClass } from '@mxflutter/mxflutter-base';
class _Vector extends MXDartClass {
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
export { _Vector };
class _Matrix extends MXDartClass {
    constructor(rows, cols) {
        super();
        this['rows'] = rows;
        this['cols'] = cols;
        this.className = '_Matrix';
    }
}
export { _Matrix };
class PolynomialFit extends MXDartClass {
    constructor(degree) {
        super();
        this['degree'] = degree;
        this.className = 'PolynomialFit';
    }
}
export { PolynomialFit };
class LeastSquaresSolver extends MXDartClass {
    constructor(x, y, w) {
        super();
        this.x = x;
        this.y = y;
        this.w = w;
        this.className = 'LeastSquaresSolver';
    }
}
export { LeastSquaresSolver };
