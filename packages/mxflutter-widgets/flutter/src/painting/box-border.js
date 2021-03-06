"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorderDirectional = exports.Border = exports.BoxBorder = exports.BoxShape = void 0;
const borders_1 = require("./borders");
var BoxShape;
(function (BoxShape) {
    BoxShape["rectangle"] = "{ \"_name\": \"BoxShape.rectangle\", \"index\": 0 }";
    BoxShape["circle"] = "{ \"_name\": \"BoxShape.circle\", \"index\": 1 }";
})(BoxShape || (BoxShape = {}));
exports.BoxShape = BoxShape;
;
class BoxBorder extends borders_1.ShapeBorder {
}
exports.BoxBorder = BoxBorder;
class Border extends BoxBorder {
    constructor(namedParameters = {}) {
        super();
        this.top = namedParameters.top;
        this.right = namedParameters.right;
        this.bottom = namedParameters.bottom;
        this.left = namedParameters.left;
        this.className = 'Border';
    }
    static all(namedParameters = {}) {
        var jsObj = new Border();
        jsObj['color'] = namedParameters.color;
        jsObj['width'] = namedParameters.width;
        jsObj['style'] = namedParameters.style;
        jsObj['constructorName'] = 'all';
        return jsObj;
    }
    static fromBorderSide(side) {
        var jsObj = new Border();
        jsObj['side'] = side;
        jsObj['constructorName'] = 'fromBorderSide';
        return jsObj;
    }
    static symmetric(namedParameters = {}) {
        var jsObj = new Border();
        jsObj['vertical'] = namedParameters.vertical;
        jsObj['horizontal'] = namedParameters.horizontal;
        jsObj['constructorName'] = 'symmetric';
        return jsObj;
    }
}
exports.Border = Border;
class BorderDirectional extends BoxBorder {
    constructor(namedParameters = {}) {
        super();
        this.top = namedParameters.top;
        this.start = namedParameters.start;
        this.end = namedParameters.end;
        this.bottom = namedParameters.bottom;
        this.className = 'BorderDirectional';
    }
}
exports.BorderDirectional = BorderDirectional;
