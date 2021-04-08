"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.StrutStyle = void 0;
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class StrutStyle extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.fontFamily = namedParameters.fontFamily;
        this.fontFamilyFallback = namedParameters.fontFamilyFallback;
        this.fontSize = namedParameters.fontSize;
        this.height = namedParameters.height;
        this.leading = namedParameters.leading;
        this.fontWeight = namedParameters.fontWeight;
        this.fontStyle = namedParameters.fontStyle;
        this.forceStrutHeight = namedParameters.forceStrutHeight;
        this.debugLabel = namedParameters.debugLabel;
        this.__mx_package = namedParameters.__mx_package;
        this.className = 'StrutStyle';
    }
    static get disabled() {
        var jsObj = new StrutStyle();
        jsObj['className'] = 'StrutStyle';
        jsObj['constructorName'] = 'disabled';
        return jsObj;
    }
    static fromTextStyle(textStyle, namedParameters = {}) {
        var jsObj = new StrutStyle();
        jsObj['textStyle'] = textStyle;
        jsObj.fontFamily = namedParameters.fontFamily;
        jsObj.fontFamilyFallback = namedParameters.fontFamilyFallback;
        jsObj.fontSize = namedParameters.fontSize;
        jsObj.height = namedParameters.height;
        jsObj.leading = namedParameters.leading;
        jsObj.fontWeight = namedParameters.fontWeight;
        jsObj.fontStyle = namedParameters.fontStyle;
        jsObj.forceStrutHeight = namedParameters.forceStrutHeight;
        jsObj.debugLabel = namedParameters.debugLabel;
        jsObj.__mx_package = namedParameters.__mx_package;
        jsObj['constructorName'] = 'fromTextStyle';
        return jsObj;
    }
}
exports.StrutStyle = StrutStyle;
