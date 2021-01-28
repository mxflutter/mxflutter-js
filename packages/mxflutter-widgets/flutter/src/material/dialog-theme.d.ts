import { TextStyle } from '../painting/text-style';
import { ShapeBorder } from '../painting/borders';
import { Color } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class DialogTheme extends MXDartClass {
    backgroundColor: Color;
    elevation: number;
    shape: ShapeBorder;
    titleTextStyle: TextStyle;
    contentTextStyle: TextStyle;
    constructor(namedParameters?: {
        backgroundColor?: Color;
        elevation?: number;
        shape?: ShapeBorder;
        titleTextStyle?: TextStyle;
        contentTextStyle?: TextStyle;
    });
}
export { DialogTheme };
