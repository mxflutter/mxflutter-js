import { AlignmentGeometry } from './alignment';
import { TileMode } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class _ColorsAndStops extends MXDartClass {
    colors: Array<any>;
    stops: Array<any>;
    constructor(colors?: Array<any>, stops?: Array<any>);
}
export { _ColorsAndStops };
declare abstract class GradientTransform extends MXDartClass {
}
export { GradientTransform };
declare class GradientRotation extends GradientTransform {
    radians: number;
    constructor(radians?: number);
}
export { GradientRotation };
declare abstract class Gradient extends MXDartClass {
    colors: Array<any>;
    stops: Array<any>;
    transform: GradientTransform;
}
export { Gradient };
declare class LinearGradient extends Gradient {
    begin: AlignmentGeometry;
    end: AlignmentGeometry;
    tileMode: TileMode;
    constructor(namedParameters?: {
        begin?: AlignmentGeometry;
        end?: AlignmentGeometry;
        colors?: Array<any>;
        stops?: Array<any>;
        tileMode?: TileMode;
        transform?: GradientTransform;
    });
}
export { LinearGradient };
declare class RadialGradient extends Gradient {
    center: AlignmentGeometry;
    radius: number;
    tileMode: TileMode;
    focal: AlignmentGeometry;
    focalRadius: number;
    constructor(namedParameters?: {
        center?: AlignmentGeometry;
        radius?: number;
        colors?: Array<any>;
        stops?: Array<any>;
        tileMode?: TileMode;
        focal?: AlignmentGeometry;
        focalRadius?: number;
        transform?: GradientTransform;
    });
}
export { RadialGradient };
declare class SweepGradient extends Gradient {
    center: AlignmentGeometry;
    startAngle: number;
    endAngle: number;
    tileMode: TileMode;
    constructor(namedParameters?: {
        center?: AlignmentGeometry;
        startAngle?: number;
        endAngle?: number;
        colors?: Array<any>;
        stops?: Array<any>;
        tileMode?: TileMode;
        transform?: GradientTransform;
    });
}
export { SweepGradient };
