"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextAlignVertical = exports._MixedAlignment = exports.AlignmentDirectional = exports.Alignment = exports.AlignmentGeometry = void 0;
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class AlignmentGeometry extends mxflutter_base_1.MXDartClass {
}
exports.AlignmentGeometry = AlignmentGeometry;
class Alignment extends AlignmentGeometry {
    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
        this.className = 'Alignment';
    }
    static get topLeft() {
        var jsObj = new Alignment();
        jsObj['className'] = 'Alignment';
        jsObj['constructorName'] = 'topLeft';
        return jsObj;
    }
    static get topCenter() {
        var jsObj = new Alignment();
        jsObj['className'] = 'Alignment';
        jsObj['constructorName'] = 'topCenter';
        return jsObj;
    }
    static get topRight() {
        var jsObj = new Alignment();
        jsObj['className'] = 'Alignment';
        jsObj['constructorName'] = 'topRight';
        return jsObj;
    }
    static get centerLeft() {
        var jsObj = new Alignment();
        jsObj['className'] = 'Alignment';
        jsObj['constructorName'] = 'centerLeft';
        return jsObj;
    }
    static get center() {
        var jsObj = new Alignment();
        jsObj['className'] = 'Alignment';
        jsObj['constructorName'] = 'center';
        return jsObj;
    }
    static get centerRight() {
        var jsObj = new Alignment();
        jsObj['className'] = 'Alignment';
        jsObj['constructorName'] = 'centerRight';
        return jsObj;
    }
    static get bottomLeft() {
        var jsObj = new Alignment();
        jsObj['className'] = 'Alignment';
        jsObj['constructorName'] = 'bottomLeft';
        return jsObj;
    }
    static get bottomCenter() {
        var jsObj = new Alignment();
        jsObj['className'] = 'Alignment';
        jsObj['constructorName'] = 'bottomCenter';
        return jsObj;
    }
    static get bottomRight() {
        var jsObj = new Alignment();
        jsObj['className'] = 'Alignment';
        jsObj['constructorName'] = 'bottomRight';
        return jsObj;
    }
}
exports.Alignment = Alignment;
class AlignmentDirectional extends AlignmentGeometry {
    constructor(start, y) {
        super();
        this.start = start;
        this.y = y;
        this.className = 'AlignmentDirectional';
    }
    static get topStart() {
        var jsObj = new AlignmentDirectional();
        jsObj['className'] = 'AlignmentDirectional';
        jsObj['constructorName'] = 'topStart';
        return jsObj;
    }
    static get topCenter() {
        var jsObj = new AlignmentDirectional();
        jsObj['className'] = 'AlignmentDirectional';
        jsObj['constructorName'] = 'topCenter';
        return jsObj;
    }
    static get topEnd() {
        var jsObj = new AlignmentDirectional();
        jsObj['className'] = 'AlignmentDirectional';
        jsObj['constructorName'] = 'topEnd';
        return jsObj;
    }
    static get centerStart() {
        var jsObj = new AlignmentDirectional();
        jsObj['className'] = 'AlignmentDirectional';
        jsObj['constructorName'] = 'centerStart';
        return jsObj;
    }
    static get center() {
        var jsObj = new AlignmentDirectional();
        jsObj['className'] = 'AlignmentDirectional';
        jsObj['constructorName'] = 'center';
        return jsObj;
    }
    static get centerEnd() {
        var jsObj = new AlignmentDirectional();
        jsObj['className'] = 'AlignmentDirectional';
        jsObj['constructorName'] = 'centerEnd';
        return jsObj;
    }
    static get bottomStart() {
        var jsObj = new AlignmentDirectional();
        jsObj['className'] = 'AlignmentDirectional';
        jsObj['constructorName'] = 'bottomStart';
        return jsObj;
    }
    static get bottomCenter() {
        var jsObj = new AlignmentDirectional();
        jsObj['className'] = 'AlignmentDirectional';
        jsObj['constructorName'] = 'bottomCenter';
        return jsObj;
    }
    static get bottomEnd() {
        var jsObj = new AlignmentDirectional();
        jsObj['className'] = 'AlignmentDirectional';
        jsObj['constructorName'] = 'bottomEnd';
        return jsObj;
    }
}
exports.AlignmentDirectional = AlignmentDirectional;
class _MixedAlignment extends AlignmentGeometry {
    constructor(_x, _start, _y) {
        super();
        this.x = _x;
        this.start = _start;
        this.y = _y;
        this.className = '_MixedAlignment';
    }
}
exports._MixedAlignment = _MixedAlignment;
class TextAlignVertical extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.y = namedParameters.y;
        this.className = 'TextAlignVertical';
    }
    static get top() {
        var jsObj = new TextAlignVertical();
        jsObj['className'] = 'TextAlignVertical';
        jsObj['constructorName'] = 'top';
        return jsObj;
    }
    static get center() {
        var jsObj = new TextAlignVertical();
        jsObj['className'] = 'TextAlignVertical';
        jsObj['constructorName'] = 'center';
        return jsObj;
    }
    static get bottom() {
        var jsObj = new TextAlignVertical();
        jsObj['className'] = 'TextAlignVertical';
        jsObj['constructorName'] = 'bottom';
        return jsObj;
    }
}
exports.TextAlignVertical = TextAlignVertical;
