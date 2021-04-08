import { Key } from '../foundation/key';
import { SingleChildRenderObjectWidget } from './framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class AnnotatedRegion extends SingleChildRenderObjectWidget {
    value: any;
    sized: boolean;
    constructor(namedParameters?: {
        key?: Key;
        child?: MXWidget;
        value?: any;
        sized?: boolean;
    });
}
export { AnnotatedRegion };
