import { ShapeBorder } from '../painting/borders';
import { Color, Clip } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class BottomSheetThemeData extends MXDartClass {
    backgroundColor: Color;
    elevation: number;
    modalBackgroundColor: Color;
    modalElevation: number;
    shape: ShapeBorder;
    clipBehavior: Clip;
    constructor(namedParameters?: {
        backgroundColor?: Color;
        elevation?: number;
        modalBackgroundColor?: Color;
        modalElevation?: number;
        shape?: ShapeBorder;
        clipBehavior?: Clip;
    });
}
export { BottomSheetThemeData };
