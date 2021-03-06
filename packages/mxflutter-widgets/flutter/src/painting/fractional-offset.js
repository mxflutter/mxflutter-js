"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.FractionalOffset = void 0;
const alignment_1 = require("./alignment");
class FractionalOffset extends alignment_1.Alignment {
    constructor(dx, dy) {
        super();
        this['dx'] = dx;
        this['dy'] = dy;
        this.className = 'FractionalOffset';
    }
    static get topLeft() {
        var jsObj = new FractionalOffset();
        jsObj['className'] = 'FractionalOffset';
        jsObj['constructorName'] = 'topLeft';
        return jsObj;
    }
    static get topCenter() {
        var jsObj = new FractionalOffset();
        jsObj['className'] = 'FractionalOffset';
        jsObj['constructorName'] = 'topCenter';
        return jsObj;
    }
    static get topRight() {
        var jsObj = new FractionalOffset();
        jsObj['className'] = 'FractionalOffset';
        jsObj['constructorName'] = 'topRight';
        return jsObj;
    }
    static get centerLeft() {
        var jsObj = new FractionalOffset();
        jsObj['className'] = 'FractionalOffset';
        jsObj['constructorName'] = 'centerLeft';
        return jsObj;
    }
    static get center() {
        var jsObj = new FractionalOffset();
        jsObj['className'] = 'FractionalOffset';
        jsObj['constructorName'] = 'center';
        return jsObj;
    }
    static get centerRight() {
        var jsObj = new FractionalOffset();
        jsObj['className'] = 'FractionalOffset';
        jsObj['constructorName'] = 'centerRight';
        return jsObj;
    }
    static get bottomLeft() {
        var jsObj = new FractionalOffset();
        jsObj['className'] = 'FractionalOffset';
        jsObj['constructorName'] = 'bottomLeft';
        return jsObj;
    }
    static get bottomCenter() {
        var jsObj = new FractionalOffset();
        jsObj['className'] = 'FractionalOffset';
        jsObj['constructorName'] = 'bottomCenter';
        return jsObj;
    }
    static get bottomRight() {
        var jsObj = new FractionalOffset();
        jsObj['className'] = 'FractionalOffset';
        jsObj['constructorName'] = 'bottomRight';
        return jsObj;
    }
    static fromOffsetAndSize(offset, size) {
        var jsObj = new FractionalOffset();
        jsObj['offset'] = offset;
        jsObj['size'] = size;
        jsObj['constructorName'] = 'fromOffsetAndSize';
        return jsObj;
    }
    static fromOffsetAndRect(offset, rect) {
        var jsObj = new FractionalOffset();
        jsObj['offset'] = offset;
        jsObj['rect'] = rect;
        jsObj['constructorName'] = 'fromOffsetAndRect';
        return jsObj;
    }
}
exports.FractionalOffset = FractionalOffset;
