import { Color, FontWeight, FontStyle, TextBaseline, Locale, Paint, TextDecoration, TextDecorationStyle } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class TextStyle extends MXDartClass {
    inherit: boolean;
    color: Color;
    backgroundColor: Color;
    fontFamily: string;
    fontFamilyFallback: Array<any>;
    __mx_package: string;
    fontSize: number;
    fontWeight: FontWeight;
    fontStyle: FontStyle;
    letterSpacing: number;
    wordSpacing: number;
    textBaseline: TextBaseline;
    height: number;
    locale: Locale;
    foreground: Paint;
    background: Paint;
    decoration: TextDecoration;
    decorationColor: Color;
    decorationStyle: TextDecorationStyle;
    decorationThickness: number;
    debugLabel: string;
    shadows: Array<any>;
    fontFeatures: Array<any>;
    constructor(namedParameters?: {
        inherit?: boolean;
        color?: Color;
        backgroundColor?: Color;
        fontSize?: number;
        fontWeight?: FontWeight;
        fontStyle?: FontStyle;
        letterSpacing?: number;
        wordSpacing?: number;
        textBaseline?: TextBaseline;
        height?: number;
        locale?: Locale;
        foreground?: Paint;
        background?: Paint;
        shadows?: Array<any>;
        fontFeatures?: Array<any>;
        decoration?: TextDecoration;
        decorationColor?: Color;
        decorationStyle?: TextDecorationStyle;
        decorationThickness?: number;
        debugLabel?: string;
        fontFamily?: string;
        fontFamilyFallback?: Array<any>;
        __mx_package?: string;
    });
    static fromJson(mapObj: any): TextStyle;
}
export { TextStyle };
