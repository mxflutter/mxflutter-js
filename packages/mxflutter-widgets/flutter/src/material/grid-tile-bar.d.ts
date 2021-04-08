import { Key } from '../foundation/key';
import { Color } from '../../../mx-dart-sdk';
import { StatelessWidget } from '../widgets/framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class GridTileBar extends StatelessWidget {
    backgroundColor: Color;
    leading: MXWidget;
    title: MXWidget;
    subtitle: MXWidget;
    trailing: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        backgroundColor?: Color;
        leading?: MXWidget;
        title?: MXWidget;
        subtitle?: MXWidget;
        trailing?: MXWidget;
    });
}
export { GridTileBar };
