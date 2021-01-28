import { TextInputFormatter } from '../services/text-formatter';
import { TextSpan } from '../painting/text-span';
import { ViewportOffset } from '../rendering/viewport-offset';
import { AutofillGroupState } from './autofill';
import { LayerLink } from '../rendering/layer';
import { AnimationController } from '../animation/animation-controller';
import { Key } from '../foundation/key';
import { ScrollPhysics } from './scroll-physics';
import { ScrollController } from './scroll-controller';
import { DragStartBehavior } from '../gestures/recognizer';
import { EdgeInsets } from '../painting/edge-insets';
import { MouseCursor } from '../rendering/mouse-cursor';
import { TextSelectionControls, ClipboardStatusNotifier, TextSelectionOverlay } from './text-selection';
import { StrutStyle } from '../painting/strut-style';
import { TextWidthBasis } from '../painting/text-painter';
import { TextHeightBehavior, TextAlign, TextDirection, Locale, Color, Radius, Offset, BoxHeightStyle, BoxWidthStyle, Brightness, Clip, Rect, TextPosition, TextRange } from '../../../mx-dart-sdk';
import { FocusNode, FocusAttachment } from './focus-manager';
import { StatefulWidget$, State$, GlobalKey, LeafRenderObjectWidget } from './framework';
import { TextEditingValue, SmartDashesType, SmartQuotesType, TextCapitalization, TextInputType, TextInputAction, TextInputConnection, TextSelectionDelegate } from '../services/text-input';
import { TextStyle } from '../painting/text-style';
import { ValueNotifier } from '../foundation/change-notifier';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class TextEditingController extends ValueNotifier {
    constructor(namedParameters?: {
        text?: string;
    });
    static fromValue(value?: TextEditingValue): TextEditingController;
}
export { TextEditingController };
declare class ToolbarOptions extends MXDartClass {
    copy: boolean;
    cut: boolean;
    paste: boolean;
    selectAll: boolean;
    constructor(namedParameters?: {
        copy?: boolean;
        cut?: boolean;
        paste?: boolean;
        selectAll?: boolean;
    });
}
export { ToolbarOptions };
declare class EditableText extends StatefulWidget$ {
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
    constructor(namedParameters?: {
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
    });
}
export { EditableText };
declare class EditableTextState extends State$ {
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
declare class _Editable extends LeafRenderObjectWidget {
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
    constructor(namedParameters?: {
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
    });
}
export { _Editable };
declare class _WhitespaceDirectionalityFormatter extends TextInputFormatter {
    ltrRegExp: any;
    rtlRegExp: any;
    whitespaceRegExp: any;
    baseDirection: TextDirection;
    previousNonWhitespaceDirection: TextDirection;
    hasOpposingDirection: boolean;
    constructor(namedParameters?: {
        textDirection?: TextDirection;
    });
}
export { _WhitespaceDirectionalityFormatter };
