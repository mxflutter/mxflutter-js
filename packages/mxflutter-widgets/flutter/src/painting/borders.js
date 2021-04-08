"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._CompoundBorder = exports.OutlinedBorder = exports.ShapeBorder = exports.BorderSide = exports.BorderStyle = void 0;
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
var BorderStyle;
(function (BorderStyle) {
    BorderStyle["none"] = "{ \"_name\": \"BorderStyle.none\", \"index\": 0 }";
    BorderStyle["solid"] = "{ \"_name\": \"BorderStyle.solid\", \"index\": 1 }";
})(BorderStyle || (BorderStyle = {}));
exports.BorderStyle = BorderStyle;
;
class BorderSide extends mxflutter_base_1.MXDartClass {
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
exports.BorderSide = BorderSide;
class ShapeBorder extends mxflutter_base_1.MXDartClass {
}
exports.ShapeBorder = ShapeBorder;
class OutlinedBorder extends ShapeBorder {
}
exports.OutlinedBorder = OutlinedBorder;
class _CompoundBorder extends ShapeBorder {
    constructor(borders) {
        super();
        this.borders = borders;
        this.className = '_CompoundBorder';
    }
}
exports._CompoundBorder = _CompoundBorder;
