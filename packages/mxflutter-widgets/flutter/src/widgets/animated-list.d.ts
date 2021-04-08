import { Key } from '../foundation/key';
import { EdgeInsetsGeometry } from '../painting/edge-insets';
import { ScrollPhysics } from './scroll-physics';
import { ScrollController } from './scroll-controller';
import { Axis } from '../painting/basic-types';
import { StatefulWidget, State, GlobalKey } from './framework';
import { AnimationController } from '../animation/animation-controller';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class _ActiveItem extends MXDartClass {
    controller: AnimationController;
    removedItemBuilder: any;
    itemIndex: number;
    static incoming(controller?: AnimationController, itemIndex?: number): _ActiveItem;
    static outgoing(controller?: AnimationController, itemIndex?: number, removedItemBuilder?: any): _ActiveItem;
    static index(itemIndex?: number): _ActiveItem;
}
export { _ActiveItem };
declare class AnimatedList extends StatefulWidget {
    itemBuilder: any;
    initialItemCount: number;
    scrollDirection: Axis;
    reverse: boolean;
    controller: ScrollController;
    primary: boolean;
    physics: ScrollPhysics;
    shrinkWrap: boolean;
    padding: EdgeInsetsGeometry;
    constructor(namedParameters?: {
        key?: Key;
        itemBuilder?: any;
        initialItemCount?: number;
        scrollDirection?: Axis;
        reverse?: boolean;
        controller?: ScrollController;
        primary?: boolean;
        physics?: ScrollPhysics;
        shrinkWrap?: boolean;
        padding?: EdgeInsetsGeometry;
    });
}
export { AnimatedList };
declare class AnimatedListState extends State {
    sliverAnimatedListKey: GlobalKey;
}
export { AnimatedListState };
declare class SliverAnimatedList extends StatefulWidget {
    itemBuilder: any;
    initialItemCount: number;
    constructor(namedParameters?: {
        key?: Key;
        itemBuilder?: any;
        initialItemCount?: number;
    });
}
export { SliverAnimatedList };
declare class SliverAnimatedListState extends State {
    incomingItems: Array<any>;
    outgoingItems: Array<any>;
    itemsCount: number;
}
export { SliverAnimatedListState };
