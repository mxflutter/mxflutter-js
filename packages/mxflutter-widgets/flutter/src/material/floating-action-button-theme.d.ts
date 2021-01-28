import { ShapeBorder } from '../painting/borders';
import { Color } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class FloatingActionButtonThemeData extends MXDartClass {
    foregroundColor: Color;
    backgroundColor: Color;
    focusColor: Color;
    hoverColor: Color;
    splashColor: Color;
    elevation: number;
    focusElevation: number;
    hoverElevation: number;
    disabledElevation: number;
    highlightElevation: number;
    shape: ShapeBorder;
    constructor(namedParameters?: {
        foregroundColor?: Color;
        backgroundColor?: Color;
        focusColor?: Color;
        hoverColor?: Color;
        splashColor?: Color;
        elevation?: number;
        focusElevation?: number;
        hoverElevation?: number;
        disabledElevation?: number;
        highlightElevation?: number;
        shape?: ShapeBorder;
    });
}
export { FloatingActionButtonThemeData };
