import { RenderProxyBox } from '../rendering/proxy-box';
import { Key } from '../foundation/key';
import { ColorFilter } from '../../../mx-dart-sdk';
import { SingleChildRenderObjectWidget } from './framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class ColorFiltered extends SingleChildRenderObjectWidget {
    colorFilter: ColorFilter;
    constructor(namedParameters?: {
        colorFilter?: ColorFilter;
        child?: MXWidget;
        key?: Key;
    });
}
export { ColorFiltered };
declare class _ColorFilterRenderObject extends RenderProxyBox {
    colorFilter: ColorFilter;
    constructor(_colorFilter?: ColorFilter);
}
export { _ColorFilterRenderObject };
