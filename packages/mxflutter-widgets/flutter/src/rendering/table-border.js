//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { MXDartClass } from '@mxflutter/mxflutter-base';
class TableBorder extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.top = namedParameters.top;
        this.right = namedParameters.right;
        this.bottom = namedParameters.bottom;
        this.left = namedParameters.left;
        this.horizontalInside = namedParameters.horizontalInside;
        this.verticalInside = namedParameters.verticalInside;
        this.className = 'TableBorder';
    }
    static all(namedParameters = {}) {
        var jsObj = new TableBorder();
        jsObj['color'] = namedParameters.color;
        jsObj['width'] = namedParameters.width;
        jsObj['style'] = namedParameters.style;
        jsObj['constructorName'] = 'all';
        return jsObj;
    }
    static symmetric(namedParameters = {}) {
        var jsObj = new TableBorder();
        jsObj['inside'] = namedParameters.inside;
        jsObj['outside'] = namedParameters.outside;
        jsObj['constructorName'] = 'symmetric';
        return jsObj;
    }
}
export { TableBorder };
