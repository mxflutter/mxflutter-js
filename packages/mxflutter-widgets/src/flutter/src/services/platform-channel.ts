//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { BinaryMessenger } from './binary-messenger';
import { MessageCodec, MethodCodec } from './message-codec';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class BasicMessageChannel extends MXDartClass {
  name: string;
  codec: MessageCodec;
  binaryMessenger: BinaryMessenger;
  public constructor(name?: string, codec?: MessageCodec, namedParameters: { binaryMessenger?: BinaryMessenger } = {}) {
    super();
    this.name = name;
    this.codec = codec;
    this.binaryMessenger = namedParameters.binaryMessenger;
    this.className = 'BasicMessageChannel';
  }
}
export { BasicMessageChannel };
class MethodChannel extends MXDartClass {
  name: string;
  codec: MethodCodec;
  binaryMessenger: BinaryMessenger;
  public constructor(name?: string, codec?: MethodCodec, binaryMessenger?: BinaryMessenger) {
    super();
    this.name = name;
    this.codec = codec;
    this.binaryMessenger = binaryMessenger;
    this.className = 'MethodChannel';
  }

  // MX Modified begin
  public async invokeMethod(method: string, args: any) {
    const promiseResult = new Promise((resolve, reject) => {
      globalThis.MXJSAPI.mxJSBridgeMethodChannelInvokeMethod(this.name, method, args, (value) => {
        if (value !== null) {
          resolve(value);
        } else {
          reject(null);
        }
      });
    });

    return promiseResult;
  }

  // TODO:
  // handler:function (MethodCall){}
  public setMethodCallHandler(handler) {
    globalThis.MXJSAPI.mxJSBridgeMethodChannelSetMethodCallHandler(this.name, handler);
  }
  // MX Modified end
}
export { MethodChannel };
const _invokeMethod = Symbol('_invokeMethod');
class OptionalMethodChannel extends MethodChannel {
  public constructor(name?: string, codec?: MethodCodec) {
    super();
    this['name'] = name;
    this['codec'] = codec;
    this.className = 'OptionalMethodChannel';
  }
}
export { OptionalMethodChannel };
class EventChannel extends MXDartClass {
  name: string;
  codec: MethodCodec;
  binaryMessenger: BinaryMessenger;
  public constructor(name?: string, codec?: MethodCodec, binaryMessenger?: BinaryMessenger) {
    super();
    this.name = name;
    this.codec = codec;
    this.binaryMessenger = binaryMessenger;
    this.className = 'EventChannel';
  }
}
export { EventChannel };
