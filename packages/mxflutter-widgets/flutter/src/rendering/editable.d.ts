import { StrutStyle } from '../painting/strut-style';
import { TextSpan } from '../painting/text-span';
import { LongPressGestureRecognizer } from '../gestures/long-press';
import { TapGestureRecognizer } from '../gestures/tap';
import { EdgeInsets } from '../painting/edge-insets';
import { LayerLink } from './layer';
import { ViewportOffset } from './viewport-offset';
import { TextSelection } from '../services/text-editing';
import { TextPainter, TextWidthBasis } from '../painting/text-painter';
import { ValueNotifier } from '../foundation/change-notifier';
import { TextSelectionDelegate } from '../services/text-input';
import { RenderBox } from './box';
import { Offset, TextDirection, Rect, Color, Radius, TextPosition, BoxHeightStyle, BoxWidthStyle, TextRange, Clip, Paint, TextAlign, TextHeightBehavior, Locale } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare enum SelectionChangedCause {
    tap = "{ \"_name\": \"SelectionChangedCause.tap\", \"index\": 0 }",
    doubleTap = "{ \"_name\": \"SelectionChangedCause.doubleTap\", \"index\": 1 }",
    longPress = "{ \"_name\": \"SelectionChangedCause.longPress\", \"index\": 2 }",
    forcePress = "{ \"_name\": \"SelectionChangedCause.forcePress\", \"index\": 3 }",
    keyboard = "{ \"_name\": \"SelectionChangedCause.keyboard\", \"index\": 4 }",
    drag = "{ \"_name\": \"SelectionChangedCause.drag\", \"index\": 5 }"
}
export { SelectionChangedCause };
declare class TextSelectionPoint extends MXDartClass {
    point: Offset;
    direction: TextDirection;
    constructor(point?: Offset, direction?: TextDirection);
}
export { TextSelectionPoint };
declare class RenderEditable extends RenderBox {
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
    cursorHeight: number;
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
    constructor(namedParameters?: {
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
        cursorHeight?: number;
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
    });
}
export { RenderEditable };
