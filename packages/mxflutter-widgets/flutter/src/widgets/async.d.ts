import { Key } from '../foundation/key';
import { StatefulWidget$, State$ } from './framework';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare abstract class StreamBuilderBase extends StatefulWidget$ {
    stream: any;
}
export { StreamBuilderBase };
declare class _StreamBuilderBaseState extends State$ {
    subscription: any;
    summary: any;
}
export { _StreamBuilderBaseState };
declare enum ConnectionState {
    none = "{ \"_name\": \"ConnectionState.none\", \"index\": 0 }",
    waiting = "{ \"_name\": \"ConnectionState.waiting\", \"index\": 1 }",
    active = "{ \"_name\": \"ConnectionState.active\", \"index\": 2 }",
    done = "{ \"_name\": \"ConnectionState.done\", \"index\": 3 }"
}
export { ConnectionState };
declare class AsyncSnapshot extends MXDartClass {
    connectionState: ConnectionState;
    data: any;
    error: any;
    static nothing(): AsyncSnapshot;
    static withData(state?: ConnectionState, data?: any): AsyncSnapshot;
    static withError(state?: ConnectionState, error?: any): AsyncSnapshot;
    inState(state?: ConnectionState): AsyncSnapshot;
}
export { AsyncSnapshot };
declare class StreamBuilder extends StreamBuilderBase {
    builder: any;
    initialData: any;
    constructor(namedParameters?: {
        key?: Key;
        initialData?: any;
        stream?: any;
        builder?: any;
    });
}
export { StreamBuilder };
