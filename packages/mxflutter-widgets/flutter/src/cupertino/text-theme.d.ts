import { TextStyle } from '../painting/text-style';
import { Color, Brightness } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class CupertinoTextThemeData extends MXDartClass {
    defaults: _TextThemeDefaultsBuilder;
    primaryColor: Color;
    textStyle: TextStyle;
    actionTextStyle: TextStyle;
    tabLabelTextStyle: TextStyle;
    navTitleTextStyle: TextStyle;
    navLargeTitleTextStyle: TextStyle;
    navActionTextStyle: TextStyle;
    pickerTextStyle: TextStyle;
    dateTimePickerTextStyle: TextStyle;
    constructor(namedParameters?: {
        primaryColor?: Color;
        brightness?: Brightness;
        textStyle?: TextStyle;
        actionTextStyle?: TextStyle;
        tabLabelTextStyle?: TextStyle;
        navTitleTextStyle?: TextStyle;
        navLargeTitleTextStyle?: TextStyle;
        navActionTextStyle?: TextStyle;
        pickerTextStyle?: TextStyle;
        dateTimePickerTextStyle?: TextStyle;
    });
}
export { CupertinoTextThemeData };
declare class _TextThemeDefaultsBuilder extends MXDartClass {
    labelColor: Color;
    inactiveGrayColor: Color;
    constructor(labelColor?: Color, inactiveGrayColor?: Color);
}
export { _TextThemeDefaultsBuilder };
