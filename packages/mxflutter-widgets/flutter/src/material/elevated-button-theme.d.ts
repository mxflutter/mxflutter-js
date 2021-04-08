import { Key } from '../foundation/key';
import { InheritedTheme } from '../widgets/inherited-theme';
import { ButtonStyle } from './button-style';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare class ElevatedButtonThemeData extends MXDartClass {
    style: ButtonStyle;
    constructor(namedParameters?: {
        style?: ButtonStyle;
    });
}
export { ElevatedButtonThemeData };
declare class ElevatedButtonTheme extends InheritedTheme {
    data: ElevatedButtonThemeData;
    constructor(namedParameters?: {
        key?: Key;
        data?: ElevatedButtonThemeData;
        child?: MXWidget;
    });
}
export { ElevatedButtonTheme };
