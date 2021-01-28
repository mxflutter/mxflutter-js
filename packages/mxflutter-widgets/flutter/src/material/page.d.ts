import { LocalKey } from '../foundation/key';
import { RouteSettings, Page } from '../widgets/navigator';
import { PageRoute } from '../widgets/pages';
declare class MaterialPageRoute extends PageRoute {
    builder: any;
    maintainState: boolean;
    constructor(namedParameters?: {
        builder?: any;
        settings?: RouteSettings;
        maintainState?: boolean;
        fullscreenDialog?: boolean;
    });
    preBuild(buildContext: any): void;
}
export { MaterialPageRoute };
declare abstract class MaterialRouteTransitionMixin extends PageRoute {
}
export { MaterialRouteTransitionMixin };
declare class MaterialPage extends Page {
    builder: any;
    maintainState: boolean;
    fullscreenDialog: boolean;
    constructor(namedParameters?: {
        builder?: any;
        maintainState?: boolean;
        fullscreenDialog?: boolean;
        key?: LocalKey;
        name?: string;
        __mx_arguments?: any;
    });
}
export { MaterialPage };
declare class _PageBasedMaterialPageRoute extends PageRoute {
    constructor(namedParameters?: {
        page?: MaterialPage;
    });
}
export { _PageBasedMaterialPageRoute };
