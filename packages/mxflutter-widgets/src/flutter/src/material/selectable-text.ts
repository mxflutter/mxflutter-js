//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { SelectionChangedCause } from '../rendering/editable';
import { TextSelection } from '../services/text-editing';
import { DiagnosticPropertiesBuilder } from '../foundation/diagnostics';
import { Key } from '../foundation/key';
import { TextWidthBasis } from '../painting/text-painter';
import { ScrollPhysics } from '../widgets/scroll-physics';
import { DragStartBehavior } from '../gestures/recognizer';
import { TextAlign, TextDirection, Radius, Color, TextHeightBehavior } from '../../../mx-dart-sdk';
import { StrutStyle } from '../painting/strut-style';
import { FocusNode } from '../widgets/focus-manager';
import { StatefulWidget$, State$, GlobalKey, BuildContext$ } from '../widgets/framework';
import { TapUpDetails } from '../gestures/tap';
import { LongPressMoveUpdateDetails, LongPressStartDetails } from '../gestures/long-press';
import { ForcePressDetails } from '../gestures/force-press';
import { TextSelectionGestureDetectorBuilder } from '../widgets/text-selection';
import { TextStyle } from '../painting/text-style';
import { TextSpan } from '../painting/text-span';
import { TextEditingController, ToolbarOptions } from '../widgets/editable-text';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class _TextSpanEditingController extends TextEditingController {
  textSpan: TextSpan;
  public constructor(namedParameters: { textSpan?: TextSpan } = {}) {
    super();
    this.textSpan = namedParameters.textSpan;
    this.className = '_TextSpanEditingController';
  }
}
export { _TextSpanEditingController };
class _SelectableTextSelectionGestureDetectorBuilder extends TextSelectionGestureDetectorBuilder {
  state: _SelectableTextState;
  public constructor(namedParameters: { state?: _SelectableTextState } = {}) {
    super();
    this.state = namedParameters.state;
    this.className = '_SelectableTextSelectionGestureDetectorBuilder';
  }
}
export { _SelectableTextSelectionGestureDetectorBuilder };
class SelectableText extends StatefulWidget$ {
  data: string;
  textSpan: TextSpan;
  focusNode: FocusNode;
  style: TextStyle;
  strutStyle: StrutStyle;
  textAlign: TextAlign;
  textDirection: TextDirection;
  textScaleFactor: number;
  autofocus: boolean;
  minLines: number;
  maxLines: number;
  showCursor: boolean;
  cursorWidth: number;
  cursorRadius: Radius;
  cursorColor: Color;
  enableInteractiveSelection: boolean;
  dragStartBehavior: DragStartBehavior;
  toolbarOptions: ToolbarOptions;
  onTap: any;
  scrollPhysics: ScrollPhysics;
  textHeightBehavior: TextHeightBehavior;
  textWidthBasis: TextWidthBasis;
  public constructor(
    data?: string,
    namedParameters: {
      key?: Key;
      focusNode?: FocusNode;
      style?: TextStyle;
      strutStyle?: StrutStyle;
      textAlign?: TextAlign;
      textDirection?: TextDirection;
      textScaleFactor?: number;
      showCursor?: boolean;
      autofocus?: boolean;
      toolbarOptions?: ToolbarOptions;
      minLines?: number;
      maxLines?: number;
      cursorWidth?: number;
      cursorRadius?: Radius;
      cursorColor?: Color;
      dragStartBehavior?: DragStartBehavior;
      enableInteractiveSelection?: boolean;
      onTap?: any;
      scrollPhysics?: ScrollPhysics;
      textHeightBehavior?: TextHeightBehavior;
      textWidthBasis?: TextWidthBasis;
    } = {},
  ) {
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
  static rich(
    textSpan?: TextSpan,
    namedParameters: {
      key?: Key;
      focusNode?: FocusNode;
      style?: TextStyle;
      strutStyle?: StrutStyle;
      textAlign?: TextAlign;
      textDirection?: TextDirection;
      textScaleFactor?: number;
      showCursor?: boolean;
      autofocus?: boolean;
      toolbarOptions?: ToolbarOptions;
      minLines?: number;
      maxLines?: number;
      cursorWidth?: number;
      cursorRadius?: Radius;
      cursorColor?: Color;
      dragStartBehavior?: DragStartBehavior;
      enableInteractiveSelection?: boolean;
      onTap?: any;
      scrollPhysics?: ScrollPhysics;
      textHeightBehavior?: TextHeightBehavior;
      textWidthBasis?: TextWidthBasis;
    } = {},
  ) {
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
export { SelectableText };
class _SelectableTextState extends State$ {
  controller: _TextSpanEditingController;
  focusNode: FocusNode;
  showSelectionHandles: boolean;
  selectionGestureDetectorBuilder: _SelectableTextSelectionGestureDetectorBuilder;
  forcePressEnabled: boolean;
  editableTextKey: GlobalKey;
}
export { _SelectableTextState };
