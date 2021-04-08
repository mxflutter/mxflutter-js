// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { RestorableTextEditingController } from '../widgets/restoration-properties';
import { Key } from '../foundation/key';
import { ScrollController } from '../widgets/scroll-controller';
import { ScrollPhysics } from '../widgets/scroll-physics';
import { MouseCursor } from '../rendering/mouse-cursor';
import { DragStartBehavior } from '../gestures/recognizer';
import { EdgeInsets } from '../painting/edge-insets';
import { TextAlignVertical } from '../painting/alignment';
import { TextAlign, TextDirection, Radius, Color, BoxHeightStyle, BoxWidthStyle, Brightness } from '../../../mx-dart-sdk';
import { StrutStyle } from '../painting/strut-style';
import { TextStyle } from '../painting/text-style';
import { TextInputType, TextInputAction, TextCapitalization, SmartDashesType, SmartQuotesType } from '../services/text-input';
import { InputDecoration } from './input-decorator';
import { FocusNode } from '../widgets/focus-manager';
import { TextEditingController, ToolbarOptions } from '../widgets/editable-text';
import { StatefulWidget, State, GlobalKey } from '../widgets/framework';
import { TextSelectionGestureDetectorBuilder } from '../widgets/text-selection';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class _TextFieldSelectionGestureDetectorBuilder extends TextSelectionGestureDetectorBuilder {
  state: _TextFieldState;
  public constructor(namedParameters: {state?: _TextFieldState} = {}) {
    super();
    this.state = namedParameters.state;
    this.className = '_TextFieldSelectionGestureDetectorBuilder';
  }
}
export { _TextFieldSelectionGestureDetectorBuilder };
class TextField extends StatefulWidget {
  controller: TextEditingController;
  focusNode: FocusNode;
  decoration: InputDecoration;
  keyboardType: TextInputType;
  textInputAction: TextInputAction;
  textCapitalization: TextCapitalization;
  style: TextStyle;
  strutStyle: StrutStyle;
  textAlign: TextAlign;
  textAlignVertical: TextAlignVertical;
  textDirection: TextDirection;
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
  readOnly: boolean;
  toolbarOptions: ToolbarOptions;
  showCursor: boolean;
  maxLength: number;
  maxLengthEnforced: boolean;
  onChanged: any;
  onEditingComplete: any;
  onSubmitted: any;
  onAppPrivateCommand: any;
  inputFormatters: Array<any>;
  enabled: boolean;
  cursorWidth: number;
  cursorHeight: number;
  cursorRadius: Radius;
  cursorColor: Color;
  selectionHeightStyle: BoxHeightStyle;
  selectionWidthStyle: BoxWidthStyle;
  keyboardAppearance: Brightness;
  scrollPadding: EdgeInsets;
  enableInteractiveSelection: boolean;
  dragStartBehavior: DragStartBehavior;
  onTap: any;
  mouseCursor: MouseCursor;
  buildCounter: any;
  scrollPhysics: ScrollPhysics;
  scrollController: ScrollController;
  autofillHints: any;
  restorationId: string;
  public constructor(namedParameters: {key?: Key, controller?: TextEditingController, focusNode?: FocusNode, decoration?: InputDecoration, keyboardType?: TextInputType, textInputAction?: TextInputAction, textCapitalization?: TextCapitalization, style?: TextStyle, strutStyle?: StrutStyle, textAlign?: TextAlign, textAlignVertical?: TextAlignVertical, textDirection?: TextDirection, readOnly?: boolean, toolbarOptions?: ToolbarOptions, showCursor?: boolean, autofocus?: boolean, obscuringCharacter?: string, obscureText?: boolean, autocorrect?: boolean, smartDashesType?: SmartDashesType, smartQuotesType?: SmartQuotesType, enableSuggestions?: boolean, maxLines?: number, minLines?: number, expands?: boolean, maxLength?: number, maxLengthEnforced?: boolean, onChanged?: any, onEditingComplete?: any, onSubmitted?: any, onAppPrivateCommand?: any, inputFormatters?: Array<any>, enabled?: boolean, cursorWidth?: number, cursorHeight?: number, cursorRadius?: Radius, cursorColor?: Color, selectionHeightStyle?: BoxHeightStyle, selectionWidthStyle?: BoxWidthStyle, keyboardAppearance?: Brightness, scrollPadding?: EdgeInsets, dragStartBehavior?: DragStartBehavior, enableInteractiveSelection?: boolean, onTap?: any, mouseCursor?: MouseCursor, buildCounter?: any, scrollController?: ScrollController, scrollPhysics?: ScrollPhysics, autofillHints?: any, restorationId?: string} = {}) {
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
    this.onAppPrivateCommand = namedParameters.onAppPrivateCommand;
    this.inputFormatters = namedParameters.inputFormatters;
    this.enabled = namedParameters.enabled;
    this.cursorWidth = namedParameters.cursorWidth;
    this.cursorHeight = namedParameters.cursorHeight;
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
    this.restorationId = namedParameters.restorationId;
    this.className = 'TextField';
  }
  static get noMaxLength() {
    return -1;
  }
}
export { TextField };
class _TextFieldState extends State {
  controller: RestorableTextEditingController;
  focusNode: FocusNode;
  isHovering: boolean;
  showSelectionHandles: boolean;
  selectionGestureDetectorBuilder: _TextFieldSelectionGestureDetectorBuilder;
  forcePressEnabled: boolean;
  editableTextKey: GlobalKey;
}
export { _TextFieldState };
