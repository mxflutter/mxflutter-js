import { StrutStyle } from '../painting/strut-style';
import { InlineSpan } from '../painting/inline-span';
import { StatelessWidget$ } from './framework';
import { Key } from '../foundation/key';
import { TextWidthBasis } from '../painting/text-painter';
import { TextOverflow } from '../rendering/paragraph';
import { TextAlign, TextHeightBehavior, TextDirection, Locale } from '../../../mx-dart-sdk';
import { TextStyle } from '../painting/text-style';
import { InheritedTheme } from './inherited-theme';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class DefaultTextStyle extends InheritedTheme {
    style: TextStyle;
    textAlign: TextAlign;
    softWrap: boolean;
    overflow: TextOverflow;
    maxLines: number;
    textWidthBasis: TextWidthBasis;
    textHeightBehavior: TextHeightBehavior;
    constructor(namedParameters?: {
        key?: Key;
        style?: TextStyle;
        textAlign?: TextAlign;
        softWrap?: boolean;
        overflow?: TextOverflow;
        maxLines?: number;
        textWidthBasis?: TextWidthBasis;
        textHeightBehavior?: TextHeightBehavior;
        child?: MXWidget;
    });
    static fallback(namedParameters?: {
        key?: Key;
    }): DefaultTextStyle;
}
export { DefaultTextStyle };
declare class DefaultTextHeightBehavior extends InheritedTheme {
    textHeightBehavior: TextHeightBehavior;
    constructor(namedParameters?: {
        key?: Key;
        textHeightBehavior?: TextHeightBehavior;
        child?: MXWidget;
    });
}
export { DefaultTextHeightBehavior };
declare class Text extends StatelessWidget$ {
    data: string;
    textSpan: InlineSpan;
    style: TextStyle;
    strutStyle: StrutStyle;
    textAlign: TextAlign;
    textDirection: TextDirection;
    locale: Locale;
    softWrap: boolean;
    overflow: TextOverflow;
    textScaleFactor: number;
    maxLines: number;
    semanticsLabel: string;
    textWidthBasis: TextWidthBasis;
    textHeightBehavior: TextHeightBehavior;
    applyTextScaleFactorToWidgetSpan: boolean;
    constructor(data?: string, namedParameters?: {
        key?: Key;
        style?: TextStyle;
        strutStyle?: StrutStyle;
        textAlign?: TextAlign;
        textDirection?: TextDirection;
        locale?: Locale;
        softWrap?: boolean;
        overflow?: TextOverflow;
        textScaleFactor?: number;
        maxLines?: number;
        semanticsLabel?: string;
        textWidthBasis?: TextWidthBasis;
        textHeightBehavior?: TextHeightBehavior;
    });
    static rich(textSpan?: InlineSpan, namedParameters?: {
        key?: Key;
        style?: TextStyle;
        strutStyle?: StrutStyle;
        textAlign?: TextAlign;
        textDirection?: TextDirection;
        locale?: Locale;
        softWrap?: boolean;
        overflow?: TextOverflow;
        textScaleFactor?: number;
        maxLines?: number;
        semanticsLabel?: string;
        textWidthBasis?: TextWidthBasis;
        textHeightBehavior?: TextHeightBehavior;
        applyTextScaleFactorToWidgetSpan?: boolean;
    }): Text;
}
export { Text };
