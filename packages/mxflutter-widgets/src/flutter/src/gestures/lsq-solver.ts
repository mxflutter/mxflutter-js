// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class _Vector extends MXDartClass {
  offset: number;
  length: number;
  elements: Array<any>;
  public constructor(size?: number) {
    super();
    this['size'] = size;
    this.className = '_Vector';
  }
  static fromVOL(values?: Array<any>, offset?: number, length?: number) {
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
  columns: number;
  elements: Array<any>;
  public constructor(rows?: number, cols?: number) {
    super();
    this['rows'] = rows;
    this['cols'] = cols;
    this.className = '_Matrix';
  }
}
export { _Matrix };
class PolynomialFit extends MXDartClass {
  coefficients: Array<any>;
  confidence: number;
  public constructor(degree?: number) {
    super();
    this['degree'] = degree;
    this.className = 'PolynomialFit';
  }
}
export { PolynomialFit };
class LeastSquaresSolver extends MXDartClass {
  x: Array<any>;
  y: Array<any>;
  w: Array<any>;
  public constructor(x?: Array<any>, y?: Array<any>, w?: Array<any>) {
    super();
    this.x = x;
    this.y = y;
    this.w = w;
    this.className = 'LeastSquaresSolver';
  }
}
export { LeastSquaresSolver };
