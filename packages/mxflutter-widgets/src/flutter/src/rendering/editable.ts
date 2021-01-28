//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { PointerEvent } from '../gestures/events';
import { PipelineOwner, PaintingContext, RenderObject } from './object';
import { SemanticsConfiguration } from '../semantics/semantics';
import { LogicalKeyboardKey } from '../services/keyboard-key';
import { RawKeyEvent } from '../services/raw-keyboard';
import { StrutStyle } from '../painting/strut-style';
import { TextSpan } from '../painting/text-span';
import { LongPressGestureRecognizer } from '../gestures/long-press';
import { TapGestureRecognizer, TapDownDetails } from '../gestures/tap';
import { EdgeInsets } from '../painting/edge-insets';
import { LayerLink } from './layer';
import { ViewportOffset } from './viewport-offset';
import { TextSelection } from '../services/text-editing';
import { TextPainter, TextWidthBasis } from '../painting/text-painter';
import { ValueNotifier } from '../foundation/change-notifier';
import { TextSelectionDelegate, FloatingCursorDragState } from '../services/text-input';
import { RenderBox, BoxHitTestEntry } from './box';
import {
  Offset,
  TextDirection,
  Rect,
  Color,
  Radius,
  TextPosition,
  BoxHeightStyle,
  BoxWidthStyle,
  TextRange,
  Clip,
  Paint,
  TextAlign,
  TextHeightBehavior,
  Locale,
  Size,
  TextBaseline,
  Canvas,
} from '../../../mx-dart-sdk';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
enum SelectionChangedCause {
  tap = '{ "_name": "SelectionChangedCause.tap", "index": 0 }',
  doubleTap = '{ "_name": "SelectionChangedCause.doubleTap", "index": 1 }',
  longPress = '{ "_name": "SelectionChangedCause.longPress", "index": 2 }',
  forcePress = '{ "_name": "SelectionChangedCause.forcePress", "index": 3 }',
  keyboard = '{ "_name": "SelectionChangedCause.keyboard", "index": 4 }',
  drag = '{ "_name": "SelectionChangedCause.drag", "index": 5 }',
}

export { SelectionChangedCause };
class TextSelectionPoint extends MXDartClass {
  point: Offset;
  direction: TextDirection;
  public constructor(point?: Offset, direction?: TextDirection) {
    super();
    this.point = point;
    this.direction = direction;
    this.className = 'TextSelectionPoint';
  }
}
export { TextSelectionPoint };
class RenderEditable extends RenderBox {
  onSelectionChanged: any;
  textLayoutLastMaxWidth: number;
  textLayoutLastMinWidth: number;
  onCaretChanged: any;
  ignorePointer: boolean;
  devicePixelRatio: number;
  obscuringCharacter: string;
  obscureText: boolean;
  textSelectionDelegate: TextSelectionDelegate;
  lastCaretRect: Rect;
  selectionStartInViewport: ValueNotifier;
  selectionEndInViewport: ValueNotifier;
  cursorResetLocation: number;
  wasSelectingVerticallyWithKeyboard: boolean;
  cachedPlainText: string;
  textPainter: TextPainter;
  cursorColor: Color;
  backgroundCursorColor: Color;
  showCursor: ValueNotifier;
  hasFocus: boolean;
  listenerAttached: boolean;
  forceLine: boolean;
  readOnly: boolean;
  maxLines: number;
  minLines: number;
  expands: boolean;
  selectionColor: Color;
  selectionRects: Array<any>;
  selection: TextSelection;
  offset: ViewportOffset;
  cursorWidth: number;
  paintCursorOnTop: boolean;
  cursorOffset: Offset;
  cursorRadius: Radius;
  startHandleLayerLink: LayerLink;
  endHandleLayerLink: LayerLink;
  floatingCursorAddedMargin: EdgeInsets;
  floatingCursorOn: boolean;
  floatingCursorOffset: Offset;
  floatingCursorTextPosition: TextPosition;
  selectionHeightStyle: BoxHeightStyle;
  selectionWidthStyle: BoxWidthStyle;
  enableInteractiveSelection: boolean;
  promptRectRange: TextRange;
  maxScrollExtent: number;
  clipBehavior: Clip;
  tap: TapGestureRecognizer;
  longPress: LongPressGestureRecognizer;
  lastTapDownPosition: Offset;
  caretPrototype: Rect;
  relativeOrigin: Offset;
  previousOffset: Offset;
  resetOriginOnLeft: boolean;
  resetOriginOnRight: boolean;
  resetOriginOnTop: boolean;
  resetOriginOnBottom: boolean;
  resetFloatingCursorAnimationValue: number;
  promptRectPaint: Paint;
  public constructor(
    namedParameters: {
      text?: TextSpan;
      textDirection?: TextDirection;
      textAlign?: TextAlign;
      cursorColor?: Color;
      backgroundCursorColor?: Color;
      showCursor?: ValueNotifier;
      hasFocus?: boolean;
      startHandleLayerLink?: LayerLink;
      endHandleLayerLink?: LayerLink;
      maxLines?: number;
      minLines?: number;
      expands?: boolean;
      strutStyle?: StrutStyle;
      selectionColor?: Color;
      textScaleFactor?: number;
      selection?: TextSelection;
      offset?: ViewportOffset;
      onSelectionChanged?: any;
      onCaretChanged?: any;
      ignorePointer?: boolean;
      readOnly?: boolean;
      forceLine?: boolean;
      textHeightBehavior?: TextHeightBehavior;
      textWidthBasis?: TextWidthBasis;
      obscuringCharacter?: string;
      obscureText?: boolean;
      locale?: Locale;
      cursorWidth?: number;
      cursorRadius?: Radius;
      paintCursorAboveText?: boolean;
      cursorOffset?: Offset;
      devicePixelRatio?: number;
      selectionHeightStyle?: BoxHeightStyle;
      selectionWidthStyle?: BoxWidthStyle;
      enableInteractiveSelection?: boolean;
      floatingCursorAddedMargin?: EdgeInsets;
      promptRectRange?: TextRange;
      promptRectColor?: Color;
      clipBehavior?: Clip;
      textSelectionDelegate?: TextSelectionDelegate;
    } = {},
  ) {
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
export { RenderEditable };
