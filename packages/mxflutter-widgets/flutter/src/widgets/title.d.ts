import { Key } from '../foundation/key';
import { Color } from '../../../mx-dart-sdk';
import { StatelessWidget$ } from './framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class Title extends StatelessWidget$ {
    title: string;
    color: Color;
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        title?: string;
        color?: Color;
        child?: MXWidget;
    });
}
export { Title };
