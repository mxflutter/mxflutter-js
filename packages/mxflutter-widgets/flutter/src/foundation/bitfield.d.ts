import { MXDartClass } from '@mxflutter/mxflutter-base';
declare abstract class BitField extends MXDartClass {
    constructor(length?: number);
    static filled(length?: number, value?: boolean): {
        className: string;
        mirrorID: string;
    };
}
export { BitField };
