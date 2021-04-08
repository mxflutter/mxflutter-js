import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class IconData extends MXDartClass {
    codePoint: number;
    fontFamily: string;
    fontPackage: string;
    matchTextDirection: boolean;
    constructor(codePoint?: number, namedParameters?: {
        fontFamily?: string;
        fontPackage?: string;
        matchTextDirection?: boolean;
    });
}
export { IconData };
