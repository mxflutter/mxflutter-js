import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class LicenseParagraph extends MXDartClass {
    text: string;
    indent: number;
    constructor(text?: string, indent?: number);
    static get centeredIndent(): number;
}
export { LicenseParagraph };
declare abstract class LicenseEntry extends MXDartClass {
}
export { LicenseEntry };
declare enum _LicenseEntryWithLineBreaksParserState {
    beforeParagraph = "{ \"_name\": \"_LicenseEntryWithLineBreaksParserState.beforeParagraph\", \"index\": 0 }",
    inParagraph = "{ \"_name\": \"_LicenseEntryWithLineBreaksParserState.inParagraph\", \"index\": 1 }"
}
export { _LicenseEntryWithLineBreaksParserState };
declare class LicenseEntryWithLineBreaks extends LicenseEntry {
    packages: Array<any>;
    text: string;
    constructor(packages?: Array<any>, text?: string);
}
export { LicenseEntryWithLineBreaks };
declare class LicenseRegistry extends MXDartClass {
    static addLicense(collector?: any): MXDartClass;
    static reset(): MXDartClass;
}
export { LicenseRegistry };
