import { Key } from '../foundation/key';
import { InheritedWidget, StatefulWidget, State } from '../widgets/framework';
import { TickerProvider } from '../scheduler/ticker';
import { AnimationController } from '../animation/animation-controller';
import { ChangeNotifier } from '../foundation/change-notifier';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class TabController extends ChangeNotifier {
    animationController: AnimationController;
    length: number;
    _index: number;
    previousIndex: number;
    indexIsChangingCount: number;
    constructor(namedParameters?: {
        initialIndex?: number;
        length?: number;
        vsync?: TickerProvider;
    });
    indexIsChanging: number;
    offset: number;
    addListener(listener: Function): void;
    listenerCallback(args: any): void;
    get index(): number;
    set index(index: number);
}
export { TabController };
declare class _TabControllerScope extends InheritedWidget {
    controller: TabController;
    enabled: boolean;
    constructor(namedParameters?: {
        key?: Key;
        controller?: TabController;
        enabled?: boolean;
        child?: MXWidget;
    });
}
export { _TabControllerScope };
declare class DefaultTabController extends StatefulWidget {
    length: number;
    initialIndex: number;
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        length?: number;
        initialIndex?: number;
        child?: MXWidget;
    });
}
export { DefaultTabController };
declare class _DefaultTabControllerState extends State {
    controller: TabController;
}
export { _DefaultTabControllerState };
