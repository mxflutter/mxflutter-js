import { Key } from '../foundation/key';
import { InheritedTheme } from '../widgets/inherited-theme';
import { InputDecorationTheme } from './input-decorator';
import { ShapeBorder, OutlinedBorder, BorderSide } from '../painting/borders';
import { TextStyle } from '../painting/text-style';
import { Color } from '../../../mx-dart-sdk';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare class TimePickerThemeData extends MXDartClass {
    backgroundColor: Color;
    hourMinuteTextColor: Color;
    hourMinuteColor: Color;
    dayPeriodTextColor: Color;
    dayPeriodColor: Color;
    dialHandColor: Color;
    dialBackgroundColor: Color;
    dialTextColor: Color;
    entryModeIconColor: Color;
    hourMinuteTextStyle: TextStyle;
    dayPeriodTextStyle: TextStyle;
    helpTextStyle: TextStyle;
    shape: ShapeBorder;
    hourMinuteShape: ShapeBorder;
    dayPeriodShape: OutlinedBorder;
    dayPeriodBorderSide: BorderSide;
    inputDecorationTheme: InputDecorationTheme;
    constructor(namedParameters?: {
        backgroundColor?: Color;
        hourMinuteTextColor?: Color;
        hourMinuteColor?: Color;
        dayPeriodTextColor?: Color;
        dayPeriodColor?: Color;
        dialHandColor?: Color;
        dialBackgroundColor?: Color;
        dialTextColor?: Color;
        entryModeIconColor?: Color;
        hourMinuteTextStyle?: TextStyle;
        dayPeriodTextStyle?: TextStyle;
        helpTextStyle?: TextStyle;
        shape?: ShapeBorder;
        hourMinuteShape?: ShapeBorder;
        dayPeriodShape?: OutlinedBorder;
        dayPeriodBorderSide?: BorderSide;
        inputDecorationTheme?: InputDecorationTheme;
    });
}
export { TimePickerThemeData };
declare class TimePickerTheme extends InheritedTheme {
    data: TimePickerThemeData;
    constructor(namedParameters?: {
        key?: Key;
        data?: TimePickerThemeData;
        child?: MXWidget;
    });
}
export { TimePickerTheme };
