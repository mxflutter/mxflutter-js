import { Listenable, ChangeNotifier } from '../foundation/change-notifier';
import { Notification } from './notification-listener';
import { Key } from '../foundation/key';
import { StatefulWidget, State } from './framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class AutomaticKeepAlive extends StatefulWidget {
    child: MXWidget;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
    });
}
export { AutomaticKeepAlive };
declare class _AutomaticKeepAliveState extends State {
    handles: Map<any, any>;
    child: MXWidget;
    keepingAlive: boolean;
}
export { _AutomaticKeepAliveState };
declare class KeepAliveNotification extends Notification {
    handle: Listenable;
    constructor(handle?: Listenable);
}
export { KeepAliveNotification };
declare class KeepAliveHandle extends ChangeNotifier {
}
export { KeepAliveHandle };
declare abstract class AutomaticKeepAliveClientMixin extends State {
    keepAliveHandle: KeepAliveHandle;
}
export { AutomaticKeepAliveClientMixin };
