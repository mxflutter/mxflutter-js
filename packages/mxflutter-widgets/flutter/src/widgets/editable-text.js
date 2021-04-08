"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._WhitespaceDirectionalityFormatter = exports._Editable = exports.EditableTextState = exports.EditableText = exports.ToolbarOptions = exports.TextEditingController = void 0;
const text_formatter_1 = require("../services/text-formatter");
const framework_1 = require("./framework");
const change_notifier_1 = require("../foundation/change-notifier");
const mxflutter_base_1 = require("@mxflutter/mxflutter-base");
class TextEditingController extends change_notifier_1.ValueNotifier {
    constructor(namedParameters = {}) {
        super();
        this['text'] = namedParameters.text;
        this.className = 'TextEditingController';
    }
    static fromValue(value) {
        var jsObj = new TextEditingController();
        jsObj['value'] = value;
        jsObj['constructorName'] = 'fromValue';
        return jsObj;
    }
}
exports.TextEditingController = TextEditingController;
class ToolbarOptions extends mxflutter_base_1.MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.copy = namedParameters.copy;
        this.cut = namedParameters.cut;
        this.paste = namedParameters.paste;
        this.selectAll = namedParameters.selectAll;
        this.className = 'ToolbarOptions';
    }
}
exports.ToolbarOptions = ToolbarOptions;
class EditableText extends framework_1.StatefulWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.controller = namedParameters.controller;
        this.focusNode = namedParameters.focusNode;
        this.readOnly = namedParameters.readOnly;
        this.obscuringCharacter = namedParameters.obscuringCharacter;
        this.obscureText = namedParameters.obscureText;
        this.autocorrect = namedParameters.autocorrect;
        this.smartDashesType = namedParameters.smartDashesType;
        this.smartQuotesType = namedParameters.smartQuotesType;
        this.enableSuggestions = namedParameters.enableSuggestions;
        this.style = namedParameters.style;
        this.strutStyle = namedParameters.strutStyle;
        this.cursorColor = namedParameters.cursorColor;
        this.backgroundCursorColor = namedParameters.backgroundCursorColor;
        this.textAlign = namedParameters.textAlign;
        this.textDirection = namedParameters.textDirection;
        this.locale = namedParameters.locale;
        this.textScaleFactor = namedParameters.textScaleFactor;
        this.maxLines = namedParameters.maxLines;
        this.minLines = namedParameters.minLines;
        this.expands = namedParameters.expands;
        this.forceLine = namedParameters.forceLine;
        this.textHeightBehavior = namedParameters.textHeightBehavior;
        this.textWidthBasis = namedParameters.textWidthBasis;
        this.autofocus = namedParameters.autofocus;
        this.showCursor = namedParameters.showCursor;
        this.showSelectionHandles = namedParameters.showSelectionHandles;
        this.selectionColor = namedParameters.selectionColor;
        this.selectionControls = namedParameters.selectionControls;
        this.keyboardType = namedParameters.keyboardType;
        this.textInputAction = namedParameters.textInputAction;
        this.textCapitalization = namedParameters.textCapitalization;
        this.onChanged = namedParameters.onChanged;
        this.onEditingComplete = namedParameters.onEditingComplete;
        this.onSubmitted = namedParameters.onSubmitted;
        this.onAppPrivateCommand = namedParameters.onAppPrivateCommand;
        this.onSelectionChanged = namedParameters.onSelectionChanged;
        this.onSelectionHandleTapped = namedParameters.onSelectionHandleTapped;
        this.inputFormatters = namedParameters.inputFormatters;
        this.mouseCursor = namedParameters.mouseCursor;
        this.rendererIgnoresPointer = namedParameters.rendererIgnoresPointer;
        this.cursorWidth = namedParameters.cursorWidth;
        this.cursorHeight = namedParameters.cursorHeight;
        this.cursorRadius = namedParameters.cursorRadius;
        this.cursorOpacityAnimates = namedParameters.cursorOpacityAnimates;
        this.cursorOffset = namedParameters.cursorOffset;
        this.paintCursorAboveText = namedParameters.paintCursorAboveText;
        this.selectionHeightStyle = namedParameters.selectionHeightStyle;
        this.selectionWidthStyle = namedParameters.selectionWidthStyle;
        this.scrollPadding = namedParameters.scrollPadding;
        this.keyboardAppearance = namedParameters.keyboardAppearance;
        this.dragStartBehavior = namedParameters.dragStartBehavior;
        this.enableInteractiveSelection = namedParameters.enableInteractiveSelection;
        this.scrollController = namedParameters.scrollController;
        this.scrollPhysics = namedParameters.scrollPhysics;
        this.autocorrectionTextRectColor = namedParameters.autocorrectionTextRectColor;
        this.toolbarOptions = namedParameters.toolbarOptions;
        this.autofillHints = namedParameters.autofillHints;
        this.clipBehavior = namedParameters.clipBehavior;
        this.restorationId = namedParameters.restorationId;
        this.className = 'EditableText';
    }
}
exports.EditableText = EditableText;
class EditableTextState extends framework_1.State {
}
exports.EditableTextState = EditableTextState;
class _Editable extends framework_1.LeafRenderObjectWidget {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.textSpan = namedParameters.textSpan;
        this.value = namedParameters.value;
        this.startHandleLayerLink = namedParameters.startHandleLayerLink;
        this.endHandleLayerLink = namedParameters.endHandleLayerLink;
        this.cursorColor = namedParameters.cursorColor;
        this.backgroundCursorColor = namedParameters.backgroundCursorColor;
        this.showCursor = namedParameters.showCursor;
        this.forceLine = namedParameters.forceLine;
        this.readOnly = namedParameters.readOnly;
        this.textHeightBehavior = namedParameters.textHeightBehavior;
        this.textWidthBasis = namedParameters.textWidthBasis;
        this.hasFocus = namedParameters.hasFocus;
        this.maxLines = namedParameters.maxLines;
        this.minLines = namedParameters.minLines;
        this.expands = namedParameters.expands;
        this.strutStyle = namedParameters.strutStyle;
        this.selectionColor = namedParameters.selectionColor;
        this.textScaleFactor = namedParameters.textScaleFactor;
        this.textAlign = namedParameters.textAlign;
        this.textDirection = namedParameters.textDirection;
        this.locale = namedParameters.locale;
        this.obscuringCharacter = namedParameters.obscuringCharacter;
        this.obscureText = namedParameters.obscureText;
        this.autocorrect = namedParameters.autocorrect;
        this.smartDashesType = namedParameters.smartDashesType;
        this.smartQuotesType = namedParameters.smartQuotesType;
        this.enableSuggestions = namedParameters.enableSuggestions;
        this.offset = namedParameters.offset;
        this.onSelectionChanged = namedParameters.onSelectionChanged;
        this.onCaretChanged = namedParameters.onCaretChanged;
        this.rendererIgnoresPointer = namedParameters.rendererIgnoresPointer;
        this.cursorWidth = namedParameters.cursorWidth;
        this.cursorHeight = namedParameters.cursorHeight;
        this.cursorRadius = namedParameters.cursorRadius;
        this.cursorOffset = namedParameters.cursorOffset;
        this.paintCursorAboveText = namedParameters.paintCursorAboveText;
        this.selectionHeightStyle = namedParameters.selectionHeightStyle;
        this.selectionWidthStyle = namedParameters.selectionWidthStyle;
        this.enableInteractiveSelection = namedParameters.enableInteractiveSelection;
        this.textSelectionDelegate = namedParameters.textSelectionDelegate;
        this.devicePixelRatio = namedParameters.devicePixelRatio;
        this.promptRectRange = namedParameters.promptRectRange;
        this.promptRectColor = namedParameters.promptRectColor;
        this.clipBehavior = namedParameters.clipBehavior;
        this.className = '_Editable';
    }
}
exports._Editable = _Editable;
class _WhitespaceDirectionalityFormatter extends text_formatter_1.TextInputFormatter {
    constructor(namedParameters = {}) {
        super();
        this['textDirection'] = namedParameters.textDirection;
        this.className = '_WhitespaceDirectionalityFormatter';
    }
}
exports._WhitespaceDirectionalityFormatter = _WhitespaceDirectionalityFormatter;
