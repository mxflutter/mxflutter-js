// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { ScrollPhysics } from '../widgets/scroll-physics';
import { EdgeInsets } from '../painting/edge-insets';
import { TextAlignVertical } from '../painting/alignment';
import { TextDirection, TextAlign, Radius, Color, Brightness } from '../../../mx-dart-sdk';
import { StrutStyle } from '../painting/strut-style';
import { TextStyle } from '../painting/text-style';
import { TextInputType, TextCapitalization, TextInputAction, SmartDashesType, SmartQuotesType } from '../services/text-input';
import { InputDecoration } from './input-decorator';
import { FocusNode } from '../widgets/focus-manager';
import { Key } from '../foundation/key';
import { TextEditingController, ToolbarOptions } from '../widgets/editable-text';
import { FormField, AutovalidateMode, FormFieldState } from '../widgets/form';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class TextFormField extends FormField {
  controller: TextEditingController;
  public constructor(namedParameters: {key?: Key, controller?: TextEditingController, initialValue?: string, focusNode?: FocusNode, decoration?: InputDecoration, keyboardType?: TextInputType, textCapitalization?: TextCapitalization, textInputAction?: TextInputAction, style?: TextStyle, strutStyle?: StrutStyle, textDirection?: TextDirection, textAlign?: TextAlign, textAlignVertical?: TextAlignVertical, autofocus?: boolean, readOnly?: boolean, toolbarOptions?: ToolbarOptions, showCursor?: boolean, obscuringCharacter?: string, obscureText?: boolean, autocorrect?: boolean, smartDashesType?: SmartDashesType, smartQuotesType?: SmartQuotesType, enableSuggestions?: boolean, autovalidate?: boolean, maxLengthEnforced?: boolean, maxLines?: number, minLines?: number, expands?: boolean, maxLength?: number, onChanged?: any, onTap?: any, onEditingComplete?: any, onFieldSubmitted?: any, onSaved?: any, validator?: any, inputFormatters?: Array<any>, enabled?: boolean, cursorWidth?: number, cursorHeight?: number, cursorRadius?: Radius, cursorColor?: Color, keyboardAppearance?: Brightness, scrollPadding?: EdgeInsets, enableInteractiveSelection?: boolean, buildCounter?: any, scrollPhysics?: ScrollPhysics, autofillHints?: any, autovalidateMode?: AutovalidateMode} = {}) {
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
export { TextFormField };
class _TextFormFieldState extends FormFieldState {
  controller: TextEditingController;
}
export { _TextFormFieldState };
