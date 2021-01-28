import { Key } from '../foundation/key';
import { Size } from '../../../mx-dart-sdk';
import { StatelessWidget$ } from './framework';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare abstract class PreferredSizeWidget extends MXDartClass {
}
export { PreferredSizeWidget };
declare class PreferredSize extends StatelessWidget$ {
    child: MXWidget;
    preferredSize: Size;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        preferredSize?: Size;
    });
}
export { PreferredSize };
