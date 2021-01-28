import { BinaryMessenger } from './binary-messenger';
import { MessageCodec, MethodCodec } from './message-codec';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class BasicMessageChannel extends MXDartClass {
    name: string;
    codec: MessageCodec;
    binaryMessenger: BinaryMessenger;
    constructor(name?: string, codec?: MessageCodec, namedParameters?: {
        binaryMessenger?: BinaryMessenger;
    });
}
export { BasicMessageChannel };
declare class MethodChannel extends MXDartClass {
    name: string;
    codec: MethodCodec;
    binaryMessenger: BinaryMessenger;
    constructor(name?: string, codec?: MethodCodec, binaryMessenger?: BinaryMessenger);
    invokeMethod(method: string, args: any): Promise<unknown>;
    setMethodCallHandler(handler: any): void;
}
export { MethodChannel };
declare class OptionalMethodChannel extends MethodChannel {
    constructor(name?: string, codec?: MethodCodec);
}
export { OptionalMethodChannel };
declare class EventChannel extends MXDartClass {
    name: string;
    codec: MethodCodec;
    binaryMessenger: BinaryMessenger;
    constructor(name?: string, codec?: MethodCodec, binaryMessenger?: BinaryMessenger);
}
export { EventChannel };
