import { Paragraph } from '../../../mx-dart-sdk';
import { RenderBox } from './box';
declare class RenderErrorBox extends RenderBox {
    message: string;
    paragraph: Paragraph;
    constructor(message?: string);
}
export { RenderErrorBox };
