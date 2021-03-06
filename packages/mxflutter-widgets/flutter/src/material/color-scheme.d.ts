import { MaterialColor } from './colors';
import { Color, Brightness } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class ColorScheme extends MXDartClass {
    primary: Color;
    primaryVariant: Color;
    secondary: Color;
    secondaryVariant: Color;
    surface: Color;
    background: Color;
    error: Color;
    onPrimary: Color;
    onSecondary: Color;
    onSurface: Color;
    onBackground: Color;
    onError: Color;
    brightness: Brightness;
    constructor(namedParameters?: {
        primary?: Color;
        primaryVariant?: Color;
        secondary?: Color;
        secondaryVariant?: Color;
        surface?: Color;
        background?: Color;
        error?: Color;
        onPrimary?: Color;
        onSecondary?: Color;
        onSurface?: Color;
        onBackground?: Color;
        onError?: Color;
        brightness?: Brightness;
    });
    static fromSwatch(namedParameters?: {
        primarySwatch?: MaterialColor;
        primaryColorDark?: Color;
        accentColor?: Color;
        cardColor?: Color;
        backgroundColor?: Color;
        errorColor?: Color;
        brightness?: Brightness;
    }): ColorScheme;
    static light(namedParameters?: {
        primary?: Color;
        primaryVariant?: Color;
        secondary?: Color;
        secondaryVariant?: Color;
        surface?: Color;
        background?: Color;
        error?: Color;
        onPrimary?: Color;
        onSecondary?: Color;
        onSurface?: Color;
        onBackground?: Color;
        onError?: Color;
        brightness?: Brightness;
    }): ColorScheme;
    static dark(namedParameters?: {
        primary?: Color;
        primaryVariant?: Color;
        secondary?: Color;
        secondaryVariant?: Color;
        surface?: Color;
        background?: Color;
        error?: Color;
        onPrimary?: Color;
        onSecondary?: Color;
        onSurface?: Color;
        onBackground?: Color;
        onError?: Color;
        brightness?: Brightness;
    }): ColorScheme;
    static highContrastLight(namedParameters?: {
        primary?: Color;
        primaryVariant?: Color;
        secondary?: Color;
        secondaryVariant?: Color;
        surface?: Color;
        background?: Color;
        error?: Color;
        onPrimary?: Color;
        onSecondary?: Color;
        onSurface?: Color;
        onBackground?: Color;
        onError?: Color;
        brightness?: Brightness;
    }): ColorScheme;
    static highContrastDark(namedParameters?: {
        primary?: Color;
        primaryVariant?: Color;
        secondary?: Color;
        secondaryVariant?: Color;
        surface?: Color;
        background?: Color;
        error?: Color;
        onPrimary?: Color;
        onSecondary?: Color;
        onSurface?: Color;
        onBackground?: Color;
        onError?: Color;
        brightness?: Brightness;
    }): ColorScheme;
}
export { ColorScheme };
