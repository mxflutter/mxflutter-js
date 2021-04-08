import { RenderBox } from './box';
import { Matrix4 } from '../../../vector-math-64';
import { RenderObject } from './object';
import { Size, Window } from '../../../mx-dart-sdk';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class ViewConfiguration extends MXDartClass {
    size: Size;
    devicePixelRatio: number;
    constructor(namedParameters?: {
        size?: Size;
        devicePixelRatio?: number;
    });
}
export { ViewConfiguration };
declare class RenderView extends RenderObject {
    size: Size;
    configuration: ViewConfiguration;
    window: Window;
    automaticSystemUiAdjustment: boolean;
    rootTransform: Matrix4;
    constructor(namedParameters?: {
        child?: RenderBox;
        configuration?: ViewConfiguration;
        window?: Window;
    });
}
export { RenderView };
