//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { MXDartClass } from '@mxflutter/mxflutter-base';
class BasicMessageChannel extends MXDartClass {
    constructor(name, codec, namedParameters = {}) {
        super();
        this.name = name;
        this.codec = codec;
        this.binaryMessenger = namedParameters.binaryMessenger;
        this.className = 'BasicMessageChannel';
    }
}
export { BasicMessageChannel };
class MethodChannel extends MXDartClass {
    constructor(name, codec, binaryMessenger) {
        super();
        this.name = name;
        this.codec = codec;
        this.binaryMessenger = binaryMessenger;
        this.className = 'MethodChannel';
    }
    // MX Modified begin
    invokeMethod(method, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const promiseResult = new Promise((resolve, reject) => {
                globalThis.MXJSAPI.mxJSBridgeMethodChannelInvokeMethod(this.name, method, args, (value) => {
                    if (value !== null) {
                        resolve(value);
                    }
                    else {
                        reject(null);
                    }
                });
            });
            return promiseResult;
        });
    }
    // TODO:
    // handler:function (MethodCall){}
    setMethodCallHandler(handler) {
        globalThis.MXJSAPI.mxJSBridgeMethodChannelSetMethodCallHandler(this.name, handler);
    }
}
export { MethodChannel };
const _invokeMethod = Symbol('_invokeMethod');
class OptionalMethodChannel extends MethodChannel {
    constructor(name, codec) {
        super();
        this['name'] = name;
        this['codec'] = codec;
        this.className = 'OptionalMethodChannel';
    }
}
export { OptionalMethodChannel };
class EventChannel extends MXDartClass {
    constructor(name, codec, binaryMessenger) {
        super();
        this.name = name;
        this.codec = codec;
        this.binaryMessenger = binaryMessenger;
        this.className = 'EventChannel';
    }
}
export { EventChannel };
