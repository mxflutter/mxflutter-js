import { Color } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class IconThemeData extends MXDartClass {
    color: Color;
    opacity: number;
    size: number;
    constructor(namedParameters?: {
        color?: Color;
        opacity?: number;
        size?: number;
    });
    static fallback(): IconThemeData;
    static fromJson(mapObj: any): IconThemeData;
}
export { IconThemeData };
