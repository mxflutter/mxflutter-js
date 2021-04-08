"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._SelectableTextState = exports.SelectableText = exports._SelectableTextSelectionGestureDetectorBuilder = exports._TextSpanEditingController = void 0;
const framework_1 = require("../widgets/framework");
const text_selection_1 = require("../widgets/text-selection");
const editable_text_1 = require("../widgets/editable-text");
class _TextSpanEditingController extends editable_text_1.TextEditingController {
    constructor(namedParameters = {}) {
        super();
        this.textSpan = namedParameters.textSpan;
        this.className = '_TextSpanEditingController';
    }
}
exports._TextSpanEditingController = _TextSpanEditingController;
class _SelectableTextSelectionGestureDetectorBuilder extends text_selection_1.TextSelectionGestureDetectorBuilder {
    constructor(namedParameters = {}) {
        super();
        this.state = namedParameters.state;
        this.className = '_SelectableTextSelectionGestureDetectorBuilder';
    }
}
exports._SelectableTextSelectionGestureDetectorBuilder = _SelectableTextSelectionGestureDetectorBuilder;
class SelectableText extends framework_1.StatefulWidget {
    constructor(data, namedParameters = {}) {
        super();
        this.data = data;
        this.key = namedParameters.key;
        this.focusNode = namedParameters.focusNode;
        this.style = namedParameters.style;
        this.strutStyle = namedParameters.strutStyle;
        this.textAlign = namedParameters.textAlign;
        this.textDirection = namedParameters.textDirection;
        this.textScaleFactor = namedParameters.textScaleFactor;
        this.showCursor = namedParameters.showCursor;
        this.autofocus = namedParameters.autofocus;
        this.toolbarOptions = namedParameters.toolbarOptions;
        this.minLines = namedParameters.minLines;
        this.maxLines = namedParameters.maxLines;
        this.cursorWidth = namedParameters.cursorWidth;
        this.cursorHeight = namedParameters.cursorHeight;
        this.cursorRadius = namedParameters.cursorRadius;
        this.cursorColor = namedParameters.cursorColor;
        this.dragStartBehavior = namedParameters.dragStartBehavior;
        this.enableInteractiveSelection = namedParameters.enableInteractiveSelection;
        this.onTap = namedParameters.onTap;
        this.scrollPhysics = namedParameters.scrollPhysics;
        this.textHeightBehavior = namedParameters.textHeightBehavior;
        this.textWidthBasis = namedParameters.textWidthBasis;
        this.className = 'SelectableText';
    }
    static rich(textSpan, namedParameters = {}) {
        var jsObj = new SelectableText();
        jsObj.textSpan = textSpan;
        jsObj.key = namedParameters.key;
        jsObj.focusNode = namedParameters.focusNode;
        jsObj.style = namedParameters.style;
        jsObj.strutStyle = namedParameters.strutStyle;
        jsObj.textAlign = namedParameters.textAlign;
        jsObj.textDirection = namedParameters.textDirection;
        jsObj.textScaleFactor = namedParameters.textScaleFactor;
        jsObj.showCursor = namedParameters.showCursor;
        jsObj.autofocus = namedParameters.autofocus;
        jsObj.toolbarOptions = namedParameters.toolbarOptions;
        jsObj.minLines = namedParameters.minLines;
        jsObj.maxLines = namedParameters.maxLines;
        jsObj.cursorWidth = namedParameters.cursorWidth;
        jsObj.cursorHeight = namedParameters.cursorHeight;
        jsObj.cursorRadius = namedParameters.cursorRadius;
        jsObj.cursorColor = namedParameters.cursorColor;
        jsObj.dragStartBehavior = namedParameters.dragStartBehavior;
        jsObj.enableInteractiveSelection = namedParameters.enableInteractiveSelection;
        jsObj.onTap = namedParameters.onTap;
        jsObj.scrollPhysics = namedParameters.scrollPhysics;
        jsObj.textHeightBehavior = namedParameters.textHeightBehavior;
        jsObj.textWidthBasis = namedParameters.textWidthBasis;
        jsObj['constructorName'] = 'rich';
        return jsObj;
    }
}
exports.SelectableText = SelectableText;
class _SelectableTextState extends framework_1.State {
}
exports._SelectableTextState = _SelectableTextState;
