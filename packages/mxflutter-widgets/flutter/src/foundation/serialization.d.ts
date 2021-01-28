import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class WriteBuffer extends MXDartClass {
    buffer: any;
    eightBytes: any;
    eightBytesAsList: any;
}
export { WriteBuffer };
declare class ReadBuffer extends MXDartClass {
    data: any;
    position: number;
    constructor(data?: any);
}
export { ReadBuffer };
