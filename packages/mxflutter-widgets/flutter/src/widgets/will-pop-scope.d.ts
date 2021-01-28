import { ModalRoute } from './routes';
import { Key } from '../foundation/key';
import { StatefulWidget$, State$ } from './framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class WillPopScope extends StatefulWidget$ {
    child: MXWidget;
    onWillPop: any;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        onWillPop?: any;
    });
}
export { WillPopScope };
declare class _WillPopScopeState extends State$ {
    route: ModalRoute;
}
export { _WillPopScopeState };
