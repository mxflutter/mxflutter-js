import { Matrix4 } from '../../../vector-math-64';
import { RenderBox } from './box';
declare class RenderRotatedBox extends RenderBox {
    quarterTurns: number;
    paintTransform: Matrix4;
    constructor(namedParameters?: {
        quarterTurns?: number;
        child?: RenderBox;
    });
}
export { RenderRotatedBox };
