import { Offset, Size, Rect } from '../../../mx-dart-sdk';
import { Alignment } from './alignment';
declare class FractionalOffset extends Alignment {
    constructor(dx?: number, dy?: number);
    static get topLeft(): FractionalOffset;
    static get topCenter(): FractionalOffset;
    static get topRight(): FractionalOffset;
    static get centerLeft(): FractionalOffset;
    static get center(): FractionalOffset;
    static get centerRight(): FractionalOffset;
    static get bottomLeft(): FractionalOffset;
    static get bottomCenter(): FractionalOffset;
    static get bottomRight(): FractionalOffset;
    static fromOffsetAndSize(offset?: Offset, size?: Size): FractionalOffset;
    static fromOffsetAndRect(offset?: Offset, rect?: Rect): FractionalOffset;
}
export { FractionalOffset };
