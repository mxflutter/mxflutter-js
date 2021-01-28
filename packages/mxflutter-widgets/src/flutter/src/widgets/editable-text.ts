//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { TextInputFormatter } from '../services/text-formatter';
import { TextSpan } from '../painting/text-span';
import { ViewportOffset } from '../rendering/viewport-offset';
import { RenderEditable, SelectionChangedCause } from '../rendering/editable';
import { Duration } from '../../../mx-dart-sdk';
import { AutofillGroupState } from './autofill';
import { LayerLink } from '../rendering/layer';
import { AnimationController } from '../animation/animation-controller';
import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { Key } from '../foundation/key';
import { ScrollPhysics } from './scroll-physics';
import { ScrollController } from './scroll-controller';
import { DragStartBehavior } from '../gestures/recognizer';
import { EdgeInsets } from '../painting/edge-insets';
import { MouseCursor } from '../rendering/mouse-cursor';
import { TextSelectionControls, ClipboardStatusNotifier, TextSelectionOverlay } from './text-selection';
import { StrutStyle } from '../painting/strut-style';
import { TextWidthBasis } from '../painting/text-painter';
import {
  TextHeightBehavior,
  TextAlign,
  TextDirection,
  Locale,
  Color,
  Radius,
  Offset,
  BoxHeightStyle,
  BoxWidthStyle,
  Brightness,
  Clip,
  Rect,
  TextPosition,
  TextRange,
} from '../../../mx-dart-sdk';
import { FocusNode, FocusAttachment } from './focus-manager';
import { StatefulWidget$, State$, GlobalKey, BuildContext$, LeafRenderObjectWidget } from './framework';
import {
  TextEditingValue,
  SmartDashesType,
  SmartQuotesType,
  TextCapitalization,
  TextInputType,
  TextInputAction,
  TextInputConnection,
  RawFloatingCursorPoint,
  TextSelectionDelegate,
} from '../services/text-input';
import { TextSelection } from '../services/text-editing';
import { TextStyle } from '../painting/text-style';
import { ValueNotifier } from '../foundation/change-notifier';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class TextEditingController extends ValueNotifier {
  public constructor(namedParameters: { text?: string } = {}) {
    super();
    this['text'] = namedParameters.text;
    this.className = 'TextEditingController';
  }
  static fromValue(value?: TextEditingValue) {
    var jsObj = new TextEditingController();
    jsObj['value'] = value;
    jsObj['constructorName'] = 'fromValue';
    return jsObj;
  }
}
export { TextEditingController };
class ToolbarOptions extends MXDartClass {
  copy: boolean;
  cut: boolean;
  paste: boolean;
  selectAll: boolean;
  public constructor(namedParameters: { copy?: boolean; cut?: boolean; paste?: boolean; selectAll?: boolean } = {}) {
    super();
    this.copy = namedParameters.copy;
    this.cut = namedParameters.cut;
    this.paste = namedParameters.paste;
    this.selectAll = namedParameters.selectAll;
    this.className = 'ToolbarOptions';
  }
}
export { ToolbarOptions };
class EditableText extends StatefulWidget$ {
  controller: TextEditingController;
  focusNode: FocusNode;
  obscuringCharacter: string;
  obscureText: boolean;
  textHeightBehavior: TextHeightBehavior;
  textWidthBasis: TextWidthBasis;
  readOnly: boolean;
  forceLine: boolean;
  toolbarOptions: ToolbarOptions;
  showSelectionHandles: boolean;
  showCursor: boolean;
  autocorrect: boolean;
  smartDashesType: SmartDashesType;
  smartQuotesType: SmartQuotesType;
  enableSuggestions: boolean;
  style: TextStyle;
  strutStyle: StrutStyle;
  textAlign: TextAlign;
  textDirection: TextDirection;
  textCapitalization: TextCapitalization;
  locale: Locale;
  textScaleFactor: number;
  cursorColor: Color;
  autocorrectionTextRectColor: Color;
  backgroundCursorColor: Color;
  maxLines: number;
  minLines: number;
  expands: boolean;
  autofocus: boolean;
  selectionColor: Color;
  selectionControls: TextSelectionControls;
  keyboardType: TextInputType;
  textInputAction: TextInputAction;
  onChanged: any;
  onEditingComplete: any;
  onSubmitted: any;
  onSelectionChanged: any;
  onSelectionHandleTapped: any;
  inputFormatters: Array<any>;
  mouseCursor: MouseCursor;
  rendererIgnoresPointer: boolean;
  cursorWidth: number;
  cursorRadius: Radius;
  cursorOpacityAnimates: boolean;
  cursorOffset: Offset;
  paintCursorAboveText: boolean;
  selectionHeightStyle: BoxHeightStyle;
  selectionWidthStyle: BoxWidthStyle;
  keyboardAppearance: Brightness;
  scrollPadding: EdgeInsets;
  enableInteractiveSelection: boolean;
  dragStartBehavior: DragStartBehavior;
  scrollController: ScrollController;
  scrollPhysics: ScrollPhysics;
  autofillHints: any;
  clipBehavior: Clip;
  public constructor(
    namedParameters: {
      key?: Key;
      controller?: TextEditingController;
      focusNode?: FocusNode;
      readOnly?: boolean;
      obscuringCharacter?: string;
      obscureText?: boolean;
      autocorrect?: boolean;
      smartDashesType?: SmartDashesType;
      smartQuotesType?: SmartQuotesType;
      enableSuggestions?: boolean;
      style?: TextStyle;
      strutStyle?: StrutStyle;
      cursorColor?: Color;
      backgroundCursorColor?: Color;
      textAlign?: TextAlign;
      textDirection?: TextDirection;
      locale?: Locale;
      textScaleFactor?: number;
      maxLines?: number;
      minLines?: number;
      expands?: boolean;
      forceLine?: boolean;
      textHeightBehavior?: TextHeightBehavior;
      textWidthBasis?: TextWidthBasis;
      autofocus?: boolean;
      showCursor?: boolean;
      showSelectionHandles?: boolean;
      selectionColor?: Color;
      selectionControls?: TextSelectionControls;
      keyboardType?: TextInputType;
      textInputAction?: TextInputAction;
      textCapitalization?: TextCapitalization;
      onChanged?: any;
      onEditingComplete?: any;
      onSubmitted?: any;
      onSelectionChanged?: any;
      onSelectionHandleTapped?: any;
      inputFormatters?: Array<any>;
      mouseCursor?: MouseCursor;
      rendererIgnoresPointer?: boolean;
      cursorWidth?: number;
      cursorRadius?: Radius;
      cursorOpacityAnimates?: boolean;
      cursorOffset?: Offset;
      paintCursorAboveText?: boolean;
      selectionHeightStyle?: BoxHeightStyle;
      selectionWidthStyle?: BoxWidthStyle;
      scrollPadding?: EdgeInsets;
      keyboardAppearance?: Brightness;
      dragStartBehavior?: DragStartBehavior;
      enableInteractiveSelection?: boolean;
      scrollController?: ScrollController;
      scrollPhysics?: ScrollPhysics;
      autocorrectionTextRectColor?: Color;
      toolbarOptions?: ToolbarOptions;
      autofillHints?: any;
      clipBehavior?: Clip;
    } = {},
  ) {
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
    this.onSelectionChanged = namedParameters.onSelectionChanged;
    this.onSelectionHandleTapped = namedParameters.onSelectionHandleTapped;
    this.inputFormatters = namedParameters.inputFormatters;
    this.mouseCursor = namedParameters.mouseCursor;
    this.rendererIgnoresPointer = namedParameters.rendererIgnoresPointer;
    this.cursorWidth = namedParameters.cursorWidth;
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
    this.className = 'EditableText';
  }
}
export { EditableText };
class EditableTextState extends State$ {
  cursorTimer: any;
  targetCursorVisibility: boolean;
  cursorVisibilityNotifier: ValueNotifier;
  editableKey: GlobalKey;
  clipboardStatus: ClipboardStatusNotifier;
  textInputConnection: TextInputConnection;
  selectionOverlay: TextSelectionOverlay;
  scrollController: ScrollController;
  cursorBlinkOpacityController: AnimationController;
  toolbarLayerLink: LayerLink;
  startHandleLayerLink: LayerLink;
  endHandleLayerLink: LayerLink;
  didAutoFocus: boolean;
  focusAttachment: FocusAttachment;
  currentAutofillScope: AutofillGroupState;
  floatingCursorResetController: AnimationController;
  lastFormattedUnmodifiedTextEditingValue: TextEditingValue;
  lastFormattedValue: TextEditingValue;
  receivedRemoteTextEditingValue: TextEditingValue;
  startCaretRect: Rect;
  lastTextPosition: TextPosition;
  pointOffsetOrigin: Offset;
  lastBoundedOffset: Offset;
  textChangedSinceLastCaretUpdate: boolean;
  currentCaretRect: Rect;
  showCaretOnScreenScheduled: boolean;
  lastBottomViewInset: number;
  whitespaceFormatter: _WhitespaceDirectionalityFormatter;
  obscureShowCharTicksPending: number;
  obscureLatestCharIndex: number;
  currentPromptRectRange: TextRange;
}
export { EditableTextState };
class _Editable extends LeafRenderObjectWidget {
  textSpan: TextSpan;
  value: TextEditingValue;
  cursorColor: Color;
  startHandleLayerLink: LayerLink;
  endHandleLayerLink: LayerLink;
  backgroundCursorColor: Color;
  showCursor: ValueNotifier;
  forceLine: boolean;
  readOnly: boolean;
  hasFocus: boolean;
  maxLines: number;
  minLines: number;
  expands: boolean;
  strutStyle: StrutStyle;
  selectionColor: Color;
  textScaleFactor: number;
  textAlign: TextAlign;
  textDirection: TextDirection;
  locale: Locale;
  obscuringCharacter: string;
  obscureText: boolean;
  textHeightBehavior: TextHeightBehavior;
  textWidthBasis: TextWidthBasis;
  autocorrect: boolean;
  smartDashesType: SmartDashesType;
  smartQuotesType: SmartQuotesType;
  enableSuggestions: boolean;
  offset: ViewportOffset;
  onSelectionChanged: any;
  onCaretChanged: any;
  rendererIgnoresPointer: boolean;
  cursorWidth: number;
  cursorRadius: Radius;
  cursorOffset: Offset;
  paintCursorAboveText: boolean;
  selectionHeightStyle: BoxHeightStyle;
  selectionWidthStyle: BoxWidthStyle;
  enableInteractiveSelection: boolean;
  textSelectionDelegate: TextSelectionDelegate;
  devicePixelRatio: number;
  promptRectRange: TextRange;
  promptRectColor: Color;
  clipBehavior: Clip;
  public constructor(
    namedParameters: {
      key?: Key;
      textSpan?: TextSpan;
      value?: TextEditingValue;
      startHandleLayerLink?: LayerLink;
      endHandleLayerLink?: LayerLink;
      cursorColor?: Color;
      backgroundCursorColor?: Color;
      showCursor?: ValueNotifier;
      forceLine?: boolean;
      readOnly?: boolean;
      textHeightBehavior?: TextHeightBehavior;
      textWidthBasis?: TextWidthBasis;
      hasFocus?: boolean;
      maxLines?: number;
      minLines?: number;
      expands?: boolean;
      strutStyle?: StrutStyle;
      selectionColor?: Color;
      textScaleFactor?: number;
      textAlign?: TextAlign;
      textDirection?: TextDirection;
      locale?: Locale;
      obscuringCharacter?: string;
      obscureText?: boolean;
      autocorrect?: boolean;
      smartDashesType?: SmartDashesType;
      smartQuotesType?: SmartQuotesType;
      enableSuggestions?: boolean;
      offset?: ViewportOffset;
      onSelectionChanged?: any;
      onCaretChanged?: any;
      rendererIgnoresPointer?: boolean;
      cursorWidth?: number;
      cursorRadius?: Radius;
      cursorOffset?: Offset;
      paintCursorAboveText?: boolean;
      selectionHeightStyle?: BoxHeightStyle;
      selectionWidthStyle?: BoxWidthStyle;
      enableInteractiveSelection?: boolean;
      textSelectionDelegate?: TextSelectionDelegate;
      devicePixelRatio?: number;
      promptRectRange?: TextRange;
      promptRectColor?: Color;
      clipBehavior?: Clip;
    } = {},
  ) {
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
export { _Editable };
class _WhitespaceDirectionalityFormatter extends TextInputFormatter {
  ltrRegExp: any;
  rtlRegExp: any;
  whitespaceRegExp: any;
  baseDirection: TextDirection;
  previousNonWhitespaceDirection: TextDirection;
  hasOpposingDirection: boolean;
  public constructor(namedParameters: { textDirection?: TextDirection } = {}) {
    super();
    this['textDirection'] = namedParameters.textDirection;
    this.className = '_WhitespaceDirectionalityFormatter';
  }
}
export { _WhitespaceDirectionalityFormatter };
