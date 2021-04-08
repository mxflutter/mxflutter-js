import { Offset } from '../../../mx-dart-sdk';
import { PointerEvent } from './events';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class PointerEventResampler extends MXDartClass {
    queuedEvents: any;
    last: PointerEvent;
    next: PointerEvent;
    position: Offset;
    isTracked: boolean;
    isDown: boolean;
    pointerIdentifier: number;
}
export { PointerEventResampler };
