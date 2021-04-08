import { Key } from '../foundation/key';
import { InheritedTheme } from '../widgets/inherited-theme';
import { Color } from '../../../mx-dart-sdk';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare class TextSelectionThemeData extends MXDartClass {
    cursorColor: Color;
    selectionColor: Color;
    selectionHandleColor: Color;
    constructor(namedParameters?: {
        cursorColor?: Color;
        selectionColor?: Color;
        selectionHandleColor?: Color;
    });
}
export { TextSelectionThemeData };
declare class TextSelectionTheme extends InheritedTheme {
    data: TextSelectionThemeData;
    constructor(namedParameters?: {
        key?: Key;
        data?: TextSelectionThemeData;
        child?: MXWidget;
    });
}
export { TextSelectionTheme };
