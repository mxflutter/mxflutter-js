//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { MXDartClass } from '@mxflutter/mxflutter-base';
class CupertinoThumbPainter extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.color = namedParameters.color;
        this.shadows = namedParameters.shadows;
        this.className = 'CupertinoThumbPainter';
    }
    static get radius() {
        return 14.0;
    }
    static get extension() {
        return 7.0;
    }
    static switchThumb(namedParameters = {}) {
        var jsObj = new CupertinoThumbPainter();
        jsObj.color = namedParameters.color;
        jsObj.shadows = namedParameters.shadows;
        jsObj['constructorName'] = 'switchThumb';
        return jsObj;
    }
}
export { CupertinoThumbPainter };
