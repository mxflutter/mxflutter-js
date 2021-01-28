import { TextRange, TextAffinity, TextPosition } from '../../../mx-dart-sdk';
declare class TextSelection extends TextRange {
    baseOffset: number;
    extentOffset: number;
    affinity: TextAffinity;
    isDirectional: boolean;
    constructor(namedParameters?: {
        baseOffset?: number;
        extentOffset?: number;
        affinity?: TextAffinity;
        isDirectional?: boolean;
    });
    static fromPosition(position?: TextPosition): TextSelection;
}
export { TextSelection };
