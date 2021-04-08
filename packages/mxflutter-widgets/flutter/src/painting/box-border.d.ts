import { Color } from '../../../mx-dart-sdk';
import { ShapeBorder, BorderSide, BorderStyle } from './borders';
declare enum BoxShape {
    rectangle = "{ \"_name\": \"BoxShape.rectangle\", \"index\": 0 }",
    circle = "{ \"_name\": \"BoxShape.circle\", \"index\": 1 }"
}
export { BoxShape };
declare abstract class BoxBorder extends ShapeBorder {
}
export { BoxBorder };
declare class Border extends BoxBorder {
    top: BorderSide;
    right: BorderSide;
    bottom: BorderSide;
    left: BorderSide;
    constructor(namedParameters?: {
        top?: BorderSide;
        right?: BorderSide;
        bottom?: BorderSide;
        left?: BorderSide;
    });
    static all(namedParameters?: {
        color?: Color;
        width?: number;
        style?: BorderStyle;
    }): Border;
    static fromBorderSide(side?: BorderSide): Border;
    static symmetric(namedParameters?: {
        vertical?: BorderSide;
        horizontal?: BorderSide;
    }): Border;
}
export { Border };
declare class BorderDirectional extends BoxBorder {
    top: BorderSide;
    start: BorderSide;
    end: BorderSide;
    bottom: BorderSide;
    constructor(namedParameters?: {
        top?: BorderSide;
        start?: BorderSide;
        end?: BorderSide;
        bottom?: BorderSide;
    });
}
export { BorderDirectional };
