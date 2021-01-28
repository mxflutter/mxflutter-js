import { Key } from '../foundation/key';
import { FilterQuality } from '../../../mx-dart-sdk';
import { LeafRenderObjectWidget } from './framework';
declare class Texture extends LeafRenderObjectWidget {
    textureId: number;
    filterQuality: FilterQuality;
    constructor(namedParameters?: {
        key?: Key;
        textureId?: number;
        filterQuality?: FilterQuality;
    });
}
export { Texture };
