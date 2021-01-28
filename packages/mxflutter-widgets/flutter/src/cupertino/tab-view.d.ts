import { HeroController } from '../widgets/heroes';
import { Key } from '../foundation/key';
import { StatefulWidget$, GlobalKey, State$ } from '../widgets/framework';
declare class CupertinoTabView extends StatefulWidget$ {
    builder: any;
    navigatorKey: GlobalKey;
    defaultTitle: string;
    routes: Map<any, any>;
    onGenerateRoute: any;
    onUnknownRoute: any;
    navigatorObservers: Array<any>;
    constructor(namedParameters?: {
        key?: Key;
        builder?: any;
        navigatorKey?: GlobalKey;
        defaultTitle?: string;
        routes?: Map<any, any>;
        onGenerateRoute?: any;
        onUnknownRoute?: any;
        navigatorObservers?: Array<any>;
    });
}
export { CupertinoTabView };
declare class _CupertinoTabViewState extends State$ {
    heroController: HeroController;
    navigatorObservers: Array<any>;
}
export { _CupertinoTabViewState };
