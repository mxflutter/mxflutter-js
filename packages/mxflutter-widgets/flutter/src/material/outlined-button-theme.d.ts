import { Key } from '../foundation/key';
import { InheritedTheme } from '../widgets/inherited-theme';
import { ButtonStyle } from './button-style';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare class OutlinedButtonThemeData extends MXDartClass {
    style: ButtonStyle;
    constructor(namedParameters?: {
        style?: ButtonStyle;
    });
}
export { OutlinedButtonThemeData };
declare class OutlinedButtonTheme extends InheritedTheme {
    data: OutlinedButtonThemeData;
    constructor(namedParameters?: {
        key?: Key;
        data?: OutlinedButtonThemeData;
        child?: MXWidget;
    });
}
export { OutlinedButtonTheme };
