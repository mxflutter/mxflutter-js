import { ChangeNotifier } from '../foundation/change-notifier';
import { RestorationBucket } from '../services/restoration';
import { Key } from '../foundation/key';
import { StatefulWidget, State, InheritedWidget } from './framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class RestorationScope extends StatefulWidget {
    child: MXWidget;
    restorationId: string;
    constructor(namedParameters?: {
        key?: Key;
        restorationId?: string;
        child?: MXWidget;
    });
}
export { RestorationScope };
declare class _RestorationScopeState extends State {
}
export { _RestorationScopeState };
declare class UnmanagedRestorationScope extends InheritedWidget {
    bucket: RestorationBucket;
    constructor(namedParameters?: {
        key?: Key;
        bucket?: RestorationBucket;
        child?: MXWidget;
    });
}
export { UnmanagedRestorationScope };
declare class RootRestorationScope extends StatefulWidget {
    child: MXWidget;
    restorationId: string;
    constructor(namedParameters?: {
        key?: Key;
        restorationId?: string;
        child?: MXWidget;
    });
}
export { RootRestorationScope };
declare class _RootRestorationScopeState extends State {
    okToRenderBlankContainer: boolean;
    rootBucketValid: boolean;
    rootBucket: RestorationBucket;
    ancestorBucket: RestorationBucket;
    isLoadingRootBucket: boolean;
}
export { _RootRestorationScopeState };
declare abstract class RestorableProperty extends ChangeNotifier {
    disposed: boolean;
    restorationId: string;
    owner: RestorationMixin;
}
export { RestorableProperty };
declare abstract class RestorationMixin extends State {
    bucket: RestorationBucket;
    properties: Map<any, any>;
    debugPropertiesWaitingForReregistration: Array<any>;
    firstRestorePending: boolean;
    currentParent: RestorationBucket;
}
export { RestorationMixin };
