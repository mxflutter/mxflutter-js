//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { MXDartClass } from '@mxflutter/mxflutter-base';
var BorderStyle;
(function (BorderStyle) {
    BorderStyle["none"] = "{ \"_name\": \"BorderStyle.none\", \"index\": 0 }";
    BorderStyle["solid"] = "{ \"_name\": \"BorderStyle.solid\", \"index\": 1 }";
})(BorderStyle || (BorderStyle = {}));
export { BorderStyle };
class BorderSide extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.color = namedParameters.color;
        this.width = namedParameters.width;
        this.style = namedParameters.style;
        this.className = 'BorderSide';
    }
    static get none() {
        var jsObj = new BorderSide();
        jsObj['className'] = 'BorderSide';
        jsObj['constructorName'] = 'none';
        return jsObj;
    }
}
export { BorderSide };
class ShapeBorder extends MXDartClass {
}
export { ShapeBorder };
class OutlinedBorder extends ShapeBorder {
}
export { OutlinedBorder };
class _CompoundBorder extends ShapeBorder {
    constructor(borders) {
        super();
        this.borders = borders;
        this.className = '_CompoundBorder';
    }
}
export { _CompoundBorder };
