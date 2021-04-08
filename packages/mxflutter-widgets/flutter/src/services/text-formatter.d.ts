import { MXDartClass } from '@mxflutter/mxflutter-base';
declare abstract class TextInputFormatter extends MXDartClass {
}
export { TextInputFormatter };
declare class _SimpleTextInputFormatter extends TextInputFormatter {
    formatFunction: any;
    constructor(formatFunction?: any);
}
export { _SimpleTextInputFormatter };
declare class FilteringTextInputFormatter extends TextInputFormatter {
    filterPattern: any;
    allow: boolean;
    replacementString: string;
    constructor(filterPattern?: any, namedParameters?: {
        allow?: boolean;
        replacementString?: string;
    });
    static allow(filterPattern?: any, namedParameters?: {
        replacementString?: string;
    }): FilteringTextInputFormatter;
    static deny(filterPattern?: any, namedParameters?: {
        replacementString?: string;
    }): FilteringTextInputFormatter;
}
export { FilteringTextInputFormatter };
declare class BlacklistingTextInputFormatter extends FilteringTextInputFormatter {
    constructor(blacklistedPattern?: any, namedParameters?: {
        replacementString?: string;
    });
}
export { BlacklistingTextInputFormatter };
declare class WhitelistingTextInputFormatter extends FilteringTextInputFormatter {
    constructor(whitelistedPattern?: any);
}
export { WhitelistingTextInputFormatter };
declare class LengthLimitingTextInputFormatter extends TextInputFormatter {
    maxLength: number;
    constructor(maxLength?: number);
}
export { LengthLimitingTextInputFormatter };
