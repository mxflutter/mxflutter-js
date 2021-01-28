import { Color } from '../../../mx-dart-sdk';
import { BorderSide, BorderStyle } from '../painting/borders';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class TableBorder extends MXDartClass {
    top: BorderSide;
    right: BorderSide;
    bottom: BorderSide;
    left: BorderSide;
    horizontalInside: BorderSide;
    verticalInside: BorderSide;
    constructor(namedParameters?: {
        top?: BorderSide;
        right?: BorderSide;
        bottom?: BorderSide;
        left?: BorderSide;
        horizontalInside?: BorderSide;
        verticalInside?: BorderSide;
    });
    static all(namedParameters?: {
        color?: Color;
        width?: number;
        style?: BorderStyle;
    }): TableBorder;
    static symmetric(namedParameters?: {
        inside?: BorderSide;
        outside?: BorderSide;
    }): TableBorder;
}
export { TableBorder };
