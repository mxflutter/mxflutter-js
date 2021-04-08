import { TextStyle } from '../painting/text-style';
import { ShapeBorder } from '../painting/borders';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { Color, Brightness } from '../../../mx-dart-sdk';
import { Key } from '../foundation/key';
import { InheritedTheme } from '../widgets/inherited-theme';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare class ChipTheme extends InheritedTheme {
    data: ChipThemeData;
    constructor(namedParameters?: {
        key?: Key;
        data?: ChipThemeData;
        child?: MXWidget;
    });
}
export { ChipTheme };
declare class ChipThemeData extends MXDartClass {
    backgroundColor: Color;
    deleteIconColor: Color;
    disabledColor: Color;
    selectedColor: Color;
    secondarySelectedColor: Color;
    shadowColor: Color;
    selectedShadowColor: Color;
    showCheckmark: boolean;
    checkmarkColor: Color;
    labelPadding: EdgeInsetsGeometry;
    padding: EdgeInsetsGeometry;
    shape: ShapeBorder;
    labelStyle: TextStyle;
    secondaryLabelStyle: TextStyle;
    brightness: Brightness;
    elevation: number;
    pressElevation: number;
    constructor(namedParameters?: {
        backgroundColor?: Color;
        deleteIconColor?: Color;
        disabledColor?: Color;
        selectedColor?: Color;
        secondarySelectedColor?: Color;
        shadowColor?: Color;
        selectedShadowColor?: Color;
        showCheckmark?: boolean;
        checkmarkColor?: Color;
        labelPadding?: EdgeInsetsGeometry;
        padding?: EdgeInsetsGeometry;
        shape?: ShapeBorder;
        labelStyle?: TextStyle;
        secondaryLabelStyle?: TextStyle;
        brightness?: Brightness;
        elevation?: number;
        pressElevation?: number;
    });
    static fromDefaults(namedParameters?: {
        brightness?: Brightness;
        primaryColor?: Color;
        secondaryColor?: Color;
        labelStyle?: TextStyle;
    }): ChipThemeData;
}
export { ChipThemeData };
