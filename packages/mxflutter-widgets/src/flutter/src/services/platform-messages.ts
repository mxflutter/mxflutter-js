//  MXFlutterFramework
//  Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
//  Use of this source code is governed by a BSD-style license that can be
//  found in the LICENSE file.

import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class BinaryMessages extends MXDartClass {
  static setMessageHandler(channel?: string, handler?: any) {
    var jsObj = new MXDartClass();
    jsObj['channel'] = channel;
    jsObj['handler'] = handler;
    jsObj.className = 'BinaryMessages';
    jsObj['constructorName'] = 'setMessageHandler';
    return jsObj;
  }
  static setMockMessageHandler(channel?: string, handler?: any) {
    var jsObj = new MXDartClass();
    jsObj['channel'] = channel;
    jsObj['handler'] = handler;
    jsObj.className = 'BinaryMessages';
    jsObj['constructorName'] = 'setMockMessageHandler';
    return jsObj;
  }
}
export { BinaryMessages };
