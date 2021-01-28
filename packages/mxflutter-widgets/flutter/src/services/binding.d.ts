import { BinaryMessenger } from './binary-messenger';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare abstract class ServicesBinding extends MXDartClass {
    defaultBinaryMessenger: BinaryMessenger;
}
export { ServicesBinding };
declare class _DefaultBinaryMessenger extends BinaryMessenger {
}
export { _DefaultBinaryMessenger };
