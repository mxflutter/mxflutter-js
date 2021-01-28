import { Key } from '../foundation/key';
import { InheritedTheme } from '../widgets/inherited-theme';
import { Color } from '../../../mx-dart-sdk';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare class DividerThemeData extends MXDartClass {
    color: Color;
    space: number;
    thickness: number;
    indent: number;
    endIndent: number;
    constructor(namedParameters?: {
        color?: Color;
        space?: number;
        thickness?: number;
        indent?: number;
        endIndent?: number;
    });
}
export { DividerThemeData };
declare class DividerTheme extends InheritedTheme {
    data: DividerThemeData;
    constructor(namedParameters?: {
        key?: Key;
        data?: DividerThemeData;
        child?: MXWidget;
    });
}
export { DividerTheme };
