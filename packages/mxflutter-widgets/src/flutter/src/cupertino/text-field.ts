//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { BorderSide } from '../painting/borders';
import { TextSelection } from '../services/text-editing';
import { SelectionChangedCause } from '../rendering/editable';
import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { Key } from '../foundation/key';
import { ScrollPhysics } from '../widgets/scroll-physics';
import { ScrollController } from '../widgets/scroll-controller';
import { DragStartBehavior } from '../gestures/recognizer';
import { TextAlignVertical } from '../painting/alignment';
import { TextAlign, Radius, Color, BoxHeightStyle, BoxWidthStyle, Brightness } from '../../../mx-dart-sdk';
import { StrutStyle } from '../painting/strut-style';
import {
  TextInputType,
  TextInputAction,
  TextCapitalization,
  SmartDashesType,
  SmartQuotesType,
  TextEditingValue,
} from '../services/text-input';
import { TextStyle } from '../painting/text-style';
import { EdgeInsetsGeometry, EdgeInsets } from '../painting/edge-insets';
import { BoxDecoration } from '../painting/box-decoration';
import { FocusNode } from '../widgets/focus-manager';
import { TextEditingController, ToolbarOptions } from '../widgets/editable-text';
import { StatefulWidget$, Widget, State$, GlobalKey, BuildContext$ } from '../widgets/framework';
import { DragEndDetails } from '../gestures/drag-details';
import { TapUpDetails } from '../gestures/tap';
import { TextSelectionGestureDetectorBuilder } from '../widgets/text-selection';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum OverlayVisibilityMode {
  never = '{ "_name": "OverlayVisibilityMode.never", "index": 0 }',
  editing = '{ "_name": "OverlayVisibilityMode.editing", "index": 1 }',
  notEditing = '{ "_name": "OverlayVisibilityMode.notEditing", "index": 2 }',
  always = '{ "_name": "OverlayVisibilityMode.always", "index": 3 }',
}

export { OverlayVisibilityMode };
class _CupertinoTextFieldSelectionGestureDetectorBuilder extends TextSelectionGestureDetectorBuilder {
  state: _CupertinoTextFieldState;
  public constructor(namedParameters: { state?: _CupertinoTextFieldState } = {}) {
    super();
    this.state = namedParameters.state;
    this.className = '_CupertinoTextFieldSelectionGestureDetectorBuilder';
  }
}
export { _CupertinoTextFieldSelectionGestureDetectorBuilder };
class CupertinoTextField extends StatefulWidget$ {
  controller: TextEditingController;
  focusNode: FocusNode;
  decoration: BoxDecoration;
  padding: EdgeInsetsGeometry;
  placeholder: string;
  placeholderStyle: TextStyle;
  prefix: MXWidget;
  prefixMode: OverlayVisibilityMode;
  suffix: MXWidget;
  suffixMode: OverlayVisibilityMode;
  clearButtonMode: OverlayVisibilityMode;
  keyboardType: TextInputType;
  textInputAction: TextInputAction;
  textCapitalization: TextCapitalization;
  style: TextStyle;
  strutStyle: StrutStyle;
  textAlign: TextAlign;
  toolbarOptions: ToolbarOptions;
  textAlignVertical: TextAlignVertical;
  readOnly: boolean;
  showCursor: boolean;
  autofocus: boolean;
  obscuringCharacter: string;
  obscureText: boolean;
  autocorrect: boolean;
  smartDashesType: SmartDashesType;
  smartQuotesType: SmartQuotesType;
  enableSuggestions: boolean;
  maxLines: number;
  minLines: number;
  expands: boolean;
  maxLength: number;
  maxLengthEnforced: boolean;
  onChanged: any;
  onEditingComplete: any;
  onSubmitted: any;
  inputFormatters: Array<any>;
  enabled: boolean;
  cursorWidth: number;
  cursorRadius: Radius;
  cursorColor: Color;
  selectionHeightStyle: BoxHeightStyle;
  selectionWidthStyle: BoxWidthStyle;
  keyboardAppearance: Brightness;
  scrollPadding: EdgeInsets;
  enableInteractiveSelection: boolean;
  dragStartBehavior: DragStartBehavior;
  scrollController: ScrollController;
  scrollPhysics: ScrollPhysics;
  onTap: any;
  autofillHints: any;
  public constructor(
    namedParameters: {
      key?: Key;
      controller?: TextEditingController;
      focusNode?: FocusNode;
      decoration?: BoxDecoration;
      padding?: EdgeInsetsGeometry;
      placeholder?: string;
      placeholderStyle?: TextStyle;
      prefix?: MXWidget;
      prefixMode?: OverlayVisibilityMode;
      suffix?: MXWidget;
      suffixMode?: OverlayVisibilityMode;
      clearButtonMode?: OverlayVisibilityMode;
      keyboardType?: TextInputType;
      textInputAction?: TextInputAction;
      textCapitalization?: TextCapitalization;
      style?: TextStyle;
      strutStyle?: StrutStyle;
      textAlign?: TextAlign;
      textAlignVertical?: TextAlignVertical;
      readOnly?: boolean;
      toolbarOptions?: ToolbarOptions;
      showCursor?: boolean;
      autofocus?: boolean;
      obscuringCharacter?: string;
      obscureText?: boolean;
      autocorrect?: boolean;
      smartDashesType?: SmartDashesType;
      smartQuotesType?: SmartQuotesType;
      enableSuggestions?: boolean;
      maxLines?: number;
      minLines?: number;
      expands?: boolean;
      maxLength?: number;
      maxLengthEnforced?: boolean;
      onChanged?: any;
      onEditingComplete?: any;
      onSubmitted?: any;
      inputFormatters?: Array<any>;
      enabled?: boolean;
      cursorWidth?: number;
      cursorRadius?: Radius;
      cursorColor?: Color;
      selectionHeightStyle?: BoxHeightStyle;
      selectionWidthStyle?: BoxWidthStyle;
      keyboardAppearance?: Brightness;
      scrollPadding?: EdgeInsets;
      dragStartBehavior?: DragStartBehavior;
      enableInteractiveSelection?: boolean;
      onTap?: any;
      scrollController?: ScrollController;
      scrollPhysics?: ScrollPhysics;
      autofillHints?: any;
    } = {},
  ) {
    super();
    this.key = namedParameters.key;
    this.controller = namedParameters.controller;
    this.focusNode = namedParameters.focusNode;
    this.decoration = namedParameters.decoration;
    this.padding = namedParameters.padding;
    this.placeholder = namedParameters.placeholder;
    this.placeholderStyle = namedParameters.placeholderStyle;
    this.prefix = namedParameters.prefix;
    this.prefixMode = namedParameters.prefixMode;
    this.suffix = namedParameters.suffix;
    this.suffixMode = namedParameters.suffixMode;
    this.clearButtonMode = namedParameters.clearButtonMode;
    this.keyboardType = namedParameters.keyboardType;
    this.textInputAction = namedParameters.textInputAction;
    this.textCapitalization = namedParameters.textCapitalization;
    this.style = namedParameters.style;
    this.strutStyle = namedParameters.strutStyle;
    this.textAlign = namedParameters.textAlign;
    this.textAlignVertical = namedParameters.textAlignVertical;
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
    this.scrollController = namedParameters.scrollController;
    this.scrollPhysics = namedParameters.scrollPhysics;
    this.autofillHints = namedParameters.autofillHints;
    this.className = 'CupertinoTextField';
  }
}
export { CupertinoTextField };
class _CupertinoTextFieldState extends State$ {
  clearGlobalKey: GlobalKey;
  controller: TextEditingController;
  focusNode: FocusNode;
  showSelectionHandles: boolean;
  selectionGestureDetectorBuilder: _CupertinoTextFieldSelectionGestureDetectorBuilder;
  editableTextKey: GlobalKey;
}
export { _CupertinoTextFieldState };
