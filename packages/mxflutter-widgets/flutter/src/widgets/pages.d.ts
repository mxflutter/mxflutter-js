import { LocalKey } from '../foundation/key';
import { RouteSettings, Page } from './navigator';
import { Color } from '../../../mx-dart-sdk';
import { Duration } from '../../../mx-dart-sdk';
import { ModalRoute } from './routes';
declare abstract class PageRoute extends ModalRoute {
    fullscreenDialog: boolean;
}
export { PageRoute };
declare class PageRouteBuilder extends PageRoute {
    pageBuilder: any;
    transitionsBuilder: any;
    transitionDuration: Duration;
    opaque: boolean;
    barrierDismissible: boolean;
    barrierColor: Color;
    barrierLabel: string;
    maintainState: boolean;
    constructor(namedParameters?: {
        settings?: RouteSettings;
        pageBuilder?: any;
        transitionsBuilder?: any;
        transitionDuration?: Duration;
        opaque?: boolean;
        barrierDismissible?: boolean;
        barrierColor?: Color;
        barrierLabel?: string;
        maintainState?: boolean;
        fullscreenDialog?: boolean;
    });
}
export { PageRouteBuilder };
declare class TransitionBuilderPage extends Page {
    pageBuilder: any;
    transitionsBuilder: any;
    transitionDuration: Duration;
    opaque: boolean;
    barrierDismissible: boolean;
    barrierColor: Color;
    barrierLabel: string;
    maintainState: boolean;
    fullscreenDialog: boolean;
    constructor(namedParameters?: {
        pageBuilder?: any;
        transitionsBuilder?: any;
        transitionDuration?: Duration;
        opaque?: boolean;
        barrierDismissible?: boolean;
        barrierColor?: Color;
        barrierLabel?: string;
        maintainState?: boolean;
        fullscreenDialog?: boolean;
        key?: LocalKey;
        name?: string;
        __mx_arguments?: any;
    });
}
export { TransitionBuilderPage };
declare class _PageBasedPageRouteBuilder extends PageRoute {
    constructor(page?: TransitionBuilderPage);
}
export { _PageBasedPageRouteBuilder };
