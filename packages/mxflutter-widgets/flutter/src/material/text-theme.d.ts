import { TextStyle } from '../painting/text-style';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class TextTheme extends MXDartClass {
    headline1: TextStyle;
    headline2: TextStyle;
    headline3: TextStyle;
    headline4: TextStyle;
    headline5: TextStyle;
    headline6: TextStyle;
    subtitle1: TextStyle;
    subtitle2: TextStyle;
    bodyText1: TextStyle;
    bodyText2: TextStyle;
    caption: TextStyle;
    button: TextStyle;
    overline: TextStyle;
    constructor(namedParameters?: {
        headline1?: TextStyle;
        headline2?: TextStyle;
        headline3?: TextStyle;
        headline4?: TextStyle;
        headline5?: TextStyle;
        headline6?: TextStyle;
        subtitle1?: TextStyle;
        subtitle2?: TextStyle;
        bodyText1?: TextStyle;
        bodyText2?: TextStyle;
        caption?: TextStyle;
        button?: TextStyle;
        overline?: TextStyle;
    });
    static fromJson(mapObj: any): TextTheme;
}
export { TextTheme };
