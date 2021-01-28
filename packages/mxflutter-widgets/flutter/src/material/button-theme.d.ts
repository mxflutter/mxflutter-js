import { MaterialTapTargetSize } from './theme-data';
import { ColorScheme } from './color-scheme';
import { Color } from '../../../mx-dart-sdk';
import { ShapeBorder } from '../painting/borders';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { Key } from '../foundation/key';
import { InheritedTheme } from '../widgets/inherited-theme';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare enum ButtonTextTheme {
    normal = "{ \"_name\": \"ButtonTextTheme.normal\", \"index\": 0 }",
    accent = "{ \"_name\": \"ButtonTextTheme.accent\", \"index\": 1 }",
    primary = "{ \"_name\": \"ButtonTextTheme.primary\", \"index\": 2 }"
}
export { ButtonTextTheme };
declare enum ButtonBarLayoutBehavior {
    constrained = "{ \"_name\": \"ButtonBarLayoutBehavior.constrained\", \"index\": 0 }",
    padded = "{ \"_name\": \"ButtonBarLayoutBehavior.padded\", \"index\": 1 }"
}
export { ButtonBarLayoutBehavior };
declare class ButtonTheme extends InheritedTheme {
    data: ButtonThemeData;
    constructor(namedParameters?: {
        key?: Key;
        textTheme?: ButtonTextTheme;
        layoutBehavior?: ButtonBarLayoutBehavior;
        minWidth?: number;
        height?: number;
        padding?: EdgeInsetsGeometry;
        shape?: ShapeBorder;
        alignedDropdown?: boolean;
        buttonColor?: Color;
        disabledColor?: Color;
        focusColor?: Color;
        hoverColor?: Color;
        highlightColor?: Color;
        splashColor?: Color;
        colorScheme?: ColorScheme;
        materialTapTargetSize?: MaterialTapTargetSize;
        child?: MXWidget;
    });
    static fromButtonThemeData(namedParameters?: {
        key?: Key;
        data?: ButtonThemeData;
        child?: MXWidget;
    }): ButtonTheme;
    static bar(namedParameters?: {
        key?: Key;
        textTheme?: ButtonTextTheme;
        minWidth?: number;
        height?: number;
        padding?: EdgeInsetsGeometry;
        shape?: ShapeBorder;
        alignedDropdown?: boolean;
        buttonColor?: Color;
        disabledColor?: Color;
        focusColor?: Color;
        hoverColor?: Color;
        highlightColor?: Color;
        splashColor?: Color;
        colorScheme?: ColorScheme;
        child?: MXWidget;
        layoutBehavior?: ButtonBarLayoutBehavior;
    }): ButtonTheme;
}
export { ButtonTheme };
declare class ButtonThemeData extends MXDartClass {
    minWidth: number;
    height: number;
    textTheme: ButtonTextTheme;
    layoutBehavior: ButtonBarLayoutBehavior;
    padding: EdgeInsetsGeometry;
    shape: ShapeBorder;
    alignedDropdown: boolean;
    buttonColor: Color;
    disabledColor: Color;
    focusColor: Color;
    hoverColor: Color;
    highlightColor: Color;
    splashColor: Color;
    colorScheme: ColorScheme;
    materialTapTargetSize: MaterialTapTargetSize;
    constructor(namedParameters?: {
        textTheme?: ButtonTextTheme;
        minWidth?: number;
        height?: number;
        padding?: EdgeInsetsGeometry;
        shape?: ShapeBorder;
        layoutBehavior?: ButtonBarLayoutBehavior;
        alignedDropdown?: boolean;
        buttonColor?: Color;
        disabledColor?: Color;
        focusColor?: Color;
        hoverColor?: Color;
        highlightColor?: Color;
        splashColor?: Color;
        colorScheme?: ColorScheme;
        materialTapTargetSize?: MaterialTapTargetSize;
    });
}
export { ButtonThemeData };
