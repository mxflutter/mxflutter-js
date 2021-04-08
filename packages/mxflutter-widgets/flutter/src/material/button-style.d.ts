import { Duration } from '../../../mx-dart-sdk';
import { VisualDensity, MaterialTapTargetSize } from './theme-data';
import { MaterialStateProperty } from './material-state';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class ButtonStyle extends MXDartClass {
    textStyle: MaterialStateProperty;
    backgroundColor: MaterialStateProperty;
    foregroundColor: MaterialStateProperty;
    overlayColor: MaterialStateProperty;
    shadowColor: MaterialStateProperty;
    elevation: MaterialStateProperty;
    padding: MaterialStateProperty;
    minimumSize: MaterialStateProperty;
    side: MaterialStateProperty;
    shape: MaterialStateProperty;
    mouseCursor: MaterialStateProperty;
    visualDensity: VisualDensity;
    tapTargetSize: MaterialTapTargetSize;
    animationDuration: Duration;
    enableFeedback: boolean;
    constructor(namedParameters?: {
        textStyle?: MaterialStateProperty;
        backgroundColor?: MaterialStateProperty;
        foregroundColor?: MaterialStateProperty;
        overlayColor?: MaterialStateProperty;
        shadowColor?: MaterialStateProperty;
        elevation?: MaterialStateProperty;
        padding?: MaterialStateProperty;
        minimumSize?: MaterialStateProperty;
        side?: MaterialStateProperty;
        shape?: MaterialStateProperty;
        mouseCursor?: MaterialStateProperty;
        visualDensity?: VisualDensity;
        tapTargetSize?: MaterialTapTargetSize;
        animationDuration?: Duration;
        enableFeedback?: boolean;
    });
}
export { ButtonStyle };
declare class _LerpProperties extends MXDartClass {
    a: MaterialStateProperty;
    b: MaterialStateProperty;
    t: number;
    lerpFunction: any;
    constructor(a?: MaterialStateProperty, b?: MaterialStateProperty, t?: number, lerpFunction?: any);
}
export { _LerpProperties };
declare class _LerpSides extends MXDartClass {
    a: MaterialStateProperty;
    b: MaterialStateProperty;
    t: number;
    constructor(a?: MaterialStateProperty, b?: MaterialStateProperty, t?: number);
}
export { _LerpSides };
declare class _LerpShapes extends MXDartClass {
    a: MaterialStateProperty;
    b: MaterialStateProperty;
    t: number;
    constructor(a?: MaterialStateProperty, b?: MaterialStateProperty, t?: number);
}
export { _LerpShapes };
