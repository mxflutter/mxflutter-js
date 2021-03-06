// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
abstract class MessageCodec extends MXDartClass {}
export { MessageCodec };
class MethodCall extends MXDartClass {
  method: string;
  mx_arguments: any;
  public constructor(method?: string, mx_arguments?: any) {
    super();
    this.method = method;
    this.mx_arguments = mx_arguments;
    this.className = 'MethodCall';
  }
}
export { MethodCall };
abstract class MethodCodec extends MXDartClass {}
export { MethodCodec };
class PlatformException extends MXDartClass {
  code: string;
  message: string;
  details: any;
  stacktrace: string;
  public constructor(namedParameters: {code?: string, message?: string, details?: any, stacktrace?: string} = {}) {
    super();
    this.code = namedParameters.code;
    this.message = namedParameters.message;
    this.details = namedParameters.details;
    this.stacktrace = namedParameters.stacktrace;
    this.className = 'PlatformException';
  }
}
export { PlatformException };
class MissingPluginException extends MXDartClass {
  message: string;
  public constructor(message?: string) {
    super();
    this.message = message;
    this.className = 'MissingPluginException';
  }
}
export { MissingPluginException };
