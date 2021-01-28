import { Color } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class CupertinoThumbPainter extends MXDartClass {
    color: Color;
    shadows: Array<any>;
    constructor(namedParameters?: {
        color?: Color;
        shadows?: Array<any>;
    });
    static get radius(): number;
    static get extension(): number;
    static switchThumb(namedParameters?: {
        color?: Color;
        shadows?: Array<any>;
    }): CupertinoThumbPainter;
}
export { CupertinoThumbPainter };
