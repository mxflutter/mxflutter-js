import { Color } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare enum BorderStyle {
    none = "{ \"_name\": \"BorderStyle.none\", \"index\": 0 }",
    solid = "{ \"_name\": \"BorderStyle.solid\", \"index\": 1 }"
}
export { BorderStyle };
declare class BorderSide extends MXDartClass {
    color: Color;
    width: number;
    style: BorderStyle;
    constructor(namedParameters?: {
        color?: Color;
        width?: number;
        style?: BorderStyle;
    });
    static get none(): BorderSide;
}
export { BorderSide };
declare abstract class ShapeBorder extends MXDartClass {
}
export { ShapeBorder };
declare abstract class OutlinedBorder extends ShapeBorder {
    side: BorderSide;
}
export { OutlinedBorder };
declare class _CompoundBorder extends ShapeBorder {
    borders: Array<any>;
    constructor(borders?: Array<any>);
}
export { _CompoundBorder };
