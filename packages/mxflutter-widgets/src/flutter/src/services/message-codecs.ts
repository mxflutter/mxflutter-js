//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { WriteBuffer, ReadBuffer } from '../foundation/serialization';
import { MethodCall } from './message-codec';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class BinaryCodec extends MXDartClass {}
export { BinaryCodec };
class StringCodec extends MXDartClass {}
export { StringCodec };
class JSONMessageCodec extends MXDartClass {}
export { JSONMessageCodec };
class JSONMethodCodec extends MXDartClass {}
export { JSONMethodCodec };
class StandardMessageCodec extends MXDartClass {}
export { StandardMessageCodec };
class StandardMethodCodec extends MXDartClass {
  messageCodec: StandardMessageCodec;
  public constructor(messageCodec?: StandardMessageCodec) {
    super();
    this.messageCodec = messageCodec;
    this.className = 'StandardMethodCodec';
  }
}
export { StandardMethodCodec };
