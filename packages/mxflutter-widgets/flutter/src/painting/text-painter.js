"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextPainter = exports._CaretMetrics = exports.TextWidthBasis = exports.PlaceholderDimensions = void 0;
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class PlaceholderDimensions extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.size = namedParameters.size;
        this.alignment = namedParameters.alignment;
        this.baseline = namedParameters.baseline;
        this.baselineOffset = namedParameters.baselineOffset;
        this.className = 'PlaceholderDimensions';
    }
    static get empty() {
        var jsObj = new PlaceholderDimensions();
        jsObj['className'] = 'PlaceholderDimensions';
        jsObj['constructorName'] = 'empty';
        return jsObj;
    }
}
exports.PlaceholderDimensions = PlaceholderDimensions;
var TextWidthBasis;
(function (TextWidthBasis) {
    TextWidthBasis["parent"] = "{ \"_name\": \"TextWidthBasis.parent\", \"index\": 0 }";
    TextWidthBasis["longestLine"] = "{ \"_name\": \"TextWidthBasis.longestLine\", \"index\": 1 }";
})(TextWidthBasis || (TextWidthBasis = {}));
exports.TextWidthBasis = TextWidthBasis;
;
class _CaretMetrics extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.offset = namedParameters.offset;
        this.fullHeight = namedParameters.fullHeight;
        this.className = '_CaretMetrics';
    }
}
exports._CaretMetrics = _CaretMetrics;
class TextPainter extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.text = namedParameters.text;
        this.textAlign = namedParameters.textAlign;
        this.textDirection = namedParameters.textDirection;
        this.textScaleFactor = namedParameters.textScaleFactor;
        this.maxLines = namedParameters.maxLines;
        this.ellipsis = namedParameters.ellipsis;
        this.locale = namedParameters.locale;
        this.strutStyle = namedParameters.strutStyle;
        this.textWidthBasis = namedParameters.textWidthBasis;
        this.textHeightBehavior = namedParameters.textHeightBehavior;
        this.className = 'TextPainter';
    }
}
exports.TextPainter = TextPainter;
