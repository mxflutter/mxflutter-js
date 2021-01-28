import { Key } from '../foundation/key';
import { ScrollPhysics } from '../widgets/scroll-physics';
import { ScrollController } from '../widgets/scroll-controller';
import { DragStartBehavior } from '../gestures/recognizer';
import { TextAlignVertical } from '../painting/alignment';
import { TextAlign, Radius, Color, BoxHeightStyle, BoxWidthStyle, Brightness } from '../../../mx-dart-sdk';
import { StrutStyle } from '../painting/strut-style';
import { TextInputType, TextInputAction, TextCapitalization, SmartDashesType, SmartQuotesType } from '../services/text-input';
import { TextStyle } from '../painting/text-style';
import { EdgeInsetsGeometry, EdgeInsets } from '../painting/edge-insets';
import { BoxDecoration } from '../painting/box-decoration';
import { FocusNode } from '../widgets/focus-manager';
import { TextEditingController, ToolbarOptions } from '../widgets/editable-text';
import { StatefulWidget$, State$, GlobalKey } from '../widgets/framework';
import { TextSelectionGestureDetectorBuilder } from '../widgets/text-selection';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare enum OverlayVisibilityMode {
    never = "{ \"_name\": \"OverlayVisibilityMode.never\", \"index\": 0 }",
    editing = "{ \"_name\": \"OverlayVisibilityMode.editing\", \"index\": 1 }",
    notEditing = "{ \"_name\": \"OverlayVisibilityMode.notEditing\", \"index\": 2 }",
    always = "{ \"_name\": \"OverlayVisibilityMode.always\", \"index\": 3 }"
}
export { OverlayVisibilityMode };
declare class _CupertinoTextFieldSelectionGestureDetectorBuilder extends TextSelectionGestureDetectorBuilder {
    state: _CupertinoTextFieldState;
    constructor(namedParameters?: {
        state?: _CupertinoTextFieldState;
    });
}
export { _CupertinoTextFieldSelectionGestureDetectorBuilder };
declare class CupertinoTextField extends StatefulWidget$ {
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
    constructor(namedParameters?: {
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
    });
}
export { CupertinoTextField };
declare class _CupertinoTextFieldState extends State$ {
    clearGlobalKey: GlobalKey;
    controller: TextEditingController;
    focusNode: FocusNode;
    showSelectionHandles: boolean;
    selectionGestureDetectorBuilder: _CupertinoTextFieldSelectionGestureDetectorBuilder;
    editableTextKey: GlobalKey;
}
export { _CupertinoTextFieldState };
