import { TextStyle } from './text-style';
import { DiagnosticableTree } from '../foundation/diagnostics';
import { GestureRecognizer } from '../gestures/recognizer';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class Accumulator extends MXDartClass {
    value: number;
    constructor(_value?: number);
}
export { Accumulator };
declare class InlineSpanSemanticsInformation extends MXDartClass {
    text: string;
    semanticsLabel: string;
    recognizer: GestureRecognizer;
    isPlaceholder: boolean;
    requiresOwnNode: boolean;
    constructor(text?: string, namedParameters?: {
        isPlaceholder?: boolean;
        semanticsLabel?: string;
        recognizer?: GestureRecognizer;
    });
    static get placeholder(): InlineSpanSemanticsInformation;
}
export { InlineSpanSemanticsInformation };
declare abstract class InlineSpan extends DiagnosticableTree {
    style: TextStyle;
}
export { InlineSpan };
