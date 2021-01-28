//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { StatefulWidget$, State$ } from '../widgets/framework';
import { TextSelectionGestureDetectorBuilder } from '../widgets/text-selection';
class _TextFieldSelectionGestureDetectorBuilder extends TextSelectionGestureDetectorBuilder {
    constructor(namedParameters = {}) {
        super();
        this.state = namedParameters.state;
        this.className = '_TextFieldSelectionGestureDetectorBuilder';
    }
}
export { _TextFieldSelectionGestureDetectorBuilder };
class TextField extends StatefulWidget$ {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.controller = namedParameters.controller;
        this.focusNode = namedParameters.focusNode;
        this.decoration = namedParameters.decoration;
        this.keyboardType = namedParameters.keyboardType;
        this.textInputAction = namedParameters.textInputAction;
        this.textCapitalization = namedParameters.textCapitalization;
        this.style = namedParameters.style;
        this.strutStyle = namedParameters.strutStyle;
        this.textAlign = namedParameters.textAlign;
        this.textAlignVertical = namedParameters.textAlignVertical;
        this.textDirection = namedParameters.textDirection;
        this.readOnly = namedParameters.readOnly;
        this.toolbarOptions = namedParameters.toolbarOptions;
        this.showCursor = namedParameters.showCursor;
        this.autofocus = namedParameters.autofocus;
        this.obscuringCharacter = namedParameters.obscuringCharacter;
        this.obscureText = namedParameters.obscureText;
        this.autocorrect = namedParameters.autocorrect;
        this.smartDashesType = namedParameters.smartDashesType;
        this.smartQuotesType = namedParameters.smartQuotesType;
        this.enableSuggestions = namedParameters.enableSuggestions;
        this.maxLines = namedParameters.maxLines;
        this.minLines = namedParameters.minLines;
        this.expands = namedParameters.expands;
        this.maxLength = namedParameters.maxLength;
        this.maxLengthEnforced = namedParameters.maxLengthEnforced;
        this.onChanged = namedParameters.onChanged;
        this.onEditingComplete = namedParameters.onEditingComplete;
        this.onSubmitted = namedParameters.onSubmitted;
        this.inputFormatters = namedParameters.inputFormatters;
        this.enabled = namedParameters.enabled;
        this.cursorWidth = namedParameters.cursorWidth;
        this.cursorRadius = namedParameters.cursorRadius;
        this.cursorColor = namedParameters.cursorColor;
        this.selectionHeightStyle = namedParameters.selectionHeightStyle;
        this.selectionWidthStyle = namedParameters.selectionWidthStyle;
        this.keyboardAppearance = namedParameters.keyboardAppearance;
        this.scrollPadding = namedParameters.scrollPadding;
        this.dragStartBehavior = namedParameters.dragStartBehavior;
        this.enableInteractiveSelection = namedParameters.enableInteractiveSelection;
        this.onTap = namedParameters.onTap;
        this.mouseCursor = namedParameters.mouseCursor;
        this.buildCounter = namedParameters.buildCounter;
        this.scrollController = namedParameters.scrollController;
        this.scrollPhysics = namedParameters.scrollPhysics;
        this.autofillHints = namedParameters.autofillHints;
        this.className = 'TextField';
    }
    static get noMaxLength() {
        return -1;
    }
}
export { TextField };
class _TextFieldState extends State$ {
}
export { _TextFieldState };
