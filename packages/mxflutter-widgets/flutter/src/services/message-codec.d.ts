import { MXDartClass } from '@mxflutter/mxflutter-base';
declare abstract class MessageCodec extends MXDartClass {
}
export { MessageCodec };
declare class MethodCall extends MXDartClass {
    method: string;
    __mx_arguments: any;
    constructor(method?: string, __mx_arguments?: any);
}
export { MethodCall };
declare abstract class MethodCodec extends MXDartClass {
}
export { MethodCodec };
declare class PlatformException extends MXDartClass {
    code: string;
    message: string;
    details: any;
    constructor(namedParameters?: {
        code?: string;
        message?: string;
        details?: any;
    });
}
export { PlatformException };
declare class MissingPluginException extends MXDartClass {
    message: string;
    constructor(message?: string);
}
export { MissingPluginException };
