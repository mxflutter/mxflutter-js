import { Key } from '../foundation/key';
import { EdgeInsets } from '../painting/edge-insets';
import { StatelessWidget$ } from './framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class SafeArea extends StatelessWidget$ {
    left: boolean;
    top: boolean;
    right: boolean;
    bottom: boolean;
    minimum: EdgeInsets;
    maintainBottomViewPadding: boolean;
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        left?: boolean;
        top?: boolean;
        right?: boolean;
        bottom?: boolean;
        minimum?: EdgeInsets;
        maintainBottomViewPadding?: boolean;
        child?: MXWidget;
    });
}
export { SafeArea };
declare class SliverSafeArea extends StatelessWidget$ {
    left: boolean;
    top: boolean;
    right: boolean;
    bottom: boolean;
    minimum: EdgeInsets;
    sliver: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        left?: boolean;
        top?: boolean;
        right?: boolean;
        bottom?: boolean;
        minimum?: EdgeInsets;
        sliver?: MXWidget;
    });
}
export { SliverSafeArea };
