import { MXJSStatefulWidget, MXJSWidgetState } from '../widget/widget';
import { Key, AsyncSnapshot } from '@mxflutter/mxflutter-widgets/material';
declare class FutureBuilder extends MXJSStatefulWidget {
    future: any;
    builder: any;
    initialData: any;
    constructor(namedParameters?: {
        key?: Key;
        future?: any;
        initialData?: any;
        builder?: any;
    });
    createState(): _FutureBuilderState;
}
export { FutureBuilder };
declare class _FutureBuilderState extends MXJSWidgetState {
    protected snapshot: AsyncSnapshot;
    protected activeCallbackIdentity: Object;
    initState(): void;
    didUpdateWidget(oldWidget: any): void;
    build(context: any): any;
    dispose(): void;
    protected subscribe(): void;
    protected unsubscribe(): void;
}
export { _FutureBuilderState };
