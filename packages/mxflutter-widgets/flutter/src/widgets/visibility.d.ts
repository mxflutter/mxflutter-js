import { Key } from '../foundation/key';
import { StatelessWidget$ } from './framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class Visibility extends StatelessWidget$ {
    child: MXWidget;
    replacement: MXWidget;
    visible: boolean;
    maintainState: boolean;
    maintainAnimation: boolean;
    maintainSize: boolean;
    maintainSemantics: boolean;
    maintainInteractivity: boolean;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        replacement?: MXWidget;
        visible?: boolean;
        maintainState?: boolean;
        maintainAnimation?: boolean;
        maintainSize?: boolean;
        maintainSemantics?: boolean;
        maintainInteractivity?: boolean;
    });
}
export { Visibility };
declare class SliverVisibility extends StatelessWidget$ {
    sliver: MXWidget;
    replacementSliver: MXWidget;
    visible: boolean;
    maintainState: boolean;
    maintainAnimation: boolean;
    maintainSize: boolean;
    maintainSemantics: boolean;
    maintainInteractivity: boolean;
    constructor(namedParameters?: {
        key?: Key;
        sliver?: MXWidget;
        replacementSliver?: MXWidget;
        visible?: boolean;
        maintainState?: boolean;
        maintainAnimation?: boolean;
        maintainSize?: boolean;
        maintainSemantics?: boolean;
        maintainInteractivity?: boolean;
    });
}
export { SliverVisibility };
