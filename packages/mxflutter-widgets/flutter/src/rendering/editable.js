//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { RenderBox } from './box';
import { MXDartClass } from '@mxflutter/mxflutter-base';
var SelectionChangedCause;
(function (SelectionChangedCause) {
    SelectionChangedCause["tap"] = "{ \"_name\": \"SelectionChangedCause.tap\", \"index\": 0 }";
    SelectionChangedCause["doubleTap"] = "{ \"_name\": \"SelectionChangedCause.doubleTap\", \"index\": 1 }";
    SelectionChangedCause["longPress"] = "{ \"_name\": \"SelectionChangedCause.longPress\", \"index\": 2 }";
    SelectionChangedCause["forcePress"] = "{ \"_name\": \"SelectionChangedCause.forcePress\", \"index\": 3 }";
    SelectionChangedCause["keyboard"] = "{ \"_name\": \"SelectionChangedCause.keyboard\", \"index\": 4 }";
    SelectionChangedCause["drag"] = "{ \"_name\": \"SelectionChangedCause.drag\", \"index\": 5 }";
})(SelectionChangedCause || (SelectionChangedCause = {}));
export { SelectionChangedCause };
class TextSelectionPoint extends MXDartClass {
    constructor(point, direction) {
        super();
        this.point = point;
        this.direction = direction;
        this.className = 'TextSelectionPoint';
    }
}
export { TextSelectionPoint };
class RenderEditable extends RenderBox {
    constructor(namedParameters = {}) {
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
