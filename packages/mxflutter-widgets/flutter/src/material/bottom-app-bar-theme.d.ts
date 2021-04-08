import { NotchedShape } from '../painting/notched-shapes';
import { Color } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class BottomAppBarTheme extends MXDartClass {
    color: Color;
    elevation: number;
    shape: NotchedShape;
    constructor(namedParameters?: {
        color?: Color;
        elevation?: number;
        shape?: NotchedShape;
    });
}
export { BottomAppBarTheme };
