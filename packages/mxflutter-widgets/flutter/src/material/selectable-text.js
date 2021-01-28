//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { StatefulWidget$, State$ } from '../widgets/framework';
import { TextSelectionGestureDetectorBuilder } from '../widgets/text-selection';
import { TextEditingController } from '../widgets/editable-text';
class _TextSpanEditingController extends TextEditingController {
    constructor(namedParameters = {}) {
        super();
        this.textSpan = namedParameters.textSpan;
        this.className = '_TextSpanEditingController';
    }
}
export { _TextSpanEditingController };
class _SelectableTextSelectionGestureDetectorBuilder extends TextSelectionGestureDetectorBuilder {
    constructor(namedParameters = {}) {
        super();
        this.state = namedParameters.state;
        this.className = '_SelectableTextSelectionGestureDetectorBuilder';
    }
}
export { _SelectableTextSelectionGestureDetectorBuilder };
class SelectableText extends StatefulWidget$ {
    constructor(data, namedParameters = {}) {
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
    static rich(textSpan, namedParameters = {}) {
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
}
export { _SelectableTextState };
