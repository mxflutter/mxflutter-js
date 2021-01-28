//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { FormField, FormFieldState } from '../widgets/form';
class TextFormField extends FormField {
    constructor(namedParameters = {}) {
        super();
        this.key = namedParameters.key;
        this.controller = namedParameters.controller;
        this['__mx_initialValue'] = namedParameters.initialValue;
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
        this['cursorRadius'] = namedParameters.cursorRadius;
        this['cursorColor'] = namedParameters.cursorColor;
        this['keyboardAppearance'] = namedParameters.keyboardAppearance;
        this['scrollPadding'] = namedParameters.scrollPadding;
        this['enableInteractiveSelection'] = namedParameters.enableInteractiveSelection;
        this['buildCounter'] = namedParameters.buildCounter;
        this['scrollPhysics'] = namedParameters.scrollPhysics;
        this['autofillHints'] = namedParameters.autofillHints;
        this.className = 'TextFormField';
    }
}
export { TextFormField };
class _TextFormFieldState extends FormFieldState {
}
export { _TextFormFieldState };
