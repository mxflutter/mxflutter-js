import { TextStyle } from './text-style';
import { FontWeight, FontStyle } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class StrutStyle extends MXDartClass {
    fontFamily: string;
    fontFamilyFallback: Array<any>;
    __mx_package: string;
    fontSize: number;
    height: number;
    fontWeight: FontWeight;
    fontStyle: FontStyle;
    leading: number;
    forceStrutHeight: boolean;
    debugLabel: string;
    constructor(namedParameters?: {
        fontFamily?: string;
        fontFamilyFallback?: Array<any>;
        fontSize?: number;
        height?: number;
        leading?: number;
        fontWeight?: FontWeight;
        fontStyle?: FontStyle;
        forceStrutHeight?: boolean;
        debugLabel?: string;
        __mx_package?: string;
    });
    static get disabled(): StrutStyle;
    static fromTextStyle(textStyle?: TextStyle, namedParameters?: {
        fontFamily?: string;
        fontFamilyFallback?: Array<any>;
        fontSize?: number;
        height?: number;
        leading?: number;
        fontWeight?: FontWeight;
        fontStyle?: FontStyle;
        forceStrutHeight?: boolean;
        debugLabel?: string;
        __mx_package?: string;
    }): StrutStyle;
}
export { StrutStyle };
