import { Key } from '../foundation/key';
import { ValueListenable } from '../foundation/change-notifier';
import { StatefulWidget, State } from './framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class ValueListenableBuilder extends StatefulWidget {
    valueListenable: ValueListenable;
    builder: any;
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        valueListenable?: ValueListenable;
        builder?: any;
        child?: MXWidget;
    });
}
export { ValueListenableBuilder };
declare class _ValueListenableBuilderState extends State {
    value: any;
}
export { _ValueListenableBuilderState };
