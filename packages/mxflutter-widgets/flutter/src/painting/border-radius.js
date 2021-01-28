//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { MXDartClass } from '@mxflutter/mxflutter-base';
class BorderRadiusGeometry extends MXDartClass {
}
export { BorderRadiusGeometry };
class BorderRadius extends BorderRadiusGeometry {
    static get zero() {
        var jsObj = new BorderRadius();
        jsObj['className'] = 'BorderRadius';
        jsObj['constructorName'] = 'zero';
        return jsObj;
    }
    static all(radius) {
        var jsObj = new BorderRadius();
        jsObj['radius'] = radius;
        jsObj['constructorName'] = 'all';
        return jsObj;
    }
    static circular(radius) {
        var jsObj = new BorderRadius();
        jsObj['radius'] = radius;
        jsObj['constructorName'] = 'circular';
        return jsObj;
    }
    static vertical(namedParameters = {}) {
        var jsObj = new BorderRadius();
        jsObj['top'] = namedParameters.top;
        jsObj['bottom'] = namedParameters.bottom;
        jsObj['constructorName'] = 'vertical';
        return jsObj;
    }
    static horizontal(namedParameters = {}) {
        var jsObj = new BorderRadius();
        jsObj['left'] = namedParameters.left;
        jsObj['right'] = namedParameters.right;
        jsObj['constructorName'] = 'horizontal';
        return jsObj;
    }
    static only(namedParameters = {}) {
        var jsObj = new BorderRadius();
        jsObj.topLeft = namedParameters.topLeft;
        jsObj.topRight = namedParameters.topRight;
        jsObj.bottomLeft = namedParameters.bottomLeft;
        jsObj.bottomRight = namedParameters.bottomRight;
        jsObj['constructorName'] = 'only';
        return jsObj;
    }
}
export { BorderRadius };
class BorderRadiusDirectional extends BorderRadiusGeometry {
    static get zero() {
        var jsObj = new BorderRadiusDirectional();
        jsObj['className'] = 'BorderRadiusDirectional';
        jsObj['constructorName'] = 'zero';
        return jsObj;
    }
    static all(radius) {
        var jsObj = new BorderRadiusDirectional();
        jsObj['radius'] = radius;
        jsObj['constructorName'] = 'all';
        return jsObj;
    }
    static circular(radius) {
        var jsObj = new BorderRadiusDirectional();
        jsObj['radius'] = radius;
        jsObj['constructorName'] = 'circular';
        return jsObj;
    }
    static vertical(namedParameters = {}) {
        var jsObj = new BorderRadiusDirectional();
        jsObj['top'] = namedParameters.top;
        jsObj['bottom'] = namedParameters.bottom;
        jsObj['constructorName'] = 'vertical';
        return jsObj;
    }
    static horizontal(namedParameters = {}) {
        var jsObj = new BorderRadiusDirectional();
        jsObj['start'] = namedParameters.start;
        jsObj['end'] = namedParameters.end;
        jsObj['constructorName'] = 'horizontal';
        return jsObj;
    }
    static only(namedParameters = {}) {
        var jsObj = new BorderRadiusDirectional();
        jsObj.topStart = namedParameters.topStart;
        jsObj.topEnd = namedParameters.topEnd;
        jsObj.bottomStart = namedParameters.bottomStart;
        jsObj.bottomEnd = namedParameters.bottomEnd;
        jsObj['constructorName'] = 'only';
        return jsObj;
    }
}
export { BorderRadiusDirectional };
class _MixedBorderRadius extends BorderRadiusGeometry {
    constructor(_topLeft, _topRight, _bottomLeft, _bottomRight, _topStart, _topEnd, _bottomStart, _bottomEnd) {
        super();
        this.topLeft = _topLeft;
        this.topRight = _topRight;
        this.bottomLeft = _bottomLeft;
        this.bottomRight = _bottomRight;
        this.topStart = _topStart;
        this.topEnd = _topEnd;
        this.bottomStart = _bottomStart;
        this.bottomEnd = _bottomEnd;
        this.className = '_MixedBorderRadius';
    }
}
export { _MixedBorderRadius };
