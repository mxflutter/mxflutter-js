import { Key } from '../foundation/key';
import { TextWidthBasis } from '../painting/text-painter';
import { ScrollPhysics } from '../widgets/scroll-physics';
import { DragStartBehavior } from '../gestures/recognizer';
import { TextAlign, TextDirection, Radius, Color, TextHeightBehavior } from '../../../mx-dart-sdk';
import { StrutStyle } from '../painting/strut-style';
import { TextStyle } from '../painting/text-style';
import { FocusNode } from '../widgets/focus-manager';
import { StatefulWidget, State, GlobalKey } from '../widgets/framework';
import { TextSelectionGestureDetectorBuilder } from '../widgets/text-selection';
import { TextSpan } from '../painting/text-span';
import { TextEditingController, ToolbarOptions } from '../widgets/editable-text';
declare class _TextSpanEditingController extends TextEditingController {
    textSpan: TextSpan;
    constructor(namedParameters?: {
        textSpan?: TextSpan;
    });
}
export { _TextSpanEditingController };
declare class _SelectableTextSelectionGestureDetectorBuilder extends TextSelectionGestureDetectorBuilder {
    state: _SelectableTextState;
    constructor(namedParameters?: {
        state?: _SelectableTextState;
    });
}
export { _SelectableTextSelectionGestureDetectorBuilder };
declare class SelectableText extends StatefulWidget {
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
    cursorHeight: number;
    cursorRadius: Radius;
    cursorColor: Color;
    enableInteractiveSelection: boolean;
    dragStartBehavior: DragStartBehavior;
    toolbarOptions: ToolbarOptions;
    onTap: any;
    scrollPhysics: ScrollPhysics;
    textHeightBehavior: TextHeightBehavior;
    textWidthBasis: TextWidthBasis;
    constructor(data?: string, namedParameters?: {
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
        cursorHeight?: number;
        cursorRadius?: Radius;
        cursorColor?: Color;
        dragStartBehavior?: DragStartBehavior;
        enableInteractiveSelection?: boolean;
        onTap?: any;
        scrollPhysics?: ScrollPhysics;
        textHeightBehavior?: TextHeightBehavior;
        textWidthBasis?: TextWidthBasis;
    });
    static rich(textSpan?: TextSpan, namedParameters?: {
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
        cursorHeight?: number;
        cursorRadius?: Radius;
        cursorColor?: Color;
        dragStartBehavior?: DragStartBehavior;
        enableInteractiveSelection?: boolean;
        onTap?: any;
        scrollPhysics?: ScrollPhysics;
        textHeightBehavior?: TextHeightBehavior;
        textWidthBasis?: TextWidthBasis;
    }): SelectableText;
}
export { SelectableText };
declare class _SelectableTextState extends State {
    controller: _TextSpanEditingController;
    focusNode: FocusNode;
    showSelectionHandles: boolean;
    selectionGestureDetectorBuilder: _SelectableTextSelectionGestureDetectorBuilder;
    forcePressEnabled: boolean;
    editableTextKey: GlobalKey;
}
export { _SelectableTextState };
