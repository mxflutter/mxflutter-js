import { ChangeNotifier } from '../foundation/change-notifier';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class RestorationManager extends ChangeNotifier {
    rootBucket: RestorationBucket;
    pendingRootBucket: any;
    rootBucketIsValid: boolean;
    isReplacing: boolean;
    debugDoingUpdate: boolean;
    serializationScheduled: boolean;
    bucketsNeedingSerialization: Set<any>;
}
export { RestorationManager };
declare class RestorationBucket extends MXDartClass {
    rawData: Map<any, any>;
    debugOwner: any;
    manager: RestorationManager;
    parent: RestorationBucket;
    restorationId: string;
    claimedChildren: Map<any, any>;
    childrenToAdd: Map<any, any>;
    needsSerialization: boolean;
    debugDisposed: boolean;
    static empty(namedParameters?: {
        restorationId?: string;
        debugOwner?: any;
    }): RestorationBucket;
    static root(namedParameters?: {
        manager?: RestorationManager;
        rawData?: Map<any, any>;
    }): RestorationBucket;
    static child(namedParameters?: {
        restorationId?: string;
        parent?: RestorationBucket;
        debugOwner?: any;
    }): RestorationBucket;
}
export { RestorationBucket };
