import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class ClipboardData extends MXDartClass {
    text: string;
    constructor(namedParameters?: {
        text?: string;
    });
}
export { ClipboardData };
declare class Clipboard extends MXDartClass {
    static get kTextPlain(): string;
}
export { Clipboard };
