import { ShapeBorder } from './borders';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare abstract class NotchedShape extends MXDartClass {
}
export { NotchedShape };
declare class CircularNotchedRectangle extends NotchedShape {
}
export { CircularNotchedRectangle };
declare class AutomaticNotchedShape extends NotchedShape {
    host: ShapeBorder;
    guest: ShapeBorder;
    constructor(host?: ShapeBorder, guest?: ShapeBorder);
}
export { AutomaticNotchedShape };
