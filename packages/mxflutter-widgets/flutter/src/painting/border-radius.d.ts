import { Radius } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare abstract class BorderRadiusGeometry extends MXDartClass {
}
export { BorderRadiusGeometry };
declare class BorderRadius extends BorderRadiusGeometry {
    topLeft: Radius;
    topRight: Radius;
    bottomLeft: Radius;
    bottomRight: Radius;
    static get zero(): BorderRadius;
    static all(radius?: Radius): BorderRadius;
    static circular(radius?: number): BorderRadius;
    static vertical(namedParameters?: {
        top?: Radius;
        bottom?: Radius;
    }): BorderRadius;
    static horizontal(namedParameters?: {
        left?: Radius;
        right?: Radius;
    }): BorderRadius;
    static only(namedParameters?: {
        topLeft?: Radius;
        topRight?: Radius;
        bottomLeft?: Radius;
        bottomRight?: Radius;
    }): BorderRadius;
}
export { BorderRadius };
declare class BorderRadiusDirectional extends BorderRadiusGeometry {
    topStart: Radius;
    topEnd: Radius;
    bottomStart: Radius;
    bottomEnd: Radius;
    static get zero(): BorderRadiusDirectional;
    static all(radius?: Radius): BorderRadiusDirectional;
    static circular(radius?: number): BorderRadiusDirectional;
    static vertical(namedParameters?: {
        top?: Radius;
        bottom?: Radius;
    }): BorderRadiusDirectional;
    static horizontal(namedParameters?: {
        start?: Radius;
        end?: Radius;
    }): BorderRadiusDirectional;
    static only(namedParameters?: {
        topStart?: Radius;
        topEnd?: Radius;
        bottomStart?: Radius;
        bottomEnd?: Radius;
    }): BorderRadiusDirectional;
}
export { BorderRadiusDirectional };
declare class _MixedBorderRadius extends BorderRadiusGeometry {
    topLeft: Radius;
    topRight: Radius;
    bottomLeft: Radius;
    bottomRight: Radius;
    topStart: Radius;
    topEnd: Radius;
    bottomStart: Radius;
    bottomEnd: Radius;
    constructor(_topLeft?: Radius, _topRight?: Radius, _bottomLeft?: Radius, _bottomRight?: Radius, _topStart?: Radius, _topEnd?: Radius, _bottomStart?: Radius, _bottomEnd?: Radius);
}
export { _MixedBorderRadius };
