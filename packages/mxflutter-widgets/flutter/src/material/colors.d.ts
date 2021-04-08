import { Color } from '../../../mx-dart-sdk';
import { ColorSwatch } from '../painting/colors';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class MaterialColor extends ColorSwatch {
    constructor(primary?: number, swatch?: Map<any, any>);
}
export { MaterialColor };
declare class MaterialAccentColor extends ColorSwatch {
    constructor(primary?: number, swatch?: Map<any, any>);
}
export { MaterialAccentColor };
declare class Colors extends MXDartClass {
    static get transparent(): Color;
    static get black(): Color;
    static get black87(): Color;
    static get black54(): Color;
    static get black45(): Color;
    static get black38(): Color;
    static get black26(): Color;
    static get black12(): Color;
    static get white(): Color;
    static get white70(): Color;
    static get white60(): Color;
    static get white54(): Color;
    static get white38(): Color;
    static get white30(): Color;
    static get white24(): Color;
    static get white12(): Color;
    static get white10(): Color;
    static get red(): MaterialColor;
    static get redAccent(): MaterialAccentColor;
    static get pink(): MaterialColor;
    static get pinkAccent(): MaterialAccentColor;
    static get purple(): MaterialColor;
    static get purpleAccent(): MaterialAccentColor;
    static get deepPurple(): MaterialColor;
    static get deepPurpleAccent(): MaterialAccentColor;
    static get indigo(): MaterialColor;
    static get indigoAccent(): MaterialAccentColor;
    static get blue(): MaterialColor;
    static get blueAccent(): MaterialAccentColor;
    static get lightBlue(): MaterialColor;
    static get lightBlueAccent(): MaterialAccentColor;
    static get cyan(): MaterialColor;
    static get cyanAccent(): MaterialAccentColor;
    static get teal(): MaterialColor;
    static get tealAccent(): MaterialAccentColor;
    static get green(): MaterialColor;
    static get greenAccent(): MaterialAccentColor;
    static get lightGreen(): MaterialColor;
    static get lightGreenAccent(): MaterialAccentColor;
    static get lime(): MaterialColor;
    static get limeAccent(): MaterialAccentColor;
    static get yellow(): MaterialColor;
    static get yellowAccent(): MaterialAccentColor;
    static get amber(): MaterialColor;
    static get amberAccent(): MaterialAccentColor;
    static get orange(): MaterialColor;
    static get orangeAccent(): MaterialAccentColor;
    static get deepOrange(): MaterialColor;
    static get deepOrangeAccent(): MaterialAccentColor;
    static get brown(): MaterialColor;
    static get grey(): MaterialColor;
    static get blueGrey(): MaterialColor;
    static get primaries(): MaterialColor[];
    static get accents(): MaterialAccentColor[];
}
export { Colors };
