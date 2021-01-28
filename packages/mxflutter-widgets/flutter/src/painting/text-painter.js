//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { MXDartClass } from '@mxflutter/mxflutter-base';
class PlaceholderDimensions extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.size = namedParameters.size;
        this.alignment = namedParameters.alignment;
        this.baseline = namedParameters.baseline;
        this.baselineOffset = namedParameters.baselineOffset;
        this.className = 'PlaceholderDimensions';
    }
}
export { PlaceholderDimensions };
var TextWidthBasis;
(function (TextWidthBasis) {
    TextWidthBasis["parent"] = "{ \"_name\": \"TextWidthBasis.parent\", \"index\": 0 }";
    TextWidthBasis["longestLine"] = "{ \"_name\": \"TextWidthBasis.longestLine\", \"index\": 1 }";
})(TextWidthBasis || (TextWidthBasis = {}));
export { TextWidthBasis };
class _CaretMetrics extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.offset = namedParameters.offset;
        this.fullHeight = namedParameters.fullHeight;
        this.className = '_CaretMetrics';
    }
}
export { _CaretMetrics };
class TextPainter extends MXDartClass {
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
export { TextPainter };
