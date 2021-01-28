import { CustomClipper } from '../rendering/proxy-box';
import { ValueListenable } from '../foundation/change-notifier';
import { Key } from '../foundation/key';
import { NotchedShape } from '../painting/notched-shapes';
import { Color, Clip } from '../../../mx-dart-sdk';
import { StatefulWidget$, State$ } from '../widgets/framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class BottomAppBar extends StatefulWidget$ {
    child: MXWidget;
    color: Color;
    elevation: number;
    shape: NotchedShape;
    clipBehavior: Clip;
    notchMargin: number;
    constructor(namedParameters?: {
        key?: Key;
        color?: Color;
        elevation?: number;
        shape?: NotchedShape;
        clipBehavior?: Clip;
        notchMargin?: number;
        child?: MXWidget;
    });
}
export { BottomAppBar };
declare class _BottomAppBarState extends State$ {
    geometryListenable: ValueListenable;
}
export { _BottomAppBarState };
declare class _BottomAppBarClipper extends CustomClipper {
    geometry: ValueListenable;
    shape: NotchedShape;
    notchMargin: number;
    constructor(namedParameters?: {
        geometry?: ValueListenable;
        shape?: NotchedShape;
        notchMargin?: number;
    });
}
export { _BottomAppBarClipper };
