//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
import { MXDartClass } from '@mxflutter/mxflutter-base';
class MessageCodec extends MXDartClass {
}
export { MessageCodec };
class MethodCall extends MXDartClass {
    constructor(method, __mx_arguments) {
        super();
        this.method = method;
        this.__mx_arguments = __mx_arguments;
        this.className = 'MethodCall';
    }
}
export { MethodCall };
class MethodCodec extends MXDartClass {
}
export { MethodCodec };
class PlatformException extends MXDartClass {
    constructor(namedParameters = {}) {
        super();
        this.code = namedParameters.code;
        this.message = namedParameters.message;
        this.details = namedParameters.details;
        this.className = 'PlatformException';
    }
}
export { PlatformException };
class MissingPluginException extends MXDartClass {
    constructor(message) {
        super();
        this.message = message;
        this.className = 'MissingPluginException';
    }
}
export { MissingPluginException };
