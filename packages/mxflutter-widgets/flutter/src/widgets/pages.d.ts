import { RouteSettings } from './navigator';
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
    reverseTransitionDuration: Duration;
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
        reverseTransitionDuration?: Duration;
        opaque?: boolean;
        barrierDismissible?: boolean;
        barrierColor?: Color;
        barrierLabel?: string;
        maintainState?: boolean;
        fullscreenDialog?: boolean;
    });
}
export { PageRouteBuilder };
