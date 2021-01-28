import { Key } from '../foundation/key';
import { StatelessWidget$ } from '../widgets/framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class GridTile extends StatelessWidget$ {
    header: MXWidget;
    footer: MXWidget;
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        header?: MXWidget;
        footer?: MXWidget;
        child?: MXWidget;
    });
}
export { GridTile };
