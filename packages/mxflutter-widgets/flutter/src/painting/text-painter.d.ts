import { StrutStyle } from './strut-style';
import { InlineSpan } from './inline-span';
import { Size, PlaceholderAlignment, TextBaseline, Offset, Paragraph, TextAlign, TextDirection, Locale, TextHeightBehavior, TextPosition, Rect } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class PlaceholderDimensions extends MXDartClass {
    size: Size;
    alignment: PlaceholderAlignment;
    baselineOffset: number;
    baseline: TextBaseline;
    constructor(namedParameters?: {
        size?: Size;
        alignment?: PlaceholderAlignment;
        baseline?: TextBaseline;
        baselineOffset?: number;
    });
    static get empty(): PlaceholderDimensions;
}
export { PlaceholderDimensions };
declare enum TextWidthBasis {
    parent = "{ \"_name\": \"TextWidthBasis.parent\", \"index\": 0 }",
    longestLine = "{ \"_name\": \"TextWidthBasis.longestLine\", \"index\": 1 }"
}
export { TextWidthBasis };
declare class _CaretMetrics extends MXDartClass {
    offset: Offset;
    fullHeight: number;
    constructor(namedParameters?: {
        offset?: Offset;
        fullHeight?: number;
    });
}
export { _CaretMetrics };
declare class TextPainter extends MXDartClass {
    paragraph: Paragraph;
    needsLayout: boolean;
    text: InlineSpan;
    textAlign: TextAlign;
    textDirection: TextDirection;
    textScaleFactor: number;
    ellipsis: string;
    locale: Locale;
    maxLines: number;
    strutStyle: StrutStyle;
    textWidthBasis: TextWidthBasis;
    textHeightBehavior: TextHeightBehavior;
    layoutTemplate: Paragraph;
    inlinePlaceholderBoxes: Array<any>;
    inlinePlaceholderScales: Array<any>;
    placeholderDimensions: Array<any>;
    lastMinWidth: number;
    lastMaxWidth: number;
    caretMetrics: _CaretMetrics;
    previousCaretPosition: TextPosition;
    previousCaretPrototype: Rect;
    constructor(namedParameters?: {
        text?: InlineSpan;
        textAlign?: TextAlign;
        textDirection?: TextDirection;
        textScaleFactor?: number;
        maxLines?: number;
        ellipsis?: string;
        locale?: Locale;
        strutStyle?: StrutStyle;
        textWidthBasis?: TextWidthBasis;
        textHeightBehavior?: TextHeightBehavior;
    });
}
export { TextPainter };
