import { StatelessWidget } from './framework';
import { ValueKey, Key } from '../foundation/key';
import { MXDartClass, MXWidget } from '@mxflutter/mxflutter-base';
declare class PageStorageKey extends ValueKey {
    constructor(value?: any);
}
export { PageStorageKey };
declare class _StorageEntryIdentifier extends MXDartClass {
    keys: Array<any>;
    constructor(keys?: Array<any>);
}
export { _StorageEntryIdentifier };
declare class PageStorageBucket extends MXDartClass {
    storage: Map<any, any>;
}
export { PageStorageBucket };
declare class PageStorage extends StatelessWidget {
    child: MXWidget;
    bucket: PageStorageBucket;
    constructor(namedParameters?: {
        key?: Key;
        bucket?: PageStorageBucket;
        child?: MXWidget;
    });
}
export { PageStorage };
