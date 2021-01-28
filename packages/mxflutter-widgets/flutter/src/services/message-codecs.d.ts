import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class BinaryCodec extends MXDartClass {
}
export { BinaryCodec };
declare class StringCodec extends MXDartClass {
}
export { StringCodec };
declare class JSONMessageCodec extends MXDartClass {
}
export { JSONMessageCodec };
declare class JSONMethodCodec extends MXDartClass {
}
export { JSONMethodCodec };
declare class StandardMessageCodec extends MXDartClass {
}
export { StandardMessageCodec };
declare class StandardMethodCodec extends MXDartClass {
    messageCodec: StandardMessageCodec;
    constructor(messageCodec?: StandardMessageCodec);
}
export { StandardMethodCodec };
