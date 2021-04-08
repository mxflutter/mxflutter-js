import { RestorationManager } from './restoration';
import { BinaryMessenger } from './binary-messenger';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare abstract class ServicesBinding extends MXDartClass {
    defaultBinaryMessenger: BinaryMessenger;
    restorationManager: RestorationManager;
}
export { ServicesBinding };
declare class _DefaultBinaryMessenger extends BinaryMessenger {
}
export { _DefaultBinaryMessenger };
