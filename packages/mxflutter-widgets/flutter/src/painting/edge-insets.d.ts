import { WindowPadding } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare abstract class EdgeInsetsGeometry extends MXDartClass {
    static get infinity(): {
        className: string;
        mirrorID: string;
    };
}
export { EdgeInsetsGeometry };
declare class EdgeInsets extends EdgeInsetsGeometry {
    left: number;
    top: number;
    right: number;
    bottom: number;
    static get zero(): EdgeInsets;
    static fromLTRB(left?: number, top?: number, right?: number, bottom?: number): EdgeInsets;
    static all(value?: number): EdgeInsets;
    static only(namedParameters?: {
        left?: number;
        top?: number;
        right?: number;
        bottom?: number;
    }): EdgeInsets;
    static symmetric(namedParameters?: {
        vertical?: number;
        horizontal?: number;
    }): EdgeInsets;
    static fromWindowPadding(padding?: WindowPadding, devicePixelRatio?: number): EdgeInsets;
    static fromJson(mapObj: any): EdgeInsets;
}
export { EdgeInsets };
declare class EdgeInsetsDirectional extends EdgeInsetsGeometry {
    start: number;
    top: number;
    end: number;
    bottom: number;
    static get zero(): EdgeInsetsDirectional;
    static fromSTEB(start?: number, top?: number, end?: number, bottom?: number): EdgeInsetsDirectional;
    static only(namedParameters?: {
        start?: number;
        top?: number;
        end?: number;
        bottom?: number;
    }): EdgeInsetsDirectional;
}
export { EdgeInsetsDirectional };
declare class _MixedEdgeInsets extends EdgeInsetsGeometry {
    left: number;
    right: number;
    start: number;
    end: number;
    top: number;
    bottom: number;
    static fromLRSETB(_left?: number, _right?: number, _start?: number, _end?: number, _top?: number, _bottom?: number): _MixedEdgeInsets;
}
export { _MixedEdgeInsets };
