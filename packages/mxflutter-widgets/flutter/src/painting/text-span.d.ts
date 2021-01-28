import { TextStyle } from './text-style';
import { GestureRecognizer } from '../gestures/recognizer';
import { InlineSpan } from './inline-span';
declare class TextSpan extends InlineSpan {
    text: string;
    children: Array<any>;
    recognizer: GestureRecognizer;
    semanticsLabel: string;
    constructor(namedParameters?: {
        text?: string;
        children?: Array<any>;
        style?: TextStyle;
        recognizer?: GestureRecognizer;
        semanticsLabel?: string;
    });
}
export { TextSpan };
