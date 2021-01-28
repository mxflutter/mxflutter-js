import { RenderProxyBox } from '../rendering/proxy-box';
import { Key } from '../foundation/key';
import { ImageFilter } from '../../../mx-dart-sdk';
import { SingleChildRenderObjectWidget } from './framework';
import { MXWidget } from '@mxflutter/mxflutter-base';
declare class ImageFiltered extends SingleChildRenderObjectWidget {
    imageFilter: ImageFilter;
    constructor(namedParameters?: {
        key?: Key;
        imageFilter?: ImageFilter;
        child?: MXWidget;
    });
}
export { ImageFiltered };
declare class _ImageFilterRenderObject extends RenderProxyBox {
    imageFilter: ImageFilter;
    constructor(_imageFilter?: ImageFilter);
}
export { _ImageFilterRenderObject };
