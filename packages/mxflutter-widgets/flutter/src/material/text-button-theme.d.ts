import { Key } from '../foundation/key';
import { InheritedTheme } from '../widgets/inherited-theme';
import { ButtonStyle } from './button-style';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare class TextButtonThemeData extends MXDartClass {
    style: ButtonStyle;
    constructor(namedParameters?: {
        style?: ButtonStyle;
    });
}
export { TextButtonThemeData };
declare class TextButtonTheme extends InheritedTheme {
    data: TextButtonThemeData;
    constructor(namedParameters?: {
        key?: Key;
        data?: TextButtonThemeData;
        child?: MXWidget;
    });
}
export { TextButtonTheme };
