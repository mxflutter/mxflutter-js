"use strict";
// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports._TextFormFieldState = exports.TextFormField = void 0;
const form_1 = require("../widgets/form");
class TextFormField extends form_1.FormField {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.controller = namedParameters.controller;
        this['mx_initialValue'] = namedParameters.initialValue;
        this['focusNode'] = namedParameters.focusNode;
        this['decoration'] = namedParameters.decoration;
        this['keyboardType'] = namedParameters.keyboardType;
        this['textCapitalization'] = namedParameters.textCapitalization;
        this['textInputAction'] = namedParameters.textInputAction;
        this['style'] = namedParameters.style;
        this['strutStyle'] = namedParameters.strutStyle;
        this['textDirection'] = namedParameters.textDirection;
        this['textAlign'] = namedParameters.textAlign;
        this['textAlignVertical'] = namedParameters.textAlignVertical;
        this['autofocus'] = namedParameters.autofocus;
        this['readOnly'] = namedParameters.readOnly;
        this['toolbarOptions'] = namedParameters.toolbarOptions;
        this['showCursor'] = namedParameters.showCursor;
        this['obscuringCharacter'] = namedParameters.obscuringCharacter;
        this['obscureText'] = namedParameters.obscureText;
        this['autocorrect'] = namedParameters.autocorrect;
        this['smartDashesType'] = namedParameters.smartDashesType;
        this['smartQuotesType'] = namedParameters.smartQuotesType;
        this['enableSuggestions'] = namedParameters.enableSuggestions;
        this.autovalidate = namedParameters.autovalidate;
        this['maxLengthEnforced'] = namedParameters.maxLengthEnforced;
        this['maxLines'] = namedParameters.maxLines;
        this['minLines'] = namedParameters.minLines;
        this['expands'] = namedParameters.expands;
        this['maxLength'] = namedParameters.maxLength;
        this['onChanged'] = namedParameters.onChanged;
        this['onTap'] = namedParameters.onTap;
        this['onEditingComplete'] = namedParameters.onEditingComplete;
        this['onFieldSubmitted'] = namedParameters.onFieldSubmitted;
        this.onSaved = namedParameters.onSaved;
        this.validator = namedParameters.validator;
        this['inputFormatters'] = namedParameters.inputFormatters;
        this.enabled = namedParameters.enabled;
        this['cursorWidth'] = namedParameters.cursorWidth;
        this['cursorHeight'] = namedParameters.cursorHeight;
        this['cursorRadius'] = namedParameters.cursorRadius;
        this['cursorColor'] = namedParameters.cursorColor;
        this['keyboardAppearance'] = namedParameters.keyboardAppearance;
        this['scrollPadding'] = namedParameters.scrollPadding;
        this['enableInteractiveSelection'] = namedParameters.enableInteractiveSelection;
        this['buildCounter'] = namedParameters.buildCounter;
        this['scrollPhysics'] = namedParameters.scrollPhysics;
        this['autofillHints'] = namedParameters.autofillHints;
        this.autovalidateMode = namedParameters.autovalidateMode;
        this.className = 'TextFormField';
    }
}
exports.TextFormField = TextFormField;
class _TextFormFieldState extends form_1.FormFieldState {
}
exports._TextFormFieldState = _TextFormFieldState;
