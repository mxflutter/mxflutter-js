import { Key } from '../foundation/key';
import { StatelessWidget$ } from './framework';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare abstract class Notification extends MXDartClass {
}
export { Notification };
declare class NotificationListener extends StatelessWidget$ {
    child: MXWidget;
    onNotification: any;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        onNotification?: any;
    });
}
export { NotificationListener };
declare class LayoutChangedNotification extends Notification {
}
export { LayoutChangedNotification };
