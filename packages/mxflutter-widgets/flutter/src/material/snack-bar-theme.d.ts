import { ShapeBorder } from '../painting/borders';
import { TextStyle } from '../painting/text-style';
import { Color } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare enum SnackBarBehavior {
    fixed = "{ \"_name\": \"SnackBarBehavior.fixed\", \"index\": 0 }",
    floating = "{ \"_name\": \"SnackBarBehavior.floating\", \"index\": 1 }"
}
export { SnackBarBehavior };
declare class SnackBarThemeData extends MXDartClass {
    backgroundColor: Color;
    actionTextColor: Color;
    disabledActionTextColor: Color;
    contentTextStyle: TextStyle;
    elevation: number;
    shape: ShapeBorder;
    behavior: SnackBarBehavior;
    constructor(namedParameters?: {
        backgroundColor?: Color;
        actionTextColor?: Color;
        disabledActionTextColor?: Color;
        contentTextStyle?: TextStyle;
        elevation?: number;
        shape?: ShapeBorder;
        behavior?: SnackBarBehavior;
    });
}
export { SnackBarThemeData };
