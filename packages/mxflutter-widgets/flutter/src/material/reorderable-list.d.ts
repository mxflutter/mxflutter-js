import { Size } from '../../../mx-dart-sdk';
import { AnimationController } from '../animation/animation-controller';
import { OverlayEntry } from '../widgets/overlay';
import { Key } from '../foundation/key';
import { EdgeInsets } from '../painting/edge-insets';
import { ScrollController } from '../widgets/scroll-controller';
import { Axis } from '../painting/basic-types';
import { StatefulWidget, State, GlobalKey, GlobalObjectKey } from '../widgets/framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class ReorderableListView extends StatefulWidget {
    header: MXWidget;
    children: Array<any>;
    scrollDirection: Axis;
    scrollController: ScrollController;
    padding: EdgeInsets;
    reverse: boolean;
    onReorder: any;
    constructor(namedParameters?: {
        key?: Key;
        header?: MXWidget;
        children?: Array<any>;
        onReorder?: any;
        scrollController?: ScrollController;
        scrollDirection?: Axis;
        padding?: EdgeInsets;
        reverse?: boolean;
    });
}
export { ReorderableListView };
declare class _ReorderableListViewState extends State {
    overlayKey: GlobalKey;
    listOverlayEntry: OverlayEntry;
}
export { _ReorderableListViewState };
declare class _ReorderableListContent extends StatefulWidget {
    header: MXWidget;
    children: Array<any>;
    scrollController: ScrollController;
    scrollDirection: Axis;
    padding: EdgeInsets;
    onReorder: any;
    reverse: boolean;
    constructor(namedParameters?: {
        header?: MXWidget;
        children?: Array<any>;
        scrollController?: ScrollController;
        scrollDirection?: Axis;
        padding?: EdgeInsets;
        onReorder?: any;
        reverse?: boolean;
    });
}
export { _ReorderableListContent };
declare class _ReorderableListContentState extends State {
    scrollController: ScrollController;
    entranceController: AnimationController;
    ghostController: AnimationController;
    dragging: Key;
    draggingFeedbackSize: Size;
    dragStartIndex: number;
    ghostIndex: number;
    currentIndex: number;
    nextIndex: number;
    scrolling: boolean;
}
export { _ReorderableListContentState };
declare class _ReorderableListViewChildGlobalKey extends GlobalObjectKey {
    subKey: Key;
    state: _ReorderableListContentState;
    constructor(subKey?: Key, state?: _ReorderableListContentState);
}
export { _ReorderableListViewChildGlobalKey };
