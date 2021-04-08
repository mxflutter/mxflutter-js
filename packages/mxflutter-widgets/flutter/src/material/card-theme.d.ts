import { ShapeBorder } from '../painting/borders';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { Clip, Color } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class CardTheme extends MXDartClass {
    clipBehavior: Clip;
    color: Color;
    shadowColor: Color;
    elevation: number;
    margin: EdgeInsetsGeometry;
    shape: ShapeBorder;
    constructor(namedParameters?: {
        clipBehavior?: Clip;
        color?: Color;
        shadowColor?: Color;
        elevation?: number;
        margin?: EdgeInsetsGeometry;
        shape?: ShapeBorder;
    });
}
export { CardTheme };
