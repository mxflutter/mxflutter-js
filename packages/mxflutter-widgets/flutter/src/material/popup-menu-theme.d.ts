import { Key } from '../foundation/key';
import { InheritedTheme } from '../widgets/inherited-theme';
import { TextStyle } from '../painting/text-style';
import { ShapeBorder } from '../painting/borders';
import { Color } from '../../../mx-dart-sdk';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare class PopupMenuThemeData extends MXDartClass {
    color: Color;
    shape: ShapeBorder;
    elevation: number;
    textStyle: TextStyle;
    constructor(namedParameters?: {
        color?: Color;
        shape?: ShapeBorder;
        elevation?: number;
        textStyle?: TextStyle;
    });
}
export { PopupMenuThemeData };
declare class PopupMenuTheme extends InheritedTheme {
    data: PopupMenuThemeData;
    constructor(namedParameters?: {
        key?: Key;
        data?: PopupMenuThemeData;
        child?: MXWidget;
    });
}
export { PopupMenuTheme };
