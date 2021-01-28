import { FilterQuality } from '../../../mx-dart-sdk';
import { RenderBox } from './box';
declare class TextureBox extends RenderBox {
    textureId: number;
    filterQuality: FilterQuality;
    constructor(namedParameters?: {
        textureId?: number;
        filterQuality?: FilterQuality;
    });
}
export { TextureBox };
