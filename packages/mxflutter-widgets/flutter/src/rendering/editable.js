"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderEditable = exports.TextSelectionPoint = exports.SelectionChangedCause = void 0;
const box_1 = require("./box");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
var SelectionChangedCause;
(function (SelectionChangedCause) {
    SelectionChangedCause["tap"] = "{ \"_name\": \"SelectionChangedCause.tap\", \"index\": 0 }";
    SelectionChangedCause["doubleTap"] = "{ \"_name\": \"SelectionChangedCause.doubleTap\", \"index\": 1 }";
    SelectionChangedCause["longPress"] = "{ \"_name\": \"SelectionChangedCause.longPress\", \"index\": 2 }";
    SelectionChangedCause["forcePress"] = "{ \"_name\": \"SelectionChangedCause.forcePress\", \"index\": 3 }";
    SelectionChangedCause["keyboard"] = "{ \"_name\": \"SelectionChangedCause.keyboard\", \"index\": 4 }";
    SelectionChangedCause["drag"] = "{ \"_name\": \"SelectionChangedCause.drag\", \"index\": 5 }";
})(SelectionChangedCause || (SelectionChangedCause = {}));
exports.SelectionChangedCause = SelectionChangedCause;
;
class TextSelectionPoint extends mxflutter_base_1.MXDartClass {
    constructor(point, direction) {
        super();
        this.point = point;
        this.direction = direction;
        this.className = 'TextSelectionPoint';
    }
}
exports.TextSelectionPoint = TextSelectionPoint;
class RenderEditable extends box_1.RenderBox {
    constructor(namedParameters = {}) {
        super();
        this['text'] = namedParameters.text;
        this['textDirection'] = namedParameters.textDirection;
        this['textAlign'] = namedParameters.textAlign;
        this.cursorColor = namedParameters.cursorColor;
        this.backgroundCursorColor = namedParameters.backgroundCursorColor;
        this.showCursor = namedParameters.showCursor;
        this.hasFocus = namedParameters.hasFocus;
        this.startHandleLayerLink = namedParameters.startHandleLayerLink;
        this.endHandleLayerLink = namedParameters.endHandleLayerLink;
        this.maxLines = namedParameters.maxLines;
        this.minLines = namedParameters.minLines;
        this.expands = namedParameters.expands;
        this['strutStyle'] = namedParameters.strutStyle;
        this.selectionColor = namedParameters.selectionColor;
        this['textScaleFactor'] = namedParameters.textScaleFactor;
        this.selection = namedParameters.selection;
        this.offset = namedParameters.offset;
        this.onSelectionChanged = namedParameters.onSelectionChanged;
        this.onCaretChanged = namedParameters.onCaretChanged;
        this.ignorePointer = namedParameters.ignorePointer;
        this.readOnly = namedParameters.readOnly;
        this.forceLine = namedParameters.forceLine;
        this['textHeightBehavior'] = namedParameters.textHeightBehavior;
        this['textWidthBasis'] = namedParameters.textWidthBasis;
        this.obscuringCharacter = namedParameters.obscuringCharacter;
        this.obscureText = namedParameters.obscureText;
        this['locale'] = namedParameters.locale;
        this.cursorWidth = namedParameters.cursorWidth;
        this.cursorHeight = namedParameters.cursorHeight;
        this.cursorRadius = namedParameters.cursorRadius;
        this['paintCursorAboveText'] = namedParameters.paintCursorAboveText;
        this.cursorOffset = namedParameters.cursorOffset;
        this.devicePixelRatio = namedParameters.devicePixelRatio;
        this.selectionHeightStyle = namedParameters.selectionHeightStyle;
        this.selectionWidthStyle = namedParameters.selectionWidthStyle;
        this.enableInteractiveSelection = namedParameters.enableInteractiveSelection;
        this.floatingCursorAddedMargin = namedParameters.floatingCursorAddedMargin;
        this.promptRectRange = namedParameters.promptRectRange;
        this['promptRectColor'] = namedParameters.promptRectColor;
        this.clipBehavior = namedParameters.clipBehavior;
        this.textSelectionDelegate = namedParameters.textSelectionDelegate;
        this.className = 'RenderEditable';
    }
}
exports.RenderEditable = RenderEditable;
