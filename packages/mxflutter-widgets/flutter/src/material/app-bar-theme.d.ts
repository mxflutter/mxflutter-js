import { TextTheme } from './text-theme';
import { IconThemeData } from '../widgets/icon-theme-data';
import { Brightness, Color } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class AppBarTheme extends MXDartClass {
    brightness: Brightness;
    color: Color;
    elevation: number;
    shadowColor: Color;
    iconTheme: IconThemeData;
    actionsIconTheme: IconThemeData;
    textTheme: TextTheme;
    centerTitle: boolean;
    constructor(namedParameters?: {
        brightness?: Brightness;
        color?: Color;
        elevation?: number;
        shadowColor?: Color;
        iconTheme?: IconThemeData;
        actionsIconTheme?: IconThemeData;
        textTheme?: TextTheme;
        centerTitle?: boolean;
    });
}
export { AppBarTheme };
