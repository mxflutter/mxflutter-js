import { Color } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class HSVColor extends MXDartClass {
    alpha: number;
    hue: number;
    saturation: number;
    value: number;
    static fromColor(color?: Color): HSVColor;
    static fromAHSV(alpha?: number, hue?: number, saturation?: number, value?: number): HSVColor;
}
export { HSVColor };
declare class HSLColor extends MXDartClass {
    alpha: number;
    hue: number;
    saturation: number;
    lightness: number;
    static fromColor(color?: Color): HSLColor;
    static fromAHSL(alpha?: number, hue?: number, saturation?: number, lightness?: number): HSLColor;
}
export { HSLColor };
declare class ColorSwatch extends Color {
    swatch: Map<any, any>;
    constructor(primary?: number, _swatch?: Map<any, any>);
}
export { ColorSwatch };
