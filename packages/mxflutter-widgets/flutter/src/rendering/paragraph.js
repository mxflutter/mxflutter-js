"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderParagraph = exports.TextParentData = exports.TextOverflow = void 0;
const box_1 = require("./box");
var TextOverflow;
(function (TextOverflow) {
    TextOverflow["clip"] = "{ \"_name\": \"TextOverflow.clip\", \"index\": 0 }";
    TextOverflow["fade"] = "{ \"_name\": \"TextOverflow.fade\", \"index\": 1 }";
    TextOverflow["ellipsis"] = "{ \"_name\": \"TextOverflow.ellipsis\", \"index\": 2 }";
    TextOverflow["visible"] = "{ \"_name\": \"TextOverflow.visible\", \"index\": 3 }";
})(TextOverflow || (TextOverflow = {}));
exports.TextOverflow = TextOverflow;
;
class TextParentData extends box_1.ContainerBoxParentData {
}
exports.TextParentData = TextParentData;
class RenderParagraph extends box_1.RenderBox {
    constructor(text, namedParameters = {}) {
        super();
        this['text'] = text;
        this['textAlign'] = namedParameters.textAlign;
        this['textDirection'] = namedParameters.textDirection;
        this.softWrap = namedParameters.softWrap;
        this.overflow = namedParameters.overflow;
        this['textScaleFactor'] = namedParameters.textScaleFactor;
        this['maxLines'] = namedParameters.maxLines;
        this['locale'] = namedParameters.locale;
        this['strutStyle'] = namedParameters.strutStyle;
        this['textWidthBasis'] = namedParameters.textWidthBasis;
        this['textHeightBehavior'] = namedParameters.textHeightBehavior;
        this['children'] = namedParameters.children;
        this.className = 'RenderParagraph';
    }
}
exports.RenderParagraph = RenderParagraph;
