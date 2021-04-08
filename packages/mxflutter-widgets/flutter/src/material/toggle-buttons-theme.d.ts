import { Key } from '../foundation/key';
import { InheritedTheme } from '../widgets/inherited-theme';
import { BorderRadius } from '../painting/border-radius';
import { Color } from '../../../mx-dart-sdk';
import { BoxConstraints } from '../rendering/box';
import { TextStyle } from '../painting/text-style';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare class ToggleButtonsThemeData extends MXDartClass {
    textStyle: TextStyle;
    constraints: BoxConstraints;
    color: Color;
    selectedColor: Color;
    disabledColor: Color;
    fillColor: Color;
    focusColor: Color;
    highlightColor: Color;
    splashColor: Color;
    hoverColor: Color;
    borderColor: Color;
    selectedBorderColor: Color;
    disabledBorderColor: Color;
    borderWidth: number;
    borderRadius: BorderRadius;
    constructor(namedParameters?: {
        textStyle?: TextStyle;
        constraints?: BoxConstraints;
        color?: Color;
        selectedColor?: Color;
        disabledColor?: Color;
        fillColor?: Color;
        focusColor?: Color;
        highlightColor?: Color;
        hoverColor?: Color;
        splashColor?: Color;
        borderColor?: Color;
        selectedBorderColor?: Color;
        disabledBorderColor?: Color;
        borderRadius?: BorderRadius;
        borderWidth?: number;
    });
}
export { ToggleButtonsThemeData };
declare class ToggleButtonsTheme extends InheritedTheme {
    data: ToggleButtonsThemeData;
    constructor(namedParameters?: {
        key?: Key;
        data?: ToggleButtonsThemeData;
        child?: MXWidget;
    });
}
export { ToggleButtonsTheme };
