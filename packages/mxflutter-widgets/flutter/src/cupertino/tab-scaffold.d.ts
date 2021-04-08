import { Key } from '../foundation/key';
import { Color } from '../../../mx-dart-sdk';
import { CupertinoTabBar } from './bottom-tab-bar';
import { StatefulWidget, State } from '../widgets/framework';
import { ChangeNotifier } from '../foundation/change-notifier';
declare class CupertinoTabController extends ChangeNotifier {
    isDisposed: boolean;
    index: number;
    constructor(namedParameters?: {
        initialIndex?: number;
    });
}
export { CupertinoTabController };
declare class CupertinoTabScaffold extends StatefulWidget {
    tabBar: CupertinoTabBar;
    controller: CupertinoTabController;
    tabBuilder: any;
    backgroundColor: Color;
    resizeToAvoidBottomInset: boolean;
    constructor(namedParameters?: {
        key?: Key;
        tabBar?: CupertinoTabBar;
        tabBuilder?: any;
        controller?: CupertinoTabController;
        backgroundColor?: Color;
        resizeToAvoidBottomInset?: boolean;
    });
    preBuild(buildContext: any): void;
}
export { CupertinoTabScaffold };
declare class _CupertinoTabScaffoldState extends State {
    controller: CupertinoTabController;
}
export { _CupertinoTabScaffoldState };
declare class _TabSwitchingView extends StatefulWidget {
    currentTabIndex: number;
    tabCount: number;
    tabBuilder: any;
    constructor(namedParameters?: {
        currentTabIndex?: number;
        tabCount?: number;
        tabBuilder?: any;
    });
}
export { _TabSwitchingView };
declare class _TabSwitchingViewState extends State {
    shouldBuildTab: Array<any>;
    tabFocusNodes: Array<any>;
    discardedNodes: Array<any>;
}
export { _TabSwitchingViewState };
